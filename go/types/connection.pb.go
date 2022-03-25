// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.1
// source: types/connection.proto

package types

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

// Defines the connection state between two entities. This could be a TCP network connection or a HDMI connection.
// In cases where a connection is possible but the state of the connection can never be determined directly use
// NOT_APPLICABLE, for example a simple io connection has no concept of 'alive'.
//
// The state of DISCONNECTED is not automatically an indication if issues in a system. A device may decide to disconnect
// to save resources.
type Connectivity int32

const (
	// The concept of a connection makes no sense for this device
	Connectivity_NOT_APPLICABLE Connectivity = 0
	// There is no active connection
	Connectivity_DISCONNECTED Connectivity = 1
	// There is an open connection to the device
	Connectivity_CONNECTED Connectivity = 2
)

// Enum value maps for Connectivity.
var (
	Connectivity_name = map[int32]string{
		0: "NOT_APPLICABLE",
		1: "DISCONNECTED",
		2: "CONNECTED",
	}
	Connectivity_value = map[string]int32{
		"NOT_APPLICABLE": 0,
		"DISCONNECTED":   1,
		"CONNECTED":      2,
	}
)

func (x Connectivity) Enum() *Connectivity {
	p := new(Connectivity)
	*p = x
	return p
}

func (x Connectivity) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Connectivity) Descriptor() protoreflect.EnumDescriptor {
	return file_types_connection_proto_enumTypes[0].Descriptor()
}

func (Connectivity) Type() protoreflect.EnumType {
	return &file_types_connection_proto_enumTypes[0]
}

func (x Connectivity) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Connectivity.Descriptor instead.
func (Connectivity) EnumDescriptor() ([]byte, []int) {
	return file_types_connection_proto_rawDescGZIP(), []int{0}
}

// Describes the state of communication between two entities. the CommStatus typically represents the application layer
// rather than any transport layer. For example TCP messages may be sent and ACKs received for them but if the
// application protocol response are never received then the CommStatus should not be COMM_SUCCESS.
type CommStatus int32

const (
	// the status of the line is unknown or unknowable
	CommStatus_COMM_UNKNOWN CommStatus = 0
	// The last time we attempted communication across it was successful.
	CommStatus_COMM_SUCCESS CommStatus = 1
	// Communication with the device is failing
	CommStatus_COMM_FAILURE CommStatus = 2
)

// Enum value maps for CommStatus.
var (
	CommStatus_name = map[int32]string{
		0: "COMM_UNKNOWN",
		1: "COMM_SUCCESS",
		2: "COMM_FAILURE",
	}
	CommStatus_value = map[string]int32{
		"COMM_UNKNOWN": 0,
		"COMM_SUCCESS": 1,
		"COMM_FAILURE": 2,
	}
)

func (x CommStatus) Enum() *CommStatus {
	p := new(CommStatus)
	*p = x
	return p
}

func (x CommStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CommStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_types_connection_proto_enumTypes[1].Descriptor()
}

func (CommStatus) Type() protoreflect.EnumType {
	return &file_types_connection_proto_enumTypes[1]
}

func (x CommStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CommStatus.Descriptor instead.
func (CommStatus) EnumDescriptor() ([]byte, []int) {
	return file_types_connection_proto_rawDescGZIP(), []int{1}
}

var File_types_connection_proto protoreflect.FileDescriptor

var file_types_connection_proto_rawDesc = []byte{
	0x0a, 0x16, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2a, 0x43, 0x0a, 0x0c, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x76, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x0e, 0x4e, 0x4f, 0x54,
	0x5f, 0x41, 0x50, 0x50, 0x4c, 0x49, 0x43, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x00, 0x12, 0x10, 0x0a,
	0x0c, 0x44, 0x49, 0x53, 0x43, 0x4f, 0x4e, 0x4e, 0x45, 0x43, 0x54, 0x45, 0x44, 0x10, 0x01, 0x12,
	0x0d, 0x0a, 0x09, 0x43, 0x4f, 0x4e, 0x4e, 0x45, 0x43, 0x54, 0x45, 0x44, 0x10, 0x02, 0x2a, 0x42,
	0x0a, 0x0a, 0x43, 0x6f, 0x6d, 0x6d, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x10, 0x0a, 0x0c,
	0x43, 0x4f, 0x4d, 0x4d, 0x5f, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x10,
	0x0a, 0x0c, 0x43, 0x4f, 0x4d, 0x4d, 0x5f, 0x53, 0x55, 0x43, 0x43, 0x45, 0x53, 0x53, 0x10, 0x01,
	0x12, 0x10, 0x0a, 0x0c, 0x43, 0x4f, 0x4d, 0x4d, 0x5f, 0x46, 0x41, 0x49, 0x4c, 0x55, 0x52, 0x45,
	0x10, 0x02, 0x42, 0x64, 0x0a, 0x13, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x42, 0x0f, 0x43, 0x6f, 0x6e, 0x6e, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x28, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63,
	0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f,
	0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0xaa, 0x02, 0x0f, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_types_connection_proto_rawDescOnce sync.Once
	file_types_connection_proto_rawDescData = file_types_connection_proto_rawDesc
)

func file_types_connection_proto_rawDescGZIP() []byte {
	file_types_connection_proto_rawDescOnce.Do(func() {
		file_types_connection_proto_rawDescData = protoimpl.X.CompressGZIP(file_types_connection_proto_rawDescData)
	})
	return file_types_connection_proto_rawDescData
}

var file_types_connection_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_types_connection_proto_goTypes = []interface{}{
	(Connectivity)(0), // 0: smartcore.types.Connectivity
	(CommStatus)(0),   // 1: smartcore.types.CommStatus
}
var file_types_connection_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_types_connection_proto_init() }
func file_types_connection_proto_init() {
	if File_types_connection_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_types_connection_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_types_connection_proto_goTypes,
		DependencyIndexes: file_types_connection_proto_depIdxs,
		EnumInfos:         file_types_connection_proto_enumTypes,
	}.Build()
	File_types_connection_proto = out.File
	file_types_connection_proto_rawDesc = nil
	file_types_connection_proto_goTypes = nil
	file_types_connection_proto_depIdxs = nil
}
