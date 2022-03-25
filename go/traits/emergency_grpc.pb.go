// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: traits/emergency.proto

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

// EmergencyApiClient is the client API for EmergencyApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EmergencyApiClient interface {
	// Get the current emergency state
	GetEmergency(ctx context.Context, in *GetEmergencyRequest, opts ...grpc.CallOption) (*Emergency, error)
	// Update the current emergency state
	UpdateEmergency(ctx context.Context, in *UpdateEmergencyRequest, opts ...grpc.CallOption) (*Emergency, error)
	// Be notified of changes to the emergency state
	PullEmergency(ctx context.Context, in *PullEmergencyRequest, opts ...grpc.CallOption) (EmergencyApi_PullEmergencyClient, error)
}

type emergencyApiClient struct {
	cc grpc.ClientConnInterface
}

func NewEmergencyApiClient(cc grpc.ClientConnInterface) EmergencyApiClient {
	return &emergencyApiClient{cc}
}

func (c *emergencyApiClient) GetEmergency(ctx context.Context, in *GetEmergencyRequest, opts ...grpc.CallOption) (*Emergency, error) {
	out := new(Emergency)
	err := c.cc.Invoke(ctx, "/smartcore.traits.EmergencyApi/GetEmergency", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *emergencyApiClient) UpdateEmergency(ctx context.Context, in *UpdateEmergencyRequest, opts ...grpc.CallOption) (*Emergency, error) {
	out := new(Emergency)
	err := c.cc.Invoke(ctx, "/smartcore.traits.EmergencyApi/UpdateEmergency", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *emergencyApiClient) PullEmergency(ctx context.Context, in *PullEmergencyRequest, opts ...grpc.CallOption) (EmergencyApi_PullEmergencyClient, error) {
	stream, err := c.cc.NewStream(ctx, &EmergencyApi_ServiceDesc.Streams[0], "/smartcore.traits.EmergencyApi/PullEmergency", opts...)
	if err != nil {
		return nil, err
	}
	x := &emergencyApiPullEmergencyClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type EmergencyApi_PullEmergencyClient interface {
	Recv() (*PullEmergencyResponse, error)
	grpc.ClientStream
}

type emergencyApiPullEmergencyClient struct {
	grpc.ClientStream
}

func (x *emergencyApiPullEmergencyClient) Recv() (*PullEmergencyResponse, error) {
	m := new(PullEmergencyResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// EmergencyApiServer is the server API for EmergencyApi service.
// All implementations must embed UnimplementedEmergencyApiServer
// for forward compatibility
type EmergencyApiServer interface {
	// Get the current emergency state
	GetEmergency(context.Context, *GetEmergencyRequest) (*Emergency, error)
	// Update the current emergency state
	UpdateEmergency(context.Context, *UpdateEmergencyRequest) (*Emergency, error)
	// Be notified of changes to the emergency state
	PullEmergency(*PullEmergencyRequest, EmergencyApi_PullEmergencyServer) error
	mustEmbedUnimplementedEmergencyApiServer()
}

// UnimplementedEmergencyApiServer must be embedded to have forward compatible implementations.
type UnimplementedEmergencyApiServer struct {
}

func (UnimplementedEmergencyApiServer) GetEmergency(context.Context, *GetEmergencyRequest) (*Emergency, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEmergency not implemented")
}
func (UnimplementedEmergencyApiServer) UpdateEmergency(context.Context, *UpdateEmergencyRequest) (*Emergency, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateEmergency not implemented")
}
func (UnimplementedEmergencyApiServer) PullEmergency(*PullEmergencyRequest, EmergencyApi_PullEmergencyServer) error {
	return status.Errorf(codes.Unimplemented, "method PullEmergency not implemented")
}
func (UnimplementedEmergencyApiServer) mustEmbedUnimplementedEmergencyApiServer() {}

// UnsafeEmergencyApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EmergencyApiServer will
// result in compilation errors.
type UnsafeEmergencyApiServer interface {
	mustEmbedUnimplementedEmergencyApiServer()
}

func RegisterEmergencyApiServer(s grpc.ServiceRegistrar, srv EmergencyApiServer) {
	s.RegisterService(&EmergencyApi_ServiceDesc, srv)
}

func _EmergencyApi_GetEmergency_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEmergencyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmergencyApiServer).GetEmergency(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.EmergencyApi/GetEmergency",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmergencyApiServer).GetEmergency(ctx, req.(*GetEmergencyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EmergencyApi_UpdateEmergency_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateEmergencyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmergencyApiServer).UpdateEmergency(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.EmergencyApi/UpdateEmergency",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmergencyApiServer).UpdateEmergency(ctx, req.(*UpdateEmergencyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EmergencyApi_PullEmergency_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullEmergencyRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(EmergencyApiServer).PullEmergency(m, &emergencyApiPullEmergencyServer{stream})
}

type EmergencyApi_PullEmergencyServer interface {
	Send(*PullEmergencyResponse) error
	grpc.ServerStream
}

type emergencyApiPullEmergencyServer struct {
	grpc.ServerStream
}

func (x *emergencyApiPullEmergencyServer) Send(m *PullEmergencyResponse) error {
	return x.ServerStream.SendMsg(m)
}

// EmergencyApi_ServiceDesc is the grpc.ServiceDesc for EmergencyApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EmergencyApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.EmergencyApi",
	HandlerType: (*EmergencyApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEmergency",
			Handler:    _EmergencyApi_GetEmergency_Handler,
		},
		{
			MethodName: "UpdateEmergency",
			Handler:    _EmergencyApi_UpdateEmergency_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullEmergency",
			Handler:       _EmergencyApi_PullEmergency_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/emergency.proto",
}

// EmergencyInfoClient is the client API for EmergencyInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EmergencyInfoClient interface {
	// Get information about how a named device implements Emergency features
	DescribeEmergency(ctx context.Context, in *DescribeEmergencyRequest, opts ...grpc.CallOption) (*EmergencySupport, error)
}

type emergencyInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewEmergencyInfoClient(cc grpc.ClientConnInterface) EmergencyInfoClient {
	return &emergencyInfoClient{cc}
}

func (c *emergencyInfoClient) DescribeEmergency(ctx context.Context, in *DescribeEmergencyRequest, opts ...grpc.CallOption) (*EmergencySupport, error) {
	out := new(EmergencySupport)
	err := c.cc.Invoke(ctx, "/smartcore.traits.EmergencyInfo/DescribeEmergency", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EmergencyInfoServer is the server API for EmergencyInfo service.
// All implementations must embed UnimplementedEmergencyInfoServer
// for forward compatibility
type EmergencyInfoServer interface {
	// Get information about how a named device implements Emergency features
	DescribeEmergency(context.Context, *DescribeEmergencyRequest) (*EmergencySupport, error)
	mustEmbedUnimplementedEmergencyInfoServer()
}

// UnimplementedEmergencyInfoServer must be embedded to have forward compatible implementations.
type UnimplementedEmergencyInfoServer struct {
}

func (UnimplementedEmergencyInfoServer) DescribeEmergency(context.Context, *DescribeEmergencyRequest) (*EmergencySupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeEmergency not implemented")
}
func (UnimplementedEmergencyInfoServer) mustEmbedUnimplementedEmergencyInfoServer() {}

// UnsafeEmergencyInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EmergencyInfoServer will
// result in compilation errors.
type UnsafeEmergencyInfoServer interface {
	mustEmbedUnimplementedEmergencyInfoServer()
}

func RegisterEmergencyInfoServer(s grpc.ServiceRegistrar, srv EmergencyInfoServer) {
	s.RegisterService(&EmergencyInfo_ServiceDesc, srv)
}

func _EmergencyInfo_DescribeEmergency_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeEmergencyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmergencyInfoServer).DescribeEmergency(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.EmergencyInfo/DescribeEmergency",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmergencyInfoServer).DescribeEmergency(ctx, req.(*DescribeEmergencyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EmergencyInfo_ServiceDesc is the grpc.ServiceDesc for EmergencyInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EmergencyInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.EmergencyInfo",
	HandlerType: (*EmergencyInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeEmergency",
			Handler:    _EmergencyInfo_DescribeEmergency_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/emergency.proto",
}
