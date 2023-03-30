/// Common `shard` sub-document logged by Stats and Log.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Shard {
    #[prost(enumeration = "shard::Kind", tag = "1")]
    pub kind: i32,
    /// The name of the catalog task.
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    /// The hex-encoded inclusive beginning of the shard's assigned key range.
    #[prost(string, tag = "3")]
    pub key_begin: ::prost::alloc::string::String,
    /// The hex-encoded inclusive beginning of the shard's assigned r_clock range.
    #[prost(string, tag = "4")]
    pub r_clock_begin: ::prost::alloc::string::String,
}
/// Nested message and enum types in `Shard`.
pub mod shard {
    /// The type of catalog task.
    #[derive(
        Clone,
        Copy,
        Debug,
        PartialEq,
        Eq,
        Hash,
        PartialOrd,
        Ord,
        ::prost::Enumeration
    )]
    #[repr(i32)]
    pub enum Kind {
        InvalidKind = 0,
        Capture = 1,
        Derivation = 2,
        Materialization = 3,
    }
    impl Kind {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Kind::InvalidKind => "invalid_kind",
                Kind::Capture => "capture",
                Kind::Derivation => "derivation",
                Kind::Materialization => "materialization",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "invalid_kind" => Some(Self::InvalidKind),
                "capture" => Some(Self::Capture),
                "derivation" => Some(Self::Derivation),
                "materialization" => Some(Self::Materialization),
                _ => None,
            }
        }
    }
}
/// Common Meta sub-document of Log and Stats documents.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Meta {
    #[prost(string, tag = "1")]
    pub uuid: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Log {
    /// Meta sub-document added by the Flow runtime.
    #[prost(message, optional, tag = "1")]
    pub meta: ::core::option::Option<Meta>,
    /// The shard which produced this document..
    #[prost(message, optional, tag = "2")]
    pub shard: ::core::option::Option<Shard>,
    /// Timestamp corresponding to the start of the transaction.
    /// When aggregating, the timestamp is rounded to various UTC
    /// intervals (for example hour, day, and month).
    #[prost(message, optional, tag = "3")]
    pub timestamp: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(enumeration = "log::Level", tag = "4")]
    pub level: i32,
    /// Message of the log.
    #[prost(string, tag = "5")]
    pub message: ::prost::alloc::string::String,
    /// Structured Fields of the log.
    #[prost(map = "string, string", tag = "6")]
    pub fields_json_map: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
    /// Parent spans of this log event.
    #[prost(message, repeated, tag = "7")]
    pub spans: ::prost::alloc::vec::Vec<Log>,
}
/// Nested message and enum types in `Log`.
pub mod log {
    /// Level of the log.
    #[derive(
        Clone,
        Copy,
        Debug,
        PartialEq,
        Eq,
        Hash,
        PartialOrd,
        Ord,
        ::prost::Enumeration
    )]
    #[repr(i32)]
    pub enum Level {
        UndefinedLevel = 0,
        Error = 1,
        Warn = 2,
        Info = 3,
        Debug = 4,
        Trace = 5,
    }
    impl Level {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Level::UndefinedLevel => "undefined_level",
                Level::Error => "error",
                Level::Warn => "warn",
                Level::Info => "info",
                Level::Debug => "debug",
                Level::Trace => "trace",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "undefined_level" => Some(Self::UndefinedLevel),
                "error" => Some(Self::Error),
                "warn" => Some(Self::Warn),
                "info" => Some(Self::Info),
                "debug" => Some(Self::Debug),
                "trace" => Some(Self::Trace),
                _ => None,
            }
        }
    }
}
/// TODO(johnny): We should evolve this into a consolidated message
/// having a serde serialization corresponding to the ops/stats
/// collection.
///
/// Let's make this the one true representation for stats.
/// So far, I've just done Derive and top-level fields.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Stats {
    /// Meta sub-document added by the Flow runtime.
    #[prost(message, optional, tag = "1")]
    pub meta: ::core::option::Option<Meta>,
    /// The shard which produced this document..
    #[prost(message, optional, tag = "2")]
    pub shard: ::core::option::Option<Shard>,
    /// Timestamp corresponding to the start of the transaction.
    /// When aggregating, the timestamp is rounded to various UTC
    /// intervals (for example hour, day, and month).
    #[prost(message, optional, tag = "3")]
    pub timestamp: ::core::option::Option<::prost_types::Timestamp>,
    /// Duration of time spent evaluating the transaction,
    /// When aggregating, this is total spent evaluating all transactions
    /// within the interval.
    #[prost(double, tag = "4")]
    pub open_seconds_total: f64,
    /// Number of transactions represented by this document.
    #[prost(uint32, tag = "5")]
    pub txn_count: u32,
    #[prost(message, optional, tag = "7")]
    pub derive: ::core::option::Option<stats::Derive>,
}
/// Nested message and enum types in `Stats`.
pub mod stats {
    /// DocsAndBytes represents a count of JSON documents and their
    /// cumulative total size in bytes.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct DocsAndBytes {
        #[prost(uint32, tag = "1")]
        pub docs_total: u32,
        #[prost(uint32, tag = "2")]
        pub bytes_total: u32,
    }
    /// Derivation metrics.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Derive {
        /// A map from transform name (not collection name), to metrics for that transform.
        #[prost(map = "string, message", tag = "1")]
        pub transforms: ::std::collections::HashMap<
            ::prost::alloc::string::String,
            derive::Transform,
        >,
        /// Documents published by the derivation connector.
        #[prost(message, optional, tag = "2")]
        pub published: ::core::option::Option<DocsAndBytes>,
        /// Documents written to the derived collection, after combining over published documents.
        #[prost(message, optional, tag = "3")]
        pub out: ::core::option::Option<DocsAndBytes>,
    }
    /// Nested message and enum types in `Derive`.
    pub mod derive {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Message)]
        pub struct Transform {
            /// The name of the collection that this transform sourced from.
            #[prost(string, tag = "1")]
            pub source: ::prost::alloc::string::String,
            /// Input documents that were read by this transform.
            #[prost(message, optional, tag = "2")]
            pub input: ::core::option::Option<super::DocsAndBytes>,
        }
    }
}
