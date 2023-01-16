// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.1
// source: traits/input_select.proto

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

// possible modes an input select device can
type InputSupport_Feature int32

const (
	// The feature is not specified
	InputSupport_FEATURE_UNSPECIFIED InputSupport_Feature = 0
	// both audio and video are treated as one. independent_av should be considered false in this mode
	InputSupport_AV InputSupport_Feature = 1
	// Only audio inputs are supported
	InputSupport_AUDIO_ONLY InputSupport_Feature = 2
	// Only video inputs are supported
	InputSupport_VIDEO_ONLY InputSupport_Feature = 3
	// Audio and video are both supported and can be selected independently if desired. The independent_av property can
	// be true in this mode only
	InputSupport_INDEPENDENT InputSupport_Feature = 4
)

// Enum value maps for InputSupport_Feature.
var (
	InputSupport_Feature_name = map[int32]string{
		0: "FEATURE_UNSPECIFIED",
		1: "AV",
		2: "AUDIO_ONLY",
		3: "VIDEO_ONLY",
		4: "INDEPENDENT",
	}
	InputSupport_Feature_value = map[string]int32{
		"FEATURE_UNSPECIFIED": 0,
		"AV":                  1,
		"AUDIO_ONLY":          2,
		"VIDEO_ONLY":          3,
		"INDEPENDENT":         4,
	}
)

func (x InputSupport_Feature) Enum() *InputSupport_Feature {
	p := new(InputSupport_Feature)
	*p = x
	return p
}

func (x InputSupport_Feature) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (InputSupport_Feature) Descriptor() protoreflect.EnumDescriptor {
	return file_traits_input_select_proto_enumTypes[0].Descriptor()
}

func (InputSupport_Feature) Type() protoreflect.EnumType {
	return &file_traits_input_select_proto_enumTypes[0]
}

func (x InputSupport_Feature) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use InputSupport_Feature.Descriptor instead.
func (InputSupport_Feature) EnumDescriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{1, 0}
}

// The currently selected input
type Input struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The current choice for the video input. Will be absent if there is no video input chosen.
	VideoInput string `protobuf:"bytes,1,opt,name=video_input,json=videoInput,proto3" json:"video_input,omitempty"`
	// The current choice for the audio input. Absent means no audio input is chosen unless independent_av is false which
	// implies the audio_input is the same as the video_input
	AudioInput string `protobuf:"bytes,2,opt,name=audio_input,json=audioInput,proto3" json:"audio_input,omitempty"`
	// If true then audio and video changes will not affect the other. False implies that changes to audio or video will
	// change the input selection for the other to keep them consistent
	IndependentAv bool `protobuf:"varint,3,opt,name=independent_av,json=independentAv,proto3" json:"independent_av,omitempty"`
	// Which output the input is sent to. Optional when the device only has one output, required otherwise
	Output string `protobuf:"bytes,4,opt,name=output,proto3" json:"output,omitempty"`
}

func (x *Input) Reset() {
	*x = Input{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Input) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Input) ProtoMessage() {}

func (x *Input) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Input.ProtoReflect.Descriptor instead.
func (*Input) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{0}
}

func (x *Input) GetVideoInput() string {
	if x != nil {
		return x.VideoInput
	}
	return ""
}

func (x *Input) GetAudioInput() string {
	if x != nil {
		return x.AudioInput
	}
	return ""
}

func (x *Input) GetIndependentAv() bool {
	if x != nil {
		return x.IndependentAv
	}
	return false
}

func (x *Input) GetOutput() string {
	if x != nil {
		return x.Output
	}
	return ""
}

// InputSupport describes the capabilities of devices implementing this trait
type InputSupport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// How a named device supports read/write/pull apis
	ResourceSupport *types.ResourceSupport `protobuf:"bytes,1,opt,name=resource_support,json=resourceSupport,proto3" json:"resource_support,omitempty"`
	// the list of inputs that can be selected on this device
	Inputs []*AvPort `protobuf:"bytes,2,rep,name=inputs,proto3" json:"inputs,omitempty"`
	// indicate the possible mode of input selection that are supported by this device. This is not the current mode, just
	// the supported mode the device allows
	SupportedFeature InputSupport_Feature `protobuf:"varint,3,opt,name=supported_feature,json=supportedFeature,proto3,enum=smartcore.traits.InputSupport_Feature" json:"supported_feature,omitempty"`
	// The list of outputs that can have inputs on this device
	Outputs []*AvPort `protobuf:"bytes,4,rep,name=outputs,proto3" json:"outputs,omitempty"`
}

func (x *InputSupport) Reset() {
	*x = InputSupport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InputSupport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InputSupport) ProtoMessage() {}

func (x *InputSupport) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InputSupport.ProtoReflect.Descriptor instead.
func (*InputSupport) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{1}
}

func (x *InputSupport) GetResourceSupport() *types.ResourceSupport {
	if x != nil {
		return x.ResourceSupport
	}
	return nil
}

func (x *InputSupport) GetInputs() []*AvPort {
	if x != nil {
		return x.Inputs
	}
	return nil
}

func (x *InputSupport) GetSupportedFeature() InputSupport_Feature {
	if x != nil {
		return x.SupportedFeature
	}
	return InputSupport_FEATURE_UNSPECIFIED
}

func (x *InputSupport) GetOutputs() []*AvPort {
	if x != nil {
		return x.Outputs
	}
	return nil
}

// represents a source (or destination) for the AV signal
type AvPort struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique name for the port, used as the value for input or output properties
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Official human readable name for this port
	Title       string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	// If this port supports different features from the device as a whole, specify them here. For example some ports
	// might be audio only or not support audio breakout
	SupportedFeature InputSupport_Feature `protobuf:"varint,4,opt,name=supported_feature,json=supportedFeature,proto3,enum=smartcore.traits.InputSupport_Feature" json:"supported_feature,omitempty"`
}

func (x *AvPort) Reset() {
	*x = AvPort{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AvPort) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AvPort) ProtoMessage() {}

func (x *AvPort) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AvPort.ProtoReflect.Descriptor instead.
func (*AvPort) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{2}
}

func (x *AvPort) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AvPort) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *AvPort) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *AvPort) GetSupportedFeature() InputSupport_Feature {
	if x != nil {
		return x.SupportedFeature
	}
	return InputSupport_FEATURE_UNSPECIFIED
}

// A request to update the current input
type UpdateInputRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to update
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The new input value
	Input *Input `protobuf:"bytes,2,opt,name=input,proto3" json:"input,omitempty"`
	// the fields we are intending to update. Paths are relative to the input not this request
	UpdateMask *fieldmaskpb.FieldMask `protobuf:"bytes,3,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
}

func (x *UpdateInputRequest) Reset() {
	*x = UpdateInputRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateInputRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateInputRequest) ProtoMessage() {}

func (x *UpdateInputRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateInputRequest.ProtoReflect.Descriptor instead.
func (*UpdateInputRequest) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{3}
}

func (x *UpdateInputRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateInputRequest) GetInput() *Input {
	if x != nil {
		return x.Input
	}
	return nil
}

func (x *UpdateInputRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

// A request to get the currently selected input
type GetInputRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to get the value for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Required if the device has multiple outputs. The name of the output to get the input for.
	Output string `protobuf:"bytes,2,opt,name=output,proto3" json:"output,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,3,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetInputRequest) Reset() {
	*x = GetInputRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetInputRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetInputRequest) ProtoMessage() {}

func (x *GetInputRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetInputRequest.ProtoReflect.Descriptor instead.
func (*GetInputRequest) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{4}
}

func (x *GetInputRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetInputRequest) GetOutput() string {
	if x != nil {
		return x.Output
	}
	return ""
}

func (x *GetInputRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

// Request to begin a subscription for selected input changes
type PullInputRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device we want events from
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// When true the device will only send changes to the resource value.
	// The default behaviour is to send the current value immediately followed by any updates as they happen.
	UpdatesOnly bool `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullInputRequest) Reset() {
	*x = PullInputRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullInputRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullInputRequest) ProtoMessage() {}

func (x *PullInputRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullInputRequest.ProtoReflect.Descriptor instead.
func (*PullInputRequest) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{5}
}

func (x *PullInputRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullInputRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullInputRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

// A response as part of the stream of changes to the selected input
type PullInputResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The list of changes
	Changes []*PullInputResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullInputResponse) Reset() {
	*x = PullInputResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullInputResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullInputResponse) ProtoMessage() {}

func (x *PullInputResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullInputResponse.ProtoReflect.Descriptor instead.
func (*PullInputResponse) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{6}
}

func (x *PullInputResponse) GetChanges() []*PullInputResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type DescribeInputRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DescribeInputRequest) Reset() {
	*x = DescribeInputRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DescribeInputRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DescribeInputRequest) ProtoMessage() {}

func (x *DescribeInputRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DescribeInputRequest.ProtoReflect.Descriptor instead.
func (*DescribeInputRequest) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{7}
}

func (x *DescribeInputRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// A change to a single devices range value
type PullInputResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	// The new value for the selected input
	Input *Input `protobuf:"bytes,3,opt,name=input,proto3" json:"input,omitempty"`
}

func (x *PullInputResponse_Change) Reset() {
	*x = PullInputResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_input_select_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullInputResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullInputResponse_Change) ProtoMessage() {}

func (x *PullInputResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_input_select_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullInputResponse_Change.ProtoReflect.Descriptor instead.
func (*PullInputResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_input_select_proto_rawDescGZIP(), []int{6, 0}
}

func (x *PullInputResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullInputResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *PullInputResponse_Change) GetInput() *Input {
	if x != nil {
		return x.Input
	}
	return nil
}

var File_traits_input_select_proto protoreflect.FileDescriptor

var file_traits_input_select_proto_rawDesc = []byte{
	0x0a, 0x19, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x5f, 0x73,
	0x65, 0x6c, 0x65, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66,
	0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x88, 0x01, 0x0a, 0x05, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x1f, 0x0a, 0x0b,
	0x76, 0x69, 0x64, 0x65, 0x6f, 0x5f, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x1f, 0x0a,
	0x0b, 0x61, 0x75, 0x64, 0x69, 0x6f, 0x5f, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0a, 0x61, 0x75, 0x64, 0x69, 0x6f, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x25,
	0x0a, 0x0e, 0x69, 0x6e, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e, 0x74, 0x5f, 0x61, 0x76,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0d, 0x69, 0x6e, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64,
	0x65, 0x6e, 0x74, 0x41, 0x76, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x22, 0xf3, 0x02,
	0x0a, 0x0c, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b,
	0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x30, 0x0a, 0x06, 0x69,
	0x6e, 0x70, 0x75, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41,
	0x76, 0x50, 0x6f, 0x72, 0x74, 0x52, 0x06, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x12, 0x53, 0x0a,
	0x11, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x5f, 0x66, 0x65, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x49, 0x6e, 0x70, 0x75,
	0x74, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65,
	0x52, 0x10, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x46, 0x65, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x12, 0x32, 0x0a, 0x07, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x18, 0x04, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x76, 0x50, 0x6f, 0x72, 0x74, 0x52, 0x07, 0x6f,
	0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x22, 0x5b, 0x0a, 0x07, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x12, 0x17, 0x0a, 0x13, 0x46, 0x45, 0x41, 0x54, 0x55, 0x52, 0x45, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x06, 0x0a, 0x02, 0x41, 0x56,
	0x10, 0x01, 0x12, 0x0e, 0x0a, 0x0a, 0x41, 0x55, 0x44, 0x49, 0x4f, 0x5f, 0x4f, 0x4e, 0x4c, 0x59,
	0x10, 0x02, 0x12, 0x0e, 0x0a, 0x0a, 0x56, 0x49, 0x44, 0x45, 0x4f, 0x5f, 0x4f, 0x4e, 0x4c, 0x59,
	0x10, 0x03, 0x12, 0x0f, 0x0a, 0x0b, 0x49, 0x4e, 0x44, 0x45, 0x50, 0x45, 0x4e, 0x44, 0x45, 0x4e,
	0x54, 0x10, 0x04, 0x22, 0xa9, 0x01, 0x0a, 0x06, 0x41, 0x76, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x53, 0x0a, 0x11, 0x73, 0x75,
	0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x5f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x53, 0x75,
	0x70, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x52, 0x10, 0x73,
	0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x22,
	0x94, 0x01, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x69, 0x6e,
	0x70, 0x75, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x49, 0x6e, 0x70,
	0x75, 0x74, 0x52, 0x05, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x4d, 0x61, 0x73, 0x6b, 0x22, 0x76, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x49, 0x6e, 0x70,
	0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6f,
	0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61,
	0x73, 0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64,
	0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x22, 0x82,
	0x01, 0x0a, 0x10, 0x50, 0x75, 0x6c, 0x6c, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f,
	0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65,
	0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b,
	0x12, 0x21, 0x0a, 0x0c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f,
	0x6e, 0x6c, 0x79, 0x22, 0xe4, 0x01, 0x0a, 0x11, 0x50, 0x75, 0x6c, 0x6c, 0x49, 0x6e, 0x70, 0x75,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x44, 0x0a, 0x07, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75,
	0x6c, 0x6c, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e,
	0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x1a,
	0x88, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b,
	0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52,
	0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x69,
	0x6e, 0x70, 0x75, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x49, 0x6e,
	0x70, 0x75, 0x74, 0x52, 0x05, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x22, 0x2a, 0x0a, 0x14, 0x44, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x32, 0xfe, 0x01, 0x0a, 0x0e, 0x49, 0x6e, 0x70, 0x75, 0x74,
	0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x41, 0x70, 0x69, 0x12, 0x4c, 0x0a, 0x0b, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x46, 0x0a, 0x08, 0x47, 0x65, 0x74, 0x49, 0x6e,
	0x70, 0x75, 0x74, 0x12, 0x21, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12,
	0x56, 0x0a, 0x09, 0x50, 0x75, 0x6c, 0x6c, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x22, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e,
	0x50, 0x75, 0x6c, 0x6c, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x23, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61,
	0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x32, 0x6a, 0x0a, 0x0f, 0x49, 0x6e, 0x70, 0x75, 0x74,
	0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x57, 0x0a, 0x0d, 0x44, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x26, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x44,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x53, 0x75, 0x70, 0x70,
	0x6f, 0x72, 0x74, 0x42, 0x7b, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x10, 0x49, 0x6e, 0x70,
	0x75, 0x74, 0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10,
	0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_input_select_proto_rawDescOnce sync.Once
	file_traits_input_select_proto_rawDescData = file_traits_input_select_proto_rawDesc
)

func file_traits_input_select_proto_rawDescGZIP() []byte {
	file_traits_input_select_proto_rawDescOnce.Do(func() {
		file_traits_input_select_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_input_select_proto_rawDescData)
	})
	return file_traits_input_select_proto_rawDescData
}

var file_traits_input_select_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_traits_input_select_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_traits_input_select_proto_goTypes = []interface{}{
	(InputSupport_Feature)(0),        // 0: smartcore.traits.InputSupport.Feature
	(*Input)(nil),                    // 1: smartcore.traits.Input
	(*InputSupport)(nil),             // 2: smartcore.traits.InputSupport
	(*AvPort)(nil),                   // 3: smartcore.traits.AvPort
	(*UpdateInputRequest)(nil),       // 4: smartcore.traits.UpdateInputRequest
	(*GetInputRequest)(nil),          // 5: smartcore.traits.GetInputRequest
	(*PullInputRequest)(nil),         // 6: smartcore.traits.PullInputRequest
	(*PullInputResponse)(nil),        // 7: smartcore.traits.PullInputResponse
	(*DescribeInputRequest)(nil),     // 8: smartcore.traits.DescribeInputRequest
	(*PullInputResponse_Change)(nil), // 9: smartcore.traits.PullInputResponse.Change
	(*types.ResourceSupport)(nil),    // 10: smartcore.types.ResourceSupport
	(*fieldmaskpb.FieldMask)(nil),    // 11: google.protobuf.FieldMask
	(*timestamppb.Timestamp)(nil),    // 12: google.protobuf.Timestamp
}
var file_traits_input_select_proto_depIdxs = []int32{
	10, // 0: smartcore.traits.InputSupport.resource_support:type_name -> smartcore.types.ResourceSupport
	3,  // 1: smartcore.traits.InputSupport.inputs:type_name -> smartcore.traits.AvPort
	0,  // 2: smartcore.traits.InputSupport.supported_feature:type_name -> smartcore.traits.InputSupport.Feature
	3,  // 3: smartcore.traits.InputSupport.outputs:type_name -> smartcore.traits.AvPort
	0,  // 4: smartcore.traits.AvPort.supported_feature:type_name -> smartcore.traits.InputSupport.Feature
	1,  // 5: smartcore.traits.UpdateInputRequest.input:type_name -> smartcore.traits.Input
	11, // 6: smartcore.traits.UpdateInputRequest.update_mask:type_name -> google.protobuf.FieldMask
	11, // 7: smartcore.traits.GetInputRequest.read_mask:type_name -> google.protobuf.FieldMask
	11, // 8: smartcore.traits.PullInputRequest.read_mask:type_name -> google.protobuf.FieldMask
	9,  // 9: smartcore.traits.PullInputResponse.changes:type_name -> smartcore.traits.PullInputResponse.Change
	12, // 10: smartcore.traits.PullInputResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	1,  // 11: smartcore.traits.PullInputResponse.Change.input:type_name -> smartcore.traits.Input
	4,  // 12: smartcore.traits.InputSelectApi.UpdateInput:input_type -> smartcore.traits.UpdateInputRequest
	5,  // 13: smartcore.traits.InputSelectApi.GetInput:input_type -> smartcore.traits.GetInputRequest
	6,  // 14: smartcore.traits.InputSelectApi.PullInput:input_type -> smartcore.traits.PullInputRequest
	8,  // 15: smartcore.traits.InputSelectInfo.DescribeInput:input_type -> smartcore.traits.DescribeInputRequest
	1,  // 16: smartcore.traits.InputSelectApi.UpdateInput:output_type -> smartcore.traits.Input
	1,  // 17: smartcore.traits.InputSelectApi.GetInput:output_type -> smartcore.traits.Input
	7,  // 18: smartcore.traits.InputSelectApi.PullInput:output_type -> smartcore.traits.PullInputResponse
	2,  // 19: smartcore.traits.InputSelectInfo.DescribeInput:output_type -> smartcore.traits.InputSupport
	16, // [16:20] is the sub-list for method output_type
	12, // [12:16] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_traits_input_select_proto_init() }
func file_traits_input_select_proto_init() {
	if File_traits_input_select_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_input_select_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Input); i {
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
		file_traits_input_select_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InputSupport); i {
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
		file_traits_input_select_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AvPort); i {
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
		file_traits_input_select_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateInputRequest); i {
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
		file_traits_input_select_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetInputRequest); i {
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
		file_traits_input_select_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullInputRequest); i {
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
		file_traits_input_select_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullInputResponse); i {
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
		file_traits_input_select_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DescribeInputRequest); i {
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
		file_traits_input_select_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullInputResponse_Change); i {
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
			RawDescriptor: file_traits_input_select_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_input_select_proto_goTypes,
		DependencyIndexes: file_traits_input_select_proto_depIdxs,
		EnumInfos:         file_traits_input_select_proto_enumTypes,
		MessageInfos:      file_traits_input_select_proto_msgTypes,
	}.Build()
	File_traits_input_select_proto = out.File
	file_traits_input_select_proto_rawDesc = nil
	file_traits_input_select_proto_goTypes = nil
	file_traits_input_select_proto_depIdxs = nil
}
