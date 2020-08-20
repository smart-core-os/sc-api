// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: device/traits/on_off.proto

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

// A change to the state
type OnOffChange struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	CreateTime *timestamp.Timestamp `protobuf:"bytes,2,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// the new state for the device
	State types.OnOffState `protobuf:"varint,3,opt,name=state,proto3,enum=smartcore.api.types.OnOffState" json:"state,omitempty"`
}

func (x *OnOffChange) Reset() {
	*x = OnOffChange{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OnOffChange) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OnOffChange) ProtoMessage() {}

func (x *OnOffChange) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OnOffChange.ProtoReflect.Descriptor instead.
func (*OnOffChange) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{0}
}

func (x *OnOffChange) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *OnOffChange) GetCreateTime() *timestamp.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *OnOffChange) GetState() types.OnOffState {
	if x != nil {
		return x.State
	}
	return types.OnOffState_UNKNOWN
}

type OnRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Required. The name of the device that should be controlled
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *OnRequest) Reset() {
	*x = OnRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OnRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OnRequest) ProtoMessage() {}

func (x *OnRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OnRequest.ProtoReflect.Descriptor instead.
func (*OnRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{1}
}

func (x *OnRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type OnReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *OnReply) Reset() {
	*x = OnReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OnReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OnReply) ProtoMessage() {}

func (x *OnReply) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OnReply.ProtoReflect.Descriptor instead.
func (*OnReply) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{2}
}

type OffRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Required. The name of the device that should be controlled
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *OffRequest) Reset() {
	*x = OffRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OffRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OffRequest) ProtoMessage() {}

func (x *OffRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OffRequest.ProtoReflect.Descriptor instead.
func (*OffRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{3}
}

func (x *OffRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type OffReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *OffReply) Reset() {
	*x = OffReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OffReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OffReply) ProtoMessage() {}

func (x *OffReply) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OffReply.ProtoReflect.Descriptor instead.
func (*OffReply) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{4}
}

type GetOnOffStateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetOnOffStateRequest) Reset() {
	*x = GetOnOffStateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOnOffStateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOnOffStateRequest) ProtoMessage() {}

func (x *GetOnOffStateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOnOffStateRequest.ProtoReflect.Descriptor instead.
func (*GetOnOffStateRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{5}
}

func (x *GetOnOffStateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type GetOnOffStateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	State types.OnOffState `protobuf:"varint,1,opt,name=state,proto3,enum=smartcore.api.types.OnOffState" json:"state,omitempty"`
}

func (x *GetOnOffStateResponse) Reset() {
	*x = GetOnOffStateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOnOffStateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOnOffStateResponse) ProtoMessage() {}

func (x *GetOnOffStateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOnOffStateResponse.ProtoReflect.Descriptor instead.
func (*GetOnOffStateResponse) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{6}
}

func (x *GetOnOffStateResponse) GetState() types.OnOffState {
	if x != nil {
		return x.State
	}
	return types.OnOffState_UNKNOWN
}

// A request to monitor the state of a device
type OnOffPullRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"` // todo: filters like name or frequency go here
}

func (x *OnOffPullRequest) Reset() {
	*x = OnOffPullRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OnOffPullRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OnOffPullRequest) ProtoMessage() {}

func (x *OnOffPullRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OnOffPullRequest.ProtoReflect.Descriptor instead.
func (*OnOffPullRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{7}
}

func (x *OnOffPullRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// Response to a Pull request for OnOffState changes
type OnOffPullResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Changes that have occurred since the last event
	Changes []*OnOffChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *OnOffPullResponse) Reset() {
	*x = OnOffPullResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_on_off_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OnOffPullResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OnOffPullResponse) ProtoMessage() {}

func (x *OnOffPullResponse) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_on_off_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OnOffPullResponse.ProtoReflect.Descriptor instead.
func (*OnOffPullResponse) Descriptor() ([]byte, []int) {
	return file_device_traits_on_off_proto_rawDescGZIP(), []int{8}
}

func (x *OnOffPullResponse) GetChanges() []*OnOffChange {
	if x != nil {
		return x.Changes
	}
	return nil
}

var File_device_traits_on_off_proto protoreflect.FileDescriptor

var file_device_traits_on_off_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f,
	0x6f, 0x6e, 0x5f, 0x6f, 0x66, 0x66, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2f, 0x6f, 0x6e, 0x5f, 0x6f, 0x66, 0x66, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x95,
	0x01, 0x0a, 0x0b, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12,
	0x35, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1f,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52,
	0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x22, 0x1f, 0x0a, 0x09, 0x4f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x09, 0x0a, 0x07, 0x4f, 0x6e, 0x52, 0x65, 0x70,
	0x6c, 0x79, 0x22, 0x20, 0x0a, 0x0a, 0x4f, 0x66, 0x66, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x22, 0x0a, 0x0a, 0x08, 0x4f, 0x66, 0x66, 0x52, 0x65, 0x70, 0x6c, 0x79,
	0x22, 0x2a, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x53, 0x74, 0x61, 0x74,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x4e, 0x0a, 0x15,
	0x47, 0x65, 0x74, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x1f, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x4f, 0x6e, 0x4f, 0x66, 0x66,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x22, 0x26, 0x0a, 0x10,
	0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x50, 0x75, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x22, 0x57, 0x0a, 0x11, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x50, 0x75, 0x6c,
	0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x42, 0x0a, 0x07, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x43, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x32, 0x93, 0x03,
	0x0a, 0x05, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x12, 0x52, 0x0a, 0x02, 0x4f, 0x6e, 0x12, 0x26, 0x2e,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x4f, 0x6e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x55, 0x0a, 0x03, 0x4f,
	0x66, 0x66, 0x12, 0x27, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x4f, 0x66, 0x66, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4f, 0x66, 0x66, 0x52, 0x65, 0x70,
	0x6c, 0x79, 0x12, 0x76, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x53, 0x74,
	0x61, 0x74, 0x65, 0x12, 0x31, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x32, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x53, 0x74, 0x61,
	0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x67, 0x0a, 0x04, 0x50, 0x75,
	0x6c, 0x6c, 0x12, 0x2d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x50, 0x75, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x2e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e,
	0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x50, 0x75, 0x6c, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x30, 0x01, 0x42, 0x9e, 0x01, 0x0a, 0x1f, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0a, 0x4f, 0x6e, 0x4f, 0x66, 0x66, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x2e, 0x76, 0x61, 0x6e, 0x74, 0x69,
	0x2e, 0x63, 0x6f, 0x2e, 0x75, 0x6b, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x64, 0x65, 0x76, 0x69, 0x63,
	0x65, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x1b, 0x53, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x41, 0x70, 0x69, 0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x1b, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x5c, 0x41, 0x70, 0x69, 0x5c, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x54, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_device_traits_on_off_proto_rawDescOnce sync.Once
	file_device_traits_on_off_proto_rawDescData = file_device_traits_on_off_proto_rawDesc
)

func file_device_traits_on_off_proto_rawDescGZIP() []byte {
	file_device_traits_on_off_proto_rawDescOnce.Do(func() {
		file_device_traits_on_off_proto_rawDescData = protoimpl.X.CompressGZIP(file_device_traits_on_off_proto_rawDescData)
	})
	return file_device_traits_on_off_proto_rawDescData
}

var file_device_traits_on_off_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_device_traits_on_off_proto_goTypes = []interface{}{
	(*OnOffChange)(nil),           // 0: smartcore.api.device.traits.OnOffChange
	(*OnRequest)(nil),             // 1: smartcore.api.device.traits.OnRequest
	(*OnReply)(nil),               // 2: smartcore.api.device.traits.OnReply
	(*OffRequest)(nil),            // 3: smartcore.api.device.traits.OffRequest
	(*OffReply)(nil),              // 4: smartcore.api.device.traits.OffReply
	(*GetOnOffStateRequest)(nil),  // 5: smartcore.api.device.traits.GetOnOffStateRequest
	(*GetOnOffStateResponse)(nil), // 6: smartcore.api.device.traits.GetOnOffStateResponse
	(*OnOffPullRequest)(nil),      // 7: smartcore.api.device.traits.OnOffPullRequest
	(*OnOffPullResponse)(nil),     // 8: smartcore.api.device.traits.OnOffPullResponse
	(*timestamp.Timestamp)(nil),   // 9: google.protobuf.Timestamp
	(types.OnOffState)(0),         // 10: smartcore.api.types.OnOffState
}
var file_device_traits_on_off_proto_depIdxs = []int32{
	9,  // 0: smartcore.api.device.traits.OnOffChange.create_time:type_name -> google.protobuf.Timestamp
	10, // 1: smartcore.api.device.traits.OnOffChange.state:type_name -> smartcore.api.types.OnOffState
	10, // 2: smartcore.api.device.traits.GetOnOffStateResponse.state:type_name -> smartcore.api.types.OnOffState
	0,  // 3: smartcore.api.device.traits.OnOffPullResponse.changes:type_name -> smartcore.api.device.traits.OnOffChange
	1,  // 4: smartcore.api.device.traits.OnOff.On:input_type -> smartcore.api.device.traits.OnRequest
	3,  // 5: smartcore.api.device.traits.OnOff.Off:input_type -> smartcore.api.device.traits.OffRequest
	5,  // 6: smartcore.api.device.traits.OnOff.GetOnOffState:input_type -> smartcore.api.device.traits.GetOnOffStateRequest
	7,  // 7: smartcore.api.device.traits.OnOff.Pull:input_type -> smartcore.api.device.traits.OnOffPullRequest
	2,  // 8: smartcore.api.device.traits.OnOff.On:output_type -> smartcore.api.device.traits.OnReply
	4,  // 9: smartcore.api.device.traits.OnOff.Off:output_type -> smartcore.api.device.traits.OffReply
	6,  // 10: smartcore.api.device.traits.OnOff.GetOnOffState:output_type -> smartcore.api.device.traits.GetOnOffStateResponse
	8,  // 11: smartcore.api.device.traits.OnOff.Pull:output_type -> smartcore.api.device.traits.OnOffPullResponse
	8,  // [8:12] is the sub-list for method output_type
	4,  // [4:8] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_device_traits_on_off_proto_init() }
func file_device_traits_on_off_proto_init() {
	if File_device_traits_on_off_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_device_traits_on_off_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OnOffChange); i {
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
		file_device_traits_on_off_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OnRequest); i {
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
		file_device_traits_on_off_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OnReply); i {
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
		file_device_traits_on_off_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OffRequest); i {
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
		file_device_traits_on_off_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OffReply); i {
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
		file_device_traits_on_off_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOnOffStateRequest); i {
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
		file_device_traits_on_off_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOnOffStateResponse); i {
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
		file_device_traits_on_off_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OnOffPullRequest); i {
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
		file_device_traits_on_off_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OnOffPullResponse); i {
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
			RawDescriptor: file_device_traits_on_off_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_device_traits_on_off_proto_goTypes,
		DependencyIndexes: file_device_traits_on_off_proto_depIdxs,
		MessageInfos:      file_device_traits_on_off_proto_msgTypes,
	}.Build()
	File_device_traits_on_off_proto = out.File
	file_device_traits_on_off_proto_rawDesc = nil
	file_device_traits_on_off_proto_goTypes = nil
	file_device_traits_on_off_proto_depIdxs = nil
}
