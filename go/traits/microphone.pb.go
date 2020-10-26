// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: traits/microphone.proto

package traits

import (
	types "git.vanti.co.uk/smartcore/sc-api/go/types"
	proto "github.com/golang/protobuf/proto"
	field_mask "google.golang.org/genproto/protobuf/field_mask"
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

// Trait.attribute describing capabilities of the microphone device
type MicrophoneAttributes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Attributes associated with the gain property of the microphone. Note that a step value that is the same as the bounds
	// implies that the microphone only supports mute
	GainAttributes *types.FloatAttributes `protobuf:"bytes,1,opt,name=gain_attributes,json=gainAttributes,proto3" json:"gain_attributes,omitempty"`
	// How is mute implemented by the device. Can help to customise behaviour of interfaces to the device, e.g. by
	// disallowing gain change when muted
	MuteSupport types.MuteSupport `protobuf:"varint,3,opt,name=mute_support,json=muteSupport,proto3,enum=smartcore.api.types.MuteSupport" json:"mute_support,omitempty"`
}

func (x *MicrophoneAttributes) Reset() {
	*x = MicrophoneAttributes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_microphone_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MicrophoneAttributes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MicrophoneAttributes) ProtoMessage() {}

func (x *MicrophoneAttributes) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use MicrophoneAttributes.ProtoReflect.Descriptor instead.
func (*MicrophoneAttributes) Descriptor() ([]byte, []int) {
	return file_traits_microphone_proto_rawDescGZIP(), []int{0}
}

func (x *MicrophoneAttributes) GetGainAttributes() *types.FloatAttributes {
	if x != nil {
		return x.GainAttributes
	}
	return nil
}

func (x *MicrophoneAttributes) GetMuteSupport() types.MuteSupport {
	if x != nil {
		return x.MuteSupport
	}
	return types.MuteSupport_MUTE_NATIVE
}

type GetMicrophoneGainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the device to fetch the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// fields to fetch relative the the Volume type
	Fields *field_mask.FieldMask `protobuf:"bytes,2,opt,name=fields,proto3" json:"fields,omitempty"`
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

func (x *GetMicrophoneGainRequest) GetFields() *field_mask.FieldMask {
	if x != nil {
		return x.Fields
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
	Gain *types.Volume `protobuf:"bytes,2,opt,name=gain,proto3" json:"gain,omitempty"`
	// Only supported for Volume.level. Update the value relative to the current value.
	Delta bool `protobuf:"varint,3,opt,name=delta,proto3" json:"delta,omitempty"`
	// The fields we intend to update relative to the Volume type
	UpdateMask *field_mask.FieldMask `protobuf:"bytes,4,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
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

func (x *UpdateMicrophoneGainRequest) GetGain() *types.Volume {
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

func (x *UpdateMicrophoneGainRequest) GetUpdateMask() *field_mask.FieldMask {
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
	// fields to fetch relative the the Volume type
	Fields *field_mask.FieldMask `protobuf:"bytes,2,opt,name=fields,proto3" json:"fields,omitempty"`
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

func (x *PullMicrophoneGainRequest) GetFields() *field_mask.FieldMask {
	if x != nil {
		return x.Fields
	}
	return nil
}

type PullMicrophoneGainResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Changes since the last message
	Changes []*types.VolumeChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
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

func (x *PullMicrophoneGainResponse) GetChanges() []*types.VolumeChange {
	if x != nil {
		return x.Changes
	}
	return nil
}

var File_traits_microphone_proto protoreflect.FileDescriptor

var file_traits_microphone_proto_rawDesc = []byte{
	0x0a, 0x17, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x6d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68,
	0x6f, 0x6e, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x75, 0x6e, 0x69, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x76, 0x6f, 0x6c, 0x75, 0x6d,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xaa, 0x01, 0x0a, 0x14, 0x4d, 0x69, 0x63, 0x72,
	0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73,
	0x12, 0x4d, 0x0a, 0x0f, 0x67, 0x61, 0x69, 0x6e, 0x5f, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75,
	0x74, 0x65, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x46, 0x6c, 0x6f, 0x61, 0x74, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x52,
	0x0e, 0x67, 0x61, 0x69, 0x6e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12,
	0x43, 0x0a, 0x0c, 0x6d, 0x75, 0x74, 0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x4d, 0x75, 0x74, 0x65,
	0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x0b, 0x6d, 0x75, 0x74, 0x65, 0x53, 0x75, 0x70,
	0x70, 0x6f, 0x72, 0x74, 0x22, 0x62, 0x0a, 0x18, 0x47, 0x65, 0x74, 0x4d, 0x69, 0x63, 0x72, 0x6f,
	0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x32, 0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b,
	0x52, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x22, 0xb5, 0x01, 0x0a, 0x1b, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2f, 0x0a, 0x04,
	0x67, 0x61, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x52, 0x04, 0x67, 0x61, 0x69, 0x6e, 0x12, 0x14, 0x0a,
	0x05, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x64, 0x65,
	0x6c, 0x74, 0x61, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61,
	0x73, 0x6b, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64,
	0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x61, 0x73, 0x6b,
	0x22, 0x63, 0x0a, 0x19, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f,
	0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x32, 0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x06, 0x66,
	0x69, 0x65, 0x6c, 0x64, 0x73, 0x22, 0x59, 0x0a, 0x1a, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69, 0x63,
	0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x3b, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d,
	0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73,
	0x32, 0xa3, 0x02, 0x0a, 0x0a, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x12,
	0x52, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x47, 0x61, 0x69, 0x6e, 0x12, 0x2a, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65,
	0x74, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x56, 0x6f, 0x6c,
	0x75, 0x6d, 0x65, 0x12, 0x58, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x47, 0x61, 0x69,
	0x6e, 0x12, 0x2d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x69, 0x63, 0x72, 0x6f,
	0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x56, 0x6f, 0x6c, 0x75, 0x6d, 0x65, 0x12, 0x67, 0x0a,
	0x08, 0x50, 0x75, 0x6c, 0x6c, 0x47, 0x61, 0x69, 0x6e, 0x12, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c,
	0x6c, 0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x69,
	0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x47, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x42, 0x7b, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0f,
	0x4d, 0x69, 0x63, 0x72, 0x6f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x2a, 0x67, 0x69, 0x74, 0x2e, 0x76, 0x61, 0x6e, 0x74, 0x69, 0x2e, 0x63, 0x6f, 0x2e,
	0x75, 0x6b, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x73, 0x63, 0x2d,
	0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10,
	0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73,
	0xca, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
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

var file_traits_microphone_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_traits_microphone_proto_goTypes = []interface{}{
	(*MicrophoneAttributes)(nil),        // 0: smartcore.traits.MicrophoneAttributes
	(*GetMicrophoneGainRequest)(nil),    // 1: smartcore.traits.GetMicrophoneGainRequest
	(*UpdateMicrophoneGainRequest)(nil), // 2: smartcore.traits.UpdateMicrophoneGainRequest
	(*PullMicrophoneGainRequest)(nil),   // 3: smartcore.traits.PullMicrophoneGainRequest
	(*PullMicrophoneGainResponse)(nil),  // 4: smartcore.traits.PullMicrophoneGainResponse
	(*types.FloatAttributes)(nil),       // 5: smartcore.api.types.FloatAttributes
	(types.MuteSupport)(0),              // 6: smartcore.api.types.MuteSupport
	(*field_mask.FieldMask)(nil),        // 7: google.protobuf.FieldMask
	(*types.Volume)(nil),                // 8: smartcore.api.types.Volume
	(*types.VolumeChange)(nil),          // 9: smartcore.api.types.VolumeChange
}
var file_traits_microphone_proto_depIdxs = []int32{
	5,  // 0: smartcore.traits.MicrophoneAttributes.gain_attributes:type_name -> smartcore.api.types.FloatAttributes
	6,  // 1: smartcore.traits.MicrophoneAttributes.mute_support:type_name -> smartcore.api.types.MuteSupport
	7,  // 2: smartcore.traits.GetMicrophoneGainRequest.fields:type_name -> google.protobuf.FieldMask
	8,  // 3: smartcore.traits.UpdateMicrophoneGainRequest.gain:type_name -> smartcore.api.types.Volume
	7,  // 4: smartcore.traits.UpdateMicrophoneGainRequest.update_mask:type_name -> google.protobuf.FieldMask
	7,  // 5: smartcore.traits.PullMicrophoneGainRequest.fields:type_name -> google.protobuf.FieldMask
	9,  // 6: smartcore.traits.PullMicrophoneGainResponse.changes:type_name -> smartcore.api.types.VolumeChange
	1,  // 7: smartcore.traits.Microphone.GetGain:input_type -> smartcore.traits.GetMicrophoneGainRequest
	2,  // 8: smartcore.traits.Microphone.UpdateGain:input_type -> smartcore.traits.UpdateMicrophoneGainRequest
	3,  // 9: smartcore.traits.Microphone.PullGain:input_type -> smartcore.traits.PullMicrophoneGainRequest
	8,  // 10: smartcore.traits.Microphone.GetGain:output_type -> smartcore.api.types.Volume
	8,  // 11: smartcore.traits.Microphone.UpdateGain:output_type -> smartcore.api.types.Volume
	4,  // 12: smartcore.traits.Microphone.PullGain:output_type -> smartcore.traits.PullMicrophoneGainResponse
	10, // [10:13] is the sub-list for method output_type
	7,  // [7:10] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_traits_microphone_proto_init() }
func file_traits_microphone_proto_init() {
	if File_traits_microphone_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_microphone_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MicrophoneAttributes); i {
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
		file_traits_microphone_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
		file_traits_microphone_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
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
		file_traits_microphone_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
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
		file_traits_microphone_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
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
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_traits_microphone_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
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
