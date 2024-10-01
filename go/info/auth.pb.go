// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.28.2
// source: info/auth.proto

package info

import (
	types "github.com/smart-core-os/sc-api/go/types"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
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

// Represents an account which has access to this system
type Account struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The account identifier
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// A descriptive name for this account
	Title string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	// The current token for this account
	Token *Token `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	// The set of permissions granted to the token bearer
	Permissions []*Permission `protobuf:"bytes,4,rep,name=permissions,proto3" json:"permissions,omitempty"`
}

func (x *Account) Reset() {
	*x = Account{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Account) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Account) ProtoMessage() {}

func (x *Account) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Account.ProtoReflect.Descriptor instead.
func (*Account) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{0}
}

func (x *Account) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Account) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Account) GetToken() *Token {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *Account) GetPermissions() []*Permission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

// Represents a token that can be granted against an Account for
type Token struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The token ID string
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// A time the token expires
	ExpiresAt *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=expires_at,json=expiresAt,proto3" json:"expires_at,omitempty"`
}

func (x *Token) Reset() {
	*x = Token{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Token) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Token) ProtoMessage() {}

func (x *Token) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Token.ProtoReflect.Descriptor instead.
func (*Token) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{1}
}

func (x *Token) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Token) GetExpiresAt() *timestamppb.Timestamp {
	if x != nil {
		return x.ExpiresAt
	}
	return nil
}

// Describes a permission level for a particular device-trait
type Permission struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The fully qualified name of the device this permission represents, or '*' for all devices
	DeviceName string `protobuf:"bytes,1,opt,name=device_name,json=deviceName,proto3" json:"device_name,omitempty"`
	// The fully qualified name of the trait on the specified device this permission represents (in package.Service format), or '*' for all traits
	TraitName string `protobuf:"bytes,2,opt,name=trait_name,json=traitName,proto3" json:"trait_name,omitempty"`
	// Whether to allow read calls for this device-trait
	Read bool `protobuf:"varint,3,opt,name=read,proto3" json:"read,omitempty"`
	// Whether to allow write calls for this device-trait
	Write bool `protobuf:"varint,4,opt,name=write,proto3" json:"write,omitempty"`
	// Whether to allow observe calls (i.e. Pull requests) for this device-trait
	Observe bool `protobuf:"varint,5,opt,name=observe,proto3" json:"observe,omitempty"`
}

func (x *Permission) Reset() {
	*x = Permission{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Permission) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Permission) ProtoMessage() {}

func (x *Permission) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Permission.ProtoReflect.Descriptor instead.
func (*Permission) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{2}
}

func (x *Permission) GetDeviceName() string {
	if x != nil {
		return x.DeviceName
	}
	return ""
}

func (x *Permission) GetTraitName() string {
	if x != nil {
		return x.TraitName
	}
	return ""
}

func (x *Permission) GetRead() bool {
	if x != nil {
		return x.Read
	}
	return false
}

func (x *Permission) GetWrite() bool {
	if x != nil {
		return x.Write
	}
	return false
}

func (x *Permission) GetObserve() bool {
	if x != nil {
		return x.Observe
	}
	return false
}

type AddAccountRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string        `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Title       string        `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Permissions []*Permission `protobuf:"bytes,3,rep,name=permissions,proto3" json:"permissions,omitempty"`
}

func (x *AddAccountRequest) Reset() {
	*x = AddAccountRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddAccountRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddAccountRequest) ProtoMessage() {}

func (x *AddAccountRequest) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddAccountRequest.ProtoReflect.Descriptor instead.
func (*AddAccountRequest) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{3}
}

func (x *AddAccountRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AddAccountRequest) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *AddAccountRequest) GetPermissions() []*Permission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

type AddAccountResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Account *Account `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
}

func (x *AddAccountResponse) Reset() {
	*x = AddAccountResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddAccountResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddAccountResponse) ProtoMessage() {}

func (x *AddAccountResponse) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddAccountResponse.ProtoReflect.Descriptor instead.
func (*AddAccountResponse) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{4}
}

func (x *AddAccountResponse) GetAccount() *Account {
	if x != nil {
		return x.Account
	}
	return nil
}

type RemoveAccountRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *RemoveAccountRequest) Reset() {
	*x = RemoveAccountRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RemoveAccountRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RemoveAccountRequest) ProtoMessage() {}

func (x *RemoveAccountRequest) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RemoveAccountRequest.ProtoReflect.Descriptor instead.
func (*RemoveAccountRequest) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{5}
}

func (x *RemoveAccountRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type RemoveAccountResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *RemoveAccountResponse) Reset() {
	*x = RemoveAccountResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RemoveAccountResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RemoveAccountResponse) ProtoMessage() {}

func (x *RemoveAccountResponse) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RemoveAccountResponse.ProtoReflect.Descriptor instead.
func (*RemoveAccountResponse) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{6}
}

type UpdateAccountPermissionsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChangeType  types.ChangeType `protobuf:"varint,1,opt,name=change_type,json=changeType,proto3,enum=smartcore.types.ChangeType" json:"change_type,omitempty"`
	Permissions []*Permission    `protobuf:"bytes,2,rep,name=permissions,proto3" json:"permissions,omitempty"`
}

func (x *UpdateAccountPermissionsRequest) Reset() {
	*x = UpdateAccountPermissionsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateAccountPermissionsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateAccountPermissionsRequest) ProtoMessage() {}

func (x *UpdateAccountPermissionsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateAccountPermissionsRequest.ProtoReflect.Descriptor instead.
func (*UpdateAccountPermissionsRequest) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateAccountPermissionsRequest) GetChangeType() types.ChangeType {
	if x != nil {
		return x.ChangeType
	}
	return types.ChangeType(0)
}

func (x *UpdateAccountPermissionsRequest) GetPermissions() []*Permission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

type UpdateAccountPermissionsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *UpdateAccountPermissionsResponse) Reset() {
	*x = UpdateAccountPermissionsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateAccountPermissionsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateAccountPermissionsResponse) ProtoMessage() {}

func (x *UpdateAccountPermissionsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateAccountPermissionsResponse.ProtoReflect.Descriptor instead.
func (*UpdateAccountPermissionsResponse) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{8}
}

type GenerateTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccountName string `protobuf:"bytes,1,opt,name=account_name,json=accountName,proto3" json:"account_name,omitempty"`
}

func (x *GenerateTokenRequest) Reset() {
	*x = GenerateTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GenerateTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GenerateTokenRequest) ProtoMessage() {}

func (x *GenerateTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GenerateTokenRequest.ProtoReflect.Descriptor instead.
func (*GenerateTokenRequest) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{9}
}

func (x *GenerateTokenRequest) GetAccountName() string {
	if x != nil {
		return x.AccountName
	}
	return ""
}

type GenerateTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token *Token `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *GenerateTokenResponse) Reset() {
	*x = GenerateTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_info_auth_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GenerateTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GenerateTokenResponse) ProtoMessage() {}

func (x *GenerateTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_info_auth_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GenerateTokenResponse.ProtoReflect.Descriptor instead.
func (*GenerateTokenResponse) Descriptor() ([]byte, []int) {
	return file_info_auth_proto_rawDescGZIP(), []int{10}
}

func (x *GenerateTokenResponse) GetToken() *Token {
	if x != nil {
		return x.Token
	}
	return nil
}

var File_info_auth_proto protoreflect.FileDescriptor

var file_info_auth_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x69, 0x6e, 0x66, 0x6f, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66,
	0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x12, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9e, 0x01, 0x0a, 0x07, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x2b, 0x0a, 0x05,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x3c, 0x0a, 0x0b, 0x70, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e,
	0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d,
	0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x52, 0x0a, 0x05, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x39, 0x0a, 0x0a, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x5f, 0x61, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x09, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x41, 0x74, 0x22, 0x90, 0x01, 0x0a, 0x0a,
	0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x64, 0x65,
	0x76, 0x69, 0x63, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x74,
	0x72, 0x61, 0x69, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x74, 0x72, 0x61, 0x69, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x65,
	0x61, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x04, 0x72, 0x65, 0x61, 0x64, 0x12, 0x14,
	0x0a, 0x05, 0x77, 0x72, 0x69, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x77,
	0x72, 0x69, 0x74, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6f, 0x62, 0x73, 0x65, 0x72, 0x76, 0x65, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x6f, 0x62, 0x73, 0x65, 0x72, 0x76, 0x65, 0x22, 0x7b,
	0x0a, 0x11, 0x41, 0x64, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x3c, 0x0a,
	0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69,
	0x6e, 0x66, 0x6f, 0x2e, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b,
	0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x47, 0x0a, 0x12, 0x41,
	0x64, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x31, 0x0a, 0x07, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69,
	0x6e, 0x66, 0x6f, 0x2e, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x07, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x22, 0x2a, 0x0a, 0x14, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x22, 0x17, 0x0a, 0x15, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x9d, 0x01, 0x0a, 0x1f, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a,
	0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x3c, 0x0a, 0x0b, 0x70,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66,
	0x6f, 0x2e, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x70, 0x65,
	0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x22, 0x0a, 0x20, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x39, 0x0a,
	0x14, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0x44, 0x0a, 0x15, 0x47, 0x65, 0x6e, 0x65,
	0x72, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x2b, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x15, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66,
	0x6f, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x32, 0x9e,
	0x03, 0x0a, 0x0c, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x12,
	0x53, 0x0a, 0x0a, 0x41, 0x64, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x21, 0x2e,
	0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x41,
	0x64, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x22, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66,
	0x6f, 0x2e, 0x41, 0x64, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5c, 0x0a, 0x0d, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x73, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x52, 0x65, 0x6d,
	0x6f, 0x76, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x7d, 0x0a, 0x18, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x2f,
	0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x50, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x30, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f,
	0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x50, 0x65,
	0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x5c, 0x0a, 0x0d, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x12, 0x24, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69,
	0x6e, 0x66, 0x6f, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42,
	0x6c, 0x0a, 0x12, 0x64, 0x65, 0x76, 0x2e, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65,
	0x2e, 0x69, 0x6e, 0x66, 0x6f, 0x42, 0x09, 0x41, 0x75, 0x74, 0x68, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d,
	0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x69, 0x6e, 0x66, 0x6f, 0xaa, 0x02, 0x0e, 0x53, 0x6d,
	0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x49, 0x6e, 0x66, 0x6f, 0xca, 0x02, 0x0e, 0x53,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x5c, 0x49, 0x6e, 0x66, 0x6f, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_info_auth_proto_rawDescOnce sync.Once
	file_info_auth_proto_rawDescData = file_info_auth_proto_rawDesc
)

func file_info_auth_proto_rawDescGZIP() []byte {
	file_info_auth_proto_rawDescOnce.Do(func() {
		file_info_auth_proto_rawDescData = protoimpl.X.CompressGZIP(file_info_auth_proto_rawDescData)
	})
	return file_info_auth_proto_rawDescData
}

var file_info_auth_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_info_auth_proto_goTypes = []any{
	(*Account)(nil),                          // 0: smartcore.info.Account
	(*Token)(nil),                            // 1: smartcore.info.Token
	(*Permission)(nil),                       // 2: smartcore.info.Permission
	(*AddAccountRequest)(nil),                // 3: smartcore.info.AddAccountRequest
	(*AddAccountResponse)(nil),               // 4: smartcore.info.AddAccountResponse
	(*RemoveAccountRequest)(nil),             // 5: smartcore.info.RemoveAccountRequest
	(*RemoveAccountResponse)(nil),            // 6: smartcore.info.RemoveAccountResponse
	(*UpdateAccountPermissionsRequest)(nil),  // 7: smartcore.info.UpdateAccountPermissionsRequest
	(*UpdateAccountPermissionsResponse)(nil), // 8: smartcore.info.UpdateAccountPermissionsResponse
	(*GenerateTokenRequest)(nil),             // 9: smartcore.info.GenerateTokenRequest
	(*GenerateTokenResponse)(nil),            // 10: smartcore.info.GenerateTokenResponse
	(*timestamppb.Timestamp)(nil),            // 11: google.protobuf.Timestamp
	(types.ChangeType)(0),                    // 12: smartcore.types.ChangeType
}
var file_info_auth_proto_depIdxs = []int32{
	1,  // 0: smartcore.info.Account.token:type_name -> smartcore.info.Token
	2,  // 1: smartcore.info.Account.permissions:type_name -> smartcore.info.Permission
	11, // 2: smartcore.info.Token.expires_at:type_name -> google.protobuf.Timestamp
	2,  // 3: smartcore.info.AddAccountRequest.permissions:type_name -> smartcore.info.Permission
	0,  // 4: smartcore.info.AddAccountResponse.account:type_name -> smartcore.info.Account
	12, // 5: smartcore.info.UpdateAccountPermissionsRequest.change_type:type_name -> smartcore.types.ChangeType
	2,  // 6: smartcore.info.UpdateAccountPermissionsRequest.permissions:type_name -> smartcore.info.Permission
	1,  // 7: smartcore.info.GenerateTokenResponse.token:type_name -> smartcore.info.Token
	3,  // 8: smartcore.info.AuthProvider.AddAccount:input_type -> smartcore.info.AddAccountRequest
	5,  // 9: smartcore.info.AuthProvider.RemoveAccount:input_type -> smartcore.info.RemoveAccountRequest
	7,  // 10: smartcore.info.AuthProvider.UpdateAccountPermissions:input_type -> smartcore.info.UpdateAccountPermissionsRequest
	9,  // 11: smartcore.info.AuthProvider.GenerateToken:input_type -> smartcore.info.GenerateTokenRequest
	4,  // 12: smartcore.info.AuthProvider.AddAccount:output_type -> smartcore.info.AddAccountResponse
	6,  // 13: smartcore.info.AuthProvider.RemoveAccount:output_type -> smartcore.info.RemoveAccountResponse
	8,  // 14: smartcore.info.AuthProvider.UpdateAccountPermissions:output_type -> smartcore.info.UpdateAccountPermissionsResponse
	10, // 15: smartcore.info.AuthProvider.GenerateToken:output_type -> smartcore.info.GenerateTokenResponse
	12, // [12:16] is the sub-list for method output_type
	8,  // [8:12] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_info_auth_proto_init() }
func file_info_auth_proto_init() {
	if File_info_auth_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_info_auth_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Account); i {
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
		file_info_auth_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*Token); i {
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
		file_info_auth_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*Permission); i {
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
		file_info_auth_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*AddAccountRequest); i {
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
		file_info_auth_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*AddAccountResponse); i {
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
		file_info_auth_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*RemoveAccountRequest); i {
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
		file_info_auth_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*RemoveAccountResponse); i {
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
		file_info_auth_proto_msgTypes[7].Exporter = func(v any, i int) any {
			switch v := v.(*UpdateAccountPermissionsRequest); i {
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
		file_info_auth_proto_msgTypes[8].Exporter = func(v any, i int) any {
			switch v := v.(*UpdateAccountPermissionsResponse); i {
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
		file_info_auth_proto_msgTypes[9].Exporter = func(v any, i int) any {
			switch v := v.(*GenerateTokenRequest); i {
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
		file_info_auth_proto_msgTypes[10].Exporter = func(v any, i int) any {
			switch v := v.(*GenerateTokenResponse); i {
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
			RawDescriptor: file_info_auth_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_info_auth_proto_goTypes,
		DependencyIndexes: file_info_auth_proto_depIdxs,
		MessageInfos:      file_info_auth_proto_msgTypes,
	}.Build()
	File_info_auth_proto = out.File
	file_info_auth_proto_rawDesc = nil
	file_info_auth_proto_goTypes = nil
	file_info_auth_proto_depIdxs = nil
}
