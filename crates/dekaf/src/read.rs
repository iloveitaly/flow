use super::{Collection, Partition};
use anyhow::bail;
use futures::{pin_mut, TryStreamExt};
use gazette::journal::{ReadJsonLine, ReadJsonLines};
use gazette::{broker, journal, uuid};
use itertools::Itertools;

pub struct Read {
    /// Journal offset to be served by this Read.
    /// (Actual next offset may be larger if a fragment was removed).
    pub(crate) offset: i64,
    /// Most-recent journal write head observed by this Read.
    pub(crate) last_write_head: i64,

    key_ptr: Vec<doc::Pointer>, // Pointers to the document key.
    key_schema: avro::Schema,   // Avro schema when encoding keys.
    key_schema_id: u32,         // Registry ID of the key's schema.
    meta_op_ptr: doc::Pointer,  // Location of document op (currently always `/_meta/op`).
    not_before: uuid::Clock,    // Not before this clock.
    stream: ReadJsonLines,      // Underlying document stream.
    uuid_ptr: doc::Pointer,     // Location of document UUID.
    value_schema: avro::Schema, // Avro schema when encoding values.
    value_schema_id: u32,       // Registry ID of the value's schema.

    // Keep these details around so we can create a new ReadRequest if we need to skip forward
    journal_name: String,
    client: journal::Client,
}

impl Read {
    pub fn new(
        client: journal::Client,
        collection: &Collection,
        partition: &Partition,
        offset: i64,
        key_schema_id: u32,
        value_schema_id: u32,
    ) -> Self {
        let (not_before_sec, _) = collection.not_before.to_unix();

        let stream = client.clone().read_json_lines(
            broker::ReadRequest {
                offset,
                block: true,
                journal: partition.spec.name.clone(),
                begin_mod_time: not_before_sec as i64,
                ..Default::default()
            },
            // Each ReadResponse can be up to 130K. Buffer up to ~4MB so that
            // `dekaf` can do lots of useful transcoding work while waiting for
            // network delay of the next fetch request.
            30,
        );

        Self {
            offset,
            last_write_head: offset,

            key_ptr: collection.key_ptr.clone(),
            key_schema: collection.key_schema.clone(),
            key_schema_id,
            meta_op_ptr: doc::Pointer::from_str("/_meta/op"),
            not_before: collection.not_before,
            stream,
            uuid_ptr: collection.uuid_ptr.clone(),
            value_schema: collection.value_schema.clone(),
            value_schema_id,

            journal_name: partition.spec.name.clone(),
            client,
        }
    }

    async fn skip_to_next_doc(&mut self) -> anyhow::Result<()> {
        let (not_before_sec, _) = self.not_before.to_unix();
        let req = broker::ReadRequest {
            offset: self.offset,
            block: true,
            journal: self.journal_name.clone(),
            begin_mod_time: not_before_sec as i64,
            ..Default::default()
        };

        let read = self.client.clone().read(req);
        pin_mut!(read);

        while let Some(response) = read.try_next().await? {
            if let Some((newline_loc, _)) = response
                .content
                .into_iter()
                .find_position(|ch| ch.eq(&b'\n'))
            {
                let new_offset = response.offset + newline_loc as i64;

                tracing::debug!(
                    journal = self.journal_name.clone(),
                    new_offset = new_offset,
                    prev_offset = self.offset,
                    diff = new_offset - self.offset,
                    "Skipped to next valid offset"
                );

                self.offset = new_offset;

                // Is this correct?
                self.last_write_head = new_offset;

                self.stream = self.client.clone().read_json_lines(
                    broker::ReadRequest {
                        offset: new_offset,
                        block: true,
                        journal: self.journal_name.clone(),
                        begin_mod_time: not_before_sec as i64,
                        ..Default::default()
                    },
                    // Each ReadResponse can be up to 130K. Buffer up to ~4MB so that
                    // `dekaf` can do lots of useful transcoding work while waiting for
                    // network delay of the next fetch request.
                    30,
                );
                return Ok(());
            }
        }
        bail!("Unable to find next document")
    }

    pub async fn next_batch(
        mut self,
        target_bytes: usize,
        target_docs: Option<usize>,
    ) -> anyhow::Result<(Self, usize, bytes::Bytes)> {
        use kafka_protocol::records::{
            Compression, Record, RecordBatchEncoder, RecordEncodeOptions, TimestampType,
        };

        let mut records: Vec<Record> = Vec::new();
        let mut records_bytes: usize = 0;

        // We Avro encode into Vec instead of BytesMut because Vec is
        // better optimized for pushing a single byte at a time.
        let mut tmp = Vec::new();
        let mut buf = bytes::BytesMut::new();

        let mut has_had_parsing_error = false;

        while records_bytes < target_bytes
            && target_docs.map_or(true, |target_docs| records.len() < target_docs)
        {
            let read = match tokio::select! {
                biased; // Attempt to read before yielding.

                read = self.stream.try_next() => read,

                () = std::future::ready(()), if records_bytes != 0 => {
                    break; // Yield if we have records and the stream isn't ready.
                }
            } {
                Ok(data) => Ok(data.expect("blocking gazette client read never returns EOF")),
                Err(gazette::Error::Parsing(_, _)) if !has_had_parsing_error => {
                    has_had_parsing_error = true;

                    self.skip_to_next_doc().await?;
                    continue;
                }
                Err(e) => Err(e),
            }?;

            let (root, next_offset) = match read {
                ReadJsonLine::Meta(response) => {
                    self.last_write_head = response.write_head;
                    continue;
                }
                ReadJsonLine::Doc { root, next_offset } => (root, next_offset),
            };
            let Some(doc::ArchivedNode::String(uuid)) = self.uuid_ptr.query(root.get()) else {
                anyhow::bail!(
                    "document at offset {} does not have a valid UUID",
                    self.offset
                );
            };
            let (producer, clock, flags) = gazette::uuid::parse_str(uuid.as_str())?;

            if clock < self.not_before {
                continue;
            }

            // Is this a non-content control document, such as a transaction ACK?
            let is_control = flags.is_ack();
            // Is this a deletion?
            let is_deletion = matches!(
                self.meta_op_ptr.query(root.get()),
                Some(doc::ArchivedNode::String(op)) if op.as_str() == "d",
            );

            tmp.reserve(root.bytes().len()); // Avoid small allocations.
            let (unix_seconds, unix_nanos) = clock.to_unix();

            // Encode the key.
            let key = if is_control {
                None
            } else {
                tmp.push(0);
                tmp.extend(self.key_schema_id.to_be_bytes());
                () = avro::encode_key(&mut tmp, &self.key_schema, root.get(), &self.key_ptr)?;

                records_bytes += tmp.len();
                buf.extend_from_slice(&tmp);
                tmp.clear();
                Some(buf.split().freeze())
            };

            // Encode the value.
            let value = if is_control || is_deletion {
                None
            } else {
                tmp.push(0);
                tmp.extend(self.value_schema_id.to_be_bytes());
                () = avro::encode(&mut tmp, &self.value_schema, root.get())?;

                records_bytes += tmp.len();
                buf.extend_from_slice(&tmp);
                tmp.clear();
                Some(buf.split().freeze())
            };

            self.offset = next_offset;

            // Map documents into a Kafka offset which is their last
            // inclusive byte index within the document.
            //
            // Kafka adds one for its next fetch_offset, and this behavior
            // means its next fetch will be a valid document begin offset.
            //
            // This behavior also lets us subtract one from the journal
            // write head or a fragment end offset to arrive at a
            // logically correct Kafka high water mark which a client
            // can expect to read through.
            //
            // Note that sequence must increment at the same rate
            // as offset for efficient record batch packing.
            let kafka_offset = next_offset - 1;

            records.push(Record {
                control: false,
                headers: Default::default(),
                key,
                offset: kafka_offset,
                partition_leader_epoch: 1,
                producer_epoch: 1,
                producer_id: producer.as_i64(),
                sequence: kafka_offset as i32,
                timestamp: unix_seconds as i64 * 1000 + unix_nanos as i64 / 1_000_000, // Map into millis.
                timestamp_type: TimestampType::LogAppend,
                transactional: false,
                value,
            });
        }

        let opts = RecordEncodeOptions {
            compression: Compression::Lz4,
            version: 2,
        };
        RecordBatchEncoder::encode(&mut buf, records.iter(), &opts)
            .expect("record encoding cannot fail");

        tracing::debug!(
            count = records.len(),
            first_offset = records.first().map(|r| r.offset).unwrap_or_default(),
            last_offset = records.last().map(|r| r.offset).unwrap_or_default(),
            last_write_head = self.last_write_head,
            ratio = buf.len() as f64 / (records_bytes + 1) as f64,
            records_bytes,
            "returning records"
        );

        Ok((self, records.len(), buf.freeze()))
    }
}
