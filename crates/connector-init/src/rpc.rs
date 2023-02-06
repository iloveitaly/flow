use super::codec::{reader_to_message_stream, Codec};

use futures::{StreamExt, TryStreamExt};
use std::collections::HashMap;
use tokio::io::{AsyncBufReadExt, AsyncWriteExt};

/// Status is an error representation that combines a well-known error
/// code with a descriptive error message.
type Status = tonic::Status;

/// Process a unary RPC `op` which is delegated to the connector at `entrypoint`.
pub async fn unary<In, Out>(
    entrypoint: &[String],
    codec: Codec,
    envs: &HashMap<String, String>,
    op: &str,
    request: In,
) -> Result<Out, Status>
where
    In: prost::Message + proto_convert::IntoMessages + 'static,
    Out: prost::Message + proto_convert::FromMessage + Default + Unpin,
{
    let requests = futures::stream::once(async { Ok(request) });
    let responses = bidi(entrypoint, codec, envs, op, requests)?;
    let mut responses: Vec<Out> = responses.try_collect().await?;

    let response = responses.pop();
    match (response, responses.is_empty()) {
        (Some(response), true) => Ok(response),
        (Some(_), false) => Err(Status::internal(
            "rpc is expected to be unary but it returned multiple responses",
        )),
        (None, _) => Err(Status::internal(
            "rpc is expected to be unary but it returned no response",
        )),
    }
}

/// Process a bi-directional RPC `op` which is delegated to the connector at `entrypoint`.
pub fn bidi<In, Out, InStream>(
    entrypoint: &[String],
    codec: Codec,
    envs: &HashMap<String, String>,
    op: &str,
    requests: InStream,
) -> Result<impl futures::Stream<Item = Result<Out, Status>>, Status>
where
    In: prost::Message + proto_convert::IntoMessages + 'static,
    Out: prost::Message + proto_convert::FromMessage + Default,
    InStream: futures::Stream<Item = Result<In, Status>> + Send + 'static,
{
    // Extend `entrypoint` with `op`, then split into the binary and its arguments.
    let entrypoint = entrypoint
        .iter()
        .map(String::as_str)
        .chain(std::iter::once(op))
        .collect::<Vec<_>>();
    let (binary, args) = entrypoint.split_first().unwrap();

    tracing::info!(%binary, ?args, "invoking connector");

    let mut connector = tokio::process::Command::new(binary)
        .stdin(std::process::Stdio::piped())
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::piped())
        .args(args)
        .envs(envs)
        .kill_on_drop(true)
        .spawn()
        .map_err(|err| map_status("could not start connector entrypoint", err))?;

    // Map connector's stdout into a stream of output messages.
    let responses = reader_to_message_stream(
        codec,
        connector.stdout.take().expect("stdout is piped"),
        16 * 1024, // Minimum buffer capacity.
    )
    .map_err(|err| map_status("failed to process connector output", err));
    // Spawn a concurrent task that services the connector and forwards to its stdin.
    let connector = tokio::spawn(service_connector(connector, codec, requests));
    // Ensure `connector` is aborted (and the process killed) if our response stream is dropped.
    let connector = AutoAbortHandle(connector);
    // Map to a Stream that awaits `connector` and returns EOF, or returns its error.
    let connector = futures::stream::try_unfold(connector, |connector| async move {
        let () = connector.await.expect("service_connector finishes")?;
        Ok(None)
    });
    // Chain `responses` with the final success (empty) or error Status of `connector`.
    Ok(responses.chain(connector))
}

/// Service connector by jointly waiting for it to exit, and for its stderr to complete.
/// While waiting, also read from `stream` and forward to the connector's stdin.
///
/// Note that the connector _should_ but is not *obligated* to consume its stdin.
/// As such, an I/O error (e.x. a broken pipe) or unconsumed stream remainder
/// is logged but is not considered an error.
async fn service_connector<M, S>(
    mut connector: tokio::process::Child,
    codec: Codec,
    stream: S,
) -> Result<(), Status>
where
    M: prost::Message + proto_convert::IntoMessages + 'static,
    S: futures::Stream<Item = Result<M, Status>>,
{
    let mut stdin = connector.stdin.take().expect("connector stdin is a pipe");
    let stderr = connector.stderr.take().expect("connector stderr is a pipe");

    // Future which processes decoded logs from the connector's stderr, forwarding to
    // our own stderr and, when stderr closes, resolving to a smallish ring-buffer of
    // the very last stderr output.
    let stderr = process_logs(
        stderr,
        ops::stderr_log_handler,
        time::OffsetDateTime::now_utc,
        8192,
    );

    // Future which awaits the connector's exit and stderr result, and returns Ok(())
    // if it exited successfully or an error with embedded stderr content otherwise.
    let exit = async {
        let (wait, stderr) = futures::join!(connector.wait(), stderr);
        let status = wait.map_err(|err| map_status("failed to wait for connector", err))?;

        if !status.success() {
            tracing::error!(%status, "connector failed");
            Err(Status::internal(format!(
                "connector failed ({status}) with stderr:\n{stderr}"
            )))
        } else {
            tracing::info!(%status, "connector exited");
            Ok(())
        }
    };

    tokio::pin!(exit, stream);

    loop {
        let message: Option<Result<M, Status>> = tokio::select! {
            exit = &mut exit => {
                tracing::warn!("connector exited with unconsumed input stream remainder");
                return exit;
            }
            message = stream.next() => message,
        };

        let Some(Ok(message)) = message else {
            if let Some(Err(error)) = message {
                tracing::error!(%error, "failed to read next runtime request");
            }
            std::mem::drop(stdin); // Forward EOF to connector.
            return exit.await;
        };

        if let Err(error) = stdin.write_all(&codec.encode(message)).await {
            tracing::warn!(%error, "i/o error writing to connector stdin");
        }
    }
}

/// Decode ops::Logs from the AsyncRead, passing each to the given handler,
/// and also accumulate up to `ring_capacity` of final stderr output
/// which is returned upon the first clean EOF or other error of the reader.
async fn process_logs<R, H, T>(reader: R, handler: H, timesource: T, ring_capacity: usize) -> String
where
    R: tokio::io::AsyncRead + Unpin,
    H: Fn(ops::Log),
    T: Fn() -> time::OffsetDateTime,
{
    let mut reader = tokio::io::BufReader::new(reader);
    let mut ring = std::collections::VecDeque::<u8>::with_capacity(ring_capacity);
    let mut line = String::new();
    let decoder = ops::decode::Decoder::new(timesource);

    loop {
        line.clear();

        match reader.read_line(&mut line).await {
            Err(error) => {
                tracing::error!(%error, "failed to read from connector stderr");
                break;
            }
            Ok(0) => break, // Clean EOF.
            Ok(_) => (),
        }

        // Drop lines from the head of the ring while there's insufficient
        // capacity for the current `line`. Then push `line`.
        // We (currently) allow a single line to violate `ring_capacity`.
        while !ring.is_empty() && ring.len() + line.len() > ring_capacity {
            match ring.iter().position(|c| *c == b'\n') {
                Some(ind) => {
                    ring.drain(..ind + 1);
                }
                None => ring.clear(),
            }
        }
        let (log, consume) = decoder.line_to_log(&line, reader.buffer());

        // Extend `ring` with `line` and the consumed portion of the look-ahead buffer.
        ring.extend(
            line.as_bytes()
                .iter()
                .chain(reader.buffer().iter().take(consume)),
        );
        reader.consume(consume);

        handler(log);
    }

    String::from_utf8_lossy(ring.make_contiguous()).to_string()
}

fn map_status<E: Into<anyhow::Error>>(message: &'static str, err: E) -> Status {
    Status::internal(format!("{:#}", anyhow::anyhow!(err).context(message)))
}

#[cfg(test)]
mod test {
    use super::{bidi, process_logs, unary, Codec};
    use std::collections::HashMap;

    use futures::StreamExt;
    use proto_flow::flow::TestSpec;

    #[tokio::test]
    async fn test_log_processing() {
        let fixture = [
            "hi",
            r#"{"some_log":"value"}"#,
            "a failed walrus appears\t\r",
            r#"{"msg":"hi","lvl":"debug","other":["thing one","thing two"],"field":"with a long value which overflows the ring"}  "#,
            "to boldly go",
            "   smol(1)",
        ]
        .join("\n") + "\n";

        let seq = std::cell::RefCell::new(0);
        let timesource = || {
            let mut seq = seq.borrow_mut();
            *seq += 10;
            time::OffsetDateTime::from_unix_timestamp(1660000000 + *seq).unwrap()
        };

        let logs = std::cell::RefCell::new(Vec::new());
        let recent = process_logs(
            fixture.as_bytes(),
            |log| logs.borrow_mut().push(log),
            timesource,
            64,
        )
        .await;

        // Expect a bounded amount of recent logs are returned.
        insta::assert_snapshot!(recent, @r###"
        to boldly go
           smol(1)
        "###);

        // All logs were decoded and mapped into their structured equivalents.
        insta::assert_snapshot!(serde_json::to_string_pretty(&logs).unwrap(), @r###"
        [
          {
            "ts": "2022-08-08T23:06:50Z",
            "level": "warn",
            "message": "hi"
          },
          {
            "ts": "2022-08-08T23:07:00Z",
            "level": "warn",
            "message": "",
            "fields": {
              "some_log": "value"
            }
          },
          {
            "ts": "2022-08-08T23:07:10Z",
            "level": "error",
            "message": "a failed walrus appears"
          },
          {
            "ts": "2022-08-08T23:07:20Z",
            "level": "debug",
            "message": "hi",
            "fields": {
              "field": "with a long value which overflows the ring",
              "other": ["thing one","thing two"]
            }
          },
          {
            "ts": "2022-08-08T23:07:30Z",
            "level": "warn",
            "message": "to boldly go\n   smol(1)"
          }
        ]
        "###);
    }

    #[tokio::test]
    async fn test_bidi_cat() {
        for codec in [Codec::Proto, Codec::Json] {
            let requests = futures::stream::repeat_with(|| {
                Ok(TestSpec {
                    test: "hello world".to_string(),
                    ..Default::default()
                })
            })
            .take(2); // Bounded stream of two inputs.

            // Let "cat" run to completion and collect its output messages.
            // Note that "cat" will only exit if we properly close its stdin after sending all inputs.
            let responses: Vec<Result<TestSpec, _>> =
                bidi(&["cat".to_string()], codec, &HashMap::new(), "-", requests)
                    .unwrap()
                    .collect()
                    .await;

            insta::assert_debug_snapshot!(responses, @r###"
        [
            Ok(
                TestSpec {
                    test: "hello world",
                    steps: [],
                },
            ),
            Ok(
                TestSpec {
                    test: "hello world",
                    steps: [],
                },
            ),
        ]
        "###);
        }
    }

    #[tokio::test]
    async fn test_bidi_true() {
        let requests = futures::stream::repeat_with(|| {
            Ok(TestSpec {
                test: "hello world".to_string(),
                ..Default::default()
            })
        }); // Unbounded stream.

        // "true" exits immediately with success, without reading our unbounded stream of inputs.
        let responses: Vec<Result<TestSpec, _>> = bidi(
            &["true".to_string()],
            Codec::Proto,
            &HashMap::new(),
            "",
            requests,
        )
        .unwrap()
        .collect()
        .await;

        insta::assert_debug_snapshot!(responses, @r###"
        []
        "###);
    }

    #[tokio::test]
    async fn test_bidi_cat_error() {
        for codec in [Codec::Proto, Codec::Json] {
            let requests = futures::stream::repeat_with(|| {
                Ok(TestSpec {
                    test: "hello world".to_string(),
                    ..Default::default()
                })
            }); // Unbounded stream.

            let responses: Vec<Result<TestSpec, _>> = bidi(
                &["cat".to_string()],
                codec,
                &HashMap::new(),
                "/this/path/does/not/exist",
                requests,
            )
            .unwrap()
            .collect()
            .await;

            insta::assert_debug_snapshot!(responses, @r###"
        [
            Err(
                Status {
                    code: Internal,
                    message: "connector failed (exit status: 1) with stderr:\ncat: /this/path/does/not/exist: No such file or directory\n",
                    source: None,
                },
            ),
        ]
        "###);
        }
    }

    #[tokio::test]
    async fn test_bidi_cat_bad_output_and_error() {
        let requests = futures::stream::repeat_with(|| {
            Ok(TestSpec {
                test: "hello world".to_string(),
                ..Default::default()
            })
        }); // Unbounded stream.

        // Model a connector that both writes bad output, and also fails with an error.
        // We'll map this into two errors of the response stream, though tonic is only
        // able to log the first of these. We additionally have tracing::error logging
        // which ensures both make it to the ops log collection. Unfortunately there's
        // no reliable way to conjoin these errors, as a connector can write bad output
        // or even close its stdout without actually exiting.
        let responses: Vec<Result<TestSpec, _>> = bidi(
            &["cat".to_string(), "/etc/hosts".to_string()],
            Codec::Proto,
            &HashMap::new(),
            "/this/path/does/not/exist",
            requests,
        )
        .unwrap()
        .collect()
        .await;

        insta::assert_debug_snapshot!(responses, @r###"
        [
            Err(
                Status {
                    code: Internal,
                    message: "failed to process connector output: connector wrote a partial message and then closed its output",
                    source: None,
                },
            ),
            Err(
                Status {
                    code: Internal,
                    message: "connector failed (exit status: 1) with stderr:\ncat: /this/path/does/not/exist: No such file or directory\n",
                    source: None,
                },
            ),
        ]
        "###);
    }

    #[tokio::test]
    async fn test_unary_cat() {
        for codec in [Codec::Proto, Codec::Json] {
            let fixture = TestSpec {
                test: "hello world".to_string(),
                ..Default::default()
            };

            let out: TestSpec = unary(
                &["cat".to_string()],
                codec,
                &HashMap::new(),
                "-",
                fixture.clone(),
            )
            .await
            .unwrap();
            assert_eq!(out, fixture);
        }
    }

    #[tokio::test]
    async fn test_unary_too_few_outputs() {
        for codec in [Codec::Proto, Codec::Json] {
            let fixture = TestSpec {
                test: "hello world".to_string(),
                ..Default::default()
            };

            let out: Result<TestSpec, _> = unary(
                &["true".to_string()],
                codec,
                &HashMap::new(),
                "",
                fixture.clone(),
            )
            .await;
            insta::assert_debug_snapshot!(out, @r###"
        Err(
            Status {
                code: Internal,
                message: "rpc is expected to be unary but it returned no response",
                source: None,
            },
        )
        "###);
        }
    }
}

struct AutoAbortHandle<T>(tokio::task::JoinHandle<T>);

impl<T> std::future::Future for AutoAbortHandle<T> {
    type Output = Result<T, tokio::task::JoinError>;

    fn poll(
        mut self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Self::Output> {
        unsafe { std::pin::Pin::new_unchecked(&mut self.0) }.poll(cx)
    }
}

impl<T> Drop for AutoAbortHandle<T> {
    fn drop(&mut self) {
        self.0.abort()
    }
}
