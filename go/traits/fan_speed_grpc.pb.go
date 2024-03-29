// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.2
// source: traits/fan_speed.proto

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

const (
	FanSpeedApi_GetFanSpeed_FullMethodName              = "/smartcore.traits.FanSpeedApi/GetFanSpeed"
	FanSpeedApi_UpdateFanSpeed_FullMethodName           = "/smartcore.traits.FanSpeedApi/UpdateFanSpeed"
	FanSpeedApi_PullFanSpeed_FullMethodName             = "/smartcore.traits.FanSpeedApi/PullFanSpeed"
	FanSpeedApi_ReverseFanSpeedDirection_FullMethodName = "/smartcore.traits.FanSpeedApi/ReverseFanSpeedDirection"
)

// FanSpeedApiClient is the client API for FanSpeedApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FanSpeedApiClient interface {
	// GetFanSpeed returns the fan speed for the device.
	GetFanSpeed(ctx context.Context, in *GetFanSpeedRequest, opts ...grpc.CallOption) (*FanSpeed, error)
	// UpdateFanSpeed updates the fan speed for the device.
	UpdateFanSpeed(ctx context.Context, in *UpdateFanSpeedRequest, opts ...grpc.CallOption) (*FanSpeed, error)
	// PullFanSpeed returns a stream of changes to the current fan speed for the device.
	PullFanSpeed(ctx context.Context, in *PullFanSpeedRequest, opts ...grpc.CallOption) (FanSpeedApi_PullFanSpeedClient, error)
	// ReverseFanSpeedDirection reverses the fan speed direction.
	// If the fan is spinning FORWARD it will be changed to BACKWARD, etc.
	ReverseFanSpeedDirection(ctx context.Context, in *ReverseFanSpeedDirectionRequest, opts ...grpc.CallOption) (*FanSpeed, error)
}

type fanSpeedApiClient struct {
	cc grpc.ClientConnInterface
}

func NewFanSpeedApiClient(cc grpc.ClientConnInterface) FanSpeedApiClient {
	return &fanSpeedApiClient{cc}
}

func (c *fanSpeedApiClient) GetFanSpeed(ctx context.Context, in *GetFanSpeedRequest, opts ...grpc.CallOption) (*FanSpeed, error) {
	out := new(FanSpeed)
	err := c.cc.Invoke(ctx, FanSpeedApi_GetFanSpeed_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fanSpeedApiClient) UpdateFanSpeed(ctx context.Context, in *UpdateFanSpeedRequest, opts ...grpc.CallOption) (*FanSpeed, error) {
	out := new(FanSpeed)
	err := c.cc.Invoke(ctx, FanSpeedApi_UpdateFanSpeed_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fanSpeedApiClient) PullFanSpeed(ctx context.Context, in *PullFanSpeedRequest, opts ...grpc.CallOption) (FanSpeedApi_PullFanSpeedClient, error) {
	stream, err := c.cc.NewStream(ctx, &FanSpeedApi_ServiceDesc.Streams[0], FanSpeedApi_PullFanSpeed_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &fanSpeedApiPullFanSpeedClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type FanSpeedApi_PullFanSpeedClient interface {
	Recv() (*PullFanSpeedResponse, error)
	grpc.ClientStream
}

type fanSpeedApiPullFanSpeedClient struct {
	grpc.ClientStream
}

func (x *fanSpeedApiPullFanSpeedClient) Recv() (*PullFanSpeedResponse, error) {
	m := new(PullFanSpeedResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *fanSpeedApiClient) ReverseFanSpeedDirection(ctx context.Context, in *ReverseFanSpeedDirectionRequest, opts ...grpc.CallOption) (*FanSpeed, error) {
	out := new(FanSpeed)
	err := c.cc.Invoke(ctx, FanSpeedApi_ReverseFanSpeedDirection_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FanSpeedApiServer is the server API for FanSpeedApi service.
// All implementations must embed UnimplementedFanSpeedApiServer
// for forward compatibility
type FanSpeedApiServer interface {
	// GetFanSpeed returns the fan speed for the device.
	GetFanSpeed(context.Context, *GetFanSpeedRequest) (*FanSpeed, error)
	// UpdateFanSpeed updates the fan speed for the device.
	UpdateFanSpeed(context.Context, *UpdateFanSpeedRequest) (*FanSpeed, error)
	// PullFanSpeed returns a stream of changes to the current fan speed for the device.
	PullFanSpeed(*PullFanSpeedRequest, FanSpeedApi_PullFanSpeedServer) error
	// ReverseFanSpeedDirection reverses the fan speed direction.
	// If the fan is spinning FORWARD it will be changed to BACKWARD, etc.
	ReverseFanSpeedDirection(context.Context, *ReverseFanSpeedDirectionRequest) (*FanSpeed, error)
	mustEmbedUnimplementedFanSpeedApiServer()
}

// UnimplementedFanSpeedApiServer must be embedded to have forward compatible implementations.
type UnimplementedFanSpeedApiServer struct {
}

func (UnimplementedFanSpeedApiServer) GetFanSpeed(context.Context, *GetFanSpeedRequest) (*FanSpeed, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFanSpeed not implemented")
}
func (UnimplementedFanSpeedApiServer) UpdateFanSpeed(context.Context, *UpdateFanSpeedRequest) (*FanSpeed, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFanSpeed not implemented")
}
func (UnimplementedFanSpeedApiServer) PullFanSpeed(*PullFanSpeedRequest, FanSpeedApi_PullFanSpeedServer) error {
	return status.Errorf(codes.Unimplemented, "method PullFanSpeed not implemented")
}
func (UnimplementedFanSpeedApiServer) ReverseFanSpeedDirection(context.Context, *ReverseFanSpeedDirectionRequest) (*FanSpeed, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReverseFanSpeedDirection not implemented")
}
func (UnimplementedFanSpeedApiServer) mustEmbedUnimplementedFanSpeedApiServer() {}

// UnsafeFanSpeedApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FanSpeedApiServer will
// result in compilation errors.
type UnsafeFanSpeedApiServer interface {
	mustEmbedUnimplementedFanSpeedApiServer()
}

func RegisterFanSpeedApiServer(s grpc.ServiceRegistrar, srv FanSpeedApiServer) {
	s.RegisterService(&FanSpeedApi_ServiceDesc, srv)
}

func _FanSpeedApi_GetFanSpeed_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFanSpeedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FanSpeedApiServer).GetFanSpeed(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FanSpeedApi_GetFanSpeed_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FanSpeedApiServer).GetFanSpeed(ctx, req.(*GetFanSpeedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FanSpeedApi_UpdateFanSpeed_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateFanSpeedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FanSpeedApiServer).UpdateFanSpeed(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FanSpeedApi_UpdateFanSpeed_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FanSpeedApiServer).UpdateFanSpeed(ctx, req.(*UpdateFanSpeedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FanSpeedApi_PullFanSpeed_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullFanSpeedRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(FanSpeedApiServer).PullFanSpeed(m, &fanSpeedApiPullFanSpeedServer{stream})
}

type FanSpeedApi_PullFanSpeedServer interface {
	Send(*PullFanSpeedResponse) error
	grpc.ServerStream
}

type fanSpeedApiPullFanSpeedServer struct {
	grpc.ServerStream
}

func (x *fanSpeedApiPullFanSpeedServer) Send(m *PullFanSpeedResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _FanSpeedApi_ReverseFanSpeedDirection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReverseFanSpeedDirectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FanSpeedApiServer).ReverseFanSpeedDirection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FanSpeedApi_ReverseFanSpeedDirection_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FanSpeedApiServer).ReverseFanSpeedDirection(ctx, req.(*ReverseFanSpeedDirectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FanSpeedApi_ServiceDesc is the grpc.ServiceDesc for FanSpeedApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FanSpeedApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.FanSpeedApi",
	HandlerType: (*FanSpeedApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetFanSpeed",
			Handler:    _FanSpeedApi_GetFanSpeed_Handler,
		},
		{
			MethodName: "UpdateFanSpeed",
			Handler:    _FanSpeedApi_UpdateFanSpeed_Handler,
		},
		{
			MethodName: "ReverseFanSpeedDirection",
			Handler:    _FanSpeedApi_ReverseFanSpeedDirection_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullFanSpeed",
			Handler:       _FanSpeedApi_PullFanSpeed_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/fan_speed.proto",
}

const (
	FanSpeedInfo_DescribeFanSpeed_FullMethodName = "/smartcore.traits.FanSpeedInfo/DescribeFanSpeed"
)

// FanSpeedInfoClient is the client API for FanSpeedInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FanSpeedInfoClient interface {
	// Get information about how a named device implements FanSpeed features
	DescribeFanSpeed(ctx context.Context, in *DescribeFanSpeedRequest, opts ...grpc.CallOption) (*FanSpeedSupport, error)
}

type fanSpeedInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewFanSpeedInfoClient(cc grpc.ClientConnInterface) FanSpeedInfoClient {
	return &fanSpeedInfoClient{cc}
}

func (c *fanSpeedInfoClient) DescribeFanSpeed(ctx context.Context, in *DescribeFanSpeedRequest, opts ...grpc.CallOption) (*FanSpeedSupport, error) {
	out := new(FanSpeedSupport)
	err := c.cc.Invoke(ctx, FanSpeedInfo_DescribeFanSpeed_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FanSpeedInfoServer is the server API for FanSpeedInfo service.
// All implementations must embed UnimplementedFanSpeedInfoServer
// for forward compatibility
type FanSpeedInfoServer interface {
	// Get information about how a named device implements FanSpeed features
	DescribeFanSpeed(context.Context, *DescribeFanSpeedRequest) (*FanSpeedSupport, error)
	mustEmbedUnimplementedFanSpeedInfoServer()
}

// UnimplementedFanSpeedInfoServer must be embedded to have forward compatible implementations.
type UnimplementedFanSpeedInfoServer struct {
}

func (UnimplementedFanSpeedInfoServer) DescribeFanSpeed(context.Context, *DescribeFanSpeedRequest) (*FanSpeedSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeFanSpeed not implemented")
}
func (UnimplementedFanSpeedInfoServer) mustEmbedUnimplementedFanSpeedInfoServer() {}

// UnsafeFanSpeedInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FanSpeedInfoServer will
// result in compilation errors.
type UnsafeFanSpeedInfoServer interface {
	mustEmbedUnimplementedFanSpeedInfoServer()
}

func RegisterFanSpeedInfoServer(s grpc.ServiceRegistrar, srv FanSpeedInfoServer) {
	s.RegisterService(&FanSpeedInfo_ServiceDesc, srv)
}

func _FanSpeedInfo_DescribeFanSpeed_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeFanSpeedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FanSpeedInfoServer).DescribeFanSpeed(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FanSpeedInfo_DescribeFanSpeed_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FanSpeedInfoServer).DescribeFanSpeed(ctx, req.(*DescribeFanSpeedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FanSpeedInfo_ServiceDesc is the grpc.ServiceDesc for FanSpeedInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FanSpeedInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.FanSpeedInfo",
	HandlerType: (*FanSpeedInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeFanSpeed",
			Handler:    _FanSpeedInfo_DescribeFanSpeed_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/fan_speed.proto",
}
