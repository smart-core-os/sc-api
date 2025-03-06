// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.1
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
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	MetadataApi_GetMetadata_FullMethodName  = "/smartcore.traits.MetadataApi/GetMetadata"
	MetadataApi_PullMetadata_FullMethodName = "/smartcore.traits.MetadataApi/PullMetadata"
)

// MetadataApiClient is the client API for MetadataApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// MetadataApi describes information about a named device.
type MetadataApiClient interface {
	// GetMetadata returns information associated with the given name.
	GetMetadata(ctx context.Context, in *GetMetadataRequest, opts ...grpc.CallOption) (*Metadata, error)
	// PullMetadata subscribes to changes in the information associated with the named device.
	PullMetadata(ctx context.Context, in *PullMetadataRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullMetadataResponse], error)
}

type metadataApiClient struct {
	cc grpc.ClientConnInterface
}

func NewMetadataApiClient(cc grpc.ClientConnInterface) MetadataApiClient {
	return &metadataApiClient{cc}
}

func (c *metadataApiClient) GetMetadata(ctx context.Context, in *GetMetadataRequest, opts ...grpc.CallOption) (*Metadata, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Metadata)
	err := c.cc.Invoke(ctx, MetadataApi_GetMetadata_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataApiClient) PullMetadata(ctx context.Context, in *PullMetadataRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullMetadataResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &MetadataApi_ServiceDesc.Streams[0], MetadataApi_PullMetadata_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PullMetadataRequest, PullMetadataResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type MetadataApi_PullMetadataClient = grpc.ServerStreamingClient[PullMetadataResponse]

// MetadataApiServer is the server API for MetadataApi service.
// All implementations must embed UnimplementedMetadataApiServer
// for forward compatibility.
//
// MetadataApi describes information about a named device.
type MetadataApiServer interface {
	// GetMetadata returns information associated with the given name.
	GetMetadata(context.Context, *GetMetadataRequest) (*Metadata, error)
	// PullMetadata subscribes to changes in the information associated with the named device.
	PullMetadata(*PullMetadataRequest, grpc.ServerStreamingServer[PullMetadataResponse]) error
	mustEmbedUnimplementedMetadataApiServer()
}

// UnimplementedMetadataApiServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedMetadataApiServer struct{}

func (UnimplementedMetadataApiServer) GetMetadata(context.Context, *GetMetadataRequest) (*Metadata, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMetadata not implemented")
}
func (UnimplementedMetadataApiServer) PullMetadata(*PullMetadataRequest, grpc.ServerStreamingServer[PullMetadataResponse]) error {
	return status.Errorf(codes.Unimplemented, "method PullMetadata not implemented")
}
func (UnimplementedMetadataApiServer) mustEmbedUnimplementedMetadataApiServer() {}
func (UnimplementedMetadataApiServer) testEmbeddedByValue()                     {}

// UnsafeMetadataApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetadataApiServer will
// result in compilation errors.
type UnsafeMetadataApiServer interface {
	mustEmbedUnimplementedMetadataApiServer()
}

func RegisterMetadataApiServer(s grpc.ServiceRegistrar, srv MetadataApiServer) {
	// If the following call pancis, it indicates UnimplementedMetadataApiServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
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
		FullMethod: MetadataApi_GetMetadata_FullMethodName,
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
	return srv.(MetadataApiServer).PullMetadata(m, &grpc.GenericServerStream[PullMetadataRequest, PullMetadataResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type MetadataApi_PullMetadataServer = grpc.ServerStreamingServer[PullMetadataResponse]

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
// for forward compatibility.
type MetadataInfoServer interface {
	mustEmbedUnimplementedMetadataInfoServer()
}

// UnimplementedMetadataInfoServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedMetadataInfoServer struct{}

func (UnimplementedMetadataInfoServer) mustEmbedUnimplementedMetadataInfoServer() {}
func (UnimplementedMetadataInfoServer) testEmbeddedByValue()                      {}

// UnsafeMetadataInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetadataInfoServer will
// result in compilation errors.
type UnsafeMetadataInfoServer interface {
	mustEmbedUnimplementedMetadataInfoServer()
}

func RegisterMetadataInfoServer(s grpc.ServiceRegistrar, srv MetadataInfoServer) {
	// If the following call pancis, it indicates UnimplementedMetadataInfoServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
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
