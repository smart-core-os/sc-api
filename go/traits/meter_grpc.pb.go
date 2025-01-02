// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.28.3
// source: traits/meter.proto

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
	MeterApi_GetMeterReading_FullMethodName   = "/smartcore.traits.MeterApi/GetMeterReading"
	MeterApi_PullMeterReadings_FullMethodName = "/smartcore.traits.MeterApi/PullMeterReadings"
)

// MeterApiClient is the client API for MeterApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// MeterApi represents a metering device, like an electric meter.
// The device records total usage since some fixed point in time, this trait provides access to that usage value.
// For example an electric meter records total energy usage since it was installed/reset in kWh as an ever increasing number.
type MeterApiClient interface {
	GetMeterReading(ctx context.Context, in *GetMeterReadingRequest, opts ...grpc.CallOption) (*MeterReading, error)
	PullMeterReadings(ctx context.Context, in *PullMeterReadingsRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullMeterReadingsResponse], error)
}

type meterApiClient struct {
	cc grpc.ClientConnInterface
}

func NewMeterApiClient(cc grpc.ClientConnInterface) MeterApiClient {
	return &meterApiClient{cc}
}

func (c *meterApiClient) GetMeterReading(ctx context.Context, in *GetMeterReadingRequest, opts ...grpc.CallOption) (*MeterReading, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MeterReading)
	err := c.cc.Invoke(ctx, MeterApi_GetMeterReading_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *meterApiClient) PullMeterReadings(ctx context.Context, in *PullMeterReadingsRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullMeterReadingsResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &MeterApi_ServiceDesc.Streams[0], MeterApi_PullMeterReadings_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PullMeterReadingsRequest, PullMeterReadingsResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type MeterApi_PullMeterReadingsClient = grpc.ServerStreamingClient[PullMeterReadingsResponse]

// MeterApiServer is the server API for MeterApi service.
// All implementations must embed UnimplementedMeterApiServer
// for forward compatibility.
//
// MeterApi represents a metering device, like an electric meter.
// The device records total usage since some fixed point in time, this trait provides access to that usage value.
// For example an electric meter records total energy usage since it was installed/reset in kWh as an ever increasing number.
type MeterApiServer interface {
	GetMeterReading(context.Context, *GetMeterReadingRequest) (*MeterReading, error)
	PullMeterReadings(*PullMeterReadingsRequest, grpc.ServerStreamingServer[PullMeterReadingsResponse]) error
	mustEmbedUnimplementedMeterApiServer()
}

// UnimplementedMeterApiServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedMeterApiServer struct{}

func (UnimplementedMeterApiServer) GetMeterReading(context.Context, *GetMeterReadingRequest) (*MeterReading, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMeterReading not implemented")
}
func (UnimplementedMeterApiServer) PullMeterReadings(*PullMeterReadingsRequest, grpc.ServerStreamingServer[PullMeterReadingsResponse]) error {
	return status.Errorf(codes.Unimplemented, "method PullMeterReadings not implemented")
}
func (UnimplementedMeterApiServer) mustEmbedUnimplementedMeterApiServer() {}
func (UnimplementedMeterApiServer) testEmbeddedByValue()                  {}

// UnsafeMeterApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MeterApiServer will
// result in compilation errors.
type UnsafeMeterApiServer interface {
	mustEmbedUnimplementedMeterApiServer()
}

func RegisterMeterApiServer(s grpc.ServiceRegistrar, srv MeterApiServer) {
	// If the following call pancis, it indicates UnimplementedMeterApiServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&MeterApi_ServiceDesc, srv)
}

func _MeterApi_GetMeterReading_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMeterReadingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MeterApiServer).GetMeterReading(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MeterApi_GetMeterReading_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MeterApiServer).GetMeterReading(ctx, req.(*GetMeterReadingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MeterApi_PullMeterReadings_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullMeterReadingsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MeterApiServer).PullMeterReadings(m, &grpc.GenericServerStream[PullMeterReadingsRequest, PullMeterReadingsResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type MeterApi_PullMeterReadingsServer = grpc.ServerStreamingServer[PullMeterReadingsResponse]

// MeterApi_ServiceDesc is the grpc.ServiceDesc for MeterApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MeterApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MeterApi",
	HandlerType: (*MeterApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMeterReading",
			Handler:    _MeterApi_GetMeterReading_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullMeterReadings",
			Handler:       _MeterApi_PullMeterReadings_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/meter.proto",
}

const (
	MeterInfo_DescribeMeterReading_FullMethodName = "/smartcore.traits.MeterInfo/DescribeMeterReading"
)

// MeterInfoClient is the client API for MeterInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MeterInfoClient interface {
	DescribeMeterReading(ctx context.Context, in *DescribeMeterReadingRequest, opts ...grpc.CallOption) (*MeterReadingSupport, error)
}

type meterInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewMeterInfoClient(cc grpc.ClientConnInterface) MeterInfoClient {
	return &meterInfoClient{cc}
}

func (c *meterInfoClient) DescribeMeterReading(ctx context.Context, in *DescribeMeterReadingRequest, opts ...grpc.CallOption) (*MeterReadingSupport, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MeterReadingSupport)
	err := c.cc.Invoke(ctx, MeterInfo_DescribeMeterReading_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MeterInfoServer is the server API for MeterInfo service.
// All implementations must embed UnimplementedMeterInfoServer
// for forward compatibility.
type MeterInfoServer interface {
	DescribeMeterReading(context.Context, *DescribeMeterReadingRequest) (*MeterReadingSupport, error)
	mustEmbedUnimplementedMeterInfoServer()
}

// UnimplementedMeterInfoServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedMeterInfoServer struct{}

func (UnimplementedMeterInfoServer) DescribeMeterReading(context.Context, *DescribeMeterReadingRequest) (*MeterReadingSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeMeterReading not implemented")
}
func (UnimplementedMeterInfoServer) mustEmbedUnimplementedMeterInfoServer() {}
func (UnimplementedMeterInfoServer) testEmbeddedByValue()                   {}

// UnsafeMeterInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MeterInfoServer will
// result in compilation errors.
type UnsafeMeterInfoServer interface {
	mustEmbedUnimplementedMeterInfoServer()
}

func RegisterMeterInfoServer(s grpc.ServiceRegistrar, srv MeterInfoServer) {
	// If the following call pancis, it indicates UnimplementedMeterInfoServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&MeterInfo_ServiceDesc, srv)
}

func _MeterInfo_DescribeMeterReading_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeMeterReadingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MeterInfoServer).DescribeMeterReading(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MeterInfo_DescribeMeterReading_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MeterInfoServer).DescribeMeterReading(ctx, req.(*DescribeMeterReadingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MeterInfo_ServiceDesc is the grpc.ServiceDesc for MeterInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MeterInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MeterInfo",
	HandlerType: (*MeterInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeMeterReading",
			Handler:    _MeterInfo_DescribeMeterReading_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/meter.proto",
}