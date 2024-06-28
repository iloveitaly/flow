use super::harness::{draft_catalog, md5_hash, TestHarness};
use crate::{controllers::ControllerState, publications::JobStatus, ControlPlane};
use agent_sql::Capability;
use models::{CatalogType, Id};
use tables::InferredSchema;

#[tokio::test]
#[serial_test::serial]
async fn test_specs_with_null_bytes() {
    let mut harness = TestHarness::init("specs_with_null_bytes").await;

    let user_id = harness.setup_tenant("possums").await;
    let draft = draft_catalog(serde_json::json!({
        "collections": {
            "possums/bugs": {
                "writeSchema": {
                    "type": "object",
                    "properties": {
                        "id": { "type": "string" }
                    },
                    "required": ["id"]
                },
                "readSchema": {
                    "allOf": [
                        {"$ref": "flow://write-schema"},
                        {"$ref": "flow://inferred-schema"}
                    ]
                },
                "key": ["/id"]
            }
        },
        "captures": {
            "possums/capture": {
                "endpoint": {
                    "connector": {
                        "image": "source/test:test",
                        "config": {}
                    }
                },
                "bindings": [
                    {
                        "resource": { "a": "thing" },
                        "target": "possums/bugs"
                    }
                ]
            }
        },
    }));
    let first_pub_result = harness
        .user_publication(user_id, format!("initial publication"), draft)
        .await;
    assert!(
        first_pub_result.status.is_success(),
        "expected success, got {:?}, errors: {:?}",
        first_pub_result.status,
        first_pub_result.errors
    );

    let naughty_draft = draft_catalog(serde_json::json!({
        "collections": {
            "possums/bugs": {
                "writeSchema": {
                    "type": "object",
                    "properties": {
                        "id": { "type": "string" },
                        "naughty\u{0000}Property": { "type": "string" },
                    },
                    "required": ["id"]
                },
                "readSchema": {
                    "allOf": [
                        {"$ref": "flow://write-schema"},
                        {"$ref": "flow://inferred-schema"}
                    ]
                },
                "key": ["/id"]
            }
        },
    }));

    let result = harness
        .user_publication(user_id, format!("publish spec with nulls"), naughty_draft)
        .await;
    assert_eq!(JobStatus::PublishFailed, result.status);

    insta::assert_debug_snapshot!(result.errors, @r###"
    [
        (
            "",
            "committing publication: a string in the spec contains a disallowed unicode null escape (\\x00 or \\u0000)",
        ),
    ]
    "###);

    let schema: models::Schema = serde_json::from_value(serde_json::json!({
        "type": "object",
        "properties": {
            "a naughty \u{0000} property": { "type": "integer" }
        },
    }))
    .unwrap();
    let md5 = md5_hash(&schema);
    harness
        .upsert_inferred_schema(InferredSchema {
            collection_name: models::Collection::new("possums/bugs"),
            schema,
            md5,
        })
        .await;

    harness.run_pending_controllers(None).await;
    let state = harness.get_controller_state("possums/bugs").await;

    insta::assert_debug_snapshot!(state.error, @r###"
    Some(
        "a string in the spec contains a disallowed unicode null escape (\\x00 or \\u0000)",
    )
    "###);
}
