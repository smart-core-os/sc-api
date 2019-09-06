// Code generated by protoc-gen-go. DO NOT EDIT.
// source: device/traits/extend_retract.proto

package traits

import (
	context "context"
	fmt "fmt"
	types "git.vanti.co.uk/smartcore/sc-api/go/types"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	field_mask "google.golang.org/genproto/protobuf/field_mask"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type ExtendRetractAttributes struct {
	// List of presets that this device supports. If empty then the device does not support presets
	Presets []*ExtensionPreset `protobuf:"bytes,1,rep,name=presets,proto3" json:"presets,omitempty"`
	// 0 to 100, how precise is the control of the extension. A value of 0 (or 100) means only 0 or 100 extend_percent
	// are valid.
	Step float32 `protobuf:"fixed32,2,opt,name=step,proto3" json:"step,omitempty"`
	// Does the device support tweening between the current value and a target value
	TweenSupport types.TweenSupport `protobuf:"varint,3,opt,name=tween_support,json=tweenSupport,proto3,enum=smartcore.api.types.TweenSupport" json:"tween_support,omitempty"`
	// If true, custom preset names can be used to store extension values. If false only writable presets can be updated.
	SupportsCustomPresets bool     `protobuf:"varint,4,opt,name=supports_custom_presets,json=supportsCustomPresets,proto3" json:"supports_custom_presets,omitempty"`
	XXX_NoUnkeyedLiteral  struct{} `json:"-"`
	XXX_unrecognized      []byte   `json:"-"`
	XXX_sizecache         int32    `json:"-"`
}

func (m *ExtendRetractAttributes) Reset()         { *m = ExtendRetractAttributes{} }
func (m *ExtendRetractAttributes) String() string { return proto.CompactTextString(m) }
func (*ExtendRetractAttributes) ProtoMessage()    {}
func (*ExtendRetractAttributes) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{0}
}

func (m *ExtendRetractAttributes) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExtendRetractAttributes.Unmarshal(m, b)
}
func (m *ExtendRetractAttributes) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExtendRetractAttributes.Marshal(b, m, deterministic)
}
func (m *ExtendRetractAttributes) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExtendRetractAttributes.Merge(m, src)
}
func (m *ExtendRetractAttributes) XXX_Size() int {
	return xxx_messageInfo_ExtendRetractAttributes.Size(m)
}
func (m *ExtendRetractAttributes) XXX_DiscardUnknown() {
	xxx_messageInfo_ExtendRetractAttributes.DiscardUnknown(m)
}

var xxx_messageInfo_ExtendRetractAttributes proto.InternalMessageInfo

func (m *ExtendRetractAttributes) GetPresets() []*ExtensionPreset {
	if m != nil {
		return m.Presets
	}
	return nil
}

func (m *ExtendRetractAttributes) GetStep() float32 {
	if m != nil {
		return m.Step
	}
	return 0
}

func (m *ExtendRetractAttributes) GetTweenSupport() types.TweenSupport {
	if m != nil {
		return m.TweenSupport
	}
	return types.TweenSupport_NO_SUPPORT
}

func (m *ExtendRetractAttributes) GetSupportsCustomPresets() bool {
	if m != nil {
		return m.SupportsCustomPresets
	}
	return false
}

// How extended the device is.
type Extension struct {
	// 0 to 100, representing the extension percentage of the device
	ExtendPercent float32 `protobuf:"fixed32,1,opt,name=extend_percent,json=extendPercent,proto3" json:"extend_percent,omitempty"`
	// A named preset for recall to extend the device to a specific point
	ExtendPreset string `protobuf:"bytes,2,opt,name=extend_preset,json=extendPreset,proto3" json:"extend_preset,omitempty"`
	// if extending/retracting over time then this contains the current progress, if setting then this asks for the
	// action to be performed over the given time frame
	Tween *types.Tween `protobuf:"bytes,3,opt,name=tween,proto3" json:"tween,omitempty"`
	// if tweening between values, this is our end goal
	TargetExtendPercent *wrappers.FloatValue `protobuf:"bytes,4,opt,name=target_extend_percent,json=targetExtendPercent,proto3" json:"target_extend_percent,omitempty"`
	// if tweening between values, this is our end goal
	TargetExtendPreset   string   `protobuf:"bytes,5,opt,name=target_extend_preset,json=targetExtendPreset,proto3" json:"target_extend_preset,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Extension) Reset()         { *m = Extension{} }
func (m *Extension) String() string { return proto.CompactTextString(m) }
func (*Extension) ProtoMessage()    {}
func (*Extension) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{1}
}

func (m *Extension) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Extension.Unmarshal(m, b)
}
func (m *Extension) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Extension.Marshal(b, m, deterministic)
}
func (m *Extension) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Extension.Merge(m, src)
}
func (m *Extension) XXX_Size() int {
	return xxx_messageInfo_Extension.Size(m)
}
func (m *Extension) XXX_DiscardUnknown() {
	xxx_messageInfo_Extension.DiscardUnknown(m)
}

var xxx_messageInfo_Extension proto.InternalMessageInfo

func (m *Extension) GetExtendPercent() float32 {
	if m != nil {
		return m.ExtendPercent
	}
	return 0
}

func (m *Extension) GetExtendPreset() string {
	if m != nil {
		return m.ExtendPreset
	}
	return ""
}

func (m *Extension) GetTween() *types.Tween {
	if m != nil {
		return m.Tween
	}
	return nil
}

func (m *Extension) GetTargetExtendPercent() *wrappers.FloatValue {
	if m != nil {
		return m.TargetExtendPercent
	}
	return nil
}

func (m *Extension) GetTargetExtendPreset() string {
	if m != nil {
		return m.TargetExtendPreset
	}
	return ""
}

// Describes a preset that may be configured on the device
type ExtensionPreset struct {
	// Required. The name of the preset, to be used for recall.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Optional 0 to 100, extension percentage that the preset would extend the device by.
	ExtendPercent *wrappers.FloatValue `protobuf:"bytes,2,opt,name=extend_percent,json=extendPercent,proto3" json:"extend_percent,omitempty"`
	// Can this preset be stored via the api
	Writable             bool     `protobuf:"varint,3,opt,name=writable,proto3" json:"writable,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExtensionPreset) Reset()         { *m = ExtensionPreset{} }
func (m *ExtensionPreset) String() string { return proto.CompactTextString(m) }
func (*ExtensionPreset) ProtoMessage()    {}
func (*ExtensionPreset) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{2}
}

func (m *ExtensionPreset) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExtensionPreset.Unmarshal(m, b)
}
func (m *ExtensionPreset) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExtensionPreset.Marshal(b, m, deterministic)
}
func (m *ExtensionPreset) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExtensionPreset.Merge(m, src)
}
func (m *ExtensionPreset) XXX_Size() int {
	return xxx_messageInfo_ExtensionPreset.Size(m)
}
func (m *ExtensionPreset) XXX_DiscardUnknown() {
	xxx_messageInfo_ExtensionPreset.DiscardUnknown(m)
}

var xxx_messageInfo_ExtensionPreset proto.InternalMessageInfo

func (m *ExtensionPreset) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *ExtensionPreset) GetExtendPercent() *wrappers.FloatValue {
	if m != nil {
		return m.ExtendPercent
	}
	return nil
}

func (m *ExtensionPreset) GetWritable() bool {
	if m != nil {
		return m.Writable
	}
	return false
}

// request to fetch the current extension for the device
type GetExtensionRequest struct {
	// the name of the device to fetch the information for
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetExtensionRequest) Reset()         { *m = GetExtensionRequest{} }
func (m *GetExtensionRequest) String() string { return proto.CompactTextString(m) }
func (*GetExtensionRequest) ProtoMessage()    {}
func (*GetExtensionRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{3}
}

func (m *GetExtensionRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetExtensionRequest.Unmarshal(m, b)
}
func (m *GetExtensionRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetExtensionRequest.Marshal(b, m, deterministic)
}
func (m *GetExtensionRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetExtensionRequest.Merge(m, src)
}
func (m *GetExtensionRequest) XXX_Size() int {
	return xxx_messageInfo_GetExtensionRequest.Size(m)
}
func (m *GetExtensionRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetExtensionRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetExtensionRequest proto.InternalMessageInfo

func (m *GetExtensionRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type UpdateExtensionRequest struct {
	Name                 string                `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Extension            *Extension            `protobuf:"bytes,2,opt,name=extension,proto3" json:"extension,omitempty"`
	UpdateMask           *field_mask.FieldMask `protobuf:"bytes,3,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *UpdateExtensionRequest) Reset()         { *m = UpdateExtensionRequest{} }
func (m *UpdateExtensionRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateExtensionRequest) ProtoMessage()    {}
func (*UpdateExtensionRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{4}
}

func (m *UpdateExtensionRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateExtensionRequest.Unmarshal(m, b)
}
func (m *UpdateExtensionRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateExtensionRequest.Marshal(b, m, deterministic)
}
func (m *UpdateExtensionRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateExtensionRequest.Merge(m, src)
}
func (m *UpdateExtensionRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateExtensionRequest.Size(m)
}
func (m *UpdateExtensionRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateExtensionRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateExtensionRequest proto.InternalMessageInfo

func (m *UpdateExtensionRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UpdateExtensionRequest) GetExtension() *Extension {
	if m != nil {
		return m.Extension
	}
	return nil
}

func (m *UpdateExtensionRequest) GetUpdateMask() *field_mask.FieldMask {
	if m != nil {
		return m.UpdateMask
	}
	return nil
}

// Request for the stop api
type ExtendRetractStopRequest struct {
	// the name of the device to stop
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExtendRetractStopRequest) Reset()         { *m = ExtendRetractStopRequest{} }
func (m *ExtendRetractStopRequest) String() string { return proto.CompactTextString(m) }
func (*ExtendRetractStopRequest) ProtoMessage()    {}
func (*ExtendRetractStopRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{5}
}

func (m *ExtendRetractStopRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExtendRetractStopRequest.Unmarshal(m, b)
}
func (m *ExtendRetractStopRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExtendRetractStopRequest.Marshal(b, m, deterministic)
}
func (m *ExtendRetractStopRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExtendRetractStopRequest.Merge(m, src)
}
func (m *ExtendRetractStopRequest) XXX_Size() int {
	return xxx_messageInfo_ExtendRetractStopRequest.Size(m)
}
func (m *ExtendRetractStopRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ExtendRetractStopRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ExtendRetractStopRequest proto.InternalMessageInfo

func (m *ExtendRetractStopRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// A request to store the current position under a preset name
type CreateExtensionPresetRequest struct {
	// The name of the device
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The preset to store the position under
	Preset               *ExtensionPreset `protobuf:"bytes,2,opt,name=preset,proto3" json:"preset,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *CreateExtensionPresetRequest) Reset()         { *m = CreateExtensionPresetRequest{} }
func (m *CreateExtensionPresetRequest) String() string { return proto.CompactTextString(m) }
func (*CreateExtensionPresetRequest) ProtoMessage()    {}
func (*CreateExtensionPresetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{6}
}

func (m *CreateExtensionPresetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateExtensionPresetRequest.Unmarshal(m, b)
}
func (m *CreateExtensionPresetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateExtensionPresetRequest.Marshal(b, m, deterministic)
}
func (m *CreateExtensionPresetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateExtensionPresetRequest.Merge(m, src)
}
func (m *CreateExtensionPresetRequest) XXX_Size() int {
	return xxx_messageInfo_CreateExtensionPresetRequest.Size(m)
}
func (m *CreateExtensionPresetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateExtensionPresetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateExtensionPresetRequest proto.InternalMessageInfo

func (m *CreateExtensionPresetRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateExtensionPresetRequest) GetPreset() *ExtensionPreset {
	if m != nil {
		return m.Preset
	}
	return nil
}

// A change to the state
type ExtensionChange struct {
	// name for the device that issued the change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// when the change occurred
	CreateTime *timestamp.Timestamp `protobuf:"bytes,2,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// the new state for the device
	Extension            *Extension `protobuf:"bytes,3,opt,name=extension,proto3" json:"extension,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ExtensionChange) Reset()         { *m = ExtensionChange{} }
func (m *ExtensionChange) String() string { return proto.CompactTextString(m) }
func (*ExtensionChange) ProtoMessage()    {}
func (*ExtensionChange) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{7}
}

func (m *ExtensionChange) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExtensionChange.Unmarshal(m, b)
}
func (m *ExtensionChange) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExtensionChange.Marshal(b, m, deterministic)
}
func (m *ExtensionChange) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExtensionChange.Merge(m, src)
}
func (m *ExtensionChange) XXX_Size() int {
	return xxx_messageInfo_ExtensionChange.Size(m)
}
func (m *ExtensionChange) XXX_DiscardUnknown() {
	xxx_messageInfo_ExtensionChange.DiscardUnknown(m)
}

var xxx_messageInfo_ExtensionChange proto.InternalMessageInfo

func (m *ExtensionChange) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *ExtensionChange) GetCreateTime() *timestamp.Timestamp {
	if m != nil {
		return m.CreateTime
	}
	return nil
}

func (m *ExtensionChange) GetExtension() *Extension {
	if m != nil {
		return m.Extension
	}
	return nil
}

// A request to monitor the state of a device
type PullExtensionsRequest struct {
	// name of the device to subscribe to
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PullExtensionsRequest) Reset()         { *m = PullExtensionsRequest{} }
func (m *PullExtensionsRequest) String() string { return proto.CompactTextString(m) }
func (*PullExtensionsRequest) ProtoMessage()    {}
func (*PullExtensionsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{8}
}

func (m *PullExtensionsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PullExtensionsRequest.Unmarshal(m, b)
}
func (m *PullExtensionsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PullExtensionsRequest.Marshal(b, m, deterministic)
}
func (m *PullExtensionsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PullExtensionsRequest.Merge(m, src)
}
func (m *PullExtensionsRequest) XXX_Size() int {
	return xxx_messageInfo_PullExtensionsRequest.Size(m)
}
func (m *PullExtensionsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PullExtensionsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PullExtensionsRequest proto.InternalMessageInfo

func (m *PullExtensionsRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// Response to a Pull request for extension changes
type PullExtensionsResponse struct {
	// Changes that have occurred since the last event
	Changes              []*ExtensionChange `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *PullExtensionsResponse) Reset()         { *m = PullExtensionsResponse{} }
func (m *PullExtensionsResponse) String() string { return proto.CompactTextString(m) }
func (*PullExtensionsResponse) ProtoMessage()    {}
func (*PullExtensionsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe1ffcd64c59cfbd, []int{9}
}

func (m *PullExtensionsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PullExtensionsResponse.Unmarshal(m, b)
}
func (m *PullExtensionsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PullExtensionsResponse.Marshal(b, m, deterministic)
}
func (m *PullExtensionsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PullExtensionsResponse.Merge(m, src)
}
func (m *PullExtensionsResponse) XXX_Size() int {
	return xxx_messageInfo_PullExtensionsResponse.Size(m)
}
func (m *PullExtensionsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_PullExtensionsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_PullExtensionsResponse proto.InternalMessageInfo

func (m *PullExtensionsResponse) GetChanges() []*ExtensionChange {
	if m != nil {
		return m.Changes
	}
	return nil
}

func init() {
	proto.RegisterType((*ExtendRetractAttributes)(nil), "smartcore.api.device.traits.ExtendRetractAttributes")
	proto.RegisterType((*Extension)(nil), "smartcore.api.device.traits.Extension")
	proto.RegisterType((*ExtensionPreset)(nil), "smartcore.api.device.traits.ExtensionPreset")
	proto.RegisterType((*GetExtensionRequest)(nil), "smartcore.api.device.traits.GetExtensionRequest")
	proto.RegisterType((*UpdateExtensionRequest)(nil), "smartcore.api.device.traits.UpdateExtensionRequest")
	proto.RegisterType((*ExtendRetractStopRequest)(nil), "smartcore.api.device.traits.ExtendRetractStopRequest")
	proto.RegisterType((*CreateExtensionPresetRequest)(nil), "smartcore.api.device.traits.CreateExtensionPresetRequest")
	proto.RegisterType((*ExtensionChange)(nil), "smartcore.api.device.traits.ExtensionChange")
	proto.RegisterType((*PullExtensionsRequest)(nil), "smartcore.api.device.traits.PullExtensionsRequest")
	proto.RegisterType((*PullExtensionsResponse)(nil), "smartcore.api.device.traits.PullExtensionsResponse")
}

func init() { proto.RegisterFile("device/traits/extend_retract.proto", fileDescriptor_fe1ffcd64c59cfbd) }

var fileDescriptor_fe1ffcd64c59cfbd = []byte{
	// 775 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x56, 0xcd, 0x6e, 0xdb, 0x46,
	0x10, 0x06, 0x65, 0xd9, 0xb5, 0x46, 0x96, 0x8d, 0xae, 0x2b, 0x5b, 0x90, 0x8b, 0x5a, 0x65, 0xd1,
	0x42, 0x45, 0x5b, 0x52, 0x95, 0x91, 0x00, 0x81, 0x4f, 0xfe, 0xcd, 0x29, 0x88, 0x40, 0x3b, 0x39,
	0x04, 0x06, 0x94, 0x15, 0x35, 0x96, 0x09, 0x4b, 0xe4, 0x66, 0x77, 0x69, 0x3b, 0xc8, 0x25, 0x97,
	0xdc, 0xf2, 0x1c, 0x41, 0x90, 0x4b, 0xde, 0x23, 0xa7, 0xbc, 0x4c, 0xee, 0x01, 0x77, 0x49, 0x45,
	0xa4, 0x15, 0x5a, 0xca, 0x6d, 0xb9, 0xf3, 0x7d, 0x33, 0xdf, 0xfc, 0x2d, 0x08, 0x66, 0x1f, 0xaf,
	0x3c, 0x17, 0x6d, 0xc9, 0xa9, 0x27, 0x85, 0x8d, 0x37, 0x12, 0xfd, 0x7e, 0x97, 0xa3, 0xe4, 0xd4,
	0x95, 0x16, 0xe3, 0x81, 0x0c, 0xc8, 0x96, 0x18, 0x51, 0x2e, 0xdd, 0x80, 0xa3, 0x45, 0x99, 0x67,
	0x69, 0x86, 0xa5, 0x19, 0xf5, 0xc6, 0x20, 0x08, 0x06, 0x43, 0xb4, 0x15, 0xb4, 0x17, 0x9e, 0xdb,
	0xe7, 0x1e, 0x0e, 0xfb, 0xdd, 0x11, 0x15, 0x97, 0x9a, 0x5e, 0xdf, 0xce, 0x22, 0xa4, 0x37, 0x42,
	0x21, 0xe9, 0x88, 0xc5, 0x80, 0xdf, 0xb2, 0x80, 0x6b, 0x4e, 0x19, 0x43, 0x2e, 0x62, 0xfb, 0xcf,
	0xf2, 0x25, 0x43, 0x61, 0xcb, 0x6b, 0x44, 0x5f, 0x5f, 0x99, 0x5f, 0x0c, 0xd8, 0x3c, 0x52, 0x5a,
	0x1d, 0x2d, 0x75, 0x4f, 0x4a, 0xee, 0xf5, 0x42, 0x89, 0x82, 0x1c, 0xc3, 0x4f, 0x8c, 0xa3, 0x40,
	0x29, 0x6a, 0x46, 0x63, 0xa1, 0x59, 0x6e, 0xff, 0x6b, 0xe5, 0x24, 0x60, 0x29, 0x37, 0xc2, 0x0b,
	0xfc, 0x8e, 0x22, 0x39, 0x09, 0x99, 0x10, 0x28, 0x0a, 0x89, 0xac, 0x56, 0x68, 0x18, 0xcd, 0x82,
	0xa3, 0xce, 0xe4, 0x18, 0x2a, 0x4a, 0x46, 0x57, 0x84, 0x8c, 0x05, 0x5c, 0xd6, 0x16, 0x1a, 0x46,
	0x73, 0xb5, 0xfd, 0x7b, 0x26, 0x82, 0x12, 0x6c, 0x9d, 0x46, 0xc8, 0x13, 0x0d, 0x74, 0x56, 0xe4,
	0xc4, 0x17, 0xb9, 0x0f, 0x9b, 0xb1, 0x07, 0xd1, 0x75, 0x43, 0x21, 0x83, 0x51, 0x37, 0xd1, 0x5c,
	0x6c, 0x18, 0xcd, 0x65, 0xa7, 0x9a, 0x98, 0x0f, 0x94, 0x55, 0x6b, 0x13, 0xe6, 0xdb, 0x02, 0x94,
	0xc6, 0x82, 0xc9, 0x9f, 0xb0, 0x1a, 0x37, 0x8c, 0x21, 0x77, 0xd1, 0x97, 0x35, 0x43, 0x69, 0xad,
	0xe8, 0xdb, 0x8e, 0xbe, 0x24, 0x7f, 0x40, 0x25, 0x81, 0x29, 0x37, 0x2a, 0xa3, 0x92, 0xb3, 0x12,
	0xa3, 0xd4, 0x1d, 0x69, 0xc1, 0xa2, 0x52, 0xa8, 0x32, 0x2a, 0xb7, 0xeb, 0xdf, 0xcf, 0xc8, 0xd1,
	0x40, 0xf2, 0x18, 0xaa, 0x92, 0xf2, 0x01, 0xca, 0x6e, 0x46, 0x44, 0x51, 0x79, 0xd8, 0xb2, 0x74,
	0x5b, 0xad, 0xa4, 0xad, 0xd6, 0xf1, 0x30, 0xa0, 0xf2, 0x29, 0x1d, 0x86, 0xe8, 0xac, 0x6b, 0xe6,
	0x51, 0x4a, 0x67, 0x0b, 0x7e, 0xc9, 0x38, 0xd4, 0x72, 0x17, 0x95, 0x5c, 0x92, 0xa2, 0x28, 0x8b,
	0xf9, 0xc6, 0x80, 0xb5, 0x4c, 0xff, 0xa2, 0xb6, 0xf9, 0x74, 0x84, 0xaa, 0x14, 0x25, 0x47, 0x9d,
	0xc9, 0xfe, 0xad, 0x42, 0x15, 0xee, 0xd6, 0x98, 0xa9, 0x62, 0x1d, 0x96, 0xaf, 0xb9, 0x27, 0x69,
	0x6f, 0x88, 0xaa, 0x46, 0xcb, 0xce, 0xf8, 0xdb, 0xfc, 0x1b, 0xd6, 0x1f, 0xc6, 0xd2, 0x22, 0x25,
	0x0e, 0xbe, 0x08, 0x51, 0x4c, 0x95, 0x62, 0x7e, 0x34, 0x60, 0xe3, 0x09, 0xeb, 0x53, 0x89, 0xb3,
	0xc0, 0xc9, 0x21, 0x94, 0x30, 0xc1, 0xc5, 0xa2, 0xff, 0x9a, 0x6d, 0x9c, 0x9d, 0x6f, 0x44, 0xb2,
	0x0b, 0xe5, 0x50, 0xc5, 0x54, 0x7b, 0x39, 0x6e, 0xf1, 0xad, 0xe4, 0xa3, 0xd5, 0x7d, 0x44, 0xc5,
	0xa5, 0x03, 0x1a, 0x1e, 0x9d, 0x4d, 0x0b, 0x6a, 0xa9, 0x55, 0x3b, 0x91, 0x01, 0xcb, 0xcb, 0xf0,
	0x06, 0x7e, 0x3d, 0xe0, 0x38, 0x99, 0x60, 0xbc, 0x59, 0xb9, 0x69, 0x2e, 0x4d, 0xcc, 0xe6, 0xbc,
	0x2b, 0x1b, 0x73, 0xcd, 0xf7, 0x93, 0xe3, 0x70, 0x70, 0x41, 0xfd, 0x01, 0x4e, 0x8d, 0xb6, 0x0b,
	0x65, 0x57, 0x29, 0xec, 0x46, 0x4f, 0x51, 0x1c, 0xf2, 0x76, 0x39, 0x4e, 0x93, 0x77, 0xca, 0x01,
	0x0d, 0x8f, 0x2e, 0xd2, 0x1d, 0x59, 0xf8, 0xc1, 0x8e, 0x98, 0xff, 0x40, 0xb5, 0x13, 0x0e, 0x87,
	0x63, 0x9b, 0xc8, 0xab, 0xe8, 0x73, 0xd8, 0xc8, 0x82, 0x05, 0x0b, 0x7c, 0x81, 0xd1, 0x5b, 0xe7,
	0xaa, 0x3c, 0xe7, 0x7c, 0xeb, 0x74, 0x71, 0x9c, 0x84, 0xdc, 0xfe, 0x5c, 0x84, 0x4a, 0xaa, 0xc9,
	0xe4, 0x02, 0x56, 0x26, 0x47, 0x9a, 0xb4, 0x72, 0x1d, 0x4f, 0x99, 0xfe, 0xfa, 0x8c, 0x55, 0x21,
	0x3e, 0xac, 0x65, 0x16, 0x82, 0xec, 0xe4, 0x52, 0xa7, 0xaf, 0xcf, 0xcc, 0xf1, 0x10, 0x8a, 0xd1,
	0x08, 0x93, 0x7b, 0x77, 0xe3, 0xa7, 0x8c, 0xfc, 0xcc, 0x61, 0x5e, 0x1b, 0x50, 0x9d, 0xba, 0x07,
	0xe4, 0x41, 0xae, 0x87, 0xbc, 0xdd, 0xa9, 0xcf, 0xb5, 0x17, 0xe4, 0x15, 0xac, 0xa6, 0xe7, 0x86,
	0xb4, 0x73, 0xf9, 0x53, 0x27, 0xb2, 0xbe, 0x33, 0x17, 0x47, 0x0f, 0x66, 0xcb, 0xd8, 0x7f, 0x67,
	0xc0, 0x76, 0x1f, 0xaf, 0xf2, 0xc8, 0xfb, 0x24, 0x55, 0xe5, 0x4e, 0xb4, 0x78, 0x1d, 0xe3, 0xd9,
	0xff, 0x03, 0x4f, 0x5a, 0x57, 0xd4, 0x97, 0x9e, 0xe5, 0x06, 0x56, 0x78, 0x69, 0x8f, 0x5d, 0xd8,
	0xc2, 0xfd, 0x8f, 0x32, 0xcf, 0x1e, 0x04, 0x76, 0xea, 0xbf, 0xe5, 0x43, 0x61, 0xeb, 0x64, 0x1c,
	0x66, 0x8f, 0x79, 0xd6, 0xa1, 0x0e, 0x73, 0xaa, 0xac, 0x9f, 0x26, 0xac, 0x67, 0x7b, 0xcc, 0x3b,
	0xd3, 0xd6, 0x33, 0x6d, 0xed, 0x2d, 0xa9, 0x85, 0xdf, 0xf9, 0x1a, 0x00, 0x00, 0xff, 0xff, 0x40,
	0x1b, 0x59, 0x1a, 0x0b, 0x09, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ExtendRetractClient is the client API for ExtendRetract service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ExtendRetractClient interface {
	// Set the target state for the device
	GetExtension(ctx context.Context, in *GetExtensionRequest, opts ...grpc.CallOption) (*Extension, error)
	// Set the target state for the device
	UpdateExtension(ctx context.Context, in *UpdateExtensionRequest, opts ...grpc.CallOption) (*Extension, error)
	// Stop the device if it is extending or retracting, returns the current known state after stopping.
	Stop(ctx context.Context, in *ExtendRetractStopRequest, opts ...grpc.CallOption) (*Extension, error)
	// Create a preset for the extension. If no preset extension value is specified then use the current position
	CreateExtensionPreset(ctx context.Context, in *CreateExtensionPresetRequest, opts ...grpc.CallOption) (*ExtensionPreset, error)
	// Get notified of changes to the OnOffState of a device
	PullExtensions(ctx context.Context, in *PullExtensionsRequest, opts ...grpc.CallOption) (ExtendRetract_PullExtensionsClient, error)
}

type extendRetractClient struct {
	cc *grpc.ClientConn
}

func NewExtendRetractClient(cc *grpc.ClientConn) ExtendRetractClient {
	return &extendRetractClient{cc}
}

func (c *extendRetractClient) GetExtension(ctx context.Context, in *GetExtensionRequest, opts ...grpc.CallOption) (*Extension, error) {
	out := new(Extension)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.ExtendRetract/GetExtension", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *extendRetractClient) UpdateExtension(ctx context.Context, in *UpdateExtensionRequest, opts ...grpc.CallOption) (*Extension, error) {
	out := new(Extension)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.ExtendRetract/UpdateExtension", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *extendRetractClient) Stop(ctx context.Context, in *ExtendRetractStopRequest, opts ...grpc.CallOption) (*Extension, error) {
	out := new(Extension)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.ExtendRetract/Stop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *extendRetractClient) CreateExtensionPreset(ctx context.Context, in *CreateExtensionPresetRequest, opts ...grpc.CallOption) (*ExtensionPreset, error) {
	out := new(ExtensionPreset)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.ExtendRetract/CreateExtensionPreset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *extendRetractClient) PullExtensions(ctx context.Context, in *PullExtensionsRequest, opts ...grpc.CallOption) (ExtendRetract_PullExtensionsClient, error) {
	stream, err := c.cc.NewStream(ctx, &_ExtendRetract_serviceDesc.Streams[0], "/smartcore.api.device.traits.ExtendRetract/PullExtensions", opts...)
	if err != nil {
		return nil, err
	}
	x := &extendRetractPullExtensionsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ExtendRetract_PullExtensionsClient interface {
	Recv() (*PullExtensionsResponse, error)
	grpc.ClientStream
}

type extendRetractPullExtensionsClient struct {
	grpc.ClientStream
}

func (x *extendRetractPullExtensionsClient) Recv() (*PullExtensionsResponse, error) {
	m := new(PullExtensionsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ExtendRetractServer is the server API for ExtendRetract service.
type ExtendRetractServer interface {
	// Set the target state for the device
	GetExtension(context.Context, *GetExtensionRequest) (*Extension, error)
	// Set the target state for the device
	UpdateExtension(context.Context, *UpdateExtensionRequest) (*Extension, error)
	// Stop the device if it is extending or retracting, returns the current known state after stopping.
	Stop(context.Context, *ExtendRetractStopRequest) (*Extension, error)
	// Create a preset for the extension. If no preset extension value is specified then use the current position
	CreateExtensionPreset(context.Context, *CreateExtensionPresetRequest) (*ExtensionPreset, error)
	// Get notified of changes to the OnOffState of a device
	PullExtensions(*PullExtensionsRequest, ExtendRetract_PullExtensionsServer) error
}

// UnimplementedExtendRetractServer can be embedded to have forward compatible implementations.
type UnimplementedExtendRetractServer struct {
}

func (*UnimplementedExtendRetractServer) GetExtension(ctx context.Context, req *GetExtensionRequest) (*Extension, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetExtension not implemented")
}
func (*UnimplementedExtendRetractServer) UpdateExtension(ctx context.Context, req *UpdateExtensionRequest) (*Extension, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateExtension not implemented")
}
func (*UnimplementedExtendRetractServer) Stop(ctx context.Context, req *ExtendRetractStopRequest) (*Extension, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (*UnimplementedExtendRetractServer) CreateExtensionPreset(ctx context.Context, req *CreateExtensionPresetRequest) (*ExtensionPreset, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateExtensionPreset not implemented")
}
func (*UnimplementedExtendRetractServer) PullExtensions(req *PullExtensionsRequest, srv ExtendRetract_PullExtensionsServer) error {
	return status.Errorf(codes.Unimplemented, "method PullExtensions not implemented")
}

func RegisterExtendRetractServer(s *grpc.Server, srv ExtendRetractServer) {
	s.RegisterService(&_ExtendRetract_serviceDesc, srv)
}

func _ExtendRetract_GetExtension_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetExtensionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExtendRetractServer).GetExtension(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.ExtendRetract/GetExtension",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExtendRetractServer).GetExtension(ctx, req.(*GetExtensionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExtendRetract_UpdateExtension_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateExtensionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExtendRetractServer).UpdateExtension(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.ExtendRetract/UpdateExtension",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExtendRetractServer).UpdateExtension(ctx, req.(*UpdateExtensionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExtendRetract_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExtendRetractStopRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExtendRetractServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.ExtendRetract/Stop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExtendRetractServer).Stop(ctx, req.(*ExtendRetractStopRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExtendRetract_CreateExtensionPreset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateExtensionPresetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExtendRetractServer).CreateExtensionPreset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.ExtendRetract/CreateExtensionPreset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExtendRetractServer).CreateExtensionPreset(ctx, req.(*CreateExtensionPresetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExtendRetract_PullExtensions_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullExtensionsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ExtendRetractServer).PullExtensions(m, &extendRetractPullExtensionsServer{stream})
}

type ExtendRetract_PullExtensionsServer interface {
	Send(*PullExtensionsResponse) error
	grpc.ServerStream
}

type extendRetractPullExtensionsServer struct {
	grpc.ServerStream
}

func (x *extendRetractPullExtensionsServer) Send(m *PullExtensionsResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _ExtendRetract_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.api.device.traits.ExtendRetract",
	HandlerType: (*ExtendRetractServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetExtension",
			Handler:    _ExtendRetract_GetExtension_Handler,
		},
		{
			MethodName: "UpdateExtension",
			Handler:    _ExtendRetract_UpdateExtension_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _ExtendRetract_Stop_Handler,
		},
		{
			MethodName: "CreateExtensionPreset",
			Handler:    _ExtendRetract_CreateExtensionPreset_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullExtensions",
			Handler:       _ExtendRetract_PullExtensions_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "device/traits/extend_retract.proto",
}