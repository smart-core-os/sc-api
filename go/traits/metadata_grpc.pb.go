// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: traits/metadata.proto

package traits

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MetadataApiClient is the client API for MetadataApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MetadataApiClient interface {
	// GetMetadata returns information associated with the given name.
	GetMetadata(ctx context.Context, in *GetMetadataRequest, opts ...grpc.CallOption) (*Metadata, error)
	// PullMetadata subscribes to changes in the information associated with the named device.
	PullMetadata(ctx context.Context, in *PullMetadataRequest, opts ...grpc.CallOption) (MetadataApi_PullMetadataClient, error)
}

type metadataApiClient struct {
	cc grpc.ClientConnInterface
}

func NewMetadataApiClient(cc grpc.ClientConnInterface) MetadataApiClient {
	return &metadataApiClient{cc}
}

func (c *metadataApiClient) GetMetadata(ctx context.Context, in *GetMetadataRequest, opts ...grpc.CallOption) (*Metadata, error) {
	out := new(Metadata)
	err := c.cc.Invoke(ctx, "/smartcore.traits.MetadataApi/GetMetadata", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataApiClient) PullMetadata(ctx context.Context, in *PullMetadataRequest, opts ...grpc.CallOption) (MetadataApi_PullMetadataClient, error) {
	stream, err := c.cc.NewStream(ctx, &MetadataApi_ServiceDesc.Streams[0], "/smartcore.traits.MetadataApi/PullMetadata", opts...)
	if err != nil {
		return nil, err
	}
	x := &metadataApiPullMetadataClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MetadataApi_PullMetadataClient interface {
	Recv() (*PullMetadataResponse, error)
	grpc.ClientStream
}

type metadataApiPullMetadataClient struct {
	grpc.ClientStream
}

func (x *metadataApiPullMetadataClient) Recv() (*PullMetadataResponse, error) {
	m := new(PullMetadataResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MetadataApiServer is the server API for MetadataApi service.
// All implementations must embed UnimplementedMetadataApiServer
// for forward compatibility
type MetadataApiServer interface {
	// GetMetadata returns information associated with the given name.
	GetMetadata(context.Context, *GetMetadataRequest) (*Metadata, error)
	// PullMetadata subscribes to changes in the information associated with the named device.
	PullMetadata(*PullMetadataRequest, MetadataApi_PullMetadataServer) error
	mustEmbedUnimplementedMetadataApiServer()
}

// UnimplementedMetadataApiServer must be embedded to have forward compatible implementations.
type UnimplementedMetadataApiServer struct {
}

func (UnimplementedMetadataApiServer) GetMetadata(context.Context, *GetMetadataRequest) (*Metadata, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMetadata not implemented")
}
func (UnimplementedMetadataApiServer) PullMetadata(*PullMetadataRequest, MetadataApi_PullMetadataServer) error {
	return status.Errorf(codes.Unimplemented, "method PullMetadata not implemented")
}
func (UnimplementedMetadataApiServer) mustEmbedUnimplementedMetadataApiServer() {}

// UnsafeMetadataApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetadataApiServer will
// result in compilation errors.
type UnsafeMetadataApiServer interface {
	mustEmbedUnimplementedMetadataApiServer()
}

func RegisterMetadataApiServer(s grpc.ServiceRegistrar, srv MetadataApiServer) {
	s.RegisterService(&MetadataApi_ServiceDesc, srv)
}

func _MetadataApi_GetMetadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataApiServer).GetMetadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.MetadataApi/GetMetadata",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataApiServer).GetMetadata(ctx, req.(*GetMetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataApi_PullMetadata_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullMetadataRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MetadataApiServer).PullMetadata(m, &metadataApiPullMetadataServer{stream})
}

type MetadataApi_PullMetadataServer interface {
	Send(*PullMetadataResponse) error
	grpc.ServerStream
}

type metadataApiPullMetadataServer struct {
	grpc.ServerStream
}

func (x *metadataApiPullMetadataServer) Send(m *PullMetadataResponse) error {
	return x.ServerStream.SendMsg(m)
}

// MetadataApi_ServiceDesc is the grpc.ServiceDesc for MetadataApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MetadataApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MetadataApi",
	HandlerType: (*MetadataApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMetadata",
			Handler:    _MetadataApi_GetMetadata_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullMetadata",
			Handler:       _MetadataApi_PullMetadata_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/metadata.proto",
}

// MetadataInfoClient is the client API for MetadataInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MetadataInfoClient interface {
}

type metadataInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewMetadataInfoClient(cc grpc.ClientConnInterface) MetadataInfoClient {
	return &metadataInfoClient{cc}
}

// MetadataInfoServer is the server API for MetadataInfo service.
// All implementations must embed UnimplementedMetadataInfoServer
// for forward compatibility
type MetadataInfoServer interface {
	mustEmbedUnimplementedMetadataInfoServer()
}

// UnimplementedMetadataInfoServer must be embedded to have forward compatible implementations.
type UnimplementedMetadataInfoServer struct {
}

func (UnimplementedMetadataInfoServer) mustEmbedUnimplementedMetadataInfoServer() {}

// UnsafeMetadataInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetadataInfoServer will
// result in compilation errors.
type UnsafeMetadataInfoServer interface {
	mustEmbedUnimplementedMetadataInfoServer()
}

func RegisterMetadataInfoServer(s grpc.ServiceRegistrar, srv MetadataInfoServer) {
	s.RegisterService(&MetadataInfo_ServiceDesc, srv)
}

// MetadataInfo_ServiceDesc is the grpc.ServiceDesc for MetadataInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MetadataInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MetadataInfo",
	HandlerType: (*MetadataInfoServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "traits/metadata.proto",
}
