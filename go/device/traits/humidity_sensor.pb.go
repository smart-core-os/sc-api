// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.12.3
// source: device/traits/humidity_sensor.proto

package traits

import (
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

// Trait.attribute for humidity sensors
type HumiditySensorAttributes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HumiditySensorAttributes) Reset() {
	*x = HumiditySensorAttributes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_humidity_sensor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HumiditySensorAttributes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HumiditySensorAttributes) ProtoMessage() {}

func (x *HumiditySensorAttributes) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_humidity_sensor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HumiditySensorAttributes.ProtoReflect.Descriptor instead.
func (*HumiditySensorAttributes) Descriptor() ([]byte, []int) {
	return file_device_traits_humidity_sensor_proto_rawDescGZIP(), []int{0}
}

// represents humidity for a space
type Humidity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A percentage: 0 to 100, the relative humidity for the sensor
	RelativeHumidity float64 `protobuf:"fixed64,1,opt,name=relative_humidity,json=relativeHumidity,proto3" json:"relative_humidity,omitempty"`
}

func (x *Humidity) Reset() {
	*x = Humidity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_humidity_sensor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Humidity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Humidity) ProtoMessage() {}

func (x *Humidity) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_humidity_sensor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Humidity.ProtoReflect.Descriptor instead.
func (*Humidity) Descriptor() ([]byte, []int) {
	return file_device_traits_humidity_sensor_proto_rawDescGZIP(), []int{1}
}

func (x *Humidity) GetRelativeHumidity() float64 {
	if x != nil {
		return x.RelativeHumidity
	}
	return 0
}

type GetHumidityRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name of the device to get the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetHumidityRequest) Reset() {
	*x = GetHumidityRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_humidity_sensor_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHumidityRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHumidityRequest) ProtoMessage() {}

func (x *GetHumidityRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_humidity_sensor_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHumidityRequest.ProtoReflect.Descriptor instead.
func (*GetHumidityRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_humidity_sensor_proto_rawDescGZIP(), []int{2}
}

func (x *GetHumidityRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type PullHumidityRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name of the device to get the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *PullHumidityRequest) Reset() {
	*x = PullHumidityRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_humidity_sensor_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullHumidityRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullHumidityRequest) ProtoMessage() {}

func (x *PullHumidityRequest) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_humidity_sensor_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullHumidityRequest.ProtoReflect.Descriptor instead.
func (*PullHumidityRequest) Descriptor() ([]byte, []int) {
	return file_device_traits_humidity_sensor_proto_rawDescGZIP(), []int{3}
}

func (x *PullHumidityRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// response containing humidity changes
type PullHumidityResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the list of changes that have occurred since the last event
	Changes []*HumidityChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullHumidityResponse) Reset() {
	*x = PullHumidityResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_humidity_sensor_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullHumidityResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullHumidityResponse) ProtoMessage() {}

func (x *PullHumidityResponse) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_humidity_sensor_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullHumidityResponse.ProtoReflect.Descriptor instead.
func (*PullHumidityResponse) Descriptor() ([]byte, []int) {
	return file_device_traits_humidity_sensor_proto_rawDescGZIP(), []int{4}
}

func (x *PullHumidityResponse) GetChanges() []*HumidityChange {
	if x != nil {
		return x.Changes
	}
	return nil
}

// A change to the humidity reading of the device
type HumidityChange struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	CreateTime *timestamp.Timestamp `protobuf:"bytes,2,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// the new state for the device
	Humidity *Humidity `protobuf:"bytes,3,opt,name=humidity,proto3" json:"humidity,omitempty"`
}

func (x *HumidityChange) Reset() {
	*x = HumidityChange{}
	if protoimpl.UnsafeEnabled {
		mi := &file_device_traits_humidity_sensor_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HumidityChange) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HumidityChange) ProtoMessage() {}

func (x *HumidityChange) ProtoReflect() protoreflect.Message {
	mi := &file_device_traits_humidity_sensor_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HumidityChange.ProtoReflect.Descriptor instead.
func (*HumidityChange) Descriptor() ([]byte, []int) {
	return file_device_traits_humidity_sensor_proto_rawDescGZIP(), []int{5}
}

func (x *HumidityChange) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *HumidityChange) GetCreateTime() *timestamp.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *HumidityChange) GetHumidity() *Humidity {
	if x != nil {
		return x.Humidity
	}
	return nil
}

var File_device_traits_humidity_sensor_proto protoreflect.FileDescriptor

var file_device_traits_humidity_sensor_proto_rawDesc = []byte{
	0x0a, 0x23, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f,
	0x68, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x5f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x1a, 0x0a, 0x18, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x53,
	0x65, 0x6e, 0x73, 0x6f, 0x72, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x22,
	0x37, 0x0a, 0x08, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x12, 0x2b, 0x0a, 0x11, 0x72,
	0x65, 0x6c, 0x61, 0x74, 0x69, 0x76, 0x65, 0x5f, 0x68, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x01, 0x52, 0x10, 0x72, 0x65, 0x6c, 0x61, 0x74, 0x69, 0x76, 0x65,
	0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x22, 0x28, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x48,
	0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x29, 0x0a, 0x13, 0x50, 0x75, 0x6c, 0x6c, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69,
	0x74, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x5d, 0x0a,
	0x14, 0x50, 0x75, 0x6c, 0x6c, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x43, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x22, 0xa4, 0x01, 0x0a,
	0x0e, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65,
	0x12, 0x41, 0x0a, 0x08, 0x68, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x52, 0x08, 0x68, 0x75, 0x6d, 0x69, 0x64,
	0x69, 0x74, 0x79, 0x32, 0xee, 0x01, 0x0a, 0x0e, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79,
	0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x12, 0x65, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x48, 0x75, 0x6d,
	0x69, 0x64, 0x69, 0x74, 0x79, 0x12, 0x2f, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x12, 0x75, 0x0a,
	0x0c, 0x50, 0x75, 0x6c, 0x6c, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x12, 0x30, 0x2e,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c,
	0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x31, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75,
	0x6c, 0x6c, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69, 0x74, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x30, 0x01, 0x42, 0xa7, 0x01, 0x0a, 0x1f, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x64, 0x65, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x13, 0x48, 0x75, 0x6d, 0x69, 0x64, 0x69,
	0x74, 0x79, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x31, 0x67, 0x69, 0x74, 0x2e, 0x76, 0x61, 0x6e, 0x74, 0x69, 0x2e, 0x63, 0x6f, 0x2e, 0x75, 0x6b,
	0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70,
	0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0xaa, 0x02, 0x1b, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x41,
	0x70, 0x69, 0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73,
	0xca, 0x02, 0x1b, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x41, 0x70, 0x69,
	0x5c, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_device_traits_humidity_sensor_proto_rawDescOnce sync.Once
	file_device_traits_humidity_sensor_proto_rawDescData = file_device_traits_humidity_sensor_proto_rawDesc
)

func file_device_traits_humidity_sensor_proto_rawDescGZIP() []byte {
	file_device_traits_humidity_sensor_proto_rawDescOnce.Do(func() {
		file_device_traits_humidity_sensor_proto_rawDescData = protoimpl.X.CompressGZIP(file_device_traits_humidity_sensor_proto_rawDescData)
	})
	return file_device_traits_humidity_sensor_proto_rawDescData
}

var file_device_traits_humidity_sensor_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_device_traits_humidity_sensor_proto_goTypes = []interface{}{
	(*HumiditySensorAttributes)(nil), // 0: smartcore.api.device.traits.HumiditySensorAttributes
	(*Humidity)(nil),                 // 1: smartcore.api.device.traits.Humidity
	(*GetHumidityRequest)(nil),       // 2: smartcore.api.device.traits.GetHumidityRequest
	(*PullHumidityRequest)(nil),      // 3: smartcore.api.device.traits.PullHumidityRequest
	(*PullHumidityResponse)(nil),     // 4: smartcore.api.device.traits.PullHumidityResponse
	(*HumidityChange)(nil),           // 5: smartcore.api.device.traits.HumidityChange
	(*timestamp.Timestamp)(nil),      // 6: google.protobuf.Timestamp
}
var file_device_traits_humidity_sensor_proto_depIdxs = []int32{
	5, // 0: smartcore.api.device.traits.PullHumidityResponse.changes:type_name -> smartcore.api.device.traits.HumidityChange
	6, // 1: smartcore.api.device.traits.HumidityChange.create_time:type_name -> google.protobuf.Timestamp
	1, // 2: smartcore.api.device.traits.HumidityChange.humidity:type_name -> smartcore.api.device.traits.Humidity
	2, // 3: smartcore.api.device.traits.HumiditySensor.GetHumidity:input_type -> smartcore.api.device.traits.GetHumidityRequest
	3, // 4: smartcore.api.device.traits.HumiditySensor.PullHumidity:input_type -> smartcore.api.device.traits.PullHumidityRequest
	1, // 5: smartcore.api.device.traits.HumiditySensor.GetHumidity:output_type -> smartcore.api.device.traits.Humidity
	4, // 6: smartcore.api.device.traits.HumiditySensor.PullHumidity:output_type -> smartcore.api.device.traits.PullHumidityResponse
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_device_traits_humidity_sensor_proto_init() }
func file_device_traits_humidity_sensor_proto_init() {
	if File_device_traits_humidity_sensor_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_device_traits_humidity_sensor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HumiditySensorAttributes); i {
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
		file_device_traits_humidity_sensor_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Humidity); i {
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
		file_device_traits_humidity_sensor_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetHumidityRequest); i {
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
		file_device_traits_humidity_sensor_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullHumidityRequest); i {
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
		file_device_traits_humidity_sensor_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullHumidityResponse); i {
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
		file_device_traits_humidity_sensor_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HumidityChange); i {
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
			RawDescriptor: file_device_traits_humidity_sensor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_device_traits_humidity_sensor_proto_goTypes,
		DependencyIndexes: file_device_traits_humidity_sensor_proto_depIdxs,
		MessageInfos:      file_device_traits_humidity_sensor_proto_msgTypes,
	}.Build()
	File_device_traits_humidity_sensor_proto = out.File
	file_device_traits_humidity_sensor_proto_rawDesc = nil
	file_device_traits_humidity_sensor_proto_goTypes = nil
	file_device_traits_humidity_sensor_proto_depIdxs = nil
}
