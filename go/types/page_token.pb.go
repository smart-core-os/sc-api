// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.1
// source: types/page_token.proto

package types

import (
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

// Represents a specialist token used for fetching subsequent pages of a List request. Typically encoded as base64 or
// something similar.
//
// @see https://cloud.google.com/apis/design/design_patterns#list_pagination
type PageToken struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// there can be only one indicator of the start of the next page
	//
	// Types that are assignable to PageStart:
	//	*PageToken_LastOffset
	//	*PageToken_LastResourceName
	PageStart isPageToken_PageStart `protobuf_oneof:"page_start"`
}

func (x *PageToken) Reset() {
	*x = PageToken{}
	if protoimpl.UnsafeEnabled {
		mi := &file_types_page_token_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PageToken) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PageToken) ProtoMessage() {}

func (x *PageToken) ProtoReflect() protoreflect.Message {
	mi := &file_types_page_token_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PageToken.ProtoReflect.Descriptor instead.
func (*PageToken) Descriptor() ([]byte, []int) {
	return file_types_page_token_proto_rawDescGZIP(), []int{0}
}

func (m *PageToken) GetPageStart() isPageToken_PageStart {
	if m != nil {
		return m.PageStart
	}
	return nil
}

func (x *PageToken) GetLastOffset() int32 {
	if x, ok := x.GetPageStart().(*PageToken_LastOffset); ok {
		return x.LastOffset
	}
	return 0
}

func (x *PageToken) GetLastResourceName() string {
	if x, ok := x.GetPageStart().(*PageToken_LastResourceName); ok {
		return x.LastResourceName
	}
	return ""
}

type isPageToken_PageStart interface {
	isPageToken_PageStart()
}

type PageToken_LastOffset struct {
	// The offset representing the tail resource returned in the last page
	LastOffset int32 `protobuf:"varint,1,opt,name=last_offset,json=lastOffset,proto3,oneof"`
}

type PageToken_LastResourceName struct {
	// The name of the tail resource returned in the last page response
	LastResourceName string `protobuf:"bytes,2,opt,name=last_resource_name,json=lastResourceName,proto3,oneof"`
}

func (*PageToken_LastOffset) isPageToken_PageStart() {}

func (*PageToken_LastResourceName) isPageToken_PageStart() {}

var File_types_page_token_proto protoreflect.FileDescriptor

var file_types_page_token_proto_rawDesc = []byte{
	0x0a, 0x16, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73, 0x6d, 0x61, 0x72, 0x74, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x22, 0x6c, 0x0a, 0x09, 0x50, 0x61, 0x67,
	0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x21, 0x0a, 0x0b, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x6f,
	0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x0a, 0x6c,
	0x61, 0x73, 0x74, 0x4f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x2e, 0x0a, 0x12, 0x6c, 0x61, 0x73,
	0x74, 0x5f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x10, 0x6c, 0x61, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x42, 0x0c, 0x0a, 0x0a, 0x70, 0x61, 0x67,
	0x65, 0x5f, 0x73, 0x74, 0x61, 0x72, 0x74, 0x42, 0x63, 0x0a, 0x13, 0x64, 0x65, 0x76, 0x2e, 0x73,
	0x6d, 0x61, 0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x42, 0x0e,
	0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6d, 0x61,
	0x72, 0x74, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2d, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x2d, 0x61, 0x70,
	0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0xaa, 0x02, 0x0f, 0x53, 0x6d, 0x61,
	0x72, 0x74, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_types_page_token_proto_rawDescOnce sync.Once
	file_types_page_token_proto_rawDescData = file_types_page_token_proto_rawDesc
)

func file_types_page_token_proto_rawDescGZIP() []byte {
	file_types_page_token_proto_rawDescOnce.Do(func() {
		file_types_page_token_proto_rawDescData = protoimpl.X.CompressGZIP(file_types_page_token_proto_rawDescData)
	})
	return file_types_page_token_proto_rawDescData
}

var file_types_page_token_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_types_page_token_proto_goTypes = []interface{}{
	(*PageToken)(nil), // 0: smartcore.types.PageToken
}
var file_types_page_token_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_types_page_token_proto_init() }
func file_types_page_token_proto_init() {
	if File_types_page_token_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_types_page_token_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PageToken); i {
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
	file_types_page_token_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*PageToken_LastOffset)(nil),
		(*PageToken_LastResourceName)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_types_page_token_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_types_page_token_proto_goTypes,
		DependencyIndexes: file_types_page_token_proto_depIdxs,
		MessageInfos:      file_types_page_token_proto_msgTypes,
	}.Build()
	File_types_page_token_proto = out.File
	file_types_page_token_proto_rawDesc = nil
	file_types_page_token_proto_goTypes = nil
	file_types_page_token_proto_depIdxs = nil
}
