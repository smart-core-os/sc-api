// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.12.3
// source: types/number.proto

package types

import (
	proto "github.com/golang/protobuf/proto"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
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

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// Possible behaviours for values that are not allowed by the number
type InvalidNumberBehaviour int32

const (
	// A default behaviour will be applied, typically RESTRICT
	InvalidNumberBehaviour_UNSPECIFIED InvalidNumberBehaviour = 0
	// The value will be restricted to the most appropriate value, typically the closest
	InvalidNumberBehaviour_RESTRICT InvalidNumberBehaviour = 1
	// An error will be raised to alert to the invalid value
	InvalidNumberBehaviour_ERROR InvalidNumberBehaviour = 2
	// Ignore the bounds and apply the value anyway
	InvalidNumberBehaviour_ALLOW InvalidNumberBehaviour = 3
)

// Enum value maps for InvalidNumberBehaviour.
var (
	InvalidNumberBehaviour_name = map[int32]string{
		0: "UNSPECIFIED",
		1: "RESTRICT",
		2: "ERROR",
		3: "ALLOW",
	}
	InvalidNumberBehaviour_value = map[string]int32{
		"UNSPECIFIED": 0,
		"RESTRICT":    1,
		"ERROR":       2,
		"ALLOW":       3,
	}
)

func (x InvalidNumberBehaviour) Enum() *InvalidNumberBehaviour {
	p := new(InvalidNumberBehaviour)
	*p = x
	return p
}

func (x InvalidNumberBehaviour) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (InvalidNumberBehaviour) Descriptor() protoreflect.EnumDescriptor {
	return file_types_number_proto_enumTypes[0].Descriptor()
}

func (InvalidNumberBehaviour) Type() protoreflect.EnumType {
	return &file_types_number_proto_enumTypes[0]
}

func (x InvalidNumberBehaviour) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use InvalidNumberBehaviour.Descriptor instead.
func (InvalidNumberBehaviour) EnumDescriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{0}
}

// Options for how invalid number values will be handled
type NumberCapping struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// If the value is less than the minimum, behave this way. Should default to RESTRICT
	Min InvalidNumberBehaviour `protobuf:"varint,1,opt,name=min,proto3,enum=smartcore.api.types.InvalidNumberBehaviour" json:"min,omitempty"`
	// If the value does not lie on a step value, behave this way. Should default to ALLOW
	Step InvalidNumberBehaviour `protobuf:"varint,2,opt,name=step,proto3,enum=smartcore.api.types.InvalidNumberBehaviour" json:"step,omitempty"`
	// If the value is greater than the maximum, behave this way. Should default to RESTRICT
	Max InvalidNumberBehaviour `protobuf:"varint,3,opt,name=max,proto3,enum=smartcore.api.types.InvalidNumberBehaviour" json:"max,omitempty"`
}

func (x *NumberCapping) Reset() {
	*x = NumberCapping{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NumberCapping) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NumberCapping) ProtoMessage() {}

func (x *NumberCapping) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NumberCapping.ProtoReflect.Descriptor instead.
func (*NumberCapping) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{0}
}

func (x *NumberCapping) GetMin() InvalidNumberBehaviour {
	if x != nil {
		return x.Min
	}
	return InvalidNumberBehaviour_UNSPECIFIED
}

func (x *NumberCapping) GetStep() InvalidNumberBehaviour {
	if x != nil {
		return x.Step
	}
	return InvalidNumberBehaviour_UNSPECIFIED
}

func (x *NumberCapping) GetMax() InvalidNumberBehaviour {
	if x != nil {
		return x.Max
	}
	return InvalidNumberBehaviour_UNSPECIFIED
}

// Defines the bounds for a number. Either of the min or max values can be absent which means those aspects are
// unbounded. It makes no sense for both to be unset, if so then this is no longer a bounds but that isn't
// disallowed.
//
// Contrary to most programming practices both min and max are inclusive and denote the max allowed value, just like
// htmls input type=range.
type Int32Bounds struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the minimum value (inclusive). If absent then there is no minimum, though this is typically Int32.Min
	Min *wrappers.Int32Value `protobuf:"bytes,1,opt,name=min,proto3" json:"min,omitempty"`
	// the maximum value (inclusive). If absent then there is no maximum, though this is typically Int32.Max
	Max *wrappers.Int32Value `protobuf:"bytes,2,opt,name=max,proto3" json:"max,omitempty"`
}

func (x *Int32Bounds) Reset() {
	*x = Int32Bounds{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Int32Bounds) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Int32Bounds) ProtoMessage() {}

func (x *Int32Bounds) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Int32Bounds.ProtoReflect.Descriptor instead.
func (*Int32Bounds) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{1}
}

func (x *Int32Bounds) GetMin() *wrappers.Int32Value {
	if x != nil {
		return x.Min
	}
	return nil
}

func (x *Int32Bounds) GetMax() *wrappers.Int32Value {
	if x != nil {
		return x.Max
	}
	return nil
}

// Describes a numerical value. Can describe the current value or be used for updates.
//
// When ramp is provided, the target_value is used as the end goal of the transition, if value is also provided then
// this will be treated as a transition between value and target_value. If no value is present in this case then the
// current value of the number will be used creating a transition from current to target_value.
type Int32Var struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The numbers current value if known. Typically one of value or target_value will be set
	Value *wrappers.Int32Value `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	// Optional. Indicates the current progress through a transition. If present then target_value may be set. When
	// writing a value this denotes the intended tween duration.
	Ramp *Tween `protobuf:"bytes,2,opt,name=ramp,proto3" json:"ramp,omitempty"`
	// If ramping, then defines the value that we are ramping towards
	TargetValue *wrappers.Int32Value `protobuf:"bytes,3,opt,name=target_value,json=targetValue,proto3" json:"target_value,omitempty"`
}

func (x *Int32Var) Reset() {
	*x = Int32Var{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Int32Var) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Int32Var) ProtoMessage() {}

func (x *Int32Var) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Int32Var.ProtoReflect.Descriptor instead.
func (*Int32Var) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{2}
}

func (x *Int32Var) GetValue() *wrappers.Int32Value {
	if x != nil {
		return x.Value
	}
	return nil
}

func (x *Int32Var) GetRamp() *Tween {
	if x != nil {
		return x.Ramp
	}
	return nil
}

func (x *Int32Var) GetTargetValue() *wrappers.Int32Value {
	if x != nil {
		return x.TargetValue
	}
	return nil
}

// Describes features and restrictions applied to a number that is typically used as part of an apis value
type Int32Attributes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bounds *Int32Bounds `protobuf:"bytes,1,opt,name=bounds,proto3" json:"bounds,omitempty"`
	// The stepping interval, how little the value can change in one go. A default value of 0 is equivalent to a
	// continuous step, i.e. step=1
	Step int32 `protobuf:"varint,3,opt,name=step,proto3" json:"step,omitempty"`
	// Indicate whether the device supports delta adjustments when changing the value
	SupportsDelta bool `protobuf:"varint,4,opt,name=supports_delta,json=supportsDelta,proto3" json:"supports_delta,omitempty"`
	// Indicate the level of ramp support the device has
	RampSupport TweenSupport `protobuf:"varint,5,opt,name=ramp_support,json=rampSupport,proto3,enum=smartcore.api.types.TweenSupport" json:"ramp_support,omitempty"`
	// Provide information on how invalid values will be handled
	DefaultCapping *NumberCapping `protobuf:"bytes,6,opt,name=default_capping,json=defaultCapping,proto3" json:"default_capping,omitempty"`
}

func (x *Int32Attributes) Reset() {
	*x = Int32Attributes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Int32Attributes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Int32Attributes) ProtoMessage() {}

func (x *Int32Attributes) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Int32Attributes.ProtoReflect.Descriptor instead.
func (*Int32Attributes) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{3}
}

func (x *Int32Attributes) GetBounds() *Int32Bounds {
	if x != nil {
		return x.Bounds
	}
	return nil
}

func (x *Int32Attributes) GetStep() int32 {
	if x != nil {
		return x.Step
	}
	return 0
}

func (x *Int32Attributes) GetSupportsDelta() bool {
	if x != nil {
		return x.SupportsDelta
	}
	return false
}

func (x *Int32Attributes) GetRampSupport() TweenSupport {
	if x != nil {
		return x.RampSupport
	}
	return TweenSupport_NO_SUPPORT
}

func (x *Int32Attributes) GetDefaultCapping() *NumberCapping {
	if x != nil {
		return x.DefaultCapping
	}
	return nil
}

// Defines the bounds for a number. Either of the min or max values can be absent which means those aspects are
// unbounded. It makes no sense for both to be unset, if so then this is no longer a bounds but that isn't
// disallowed.
//
// Contrary to most programming practices both min and max are inclusive and denote the max allowed value, just like
// htmls input type=range.
type FloatBounds struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the minimum value (inclusive). If absent then there is no minimum, though this is typically Float.Min
	Min *wrappers.FloatValue `protobuf:"bytes,1,opt,name=min,proto3" json:"min,omitempty"`
	// the maximum value (inclusive). If absent then there is no maximum, though this is typically Float.Max
	Max *wrappers.FloatValue `protobuf:"bytes,2,opt,name=max,proto3" json:"max,omitempty"`
}

func (x *FloatBounds) Reset() {
	*x = FloatBounds{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FloatBounds) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FloatBounds) ProtoMessage() {}

func (x *FloatBounds) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FloatBounds.ProtoReflect.Descriptor instead.
func (*FloatBounds) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{4}
}

func (x *FloatBounds) GetMin() *wrappers.FloatValue {
	if x != nil {
		return x.Min
	}
	return nil
}

func (x *FloatBounds) GetMax() *wrappers.FloatValue {
	if x != nil {
		return x.Max
	}
	return nil
}

// Describes a numerical value. Can describe the current value or be used for updates.
//
// When ramp is provided, the target_value is used as the end goal of the transition, if value is also provided then
// this will be treated as a transition between value and target_value. If no value is present in this case then the
// current value of the number will be used creating a transition from current to target_value.
type FloatVar struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The numbers current value if known. Typically one of value or target_value will be set
	Value *wrappers.FloatValue `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	// Optional. Indicates the current progress through a transition. If present then target_value may be set. When
	// writing a value this denotes the intended tween duration.
	Ramp *Tween `protobuf:"bytes,2,opt,name=ramp,proto3" json:"ramp,omitempty"`
	// If ramping, then defines the value that we are ramping towards
	TargetValue *wrappers.FloatValue `protobuf:"bytes,3,opt,name=target_value,json=targetValue,proto3" json:"target_value,omitempty"`
}

func (x *FloatVar) Reset() {
	*x = FloatVar{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FloatVar) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FloatVar) ProtoMessage() {}

func (x *FloatVar) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FloatVar.ProtoReflect.Descriptor instead.
func (*FloatVar) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{5}
}

func (x *FloatVar) GetValue() *wrappers.FloatValue {
	if x != nil {
		return x.Value
	}
	return nil
}

func (x *FloatVar) GetRamp() *Tween {
	if x != nil {
		return x.Ramp
	}
	return nil
}

func (x *FloatVar) GetTargetValue() *wrappers.FloatValue {
	if x != nil {
		return x.TargetValue
	}
	return nil
}

// Describes features and restrictions applied to a number that is typically used as part of an apis value
type FloatAttributes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bounds *FloatBounds `protobuf:"bytes,1,opt,name=bounds,proto3" json:"bounds,omitempty"`
	// The stepping interval, how little the value can change in one go. A default value of 0 is equivalent to a
	// continuous step, i.e. all possible float values are supported
	Step float32 `protobuf:"fixed32,3,opt,name=step,proto3" json:"step,omitempty"`
	// Indicate whether the device supports delta adjustments when changing the value
	SupportsDelta bool `protobuf:"varint,4,opt,name=supports_delta,json=supportsDelta,proto3" json:"supports_delta,omitempty"`
	// Indicate the level of ramp support the device has
	RampSupport TweenSupport `protobuf:"varint,5,opt,name=ramp_support,json=rampSupport,proto3,enum=smartcore.api.types.TweenSupport" json:"ramp_support,omitempty"`
	// Provide information on how invalid values will be handled
	DefaultCapping *NumberCapping `protobuf:"bytes,6,opt,name=default_capping,json=defaultCapping,proto3" json:"default_capping,omitempty"`
}

func (x *FloatAttributes) Reset() {
	*x = FloatAttributes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_number_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FloatAttributes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FloatAttributes) ProtoMessage() {}

func (x *FloatAttributes) ProtoReflect() protoreflect.Message {
	mi := &file_types_number_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FloatAttributes.ProtoReflect.Descriptor instead.
func (*FloatAttributes) Descriptor() ([]byte, []int) {
	return file_types_number_proto_rawDescGZIP(), []int{6}
}

func (x *FloatAttributes) GetBounds() *FloatBounds {
	if x != nil {
		return x.Bounds
	}
	return nil
}

func (x *FloatAttributes) GetStep() float32 {
	if x != nil {
		return x.Step
	}
	return 0
}

func (x *FloatAttributes) GetSupportsDelta() bool {
	if x != nil {
		return x.SupportsDelta
	}
	return false
}

func (x *FloatAttributes) GetRampSupport() TweenSupport {
	if x != nil {
		return x.RampSupport
	}
	return TweenSupport_NO_SUPPORT
}

func (x *FloatAttributes) GetDefaultCapping() *NumberCapping {
	if x != nil {
		return x.DefaultCapping
	}
	return nil
}

var File_types_number_proto protoreflect.FileDescriptor

var file_types_number_proto_rawDesc = []byte{
	0x0a, 0x12, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70,
	0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2f, 0x74, 0x77, 0x65, 0x65, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xce, 0x01, 0x0a,
	0x0d, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x43, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x12, 0x3d,
	0x0a, 0x03, 0x6d, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2b, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x49, 0x6e, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x42,
	0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x75, 0x72, 0x52, 0x03, 0x6d, 0x69, 0x6e, 0x12, 0x3f, 0x0a,
	0x04, 0x73, 0x74, 0x65, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2b, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x49, 0x6e, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x42,
	0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x75, 0x72, 0x52, 0x04, 0x73, 0x74, 0x65, 0x70, 0x12, 0x3d,
	0x0a, 0x03, 0x6d, 0x61, 0x78, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2b, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x49, 0x6e, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x42,
	0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x75, 0x72, 0x52, 0x03, 0x6d, 0x61, 0x78, 0x22, 0x6b, 0x0a,
	0x0b, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x42, 0x6f, 0x75, 0x6e, 0x64, 0x73, 0x12, 0x2d, 0x0a, 0x03,
	0x6d, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e, 0x74, 0x33,
	0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x03, 0x6d, 0x69, 0x6e, 0x12, 0x2d, 0x0a, 0x03, 0x6d,
	0x61, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32,
	0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x03, 0x6d, 0x61, 0x78, 0x22, 0xad, 0x01, 0x0a, 0x08, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x72, 0x12, 0x31, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x2e, 0x0a, 0x04, 0x72, 0x61,
	0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54,
	0x77, 0x65, 0x65, 0x6e, 0x52, 0x04, 0x72, 0x61, 0x6d, 0x70, 0x12, 0x3e, 0x0a, 0x0c, 0x74, 0x61,
	0x72, 0x67, 0x65, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0b, 0x74,
	0x61, 0x72, 0x67, 0x65, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x99, 0x02, 0x0a, 0x0f, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x38,
	0x0a, 0x06, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x42, 0x6f, 0x75, 0x6e, 0x64, 0x73,
	0x52, 0x06, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x74, 0x65, 0x70,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x73, 0x74, 0x65, 0x70, 0x12, 0x25, 0x0a, 0x0e,
	0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x73, 0x5f, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x0d, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x73, 0x44, 0x65,
	0x6c, 0x74, 0x61, 0x12, 0x44, 0x0a, 0x0c, 0x72, 0x61, 0x6d, 0x70, 0x5f, 0x73, 0x75, 0x70, 0x70,
	0x6f, 0x72, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x21, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x54, 0x77, 0x65, 0x65, 0x6e, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x0b, 0x72, 0x61,
	0x6d, 0x70, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b, 0x0a, 0x0f, 0x64, 0x65, 0x66,
	0x61, 0x75, 0x6c, 0x74, 0x5f, 0x63, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x22, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x43,
	0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x52, 0x0e, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x43,
	0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x22, 0x6b, 0x0a, 0x0b, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x42,
	0x6f, 0x75, 0x6e, 0x64, 0x73, 0x12, 0x2d, 0x0a, 0x03, 0x6d, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x03, 0x6d, 0x69, 0x6e, 0x12, 0x2d, 0x0a, 0x03, 0x6d, 0x61, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x03,
	0x6d, 0x61, 0x78, 0x22, 0xad, 0x01, 0x0a, 0x08, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x72,
	0x12, 0x31, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x12, 0x2e, 0x0a, 0x04, 0x72, 0x61, 0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x77, 0x65, 0x65, 0x6e, 0x52, 0x04, 0x72,
	0x61, 0x6d, 0x70, 0x12, 0x3e, 0x0a, 0x0c, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61,
	0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0b, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x22, 0x99, 0x02, 0x0a, 0x0f, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x41, 0x74, 0x74,
	0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x38, 0x0a, 0x06, 0x62, 0x6f, 0x75, 0x6e, 0x64,
	0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x46, 0x6c,
	0x6f, 0x61, 0x74, 0x42, 0x6f, 0x75, 0x6e, 0x64, 0x73, 0x52, 0x06, 0x62, 0x6f, 0x75, 0x6e, 0x64,
	0x73, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x74, 0x65, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28, 0x02, 0x52,
	0x04, 0x73, 0x74, 0x65, 0x70, 0x12, 0x25, 0x0a, 0x0e, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74,
	0x73, 0x5f, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0d, 0x73,
	0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x73, 0x44, 0x65, 0x6c, 0x74, 0x61, 0x12, 0x44, 0x0a, 0x0c,
	0x72, 0x61, 0x6d, 0x70, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x21, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x77, 0x65, 0x65, 0x6e, 0x53, 0x75,
	0x70, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x0b, 0x72, 0x61, 0x6d, 0x70, 0x53, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x12, 0x4b, 0x0a, 0x0f, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x5f, 0x63, 0x61,
	0x70, 0x70, 0x69, 0x6e, 0x67, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x43, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x52,
	0x0e, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x43, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x2a,
	0x4d, 0x0a, 0x16, 0x49, 0x6e, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72,
	0x42, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x75, 0x72, 0x12, 0x0f, 0x0a, 0x0b, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x52, 0x45,
	0x53, 0x54, 0x52, 0x49, 0x43, 0x54, 0x10, 0x01, 0x12, 0x09, 0x0a, 0x05, 0x45, 0x52, 0x52, 0x4f,
	0x52, 0x10, 0x02, 0x12, 0x09, 0x0a, 0x05, 0x41, 0x4c, 0x4c, 0x4f, 0x57, 0x10, 0x03, 0x42, 0x69,
	0x0a, 0x17, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x42, 0x0b, 0x4e, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67, 0x69, 0x74, 0x2e, 0x76, 0x61,
	0x6e, 0x74, 0x69, 0x2e, 0x63, 0x6f, 0x2e, 0x75, 0x6b, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x79,
	0x70, 0x65, 0x73, 0xaa, 0x02, 0x13, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x41, 0x70, 0x69, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_types_number_proto_rawDescOnce sync.Once
	file_types_number_proto_rawDescData = file_types_number_proto_rawDesc
)

func file_types_number_proto_rawDescGZIP() []byte {
	file_types_number_proto_rawDescOnce.Do(func() {
		file_types_number_proto_rawDescData = protoimpl.X.CompressGZIP(file_types_number_proto_rawDescData)
	})
	return file_types_number_proto_rawDescData
}

var file_types_number_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_types_number_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_types_number_proto_goTypes = []interface{}{
	(InvalidNumberBehaviour)(0), // 0: smartcore.api.types.InvalidNumberBehaviour
	(*NumberCapping)(nil),       // 1: smartcore.api.types.NumberCapping
	(*Int32Bounds)(nil),         // 2: smartcore.api.types.Int32Bounds
	(*Int32Var)(nil),            // 3: smartcore.api.types.Int32Var
	(*Int32Attributes)(nil),     // 4: smartcore.api.types.Int32Attributes
	(*FloatBounds)(nil),         // 5: smartcore.api.types.FloatBounds
	(*FloatVar)(nil),            // 6: smartcore.api.types.FloatVar
	(*FloatAttributes)(nil),     // 7: smartcore.api.types.FloatAttributes
	(*wrappers.Int32Value)(nil), // 8: google.protobuf.Int32Value
	(*Tween)(nil),               // 9: smartcore.api.types.Tween
	(TweenSupport)(0),           // 10: smartcore.api.types.TweenSupport
	(*wrappers.FloatValue)(nil), // 11: google.protobuf.FloatValue
}
var file_types_number_proto_depIdxs = []int32{
	0,  // 0: smartcore.api.types.NumberCapping.min:type_name -> smartcore.api.types.InvalidNumberBehaviour
	0,  // 1: smartcore.api.types.NumberCapping.step:type_name -> smartcore.api.types.InvalidNumberBehaviour
	0,  // 2: smartcore.api.types.NumberCapping.max:type_name -> smartcore.api.types.InvalidNumberBehaviour
	8,  // 3: smartcore.api.types.Int32Bounds.min:type_name -> google.protobuf.Int32Value
	8,  // 4: smartcore.api.types.Int32Bounds.max:type_name -> google.protobuf.Int32Value
	8,  // 5: smartcore.api.types.Int32Var.value:type_name -> google.protobuf.Int32Value
	9,  // 6: smartcore.api.types.Int32Var.ramp:type_name -> smartcore.api.types.Tween
	8,  // 7: smartcore.api.types.Int32Var.target_value:type_name -> google.protobuf.Int32Value
	2,  // 8: smartcore.api.types.Int32Attributes.bounds:type_name -> smartcore.api.types.Int32Bounds
	10, // 9: smartcore.api.types.Int32Attributes.ramp_support:type_name -> smartcore.api.types.TweenSupport
	1,  // 10: smartcore.api.types.Int32Attributes.default_capping:type_name -> smartcore.api.types.NumberCapping
	11, // 11: smartcore.api.types.FloatBounds.min:type_name -> google.protobuf.FloatValue
	11, // 12: smartcore.api.types.FloatBounds.max:type_name -> google.protobuf.FloatValue
	11, // 13: smartcore.api.types.FloatVar.value:type_name -> google.protobuf.FloatValue
	9,  // 14: smartcore.api.types.FloatVar.ramp:type_name -> smartcore.api.types.Tween
	11, // 15: smartcore.api.types.FloatVar.target_value:type_name -> google.protobuf.FloatValue
	5,  // 16: smartcore.api.types.FloatAttributes.bounds:type_name -> smartcore.api.types.FloatBounds
	10, // 17: smartcore.api.types.FloatAttributes.ramp_support:type_name -> smartcore.api.types.TweenSupport
	1,  // 18: smartcore.api.types.FloatAttributes.default_capping:type_name -> smartcore.api.types.NumberCapping
	19, // [19:19] is the sub-list for method output_type
	19, // [19:19] is the sub-list for method input_type
	19, // [19:19] is the sub-list for extension type_name
	19, // [19:19] is the sub-list for extension extendee
	0,  // [0:19] is the sub-list for field type_name
}

func init() { file_types_number_proto_init() }
func file_types_number_proto_init() {
	if File_types_number_proto != nil {
		return
	}
	file_types_tween_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_types_number_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NumberCapping); i {
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
		file_types_number_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Int32Bounds); i {
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
		file_types_number_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Int32Var); i {
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
		file_types_number_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Int32Attributes); i {
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
		file_types_number_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FloatBounds); i {
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
		file_types_number_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FloatVar); i {
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
		file_types_number_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FloatAttributes); i {
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
			RawDescriptor: file_types_number_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_types_number_proto_goTypes,
		DependencyIndexes: file_types_number_proto_depIdxs,
		EnumInfos:         file_types_number_proto_enumTypes,
		MessageInfos:      file_types_number_proto_msgTypes,
	}.Build()
	File_types_number_proto = out.File
	file_types_number_proto_rawDesc = nil
	file_types_number_proto_goTypes = nil
	file_types_number_proto_depIdxs = nil
}
