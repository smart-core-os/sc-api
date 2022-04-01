// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.1
// source: traits/brightness_sensor.proto

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

// AmbientBrightness records the light level measured by a device.
type AmbientBrightness struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Brightness measured in LUX
	BrightnessLux float32 `protobuf:"fixed32,1,opt,name=brightness_lux,json=brightnessLux,proto3" json:"brightness_lux,omitempty"`
}

func (x *AmbientBrightness) Reset() {
	*x = AmbientBrightness{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AmbientBrightness) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AmbientBrightness) ProtoMessage() {}

func (x *AmbientBrightness) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AmbientBrightness.ProtoReflect.Descriptor instead.
func (*AmbientBrightness) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{0}
}

func (x *AmbientBrightness) GetBrightnessLux() float32 {
	if x != nil {
		return x.BrightnessLux
	}
	return 0
}

// AmbientBrightnessSupport describes the capabilities of devices implementing this trait
type AmbientBrightnessSupport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// How a named device supports read/pull apis
	ResourceSupport *types.ResourceSupport `protobuf:"bytes,1,opt,name=resource_support,json=resourceSupport,proto3" json:"resource_support,omitempty"`
	// The range of values the device is capable of reporting.
	BrightnessLux *types.FloatBounds `protobuf:"bytes,2,opt,name=brightness_lux,json=brightnessLux,proto3" json:"brightness_lux,omitempty"`
}

func (x *AmbientBrightnessSupport) Reset() {
	*x = AmbientBrightnessSupport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AmbientBrightnessSupport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AmbientBrightnessSupport) ProtoMessage() {}

func (x *AmbientBrightnessSupport) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AmbientBrightnessSupport.ProtoReflect.Descriptor instead.
func (*AmbientBrightnessSupport) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{1}
}

func (x *AmbientBrightnessSupport) GetResourceSupport() *types.ResourceSupport {
	if x != nil {
		return x.ResourceSupport
	}
	return nil
}

func (x *AmbientBrightnessSupport) GetBrightnessLux() *types.FloatBounds {
	if x != nil {
		return x.BrightnessLux
	}
	return nil
}

type GetAmbientBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name for the device.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetAmbientBrightnessRequest) Reset() {
	*x = GetAmbientBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetAmbientBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetAmbientBrightnessRequest) ProtoMessage() {}

func (x *GetAmbientBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetAmbientBrightnessRequest.ProtoReflect.Descriptor instead.
func (*GetAmbientBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{2}
}

func (x *GetAmbientBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetAmbientBrightnessRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

type PullAmbientBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name for the device.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *PullAmbientBrightnessRequest) Reset() {
	*x = PullAmbientBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullAmbientBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullAmbientBrightnessRequest) ProtoMessage() {}

func (x *PullAmbientBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullAmbientBrightnessRequest.ProtoReflect.Descriptor instead.
func (*PullAmbientBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{3}
}

func (x *PullAmbientBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullAmbientBrightnessRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

type PullAmbientBrightnessResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Changes []*PullAmbientBrightnessResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullAmbientBrightnessResponse) Reset() {
	*x = PullAmbientBrightnessResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullAmbientBrightnessResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullAmbientBrightnessResponse) ProtoMessage() {}

func (x *PullAmbientBrightnessResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullAmbientBrightnessResponse.ProtoReflect.Descriptor instead.
func (*PullAmbientBrightnessResponse) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{4}
}

func (x *PullAmbientBrightnessResponse) GetChanges() []*PullAmbientBrightnessResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type DescribeAmbientBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DescribeAmbientBrightnessRequest) Reset() {
	*x = DescribeAmbientBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DescribeAmbientBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DescribeAmbientBrightnessRequest) ProtoMessage() {}

func (x *DescribeAmbientBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DescribeAmbientBrightnessRequest.ProtoReflect.Descriptor instead.
func (*DescribeAmbientBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{5}
}

func (x *DescribeAmbientBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type PullAmbientBrightnessResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name for the device that changed
	Name              string             `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	AmbientBrightness *AmbientBrightness `protobuf:"bytes,2,opt,name=ambient_brightness,json=ambientBrightness,proto3" json:"ambient_brightness,omitempty"`
	// when the change occurred
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
}

func (x *PullAmbientBrightnessResponse_Change) Reset() {
	*x = PullAmbientBrightnessResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_brightness_sensor_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullAmbientBrightnessResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullAmbientBrightnessResponse_Change) ProtoMessage() {}

func (x *PullAmbientBrightnessResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_brightness_sensor_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullAmbientBrightnessResponse_Change.ProtoReflect.Descriptor instead.
func (*PullAmbientBrightnessResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_brightness_sensor_proto_rawDescGZIP(), []int{4, 0}
}

func (x *PullAmbientBrightnessResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullAmbientBrightnessResponse_Change) GetAmbientBrightness() *AmbientBrightness {
	if x != nil {
		return x.AmbientBrightness
	}
	return nil
}

func (x *PullAmbientBrightnessResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

var File_traits_brightness_sensor_proto protoreflect.FileDescriptor

var file_traits_brightness_sensor_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e,
	0x65, 0x73, 0x73, 0x5f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x69, 0x6e, 0x66,
	0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x6e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x3a, 0x0a, 0x11, 0x41,
	0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73,
	0x12, 0x25, 0x0a, 0x0e, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x5f, 0x6c,
	0x75, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0d, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74,
	0x6e, 0x65, 0x73, 0x73, 0x4c, 0x75, 0x78, 0x22, 0xac, 0x01, 0x0a, 0x18, 0x41, 0x6d, 0x62, 0x69,
	0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x53, 0x75, 0x70,
	0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b, 0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74,
	0x52, 0x0f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72,
	0x74, 0x12, 0x43, 0x0a, 0x0e, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x5f,
	0x6c, 0x75, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x46, 0x6c, 0x6f, 0x61,
	0x74, 0x42, 0x6f, 0x75, 0x6e, 0x64, 0x73, 0x52, 0x0d, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e,
	0x65, 0x73, 0x73, 0x4c, 0x75, 0x78, 0x22, 0x6a, 0x0a, 0x1b, 0x47, 0x65, 0x74, 0x41, 0x6d, 0x62,
	0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61,
	0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46,
	0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61,
	0x73, 0x6b, 0x22, 0x6b, 0x0a, 0x1c, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e,
	0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d,
	0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c,
	0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x22,
	0xa1, 0x02, 0x0a, 0x1d, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42,
	0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x50, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x36, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e,
	0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x73, 0x1a, 0xad, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x52, 0x0a, 0x12, 0x61, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x5f, 0x62, 0x72,
	0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e,
	0x65, 0x73, 0x73, 0x52, 0x11, 0x61, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67,
	0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54,
	0x69, 0x6d, 0x65, 0x22, 0x36, 0x0a, 0x20, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x41,
	0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x32, 0xfd, 0x01, 0x0a, 0x13,
	0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72,
	0x41, 0x70, 0x69, 0x12, 0x6a, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e,
	0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x2d, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47,
	0x65, 0x74, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e,
	0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x6d,
	0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12,
	0x7a, 0x0a, 0x15, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72,
	0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x2e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c,
	0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2f, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c,
	0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x32, 0x93, 0x01, 0x0a, 0x14,
	0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x7b, 0x0a, 0x19, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65,
	0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x12, 0x32, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x41, 0x6d, 0x62,
	0x69, 0x65, 0x6e, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x6d, 0x62, 0x69, 0x65, 0x6e, 0x74,
	0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72,
	0x74, 0x42, 0x80, 0x01, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x15, 0x42, 0x72, 0x69, 0x67,
	0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63,
	0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02,
	0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74,
	0x73, 0xca, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_brightness_sensor_proto_rawDescOnce sync.Once
	file_traits_brightness_sensor_proto_rawDescData = file_traits_brightness_sensor_proto_rawDesc
)

func file_traits_brightness_sensor_proto_rawDescGZIP() []byte {
	file_traits_brightness_sensor_proto_rawDescOnce.Do(func() {
		file_traits_brightness_sensor_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_brightness_sensor_proto_rawDescData)
	})
	return file_traits_brightness_sensor_proto_rawDescData
}

var file_traits_brightness_sensor_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_traits_brightness_sensor_proto_goTypes = []interface{}{
	(*AmbientBrightness)(nil),                    // 0: smartcore.traits.AmbientBrightness
	(*AmbientBrightnessSupport)(nil),             // 1: smartcore.traits.AmbientBrightnessSupport
	(*GetAmbientBrightnessRequest)(nil),          // 2: smartcore.traits.GetAmbientBrightnessRequest
	(*PullAmbientBrightnessRequest)(nil),         // 3: smartcore.traits.PullAmbientBrightnessRequest
	(*PullAmbientBrightnessResponse)(nil),        // 4: smartcore.traits.PullAmbientBrightnessResponse
	(*DescribeAmbientBrightnessRequest)(nil),     // 5: smartcore.traits.DescribeAmbientBrightnessRequest
	(*PullAmbientBrightnessResponse_Change)(nil), // 6: smartcore.traits.PullAmbientBrightnessResponse.Change
	(*types.ResourceSupport)(nil),                // 7: smartcore.types.ResourceSupport
	(*types.FloatBounds)(nil),                    // 8: smartcore.types.FloatBounds
	(*fieldmaskpb.FieldMask)(nil),                // 9: google.protobuf.FieldMask
	(*timestamppb.Timestamp)(nil),                // 10: google.protobuf.Timestamp
}
var file_traits_brightness_sensor_proto_depIdxs = []int32{
	7,  // 0: smartcore.traits.AmbientBrightnessSupport.resource_support:type_name -> smartcore.types.ResourceSupport
	8,  // 1: smartcore.traits.AmbientBrightnessSupport.brightness_lux:type_name -> smartcore.types.FloatBounds
	9,  // 2: smartcore.traits.GetAmbientBrightnessRequest.read_mask:type_name -> google.protobuf.FieldMask
	9,  // 3: smartcore.traits.PullAmbientBrightnessRequest.read_mask:type_name -> google.protobuf.FieldMask
	6,  // 4: smartcore.traits.PullAmbientBrightnessResponse.changes:type_name -> smartcore.traits.PullAmbientBrightnessResponse.Change
	0,  // 5: smartcore.traits.PullAmbientBrightnessResponse.Change.ambient_brightness:type_name -> smartcore.traits.AmbientBrightness
	10, // 6: smartcore.traits.PullAmbientBrightnessResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	2,  // 7: smartcore.traits.BrightnessSensorApi.GetAmbientBrightness:input_type -> smartcore.traits.GetAmbientBrightnessRequest
	3,  // 8: smartcore.traits.BrightnessSensorApi.PullAmbientBrightness:input_type -> smartcore.traits.PullAmbientBrightnessRequest
	5,  // 9: smartcore.traits.BrightnessSensorInfo.DescribeAmbientBrightness:input_type -> smartcore.traits.DescribeAmbientBrightnessRequest
	0,  // 10: smartcore.traits.BrightnessSensorApi.GetAmbientBrightness:output_type -> smartcore.traits.AmbientBrightness
	4,  // 11: smartcore.traits.BrightnessSensorApi.PullAmbientBrightness:output_type -> smartcore.traits.PullAmbientBrightnessResponse
	1,  // 12: smartcore.traits.BrightnessSensorInfo.DescribeAmbientBrightness:output_type -> smartcore.traits.AmbientBrightnessSupport
	10, // [10:13] is the sub-list for method output_type
	7,  // [7:10] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_traits_brightness_sensor_proto_init() }
func file_traits_brightness_sensor_proto_init() {
	if File_traits_brightness_sensor_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_brightness_sensor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AmbientBrightness); i {
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
		file_traits_brightness_sensor_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AmbientBrightnessSupport); i {
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
		file_traits_brightness_sensor_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetAmbientBrightnessRequest); i {
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
		file_traits_brightness_sensor_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullAmbientBrightnessRequest); i {
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
		file_traits_brightness_sensor_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullAmbientBrightnessResponse); i {
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
		file_traits_brightness_sensor_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DescribeAmbientBrightnessRequest); i {
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
		file_traits_brightness_sensor_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullAmbientBrightnessResponse_Change); i {
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
			RawDescriptor: file_traits_brightness_sensor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_brightness_sensor_proto_goTypes,
		DependencyIndexes: file_traits_brightness_sensor_proto_depIdxs,
		MessageInfos:      file_traits_brightness_sensor_proto_msgTypes,
	}.Build()
	File_traits_brightness_sensor_proto = out.File
	file_traits_brightness_sensor_proto_rawDesc = nil
	file_traits_brightness_sensor_proto_goTypes = nil
	file_traits_brightness_sensor_proto_depIdxs = nil
}
