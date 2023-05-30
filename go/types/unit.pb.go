// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.12
// source: types/unit.proto

package types

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Possible temperature units for physical bodies.
type TemperatureUnit int32

const (
	TemperatureUnit_TEMPERATURE_UNIT_UNSPECIFIED TemperatureUnit = 0
	TemperatureUnit_CELSIUS                      TemperatureUnit = 1
	TemperatureUnit_FAHRENHEIT                   TemperatureUnit = 2
	TemperatureUnit_KELVIN                       TemperatureUnit = 3
)

// Enum value maps for TemperatureUnit.
var (
	TemperatureUnit_name = map[int32]string{
		0: "TEMPERATURE_UNIT_UNSPECIFIED",
		1: "CELSIUS",
		2: "FAHRENHEIT",
		3: "KELVIN",
	}
	TemperatureUnit_value = map[string]int32{
		"TEMPERATURE_UNIT_UNSPECIFIED": 0,
		"CELSIUS":                      1,
		"FAHRENHEIT":                   2,
		"KELVIN":                       3,
	}
)

func (x TemperatureUnit) Enum() *TemperatureUnit {
	p := new(TemperatureUnit)
	*p = x
	return p
}

func (x TemperatureUnit) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TemperatureUnit) Descriptor() protoreflect.EnumDescriptor {
	return file_types_unit_proto_enumTypes[0].Descriptor()
}

func (TemperatureUnit) Type() protoreflect.EnumType {
	return &file_types_unit_proto_enumTypes[0]
}

func (x TemperatureUnit) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TemperatureUnit.Descriptor instead.
func (TemperatureUnit) EnumDescriptor() ([]byte, []int) {
	return file_types_unit_proto_rawDescGZIP(), []int{0}
}

// What is the level of mute support that the speaker provides
type MuteSupport int32

const (
	MuteSupport_MUTE_SUPPORT_UNSPECIFIED MuteSupport = 0
	// The speaker natively supports mute
	MuteSupport_MUTE_NATIVE MuteSupport = 1
	// Muting is emulated, typically by setting the gain to 0
	MuteSupport_MUTE_EMULATED MuteSupport = 2
)

// Enum value maps for MuteSupport.
var (
	MuteSupport_name = map[int32]string{
		0: "MUTE_SUPPORT_UNSPECIFIED",
		1: "MUTE_NATIVE",
		2: "MUTE_EMULATED",
	}
	MuteSupport_value = map[string]int32{
		"MUTE_SUPPORT_UNSPECIFIED": 0,
		"MUTE_NATIVE":              1,
		"MUTE_EMULATED":            2,
	}
)

func (x MuteSupport) Enum() *MuteSupport {
	p := new(MuteSupport)
	*p = x
	return p
}

func (x MuteSupport) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MuteSupport) Descriptor() protoreflect.EnumDescriptor {
	return file_types_unit_proto_enumTypes[1].Descriptor()
}

func (MuteSupport) Type() protoreflect.EnumType {
	return &file_types_unit_proto_enumTypes[1]
}

func (x MuteSupport) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MuteSupport.Descriptor instead.
func (MuteSupport) EnumDescriptor() ([]byte, []int) {
	return file_types_unit_proto_rawDescGZIP(), []int{1}
}

// A temperature value
type Temperature struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The value in celsius, always! Use device attributes if the device 'thinks' in a different unit but always
	// communicate in celsius.
	ValueCelsius float64 `protobuf:"fixed64,1,opt,name=value_celsius,json=valueCelsius,proto3" json:"value_celsius,omitempty"`
}

func (x *Temperature) Reset() {
	*x = Temperature{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_unit_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Temperature) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Temperature) ProtoMessage() {}

func (x *Temperature) ProtoReflect() protoreflect.Message {
	mi := &file_types_unit_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Temperature.ProtoReflect.Descriptor instead.
func (*Temperature) Descriptor() ([]byte, []int) {
	return file_types_unit_proto_rawDescGZIP(), []int{0}
}

func (x *Temperature) GetValueCelsius() float64 {
	if x != nil {
		return x.ValueCelsius
	}
	return 0
}

// Represents an audio signal level for either input or output devices. Typically if fine grained control of either
// gain or muted is required then a FieldMask should describe this.
type AudioLevel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The current gain, typically as a percentage unless documented in the AudioLevel usage.
	Gain float32 `protobuf:"fixed32,1,opt,name=gain,proto3" json:"gain,omitempty"`
	// How the gain changes or should change over time. On write only duration should be set.
	GainTween *Tween `protobuf:"bytes,2,opt,name=gain_tween,json=gainTween,proto3" json:"gain_tween,omitempty"`
	// Read-only, the target value for the gain during a transition
	TargetGain float32 `protobuf:"fixed32,3,opt,name=target_gain,json=targetGain,proto3" json:"target_gain,omitempty"`
	// If the audio level muted.
	Muted bool `protobuf:"varint,4,opt,name=muted,proto3" json:"muted,omitempty"`
}

func (x *AudioLevel) Reset() {
	*x = AudioLevel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_unit_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AudioLevel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AudioLevel) ProtoMessage() {}

func (x *AudioLevel) ProtoReflect() protoreflect.Message {
	mi := &file_types_unit_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AudioLevel.ProtoReflect.Descriptor instead.
func (*AudioLevel) Descriptor() ([]byte, []int) {
	return file_types_unit_proto_rawDescGZIP(), []int{1}
}

func (x *AudioLevel) GetGain() float32 {
	if x != nil {
		return x.Gain
	}
	return 0
}

func (x *AudioLevel) GetGainTween() *Tween {
	if x != nil {
		return x.GainTween
	}
	return nil
}

func (x *AudioLevel) GetTargetGain() float32 {
	if x != nil {
		return x.TargetGain
	}
	return 0
}

func (x *AudioLevel) GetMuted() bool {
	if x != nil {
		return x.Muted
	}
	return false
}

// A change to the audio level
type AudioLevelChange struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device that is the source of the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// When the change was applied
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	// The new state for the change
	Level *AudioLevel `protobuf:"bytes,3,opt,name=level,proto3" json:"level,omitempty"`
}

func (x *AudioLevelChange) Reset() {
	*x = AudioLevelChange{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_unit_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AudioLevelChange) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AudioLevelChange) ProtoMessage() {}

func (x *AudioLevelChange) ProtoReflect() protoreflect.Message {
	mi := &file_types_unit_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AudioLevelChange.ProtoReflect.Descriptor instead.
func (*AudioLevelChange) Descriptor() ([]byte, []int) {
	return file_types_unit_proto_rawDescGZIP(), []int{2}
}

func (x *AudioLevelChange) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AudioLevelChange) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *AudioLevelChange) GetLevel() *AudioLevel {
	if x != nil {
		return x.Level
	}
	return nil
}

var File_types_unit_proto protoreflect.FileDescriptor

var file_types_unit_proto_rawDesc = []byte{
	0x0a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x75, 0x6e, 0x69, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x74, 0x77, 0x65, 0x65,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x32, 0x0a, 0x0b, 0x54, 0x65, 0x6d, 0x70, 0x65,
	0x72, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f,
	0x63, 0x65, 0x6c, 0x73, 0x69, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0c, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x43, 0x65, 0x6c, 0x73, 0x69, 0x75, 0x73, 0x22, 0x8e, 0x01, 0x0a, 0x0a,
	0x41, 0x75, 0x64, 0x69, 0x6f, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x12, 0x0a, 0x04, 0x67, 0x61,
	0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x04, 0x67, 0x61, 0x69, 0x6e, 0x12, 0x35,
	0x0a, 0x0a, 0x67, 0x61, 0x69, 0x6e, 0x5f, 0x74, 0x77, 0x65, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x16, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x77, 0x65, 0x65, 0x6e, 0x52, 0x09, 0x67, 0x61, 0x69, 0x6e,
	0x54, 0x77, 0x65, 0x65, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f,
	0x67, 0x61, 0x69, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0a, 0x74, 0x61, 0x72, 0x67,
	0x65, 0x74, 0x47, 0x61, 0x69, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x6d, 0x75, 0x74, 0x65, 0x64, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x6d, 0x75, 0x74, 0x65, 0x64, 0x22, 0x96, 0x01, 0x0a,
	0x10, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x43, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f,
	0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x69,
	0x6d, 0x65, 0x12, 0x31, 0x0a, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x05,
	0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2a, 0x5c, 0x0a, 0x0f, 0x54, 0x65, 0x6d, 0x70, 0x65, 0x72, 0x61,
	0x74, 0x75, 0x72, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x12, 0x20, 0x0a, 0x1c, 0x54, 0x45, 0x4d, 0x50,
	0x45, 0x52, 0x41, 0x54, 0x55, 0x52, 0x45, 0x5f, 0x55, 0x4e, 0x49, 0x54, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x43, 0x45,
	0x4c, 0x53, 0x49, 0x55, 0x53, 0x10, 0x01, 0x12, 0x0e, 0x0a, 0x0a, 0x46, 0x41, 0x48, 0x52, 0x45,
	0x4e, 0x48, 0x45, 0x49, 0x54, 0x10, 0x02, 0x12, 0x0a, 0x0a, 0x06, 0x4b, 0x45, 0x4c, 0x56, 0x49,
	0x4e, 0x10, 0x03, 0x2a, 0x4f, 0x0a, 0x0b, 0x4d, 0x75, 0x74, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x12, 0x1c, 0x0a, 0x18, 0x4d, 0x55, 0x54, 0x45, 0x5f, 0x53, 0x55, 0x50, 0x50, 0x4f,
	0x52, 0x54, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x12, 0x0f, 0x0a, 0x0b, 0x4d, 0x55, 0x54, 0x45, 0x5f, 0x4e, 0x41, 0x54, 0x49, 0x56, 0x45, 0x10,
	0x01, 0x12, 0x11, 0x0a, 0x0d, 0x4d, 0x55, 0x54, 0x45, 0x5f, 0x45, 0x4d, 0x55, 0x4c, 0x41, 0x54,
	0x45, 0x44, 0x10, 0x02, 0x42, 0x5e, 0x0a, 0x13, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x42, 0x09, 0x55, 0x6e, 0x69,
	0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d,
	0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x73, 0xaa, 0x02, 0x0f, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54,
	0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_types_unit_proto_rawDescOnce sync.Once
	file_types_unit_proto_rawDescData = file_types_unit_proto_rawDesc
)

func file_types_unit_proto_rawDescGZIP() []byte {
	file_types_unit_proto_rawDescOnce.Do(func() {
		file_types_unit_proto_rawDescData = protoimpl.X.CompressGZIP(file_types_unit_proto_rawDescData)
	})
	return file_types_unit_proto_rawDescData
}

var file_types_unit_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_types_unit_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_types_unit_proto_goTypes = []interface{}{
	(TemperatureUnit)(0),          // 0: smartcore.types.TemperatureUnit
	(MuteSupport)(0),              // 1: smartcore.types.MuteSupport
	(*Temperature)(nil),           // 2: smartcore.types.Temperature
	(*AudioLevel)(nil),            // 3: smartcore.types.AudioLevel
	(*AudioLevelChange)(nil),      // 4: smartcore.types.AudioLevelChange
	(*Tween)(nil),                 // 5: smartcore.types.Tween
	(*timestamppb.Timestamp)(nil), // 6: google.protobuf.Timestamp
}
var file_types_unit_proto_depIdxs = []int32{
	5, // 0: smartcore.types.AudioLevel.gain_tween:type_name -> smartcore.types.Tween
	6, // 1: smartcore.types.AudioLevelChange.change_time:type_name -> google.protobuf.Timestamp
	3, // 2: smartcore.types.AudioLevelChange.level:type_name -> smartcore.types.AudioLevel
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_types_unit_proto_init() }
func file_types_unit_proto_init() {
	if File_types_unit_proto != nil {
		return
	}
	file_types_tween_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_types_unit_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Temperature); i {
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
		file_types_unit_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AudioLevel); i {
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
		file_types_unit_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AudioLevelChange); i {
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
			RawDescriptor: file_types_unit_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_types_unit_proto_goTypes,
		DependencyIndexes: file_types_unit_proto_depIdxs,
		EnumInfos:         file_types_unit_proto_enumTypes,
		MessageInfos:      file_types_unit_proto_msgTypes,
	}.Build()
	File_types_unit_proto = out.File
	file_types_unit_proto_rawDesc = nil
	file_types_unit_proto_goTypes = nil
	file_types_unit_proto_depIdxs = nil
}
