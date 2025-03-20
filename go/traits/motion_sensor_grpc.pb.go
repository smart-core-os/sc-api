// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.3
// source: traits/motion_sensor.proto

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
	MotionSensorApi_GetMotionDetection_FullMethodName   = "/smartcore.traits.MotionSensorApi/GetMotionDetection"
	MotionSensorApi_PullMotionDetections_FullMethodName = "/smartcore.traits.MotionSensorApi/PullMotionDetections"
)

// MotionSensorApiClient is the client API for MotionSensorApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// Represents a sensor that detects motion. Note that the absence of motion does not directly imply an unoccupied space.
type MotionSensorApiClient interface {
	// Get the current motion state for the device.
	GetMotionDetection(ctx context.Context, in *GetMotionDetectionRequest, opts ...grpc.CallOption) (*MotionDetection, error)
	// subscribe to changes in the motion state for the device.
	PullMotionDetections(ctx context.Context, in *PullMotionDetectionRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullMotionDetectionResponse], error)
}

type motionSensorApiClient struct {
	cc grpc.ClientConnInterface
}

func NewMotionSensorApiClient(cc grpc.ClientConnInterface) MotionSensorApiClient {
	return &motionSensorApiClient{cc}
}

func (c *motionSensorApiClient) GetMotionDetection(ctx context.Context, in *GetMotionDetectionRequest, opts ...grpc.CallOption) (*MotionDetection, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MotionDetection)
	err := c.cc.Invoke(ctx, MotionSensorApi_GetMotionDetection_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *motionSensorApiClient) PullMotionDetections(ctx context.Context, in *PullMotionDetectionRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullMotionDetectionResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &MotionSensorApi_ServiceDesc.Streams[0], MotionSensorApi_PullMotionDetections_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PullMotionDetectionRequest, PullMotionDetectionResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type MotionSensorApi_PullMotionDetectionsClient = grpc.ServerStreamingClient[PullMotionDetectionResponse]

// MotionSensorApiServer is the server API for MotionSensorApi service.
// All implementations must embed UnimplementedMotionSensorApiServer
// for forward compatibility.
//
// Represents a sensor that detects motion. Note that the absence of motion does not directly imply an unoccupied space.
type MotionSensorApiServer interface {
	// Get the current motion state for the device.
	GetMotionDetection(context.Context, *GetMotionDetectionRequest) (*MotionDetection, error)
	// subscribe to changes in the motion state for the device.
	PullMotionDetections(*PullMotionDetectionRequest, grpc.ServerStreamingServer[PullMotionDetectionResponse]) error
	mustEmbedUnimplementedMotionSensorApiServer()
}

// UnimplementedMotionSensorApiServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedMotionSensorApiServer struct{}

func (UnimplementedMotionSensorApiServer) GetMotionDetection(context.Context, *GetMotionDetectionRequest) (*MotionDetection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMotionDetection not implemented")
}
func (UnimplementedMotionSensorApiServer) PullMotionDetections(*PullMotionDetectionRequest, grpc.ServerStreamingServer[PullMotionDetectionResponse]) error {
	return status.Errorf(codes.Unimplemented, "method PullMotionDetections not implemented")
}
func (UnimplementedMotionSensorApiServer) mustEmbedUnimplementedMotionSensorApiServer() {}
func (UnimplementedMotionSensorApiServer) testEmbeddedByValue()                         {}

// UnsafeMotionSensorApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MotionSensorApiServer will
// result in compilation errors.
type UnsafeMotionSensorApiServer interface {
	mustEmbedUnimplementedMotionSensorApiServer()
}

func RegisterMotionSensorApiServer(s grpc.ServiceRegistrar, srv MotionSensorApiServer) {
	// If the following call pancis, it indicates UnimplementedMotionSensorApiServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&MotionSensorApi_ServiceDesc, srv)
}

func _MotionSensorApi_GetMotionDetection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMotionDetectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MotionSensorApiServer).GetMotionDetection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MotionSensorApi_GetMotionDetection_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MotionSensorApiServer).GetMotionDetection(ctx, req.(*GetMotionDetectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MotionSensorApi_PullMotionDetections_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullMotionDetectionRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MotionSensorApiServer).PullMotionDetections(m, &grpc.GenericServerStream[PullMotionDetectionRequest, PullMotionDetectionResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type MotionSensorApi_PullMotionDetectionsServer = grpc.ServerStreamingServer[PullMotionDetectionResponse]

// MotionSensorApi_ServiceDesc is the grpc.ServiceDesc for MotionSensorApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MotionSensorApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MotionSensorApi",
	HandlerType: (*MotionSensorApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMotionDetection",
			Handler:    _MotionSensorApi_GetMotionDetection_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullMotionDetections",
			Handler:       _MotionSensorApi_PullMotionDetections_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/motion_sensor.proto",
}

const (
	MotionSensorSensorInfo_DescribeMotionDetection_FullMethodName = "/smartcore.traits.MotionSensorSensorInfo/DescribeMotionDetection"
)

// MotionSensorSensorInfoClient is the client API for MotionSensorSensorInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// Describes the capabilities of a specific named device with respect to this trait.
type MotionSensorSensorInfoClient interface {
	// Get information about how a named device implements MotionDetection measurements
	DescribeMotionDetection(ctx context.Context, in *DescribeMotionDetectionRequest, opts ...grpc.CallOption) (*MotionDetectionSupport, error)
}

type motionSensorSensorInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewMotionSensorSensorInfoClient(cc grpc.ClientConnInterface) MotionSensorSensorInfoClient {
	return &motionSensorSensorInfoClient{cc}
}

func (c *motionSensorSensorInfoClient) DescribeMotionDetection(ctx context.Context, in *DescribeMotionDetectionRequest, opts ...grpc.CallOption) (*MotionDetectionSupport, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MotionDetectionSupport)
	err := c.cc.Invoke(ctx, MotionSensorSensorInfo_DescribeMotionDetection_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MotionSensorSensorInfoServer is the server API for MotionSensorSensorInfo service.
// All implementations must embed UnimplementedMotionSensorSensorInfoServer
// for forward compatibility.
//
// Describes the capabilities of a specific named device with respect to this trait.
type MotionSensorSensorInfoServer interface {
	// Get information about how a named device implements MotionDetection measurements
	DescribeMotionDetection(context.Context, *DescribeMotionDetectionRequest) (*MotionDetectionSupport, error)
	mustEmbedUnimplementedMotionSensorSensorInfoServer()
}

// UnimplementedMotionSensorSensorInfoServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedMotionSensorSensorInfoServer struct{}

func (UnimplementedMotionSensorSensorInfoServer) DescribeMotionDetection(context.Context, *DescribeMotionDetectionRequest) (*MotionDetectionSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeMotionDetection not implemented")
}
func (UnimplementedMotionSensorSensorInfoServer) mustEmbedUnimplementedMotionSensorSensorInfoServer() {
}
func (UnimplementedMotionSensorSensorInfoServer) testEmbeddedByValue() {}

// UnsafeMotionSensorSensorInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MotionSensorSensorInfoServer will
// result in compilation errors.
type UnsafeMotionSensorSensorInfoServer interface {
	mustEmbedUnimplementedMotionSensorSensorInfoServer()
}

func RegisterMotionSensorSensorInfoServer(s grpc.ServiceRegistrar, srv MotionSensorSensorInfoServer) {
	// If the following call pancis, it indicates UnimplementedMotionSensorSensorInfoServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&MotionSensorSensorInfo_ServiceDesc, srv)
}

func _MotionSensorSensorInfo_DescribeMotionDetection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeMotionDetectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MotionSensorSensorInfoServer).DescribeMotionDetection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MotionSensorSensorInfo_DescribeMotionDetection_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MotionSensorSensorInfoServer).DescribeMotionDetection(ctx, req.(*DescribeMotionDetectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MotionSensorSensorInfo_ServiceDesc is the grpc.ServiceDesc for MotionSensorSensorInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MotionSensorSensorInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MotionSensorSensorInfo",
	HandlerType: (*MotionSensorSensorInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeMotionDetection",
			Handler:    _MotionSensorSensorInfo_DescribeMotionDetection_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/motion_sensor.proto",
}
