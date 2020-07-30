// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.12.3
// source: device/traits/motion_sensor.proto

package traits

import (
	proto "github.com/golang/protobuf/proto"
	duration "github.com/golang/protobuf/ptypes/duration"
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

// Possible states for motion detected
type MotionDetectionState int32

const (
	// No motion is detected, or has been detected within the not_detected_delay period
	MotionDetectionState_NOT_DETECTED MotionDetectionState = 0
	// Motion has been detected by the device.
	MotionDetectionState_DETECTED MotionDetectionState = 1
)

// Enum value maps for MotionDetectionState.
var (
	MotionDetectionState_name = map[int32]string{
		0: "NOT_DETECTED",
		1: "DETECTED",
	}
	MotionDetectionState_value = map[string]int32{
		"NOT_DETECTED": 0,
		"DETECTED":     1,
	}
)

func (x MotionDetectionState) Enum() *MotionDetectionState {
	p := new(MotionDetectionState)
	*p = x
	return p
}

func (x MotionDetectionState) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MotionDetectionState) Descriptor() protoreflect.EnumDescriptor {
	return file_device_traits_motion_sensor_proto_enumTypes[0].Descriptor()
}

func (MotionDetectionState) Type() protoreflect.EnumType {
	return &file_device_traits_motion_sensor_proto_enumTypes[0]
}

func (x MotionDetectionState) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MotionDetectionState.Descriptor instead.
func (MotionDetectionState) EnumDescriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{0}
}

// the current state of the motion sensor
type MotionDetection struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// has motion been detected or not
	State MotionDetectionState `protobuf:"varint,1,opt,name=state,proto3,enum=smartcore.api.device.traits.MotionDetectionState" json:"state,omitempty"`
}

func (x *MotionDetection) Reset() {
	*x = MotionDetection{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_motion_sensor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MotionDetection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MotionDetection) ProtoMessage() {}

func (x *MotionDetection) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_motion_sensor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MotionDetection.ProtoReflect.Descriptor instead.
func (*MotionDetection) Descriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{0}
}

func (x *MotionDetection) GetState() MotionDetectionState {
	if x != nil {
		return x.State
	}
	return MotionDetectionState_NOT_DETECTED
}

// Trait.attribute for the configuration of the device
type MotionSensorAttributes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// how long the device is configured to wait before reporting a state of NOT_DETECTED. Should default to 30 seconds.
	NotDetectedDelay *duration.Duration `protobuf:"bytes,1,opt,name=not_detected_delay,json=notDetectedDelay,proto3" json:"not_detected_delay,omitempty"`
}

func (x *MotionSensorAttributes) Reset() {
	*x = MotionSensorAttributes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_motion_sensor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MotionSensorAttributes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MotionSensorAttributes) ProtoMessage() {}

func (x *MotionSensorAttributes) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_motion_sensor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MotionSensorAttributes.ProtoReflect.Descriptor instead.
func (*MotionSensorAttributes) Descriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{1}
}

func (x *MotionSensorAttributes) GetNotDetectedDelay() *duration.Duration {
	if x != nil {
		return x.NotDetectedDelay
	}
	return nil
}

// request to fetch the current state of the device
type GetMotionDetectionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name for the device to get the detection state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetMotionDetectionRequest) Reset() {
	*x = GetMotionDetectionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_motion_sensor_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMotionDetectionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMotionDetectionRequest) ProtoMessage() {}

func (x *GetMotionDetectionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_motion_sensor_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMotionDetectionRequest.ProtoReflect.Descriptor instead.
func (*GetMotionDetectionRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{2}
}

func (x *GetMotionDetectionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// request to be notified of changes to the state of the device
type PullMotionDetectionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name for the device to subscribe to
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *PullMotionDetectionRequest) Reset() {
	*x = PullMotionDetectionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_motion_sensor_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullMotionDetectionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullMotionDetectionRequest) ProtoMessage() {}

func (x *PullMotionDetectionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_motion_sensor_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullMotionDetectionRequest.ProtoReflect.Descriptor instead.
func (*PullMotionDetectionRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{3}
}

func (x *PullMotionDetectionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// response containing motion state changes
type PullMotionDetectionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the list of changes that have occurred since the last event
	Changes []*MotionDetectionChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullMotionDetectionResponse) Reset() {
	*x = PullMotionDetectionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_motion_sensor_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullMotionDetectionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullMotionDetectionResponse) ProtoMessage() {}

func (x *PullMotionDetectionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_motion_sensor_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullMotionDetectionResponse.ProtoReflect.Descriptor instead.
func (*PullMotionDetectionResponse) Descriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{4}
}

func (x *PullMotionDetectionResponse) GetChanges() []*MotionDetectionChange {
	if x != nil {
		return x.Changes
	}
	return nil
}

// A change to the motion state of the device
type MotionDetectionChange struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	CreateTime *timestamp.Timestamp `protobuf:"bytes,2,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// the new state for the device
	MotionDetection *MotionDetection `protobuf:"bytes,3,opt,name=motion_detection,json=motionDetection,proto3" json:"motion_detection,omitempty"`
}

func (x *MotionDetectionChange) Reset() {
	*x = MotionDetectionChange{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_motion_sensor_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MotionDetectionChange) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MotionDetectionChange) ProtoMessage() {}

func (x *MotionDetectionChange) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_motion_sensor_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MotionDetectionChange.ProtoReflect.Descriptor instead.
func (*MotionDetectionChange) Descriptor() ([]byte, []int) {
	return file_device_traits_motion_sensor_proto_rawDescGZIP(), []int{5}
}

func (x *MotionDetectionChange) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *MotionDetectionChange) GetCreateTime() *timestamp.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *MotionDetectionChange) GetMotionDetection() *MotionDetection {
	if x != nil {
		return x.MotionDetection
	}
	return nil
}

var File_device_traits_motion_sensor_proto protoreflect.FileDescriptor

var file_device_traits_motion_sensor_proto_rawDesc = []byte{
	0x0a, 0x21, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f,
	0x6d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0x5a, 0x0a, 0x0f, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x47, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x31, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x22, 0x61, 0x0a,
	0x16, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x41, 0x74, 0x74,
	0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x47, 0x0a, 0x12, 0x6e, 0x6f, 0x74, 0x5f, 0x64,
	0x65, 0x74, 0x65, 0x63, 0x74, 0x65, 0x64, 0x5f, 0x64, 0x65, 0x6c, 0x61, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x10,
	0x6e, 0x6f, 0x74, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x65, 0x64, 0x44, 0x65, 0x6c, 0x61, 0x79,
	0x22, 0x2f, 0x0a, 0x19, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0x30, 0x0a, 0x1a, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44,
	0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x22, 0x6b, 0x0a, 0x1b, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x6f, 0x74, 0x69, 0x6f,
	0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x4c, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73,
	0x22, 0xc1, 0x01, 0x0a, 0x15, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b,
	0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52,
	0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x57, 0x0a, 0x10, 0x6d,
	0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x6d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x2a, 0x36, 0x0a, 0x14, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65,
	0x74, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x10, 0x0a, 0x0c,
	0x4e, 0x4f, 0x54, 0x5f, 0x44, 0x45, 0x54, 0x45, 0x43, 0x54, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0c,
	0x0a, 0x08, 0x44, 0x45, 0x54, 0x45, 0x43, 0x54, 0x45, 0x44, 0x10, 0x01, 0x32, 0x9a, 0x02, 0x0a,
	0x0c, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x12, 0x7a, 0x0a,
	0x12, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x36, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e,
	0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x8d, 0x01, 0x0a, 0x14, 0x50, 0x75,
	0x6c, 0x6c, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x12, 0x37, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x38, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4d, 0x6f,
	0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30, 0x01, 0x42, 0xa5, 0x01, 0x0a, 0x1f, 0x64, 0x65,
	0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x11, 0x4d,
	0x6f, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x2e, 0x76, 0x61, 0x6e, 0x74, 0x69, 0x2e, 0x63, 0x6f,
	0x2e, 0x75, 0x6b, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x73, 0x63,
	0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x1b, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x41, 0x70, 0x69, 0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x54, 0x72, 0x61,
	0x69, 0x74, 0x73, 0xca, 0x02, 0x1b, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c,
	0x41, 0x70, 0x69, 0x5c, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_device_traits_motion_sensor_proto_rawDescOnce sync.Once
	file_device_traits_motion_sensor_proto_rawDescData = file_device_traits_motion_sensor_proto_rawDesc
)

func file_device_traits_motion_sensor_proto_rawDescGZIP() []byte {
	file_device_traits_motion_sensor_proto_rawDescOnce.Do(func() {
		file_device_traits_motion_sensor_proto_rawDescData = protoimpl.X.CompressGZIP(file_device_traits_motion_sensor_proto_rawDescData)
	})
	return file_device_traits_motion_sensor_proto_rawDescData
}

var file_device_traits_motion_sensor_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_device_traits_motion_sensor_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_device_traits_motion_sensor_proto_goTypes = []interface{}{
	(MotionDetectionState)(0),           // 0: smartcore.api.device.traits.MotionDetectionState
	(*MotionDetection)(nil),             // 1: smartcore.api.device.traits.MotionDetection
	(*MotionSensorAttributes)(nil),      // 2: smartcore.api.device.traits.MotionSensorAttributes
	(*GetMotionDetectionRequest)(nil),   // 3: smartcore.api.device.traits.GetMotionDetectionRequest
	(*PullMotionDetectionRequest)(nil),  // 4: smartcore.api.device.traits.PullMotionDetectionRequest
	(*PullMotionDetectionResponse)(nil), // 5: smartcore.api.device.traits.PullMotionDetectionResponse
	(*MotionDetectionChange)(nil),       // 6: smartcore.api.device.traits.MotionDetectionChange
	(*duration.Duration)(nil),           // 7: google.protobuf.Duration
	(*timestamp.Timestamp)(nil),         // 8: google.protobuf.Timestamp
}
var file_device_traits_motion_sensor_proto_depIdxs = []int32{
	0, // 0: smartcore.api.device.traits.MotionDetection.state:type_name -> smartcore.api.device.traits.MotionDetectionState
	7, // 1: smartcore.api.device.traits.MotionSensorAttributes.not_detected_delay:type_name -> google.protobuf.Duration
	6, // 2: smartcore.api.device.traits.PullMotionDetectionResponse.changes:type_name -> smartcore.api.device.traits.MotionDetectionChange
	8, // 3: smartcore.api.device.traits.MotionDetectionChange.create_time:type_name -> google.protobuf.Timestamp
	1, // 4: smartcore.api.device.traits.MotionDetectionChange.motion_detection:type_name -> smartcore.api.device.traits.MotionDetection
	3, // 5: smartcore.api.device.traits.MotionSensor.GetMotionDetection:input_type -> smartcore.api.device.traits.GetMotionDetectionRequest
	4, // 6: smartcore.api.device.traits.MotionSensor.PullMotionDetections:input_type -> smartcore.api.device.traits.PullMotionDetectionRequest
	1, // 7: smartcore.api.device.traits.MotionSensor.GetMotionDetection:output_type -> smartcore.api.device.traits.MotionDetection
	5, // 8: smartcore.api.device.traits.MotionSensor.PullMotionDetections:output_type -> smartcore.api.device.traits.PullMotionDetectionResponse
	7, // [7:9] is the sub-list for method output_type
	5, // [5:7] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_device_traits_motion_sensor_proto_init() }
func file_device_traits_motion_sensor_proto_init() {
	if File_device_traits_motion_sensor_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_device_traits_motion_sensor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MotionDetection); i {
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
		file_device_traits_motion_sensor_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MotionSensorAttributes); i {
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
		file_device_traits_motion_sensor_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMotionDetectionRequest); i {
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
		file_device_traits_motion_sensor_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullMotionDetectionRequest); i {
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
		file_device_traits_motion_sensor_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullMotionDetectionResponse); i {
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
		file_device_traits_motion_sensor_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MotionDetectionChange); i {
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
			RawDescriptor: file_device_traits_motion_sensor_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_device_traits_motion_sensor_proto_goTypes,
		DependencyIndexes: file_device_traits_motion_sensor_proto_depIdxs,
		EnumInfos:         file_device_traits_motion_sensor_proto_enumTypes,
		MessageInfos:      file_device_traits_motion_sensor_proto_msgTypes,
	}.Build()
	File_device_traits_motion_sensor_proto = out.File
	file_device_traits_motion_sensor_proto_rawDesc = nil
	file_device_traits_motion_sensor_proto_goTypes = nil
	file_device_traits_motion_sensor_proto_depIdxs = nil
}
