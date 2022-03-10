use rusqlite;

/// SQLType is a type which persists to and from sqlite.
pub trait SQLType: Sized {
    fn sql_type() -> &'static str;
    fn to_sql(&self) -> rusqlite::Result<rusqlite::types::ToSqlOutput<'_>>;
    fn column_result(value: rusqlite::types::ValueRef<'_>) -> rusqlite::types::FromSqlResult<Self>;
    fn debug_view<'a>(&'a self) -> SqlDebugView<'a> {
        SqlDebugView::Primitive(self.to_sql().unwrap())
    }
}

/// TableRow is a type which is a row within a Table.
pub trait TableRow: Sized {
    type Table: Table;

    /// Persist this row, using a Statement previously prepared from Table::insert_sql().
    fn persist<'stmt>(&self, stmt: &mut rusqlite::Statement<'stmt>) -> rusqlite::Result<()>;
    /// Scan an instance from a Row shape queried via Table::select_sql().
    fn scan<'stmt>(row: &rusqlite::Row<'stmt>) -> rusqlite::Result<Self>;
}

/// Table is the non-object-safe portion of the type of a Table.
pub trait Table: Sized + TableObj {
    type Row: TableRow;

    /// SQL for inserting table rows.
    fn insert_sql() -> String;
    /// SQL for querying table rows.
    /// Filtering WHERE clauses may be appended to the returned string.
    fn select_sql() -> String;
}

/// TableObj is the object-safe portion of the type of a Table.
pub trait TableObj {
    /// SQL name for this Table.
    fn sql_name(&self) -> &'static str;
    /// SQL for creating this Table schema.
    fn create_table_sql(&self) -> String;
    /// Persist all rows of this Table into the database.
    fn persist_all(&self, db: &rusqlite::Connection) -> rusqlite::Result<()>;
    /// Load all rows from the database into this Table.
    fn load_all(&mut self, db: &rusqlite::Connection) -> rusqlite::Result<()>;
    /// Load rows from the database matching a WHERE clause and parameters.
    fn load_where(
        &mut self,
        db: &rusqlite::Connection,
        filter: &str,
        params: &[&dyn rusqlite::types::ToSql],
    ) -> rusqlite::Result<()>;
}

/// Trait for accepting arguments which may be owned, or can be cloned.
pub trait OwnOrClone<T> {
    fn own_or_clone(self) -> T;
}

impl<T> OwnOrClone<T> for T {
    fn own_or_clone(self) -> T {
        self
    }
}

impl<'a, T: Clone> OwnOrClone<T> for &'a T {
    fn own_or_clone(self) -> T {
        self.clone()
    }
}

/// Wrapper impl which makes any T: SQLType have a NULL-able Option<T> SQLType.
impl<T: SQLType> SQLType for Option<T> {
    fn sql_type() -> &'static str {
        T::sql_type()
    }
    fn to_sql(&self) -> rusqlite::Result<rusqlite::types::ToSqlOutput<'_>> {
        match self {
            None => Ok(rusqlite::types::ToSqlOutput::Owned(
                rusqlite::types::Value::Null,
            )),
            Some(inner) => inner.to_sql(),
        }
    }
    fn column_result(value: rusqlite::types::ValueRef<'_>) -> rusqlite::types::FromSqlResult<Self> {
        if let rusqlite::types::ValueRef::Null = value {
            Ok(None)
        } else {
            T::column_result(value).map(Option::Some)
        }
    }
    fn debug_view<'a>(&'a self) -> SqlDebugView<'a> {
        match self {
            Some(inner) => inner.debug_view(),
            None => SqlDebugView::Primitive(self.to_sql().unwrap()),
        }
    }
}

/// Persist a dynamic set of tables to the database, creating their table schema
/// if they don't yet exist, and writing all row records.
pub fn persist_tables(db: &rusqlite::Connection, tables: &[&dyn TableObj]) -> rusqlite::Result<()> {
    db.execute_batch("BEGIN IMMEDIATE;")?;
    for table in tables {
        db.execute_batch(&table.create_table_sql())?;
        table.persist_all(db)?;
    }
    db.execute_batch("COMMIT;")?;
    Ok(())
}

/// Load all rows of a dynamic set of tables from the database.
pub fn load_tables(
    db: &rusqlite::Connection,
    tables: &mut [&mut dyn TableObj],
) -> rusqlite::Result<()> {
    db.execute_batch("BEGIN;")?;
    for table in tables {
        table.load_all(db)?;
    }
    db.execute_batch("COMMIT;")?;
    Ok(())
}

/// primitive_sql_types establishes SQLType implementations for
/// types already having rusqlite FromSql / ToSql implementations.
macro_rules! primitive_sql_types {
    ($($rust_type:ty => $sql_type:literal,)*) => {
        $(
        impl SQLType for $rust_type {
            fn sql_type() -> &'static str {
                $sql_type
            }
            fn to_sql(&self) -> rusqlite::Result<rusqlite::types::ToSqlOutput<'_>> {
                <Self as rusqlite::types::ToSql>::to_sql(self)
            }
            fn column_result(
                value: rusqlite::types::ValueRef<'_>,
            ) -> rusqlite::types::FromSqlResult<Self> {
                <Self as rusqlite::types::FromSql>::column_result(value)
            }
        }
        )*
    };
}

/// string_wrapper_types establishes SQLType implementations for
/// newtype String wrappers.
macro_rules! string_wrapper_types {
    ($($rust_type:ty,)*) => {
        $(
        impl SQLType for $rust_type {
            fn sql_type() -> &'static str {
                "TEXT"
            }
            fn to_sql(&self) -> rusqlite::Result<rusqlite::types::ToSqlOutput<'_>> {
                <str as rusqlite::types::ToSql>::to_sql(self)
            }
            fn column_result(
                value: rusqlite::types::ValueRef<'_>,
            ) -> rusqlite::types::FromSqlResult<Self> {
                Ok(Self::new(<String as rusqlite::types::FromSql>::column_result(value)?))
            }
        }
        )*
    };
}

/// json_sql_types establishes SQLType implementations for
/// Serialize & Deserialize types which encode as JSON.
macro_rules! json_sql_types {
    ($($rust_type:ty,)*) => {
        $(
        impl SQLType for $rust_type {
            fn sql_type() -> &'static str {
                "TEXT"
            }
            fn to_sql(&self) -> rusqlite::Result<rusqlite::types::ToSqlOutput<'_>> {
                let s = serde_json::to_string(self)
                    .map_err(|err| rusqlite::Error::ToSqlConversionFailure(err.into()))?;
                Ok(s.into())
            }
            fn column_result(
                value: rusqlite::types::ValueRef<'_>,
            ) -> rusqlite::types::FromSqlResult<Self> {
                Ok(serde_json::from_str(value.as_str()?)
                   .map_err(|err| rusqlite::types::FromSqlError::Other(err.into()))?)
            }
        }
        )*
    };
}

/// proto_sql_types establishes SQLType implementations for
/// ToProto / FromProto types which encode as protobuf.
macro_rules! proto_sql_types {
    ($($rust_type:ty,)*) => {
        $(
        impl SQLType for $rust_type {
            fn sql_type() -> &'static str {
                "BLOB"
            }

            fn to_sql(&self) -> rusqlite::Result<rusqlite::types::ToSqlOutput<'_>> {
                let mut b = Vec::with_capacity(self.encoded_len());
                self.encode(&mut b).unwrap();
                Ok(b.into())
            }

            fn column_result(
                value: rusqlite::types::ValueRef<'_>,
            ) -> rusqlite::types::FromSqlResult<Self> {

                Ok(Self::decode(value.as_blob()?)
                   .map_err(|err| rusqlite::types::FromSqlError::Other(err.into()))?)
            }

            fn debug_view<'a>(&'a self) -> SqlDebugView<'a> {
                SqlDebugView::Debug(self)
            }
        }
        )*
    };
}

// Helper for swapping a token tree with another expression.
macro_rules! replace_expr {
    ($_t:tt $sub:expr) => {
        $sub
    };
}

/// Define row & table structures and related implementations.
macro_rules! tables {
    ($(
        table $table:ident ( row $row:ident, order_by [ $($order_by:ident)* ], sql $sql_name:literal ) {
            $($field:ident: $rust_type:ty,)*
        }
    )*) => {
        $(
        pub struct $row {
            $(pub $field: $rust_type,)*
        }

        /// New-type wrapper of a Row vector.
        #[derive(Default)]
        pub struct $table(Vec<$row>);

        impl $table {
            /// New returns an empty Table.
            pub fn new() -> Self { Self(Vec::new()) }
            /// Insert a new ordered Row into the Table.
            /// Arguments match the positional order of the table's definition.
            #[allow(dead_code)]
            pub fn insert_row(&mut self, $( $field: impl OwnOrClone<$rust_type>, )*) {
                self.insert($row {
                    $($field: $field.own_or_clone(),)*
                });
            }
            /// Insert a new ordered Row into the Table.
            #[allow(dead_code)]
            pub fn insert(&mut self, row: $row) {
                use superslice::Ext;

                let r = ($(&row.$order_by,)*);

                let index = self.0.upper_bound_by(move |_l| {
                    let l = ($(&_l.$order_by,)*);
                    l.cmp(&r)
                });
                self.0.insert(index, row);
            }
            /// Convert the Table into an Iterator.
            #[allow(dead_code)]
            pub fn into_iter(self) -> impl Iterator<Item=$row> {
                self.0.into_iter()
            }
            /// Extend the Table from the given Iterator.
            #[allow(dead_code)]
            pub fn extend(&mut self, it: impl Iterator<Item=$row>) {
                self.0.extend(it);
                self.reindex();
            }
            // Re-index the Table as a bulk operation.
            fn reindex(&mut self) {
                self.0.sort_by(|_l, _r| {
                    let l = ($(&_l.$order_by,)*);
                    let r = ($(&_r.$order_by,)*);
                    l.cmp(&r)
                });
            }
        }

        impl Table for $table {
            type Row = $row;

            fn insert_sql() -> String {
                [
                    "INSERT INTO ",
                    $sql_name,
                    " ( ",
                    [ $( stringify!($field), )* ].join(", ").as_str(),
                    " ) VALUES ( ",
                    [ $( replace_expr!($field "?"), )* ].join(", ").as_str(),
                    " );"
                ].concat()
            }

            fn select_sql() -> String {
                [
                    "SELECT ",
                    [ $( stringify!($field), )* ].join(", ").as_str(),
                    " FROM ",
                    $sql_name,
                    // Closing ';' is omitted so that WHERE clauses may be chained.
                    // rusqlite is okay with a non-closed statement.
                ].concat()
            }
        }

        impl TableObj for $table {
            fn sql_name(&self) -> &'static str { $sql_name }

            fn create_table_sql(&self) -> String {
                [
                    "CREATE TABLE IF NOT EXISTS ",
                    $sql_name,
                    " ( ",
                    [ $(
                        [
                            stringify!($field),
                            " ",
                            <$rust_type as SQLType>::sql_type(),
                        ].concat(),
                    )* ].join(", ").as_str(),
                    " ); "
                ].concat()
            }

            fn persist_all(&self, db: &rusqlite::Connection) -> rusqlite::Result<()> {
                let mut stmt = db.prepare(&Self::insert_sql())?;

                for row in &self.0 {
                    row.persist(&mut stmt)?;
                }
                Ok(())
            }

            fn load_all(&mut self, db: &rusqlite::Connection) -> rusqlite::Result<()> {
                let mut stmt = db.prepare(&Self::select_sql())?;
                self.extend(stmt.query_map([], $row::scan)?
                              .collect::<Result<Vec<_>, _>>()?.into_iter());
                Ok(())
            }

            fn load_where(&mut self, db: &rusqlite::Connection, filter: &str, params: &[&dyn rusqlite::types::ToSql]) -> rusqlite::Result<()> {
                let mut stmt = db.prepare(&format!("{} WHERE {}", Self::select_sql(), filter))?;
                self.extend(stmt.query_map(params, $row::scan)?
                              .collect::<Result<Vec<_>, _>>()?.into_iter());
                Ok(())
            }
        }

        impl std::ops::Deref for $table {
            type Target = Vec<$row>;
            fn deref(&self) -> &Vec<$row> { &self.0 }
        }

        impl std::iter::FromIterator<$row> for $table {
            fn from_iter<I: IntoIterator<Item=$row>>(iter: I) -> Self {
                let mut c = $table::new();
                c.extend(iter.into_iter());
                c
            }
        }

        impl TableRow for $row {
            type Table = $table;

            fn persist(&self, stmt: &mut rusqlite::Statement<'_>) -> rusqlite::Result<()> {
                stmt.execute(rusqlite::params![ $(
                    <$rust_type as SQLType>::to_sql(&self.$field)?,
                )* ])?;
                Ok(())
            }

            fn scan<'stmt>(row: &rusqlite::Row<'stmt>) -> rusqlite::Result<Self> {
                let mut _idx = 0;
                $(
                let $field = <$rust_type as SQLType>::column_result(row.get_ref_unwrap(_idx))?;
                _idx += 1;
                )*

                Ok($row { $( $field, )* })
            }
        }

        impl std::fmt::Debug for $table {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                self.as_slice().fmt(f)
            }
        }

        impl std::fmt::Debug for $row {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                let mut f = f.debug_struct(stringify!($row));
                $(
                let v = self.$field.debug_view();
                let f = f.field(stringify!($field), &v);
                )*
                f.finish()
            }
        }

        )*
    }
}

pub enum SqlDebugView<'a> {
    Primitive(rusqlite::types::ToSqlOutput<'a>),
    Debug(&'a dyn std::fmt::Debug),
}

impl<'a> std::fmt::Debug for SqlDebugView<'a> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        use rusqlite::types::{ToSqlOutput, Value, ValueRef};
        match self {
            SqlDebugView::Primitive(to_sql) => match to_sql {
                ToSqlOutput::Borrowed(ValueRef::Null) => f.write_str("NULL"),
                ToSqlOutput::Borrowed(ValueRef::Integer(i)) => i.fmt(f),
                ToSqlOutput::Borrowed(ValueRef::Real(d)) => d.fmt(f),
                ToSqlOutput::Borrowed(ValueRef::Text(s)) => {
                    f.write_str(std::str::from_utf8(s).unwrap())
                }
                ToSqlOutput::Borrowed(ValueRef::Blob(_)) => ".. binary ..".fmt(f),
                ToSqlOutput::Owned(Value::Null) => f.write_str("NULL"),
                ToSqlOutput::Owned(Value::Integer(i)) => i.fmt(f),
                ToSqlOutput::Owned(Value::Real(d)) => d.fmt(f),
                ToSqlOutput::Owned(Value::Text(s)) => f.write_str(s),
                ToSqlOutput::Owned(Value::Blob(_)) => f.write_str("... binary ..."),
                _ => "unsupported type!".fmt(f),
            },
            SqlDebugView::Debug(dbg) => dbg.fmt(f),
        }
    }
}
