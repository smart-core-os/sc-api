// Code generated by protoc-gen-go. DO NOT EDIT.
// source: types/connection.proto

package types

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

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

var Connectivity_name = map[int32]string{
	0: "NOT_APPLICABLE",
	1: "DISCONNECTED",
	2: "CONNECTED",
}

var Connectivity_value = map[string]int32{
	"NOT_APPLICABLE": 0,
	"DISCONNECTED":   1,
	"CONNECTED":      2,
}

func (x Connectivity) String() string {
	return proto.EnumName(Connectivity_name, int32(x))
}

func (Connectivity) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_ca208cf78ee61072, []int{0}
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

var CommStatus_name = map[int32]string{
	0: "COMM_UNKNOWN",
	1: "COMM_SUCCESS",
	2: "COMM_FAILURE",
}

var CommStatus_value = map[string]int32{
	"COMM_UNKNOWN": 0,
	"COMM_SUCCESS": 1,
	"COMM_FAILURE": 2,
}

func (x CommStatus) String() string {
	return proto.EnumName(CommStatus_name, int32(x))
}

func (CommStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_ca208cf78ee61072, []int{1}
}

func init() {
	proto.RegisterEnum("smartcore.api.types.Connectivity", Connectivity_name, Connectivity_value)
	proto.RegisterEnum("smartcore.api.types.CommStatus", CommStatus_name, CommStatus_value)
}

func init() { proto.RegisterFile("types/connection.proto", fileDescriptor_ca208cf78ee61072) }

var fileDescriptor_ca208cf78ee61072 = []byte{
	// 240 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0xd1, 0x4a, 0xc3, 0x30,
	0x14, 0x86, 0x6d, 0x2f, 0x04, 0xc3, 0xd4, 0x90, 0x81, 0x3e, 0x83, 0x03, 0x93, 0x0b, 0x9f, 0xa0,
	0x3d, 0x8b, 0x50, 0xec, 0xd2, 0x62, 0x5a, 0x04, 0x6f, 0x46, 0x8c, 0x65, 0x04, 0x69, 0x13, 0xda,
	0xb3, 0xc2, 0x5e, 0xc9, 0xa7, 0x94, 0x56, 0xa9, 0x37, 0xbb, 0xcc, 0xc7, 0xf7, 0xff, 0xe4, 0x3f,
	0xe4, 0x0e, 0x4f, 0xa1, 0x19, 0x84, 0xf5, 0x5d, 0xd7, 0x58, 0x74, 0xbe, 0xe3, 0xa1, 0xf7, 0xe8,
	0xd9, 0x7a, 0x68, 0x4d, 0x8f, 0xd6, 0xf7, 0x0d, 0x37, 0xc1, 0xf1, 0xd9, 0xda, 0x00, 0x59, 0xc1,
	0x9f, 0x38, 0x3a, 0x3c, 0x31, 0x46, 0x6e, 0x54, 0x51, 0xed, 0x93, 0xb2, 0xcc, 0x33, 0x48, 0xd2,
	0x5c, 0xd2, 0x0b, 0x46, 0xc9, 0x6a, 0x9b, 0x69, 0x28, 0x94, 0x92, 0x50, 0xc9, 0x2d, 0x8d, 0xd8,
	0x35, 0xb9, 0xfa, 0x7f, 0xc6, 0x9b, 0x94, 0x10, 0xf0, 0x6d, 0xab, 0xd1, 0xe0, 0x71, 0x98, 0x74,
	0x28, 0x76, 0xbb, 0x7d, 0xad, 0x5e, 0x54, 0xf1, 0xa6, 0x7e, 0x0b, 0x66, 0xa2, 0x6b, 0x00, 0xa9,
	0x35, 0x8d, 0x16, 0xf2, 0x9c, 0x64, 0x79, 0xfd, 0x2a, 0x69, 0x9c, 0xb6, 0xe4, 0xfe, 0xb3, 0x19,
	0xf9, 0x99, 0x3f, 0xa6, 0xb7, 0xb0, 0x4c, 0x29, 0xa7, 0x25, 0x65, 0xf4, 0xfe, 0x70, 0x70, 0xc8,
	0x47, 0xd3, 0xa1, 0xe3, 0xd6, 0xf3, 0xe3, 0x97, 0x58, 0x72, 0x62, 0xb0, 0x8f, 0x26, 0x38, 0x71,
	0xf0, 0x62, 0x4e, 0x7f, 0xc7, 0x6b, 0xbd, 0x74, 0x26, 0xc1, 0xf1, 0x6a, 0xa2, 0x1f, 0x97, 0xf3,
	0x4d, 0x9e, 0x7e, 0x02, 0x00, 0x00, 0xff, 0xff, 0x40, 0xc1, 0xdd, 0xf1, 0x2d, 0x01, 0x00, 0x00,
}
