// TODO(johnny): Move this package into go/protocols/ops
package ops

import (
	"fmt"
	"reflect"
	"strings"

	pf "github.com/estuary/flow/go/protocols/flow"
	po "github.com/estuary/flow/go/protocols/ops"
)

// Log is the canonical shape of a Flow operations Log document.
// See also:
// * ops-catalog/ops-log-schema.json
// * crate/ops/lib.rs
type Log = po.Log

// LogCollection returns the collection to which logs of the given shard are written.
func LogCollection(taskName string) pf.Collection {
	return pf.Collection(fmt.Sprintf("ops/%s/logs", strings.Split(taskName, "/")[0]))
}

// ValidateLogsCollection sanity-checks that the given CollectionSpec is appropriate
// for storing instances of Log documents.
func ValidateLogsCollection(spec *pf.CollectionSpec) error {
	if !reflect.DeepEqual(
		spec.Key,
		[]string{"/shard/name", "/shard/keyBegin", "/shard/rClockBegin", "/ts"},
	) {
		return fmt.Errorf("CollectionSpec doesn't have expected key: %v", spec.Key)
	}

	if !reflect.DeepEqual(spec.PartitionFields, []string{"kind", "name"}) {
		return fmt.Errorf(
			"CollectionSpec doesn't have expected partitions 'kind' & 'name': %v",
			spec.PartitionFields)
	}

	return nil
}
