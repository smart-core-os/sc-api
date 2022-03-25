// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: traits/parent.proto

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

// ParentApiClient is the client API for ParentApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ParentApiClient interface {
	// ListChildren returns children associated with the named parent device.
	ListChildren(ctx context.Context, in *ListChildrenRequest, opts ...grpc.CallOption) (*ListChildrenResponse, error)
	// PullChildren subscribes to changes in the children associated with the named parent device.
	PullChildren(ctx context.Context, in *PullChildrenRequest, opts ...grpc.CallOption) (ParentApi_PullChildrenClient, error)
}

type parentApiClient struct {
	cc grpc.ClientConnInterface
}

func NewParentApiClient(cc grpc.ClientConnInterface) ParentApiClient {
	return &parentApiClient{cc}
}

func (c *parentApiClient) ListChildren(ctx context.Context, in *ListChildrenRequest, opts ...grpc.CallOption) (*ListChildrenResponse, error) {
	out := new(ListChildrenResponse)
	err := c.cc.Invoke(ctx, "/smartcore.traits.ParentApi/ListChildren", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *parentApiClient) PullChildren(ctx context.Context, in *PullChildrenRequest, opts ...grpc.CallOption) (ParentApi_PullChildrenClient, error) {
	stream, err := c.cc.NewStream(ctx, &ParentApi_ServiceDesc.Streams[0], "/smartcore.traits.ParentApi/PullChildren", opts...)
	if err != nil {
		return nil, err
	}
	x := &parentApiPullChildrenClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ParentApi_PullChildrenClient interface {
	Recv() (*PullChildrenResponse, error)
	grpc.ClientStream
}

type parentApiPullChildrenClient struct {
	grpc.ClientStream
}

func (x *parentApiPullChildrenClient) Recv() (*PullChildrenResponse, error) {
	m := new(PullChildrenResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ParentApiServer is the server API for ParentApi service.
// All implementations must embed UnimplementedParentApiServer
// for forward compatibility
type ParentApiServer interface {
	// ListChildren returns children associated with the named parent device.
	ListChildren(context.Context, *ListChildrenRequest) (*ListChildrenResponse, error)
	// PullChildren subscribes to changes in the children associated with the named parent device.
	PullChildren(*PullChildrenRequest, ParentApi_PullChildrenServer) error
	mustEmbedUnimplementedParentApiServer()
}

// UnimplementedParentApiServer must be embedded to have forward compatible implementations.
type UnimplementedParentApiServer struct {
}

func (UnimplementedParentApiServer) ListChildren(context.Context, *ListChildrenRequest) (*ListChildrenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListChildren not implemented")
}
func (UnimplementedParentApiServer) PullChildren(*PullChildrenRequest, ParentApi_PullChildrenServer) error {
	return status.Errorf(codes.Unimplemented, "method PullChildren not implemented")
}
func (UnimplementedParentApiServer) mustEmbedUnimplementedParentApiServer() {}

// UnsafeParentApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ParentApiServer will
// result in compilation errors.
type UnsafeParentApiServer interface {
	mustEmbedUnimplementedParentApiServer()
}

func RegisterParentApiServer(s grpc.ServiceRegistrar, srv ParentApiServer) {
	s.RegisterService(&ParentApi_ServiceDesc, srv)
}

func _ParentApi_ListChildren_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListChildrenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ParentApiServer).ListChildren(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.ParentApi/ListChildren",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ParentApiServer).ListChildren(ctx, req.(*ListChildrenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ParentApi_PullChildren_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullChildrenRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ParentApiServer).PullChildren(m, &parentApiPullChildrenServer{stream})
}

type ParentApi_PullChildrenServer interface {
	Send(*PullChildrenResponse) error
	grpc.ServerStream
}

type parentApiPullChildrenServer struct {
	grpc.ServerStream
}

func (x *parentApiPullChildrenServer) Send(m *PullChildrenResponse) error {
	return x.ServerStream.SendMsg(m)
}

// ParentApi_ServiceDesc is the grpc.ServiceDesc for ParentApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ParentApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.ParentApi",
	HandlerType: (*ParentApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListChildren",
			Handler:    _ParentApi_ListChildren_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullChildren",
			Handler:       _ParentApi_PullChildren_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/parent.proto",
}

// ParentInfoClient is the client API for ParentInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ParentInfoClient interface {
}

type parentInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewParentInfoClient(cc grpc.ClientConnInterface) ParentInfoClient {
	return &parentInfoClient{cc}
}

// ParentInfoServer is the server API for ParentInfo service.
// All implementations must embed UnimplementedParentInfoServer
// for forward compatibility
type ParentInfoServer interface {
	mustEmbedUnimplementedParentInfoServer()
}

// UnimplementedParentInfoServer must be embedded to have forward compatible implementations.
type UnimplementedParentInfoServer struct {
}

func (UnimplementedParentInfoServer) mustEmbedUnimplementedParentInfoServer() {}

// UnsafeParentInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ParentInfoServer will
// result in compilation errors.
type UnsafeParentInfoServer interface {
	mustEmbedUnimplementedParentInfoServer()
}

func RegisterParentInfoServer(s grpc.ServiceRegistrar, srv ParentInfoServer) {
	s.RegisterService(&ParentInfo_ServiceDesc, srv)
}

// ParentInfo_ServiceDesc is the grpc.ServiceDesc for ParentInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ParentInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.ParentInfo",
	HandlerType: (*ParentInfoServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "traits/parent.proto",
}
