// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: traits/range.proto

package traits

import (
	types "git.vanti.co.uk/smartcore/sc-api/go/types"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
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

// Trait.attributes relating to the value for the range
type RangeAttributes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ValueAttributes *types.Int32Attributes `protobuf:"bytes,1,opt,name=value_attributes,json=valueAttributes,proto3" json:"value_attributes,omitempty"`
}

func (x *RangeAttributes) Reset() {
	*x = RangeAttributes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_range_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RangeAttributes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RangeAttributes) ProtoMessage() {}

func (x *RangeAttributes) ProtoReflect() protoreflect.Message {
	mi := &file_traits_range_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RangeAttributes.ProtoReflect.Descriptor instead.
func (*RangeAttributes) Descriptor() ([]byte, []int) {
	return file_traits_range_proto_rawDescGZIP(), []int{0}
}

func (x *RangeAttributes) GetValueAttributes() *types.Int32Attributes {
	if x != nil {
		return x.ValueAttributes
	}
	return nil
}

// A request to update the value of a range
type UpdateRangeValueRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to update
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The new value for the range. Supply ramp to transition
	RangeValue *types.Int32Var `protobuf:"bytes,2,opt,name=range_value,json=rangeValue,proto3" json:"range_value,omitempty"`
	// if true, then the values in the range_value represent deltas from the current value and not absolute values
	Delta bool `protobuf:"varint,3,opt,name=delta,proto3" json:"delta,omitempty"`
}

func (x *UpdateRangeValueRequest) Reset() {
	*x = UpdateRangeValueRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_range_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRangeValueRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRangeValueRequest) ProtoMessage() {}

func (x *UpdateRangeValueRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_range_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRangeValueRequest.ProtoReflect.Descriptor instead.
func (*UpdateRangeValueRequest) Descriptor() ([]byte, []int) {
	return file_traits_range_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateRangeValueRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateRangeValueRequest) GetRangeValue() *types.Int32Var {
	if x != nil {
		return x.RangeValue
	}
	return nil
}

func (x *UpdateRangeValueRequest) GetDelta() bool {
	if x != nil {
		return x.Delta
	}
	return false
}

// A request to get the current value of a range
type GetRangeValueRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to get the value for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetRangeValueRequest) Reset() {
	*x = GetRangeValueRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_range_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRangeValueRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRangeValueRequest) ProtoMessage() {}

func (x *GetRangeValueRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_range_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRangeValueRequest.ProtoReflect.Descriptor instead.
func (*GetRangeValueRequest) Descriptor() ([]byte, []int) {
	return file_traits_range_proto_rawDescGZIP(), []int{2}
}

func (x *GetRangeValueRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// Request to begin a subscription for range values
type PullRangeValueRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device we want events from
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Indicate whether we want to be notified of values while ramping or not. The device may ignore this depending on
	// capabilities
	ExcludeRamping bool `protobuf:"varint,2,opt,name=exclude_ramping,json=excludeRamping,proto3" json:"exclude_ramping,omitempty"`
}

func (x *PullRangeValueRequest) Reset() {
	*x = PullRangeValueRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_range_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullRangeValueRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullRangeValueRequest) ProtoMessage() {}

func (x *PullRangeValueRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_range_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullRangeValueRequest.ProtoReflect.Descriptor instead.
func (*PullRangeValueRequest) Descriptor() ([]byte, []int) {
	return file_traits_range_proto_rawDescGZIP(), []int{3}
}

func (x *PullRangeValueRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullRangeValueRequest) GetExcludeRamping() bool {
	if x != nil {
		return x.ExcludeRamping
	}
	return false
}

// A response as part of the stream of changes to the range value
type PullRangeValueResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The list of changes
	Changes []*RangeValueChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullRangeValueResponse) Reset() {
	*x = PullRangeValueResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_range_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullRangeValueResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullRangeValueResponse) ProtoMessage() {}

func (x *PullRangeValueResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_range_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullRangeValueResponse.ProtoReflect.Descriptor instead.
func (*PullRangeValueResponse) Descriptor() ([]byte, []int) {
	return file_traits_range_proto_rawDescGZIP(), []int{4}
}

func (x *PullRangeValueResponse) GetChanges() []*RangeValueChange {
	if x != nil {
		return x.Changes
	}
	return nil
}

// A change to a single devices range value
type RangeValueChange struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	CreateTime *timestamp.Timestamp `protobuf:"bytes,2,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// The new value for the range
	RangeValue *types.Int32Var `protobuf:"bytes,3,opt,name=range_value,json=rangeValue,proto3" json:"range_value,omitempty"`
}

func (x *RangeValueChange) Reset() {
	*x = RangeValueChange{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_range_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RangeValueChange) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RangeValueChange) ProtoMessage() {}

func (x *RangeValueChange) ProtoReflect() protoreflect.Message {
	mi := &file_traits_range_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RangeValueChange.ProtoReflect.Descriptor instead.
func (*RangeValueChange) Descriptor() ([]byte, []int) {
	return file_traits_range_proto_rawDescGZIP(), []int{5}
}

func (x *RangeValueChange) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *RangeValueChange) GetCreateTime() *timestamp.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *RangeValueChange) GetRangeValue() *types.Int32Var {
	if x != nil {
		return x.RangeValue
	}
	return nil
}

var File_traits_range_proto protoreflect.FileDescriptor

var file_traits_range_proto_rawDesc = []byte{
	0x0a, 0x12, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x72, 0x61, 0x6e, 0x67, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x6e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x62, 0x0a, 0x0f, 0x52,
	0x61, 0x6e, 0x67, 0x65, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x4f,
	0x0a, 0x10, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74,
	0x65, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x52, 0x0f,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x22,
	0x83, 0x01, 0x0a, 0x17, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x3e, 0x0a, 0x0b, 0x72, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32,
	0x56, 0x61, 0x72, 0x52, 0x0a, 0x72, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12,
	0x14, 0x0a, 0x05, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05,
	0x64, 0x65, 0x6c, 0x74, 0x61, 0x22, 0x2a, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x52, 0x61, 0x6e, 0x67,
	0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0x54, 0x0a, 0x15, 0x50, 0x75, 0x6c, 0x6c, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x27,
	0x0a, 0x0f, 0x65, 0x78, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x5f, 0x72, 0x61, 0x6d, 0x70, 0x69, 0x6e,
	0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0e, 0x65, 0x78, 0x63, 0x6c, 0x75, 0x64, 0x65,
	0x52, 0x61, 0x6d, 0x70, 0x69, 0x6e, 0x67, 0x22, 0x56, 0x0a, 0x16, 0x50, 0x75, 0x6c, 0x6c, 0x52,
	0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x3c, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x22, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65,
	0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x22,
	0xa3, 0x01, 0x0a, 0x10, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x43, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x3e, 0x0a, 0x0b, 0x72, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x72, 0x52, 0x0a, 0x72, 0x61, 0x6e, 0x67, 0x65,
	0x56, 0x61, 0x6c, 0x75, 0x65, 0x32, 0xa4, 0x02, 0x0a, 0x05, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x12,
	0x5c, 0x0a, 0x10, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x12, 0x29, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x61, 0x6e,
	0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x72, 0x12, 0x56, 0x0a,
	0x0d, 0x47, 0x65, 0x74, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x26,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x49, 0x6e, 0x74,
	0x33, 0x32, 0x56, 0x61, 0x72, 0x12, 0x65, 0x0a, 0x0e, 0x50, 0x75, 0x6c, 0x6c, 0x52, 0x61, 0x6e,
	0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x27, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x52,
	0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x28, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x42, 0x76, 0x0a, 0x14,
	0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x42, 0x0a, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x2a, 0x67, 0x69, 0x74, 0x2e, 0x76, 0x61, 0x6e, 0x74, 0x69, 0x2e, 0x63, 0x6f,
	0x2e, 0x75, 0x6b, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x73, 0x63,
	0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02,
	0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74,
	0x73, 0xca, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_range_proto_rawDescOnce sync.Once
	file_traits_range_proto_rawDescData = file_traits_range_proto_rawDesc
)

func file_traits_range_proto_rawDescGZIP() []byte {
	file_traits_range_proto_rawDescOnce.Do(func() {
		file_traits_range_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_range_proto_rawDescData)
	})
	return file_traits_range_proto_rawDescData
}

var file_traits_range_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_traits_range_proto_goTypes = []interface{}{
	(*RangeAttributes)(nil),         // 0: smartcore.traits.RangeAttributes
	(*UpdateRangeValueRequest)(nil), // 1: smartcore.traits.UpdateRangeValueRequest
	(*GetRangeValueRequest)(nil),    // 2: smartcore.traits.GetRangeValueRequest
	(*PullRangeValueRequest)(nil),   // 3: smartcore.traits.PullRangeValueRequest
	(*PullRangeValueResponse)(nil),  // 4: smartcore.traits.PullRangeValueResponse
	(*RangeValueChange)(nil),        // 5: smartcore.traits.RangeValueChange
	(*types.Int32Attributes)(nil),   // 6: smartcore.api.types.Int32Attributes
	(*types.Int32Var)(nil),          // 7: smartcore.api.types.Int32Var
	(*timestamp.Timestamp)(nil),     // 8: google.protobuf.Timestamp
}
var file_traits_range_proto_depIdxs = []int32{
	6, // 0: smartcore.traits.RangeAttributes.value_attributes:type_name -> smartcore.api.types.Int32Attributes
	7, // 1: smartcore.traits.UpdateRangeValueRequest.range_value:type_name -> smartcore.api.types.Int32Var
	5, // 2: smartcore.traits.PullRangeValueResponse.changes:type_name -> smartcore.traits.RangeValueChange
	8, // 3: smartcore.traits.RangeValueChange.create_time:type_name -> google.protobuf.Timestamp
	7, // 4: smartcore.traits.RangeValueChange.range_value:type_name -> smartcore.api.types.Int32Var
	1, // 5: smartcore.traits.Range.UpdateRangeValue:input_type -> smartcore.traits.UpdateRangeValueRequest
	2, // 6: smartcore.traits.Range.GetRangeValue:input_type -> smartcore.traits.GetRangeValueRequest
	3, // 7: smartcore.traits.Range.PullRangeValue:input_type -> smartcore.traits.PullRangeValueRequest
	7, // 8: smartcore.traits.Range.UpdateRangeValue:output_type -> smartcore.api.types.Int32Var
	7, // 9: smartcore.traits.Range.GetRangeValue:output_type -> smartcore.api.types.Int32Var
	4, // 10: smartcore.traits.Range.PullRangeValue:output_type -> smartcore.traits.PullRangeValueResponse
	8, // [8:11] is the sub-list for method output_type
	5, // [5:8] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_traits_range_proto_init() }
func file_traits_range_proto_init() {
	if File_traits_range_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_range_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RangeAttributes); i {
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
		file_traits_range_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRangeValueRequest); i {
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
		file_traits_range_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRangeValueRequest); i {
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
		file_traits_range_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullRangeValueRequest); i {
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
		file_traits_range_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullRangeValueResponse); i {
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
		file_traits_range_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RangeValueChange); i {
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
			RawDescriptor: file_traits_range_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_traits_range_proto_goTypes,
		DependencyIndexes: file_traits_range_proto_depIdxs,
		MessageInfos:      file_traits_range_proto_msgTypes,
	}.Build()
	File_traits_range_proto = out.File
	file_traits_range_proto_rawDesc = nil
	file_traits_range_proto_goTypes = nil
	file_traits_range_proto_depIdxs = nil
}
