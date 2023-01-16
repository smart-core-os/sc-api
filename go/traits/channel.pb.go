// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.1
// source: traits/channel.proto

package traits

import (
	types "github.com/smart-core-os/sc-api/go/types"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	fieldmaskpb "google.golang.org/protobuf/types/known/fieldmaskpb"
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

// Channel describes a single channel that can be chosen on the device.
//
// During read all known properties will be populated, id and title will always be present. On write either id or
// number must be present.
type Channel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Id uniquely identifies the channel and can be used to select it explicitly.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// A numeric identifier for the channel, such as 17 or 712.11-14. Not always parsable as a number.
	ChannelNumber string `protobuf:"bytes,2,opt,name=channel_number,json=channelNumber,proto3" json:"channel_number,omitempty"`
	// A human readable name for the channel.
	Title string `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
}

func (x *Channel) Reset() {
	*x = Channel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Channel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Channel) ProtoMessage() {}

func (x *Channel) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Channel.ProtoReflect.Descriptor instead.
func (*Channel) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{0}
}

func (x *Channel) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Channel) GetChannelNumber() string {
	if x != nil {
		return x.ChannelNumber
	}
	return ""
}

func (x *Channel) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

// ChosenChannelSupport describes the capabilities of devices implementing this trait
type ChosenChannelSupport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// How a named device supports read/write/pull apis
	ResourceSupport *types.ResourceSupport `protobuf:"bytes,1,opt,name=resource_support,json=resourceSupport,proto3" json:"resource_support,omitempty"`
	// The max number of channels away from the current that are supported when adjusting channels. Defaults to 1.
	AdjustMax int32 `protobuf:"varint,2,opt,name=adjust_max,json=adjustMax,proto3" json:"adjust_max,omitempty"` // todo: support for [choose,adjust,return], not sure what the defaults should be
}

func (x *ChosenChannelSupport) Reset() {
	*x = ChosenChannelSupport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChosenChannelSupport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChosenChannelSupport) ProtoMessage() {}

func (x *ChosenChannelSupport) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChosenChannelSupport.ProtoReflect.Descriptor instead.
func (*ChosenChannelSupport) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{1}
}

func (x *ChosenChannelSupport) GetResourceSupport() *types.ResourceSupport {
	if x != nil {
		return x.ResourceSupport
	}
	return nil
}

func (x *ChosenChannelSupport) GetAdjustMax() int32 {
	if x != nil {
		return x.AdjustMax
	}
	return 0
}

type GetChosenChannelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetChosenChannelRequest) Reset() {
	*x = GetChosenChannelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetChosenChannelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetChosenChannelRequest) ProtoMessage() {}

func (x *GetChosenChannelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetChosenChannelRequest.ProtoReflect.Descriptor instead.
func (*GetChosenChannelRequest) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{2}
}

func (x *GetChosenChannelRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetChosenChannelRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

// ChooseChannelRequest describes which channel to select.
type ChooseChannelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The channel to select. Must contain either id or number.
	Channel *Channel `protobuf:"bytes,2,opt,name=channel,proto3" json:"channel,omitempty"`
}

func (x *ChooseChannelRequest) Reset() {
	*x = ChooseChannelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChooseChannelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChooseChannelRequest) ProtoMessage() {}

func (x *ChooseChannelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChooseChannelRequest.ProtoReflect.Descriptor instead.
func (*ChooseChannelRequest) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{3}
}

func (x *ChooseChannelRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ChooseChannelRequest) GetChannel() *Channel {
	if x != nil {
		return x.Channel
	}
	return nil
}

// AdjustChannelRequest describes how to change the channel relative to the current channel.
type AdjustChannelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// How many channels to skip, use negative numbers to select previous channels. See ChannelApiAttributes.adjust_max.
	Amount int32 `protobuf:"varint,2,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (x *AdjustChannelRequest) Reset() {
	*x = AdjustChannelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AdjustChannelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AdjustChannelRequest) ProtoMessage() {}

func (x *AdjustChannelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AdjustChannelRequest.ProtoReflect.Descriptor instead.
func (*AdjustChannelRequest) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{4}
}

func (x *AdjustChannelRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AdjustChannelRequest) GetAmount() int32 {
	if x != nil {
		return x.Amount
	}
	return 0
}

// Select the last channel to be selected before the current one.
type ReturnChannelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *ReturnChannelRequest) Reset() {
	*x = ReturnChannelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReturnChannelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReturnChannelRequest) ProtoMessage() {}

func (x *ReturnChannelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReturnChannelRequest.ProtoReflect.Descriptor instead.
func (*ReturnChannelRequest) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{5}
}

func (x *ReturnChannelRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type PullChosenChannelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// When true the device will only send changes to the resource value.
	// The default behaviour is to send the current value immediately followed by any updates as they happen.
	UpdatesOnly bool `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullChosenChannelRequest) Reset() {
	*x = PullChosenChannelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullChosenChannelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullChosenChannelRequest) ProtoMessage() {}

func (x *PullChosenChannelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullChosenChannelRequest.ProtoReflect.Descriptor instead.
func (*PullChosenChannelRequest) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{6}
}

func (x *PullChosenChannelRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullChosenChannelRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullChosenChannelRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

type PullChosenChannelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Changes []*PullChosenChannelResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullChosenChannelResponse) Reset() {
	*x = PullChosenChannelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullChosenChannelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullChosenChannelResponse) ProtoMessage() {}

func (x *PullChosenChannelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullChosenChannelResponse.ProtoReflect.Descriptor instead.
func (*PullChosenChannelResponse) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{7}
}

func (x *PullChosenChannelResponse) GetChanges() []*PullChosenChannelResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type DescribeChosenChannelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DescribeChosenChannelRequest) Reset() {
	*x = DescribeChosenChannelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DescribeChosenChannelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DescribeChosenChannelRequest) ProtoMessage() {}

func (x *DescribeChosenChannelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DescribeChosenChannelRequest.ProtoReflect.Descriptor instead.
func (*DescribeChosenChannelRequest) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{8}
}

func (x *DescribeChosenChannelRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type PullChosenChannelResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	// The new chosen channel
	ChosenChannel *Channel `protobuf:"bytes,3,opt,name=chosen_channel,json=chosenChannel,proto3" json:"chosen_channel,omitempty"`
}

func (x *PullChosenChannelResponse_Change) Reset() {
	*x = PullChosenChannelResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_channel_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullChosenChannelResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullChosenChannelResponse_Change) ProtoMessage() {}

func (x *PullChosenChannelResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_channel_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullChosenChannelResponse_Change.ProtoReflect.Descriptor instead.
func (*PullChosenChannelResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_channel_proto_rawDescGZIP(), []int{7, 0}
}

func (x *PullChosenChannelResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullChosenChannelResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *PullChosenChannelResponse_Change) GetChosenChannel() *Channel {
	if x != nil {
		return x.ChosenChannel
	}
	return nil
}

var File_traits_channel_proto protoreflect.FileDescriptor

var file_traits_channel_proto_rawDesc = []byte{
	0x0a, 0x14, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f,
	0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x56, 0x0a,
	0x07, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12,
	0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x74, 0x69, 0x74, 0x6c, 0x65, 0x22, 0x82, 0x01, 0x0a, 0x14, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e,
	0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b,
	0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x61,
	0x64, 0x6a, 0x75, 0x73, 0x74, 0x5f, 0x6d, 0x61, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x09, 0x61, 0x64, 0x6a, 0x75, 0x73, 0x74, 0x4d, 0x61, 0x78, 0x22, 0x66, 0x0a, 0x17, 0x47, 0x65,
	0x74, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61,
	0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46,
	0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61,
	0x73, 0x6b, 0x22, 0x5f, 0x0a, 0x14, 0x43, 0x68, 0x6f, 0x6f, 0x73, 0x65, 0x43, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x33,
	0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x19, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x22, 0x42, 0x0a, 0x14, 0x41, 0x64, 0x6a, 0x75, 0x73, 0x74, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x2a, 0x0a, 0x14, 0x52, 0x65, 0x74, 0x75, 0x72,
	0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x22, 0x8a, 0x01, 0x0a, 0x18, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x6f, 0x73,
	0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73,
	0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d,
	0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21, 0x0a,
	0x0c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c, 0x79,
	0x22, 0x87, 0x02, 0x0a, 0x19, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43,
	0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4c,
	0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x32, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x43, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x1a, 0x9b, 0x01, 0x0a,
	0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x40, 0x0a, 0x0e, 0x63, 0x68, 0x6f, 0x73,
	0x65, 0x6e, 0x5f, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x19, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x0d, 0x63, 0x68, 0x6f,
	0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x22, 0x32, 0x0a, 0x1c, 0x44, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x32, 0xd2,
	0x03, 0x0a, 0x0a, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x41, 0x70, 0x69, 0x12, 0x58, 0x0a,
	0x10, 0x47, 0x65, 0x74, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65,
	0x6c, 0x12, 0x29, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68,
	0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e,
	0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x52, 0x0a, 0x0d, 0x43, 0x68, 0x6f, 0x6f, 0x73,
	0x65, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x26, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x43, 0x68, 0x6f, 0x6f,
	0x73, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x19, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x52, 0x0a, 0x0d, 0x41,
	0x64, 0x6a, 0x75, 0x73, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x26, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e,
	0x41, 0x64, 0x6a, 0x75, 0x73, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12,
	0x52, 0x0a, 0x0d, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c,
	0x12, 0x26, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65,
	0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x12, 0x6e, 0x0a, 0x11, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x6f, 0x73, 0x65,
	0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x2a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c,
	0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x6f, 0x73,
	0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x30, 0x01, 0x32, 0x7e, 0x0a, 0x0b, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x6e,
	0x66, 0x6f, 0x12, 0x6f, 0x0a, 0x15, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x43, 0x68,
	0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x2e, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x44,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x43, 0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x43,
	0x68, 0x6f, 0x73, 0x65, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x53, 0x75, 0x70, 0x70,
	0x6f, 0x72, 0x74, 0x42, 0x77, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0c, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63, 0x6f,
	0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_channel_proto_rawDescOnce sync.Once
	file_traits_channel_proto_rawDescData = file_traits_channel_proto_rawDesc
)

func file_traits_channel_proto_rawDescGZIP() []byte {
	file_traits_channel_proto_rawDescOnce.Do(func() {
		file_traits_channel_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_channel_proto_rawDescData)
	})
	return file_traits_channel_proto_rawDescData
}

var file_traits_channel_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_traits_channel_proto_goTypes = []interface{}{
	(*Channel)(nil),                          // 0: smartcore.traits.Channel
	(*ChosenChannelSupport)(nil),             // 1: smartcore.traits.ChosenChannelSupport
	(*GetChosenChannelRequest)(nil),          // 2: smartcore.traits.GetChosenChannelRequest
	(*ChooseChannelRequest)(nil),             // 3: smartcore.traits.ChooseChannelRequest
	(*AdjustChannelRequest)(nil),             // 4: smartcore.traits.AdjustChannelRequest
	(*ReturnChannelRequest)(nil),             // 5: smartcore.traits.ReturnChannelRequest
	(*PullChosenChannelRequest)(nil),         // 6: smartcore.traits.PullChosenChannelRequest
	(*PullChosenChannelResponse)(nil),        // 7: smartcore.traits.PullChosenChannelResponse
	(*DescribeChosenChannelRequest)(nil),     // 8: smartcore.traits.DescribeChosenChannelRequest
	(*PullChosenChannelResponse_Change)(nil), // 9: smartcore.traits.PullChosenChannelResponse.Change
	(*types.ResourceSupport)(nil),            // 10: smartcore.types.ResourceSupport
	(*fieldmaskpb.FieldMask)(nil),            // 11: google.protobuf.FieldMask
	(*timestamppb.Timestamp)(nil),            // 12: google.protobuf.Timestamp
}
var file_traits_channel_proto_depIdxs = []int32{
	10, // 0: smartcore.traits.ChosenChannelSupport.resource_support:type_name -> smartcore.types.ResourceSupport
	11, // 1: smartcore.traits.GetChosenChannelRequest.read_mask:type_name -> google.protobuf.FieldMask
	0,  // 2: smartcore.traits.ChooseChannelRequest.channel:type_name -> smartcore.traits.Channel
	11, // 3: smartcore.traits.PullChosenChannelRequest.read_mask:type_name -> google.protobuf.FieldMask
	9,  // 4: smartcore.traits.PullChosenChannelResponse.changes:type_name -> smartcore.traits.PullChosenChannelResponse.Change
	12, // 5: smartcore.traits.PullChosenChannelResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	0,  // 6: smartcore.traits.PullChosenChannelResponse.Change.chosen_channel:type_name -> smartcore.traits.Channel
	2,  // 7: smartcore.traits.ChannelApi.GetChosenChannel:input_type -> smartcore.traits.GetChosenChannelRequest
	3,  // 8: smartcore.traits.ChannelApi.ChooseChannel:input_type -> smartcore.traits.ChooseChannelRequest
	4,  // 9: smartcore.traits.ChannelApi.AdjustChannel:input_type -> smartcore.traits.AdjustChannelRequest
	5,  // 10: smartcore.traits.ChannelApi.ReturnChannel:input_type -> smartcore.traits.ReturnChannelRequest
	6,  // 11: smartcore.traits.ChannelApi.PullChosenChannel:input_type -> smartcore.traits.PullChosenChannelRequest
	8,  // 12: smartcore.traits.ChannelInfo.DescribeChosenChannel:input_type -> smartcore.traits.DescribeChosenChannelRequest
	0,  // 13: smartcore.traits.ChannelApi.GetChosenChannel:output_type -> smartcore.traits.Channel
	0,  // 14: smartcore.traits.ChannelApi.ChooseChannel:output_type -> smartcore.traits.Channel
	0,  // 15: smartcore.traits.ChannelApi.AdjustChannel:output_type -> smartcore.traits.Channel
	0,  // 16: smartcore.traits.ChannelApi.ReturnChannel:output_type -> smartcore.traits.Channel
	7,  // 17: smartcore.traits.ChannelApi.PullChosenChannel:output_type -> smartcore.traits.PullChosenChannelResponse
	1,  // 18: smartcore.traits.ChannelInfo.DescribeChosenChannel:output_type -> smartcore.traits.ChosenChannelSupport
	13, // [13:19] is the sub-list for method output_type
	7,  // [7:13] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_traits_channel_proto_init() }
func file_traits_channel_proto_init() {
	if File_traits_channel_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_channel_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Channel); i {
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
		file_traits_channel_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChosenChannelSupport); i {
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
		file_traits_channel_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetChosenChannelRequest); i {
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
		file_traits_channel_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChooseChannelRequest); i {
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
		file_traits_channel_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AdjustChannelRequest); i {
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
		file_traits_channel_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReturnChannelRequest); i {
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
		file_traits_channel_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullChosenChannelRequest); i {
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
		file_traits_channel_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullChosenChannelResponse); i {
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
		file_traits_channel_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DescribeChosenChannelRequest); i {
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
		file_traits_channel_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullChosenChannelResponse_Change); i {
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
			RawDescriptor: file_traits_channel_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_channel_proto_goTypes,
		DependencyIndexes: file_traits_channel_proto_depIdxs,
		MessageInfos:      file_traits_channel_proto_msgTypes,
	}.Build()
	File_traits_channel_proto = out.File
	file_traits_channel_proto_rawDesc = nil
	file_traits_channel_proto_goTypes = nil
	file_traits_channel_proto_depIdxs = nil
}
