// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.3
// source: traits/air_temperature.proto

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
	AirTemperatureApi_GetAirTemperature_FullMethodName    = "/smartcore.traits.AirTemperatureApi/GetAirTemperature"
	AirTemperatureApi_UpdateAirTemperature_FullMethodName = "/smartcore.traits.AirTemperatureApi/UpdateAirTemperature"
	AirTemperatureApi_PullAirTemperature_FullMethodName   = "/smartcore.traits.AirTemperatureApi/PullAirTemperature"
)

// AirTemperatureApiClient is the client API for AirTemperatureApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// Device trait allowing query and control of the air temperature for a space. Like a thermostat and associated HVAC
// system.
type AirTemperatureApiClient interface {
	// Get the current state of the device
	GetAirTemperature(ctx context.Context, in *GetAirTemperatureRequest, opts ...grpc.CallOption) (*AirTemperature, error)
	// Update the target state for the device. the returned state may not be complete but will indicate at least the
	// current values for any set fields as part of the request.
	UpdateAirTemperature(ctx context.Context, in *UpdateAirTemperatureRequest, opts ...grpc.CallOption) (*AirTemperature, error)
	// Request notification of change to the device state. The messages in the response stream may not be complete
	// but will indicate the changes as they occur. They should be merged with the full state as fetched by the
	// GetAirTemperature method.
	PullAirTemperature(ctx context.Context, in *PullAirTemperatureRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullAirTemperatureResponse], error)
}

type airTemperatureApiClient struct {
	cc grpc.ClientConnInterface
}

func NewAirTemperatureApiClient(cc grpc.ClientConnInterface) AirTemperatureApiClient {
	return &airTemperatureApiClient{cc}
}

func (c *airTemperatureApiClient) GetAirTemperature(ctx context.Context, in *GetAirTemperatureRequest, opts ...grpc.CallOption) (*AirTemperature, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AirTemperature)
	err := c.cc.Invoke(ctx, AirTemperatureApi_GetAirTemperature_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *airTemperatureApiClient) UpdateAirTemperature(ctx context.Context, in *UpdateAirTemperatureRequest, opts ...grpc.CallOption) (*AirTemperature, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AirTemperature)
	err := c.cc.Invoke(ctx, AirTemperatureApi_UpdateAirTemperature_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *airTemperatureApiClient) PullAirTemperature(ctx context.Context, in *PullAirTemperatureRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullAirTemperatureResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &AirTemperatureApi_ServiceDesc.Streams[0], AirTemperatureApi_PullAirTemperature_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PullAirTemperatureRequest, PullAirTemperatureResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type AirTemperatureApi_PullAirTemperatureClient = grpc.ServerStreamingClient[PullAirTemperatureResponse]

// AirTemperatureApiServer is the server API for AirTemperatureApi service.
// All implementations must embed UnimplementedAirTemperatureApiServer
// for forward compatibility.
//
// Device trait allowing query and control of the air temperature for a space. Like a thermostat and associated HVAC
// system.
type AirTemperatureApiServer interface {
	// Get the current state of the device
	GetAirTemperature(context.Context, *GetAirTemperatureRequest) (*AirTemperature, error)
	// Update the target state for the device. the returned state may not be complete but will indicate at least the
	// current values for any set fields as part of the request.
	UpdateAirTemperature(context.Context, *UpdateAirTemperatureRequest) (*AirTemperature, error)
	// Request notification of change to the device state. The messages in the response stream may not be complete
	// but will indicate the changes as they occur. They should be merged with the full state as fetched by the
	// GetAirTemperature method.
	PullAirTemperature(*PullAirTemperatureRequest, grpc.ServerStreamingServer[PullAirTemperatureResponse]) error
	mustEmbedUnimplementedAirTemperatureApiServer()
}

// UnimplementedAirTemperatureApiServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedAirTemperatureApiServer struct{}

func (UnimplementedAirTemperatureApiServer) GetAirTemperature(context.Context, *GetAirTemperatureRequest) (*AirTemperature, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAirTemperature not implemented")
}
func (UnimplementedAirTemperatureApiServer) UpdateAirTemperature(context.Context, *UpdateAirTemperatureRequest) (*AirTemperature, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAirTemperature not implemented")
}
func (UnimplementedAirTemperatureApiServer) PullAirTemperature(*PullAirTemperatureRequest, grpc.ServerStreamingServer[PullAirTemperatureResponse]) error {
	return status.Errorf(codes.Unimplemented, "method PullAirTemperature not implemented")
}
func (UnimplementedAirTemperatureApiServer) mustEmbedUnimplementedAirTemperatureApiServer() {}
func (UnimplementedAirTemperatureApiServer) testEmbeddedByValue()                           {}

// UnsafeAirTemperatureApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AirTemperatureApiServer will
// result in compilation errors.
type UnsafeAirTemperatureApiServer interface {
	mustEmbedUnimplementedAirTemperatureApiServer()
}

func RegisterAirTemperatureApiServer(s grpc.ServiceRegistrar, srv AirTemperatureApiServer) {
	// If the following call pancis, it indicates UnimplementedAirTemperatureApiServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&AirTemperatureApi_ServiceDesc, srv)
}

func _AirTemperatureApi_GetAirTemperature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAirTemperatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AirTemperatureApiServer).GetAirTemperature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AirTemperatureApi_GetAirTemperature_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AirTemperatureApiServer).GetAirTemperature(ctx, req.(*GetAirTemperatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AirTemperatureApi_UpdateAirTemperature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAirTemperatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AirTemperatureApiServer).UpdateAirTemperature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AirTemperatureApi_UpdateAirTemperature_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AirTemperatureApiServer).UpdateAirTemperature(ctx, req.(*UpdateAirTemperatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AirTemperatureApi_PullAirTemperature_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullAirTemperatureRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(AirTemperatureApiServer).PullAirTemperature(m, &grpc.GenericServerStream[PullAirTemperatureRequest, PullAirTemperatureResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type AirTemperatureApi_PullAirTemperatureServer = grpc.ServerStreamingServer[PullAirTemperatureResponse]

// AirTemperatureApi_ServiceDesc is the grpc.ServiceDesc for AirTemperatureApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AirTemperatureApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.AirTemperatureApi",
	HandlerType: (*AirTemperatureApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAirTemperature",
			Handler:    _AirTemperatureApi_GetAirTemperature_Handler,
		},
		{
			MethodName: "UpdateAirTemperature",
			Handler:    _AirTemperatureApi_UpdateAirTemperature_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullAirTemperature",
			Handler:       _AirTemperatureApi_PullAirTemperature_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/air_temperature.proto",
}

const (
	AirTemperatureInfo_DescribeAirTemperature_FullMethodName = "/smartcore.traits.AirTemperatureInfo/DescribeAirTemperature"
)

// AirTemperatureInfoClient is the client API for AirTemperatureInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// Describes the capabilities of a specific named device with respect to this trait.
type AirTemperatureInfoClient interface {
	// Get information about how a named device implements AirTemperature features
	DescribeAirTemperature(ctx context.Context, in *DescribeAirTemperatureRequest, opts ...grpc.CallOption) (*AirTemperatureSupport, error)
}

type airTemperatureInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewAirTemperatureInfoClient(cc grpc.ClientConnInterface) AirTemperatureInfoClient {
	return &airTemperatureInfoClient{cc}
}

func (c *airTemperatureInfoClient) DescribeAirTemperature(ctx context.Context, in *DescribeAirTemperatureRequest, opts ...grpc.CallOption) (*AirTemperatureSupport, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AirTemperatureSupport)
	err := c.cc.Invoke(ctx, AirTemperatureInfo_DescribeAirTemperature_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AirTemperatureInfoServer is the server API for AirTemperatureInfo service.
// All implementations must embed UnimplementedAirTemperatureInfoServer
// for forward compatibility.
//
// Describes the capabilities of a specific named device with respect to this trait.
type AirTemperatureInfoServer interface {
	// Get information about how a named device implements AirTemperature features
	DescribeAirTemperature(context.Context, *DescribeAirTemperatureRequest) (*AirTemperatureSupport, error)
	mustEmbedUnimplementedAirTemperatureInfoServer()
}

// UnimplementedAirTemperatureInfoServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedAirTemperatureInfoServer struct{}

func (UnimplementedAirTemperatureInfoServer) DescribeAirTemperature(context.Context, *DescribeAirTemperatureRequest) (*AirTemperatureSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeAirTemperature not implemented")
}
func (UnimplementedAirTemperatureInfoServer) mustEmbedUnimplementedAirTemperatureInfoServer() {}
func (UnimplementedAirTemperatureInfoServer) testEmbeddedByValue()                            {}

// UnsafeAirTemperatureInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AirTemperatureInfoServer will
// result in compilation errors.
type UnsafeAirTemperatureInfoServer interface {
	mustEmbedUnimplementedAirTemperatureInfoServer()
}

func RegisterAirTemperatureInfoServer(s grpc.ServiceRegistrar, srv AirTemperatureInfoServer) {
	// If the following call pancis, it indicates UnimplementedAirTemperatureInfoServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&AirTemperatureInfo_ServiceDesc, srv)
}

func _AirTemperatureInfo_DescribeAirTemperature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeAirTemperatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AirTemperatureInfoServer).DescribeAirTemperature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AirTemperatureInfo_DescribeAirTemperature_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AirTemperatureInfoServer).DescribeAirTemperature(ctx, req.(*DescribeAirTemperatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AirTemperatureInfo_ServiceDesc is the grpc.ServiceDesc for AirTemperatureInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AirTemperatureInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.AirTemperatureInfo",
	HandlerType: (*AirTemperatureInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeAirTemperature",
			Handler:    _AirTemperatureInfo_DescribeAirTemperature_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/air_temperature.proto",
}
