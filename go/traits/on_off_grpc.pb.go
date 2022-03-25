// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: traits/on_off.proto

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

// OnOffApiClient is the client API for OnOffApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OnOffApiClient interface {
	// Get the current state of the device
	GetOnOff(ctx context.Context, in *GetOnOffRequest, opts ...grpc.CallOption) (*OnOff, error)
	// Update the device to be on or off
	UpdateOnOff(ctx context.Context, in *UpdateOnOffRequest, opts ...grpc.CallOption) (*OnOff, error)
	// Get notified of changes to the OnOff state of a device
	PullOnOff(ctx context.Context, in *PullOnOffRequest, opts ...grpc.CallOption) (OnOffApi_PullOnOffClient, error)
}

type onOffApiClient struct {
	cc grpc.ClientConnInterface
}

func NewOnOffApiClient(cc grpc.ClientConnInterface) OnOffApiClient {
	return &onOffApiClient{cc}
}

func (c *onOffApiClient) GetOnOff(ctx context.Context, in *GetOnOffRequest, opts ...grpc.CallOption) (*OnOff, error) {
	out := new(OnOff)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OnOffApi/GetOnOff", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *onOffApiClient) UpdateOnOff(ctx context.Context, in *UpdateOnOffRequest, opts ...grpc.CallOption) (*OnOff, error) {
	out := new(OnOff)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OnOffApi/UpdateOnOff", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *onOffApiClient) PullOnOff(ctx context.Context, in *PullOnOffRequest, opts ...grpc.CallOption) (OnOffApi_PullOnOffClient, error) {
	stream, err := c.cc.NewStream(ctx, &OnOffApi_ServiceDesc.Streams[0], "/smartcore.traits.OnOffApi/PullOnOff", opts...)
	if err != nil {
		return nil, err
	}
	x := &onOffApiPullOnOffClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OnOffApi_PullOnOffClient interface {
	Recv() (*PullOnOffResponse, error)
	grpc.ClientStream
}

type onOffApiPullOnOffClient struct {
	grpc.ClientStream
}

func (x *onOffApiPullOnOffClient) Recv() (*PullOnOffResponse, error) {
	m := new(PullOnOffResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OnOffApiServer is the server API for OnOffApi service.
// All implementations must embed UnimplementedOnOffApiServer
// for forward compatibility
type OnOffApiServer interface {
	// Get the current state of the device
	GetOnOff(context.Context, *GetOnOffRequest) (*OnOff, error)
	// Update the device to be on or off
	UpdateOnOff(context.Context, *UpdateOnOffRequest) (*OnOff, error)
	// Get notified of changes to the OnOff state of a device
	PullOnOff(*PullOnOffRequest, OnOffApi_PullOnOffServer) error
	mustEmbedUnimplementedOnOffApiServer()
}

// UnimplementedOnOffApiServer must be embedded to have forward compatible implementations.
type UnimplementedOnOffApiServer struct {
}

func (UnimplementedOnOffApiServer) GetOnOff(context.Context, *GetOnOffRequest) (*OnOff, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOnOff not implemented")
}
func (UnimplementedOnOffApiServer) UpdateOnOff(context.Context, *UpdateOnOffRequest) (*OnOff, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateOnOff not implemented")
}
func (UnimplementedOnOffApiServer) PullOnOff(*PullOnOffRequest, OnOffApi_PullOnOffServer) error {
	return status.Errorf(codes.Unimplemented, "method PullOnOff not implemented")
}
func (UnimplementedOnOffApiServer) mustEmbedUnimplementedOnOffApiServer() {}

// UnsafeOnOffApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OnOffApiServer will
// result in compilation errors.
type UnsafeOnOffApiServer interface {
	mustEmbedUnimplementedOnOffApiServer()
}

func RegisterOnOffApiServer(s grpc.ServiceRegistrar, srv OnOffApiServer) {
	s.RegisterService(&OnOffApi_ServiceDesc, srv)
}

func _OnOffApi_GetOnOff_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOnOffRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OnOffApiServer).GetOnOff(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OnOffApi/GetOnOff",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OnOffApiServer).GetOnOff(ctx, req.(*GetOnOffRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OnOffApi_UpdateOnOff_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateOnOffRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OnOffApiServer).UpdateOnOff(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OnOffApi/UpdateOnOff",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OnOffApiServer).UpdateOnOff(ctx, req.(*UpdateOnOffRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OnOffApi_PullOnOff_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullOnOffRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OnOffApiServer).PullOnOff(m, &onOffApiPullOnOffServer{stream})
}

type OnOffApi_PullOnOffServer interface {
	Send(*PullOnOffResponse) error
	grpc.ServerStream
}

type onOffApiPullOnOffServer struct {
	grpc.ServerStream
}

func (x *onOffApiPullOnOffServer) Send(m *PullOnOffResponse) error {
	return x.ServerStream.SendMsg(m)
}

// OnOffApi_ServiceDesc is the grpc.ServiceDesc for OnOffApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OnOffApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OnOffApi",
	HandlerType: (*OnOffApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOnOff",
			Handler:    _OnOffApi_GetOnOff_Handler,
		},
		{
			MethodName: "UpdateOnOff",
			Handler:    _OnOffApi_UpdateOnOff_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullOnOff",
			Handler:       _OnOffApi_PullOnOff_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/on_off.proto",
}

// OnOffInfoClient is the client API for OnOffInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OnOffInfoClient interface {
	// Get information about how a named device implements OnOff features
	DescribeOnOff(ctx context.Context, in *DescribeOnOffRequest, opts ...grpc.CallOption) (*OnOffSupport, error)
}

type onOffInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewOnOffInfoClient(cc grpc.ClientConnInterface) OnOffInfoClient {
	return &onOffInfoClient{cc}
}

func (c *onOffInfoClient) DescribeOnOff(ctx context.Context, in *DescribeOnOffRequest, opts ...grpc.CallOption) (*OnOffSupport, error) {
	out := new(OnOffSupport)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OnOffInfo/DescribeOnOff", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OnOffInfoServer is the server API for OnOffInfo service.
// All implementations must embed UnimplementedOnOffInfoServer
// for forward compatibility
type OnOffInfoServer interface {
	// Get information about how a named device implements OnOff features
	DescribeOnOff(context.Context, *DescribeOnOffRequest) (*OnOffSupport, error)
	mustEmbedUnimplementedOnOffInfoServer()
}

// UnimplementedOnOffInfoServer must be embedded to have forward compatible implementations.
type UnimplementedOnOffInfoServer struct {
}

func (UnimplementedOnOffInfoServer) DescribeOnOff(context.Context, *DescribeOnOffRequest) (*OnOffSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeOnOff not implemented")
}
func (UnimplementedOnOffInfoServer) mustEmbedUnimplementedOnOffInfoServer() {}

// UnsafeOnOffInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OnOffInfoServer will
// result in compilation errors.
type UnsafeOnOffInfoServer interface {
	mustEmbedUnimplementedOnOffInfoServer()
}

func RegisterOnOffInfoServer(s grpc.ServiceRegistrar, srv OnOffInfoServer) {
	s.RegisterService(&OnOffInfo_ServiceDesc, srv)
}

func _OnOffInfo_DescribeOnOff_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeOnOffRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OnOffInfoServer).DescribeOnOff(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OnOffInfo/DescribeOnOff",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OnOffInfoServer).DescribeOnOff(ctx, req.(*DescribeOnOffRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OnOffInfo_ServiceDesc is the grpc.ServiceDesc for OnOffInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OnOffInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OnOffInfo",
	HandlerType: (*OnOffInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeOnOff",
			Handler:    _OnOffInfo_DescribeOnOff_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/on_off.proto",
}
