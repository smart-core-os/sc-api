// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.29.3
// source: traits/access.proto

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

type AccessAttempt_Grant int32

const (
	// The status of the access attempt is unknown.
	AccessAttempt_GRANT_UNKNOWN AccessAttempt_Grant = 0
	// The access attempt was granted.
	AccessAttempt_GRANTED AccessAttempt_Grant = 1
	// The access attempt was denied.
	AccessAttempt_DENIED AccessAttempt_Grant = 2
	// Access is pending a decision.
	AccessAttempt_PENDING AccessAttempt_Grant = 3
	// Access was aborted before being granted or denied.
	// Typically only used following PENDING.
	AccessAttempt_ABORTED AccessAttempt_Grant = 4
	// Access was not granted, happened anyway.
	// For example if someone forced the door open.
	AccessAttempt_FORCED AccessAttempt_Grant = 5
	// Access was granted, but failed for other reasons.
	// For example if the door is stuck
	AccessAttempt_FAILED AccessAttempt_Grant = 6
	// Access was granted, but to the actor before this one.
	// Happens when someone follows another person through a door.
	AccessAttempt_TAILGATE AccessAttempt_Grant = 7
)

// Enum value maps for AccessAttempt_Grant.
var (
	AccessAttempt_Grant_name = map[int32]string{
		0: "GRANT_UNKNOWN",
		1: "GRANTED",
		2: "DENIED",
		3: "PENDING",
		4: "ABORTED",
		5: "FORCED",
		6: "FAILED",
		7: "TAILGATE",
	}
	AccessAttempt_Grant_value = map[string]int32{
		"GRANT_UNKNOWN": 0,
		"GRANTED":       1,
		"DENIED":        2,
		"PENDING":       3,
		"ABORTED":       4,
		"FORCED":        5,
		"FAILED":        6,
		"TAILGATE":      7,
	}
)

func (x AccessAttempt_Grant) Enum() *AccessAttempt_Grant {
	p := new(AccessAttempt_Grant)
	*p = x
	return p
}

func (x AccessAttempt_Grant) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AccessAttempt_Grant) Descriptor() protoreflect.EnumDescriptor {
	return file_traits_access_proto_enumTypes[0].Descriptor()
}

func (AccessAttempt_Grant) Type() protoreflect.EnumType {
	return &file_traits_access_proto_enumTypes[0]
}

func (x AccessAttempt_Grant) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AccessAttempt_Grant.Descriptor instead.
func (AccessAttempt_Grant) EnumDescriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{0, 0}
}

// AccessAttempt describes an access attempt made at an access point.
// At a minimum it should define the status of the access attempt, and the time it was made.
// It may also include the actor attempting access, and the reason for the access attempt being granted or denied.
type AccessAttempt struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Was the access attempt granted or denied.
	Grant AccessAttempt_Grant `protobuf:"varint,1,opt,name=grant,proto3,enum=smartcore.traits.AccessAttempt_Grant" json:"grant,omitempty"`
	// A reason for either granting or denying the access attempt.
	// For example "Operator override" or "Unrecognised card".
	Reason string `protobuf:"bytes,2,opt,name=reason,proto3" json:"reason,omitempty"`
	// Actor describes the entity attempting to gain access.
	// Optional.
	Actor *AccessAttempt_Actor `protobuf:"bytes,3,opt,name=actor,proto3" json:"actor,omitempty"`
	// The time the access attempt was made
	AccessAttemptTime *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=access_attempt_time,json=accessAttemptTime,proto3" json:"access_attempt_time,omitempty"`
}

func (x *AccessAttempt) Reset() {
	*x = AccessAttempt{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_access_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessAttempt) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessAttempt) ProtoMessage() {}

func (x *AccessAttempt) ProtoReflect() protoreflect.Message {
	mi := &file_traits_access_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessAttempt.ProtoReflect.Descriptor instead.
func (*AccessAttempt) Descriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{0}
}

func (x *AccessAttempt) GetGrant() AccessAttempt_Grant {
	if x != nil {
		return x.Grant
	}
	return AccessAttempt_GRANT_UNKNOWN
}

func (x *AccessAttempt) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

func (x *AccessAttempt) GetActor() *AccessAttempt_Actor {
	if x != nil {
		return x.Actor
	}
	return nil
}

func (x *AccessAttempt) GetAccessAttemptTime() *timestamppb.Timestamp {
	if x != nil {
		return x.AccessAttemptTime
	}
	return nil
}

type GetLastAccessAttemptRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to get the last access attempt for.
	Name     string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
}

func (x *GetLastAccessAttemptRequest) Reset() {
	*x = GetLastAccessAttemptRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_access_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetLastAccessAttemptRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetLastAccessAttemptRequest) ProtoMessage() {}

func (x *GetLastAccessAttemptRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_access_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetLastAccessAttemptRequest.ProtoReflect.Descriptor instead.
func (*GetLastAccessAttemptRequest) Descriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{1}
}

func (x *GetLastAccessAttemptRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetLastAccessAttemptRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

type PullAccessAttemptsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device to pull access attempts for.
	Name        string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ReadMask    *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	UpdatesOnly bool                   `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullAccessAttemptsRequest) Reset() {
	*x = PullAccessAttemptsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_access_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullAccessAttemptsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullAccessAttemptsRequest) ProtoMessage() {}

func (x *PullAccessAttemptsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_access_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullAccessAttemptsRequest.ProtoReflect.Descriptor instead.
func (*PullAccessAttemptsRequest) Descriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{2}
}

func (x *PullAccessAttemptsRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullAccessAttemptsRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullAccessAttemptsRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

type PullAccessAttemptsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Changes []*PullAccessAttemptsResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullAccessAttemptsResponse) Reset() {
	*x = PullAccessAttemptsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_access_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullAccessAttemptsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullAccessAttemptsResponse) ProtoMessage() {}

func (x *PullAccessAttemptsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_access_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullAccessAttemptsResponse.ProtoReflect.Descriptor instead.
func (*PullAccessAttemptsResponse) Descriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{3}
}

func (x *PullAccessAttemptsResponse) GetChanges() []*PullAccessAttemptsResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

// An Actor is some entity that attempted to access the resource.
// It could be an object, like a car, or a person or animal.
type AccessAttempt_Actor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A unique name for this actor as measured by the device.
	// Name allows correlation between enter and leave events.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// An official title for this actor.
	Title string `protobuf:"bytes,10,opt,name=title,proto3" json:"title,omitempty"`
	// A recognisable display name for this actor.
	DisplayName string `protobuf:"bytes,11,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// A picture of the actor.
	Picture *types.Image `protobuf:"bytes,12,opt,name=picture,proto3" json:"picture,omitempty"`
	// A url that resolves to more information on this actor.
	Url string `protobuf:"bytes,13,opt,name=url,proto3" json:"url,omitempty"`
	// An email address for the actor.
	Email string `protobuf:"bytes,14,opt,name=email,proto3" json:"email,omitempty"`
	// The time this actor was last granted access.
	// The grant may have been performed by a different device to this one.
	LastGrantTime *timestamppb.Timestamp `protobuf:"bytes,15,opt,name=last_grant_time,json=lastGrantTime,proto3" json:"last_grant_time,omitempty"`
	// The access zone the actor was last granted access to.
	// The zone will be provided by the device and may not map to any Smart Core zone or device.
	LastGrantZone string `protobuf:"bytes,16,opt,name=last_grant_zone,json=lastGrantZone,proto3" json:"last_grant_zone,omitempty"`
	// IDs holds external actor ids.
	// For example this might hold an id representing a person in an access control system.
	// The map key should uniquely represent the domain for the id, for example "my-access-system/user-id", the use of uris is not
	// required, values should be the id of this consumable in that domain, for example "sma81r6t1c5o3r58e1-3r8u16l1es".
	Ids map[string]string `protobuf:"bytes,100,rep,name=ids,proto3" json:"ids,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Additional properties associated with the actor.
	// Typically displayed to a user to help them to distinguish between similar actors.
	More map[string]string `protobuf:"bytes,101,rep,name=more,proto3" json:"more,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *AccessAttempt_Actor) Reset() {
	*x = AccessAttempt_Actor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_access_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessAttempt_Actor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessAttempt_Actor) ProtoMessage() {}

func (x *AccessAttempt_Actor) ProtoReflect() protoreflect.Message {
	mi := &file_traits_access_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessAttempt_Actor.ProtoReflect.Descriptor instead.
func (*AccessAttempt_Actor) Descriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{0, 0}
}

func (x *AccessAttempt_Actor) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AccessAttempt_Actor) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *AccessAttempt_Actor) GetDisplayName() string {
	if x != nil {
		return x.DisplayName
	}
	return ""
}

func (x *AccessAttempt_Actor) GetPicture() *types.Image {
	if x != nil {
		return x.Picture
	}
	return nil
}

func (x *AccessAttempt_Actor) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

func (x *AccessAttempt_Actor) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *AccessAttempt_Actor) GetLastGrantTime() *timestamppb.Timestamp {
	if x != nil {
		return x.LastGrantTime
	}
	return nil
}

func (x *AccessAttempt_Actor) GetLastGrantZone() string {
	if x != nil {
		return x.LastGrantZone
	}
	return ""
}

func (x *AccessAttempt_Actor) GetIds() map[string]string {
	if x != nil {
		return x.Ids
	}
	return nil
}

func (x *AccessAttempt_Actor) GetMore() map[string]string {
	if x != nil {
		return x.More
	}
	return nil
}

type PullAccessAttemptsResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name          string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ChangeTime    *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
	AccessAttempt *AccessAttempt         `protobuf:"bytes,3,opt,name=access_attempt,json=accessAttempt,proto3" json:"access_attempt,omitempty"`
}

func (x *PullAccessAttemptsResponse_Change) Reset() {
	*x = PullAccessAttemptsResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_access_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullAccessAttemptsResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullAccessAttemptsResponse_Change) ProtoMessage() {}

func (x *PullAccessAttemptsResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_access_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullAccessAttemptsResponse_Change.ProtoReflect.Descriptor instead.
func (*PullAccessAttemptsResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_access_proto_rawDescGZIP(), []int{3, 0}
}

func (x *PullAccessAttemptsResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullAccessAttemptsResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

func (x *PullAccessAttemptsResponse_Change) GetAccessAttempt() *AccessAttempt {
	if x != nil {
		return x.AccessAttempt
	}
	return nil
}

var File_traits_access_proto protoreflect.FileDescriptor

var file_traits_access_proto_rawDesc = []byte{
	0x0a, 0x13, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d,
	0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf7, 0x06,
	0x0a, 0x0d, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x12,
	0x3b, 0x0a, 0x05, 0x67, 0x72, 0x61, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x25,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x2e,
	0x47, 0x72, 0x61, 0x6e, 0x74, 0x52, 0x05, 0x67, 0x72, 0x61, 0x6e, 0x74, 0x12, 0x16, 0x0a, 0x06,
	0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65,
	0x61, 0x73, 0x6f, 0x6e, 0x12, 0x3b, 0x0a, 0x05, 0x61, 0x63, 0x74, 0x6f, 0x72, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74,
	0x65, 0x6d, 0x70, 0x74, 0x2e, 0x41, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x05, 0x61, 0x63, 0x74, 0x6f,
	0x72, 0x12, 0x4a, 0x0a, 0x13, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x61, 0x74, 0x74, 0x65,
	0x6d, 0x70, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x11, 0x61, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x1a, 0x92, 0x04,
	0x0a, 0x05, 0x41, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x69, 0x74, 0x6c, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c,
	0x65, 0x12, 0x21, 0x0a, 0x0c, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79,
	0x4e, 0x61, 0x6d, 0x65, 0x12, 0x30, 0x0a, 0x07, 0x70, 0x69, 0x63, 0x74, 0x75, 0x72, 0x65, 0x18,
	0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x07, 0x70,
	0x69, 0x63, 0x74, 0x75, 0x72, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18, 0x0d, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x72, 0x6c, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x42,
	0x0a, 0x0f, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x67, 0x72, 0x61, 0x6e, 0x74, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x0d, 0x6c, 0x61, 0x73, 0x74, 0x47, 0x72, 0x61, 0x6e, 0x74, 0x54, 0x69,
	0x6d, 0x65, 0x12, 0x26, 0x0a, 0x0f, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x67, 0x72, 0x61, 0x6e, 0x74,
	0x5f, 0x7a, 0x6f, 0x6e, 0x65, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6c, 0x61, 0x73,
	0x74, 0x47, 0x72, 0x61, 0x6e, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x12, 0x40, 0x0a, 0x03, 0x69, 0x64,
	0x73, 0x18, 0x64, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x2e, 0x41, 0x63, 0x74, 0x6f, 0x72, 0x2e, 0x49,
	0x64, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x03, 0x69, 0x64, 0x73, 0x12, 0x43, 0x0a, 0x04,
	0x6d, 0x6f, 0x72, 0x65, 0x18, 0x65, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x2e, 0x41, 0x63, 0x74, 0x6f,
	0x72, 0x2e, 0x4d, 0x6f, 0x72, 0x65, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x6d, 0x6f, 0x72,
	0x65, 0x1a, 0x36, 0x0a, 0x08, 0x49, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a,
	0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x37, 0x0a, 0x09, 0x4d, 0x6f, 0x72,
	0x65, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x22, 0x73, 0x0a, 0x05, 0x47, 0x72, 0x61, 0x6e, 0x74, 0x12, 0x11, 0x0a, 0x0d, 0x47,
	0x52, 0x41, 0x4e, 0x54, 0x5f, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0b,
	0x0a, 0x07, 0x47, 0x52, 0x41, 0x4e, 0x54, 0x45, 0x44, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x44,
	0x45, 0x4e, 0x49, 0x45, 0x44, 0x10, 0x02, 0x12, 0x0b, 0x0a, 0x07, 0x50, 0x45, 0x4e, 0x44, 0x49,
	0x4e, 0x47, 0x10, 0x03, 0x12, 0x0b, 0x0a, 0x07, 0x41, 0x42, 0x4f, 0x52, 0x54, 0x45, 0x44, 0x10,
	0x04, 0x12, 0x0a, 0x0a, 0x06, 0x46, 0x4f, 0x52, 0x43, 0x45, 0x44, 0x10, 0x05, 0x12, 0x0a, 0x0a,
	0x06, 0x46, 0x41, 0x49, 0x4c, 0x45, 0x44, 0x10, 0x06, 0x12, 0x0c, 0x0a, 0x08, 0x54, 0x41, 0x49,
	0x4c, 0x47, 0x41, 0x54, 0x45, 0x10, 0x07, 0x22, 0x6a, 0x0a, 0x1b, 0x47, 0x65, 0x74, 0x4c, 0x61,
	0x73, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65,
	0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d,
	0x61, 0x73, 0x6b, 0x22, 0x8b, 0x01, 0x0a, 0x19, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61,
	0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64,
	0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21,
	0x0a, 0x0c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c,
	0x79, 0x22, 0x8f, 0x02, 0x0a, 0x1a, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x4d, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x33, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41,
	0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e,
	0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x73, 0x1a,
	0xa1, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3b,
	0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52,
	0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x46, 0x0a, 0x0e, 0x61,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x61, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e,
	0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74,
	0x65, 0x6d, 0x70, 0x74, 0x52, 0x0d, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65,
	0x6d, 0x70, 0x74, 0x32, 0xea, 0x01, 0x0a, 0x09, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x70,
	0x69, 0x12, 0x68, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4c, 0x61, 0x73, 0x74, 0x41, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x12, 0x2d, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74,
	0x4c, 0x61, 0x73, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x41, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x22, 0x00, 0x12, 0x73, 0x0a, 0x12, 0x50,
	0x75, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65, 0x6d, 0x70, 0x74,
	0x73, 0x12, 0x2b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72,
	0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41,
	0x74, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x74, 0x74, 0x65,
	0x6d, 0x70, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30, 0x01,
	0x42, 0x76, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0b, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f,
	0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54,
	0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_access_proto_rawDescOnce sync.Once
	file_traits_access_proto_rawDescData = file_traits_access_proto_rawDesc
)

func file_traits_access_proto_rawDescGZIP() []byte {
	file_traits_access_proto_rawDescOnce.Do(func() {
		file_traits_access_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_access_proto_rawDescData)
	})
	return file_traits_access_proto_rawDescData
}

var file_traits_access_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_traits_access_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_traits_access_proto_goTypes = []any{
	(AccessAttempt_Grant)(0),            // 0: smartcore.traits.AccessAttempt.Grant
	(*AccessAttempt)(nil),               // 1: smartcore.traits.AccessAttempt
	(*GetLastAccessAttemptRequest)(nil), // 2: smartcore.traits.GetLastAccessAttemptRequest
	(*PullAccessAttemptsRequest)(nil),   // 3: smartcore.traits.PullAccessAttemptsRequest
	(*PullAccessAttemptsResponse)(nil),  // 4: smartcore.traits.PullAccessAttemptsResponse
	(*AccessAttempt_Actor)(nil),         // 5: smartcore.traits.AccessAttempt.Actor
	nil,                                 // 6: smartcore.traits.AccessAttempt.Actor.IdsEntry
	nil,                                 // 7: smartcore.traits.AccessAttempt.Actor.MoreEntry
	(*PullAccessAttemptsResponse_Change)(nil), // 8: smartcore.traits.PullAccessAttemptsResponse.Change
	(*timestamppb.Timestamp)(nil),             // 9: google.protobuf.Timestamp
	(*fieldmaskpb.FieldMask)(nil),             // 10: google.protobuf.FieldMask
	(*types.Image)(nil),                       // 11: smartcore.types.Image
}
var file_traits_access_proto_depIdxs = []int32{
	0,  // 0: smartcore.traits.AccessAttempt.grant:type_name -> smartcore.traits.AccessAttempt.Grant
	5,  // 1: smartcore.traits.AccessAttempt.actor:type_name -> smartcore.traits.AccessAttempt.Actor
	9,  // 2: smartcore.traits.AccessAttempt.access_attempt_time:type_name -> google.protobuf.Timestamp
	10, // 3: smartcore.traits.GetLastAccessAttemptRequest.read_mask:type_name -> google.protobuf.FieldMask
	10, // 4: smartcore.traits.PullAccessAttemptsRequest.read_mask:type_name -> google.protobuf.FieldMask
	8,  // 5: smartcore.traits.PullAccessAttemptsResponse.changes:type_name -> smartcore.traits.PullAccessAttemptsResponse.Change
	11, // 6: smartcore.traits.AccessAttempt.Actor.picture:type_name -> smartcore.types.Image
	9,  // 7: smartcore.traits.AccessAttempt.Actor.last_grant_time:type_name -> google.protobuf.Timestamp
	6,  // 8: smartcore.traits.AccessAttempt.Actor.ids:type_name -> smartcore.traits.AccessAttempt.Actor.IdsEntry
	7,  // 9: smartcore.traits.AccessAttempt.Actor.more:type_name -> smartcore.traits.AccessAttempt.Actor.MoreEntry
	9,  // 10: smartcore.traits.PullAccessAttemptsResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	1,  // 11: smartcore.traits.PullAccessAttemptsResponse.Change.access_attempt:type_name -> smartcore.traits.AccessAttempt
	2,  // 12: smartcore.traits.AccessApi.GetLastAccessAttempt:input_type -> smartcore.traits.GetLastAccessAttemptRequest
	3,  // 13: smartcore.traits.AccessApi.PullAccessAttempts:input_type -> smartcore.traits.PullAccessAttemptsRequest
	1,  // 14: smartcore.traits.AccessApi.GetLastAccessAttempt:output_type -> smartcore.traits.AccessAttempt
	4,  // 15: smartcore.traits.AccessApi.PullAccessAttempts:output_type -> smartcore.traits.PullAccessAttemptsResponse
	14, // [14:16] is the sub-list for method output_type
	12, // [12:14] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_traits_access_proto_init() }
func file_traits_access_proto_init() {
	if File_traits_access_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_access_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*AccessAttempt); i {
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
		file_traits_access_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*GetLastAccessAttemptRequest); i {
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
		file_traits_access_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*PullAccessAttemptsRequest); i {
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
		file_traits_access_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*PullAccessAttemptsResponse); i {
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
		file_traits_access_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*AccessAttempt_Actor); i {
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
		file_traits_access_proto_msgTypes[7].Exporter = func(v any, i int) any {
			switch v := v.(*PullAccessAttemptsResponse_Change); i {
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
			RawDescriptor: file_traits_access_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_traits_access_proto_goTypes,
		DependencyIndexes: file_traits_access_proto_depIdxs,
		EnumInfos:         file_traits_access_proto_enumTypes,
		MessageInfos:      file_traits_access_proto_msgTypes,
	}.Build()
	File_traits_access_proto = out.File
	file_traits_access_proto_rawDesc = nil
	file_traits_access_proto_goTypes = nil
	file_traits_access_proto_depIdxs = nil
}
