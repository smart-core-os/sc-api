// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.1
// source: traits/light.proto

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

// Brightness represent the light level that is being emitted.
// It represents the output level as either a percentage or a preset.
// Both percentage and preset can be present on read if the device supports exposing a presets underlying value,
// e.g. Full (100%).
// Off (0%) cannot be distinguished from Off (not present), this is by design as the alternative would complicate the
// type use for all other cases.
//
// If the output level is transitioning towards a value then target_level_percent or target_preset may be present on
// read to indicate what the final state will be. The level_percent and preset value always represent the current value.
type Brightness struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A level that the device is set to. [0-100] as a percentage.
	// A zero value will be ignored iff preset is present.
	// On write only one of level_percent or preset should be set.
	LevelPercent float32 `protobuf:"fixed32,1,opt,name=level_percent,json=levelPercent,proto3" json:"level_percent,omitempty"`
	// A preset that the device is using
	Preset *LightPreset `protobuf:"bytes,2,opt,name=preset,proto3" json:"preset,omitempty"`
	// How the brightness changes or should change over time. On write only duration should be set.
	BrightnessTween *types.Tween `protobuf:"bytes,3,opt,name=brightness_tween,json=brightnessTween,proto3" json:"brightness_tween,omitempty"`
	// The target level_percent. Ignored on write. On read zero values should be ignored iff target_preset is present.
	TargetLevelPercent float32 `protobuf:"fixed32,4,opt,name=target_level_percent,json=targetLevelPercent,proto3" json:"target_level_percent,omitempty"`
	// The target preset. Ignored on write. If present ignore target_level_percent
	TargetPreset *LightPreset `protobuf:"bytes,5,opt,name=target_preset,json=targetPreset,proto3" json:"target_preset,omitempty"`
}

func (x *Brightness) Reset() {
	*x = Brightness{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Brightness) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Brightness) ProtoMessage() {}

func (x *Brightness) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Brightness.ProtoReflect.Descriptor instead.
func (*Brightness) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{0}
}

func (x *Brightness) GetLevelPercent() float32 {
	if x != nil {
		return x.LevelPercent
	}
	return 0
}

func (x *Brightness) GetPreset() *LightPreset {
	if x != nil {
		return x.Preset
	}
	return nil
}

func (x *Brightness) GetBrightnessTween() *types.Tween {
	if x != nil {
		return x.BrightnessTween
	}
	return nil
}

func (x *Brightness) GetTargetLevelPercent() float32 {
	if x != nil {
		return x.TargetLevelPercent
	}
	return 0
}

func (x *Brightness) GetTargetPreset() *LightPreset {
	if x != nil {
		return x.TargetPreset
	}
	return nil
}

type LightPreset struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Title string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
}

func (x *LightPreset) Reset() {
	*x = LightPreset{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LightPreset) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LightPreset) ProtoMessage() {}

func (x *LightPreset) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LightPreset.ProtoReflect.Descriptor instead.
func (*LightPreset) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{1}
}

func (x *LightPreset) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *LightPreset) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

// BrightnessSupport describes the capabilities of devices implementing this trait
type BrightnessSupport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// How a named device supports read/write/pull apis
	ResourceSupport *types.ResourceSupport `protobuf:"bytes,1,opt,name=resource_support,json=resourceSupport,proto3" json:"resource_support,omitempty"`
	// control how the brightness can be controlled. The range of these attributes is fixed at 0-100 as a percentage
	BrightnessAttributes *types.Int32Attributes `protobuf:"bytes,2,opt,name=brightness_attributes,json=brightnessAttributes,proto3" json:"brightness_attributes,omitempty"`
	// A description of the supported presets, none means no presets
	Presets []*LightPreset `protobuf:"bytes,3,rep,name=presets,proto3" json:"presets,omitempty"`
}

func (x *BrightnessSupport) Reset() {
	*x = BrightnessSupport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BrightnessSupport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BrightnessSupport) ProtoMessage() {}

func (x *BrightnessSupport) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BrightnessSupport.ProtoReflect.Descriptor instead.
func (*BrightnessSupport) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{2}
}

func (x *BrightnessSupport) GetResourceSupport() *types.ResourceSupport {
	if x != nil {
		return x.ResourceSupport
	}
	return nil
}

func (x *BrightnessSupport) GetBrightnessAttributes() *types.Int32Attributes {
	if x != nil {
		return x.BrightnessAttributes
	}
	return nil
}

func (x *BrightnessSupport) GetPresets() []*LightPreset {
	if x != nil {
		return x.Presets
	}
	return nil
}

// A request to update the value of a brightness
type UpdateBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to update
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The new value for the brightness. Supply ramp to transition
	Brightness *Brightness `protobuf:"bytes,2,opt,name=brightness,proto3" json:"brightness,omitempty"`
	// if true, then the values in the brightness represent deltas from the current value and not absolute values
	Delta bool `protobuf:"varint,3,opt,name=delta,proto3" json:"delta,omitempty"`
	// The state fields to update
	UpdateMask *fieldmaskpb.FieldMask `protobuf:"bytes,4,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
}

func (x *UpdateBrightnessRequest) Reset() {
	*x = UpdateBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateBrightnessRequest) ProtoMessage() {}

func (x *UpdateBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateBrightnessRequest.ProtoReflect.Descriptor instead.
func (*UpdateBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{3}
}

func (x *UpdateBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateBrightnessRequest) GetBrightness() *Brightness {
	if x != nil {
		return x.Brightness
	}
	return nil
}

func (x *UpdateBrightnessRequest) GetDelta() bool {
	if x != nil {
		return x.Delta
	}
	return false
}

func (x *UpdateBrightnessRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

// A request to get the current value of a brightness
type GetBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to get the value for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetBrightnessRequest) Reset() {
	*x = GetBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBrightnessRequest) ProtoMessage() {}

func (x *GetBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBrightnessRequest.ProtoReflect.Descriptor instead.
func (*GetBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{4}
}

func (x *GetBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetBrightnessRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

// Request to begin a subscription for brightness values
type PullBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device we want events from
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Indicate whether we want to be notified of values while ramping or not. The device may ignore this depending on
	// capabilities
	ExcludeRamping bool `protobuf:"varint,2,opt,name=exclude_ramping,json=excludeRamping,proto3" json:"exclude_ramping,omitempty"`
	// The state fields to fetch
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,3,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// When true the device will only send changes to the resource value.
	// The default behaviour is to send the current value immediately followed by any updates as they happen.
	UpdatesOnly bool `protobuf:"varint,4,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullBrightnessRequest) Reset() {
	*x = PullBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullBrightnessRequest) ProtoMessage() {}

func (x *PullBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullBrightnessRequest.ProtoReflect.Descriptor instead.
func (*PullBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{5}
}

func (x *PullBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullBrightnessRequest) GetExcludeRamping() bool {
	if x != nil {
		return x.ExcludeRamping
	}
	return false
}

func (x *PullBrightnessRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullBrightnessRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

// A response as part of the stream of changes to the brightness value
type PullBrightnessResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The list of changes
	Changes []*PullBrightnessResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullBrightnessResponse) Reset() {
	*x = PullBrightnessResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullBrightnessResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullBrightnessResponse) ProtoMessage() {}

func (x *PullBrightnessResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullBrightnessResponse.ProtoReflect.Descriptor instead.
func (*PullBrightnessResponse) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{6}
}

func (x *PullBrightnessResponse) GetChanges() []*PullBrightnessResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type DescribeBrightnessRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DescribeBrightnessRequest) Reset() {
	*x = DescribeBrightnessRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DescribeBrightnessRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DescribeBrightnessRequest) ProtoMessage() {}

func (x *DescribeBrightnessRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DescribeBrightnessRequest.ProtoReflect.Descriptor instead.
func (*DescribeBrightnessRequest) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{7}
}

func (x *DescribeBrightnessRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// A change to a single devices brightness value
type PullBrightnessResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	// The new value for the brightness
	Brightness *Brightness `protobuf:"bytes,3,opt,name=brightness,proto3" json:"brightness,omitempty"`
}

func (x *PullBrightnessResponse_Change) Reset() {
	*x = PullBrightnessResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_light_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullBrightnessResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullBrightnessResponse_Change) ProtoMessage() {}

func (x *PullBrightnessResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_light_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullBrightnessResponse_Change.ProtoReflect.Descriptor instead.
func (*PullBrightnessResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_light_proto_rawDescGZIP(), []int{6, 0}
}

func (x *PullBrightnessResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullBrightnessResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *PullBrightnessResponse_Change) GetBrightness() *Brightness {
	if x != nil {
		return x.Brightness
	}
	return nil
}

var File_traits_light_proto protoreflect.FileDescriptor

var file_traits_light_proto_rawDesc = []byte{
	0x0a, 0x12, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61,
	0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x11, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x74, 0x77, 0x65, 0x65, 0x6e, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xa1, 0x02, 0x0a, 0x0a, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x12, 0x23, 0x0a, 0x0d, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x5f, 0x70, 0x65, 0x72, 0x63, 0x65,
	0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0c, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x50,
	0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x12, 0x35, 0x0a, 0x06, 0x70, 0x72, 0x65, 0x73, 0x65, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4c, 0x69, 0x67, 0x68, 0x74, 0x50,
	0x72, 0x65, 0x73, 0x65, 0x74, 0x52, 0x06, 0x70, 0x72, 0x65, 0x73, 0x65, 0x74, 0x12, 0x41, 0x0a,
	0x10, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x77, 0x65, 0x65,
	0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x77, 0x65, 0x65, 0x6e, 0x52,
	0x0f, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x54, 0x77, 0x65, 0x65, 0x6e,
	0x12, 0x30, 0x0a, 0x14, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x6c, 0x65, 0x76, 0x65, 0x6c,
	0x5f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x52, 0x12,
	0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x50, 0x65, 0x72, 0x63, 0x65,
	0x6e, 0x74, 0x12, 0x42, 0x0a, 0x0d, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x70, 0x72, 0x65,
	0x73, 0x65, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4c, 0x69, 0x67,
	0x68, 0x74, 0x50, 0x72, 0x65, 0x73, 0x65, 0x74, 0x52, 0x0c, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74,
	0x50, 0x72, 0x65, 0x73, 0x65, 0x74, 0x22, 0x37, 0x0a, 0x0b, 0x4c, 0x69, 0x67, 0x68, 0x74, 0x50,
	0x72, 0x65, 0x73, 0x65, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74,
	0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x22,
	0xf0, 0x01, 0x0a, 0x11, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x53, 0x75,
	0x70, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x4b, 0x0a, 0x10, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72,
	0x74, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x53, 0x75, 0x70, 0x70, 0x6f,
	0x72, 0x74, 0x12, 0x55, 0x0a, 0x15, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73,
	0x5f, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x20, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75,
	0x74, 0x65, 0x73, 0x52, 0x14, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x41,
	0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x37, 0x0a, 0x07, 0x70, 0x72, 0x65,
	0x73, 0x65, 0x74, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4c, 0x69,
	0x67, 0x68, 0x74, 0x50, 0x72, 0x65, 0x73, 0x65, 0x74, 0x52, 0x07, 0x70, 0x72, 0x65, 0x73, 0x65,
	0x74, 0x73, 0x22, 0xbe, 0x01, 0x0a, 0x17, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x72, 0x69,
	0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x3c, 0x0a, 0x0a, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74,
	0x6e, 0x65, 0x73, 0x73, 0x52, 0x0a, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73,
	0x12, 0x14, 0x0a, 0x05, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x05, 0x64, 0x65, 0x6c, 0x74, 0x61, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69,
	0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d,
	0x61, 0x73, 0x6b, 0x22, 0x63, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74,
	0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08,
	0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x22, 0xb0, 0x01, 0x0a, 0x15, 0x50, 0x75, 0x6c,
	0x6c, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x65, 0x78, 0x63, 0x6c, 0x75, 0x64,
	0x65, 0x5f, 0x72, 0x61, 0x6d, 0x70, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0e, 0x65, 0x78, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x52, 0x61, 0x6d, 0x70, 0x69, 0x6e, 0x67, 0x12,
	0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08,
	0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21, 0x0a, 0x0c, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0b,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c, 0x79, 0x22, 0xfd, 0x01, 0x0a, 0x16,
	0x50, 0x75, 0x6c, 0x6c, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x49, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x42,
	0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x73, 0x1a, 0x97, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x3b, 0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x52, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x3c, 0x0a,
	0x0a, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52,
	0x0a, 0x62, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x22, 0x2f, 0x0a, 0x19, 0x44,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x32, 0xa5, 0x02, 0x0a,
	0x08, 0x4c, 0x69, 0x67, 0x68, 0x74, 0x41, 0x70, 0x69, 0x12, 0x5b, 0x0a, 0x10, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x29, 0x2e,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x42, 0x72, 0x69, 0x67,
	0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x55, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x42, 0x72, 0x69,
	0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x26, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x72,
	0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1c, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x2e, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x65, 0x0a,
	0x0e, 0x50, 0x75, 0x6c, 0x6c, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12,
	0x27, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c,
	0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x30, 0x01, 0x32, 0x73, 0x0a, 0x09, 0x4c, 0x69, 0x67, 0x68, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x66, 0x0a, 0x12, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x42, 0x72, 0x69,
	0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x12, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x44, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x62, 0x65, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x42, 0x72, 0x69, 0x67, 0x68, 0x74, 0x6e, 0x65,
	0x73, 0x73, 0x53, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x42, 0x75, 0x0a, 0x14, 0x64, 0x65, 0x76,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x42, 0x0a, 0x4c, 0x69, 0x67, 0x68, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10,
	0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_light_proto_rawDescOnce sync.Once
	file_traits_light_proto_rawDescData = file_traits_light_proto_rawDesc
)

func file_traits_light_proto_rawDescGZIP() []byte {
	file_traits_light_proto_rawDescOnce.Do(func() {
		file_traits_light_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_light_proto_rawDescData)
	})
	return file_traits_light_proto_rawDescData
}

var file_traits_light_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_traits_light_proto_goTypes = []interface{}{
	(*Brightness)(nil),                    // 0: smartcore.traits.Brightness
	(*LightPreset)(nil),                   // 1: smartcore.traits.LightPreset
	(*BrightnessSupport)(nil),             // 2: smartcore.traits.BrightnessSupport
	(*UpdateBrightnessRequest)(nil),       // 3: smartcore.traits.UpdateBrightnessRequest
	(*GetBrightnessRequest)(nil),          // 4: smartcore.traits.GetBrightnessRequest
	(*PullBrightnessRequest)(nil),         // 5: smartcore.traits.PullBrightnessRequest
	(*PullBrightnessResponse)(nil),        // 6: smartcore.traits.PullBrightnessResponse
	(*DescribeBrightnessRequest)(nil),     // 7: smartcore.traits.DescribeBrightnessRequest
	(*PullBrightnessResponse_Change)(nil), // 8: smartcore.traits.PullBrightnessResponse.Change
	(*types.Tween)(nil),                   // 9: smartcore.types.Tween
	(*types.ResourceSupport)(nil),         // 10: smartcore.types.ResourceSupport
	(*types.Int32Attributes)(nil),         // 11: smartcore.types.Int32Attributes
	(*fieldmaskpb.FieldMask)(nil),         // 12: google.protobuf.FieldMask
	(*timestamppb.Timestamp)(nil),         // 13: google.protobuf.Timestamp
}
var file_traits_light_proto_depIdxs = []int32{
	1,  // 0: smartcore.traits.Brightness.preset:type_name -> smartcore.traits.LightPreset
	9,  // 1: smartcore.traits.Brightness.brightness_tween:type_name -> smartcore.types.Tween
	1,  // 2: smartcore.traits.Brightness.target_preset:type_name -> smartcore.traits.LightPreset
	10, // 3: smartcore.traits.BrightnessSupport.resource_support:type_name -> smartcore.types.ResourceSupport
	11, // 4: smartcore.traits.BrightnessSupport.brightness_attributes:type_name -> smartcore.types.Int32Attributes
	1,  // 5: smartcore.traits.BrightnessSupport.presets:type_name -> smartcore.traits.LightPreset
	0,  // 6: smartcore.traits.UpdateBrightnessRequest.brightness:type_name -> smartcore.traits.Brightness
	12, // 7: smartcore.traits.UpdateBrightnessRequest.update_mask:type_name -> google.protobuf.FieldMask
	12, // 8: smartcore.traits.GetBrightnessRequest.read_mask:type_name -> google.protobuf.FieldMask
	12, // 9: smartcore.traits.PullBrightnessRequest.read_mask:type_name -> google.protobuf.FieldMask
	8,  // 10: smartcore.traits.PullBrightnessResponse.changes:type_name -> smartcore.traits.PullBrightnessResponse.Change
	13, // 11: smartcore.traits.PullBrightnessResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	0,  // 12: smartcore.traits.PullBrightnessResponse.Change.brightness:type_name -> smartcore.traits.Brightness
	3,  // 13: smartcore.traits.LightApi.UpdateBrightness:input_type -> smartcore.traits.UpdateBrightnessRequest
	4,  // 14: smartcore.traits.LightApi.GetBrightness:input_type -> smartcore.traits.GetBrightnessRequest
	5,  // 15: smartcore.traits.LightApi.PullBrightness:input_type -> smartcore.traits.PullBrightnessRequest
	7,  // 16: smartcore.traits.LightInfo.DescribeBrightness:input_type -> smartcore.traits.DescribeBrightnessRequest
	0,  // 17: smartcore.traits.LightApi.UpdateBrightness:output_type -> smartcore.traits.Brightness
	0,  // 18: smartcore.traits.LightApi.GetBrightness:output_type -> smartcore.traits.Brightness
	6,  // 19: smartcore.traits.LightApi.PullBrightness:output_type -> smartcore.traits.PullBrightnessResponse
	2,  // 20: smartcore.traits.LightInfo.DescribeBrightness:output_type -> smartcore.traits.BrightnessSupport
	17, // [17:21] is the sub-list for method output_type
	13, // [13:17] is the sub-list for method input_type
	13, // [13:13] is the sub-list for extension type_name
	13, // [13:13] is the sub-list for extension extendee
	0,  // [0:13] is the sub-list for field type_name
}

func init() { file_traits_light_proto_init() }
func file_traits_light_proto_init() {
	if File_traits_light_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_light_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Brightness); i {
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
		file_traits_light_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LightPreset); i {
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
		file_traits_light_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BrightnessSupport); i {
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
		file_traits_light_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateBrightnessRequest); i {
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
		file_traits_light_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetBrightnessRequest); i {
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
		file_traits_light_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullBrightnessRequest); i {
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
		file_traits_light_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullBrightnessResponse); i {
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
		file_traits_light_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DescribeBrightnessRequest); i {
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
		file_traits_light_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PullBrightnessResponse_Change); i {
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
			RawDescriptor: file_traits_light_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_light_proto_goTypes,
		DependencyIndexes: file_traits_light_proto_depIdxs,
		MessageInfos:      file_traits_light_proto_msgTypes,
	}.Build()
	File_traits_light_proto = out.File
	file_traits_light_proto_rawDesc = nil
	file_traits_light_proto_goTypes = nil
	file_traits_light_proto_depIdxs = nil
}
