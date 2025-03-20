// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.29.3
// source: traits/parent.proto

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

// Child is a member of a parent.
type Child struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name is the Smart Core name for this child device.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Traits lists the traits this child implements.
	Traits []*Trait `protobuf:"bytes,2,rep,name=traits,proto3" json:"traits,omitempty"`
	// Parent is the name of this child's direct parent.
	// If absent this is the name of the device in the children request.
	Parent string `protobuf:"bytes,3,opt,name=parent,proto3" json:"parent,omitempty"`
}

func (x *Child) Reset() {
	*x = Child{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Child) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Child) ProtoMessage() {}

func (x *Child) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Child.ProtoReflect.Descriptor instead.
func (*Child) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{0}
}

func (x *Child) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Child) GetTraits() []*Trait {
	if x != nil {
		return x.Traits
	}
	return nil
}

func (x *Child) GetParent() string {
	if x != nil {
		return x.Parent
	}
	return ""
}

type Trait struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The qualified name of the trait.
	// For example smartcore.traits.Parent
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Trait) Reset() {
	*x = Trait{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Trait) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Trait) ProtoMessage() {}

func (x *Trait) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Trait.ProtoReflect.Descriptor instead.
func (*Trait) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{1}
}

func (x *Trait) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ListChildrenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the device to fetch the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Fields to fetch relative to the ElectricMode type
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// The maximum number of children to return.
	// The service may return fewer than this value.
	// If unspecified, at most 50 items will be returned.
	// The maximum value is 1000; values above 1000 will be coerced to 1000.
	PageSize int32 `protobuf:"varint,3,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	// A page token, received from a previous `ListChildrenResponse` call.
	// Provide this to retrieve the subsequent page.
	PageToken string `protobuf:"bytes,4,opt,name=page_token,json=pageToken,proto3" json:"page_token,omitempty"`
}

func (x *ListChildrenRequest) Reset() {
	*x = ListChildrenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListChildrenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListChildrenRequest) ProtoMessage() {}

func (x *ListChildrenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListChildrenRequest.ProtoReflect.Descriptor instead.
func (*ListChildrenRequest) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{2}
}

func (x *ListChildrenRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ListChildrenRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *ListChildrenRequest) GetPageSize() int32 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *ListChildrenRequest) GetPageToken() string {
	if x != nil {
		return x.PageToken
	}
	return ""
}

type ListChildrenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Children []*Child `protobuf:"bytes,1,rep,name=children,proto3" json:"children,omitempty"`
	// A token, which can be sent as `page_token` to retrieve the next page.
	// If this field is omitted, there are no subsequent pages.
	NextPageToken string `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
	// If non-zero this is the total number of draw notifications.
	// This may be an estimate.
	TotalSize int32 `protobuf:"varint,3,opt,name=total_size,json=totalSize,proto3" json:"total_size,omitempty"`
}

func (x *ListChildrenResponse) Reset() {
	*x = ListChildrenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListChildrenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListChildrenResponse) ProtoMessage() {}

func (x *ListChildrenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListChildrenResponse.ProtoReflect.Descriptor instead.
func (*ListChildrenResponse) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{3}
}

func (x *ListChildrenResponse) GetChildren() []*Child {
	if x != nil {
		return x.Children
	}
	return nil
}

func (x *ListChildrenResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

func (x *ListChildrenResponse) GetTotalSize() int32 {
	if x != nil {
		return x.TotalSize
	}
	return 0
}

type PullChildrenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the device to fetch the state for
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Fields to fetch relative to the ElectricMode type
	ReadMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=read_mask,json=readMask,proto3" json:"read_mask,omitempty"`
	// When true the device will only send changes to the resource value.
	// The default behaviour is to send the current value immediately followed by any updates as they happen.
	UpdatesOnly bool `protobuf:"varint,3,opt,name=updates_only,json=updatesOnly,proto3" json:"updates_only,omitempty"`
}

func (x *PullChildrenRequest) Reset() {
	*x = PullChildrenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullChildrenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullChildrenRequest) ProtoMessage() {}

func (x *PullChildrenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullChildrenRequest.ProtoReflect.Descriptor instead.
func (*PullChildrenRequest) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{4}
}

func (x *PullChildrenRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullChildrenRequest) GetReadMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.ReadMask
	}
	return nil
}

func (x *PullChildrenRequest) GetUpdatesOnly() bool {
	if x != nil {
		return x.UpdatesOnly
	}
	return false
}

type PullChildrenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The list of changes which have occurred
	Changes []*PullChildrenResponse_Change `protobuf:"bytes,1,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *PullChildrenResponse) Reset() {
	*x = PullChildrenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullChildrenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullChildrenResponse) ProtoMessage() {}

func (x *PullChildrenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullChildrenResponse.ProtoReflect.Descriptor instead.
func (*PullChildrenResponse) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{5}
}

func (x *PullChildrenResponse) GetChanges() []*PullChildrenResponse_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type PullChildrenResponse_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the device that emitted this change
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The type of change (e.g. ADD, UPDATE, etc...)
	Type types.ChangeType `protobuf:"varint,2,opt,name=type,proto3,enum=smartcore.types.ChangeType" json:"type,omitempty"`
	// The new value to use for ADD|UPDATE changes
	NewValue *Child `protobuf:"bytes,3,opt,name=new_value,json=newValue,proto3" json:"new_value,omitempty"`
	// The old value to use for UPDATE|REMOVE changes
	OldValue *Child `protobuf:"bytes,4,opt,name=old_value,json=oldValue,proto3" json:"old_value,omitempty"`
	// When the change occurred
	ChangeTime *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=change_time,json=changeTime,proto3" json:"change_time,omitempty"`
}

func (x *PullChildrenResponse_Change) Reset() {
	*x = PullChildrenResponse_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_traits_parent_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PullChildrenResponse_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PullChildrenResponse_Change) ProtoMessage() {}

func (x *PullChildrenResponse_Change) ProtoReflect() protoreflect.Message {
	mi := &file_traits_parent_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PullChildrenResponse_Change.ProtoReflect.Descriptor instead.
func (*PullChildrenResponse_Change) Descriptor() ([]byte, []int) {
	return file_traits_parent_proto_rawDescGZIP(), []int{5, 0}
}

func (x *PullChildrenResponse_Change) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PullChildrenResponse_Change) GetType() types.ChangeType {
	if x != nil {
		return x.Type
	}
	return types.ChangeType(0)
}

func (x *PullChildrenResponse_Change) GetNewValue() *Child {
	if x != nil {
		return x.NewValue
	}
	return nil
}

func (x *PullChildrenResponse_Change) GetOldValue() *Child {
	if x != nil {
		return x.OldValue
	}
	return nil
}

func (x *PullChildrenResponse_Change) GetChangeTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ChangeTime
	}
	return nil
}

var File_traits_parent_proto protoreflect.FileDescriptor

var file_traits_parent_proto_rawDesc = []byte{
	0x0a, 0x13, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2f, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d,
	0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x64,
	0x0a, 0x05, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2f, 0x0a, 0x06, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x54,
	0x72, 0x61, 0x69, 0x74, 0x52, 0x06, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x12, 0x16, 0x0a, 0x06,
	0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x70, 0x61,
	0x72, 0x65, 0x6e, 0x74, 0x22, 0x1b, 0x0a, 0x05, 0x54, 0x72, 0x61, 0x69, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0x9e, 0x01, 0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x72,
	0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a,
	0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x08, 0x72, 0x65,
	0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73,
	0x69, 0x7a, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x53,
	0x69, 0x7a, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x22, 0x92, 0x01, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x69, 0x6c, 0x64,
	0x72, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a, 0x08, 0x63,
	0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73,
	0x2e, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x52, 0x08, 0x63, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e,
	0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74, 0x50,
	0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x74, 0x6f, 0x74, 0x61,
	0x6c, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x53, 0x69, 0x7a, 0x65, 0x22, 0x85, 0x01, 0x0a, 0x13, 0x50, 0x75, 0x6c, 0x6c,
	0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x09, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61,
	0x73, 0x6b, 0x52, 0x08, 0x72, 0x65, 0x61, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x12, 0x21, 0x0a, 0x0c,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x5f, 0x6f, 0x6e, 0x6c, 0x79, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x73, 0x4f, 0x6e, 0x6c, 0x79, 0x22,
	0xd8, 0x02, 0x0a, 0x14, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x47, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x73, 0x6d, 0x61, 0x72,
	0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c,
	0x6c, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x73, 0x1a, 0xf6, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x2f, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x65, 0x77, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x52, 0x08, 0x6e,
	0x65, 0x77, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6f, 0x6c, 0x64, 0x5f, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x43, 0x68,
	0x69, 0x6c, 0x64, 0x52, 0x08, 0x6f, 0x6c, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x3b, 0x0a,
	0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a,
	0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x32, 0xcb, 0x01, 0x0a, 0x09, 0x50,
	0x61, 0x72, 0x65, 0x6e, 0x74, 0x41, 0x70, 0x69, 0x12, 0x5d, 0x0a, 0x0c, 0x4c, 0x69, 0x73, 0x74,
	0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x12, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74,
	0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x26, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69,
	0x74, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5f, 0x0a, 0x0c, 0x50, 0x75, 0x6c, 0x6c, 0x43,
	0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x12, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x43,
	0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74,
	0x73, 0x2e, 0x50, 0x75, 0x6c, 0x6c, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x72, 0x65, 0x6e, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x32, 0x0c, 0x0a, 0x0a, 0x50, 0x61, 0x72, 0x65,
	0x6e, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x42, 0x76, 0x0a, 0x14, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0x42, 0x0b,
	0x50, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x29, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d,
	0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x67,
	0x6f, 0x2f, 0x74, 0x72, 0x61, 0x69, 0x74, 0x73, 0xaa, 0x02, 0x10, 0x53, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0xca, 0x02, 0x10, 0x53, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x54, 0x72, 0x61, 0x69, 0x74, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_traits_parent_proto_rawDescOnce sync.Once
	file_traits_parent_proto_rawDescData = file_traits_parent_proto_rawDesc
)

func file_traits_parent_proto_rawDescGZIP() []byte {
	file_traits_parent_proto_rawDescOnce.Do(func() {
		file_traits_parent_proto_rawDescData = protoimpl.X.CompressGZIP(file_traits_parent_proto_rawDescData)
	})
	return file_traits_parent_proto_rawDescData
}

var file_traits_parent_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_traits_parent_proto_goTypes = []any{
	(*Child)(nil),                       // 0: smartcore.traits.Child
	(*Trait)(nil),                       // 1: smartcore.traits.Trait
	(*ListChildrenRequest)(nil),         // 2: smartcore.traits.ListChildrenRequest
	(*ListChildrenResponse)(nil),        // 3: smartcore.traits.ListChildrenResponse
	(*PullChildrenRequest)(nil),         // 4: smartcore.traits.PullChildrenRequest
	(*PullChildrenResponse)(nil),        // 5: smartcore.traits.PullChildrenResponse
	(*PullChildrenResponse_Change)(nil), // 6: smartcore.traits.PullChildrenResponse.Change
	(*fieldmaskpb.FieldMask)(nil),       // 7: google.protobuf.FieldMask
	(types.ChangeType)(0),               // 8: smartcore.types.ChangeType
	(*timestamppb.Timestamp)(nil),       // 9: google.protobuf.Timestamp
}
var file_traits_parent_proto_depIdxs = []int32{
	1,  // 0: smartcore.traits.Child.traits:type_name -> smartcore.traits.Trait
	7,  // 1: smartcore.traits.ListChildrenRequest.read_mask:type_name -> google.protobuf.FieldMask
	0,  // 2: smartcore.traits.ListChildrenResponse.children:type_name -> smartcore.traits.Child
	7,  // 3: smartcore.traits.PullChildrenRequest.read_mask:type_name -> google.protobuf.FieldMask
	6,  // 4: smartcore.traits.PullChildrenResponse.changes:type_name -> smartcore.traits.PullChildrenResponse.Change
	8,  // 5: smartcore.traits.PullChildrenResponse.Change.type:type_name -> smartcore.types.ChangeType
	0,  // 6: smartcore.traits.PullChildrenResponse.Change.new_value:type_name -> smartcore.traits.Child
	0,  // 7: smartcore.traits.PullChildrenResponse.Change.old_value:type_name -> smartcore.traits.Child
	9,  // 8: smartcore.traits.PullChildrenResponse.Change.change_time:type_name -> google.protobuf.Timestamp
	2,  // 9: smartcore.traits.ParentApi.ListChildren:input_type -> smartcore.traits.ListChildrenRequest
	4,  // 10: smartcore.traits.ParentApi.PullChildren:input_type -> smartcore.traits.PullChildrenRequest
	3,  // 11: smartcore.traits.ParentApi.ListChildren:output_type -> smartcore.traits.ListChildrenResponse
	5,  // 12: smartcore.traits.ParentApi.PullChildren:output_type -> smartcore.traits.PullChildrenResponse
	11, // [11:13] is the sub-list for method output_type
	9,  // [9:11] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_traits_parent_proto_init() }
func file_traits_parent_proto_init() {
	if File_traits_parent_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_traits_parent_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Child); i {
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
		file_traits_parent_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*Trait); i {
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
		file_traits_parent_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*ListChildrenRequest); i {
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
		file_traits_parent_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*ListChildrenResponse); i {
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
		file_traits_parent_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*PullChildrenRequest); i {
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
		file_traits_parent_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*PullChildrenResponse); i {
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
		file_traits_parent_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*PullChildrenResponse_Change); i {
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
			RawDescriptor: file_traits_parent_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_traits_parent_proto_goTypes,
		DependencyIndexes: file_traits_parent_proto_depIdxs,
		MessageInfos:      file_traits_parent_proto_msgTypes,
	}.Build()
	File_traits_parent_proto = out.File
	file_traits_parent_proto_rawDesc = nil
	file_traits_parent_proto_goTypes = nil
	file_traits_parent_proto_depIdxs = nil
}
