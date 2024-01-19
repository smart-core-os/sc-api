// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.2
// source: types/tween.proto

package types

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Denote different types of tween support. Clients may use this to control performance sensitive areas by enabling or
// disabling tweening when support is not native, for example
type TweenSupport int32

const (
	// Tween support is not specified.
	TweenSupport_TWEEN_SUPPORT_UNSPECIFIED TweenSupport = 0
	// The device does not support tweening
	TweenSupport_NO_SUPPORT TweenSupport = 1
	// The device natively supports tweening. Natively typically means with minimal performance impact (i.e. no network)
	TweenSupport_NATIVE TweenSupport = 2
	// The device supports tweening via emulation. Typically tweening is implemented by the Smart Core driver or a
	// supervisor node and not the device itself.
	TweenSupport_EMULATED TweenSupport = 3
	// The device tweens values, but the duration or rate is fixed and cannot be adjusted. For example a motor might only
	// have one speed when operating an adjustable desk
	TweenSupport_FIXED TweenSupport = 4
)

// Enum value maps for TweenSupport.
var (
	TweenSupport_name = map[int32]string{
		0: "TWEEN_SUPPORT_UNSPECIFIED",
		1: "NO_SUPPORT",
		2: "NATIVE",
		3: "EMULATED",
		4: "FIXED",
	}
	TweenSupport_value = map[string]int32{
		"TWEEN_SUPPORT_UNSPECIFIED": 0,
		"NO_SUPPORT":                1,
		"NATIVE":                    2,
		"EMULATED":                  3,
		"FIXED":                     4,
	}
)

func (x TweenSupport) Enum() *TweenSupport {
	p := new(TweenSupport)
	*p = x
	return p
}

func (x TweenSupport) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TweenSupport) Descriptor() protoreflect.EnumDescriptor {
	return file_types_tween_proto_enumTypes[0].Descriptor()
}

func (TweenSupport) Type() protoreflect.EnumType {
	return &file_types_tween_proto_enumTypes[0]
}

func (x TweenSupport) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TweenSupport.Descriptor instead.
func (TweenSupport) EnumDescriptor() ([]byte, []int) {
	return file_types_tween_proto_rawDescGZIP(), []int{0}
}

// An in-progress transition between two values. The values themselves should be defined in an enclosing message.
//
// Typically an enclosing message will define three properties, the value, the tween, and the target value.
//
// Example definition
//
//	message WaterHeight {
//	  // The current or expected height of water, in meters
//	  float height = 1;
//	  // Describe how the height changes or should change over time
//	  Tween height_tween = 2;
//	  // Read-only, the target height at the end of a transition
//	  float target_height = 3;
//	}
type Tween struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Read-only [0-100], how far along the transition (in time) are we.
	Progress float32 `protobuf:"fixed32,1,opt,name=progress,proto3" json:"progress,omitempty"`
	// how long the transition will last in total
	TotalDuration *durationpb.Duration `protobuf:"bytes,2,opt,name=total_duration,json=totalDuration,proto3" json:"total_duration,omitempty"`
}

func (x *Tween) Reset() {
	*x = Tween{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_tween_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Tween) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Tween) ProtoMessage() {}

func (x *Tween) ProtoReflect() protoreflect.Message {
	mi := &file_types_tween_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Tween.ProtoReflect.Descriptor instead.
func (*Tween) Descriptor() ([]byte, []int) {
	return file_types_tween_proto_rawDescGZIP(), []int{0}
}

func (x *Tween) GetProgress() float32 {
	if x != nil {
		return x.Progress
	}
	return 0
}

func (x *Tween) GetTotalDuration() *durationpb.Duration {
	if x != nil {
		return x.TotalDuration
	}
	return nil
}

var File_types_tween_proto protoreflect.FileDescriptor

var file_types_tween_proto_rawDesc = []byte{
	0x0a, 0x11, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x74, 0x77, 0x65, 0x65, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x65, 0x0a, 0x05, 0x54, 0x77, 0x65, 0x65, 0x6e, 0x12, 0x1a, 0x0a,
	0x08, 0x70, 0x72, 0x6f, 0x67, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52,
	0x08, 0x70, 0x72, 0x6f, 0x67, 0x72, 0x65, 0x73, 0x73, 0x12, 0x40, 0x0a, 0x0e, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x5f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0d, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2a, 0x62, 0x0a, 0x0c, 0x54,
	0x77, 0x65, 0x65, 0x6e, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x1d, 0x0a, 0x19, 0x54,
	0x57, 0x45, 0x45, 0x4e, 0x5f, 0x53, 0x55, 0x50, 0x50, 0x4f, 0x52, 0x54, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0e, 0x0a, 0x0a, 0x4e, 0x4f,
	0x5f, 0x53, 0x55, 0x50, 0x50, 0x4f, 0x52, 0x54, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x4e, 0x41,
	0x54, 0x49, 0x56, 0x45, 0x10, 0x02, 0x12, 0x0c, 0x0a, 0x08, 0x45, 0x4d, 0x55, 0x4c, 0x41, 0x54,
	0x45, 0x44, 0x10, 0x03, 0x12, 0x09, 0x0a, 0x05, 0x46, 0x49, 0x58, 0x45, 0x44, 0x10, 0x04, 0x42,
	0x5f, 0x0a, 0x13, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x42, 0x0a, 0x54, 0x77, 0x65, 0x65, 0x6e, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73,
	0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0xaa, 0x02,
	0x0f, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_types_tween_proto_rawDescOnce sync.Once
	file_types_tween_proto_rawDescData = file_types_tween_proto_rawDesc
)

func file_types_tween_proto_rawDescGZIP() []byte {
	file_types_tween_proto_rawDescOnce.Do(func() {
		file_types_tween_proto_rawDescData = protoimpl.X.CompressGZIP(file_types_tween_proto_rawDescData)
	})
	return file_types_tween_proto_rawDescData
}

var file_types_tween_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_types_tween_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_types_tween_proto_goTypes = []interface{}{
	(TweenSupport)(0),           // 0: smartcore.types.TweenSupport
	(*Tween)(nil),               // 1: smartcore.types.Tween
	(*durationpb.Duration)(nil), // 2: google.protobuf.Duration
}
var file_types_tween_proto_depIdxs = []int32{
	2, // 0: smartcore.types.Tween.total_duration:type_name -> google.protobuf.Duration
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_types_tween_proto_init() }
func file_types_tween_proto_init() {
	if File_types_tween_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_types_tween_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Tween); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_types_tween_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_types_tween_proto_goTypes,
		DependencyIndexes: file_types_tween_proto_depIdxs,
		EnumInfos:         file_types_tween_proto_enumTypes,
		MessageInfos:      file_types_tween_proto_msgTypes,
	}.Build()
	File_types_tween_proto = out.File
	file_types_tween_proto_rawDesc = nil
	file_types_tween_proto_goTypes = nil
	file_types_tween_proto_depIdxs = nil
}
