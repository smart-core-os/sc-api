// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.29.3
// source: traits/microphone.proto

package traits

import (
	types "github.com/smart-core-os/sc-api/go/types"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	fieldmaskpb "google.golang.org/protobuf/types/known/fieldmaskpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// GainSupport describes the capabilities of devices implementing this trait.
type GainSupport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// How a named device supports read/write/pull apis
	ResourceSupport *types.ResourceSupport `protobuf:"bytes,1,opt,name=resource_support,json=resourceSupport,proto3" json:"resource_support,omitempty"`
	// Attributes associated with the gain property of the microphone. Note that a step value that is the same as the bounds
	// implies that the microphone only supports mute
	GainAttributes *types.FloatAttributes `protobuf:"bytes,2,opt,name=gain_attributes,json=gainAttributes,proto3" json:"gain_attributes,omitempty"`
	// How is mute implemented by the device. Can help to customise behaviour of interfaces to the device, e.g. by
	// disallowing gain change when muted
	MuteSupport types.MuteSupport `protobuf:"varint,3,opt,name=mute_support,json=muteSupport,proto3,enum=smartcore.types.MuteSupport" json:"mute_support,omitempty"`
}

func (x *GainSupport) Reset() {
	*x = GainSupport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GainSupport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GainSupport) ProtoMessage() {}

func (x *GainSupport) ProtoReflect() protoreflect.Message {
	mi := &file_traits_microphone_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GainSupport.ProtoReflect.Descriptor instead.
func (*GainSupport) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{0}
}

func (x *GainSupport) GetResourceSupport() *types.ResourceSupport {
	if x != nil {
		return x.ResourceSupport
	}
	return nil
}

func (x *GainSupport) GetGainAttributes() *types.FloatAttributes {
	if x != nil {
		return x.GainAttributes
	}
	return nil
}

func (x *GainSupport) GetMuteSupport() types.MuteSupport {
	if x != nil {
		return x.MuteSupport
	}
	return types.MuteSupport(0)
}

type GetMicrophoneGainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the device to fetch the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// fields to fetch relative the the AudioLevel type
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetMicrophoneGainRequest) Reset() {
	*x = GetMicrophoneGainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMicrophoneGainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMicrophoneGainRequest) ProtoMessage() {}

func (x *GetMicrophoneGainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_microphone_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMicrophoneGainRequest.ProtoReflect.Descriptor instead.
func (*GetMicrophoneGainRequest) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{1}
}

func (x *GetMicrophoneGainRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetMicrophoneGainRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

type UpdateMicrophoneGainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the device to update the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The updated gain value
	Gain *types.AudioLevel `protobuf:"bytes,2,opt,name=gain,proto3" json:"gain,omitempty"`
	// Only supported for AudioLevel.gain. Update the value relative to the current value.
	Delta bool `protobuf:"varint,3,opt,name=delta,proto3" json:"delta,omitempty"`
	// The fields we intend to update relative to the AudioLevel type
	UpdateMask *fieldmaskpb.FieldMask `protobuf:"bytes,4,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
}

func (x *UpdateMicrophoneGainRequest) Reset() {
	*x = UpdateMicrophoneGainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateMicrophoneGainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateMicrophoneGainRequest) ProtoMessage() {}

func (x *UpdateMicrophoneGainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_microphone_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateMicrophoneGainRequest.ProtoReflect.Descriptor instead.
func (*UpdateMicrophoneGainRequest) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateMicrophoneGainRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateMicrophoneGainRequest) GetGain() *types.AudioLevel {
	if x != nil {
		return x.Gain
	}
	return nil
}

func (x *UpdateMicrophoneGainRequest) GetDelta() bool {
	if x != nil {
		return x.Delta
	}
	return false
}

func (x *UpdateMicrophoneGainRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

type PullMicrophoneGainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the device to fetch the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// fields to fetch relative the the AudioLevel type
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// When true the device will only send changes to the resource value.
	// The default behaviour is to send the current value immediately followed by any updates as they happen.
	UpdatesOnly bool `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullMicrophoneGainRequest) Reset() {
	*x = PullMicrophoneGainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullMicrophoneGainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullMicrophoneGainRequest) ProtoMessage() {}

func (x *PullMicrophoneGainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_microphone_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullMicrophoneGainRequest.ProtoReflect.Descriptor instead.
func (*PullMicrophoneGainRequest) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{3}
}

func (x *PullMicrophoneGainRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullMicrophoneGainRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullMicrophoneGainRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

type PullMicrophoneGainResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Changes since the last message
	Changes []*types.AudioLevelChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullMicrophoneGainResponse) Reset() {
	*x = PullMicrophoneGainResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullMicrophoneGainResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullMicrophoneGainResponse) ProtoMessage() {}

func (x *PullMicrophoneGainResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_microphone_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullMicrophoneGainResponse.ProtoReflect.Descriptor instead.
func (*PullMicrophoneGainResponse) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{4}
}

func (x *PullMicrophoneGainResponse) GetChanges() []*types.AudioLevelChange {
	if x != nil {
		return x.Changes
	}
	return nil
}

type DescribeGainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DescribeGainRequest) Reset() {
	*x = DescribeGainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DescribeGainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DescribeGainRequest) ProtoMessage() {}

func (x *DescribeGainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_microphone_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DescribeGainRequest.ProtoReflect.Descriptor instead.
func (*DescribeGainRequest) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{5}
}

func (x *DescribeGainRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

var File_traits_microphone_proto protoreflect.FileDescriptor

var file_traits_microphone_proto_rawDesc = []byte{
	0x0a, 0x17, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x6d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68,
	0x6f, 0x6e, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x12, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x75, 0x6e, 0x69, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe6, 0x01, 0x0a, 0x0b, 0x47, 0x61, 0x69, 0x6e, 0x53, 0x75,
	0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b, 0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72,
	0x74, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x12, 0x49, 0x0a, 0x0f, 0x67, 0x61, 0x69, 0x6e, 0x5f, 0x61, 0x74, 0x74, 0x72, 0x69,
	0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x46, 0x6c,
	0x6f, 0x61, 0x74, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x52, 0x0e, 0x67,
	0x61, 0x69, 0x6e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x3f, 0x0a,
	0x0c, 0x6d, 0x75, 0x74, 0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x4d, 0x75, 0x74, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72,
	0x74, 0x52, 0x0b, 0x6d, 0x75, 0x74, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x22, 0x67,
	0x0a, 0x18, 0x47, 0x65, 0x74, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47,
	0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37,
	0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72,
	0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x22, 0xb5, 0x01, 0x0a, 0x1b, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2f, 0x0a, 0x04, 0x67,
	0x61, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x75, 0x64, 0x69,
	0x6f, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52, 0x04, 0x67, 0x61, 0x69, 0x6e, 0x12, 0x14, 0x0a, 0x05,
	0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x64, 0x65, 0x6c,
	0x74, 0x61, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73,
	0x6b, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d,
	0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x61, 0x73, 0x6b, 0x22,
	0x8b, 0x01, 0x0a, 0x19, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f,
	0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b,
	0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21, 0x0a, 0x0c, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c, 0x79, 0x22, 0x59, 0x0a,
	0x1a, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47,
	0x61, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3b, 0x0a, 0x07, 0x63,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41,
	0x75, 0x64, 0x69, 0x6f, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52,
	0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x22, 0x29, 0x0a, 0x13, 0x44, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x62, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x32, 0xa6, 0x02, 0x0a, 0x0d, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f,
	0x6e, 0x65, 0x41, 0x70, 0x69, 0x12, 0x52, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x47, 0x61, 0x69, 0x6e,
	0x12, 0x2a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41,
	0x75, 0x64, 0x69, 0x6f, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x58, 0x0a, 0x0a, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x12, 0x2d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x4c, 0x65,
	0x76, 0x65, 0x6c, 0x12, 0x67, 0x0a, 0x08, 0x50, 0x75, 0x6c, 0x6c, 0x47, 0x61, 0x69, 0x6e, 0x12,
	0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e,
	0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61,
	0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x32, 0x66, 0x0a, 0x0e,
	0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x54,
	0x0a, 0x0c, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x12, 0x25,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x61, 0x69, 0x6e, 0x53, 0x75, 0x70,
	0x70, 0x6f, 0x72, 0x74, 0x42, 0x7a, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0f, 0x4d, 0x69,
	0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10,
	0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_microphone_proto_rawDescOnce sync.Once
	file_traits_microphone_proto_rawDescData = file_traits_microphone_proto_rawDesc
)

func file_traits_microphone_proto_rawDescGZIP() []byte {
	file_traits_microphone_proto_rawDescOnce.Do(func() {
		file_traits_microphone_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_microphone_proto_rawDescData)
	})
	return file_traits_microphone_proto_rawDescData
}

var file_traits_microphone_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_traits_microphone_proto_goTypes = []any{
	(*GainSupport)(nil),                 // 0: smartcore.traits.GainSupport
	(*GetMicrophoneGainRequest)(nil),    // 1: smartcore.traits.GetMicrophoneGainRequest
	(*UpdateMicrophoneGainRequest)(nil), // 2: smartcore.traits.UpdateMicrophoneGainRequest
	(*PullMicrophoneGainRequest)(nil),   // 3: smartcore.traits.PullMicrophoneGainRequest
	(*PullMicrophoneGainResponse)(nil),  // 4: smartcore.traits.PullMicrophoneGainResponse
	(*DescribeGainRequest)(nil),         // 5: smartcore.traits.DescribeGainRequest
	(*types.ResourceSupport)(nil),       // 6: smartcore.types.ResourceSupport
	(*types.FloatAttributes)(nil),       // 7: smartcore.types.FloatAttributes
	(types.MuteSupport)(0),              // 8: smartcore.types.MuteSupport
	(*fieldmaskpb.FieldMask)(nil),       // 9: google.protobuf.FieldMask
	(*types.AudioLevel)(nil),            // 10: smartcore.types.AudioLevel
	(*types.AudioLevelChange)(nil),      // 11: smartcore.types.AudioLevelChange
}
var file_traits_microphone_proto_depIdxs = []int32{
	6,  // 0: smartcore.traits.GainSupport.resource_support:type_name -> smartcore.types.ResourceSupport
	7,  // 1: smartcore.traits.GainSupport.gain_attributes:type_name -> smartcore.types.FloatAttributes
	8,  // 2: smartcore.traits.GainSupport.mute_support:type_name -> smartcore.types.MuteSupport
	9,  // 3: smartcore.traits.GetMicrophoneGainRequest.read_mask:type_name -> google.protobuf.FieldMask
	10, // 4: smartcore.traits.UpdateMicrophoneGainRequest.gain:type_name -> smartcore.types.AudioLevel
	9,  // 5: smartcore.traits.UpdateMicrophoneGainRequest.update_mask:type_name -> google.protobuf.FieldMask
	9,  // 6: smartcore.traits.PullMicrophoneGainRequest.read_mask:type_name -> google.protobuf.FieldMask
	11, // 7: smartcore.traits.PullMicrophoneGainResponse.changes:type_name -> smartcore.types.AudioLevelChange
	1,  // 8: smartcore.traits.MicrophoneApi.GetGain:input_type -> smartcore.traits.GetMicrophoneGainRequest
	2,  // 9: smartcore.traits.MicrophoneApi.UpdateGain:input_type -> smartcore.traits.UpdateMicrophoneGainRequest
	3,  // 10: smartcore.traits.MicrophoneApi.PullGain:input_type -> smartcore.traits.PullMicrophoneGainRequest
	5,  // 11: smartcore.traits.MicrophoneInfo.DescribeGain:input_type -> smartcore.traits.DescribeGainRequest
	10, // 12: smartcore.traits.MicrophoneApi.GetGain:output_type -> smartcore.types.AudioLevel
	10, // 13: smartcore.traits.MicrophoneApi.UpdateGain:output_type -> smartcore.types.AudioLevel
	4,  // 14: smartcore.traits.MicrophoneApi.PullGain:output_type -> smartcore.traits.PullMicrophoneGainResponse
	0,  // 15: smartcore.traits.MicrophoneInfo.DescribeGain:output_type -> smartcore.traits.GainSupport
	12, // [12:16] is the sub-list for method output_type
	8,  // [8:12] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_traits_microphone_proto_init() }
func file_traits_microphone_proto_init() {
	if File_traits_microphone_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_microphone_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*GainSupport); i {
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
		file_traits_microphone_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*GetMicrophoneGainRequest); i {
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
		file_traits_microphone_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*UpdateMicrophoneGainRequest); i {
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
		file_traits_microphone_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*PullMicrophoneGainRequest); i {
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
		file_traits_microphone_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*PullMicrophoneGainResponse); i {
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
		file_traits_microphone_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*DescribeGainRequest); i {
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
			RawDescriptor: file_traits_microphone_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_microphone_proto_goTypes,
		DependencyIndexes: file_traits_microphone_proto_depIdxs,
		MessageInfos:      file_traits_microphone_proto_msgTypes,
	}.Build()
	File_traits_microphone_proto = out.File
	file_traits_microphone_proto_rawDesc = nil
	file_traits_microphone_proto_goTypes = nil
	file_traits_microphone_proto_depIdxs = nil
}
