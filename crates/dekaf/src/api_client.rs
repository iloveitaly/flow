use anyhow::{anyhow, bail, Context};
use bytes::{Bytes, BytesMut};
use futures::{
    lock::{MappedMutexGuard, Mutex, MutexGuard},
    Sink, StreamExt, TryFutureExt,
};
use futures::{SinkExt, Stream, TryStreamExt};
use kafka_protocol::{
    indexmap::{indexmap, IndexMap},
    messages::{
        api_versions_response::ApiVersion,
        create_topics_request::CreatableTopic,
        find_coordinator_request::FindCoordinatorRequestBuilder,
        metadata_request::{MetadataRequestBuilder, MetadataRequestTopic},
        metadata_response::MetadataResponseBroker,
        sasl_authenticate_request::SaslAuthenticateRequestBuilder,
        sasl_handshake_request::SaslHandshakeRequestBuilder,
        ApiKey, ApiVersionsRequest, ApiVersionsResponse, CreateTopicsRequest,
        FindCoordinatorRequest, MetadataRequest, MetadataResponse, RequestHeader, ResponseHeader,
        TopicName,
    },
    protocol::{Builder, Decodable, Encodable, Request, StrBytes, VersionRange},
};
use rsasl::{config::SASLConfig, mechname::Mechname, prelude::SASLClient};
use std::{
    borrow::Cow, boxed::Box, collections::HashMap, fmt::Debug, io, ops::DerefMut, time::Duration,
};
use std::{io::BufWriter, pin::Pin, sync::Arc};
use stream_reconnect::{
    config::DurationIterator, ReconnectOptions, ReconnectStream, UnderlyingStream,
};
use tokio::net::TcpStream;
use tokio_rustls::{
    rustls::{self, pki_types::ServerName, ClientConfig, RootCertStore},
    TlsConnector,
};
use tracing::instrument;
use url::Url;

trait StreamSink<I = Bytes, O = BytesMut, E = std::io::Error>:
    Stream<Item = Result<O, E>> + Sink<I, Error = E> + Unpin + Send
{
}

impl<T, I, O, E> StreamSink<I, O, E> for T where
    T: Stream<Item = Result<O, E>> + Sink<I, Error = E> + Unpin + Send
{
}

struct BoxedKafkaConnection(Pin<Box<dyn StreamSink<Bytes, BytesMut, io::Error> + Send + Unpin>>);

impl Stream for BoxedKafkaConnection {
    type Item = io::Result<BytesMut>;

    fn poll_next(
        mut self: Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Option<Self::Item>> {
        self.0.poll_next_unpin(cx)
    }
}

impl Sink<Bytes> for BoxedKafkaConnection {
    type Error = io::Error;

    fn poll_ready(
        mut self: Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Result<(), Self::Error>> {
        self.0.poll_ready_unpin(cx)
    }

    fn start_send(mut self: Pin<&mut Self>, item: Bytes) -> Result<(), Self::Error> {
        self.0.start_send_unpin(item)
    }

    fn poll_flush(
        mut self: Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Result<(), Self::Error>> {
        self.0.poll_flush_unpin(cx)
    }

    fn poll_close(
        mut self: Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Result<(), Self::Error>> {
        self.0.poll_close_unpin(cx)
    }
}

async fn async_connect(broker_url: &str) -> anyhow::Result<BoxedKafkaConnection> {
    // Establish a TCP connection to the Kafka broker

    let parsed_url = Url::parse(broker_url)?;

    let mut root_cert_store = RootCertStore::empty();
    root_cert_store.extend(webpki_roots::TLS_SERVER_ROOTS.iter().cloned());

    let tls_config = ClientConfig::builder()
        .with_root_certificates(root_cert_store)
        .with_no_client_auth();

    let tls_connector = TlsConnector::from(Arc::new(tls_config));

    let hostname = parsed_url
        .host()
        .ok_or(anyhow!("Broker URL must contain a hostname"))?;
    let port = parsed_url.port().unwrap_or(9092);
    let dnsname = ServerName::try_from(hostname.to_string())?;

    tracing::debug!(port = port,host = ?hostname, "Attempting to connect");
    let tcp_stream = TcpStream::connect(format!("{hostname}:{port}")).await?;

    // Let's keep this stream alive
    let sock_ref = socket2::SockRef::from(&tcp_stream);
    let ka = socket2::TcpKeepalive::new()
        .with_time(Duration::from_secs(20))
        .with_interval(Duration::from_secs(20));
    sock_ref.set_tcp_keepalive(&ka)?;

    let stream = tls_connector.connect(dnsname, tcp_stream).await?;
    tracing::debug!(port = port,host = ?hostname, "Connection established");

    // https://kafka.apache.org/protocol.html#protocol_common
    // All requests and responses originate from the following:
    // > RequestOrResponse => Size (RequestMessage | ResponseMessage)
    // >   Size => int32
    let framed = tokio_util::codec::Framed::new(
        stream,
        tokio_util::codec::LengthDelimitedCodec::builder()
            .big_endian()
            .length_field_length(4)
            .max_frame_length(1 << 27) // 128 MiB
            .new_codec(),
    );

    Ok(BoxedKafkaConnection(Box::pin(framed)))
}

async fn get_supported_sasl_mechanisms(
    params: KafkaConnectionParams,
) -> anyhow::Result<Vec<String>> {
    // In order to pick the best method to use, we need to know the options supported by the server.
    // `SaslHandshakeResponse` contains this list, but you have to send a `SaslHandshakeRequest` to get it,
    // and if you send an invalid mechanism, Kafka will close the connection. So we need to open a throw-away
    // connection and send an invalid `SaslHandshakeRequest` all in order to discover the supported mechanisms.
    let mut new_conn = async_connect(&params.broker_url)
        .await
        .map_err(|e| io::Error::other(e))?;

    let discovery_handshake_req = SaslHandshakeRequestBuilder::default().build()?;

    let handshake_resp = send_request(&mut new_conn, discovery_handshake_req, None).await?;

    let offered_mechanisms: Vec<_> = handshake_resp
        .mechanisms
        .iter()
        .cloned()
        .map(|m| m.to_string())
        .collect();

    tracing::debug!(
        mechanisms = ?offered_mechanisms,
        "Discovered supported SASL mechanisms"
    );

    Ok(offered_mechanisms)
}

async fn send_request<Req: Request + Debug, S: StreamSink>(
    conn: &mut S,
    req: Req,
    header: Option<RequestHeader>,
) -> anyhow::Result<Req::Response> {
    let mut req_buf = BytesMut::new();

    let req_api_key = ApiKey::try_from(Req::KEY).expect("API key should exist");

    let request_header = match header {
        Some(h) => h,
        None => RequestHeader::builder()
            .request_api_key(Req::KEY)
            .request_api_version(Req::VERSIONS.max)
            .build()?,
    };

    request_header.encode(
        &mut req_buf,
        Req::header_version(request_header.request_api_version),
    )?;

    tracing::debug!(api_key_name=?req_api_key, api_key=Req::KEY, api_version=request_header.request_api_version, req=?req, "Sending request");

    req.encode(&mut req_buf, request_header.request_api_version)?;

    // Then write the message
    conn.send(req_buf.freeze()).await?;

    // Now we can read the whole message. Let's not worry about streaming this
    // for the moment. I don't think we'll get messages large enough to cause
    // issues with memory consumption... but I've been wrong about that before.
    let mut response_frame = conn
        .try_next()
        .await?
        .context("connection unexpectedly closed")?;

    let response_header_version =
        req_api_key.response_header_version(request_header.request_api_version);

    let resp_header = ResponseHeader::decode(&mut response_frame, response_header_version).unwrap();

    tracing::debug!(response_header_version, resp_header=?resp_header, "Got response header");

    let resp = Req::Response::decode(&mut response_frame, request_header.request_api_version)?;

    Ok(resp)
}

async fn sasl_auth<S: StreamSink>(conn: &mut S, args: KafkaConnectionParams) -> anyhow::Result<()> {
    let sasl = SASLClient::new(args.sasl_config.clone());

    let mechanisms = get_supported_sasl_mechanisms(args).await?;

    let maybe_offered_mechanisms: Result<Vec<_>, _> = mechanisms
        .iter()
        .map(|m| Mechname::parse(m.as_str().as_bytes()))
        .collect();

    let offered_mechanisms = maybe_offered_mechanisms?;

    // select the best offered mechanism that the user enabled in the `config`
    let mut session = sasl.start_suggested(offered_mechanisms.iter())?;

    let selected_mechanism = session.get_mechname().as_str().to_owned();

    tracing::debug!(mechamism=?selected_mechanism, "Starting SASL request with handshake");

    // Now we know which mechanism we want to request
    let handshake_req = SaslHandshakeRequestBuilder::default()
        .mechanism(StrBytes::from_utf8(Bytes::from(selected_mechanism))?)
        .build()?;

    let handshake_resp = send_request(conn, handshake_req, None).await?;

    if handshake_resp.error_code > 0 {
        let err = kafka_protocol::ResponseError::try_from_code(handshake_resp.error_code)
            .map(|code| format!("{code:?}"))
            .unwrap_or(format!("Unknown error {}", handshake_resp.error_code));
        bail!(
            "Error performing SASL handshake: {err}. Supported mechanisms: {:?}",
            handshake_resp.mechanisms
        );
    }

    let mut state_buf = BufWriter::new(Vec::new());
    let mut state = session.step(None, &mut state_buf)?;

    // SASL can happen over multiple steps
    while state.is_running() {
        let authenticate_request = SaslAuthenticateRequestBuilder::default()
            .auth_bytes(Bytes::from(state_buf.into_inner()?))
            .build()?;

        let auth_resp = send_request(conn, authenticate_request, None).await?;

        if auth_resp.error_code > 0 {
            let err = kafka_protocol::ResponseError::try_from_code(handshake_resp.error_code)
                .map(|code| format!("{code:?}"))
                .unwrap_or(format!("Unknown error {}", handshake_resp.error_code));
            bail!(
                "Error performing SASL authentication: {err} {:?}",
                auth_resp.error_message
            )
        }
        let data = Some(auth_resp.auth_bytes.to_vec());
        state_buf = BufWriter::new(Vec::new());
        state = session.step(data.as_deref(), &mut state_buf)?;
    }

    Ok(())
}

#[derive(Clone)]
struct KafkaConnectionParams {
    broker_url: String,
    sasl_config: Arc<SASLConfig>,
}

impl UnderlyingStream<KafkaConnectionParams, Result<BytesMut, io::Error>, io::Error>
    for BoxedKafkaConnection
{
    fn establish(
        params: KafkaConnectionParams,
    ) -> Pin<Box<dyn futures::Future<Output = Result<Self, io::Error>> + Send>> {
        tracing::debug!("Attempting to establish a new connection!");
        Box::pin(
            async move {
                let mut conn = async_connect(&params.broker_url).await?;
                sasl_auth(&mut conn, params).await?;
                Ok(conn)
            }
            .map_err(|e: anyhow::Error| match e.downcast::<io::Error>() {
                Ok(io_error) => io_error,
                Err(e) => io::Error::other(e),
            }),
        )
    }

    fn is_write_disconnect_error(&self, err: &io::Error) -> bool {
        matches!(err.kind(), io::ErrorKind::BrokenPipe)
    }

    fn is_read_disconnect_error(&self, item: &Result<BytesMut, io::Error>) -> bool {
        if let Err(e) = item {
            let r = self.is_write_disconnect_error(e);
            if r {
                tracing::warn!("Got a read disconnect! {e:?}")
            }
        }

        false
    }

    fn exhaust_err() -> io::Error {
        todo!()
    }
}

type ReconnectKafkaConnection = ReconnectStream<
    BoxedKafkaConnection,
    KafkaConnectionParams,
    Result<BytesMut, io::Error>,
    io::Error,
>;

/// Exposes a low level Kafka wire protocol client. Used when we need to
/// make API calls at the wire protocol level, as opposed to higher-level producer/consumer
/// APIs that Kafka client libraries usually expose. Currently used to serve
/// the group management protocol requests by proxying to a real Kafka broker.
#[derive(Clone)]
pub struct KafkaApiClient {
    /// A raw IO stream to the Kafka broker.
    connection: Arc<Mutex<ReconnectKafkaConnection>>,
    url: String,
    sasl_config: Arc<SASLConfig>,
    versions: ApiVersionsResponse,
}

impl KafkaApiClient {
    #[instrument(skip(sasl_config))]
    pub async fn connect(broker_url: &str, sasl_config: Arc<SASLConfig>) -> anyhow::Result<Self> {
        let mut conn = ReconnectKafkaConnection::connect_with_options(
            KafkaConnectionParams {
                broker_url: broker_url.to_owned(),
                sasl_config: sasl_config.clone(),
            },
            ReconnectOptions::new()
                .with_on_connect_fail_callback(|| {
                    tracing::warn!("Failed to connect to upstream kafka broker")
                })
                .with_on_disconnect_callback(|| {
                    tracing::warn!(
                        "Connection to upstream kafka broker failed, attempting to reconnect"
                    )
                })
                .with_exit_if_first_connect_fails(true)
                .with_retries_generator(get_reconnect_strategy),
        )
        .await?;

        let versions = send_request(&mut conn, ApiVersionsRequest::default(), None).await?;

        Ok(Self {
            connection: Arc::new(Mutex::new(conn)),
            url: broker_url.to_string(),
            sasl_config: sasl_config,
            versions,
            coordinators: Arc::new(Mutex::new(HashMap::new())),
        })
    }

    /// Send a request and wait for the response. Per Kafka wire protocol docs:
    /// The server guarantees that on a single TCP connection, requests will be processed in the order
    /// they are sent and responses will return in that order as well. The broker's request processing
    /// allows only a single in-flight request per connection in order to guarantee this ordering.
    /// https://kafka.apache.org/protocol.html
    pub async fn send_request<Req: Request + Debug>(
        &self,
        req: Req,
        header: Option<RequestHeader>,
    ) -> anyhow::Result<Req::Response> {
        // TODO: This could be optimized by pipelining.
        let mut conn = self.connection.lock().await;

        send_request(conn.deref_mut(), req, header).await
    }


    pub fn supported_versions<R: Request>(&self) -> anyhow::Result<ApiVersion> {
        let api_key = R::KEY;

        let version = self
            .versions
            .api_keys
            .get(&api_key)
            .context(format!("Unknown API key {api_key}"))?;

        Ok(version.to_owned())
    }
}

fn get_reconnect_strategy() -> DurationIterator {
    let initial_attempts = vec![
        Duration::from_secs(0),
        Duration::from_secs(5),
        Duration::from_secs(10),
    ];

    let repeat = std::iter::repeat(Duration::from_secs(10));

    let forever_iterator = initial_attempts.into_iter().chain(repeat);

    Box::new(forever_iterator)
}
