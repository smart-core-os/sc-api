// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.1
// source: traits/lock_unlock.proto

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

// LockUnlockApiClient is the client API for LockUnlockApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LockUnlockApiClient interface {
	// Get the current lock position for the device.
	GetLockUnlock(ctx context.Context, in *GetLockUnlockRequest, opts ...grpc.CallOption) (*LockUnlock, error)
	// Update the lock position of the device.
	UpdateLockUnlock(ctx context.Context, in *UpdateLockUnlockRequest, opts ...grpc.CallOption) (*LockUnlock, error)
	// Subscribe to changes in the lock position for the device.
	PullLockUnlock(ctx context.Context, in *PullLockUnlockRequest, opts ...grpc.CallOption) (LockUnlockApi_PullLockUnlockClient, error)
}

type lockUnlockApiClient struct {
	cc grpc.ClientConnInterface
}

func NewLockUnlockApiClient(cc grpc.ClientConnInterface) LockUnlockApiClient {
	return &lockUnlockApiClient{cc}
}

func (c *lockUnlockApiClient) GetLockUnlock(ctx context.Context, in *GetLockUnlockRequest, opts ...grpc.CallOption) (*LockUnlock, error) {
	out := new(LockUnlock)
	err := c.cc.Invoke(ctx, "/smartcore.traits.LockUnlockApi/GetLockUnlock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lockUnlockApiClient) UpdateLockUnlock(ctx context.Context, in *UpdateLockUnlockRequest, opts ...grpc.CallOption) (*LockUnlock, error) {
	out := new(LockUnlock)
	err := c.cc.Invoke(ctx, "/smartcore.traits.LockUnlockApi/UpdateLockUnlock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lockUnlockApiClient) PullLockUnlock(ctx context.Context, in *PullLockUnlockRequest, opts ...grpc.CallOption) (LockUnlockApi_PullLockUnlockClient, error) {
	stream, err := c.cc.NewStream(ctx, &LockUnlockApi_ServiceDesc.Streams[0], "/smartcore.traits.LockUnlockApi/PullLockUnlock", opts...)
	if err != nil {
		return nil, err
	}
	x := &lockUnlockApiPullLockUnlockClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type LockUnlockApi_PullLockUnlockClient interface {
	Recv() (*PullLockUnlockResponse, error)
	grpc.ClientStream
}

type lockUnlockApiPullLockUnlockClient struct {
	grpc.ClientStream
}

func (x *lockUnlockApiPullLockUnlockClient) Recv() (*PullLockUnlockResponse, error) {
	m := new(PullLockUnlockResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// LockUnlockApiServer is the server API for LockUnlockApi service.
// All implementations must embed UnimplementedLockUnlockApiServer
// for forward compatibility
type LockUnlockApiServer interface {
	// Get the current lock position for the device.
	GetLockUnlock(context.Context, *GetLockUnlockRequest) (*LockUnlock, error)
	// Update the lock position of the device.
	UpdateLockUnlock(context.Context, *UpdateLockUnlockRequest) (*LockUnlock, error)
	// Subscribe to changes in the lock position for the device.
	PullLockUnlock(*PullLockUnlockRequest, LockUnlockApi_PullLockUnlockServer) error
	mustEmbedUnimplementedLockUnlockApiServer()
}

// UnimplementedLockUnlockApiServer must be embedded to have forward compatible implementations.
type UnimplementedLockUnlockApiServer struct {
}

func (UnimplementedLockUnlockApiServer) GetLockUnlock(context.Context, *GetLockUnlockRequest) (*LockUnlock, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLockUnlock not implemented")
}
func (UnimplementedLockUnlockApiServer) UpdateLockUnlock(context.Context, *UpdateLockUnlockRequest) (*LockUnlock, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLockUnlock not implemented")
}
func (UnimplementedLockUnlockApiServer) PullLockUnlock(*PullLockUnlockRequest, LockUnlockApi_PullLockUnlockServer) error {
	return status.Errorf(codes.Unimplemented, "method PullLockUnlock not implemented")
}
func (UnimplementedLockUnlockApiServer) mustEmbedUnimplementedLockUnlockApiServer() {}

// UnsafeLockUnlockApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LockUnlockApiServer will
// result in compilation errors.
type UnsafeLockUnlockApiServer interface {
	mustEmbedUnimplementedLockUnlockApiServer()
}

func RegisterLockUnlockApiServer(s grpc.ServiceRegistrar, srv LockUnlockApiServer) {
	s.RegisterService(&LockUnlockApi_ServiceDesc, srv)
}

func _LockUnlockApi_GetLockUnlock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLockUnlockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LockUnlockApiServer).GetLockUnlock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.LockUnlockApi/GetLockUnlock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LockUnlockApiServer).GetLockUnlock(ctx, req.(*GetLockUnlockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LockUnlockApi_UpdateLockUnlock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateLockUnlockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LockUnlockApiServer).UpdateLockUnlock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.LockUnlockApi/UpdateLockUnlock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LockUnlockApiServer).UpdateLockUnlock(ctx, req.(*UpdateLockUnlockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LockUnlockApi_PullLockUnlock_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullLockUnlockRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(LockUnlockApiServer).PullLockUnlock(m, &lockUnlockApiPullLockUnlockServer{stream})
}

type LockUnlockApi_PullLockUnlockServer interface {
	Send(*PullLockUnlockResponse) error
	grpc.ServerStream
}

type lockUnlockApiPullLockUnlockServer struct {
	grpc.ServerStream
}

func (x *lockUnlockApiPullLockUnlockServer) Send(m *PullLockUnlockResponse) error {
	return x.ServerStream.SendMsg(m)
}

// LockUnlockApi_ServiceDesc is the grpc.ServiceDesc for LockUnlockApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LockUnlockApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.LockUnlockApi",
	HandlerType: (*LockUnlockApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetLockUnlock",
			Handler:    _LockUnlockApi_GetLockUnlock_Handler,
		},
		{
			MethodName: "UpdateLockUnlock",
			Handler:    _LockUnlockApi_UpdateLockUnlock_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullLockUnlock",
			Handler:       _LockUnlockApi_PullLockUnlock_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/lock_unlock.proto",
}

// LockUnlockInfoClient is the client API for LockUnlockInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LockUnlockInfoClient interface {
}

type lockUnlockInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewLockUnlockInfoClient(cc grpc.ClientConnInterface) LockUnlockInfoClient {
	return &lockUnlockInfoClient{cc}
}

// LockUnlockInfoServer is the server API for LockUnlockInfo service.
// All implementations must embed UnimplementedLockUnlockInfoServer
// for forward compatibility
type LockUnlockInfoServer interface {
	mustEmbedUnimplementedLockUnlockInfoServer()
}

// UnimplementedLockUnlockInfoServer must be embedded to have forward compatible implementations.
type UnimplementedLockUnlockInfoServer struct {
}

func (UnimplementedLockUnlockInfoServer) mustEmbedUnimplementedLockUnlockInfoServer() {}

// UnsafeLockUnlockInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LockUnlockInfoServer will
// result in compilation errors.
type UnsafeLockUnlockInfoServer interface {
	mustEmbedUnimplementedLockUnlockInfoServer()
}

func RegisterLockUnlockInfoServer(s grpc.ServiceRegistrar, srv LockUnlockInfoServer) {
	s.RegisterService(&LockUnlockInfo_ServiceDesc, srv)
}

// LockUnlockInfo_ServiceDesc is the grpc.ServiceDesc for LockUnlockInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LockUnlockInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.LockUnlockInfo",
	HandlerType: (*LockUnlockInfoServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "traits/lock_unlock.proto",
}
