// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.28.3
// source: traits/press.proto

package traits

import (
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

// Instantaneous pressed state.
type PressedState_Press int32

const (
	PressedState_PRESS_UNSPECIFIED PressedState_Press = 0
	// The input is not pressed.
	PressedState_UNPRESSED PressedState_Press = 1
	// The input is being pressed.
	PressedState_PRESSED PressedState_Press = 2
)

// Enum value maps for PressedState_Press.
var (
	PressedState_Press_name = map[int32]string{
		0: "PRESS_UNSPECIFIED",
		1: "UNPRESSED",
		2: "PRESSED",
	}
	PressedState_Press_value = map[string]int32{
		"PRESS_UNSPECIFIED": 0,
		"UNPRESSED":         1,
		"PRESSED":           2,
	}
)

func (x PressedState_Press) Enum() *PressedState_Press {
	p := new(PressedState_Press)
	*p = x
	return p
}

func (x PressedState_Press) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PressedState_Press) Descriptor() protoreflect.EnumDescriptor {
	return file_traits_press_proto_enumTypes[0].Descriptor()
}

func (PressedState_Press) Type() protoreflect.EnumType {
	return &file_traits_press_proto_enumTypes[0]
}

func (x PressedState_Press) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PressedState_Press.Descriptor instead.
func (PressedState_Press) EnumDescriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{0, 0}
}

type PressedState_Gesture_Kind int32

const (
	PressedState_Gesture_KIND_UNSPECIFIED PressedState_Gesture_Kind = 0
	// One or more short press-and-release actions.
	// Presses in short succession may be fused into double-clicks, triple-clicks etc. - in this case, the number
	// of fused clicks is stored in the count field.
	// When clicks are fused in this way, the gesture will not appear at all until the final click has finished -
	// it's not possible for a single gesture to be first reported as a single click, and then modified to a double click.
	PressedState_Gesture_CLICK PressedState_Gesture_Kind = 1
	// The input is kept in the pressed state for an extended period.
	// The input may support repeat events, in which case the count will increment for each repeat event, keeping id
	// the same because it's part of the same gesture.
	// For HOLD gestures, the end_time is not set until the input has been released, allowing the client to determine
	// when the gesture has ended.
	PressedState_Gesture_HOLD PressedState_Gesture_Kind = 2
)

// Enum value maps for PressedState_Gesture_Kind.
var (
	PressedState_Gesture_Kind_name = map[int32]string{
		0: "KIND_UNSPECIFIED",
		1: "CLICK",
		2: "HOLD",
	}
	PressedState_Gesture_Kind_value = map[string]int32{
		"KIND_UNSPECIFIED": 0,
		"CLICK":            1,
		"HOLD":             2,
	}
)

func (x PressedState_Gesture_Kind) Enum() *PressedState_Gesture_Kind {
	p := new(PressedState_Gesture_Kind)
	*p = x
	return p
}

func (x PressedState_Gesture_Kind) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PressedState_Gesture_Kind) Descriptor() protoreflect.EnumDescriptor {
	return file_traits_press_proto_enumTypes[1].Descriptor()
}

func (PressedState_Gesture_Kind) Type() protoreflect.EnumType {
	return &file_traits_press_proto_enumTypes[1]
}

func (x PressedState_Gesture_Kind) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PressedState_Gesture_Kind.Descriptor instead.
func (PressedState_Gesture_Kind) EnumDescriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{0, 0, 0}
}

type PressedState struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	State PressedState_Press `protobuf:"varint,1,opt,name=state,proto3,enum=smartcore.traits.PressedState_Press" json:"state,omitempty"`
	// The time that state changed to its present value.
	StateChangeTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=state_change_time,json=stateChangeTime,proto3" json:"state_change_time,omitempty"`
	// The gesture that is currently in progress, or finished most recently.
	// May be absent, if there is no gesture recorded for this input.
	MostRecentGesture *PressedState_Gesture `protobuf:"bytes,3,opt,name=most_recent_gesture,json=mostRecentGesture,proto3" json:"most_recent_gesture,omitempty"`
}

func (x *PressedState) Reset() {
	*x = PressedState{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PressedState) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PressedState) ProtoMessage() {}

func (x *PressedState) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PressedState.ProtoReflect.Descriptor instead.
func (*PressedState) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{0}
}

func (x *PressedState) GetState() PressedState_Press {
	if x != nil {
		return x.State
	}
	return PressedState_PRESS_UNSPECIFIED
}

func (x *PressedState) GetStateChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.StateChangeTime
	}
	return nil
}

func (x *PressedState) GetMostRecentGesture() *PressedState_Gesture {
	if x != nil {
		return x.MostRecentGesture
	}
	return nil
}

type GetPressedStateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetPressedStateRequest) Reset() {
	*x = GetPressedStateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPressedStateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPressedStateRequest) ProtoMessage() {}

func (x *GetPressedStateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPressedStateRequest.ProtoReflect.Descriptor instead.
func (*GetPressedStateRequest) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{1}
}

func (x *GetPressedStateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetPressedStateRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

type PullPressedStateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// By default, PullPressedState sends the initial PressedState when the stream opens, followed by changes.
	// Setting updates_only true will disable this behaviour, sending only when the PressedState changes.
	UpdatesOnly bool `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullPressedStateRequest) Reset() {
	*x = PullPressedStateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullPressedStateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullPressedStateRequest) ProtoMessage() {}

func (x *PullPressedStateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullPressedStateRequest.ProtoReflect.Descriptor instead.
func (*PullPressedStateRequest) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{2}
}

func (x *PullPressedStateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullPressedStateRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullPressedStateRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

type PullPressedStateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Changes []*PullPressedStateResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullPressedStateResponse) Reset() {
	*x = PullPressedStateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullPressedStateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullPressedStateResponse) ProtoMessage() {}

func (x *PullPressedStateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullPressedStateResponse.ProtoReflect.Descriptor instead.
func (*PullPressedStateResponse) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{3}
}

func (x *PullPressedStateResponse) GetChanges() []*PullPressedStateResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type UpdatePressedStateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	UpdateMask   *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
	PressedState *PressedState          `protobuf:"bytes,3,opt,name=pressed_state,json=pressedState,proto3" json:"pressed_state,omitempty"`
}

func (x *UpdatePressedStateRequest) Reset() {
	*x = UpdatePressedStateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePressedStateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePressedStateRequest) ProtoMessage() {}

func (x *UpdatePressedStateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePressedStateRequest.ProtoReflect.Descriptor instead.
func (*UpdatePressedStateRequest) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{4}
}

func (x *UpdatePressedStateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdatePressedStateRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

func (x *UpdatePressedStateRequest) GetPressedState() *PressedState {
	if x != nil {
		return x.PressedState
	}
	return nil
}

// A representation of user intent, deduced from a pattern of presses.
// The way that the device converts presses into gestures is implementation-defined.
// There may be a delay between the presses and the registration of a gesture.
type PressedState_Gesture struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Opaque identifier changes each time a new gesture begins.
	// The gesture will remain in the PressedState even when the client has already seen it; the client can use the id
	// to detect when a new gesture has begun.
	Id   string                    `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Kind PressedState_Gesture_Kind `protobuf:"varint,2,opt,name=kind,proto3,enum=smartcore.traits.PressedState_Gesture_Kind" json:"kind,omitempty"`
	// A counter for sub-events that occur within a single gesture. See the Kind for details of meaning.
	Count int32 `protobuf:"varint,3,opt,name=count,proto3" json:"count,omitempty"`
	// The time when the gesture was first recognised.
	StartTime *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=start_time,json=startTime,proto3" json:"start_time,omitempty"`
	// The time when the gesture was recognised as completed. For HOLD gestures, this remains unset until the input
	// is released.
	EndTime *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=end_time,json=endTime,proto3" json:"end_time,omitempty"`
}

func (x *PressedState_Gesture) Reset() {
	*x = PressedState_Gesture{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PressedState_Gesture) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PressedState_Gesture) ProtoMessage() {}

func (x *PressedState_Gesture) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PressedState_Gesture.ProtoReflect.Descriptor instead.
func (*PressedState_Gesture) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{0, 0}
}

func (x *PressedState_Gesture) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PressedState_Gesture) GetKind() PressedState_Gesture_Kind {
	if x != nil {
		return x.Kind
	}
	return PressedState_Gesture_KIND_UNSPECIFIED
}

func (x *PressedState_Gesture) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *PressedState_Gesture) GetStartTime() *timestamppb.Timestamp {
	if x != nil {
		return x.StartTime
	}
	return nil
}

func (x *PressedState_Gesture) GetEndTime() *timestamppb.Timestamp {
	if x != nil {
		return x.EndTime
	}
	return nil
}

type PullPressedStateResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ChangeTime   *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	PressedState *PressedState          `protobuf:"bytes,3,opt,name=pressed_state,json=pressedState,proto3" json:"pressed_state,omitempty"`
}

func (x *PullPressedStateResponse_Change) Reset() {
	*x = PullPressedStateResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_press_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullPressedStateResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullPressedStateResponse_Change) ProtoMessage() {}

func (x *PullPressedStateResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_press_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullPressedStateResponse_Change.ProtoReflect.Descriptor instead.
func (*PullPressedStateResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_press_proto_rawDescGZIP(), []int{3, 0}
}

func (x *PullPressedStateResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullPressedStateResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *PullPressedStateResponse_Change) GetPressedState() *PressedState {
	if x != nil {
		return x.PressedState
	}
	return nil
}

var File_traits_press_proto protoreflect.FileDescriptor

var file_traits_press_proto_rawDesc = []byte{
	0x0a, 0x12, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x70, 0x72, 0x65, 0x73, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61,
	0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xbe, 0x04, 0x0a, 0x0c, 0x50, 0x72,
	0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x3a, 0x0a, 0x05, 0x73, 0x74,
	0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x65,
	0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x50, 0x72, 0x65, 0x73, 0x73, 0x52,
	0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x12, 0x46, 0x0a, 0x11, 0x73, 0x74, 0x61, 0x74, 0x65, 0x5f,
	0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0f, 0x73,
	0x74, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x56,
	0x0a, 0x13, 0x6d, 0x6f, 0x73, 0x74, 0x5f, 0x72, 0x65, 0x63, 0x65, 0x6e, 0x74, 0x5f, 0x67, 0x65,
	0x73, 0x74, 0x75, 0x72, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50,
	0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x47, 0x65, 0x73, 0x74,
	0x75, 0x72, 0x65, 0x52, 0x11, 0x6d, 0x6f, 0x73, 0x74, 0x52, 0x65, 0x63, 0x65, 0x6e, 0x74, 0x47,
	0x65, 0x73, 0x74, 0x75, 0x72, 0x65, 0x1a, 0x95, 0x02, 0x0a, 0x07, 0x47, 0x65, 0x73, 0x74, 0x75,
	0x72, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x3f, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x2e, 0x47, 0x65, 0x73, 0x74, 0x75, 0x72, 0x65, 0x2e, 0x4b, 0x69, 0x6e, 0x64, 0x52, 0x04, 0x6b,
	0x69, 0x6e, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x73, 0x74, 0x61,
	0x72, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x73, 0x74, 0x61, 0x72, 0x74,
	0x54, 0x69, 0x6d, 0x65, 0x12, 0x35, 0x0a, 0x08, 0x65, 0x6e, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x07, 0x65, 0x6e, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x22, 0x31, 0x0a, 0x04, 0x4b,
	0x69, 0x6e, 0x64, 0x12, 0x14, 0x0a, 0x10, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x43, 0x4c, 0x49,
	0x43, 0x4b, 0x10, 0x01, 0x12, 0x08, 0x0a, 0x04, 0x48, 0x4f, 0x4c, 0x44, 0x10, 0x02, 0x22, 0x3a,
	0x0a, 0x05, 0x50, 0x72, 0x65, 0x73, 0x73, 0x12, 0x15, 0x0a, 0x11, 0x50, 0x52, 0x45, 0x53, 0x53,
	0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0d,
	0x0a, 0x09, 0x55, 0x4e, 0x50, 0x52, 0x45, 0x53, 0x53, 0x45, 0x44, 0x10, 0x01, 0x12, 0x0b, 0x0a,
	0x07, 0x50, 0x52, 0x45, 0x53, 0x53, 0x45, 0x44, 0x10, 0x02, 0x22, 0x65, 0x0a, 0x16, 0x47, 0x65,
	0x74, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64,
	0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69,
	0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73,
	0x6b, 0x22, 0x89, 0x01, 0x0a, 0x17, 0x50, 0x75, 0x6c, 0x6c, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65,
	0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b,
	0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21, 0x0a, 0x0c, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c, 0x79, 0x22, 0x88, 0x02,
	0x0a, 0x18, 0x50, 0x75, 0x6c, 0x6c, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61,
	0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4b, 0x0a, 0x07, 0x63, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x31, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50,
	0x75, 0x6c, 0x6c, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07,
	0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x1a, 0x9e, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54,
	0x69, 0x6d, 0x65, 0x12, 0x43, 0x0a, 0x0d, 0x70, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x5f, 0x73,
	0x74, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x72,
	0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x0c, 0x70, 0x72, 0x65, 0x73,
	0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x22, 0xb1, 0x01, 0x0a, 0x19, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x43, 0x0a, 0x0d, 0x70, 0x72, 0x65, 0x73, 0x73,
	0x65, 0x64, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x0c,
	0x70, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x32, 0xb7, 0x02, 0x0a,
	0x08, 0x50, 0x72, 0x65, 0x73, 0x73, 0x41, 0x70, 0x69, 0x12, 0x5b, 0x0a, 0x0f, 0x47, 0x65, 0x74,
	0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x28, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e,
	0x47, 0x65, 0x74, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65,
	0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x6b, 0x0a, 0x10, 0x50, 0x75, 0x6c, 0x6c, 0x50, 0x72,
	0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x29, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75,
	0x6c, 0x6c, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x50, 0x72, 0x65,
	0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x30, 0x01, 0x12, 0x61, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72, 0x65,
	0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x65, 0x73, 0x73, 0x65,
	0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x42, 0x75, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0a,
	0x50, 0x72, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63,
	0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f,
	0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10, 0x53, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_press_proto_rawDescOnce sync.Once
	file_traits_press_proto_rawDescData = file_traits_press_proto_rawDesc
)

func file_traits_press_proto_rawDescGZIP() []byte {
	file_traits_press_proto_rawDescOnce.Do(func() {
		file_traits_press_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_press_proto_rawDescData)
	})
	return file_traits_press_proto_rawDescData
}

var file_traits_press_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_traits_press_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_traits_press_proto_goTypes = []any{
	(PressedState_Press)(0),                 // 0: smartcore.traits.PressedState.Press
	(PressedState_Gesture_Kind)(0),          // 1: smartcore.traits.PressedState.Gesture.Kind
	(*PressedState)(nil),                    // 2: smartcore.traits.PressedState
	(*GetPressedStateRequest)(nil),          // 3: smartcore.traits.GetPressedStateRequest
	(*PullPressedStateRequest)(nil),         // 4: smartcore.traits.PullPressedStateRequest
	(*PullPressedStateResponse)(nil),        // 5: smartcore.traits.PullPressedStateResponse
	(*UpdatePressedStateRequest)(nil),       // 6: smartcore.traits.UpdatePressedStateRequest
	(*PressedState_Gesture)(nil),            // 7: smartcore.traits.PressedState.Gesture
	(*PullPressedStateResponse_Change)(nil), // 8: smartcore.traits.PullPressedStateResponse.Change
	(*timestamppb.Timestamp)(nil),           // 9: google.protobuf.Timestamp
	(*fieldmaskpb.FieldMask)(nil),           // 10: google.protobuf.FieldMask
}
var file_traits_press_proto_depIdxs = []int32{
	0,  // 0: smartcore.traits.PressedState.state:type_name -> smartcore.traits.PressedState.Press
	9,  // 1: smartcore.traits.PressedState.state_change_time:type_name -> google.protobuf.Timestamp
	7,  // 2: smartcore.traits.PressedState.most_recent_gesture:type_name -> smartcore.traits.PressedState.Gesture
	10, // 3: smartcore.traits.GetPressedStateRequest.read_mask:type_name -> google.protobuf.FieldMask
	10, // 4: smartcore.traits.PullPressedStateRequest.read_mask:type_name -> google.protobuf.FieldMask
	8,  // 5: smartcore.traits.PullPressedStateResponse.changes:type_name -> smartcore.traits.PullPressedStateResponse.Change
	10, // 6: smartcore.traits.UpdatePressedStateRequest.update_mask:type_name -> google.protobuf.FieldMask
	2,  // 7: smartcore.traits.UpdatePressedStateRequest.pressed_state:type_name -> smartcore.traits.PressedState
	1,  // 8: smartcore.traits.PressedState.Gesture.kind:type_name -> smartcore.traits.PressedState.Gesture.Kind
	9,  // 9: smartcore.traits.PressedState.Gesture.start_time:type_name -> google.protobuf.Timestamp
	9,  // 10: smartcore.traits.PressedState.Gesture.end_time:type_name -> google.protobuf.Timestamp
	9,  // 11: smartcore.traits.PullPressedStateResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	2,  // 12: smartcore.traits.PullPressedStateResponse.Change.pressed_state:type_name -> smartcore.traits.PressedState
	3,  // 13: smartcore.traits.PressApi.GetPressedState:input_type -> smartcore.traits.GetPressedStateRequest
	4,  // 14: smartcore.traits.PressApi.PullPressedState:input_type -> smartcore.traits.PullPressedStateRequest
	6,  // 15: smartcore.traits.PressApi.UpdatePressedState:input_type -> smartcore.traits.UpdatePressedStateRequest
	2,  // 16: smartcore.traits.PressApi.GetPressedState:output_type -> smartcore.traits.PressedState
	5,  // 17: smartcore.traits.PressApi.PullPressedState:output_type -> smartcore.traits.PullPressedStateResponse
	2,  // 18: smartcore.traits.PressApi.UpdatePressedState:output_type -> smartcore.traits.PressedState
	16, // [16:19] is the sub-list for method output_type
	13, // [13:16] is the sub-list for method input_type
	13, // [13:13] is the sub-list for extension type_name
	13, // [13:13] is the sub-list for extension extendee
	0,  // [0:13] is the sub-list for field type_name
}

func init() { file_traits_press_proto_init() }
func file_traits_press_proto_init() {
	if File_traits_press_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_press_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*PressedState); i {
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
		file_traits_press_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*GetPressedStateRequest); i {
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
		file_traits_press_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*PullPressedStateRequest); i {
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
		file_traits_press_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*PullPressedStateResponse); i {
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
		file_traits_press_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*UpdatePressedStateRequest); i {
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
		file_traits_press_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*PressedState_Gesture); i {
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
		file_traits_press_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*PullPressedStateResponse_Change); i {
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
			RawDescriptor: file_traits_press_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_traits_press_proto_goTypes,
		DependencyIndexes: file_traits_press_proto_depIdxs,
		EnumInfos:         file_traits_press_proto_enumTypes,
		MessageInfos:      file_traits_press_proto_msgTypes,
	}.Build()
	File_traits_press_proto = out.File
	file_traits_press_proto_rawDesc = nil
	file_traits_press_proto_goTypes = nil
	file_traits_press_proto_depIdxs = nil
}