// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.1
// source: types/time/unit.proto

package time

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Units of time
type Unit int32

const (
	Unit_UNIT_UNSPECIFIED Unit = 0
	// seconds is the SI unit of time
	Unit_UNIT_SECONDS      Unit = 1
	Unit_UNIT_MICROSECONDS Unit = 2
	Unit_UNIT_MILLISECONDS Unit = 3
	Unit_UNIT_NANOSECONDS  Unit = 4
	Unit_UNIT_YEARS        Unit = 5
	Unit_UNIT_MONTHS       Unit = 6
	Unit_UNIT_WEEKS        Unit = 7
	Unit_UNIT_DAYS         Unit = 8
	Unit_UNIT_HOURS        Unit = 9
	Unit_UNIT_MINUTES      Unit = 10
)

// Enum value maps for Unit.
var (
	Unit_name = map[int32]string{
		0:  "UNIT_UNSPECIFIED",
		1:  "UNIT_SECONDS",
		2:  "UNIT_MICROSECONDS",
		3:  "UNIT_MILLISECONDS",
		4:  "UNIT_NANOSECONDS",
		5:  "UNIT_YEARS",
		6:  "UNIT_MONTHS",
		7:  "UNIT_WEEKS",
		8:  "UNIT_DAYS",
		9:  "UNIT_HOURS",
		10: "UNIT_MINUTES",
	}
	Unit_value = map[string]int32{
		"UNIT_UNSPECIFIED":  0,
		"UNIT_SECONDS":      1,
		"UNIT_MICROSECONDS": 2,
		"UNIT_MILLISECONDS": 3,
		"UNIT_NANOSECONDS":  4,
		"UNIT_YEARS":        5,
		"UNIT_MONTHS":       6,
		"UNIT_WEEKS":        7,
		"UNIT_DAYS":         8,
		"UNIT_HOURS":        9,
		"UNIT_MINUTES":      10,
	}
)

func (x Unit) Enum() *Unit {
	p := new(Unit)
	*p = x
	return p
}

func (x Unit) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Unit) Descriptor() protoreflect.EnumDescriptor {
	return file_types_time_unit_proto_enumTypes[0].Descriptor()
}

func (Unit) Type() protoreflect.EnumType {
	return &file_types_time_unit_proto_enumTypes[0]
}

func (x Unit) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Unit.Descriptor instead.
func (Unit) EnumDescriptor() ([]byte, []int) {
	return file_types_time_unit_proto_rawDescGZIP(), []int{0}
}

var File_types_time_unit_proto protoreflect.FileDescriptor

var file_types_time_unit_proto_rawDesc = []byte{
	0x0a, 0x15, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x2f, 0x75, 0x6e, 0x69,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x74, 0x69, 0x6d, 0x65, 0x2a, 0xd4, 0x01,
	0x0a, 0x04, 0x55, 0x6e, 0x69, 0x74, 0x12, 0x14, 0x0a, 0x10, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x55,
	0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x10, 0x0a, 0x0c,
	0x55, 0x4e, 0x49, 0x54, 0x5f, 0x53, 0x45, 0x43, 0x4f, 0x4e, 0x44, 0x53, 0x10, 0x01, 0x12, 0x15,
	0x0a, 0x11, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x4d, 0x49, 0x43, 0x52, 0x4f, 0x53, 0x45, 0x43, 0x4f,
	0x4e, 0x44, 0x53, 0x10, 0x02, 0x12, 0x15, 0x0a, 0x11, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x4d, 0x49,
	0x4c, 0x4c, 0x49, 0x53, 0x45, 0x43, 0x4f, 0x4e, 0x44, 0x53, 0x10, 0x03, 0x12, 0x14, 0x0a, 0x10,
	0x55, 0x4e, 0x49, 0x54, 0x5f, 0x4e, 0x41, 0x4e, 0x4f, 0x53, 0x45, 0x43, 0x4f, 0x4e, 0x44, 0x53,
	0x10, 0x04, 0x12, 0x0e, 0x0a, 0x0a, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x59, 0x45, 0x41, 0x52, 0x53,
	0x10, 0x05, 0x12, 0x0f, 0x0a, 0x0b, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x4d, 0x4f, 0x4e, 0x54, 0x48,
	0x53, 0x10, 0x06, 0x12, 0x0e, 0x0a, 0x0a, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x57, 0x45, 0x45, 0x4b,
	0x53, 0x10, 0x07, 0x12, 0x0d, 0x0a, 0x09, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x44, 0x41, 0x59, 0x53,
	0x10, 0x08, 0x12, 0x0e, 0x0a, 0x0a, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x48, 0x4f, 0x55, 0x52, 0x53,
	0x10, 0x09, 0x12, 0x10, 0x0a, 0x0c, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x4d, 0x49, 0x4e, 0x55, 0x54,
	0x45, 0x53, 0x10, 0x0a, 0x42, 0x6d, 0x0a, 0x18, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x74, 0x69, 0x6d, 0x65,
	0x42, 0x09, 0x55, 0x6e, 0x69, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2d, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d,
	0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67,
	0x6f, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0xaa, 0x02, 0x14, 0x53,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_types_time_unit_proto_rawDescOnce sync.Once
	file_types_time_unit_proto_rawDescData = file_types_time_unit_proto_rawDesc
)

func file_types_time_unit_proto_rawDescGZIP() []byte {
	file_types_time_unit_proto_rawDescOnce.Do(func() {
		file_types_time_unit_proto_rawDescData = protoimpl.X.CompressGZIP(file_types_time_unit_proto_rawDescData)
	})
	return file_types_time_unit_proto_rawDescData
}

var file_types_time_unit_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_types_time_unit_proto_goTypes = []interface{}{
	(Unit)(0), // 0: smartcore.types.time.Unit
}
var file_types_time_unit_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_types_time_unit_proto_init() }
func file_types_time_unit_proto_init() {
	if File_types_time_unit_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_types_time_unit_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_types_time_unit_proto_goTypes,
		DependencyIndexes: file_types_time_unit_proto_depIdxs,
		EnumInfos:         file_types_time_unit_proto_enumTypes,
	}.Build()
	File_types_time_unit_proto = out.File
	file_types_time_unit_proto_rawDesc = nil
	file_types_time_unit_proto_goTypes = nil
	file_types_time_unit_proto_depIdxs = nil
}
