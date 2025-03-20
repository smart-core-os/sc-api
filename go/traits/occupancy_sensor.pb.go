// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.29.3
// source: traits/occupancy_sensor.proto

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

// Possible states for occupancy
type Occupancy_State int32

const (
	// There are no signals to suggest either an occupied or unoccupied space
	Occupancy_STATE_UNSPECIFIED Occupancy_State = 0
	// The space is occupied
	Occupancy_OCCUPIED Occupancy_State = 1
	// The space is unoccupied
	Occupancy_UNOCCUPIED Occupancy_State = 2
	// The space is likely occupied but some signals suggest that no activity is occurring (i.e. people are asleep or not
	// moving for other reasons)
	Occupancy_IDLE Occupancy_State = 3
)

// Enum value maps for Occupancy_State.
var (
	Occupancy_State_name = map[int32]string{
		0: "STATE_UNSPECIFIED",
		1: "OCCUPIED",
		2: "UNOCCUPIED",
		3: "IDLE",
	}
	Occupancy_State_value = map[string]int32{
		"STATE_UNSPECIFIED": 0,
		"OCCUPIED":          1,
		"UNOCCUPIED":        2,
		"IDLE":              3,
	}
)

func (x Occupancy_State) Enum() *Occupancy_State {
	p := new(Occupancy_State)
	*p = x
	return p
}

func (x Occupancy_State) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Occupancy_State) Descriptor() protoreflect.EnumDescriptor {
	return file_traits_occupancy_sensor_proto_enumTypes[0].Descriptor()
}

func (Occupancy_State) Type() protoreflect.EnumType {
	return &file_traits_occupancy_sensor_proto_enumTypes[0]
}

func (x Occupancy_State) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Occupancy_State.Descriptor instead.
func (Occupancy_State) EnumDescriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{0, 0}
}

// The occupancy state the device is reporting and updating
type Occupancy struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The current occupancy state
	State Occupancy_State `protobuf:"varint,1,opt,name=state,proto3,enum=smartcore.traits.Occupancy_State" json:"state,omitempty"`
	// The total number of people the occupancy sensor has detected. Do NOT use this value as an indication of occupancy
	// state, a value of 0 could be reported for a space that is occupied if the device either doesn't support people
	// counts or there is some other undefined issue with the counting part of the sensor suite.
	PeopleCount int32 `protobuf:"varint,2,opt,name=people_count,json=peopleCount,proto3" json:"people_count,omitempty"`
	// When the occupancy state last changed. Does not update when people_count changes unlike the timestamp in
	// OccupancyChange events
	StateChangeTime *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=state_change_time,json=stateChangeTime,proto3" json:"state_change_time,omitempty"`
	// Optional. List of human readable strings explaining why the device thinks the space is in the current state. For
	// example could say OCCUPIED:["Detected people in space"] or IDLE:["No motion detected for 10 minutes"]. Typically
	// used for debugging or troubleshooting purposes.
	Reasons []string `protobuf:"bytes,4,rep,name=reasons,proto3" json:"reasons,omitempty"`
	// Optional. How confident is the sensor that the current occupancy state is accurate. A value of 0 means that the
	// confidence is unknown
	Confidence float64 `protobuf:"fixed64,5,opt,name=confidence,proto3" json:"confidence,omitempty"`
}

func (x *Occupancy) Reset() {
	*x = Occupancy{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Occupancy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Occupancy) ProtoMessage() {}

func (x *Occupancy) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Occupancy.ProtoReflect.Descriptor instead.
func (*Occupancy) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{0}
}

func (x *Occupancy) GetState() Occupancy_State {
	if x != nil {
		return x.State
	}
	return Occupancy_STATE_UNSPECIFIED
}

func (x *Occupancy) GetPeopleCount() int32 {
	if x != nil {
		return x.PeopleCount
	}
	return 0
}

func (x *Occupancy) GetStateChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.StateChangeTime
	}
	return nil
}

func (x *Occupancy) GetReasons() []string {
	if x != nil {
		return x.Reasons
	}
	return nil
}

func (x *Occupancy) GetConfidence() float64 {
	if x != nil {
		return x.Confidence
	}
	return 0
}

// OccupancySupport describes the capabilities of devices implementing this trait
type OccupancySupport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// How a named device supports read/pull apis
	ResourceSupport *types.ResourceSupport `protobuf:"bytes,1,opt,name=resource_support,json=resourceSupport,proto3" json:"resource_support,omitempty"`
	// how many people can the occupancy service report. 0 means it won't report people counts. Note: this is _not_ the
	// total capacity for the space, it's the capacity of the sensor
	MaxPeople int32 `protobuf:"varint,2,opt,name=max_people,json=maxPeople,proto3" json:"max_people,omitempty"`
}

func (x *OccupancySupport) Reset() {
	*x = OccupancySupport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OccupancySupport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OccupancySupport) ProtoMessage() {}

func (x *OccupancySupport) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OccupancySupport.ProtoReflect.Descriptor instead.
func (*OccupancySupport) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{1}
}

func (x *OccupancySupport) GetResourceSupport() *types.ResourceSupport {
	if x != nil {
		return x.ResourceSupport
	}
	return nil
}

func (x *OccupancySupport) GetMaxPeople() int32 {
	if x != nil {
		return x.MaxPeople
	}
	return 0
}

// request to fetch the current state of the device
type GetOccupancyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name for the device to get the occupancy state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetOccupancyRequest) Reset() {
	*x = GetOccupancyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOccupancyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOccupancyRequest) ProtoMessage() {}

func (x *GetOccupancyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOccupancyRequest.ProtoReflect.Descriptor instead.
func (*GetOccupancyRequest) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{2}
}

func (x *GetOccupancyRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetOccupancyRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

// request to be notified of changes to the state of the device
type PullOccupancyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name for the device to subscribe to
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// When true the device will only send changes to the resource value.
	// The default behaviour is to send the current value immediately followed by any updates as they happen.
	UpdatesOnly bool `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullOccupancyRequest) Reset() {
	*x = PullOccupancyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullOccupancyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullOccupancyRequest) ProtoMessage() {}

func (x *PullOccupancyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullOccupancyRequest.ProtoReflect.Descriptor instead.
func (*PullOccupancyRequest) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{3}
}

func (x *PullOccupancyRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullOccupancyRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullOccupancyRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

// response containing occupancy state changes
type PullOccupancyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the list of changes that have occurred since the last event
	Changes []*PullOccupancyResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullOccupancyResponse) Reset() {
	*x = PullOccupancyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullOccupancyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullOccupancyResponse) ProtoMessage() {}

func (x *PullOccupancyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullOccupancyResponse.ProtoReflect.Descriptor instead.
func (*PullOccupancyResponse) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{4}
}

func (x *PullOccupancyResponse) GetChanges() []*PullOccupancyResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type DescribeOccupancyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DescribeOccupancyRequest) Reset() {
	*x = DescribeOccupancyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DescribeOccupancyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DescribeOccupancyRequest) ProtoMessage() {}

func (x *DescribeOccupancyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DescribeOccupancyRequest.ProtoReflect.Descriptor instead.
func (*DescribeOccupancyRequest) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{5}
}

func (x *DescribeOccupancyRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// A change to the occupancy state of the device, including people count
type PullOccupancyResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	// the new state for the device
	Occupancy *Occupancy `protobuf:"bytes,3,opt,name=occupancy,proto3" json:"occupancy,omitempty"`
}

func (x *PullOccupancyResponse_Change) Reset() {
	*x = PullOccupancyResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_occupancy_sensor_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullOccupancyResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullOccupancyResponse_Change) ProtoMessage() {}

func (x *PullOccupancyResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_occupancy_sensor_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullOccupancyResponse_Change.ProtoReflect.Descriptor instead.
func (*PullOccupancyResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_occupancy_sensor_proto_rawDescGZIP(), []int{4, 0}
}

func (x *PullOccupancyResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullOccupancyResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *PullOccupancyResponse_Change) GetOccupancy() *Occupancy {
	if x != nil {
		return x.Occupancy
	}
	return nil
}

var File_traits_occupancy_sensor_proto protoreflect.FileDescriptor

var file_traits_occupancy_sensor_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x6f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e,
	0x63, 0x79, 0x5f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x69, 0x6e, 0x66, 0x6f,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb1, 0x02, 0x0a, 0x09, 0x4f, 0x63, 0x63, 0x75, 0x70,
	0x61, 0x6e, 0x63, 0x79, 0x12, 0x37, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x21, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x12, 0x21, 0x0a,
	0x0c, 0x70, 0x65, 0x6f, 0x70, 0x6c, 0x65, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x0b, 0x70, 0x65, 0x6f, 0x70, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74,
	0x12, 0x46, 0x0a, 0x11, 0x73, 0x74, 0x61, 0x74, 0x65, 0x5f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x43, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x72, 0x65, 0x61, 0x73,
	0x6f, 0x6e, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x72, 0x65, 0x61, 0x73, 0x6f,
	0x6e, 0x73, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e,
	0x63, 0x65, 0x22, 0x46, 0x0a, 0x05, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x15, 0x0a, 0x11, 0x53,
	0x54, 0x41, 0x54, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44,
	0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x4f, 0x43, 0x43, 0x55, 0x50, 0x49, 0x45, 0x44, 0x10, 0x01,
	0x12, 0x0e, 0x0a, 0x0a, 0x55, 0x4e, 0x4f, 0x43, 0x43, 0x55, 0x50, 0x49, 0x45, 0x44, 0x10, 0x02,
	0x12, 0x08, 0x0a, 0x04, 0x49, 0x44, 0x4c, 0x45, 0x10, 0x03, 0x22, 0x7e, 0x0a, 0x10, 0x4f, 0x63,
	0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b,
	0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x6d,
	0x61, 0x78, 0x5f, 0x70, 0x65, 0x6f, 0x70, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x09, 0x6d, 0x61, 0x78, 0x50, 0x65, 0x6f, 0x70, 0x6c, 0x65, 0x22, 0x62, 0x0a, 0x13, 0x47, 0x65,
	0x74, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61,
	0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64,
	0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x22, 0x86,
	0x01, 0x0a, 0x14, 0x50, 0x75, 0x6c, 0x6c, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72,
	0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64,
	0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21, 0x0a, 0x0c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x5f,
	0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c, 0x79, 0x22, 0xf8, 0x01, 0x0a, 0x15, 0x50, 0x75, 0x6c, 0x6c,
	0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x48, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61,
	0x6e, 0x63, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x1a, 0x94, 0x01, 0x0a, 0x06,
	0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x39, 0x0a, 0x09, 0x6f, 0x63, 0x63, 0x75, 0x70,
	0x61, 0x6e, 0x63, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4f, 0x63,
	0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52, 0x09, 0x6f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e,
	0x63, 0x79, 0x22, 0x2e, 0x0a, 0x18, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x4f, 0x63,
	0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x32, 0xcc, 0x01, 0x0a, 0x12, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79,
	0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x41, 0x70, 0x69, 0x12, 0x52, 0x0a, 0x0c, 0x47, 0x65, 0x74,
	0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x12, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74,
	0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x12, 0x62, 0x0a,
	0x0d, 0x50, 0x75, 0x6c, 0x6c, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x12, 0x26,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x27, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x4f, 0x63,
	0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30,
	0x01, 0x32, 0x7a, 0x0a, 0x13, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x53, 0x65,
	0x6e, 0x73, 0x6f, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x63, 0x0a, 0x11, 0x44, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x62, 0x65, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x12, 0x2a, 0x2e,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e,
	0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4f, 0x63, 0x63,
	0x75, 0x70, 0x61, 0x6e, 0x63, 0x79, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x42, 0x7f, 0x0a,
	0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x14, 0x4f, 0x63, 0x63, 0x75, 0x70, 0x61, 0x6e, 0x63, 0x79,
	0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d,
	0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67,
	0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10, 0x53, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_occupancy_sensor_proto_rawDescOnce sync.Once
	file_traits_occupancy_sensor_proto_rawDescData = file_traits_occupancy_sensor_proto_rawDesc
)

func file_traits_occupancy_sensor_proto_rawDescGZIP() []byte {
	file_traits_occupancy_sensor_proto_rawDescOnce.Do(func() {
		file_traits_occupancy_sensor_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_occupancy_sensor_proto_rawDescData)
	})
	return file_traits_occupancy_sensor_proto_rawDescData
}

var file_traits_occupancy_sensor_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_traits_occupancy_sensor_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_traits_occupancy_sensor_proto_goTypes = []any{
	(Occupancy_State)(0),                 // 0: smartcore.traits.Occupancy.State
	(*Occupancy)(nil),                    // 1: smartcore.traits.Occupancy
	(*OccupancySupport)(nil),             // 2: smartcore.traits.OccupancySupport
	(*GetOccupancyRequest)(nil),          // 3: smartcore.traits.GetOccupancyRequest
	(*PullOccupancyRequest)(nil),         // 4: smartcore.traits.PullOccupancyRequest
	(*PullOccupancyResponse)(nil),        // 5: smartcore.traits.PullOccupancyResponse
	(*DescribeOccupancyRequest)(nil),     // 6: smartcore.traits.DescribeOccupancyRequest
	(*PullOccupancyResponse_Change)(nil), // 7: smartcore.traits.PullOccupancyResponse.Change
	(*timestamppb.Timestamp)(nil),        // 8: google.protobuf.Timestamp
	(*types.ResourceSupport)(nil),        // 9: smartcore.types.ResourceSupport
	(*fieldmaskpb.FieldMask)(nil),        // 10: google.protobuf.FieldMask
}
var file_traits_occupancy_sensor_proto_depIdxs = []int32{
	0,  // 0: smartcore.traits.Occupancy.state:type_name -> smartcore.traits.Occupancy.State
	8,  // 1: smartcore.traits.Occupancy.state_change_time:type_name -> google.protobuf.Timestamp
	9,  // 2: smartcore.traits.OccupancySupport.resource_support:type_name -> smartcore.types.ResourceSupport
	10, // 3: smartcore.traits.GetOccupancyRequest.read_mask:type_name -> google.protobuf.FieldMask
	10, // 4: smartcore.traits.PullOccupancyRequest.read_mask:type_name -> google.protobuf.FieldMask
	7,  // 5: smartcore.traits.PullOccupancyResponse.changes:type_name -> smartcore.traits.PullOccupancyResponse.Change
	8,  // 6: smartcore.traits.PullOccupancyResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	1,  // 7: smartcore.traits.PullOccupancyResponse.Change.occupancy:type_name -> smartcore.traits.Occupancy
	3,  // 8: smartcore.traits.OccupancySensorApi.GetOccupancy:input_type -> smartcore.traits.GetOccupancyRequest
	4,  // 9: smartcore.traits.OccupancySensorApi.PullOccupancy:input_type -> smartcore.traits.PullOccupancyRequest
	6,  // 10: smartcore.traits.OccupancySensorInfo.DescribeOccupancy:input_type -> smartcore.traits.DescribeOccupancyRequest
	1,  // 11: smartcore.traits.OccupancySensorApi.GetOccupancy:output_type -> smartcore.traits.Occupancy
	5,  // 12: smartcore.traits.OccupancySensorApi.PullOccupancy:output_type -> smartcore.traits.PullOccupancyResponse
	2,  // 13: smartcore.traits.OccupancySensorInfo.DescribeOccupancy:output_type -> smartcore.traits.OccupancySupport
	11, // [11:14] is the sub-list for method output_type
	8,  // [8:11] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_traits_occupancy_sensor_proto_init() }
func file_traits_occupancy_sensor_proto_init() {
	if File_traits_occupancy_sensor_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_occupancy_sensor_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Occupancy); i {
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
		file_traits_occupancy_sensor_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*OccupancySupport); i {
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
		file_traits_occupancy_sensor_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*GetOccupancyRequest); i {
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
		file_traits_occupancy_sensor_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*PullOccupancyRequest); i {
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
		file_traits_occupancy_sensor_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*PullOccupancyResponse); i {
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
		file_traits_occupancy_sensor_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*DescribeOccupancyRequest); i {
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
		file_traits_occupancy_sensor_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*PullOccupancyResponse_Change); i {
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
			RawDescriptor: file_traits_occupancy_sensor_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_occupancy_sensor_proto_goTypes,
		DependencyIndexes: file_traits_occupancy_sensor_proto_depIdxs,
		EnumInfos:         file_traits_occupancy_sensor_proto_enumTypes,
		MessageInfos:      file_traits_occupancy_sensor_proto_msgTypes,
	}.Build()
	File_traits_occupancy_sensor_proto = out.File
	file_traits_occupancy_sensor_proto_rawDesc = nil
	file_traits_occupancy_sensor_proto_goTypes = nil
	file_traits_occupancy_sensor_proto_depIdxs = nil
}
