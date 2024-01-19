// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.2
// source: traits/occupancy_sensor.proto

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
	OccupancySensorApi_GetOccupancy_FullMethodName  = "/smartcore.traits.OccupancySensorApi/GetOccupancy"
	OccupancySensorApi_PullOccupancy_FullMethodName = "/smartcore.traits.OccupancySensorApi/PullOccupancy"
)

// OccupancySensorApiClient is the client API for OccupancySensorApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OccupancySensorApiClient interface {
	// Get the current motion state for the device.
	GetOccupancy(ctx context.Context, in *GetOccupancyRequest, opts ...grpc.CallOption) (*Occupancy, error)
	// subscribe to changes in the motion state for the device.
	PullOccupancy(ctx context.Context, in *PullOccupancyRequest, opts ...grpc.CallOption) (OccupancySensorApi_PullOccupancyClient, error)
}

type occupancySensorApiClient struct {
	cc grpc.ClientConnInterface
}

func NewOccupancySensorApiClient(cc grpc.ClientConnInterface) OccupancySensorApiClient {
	return &occupancySensorApiClient{cc}
}

func (c *occupancySensorApiClient) GetOccupancy(ctx context.Context, in *GetOccupancyRequest, opts ...grpc.CallOption) (*Occupancy, error) {
	out := new(Occupancy)
	err := c.cc.Invoke(ctx, OccupancySensorApi_GetOccupancy_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *occupancySensorApiClient) PullOccupancy(ctx context.Context, in *PullOccupancyRequest, opts ...grpc.CallOption) (OccupancySensorApi_PullOccupancyClient, error) {
	stream, err := c.cc.NewStream(ctx, &OccupancySensorApi_ServiceDesc.Streams[0], OccupancySensorApi_PullOccupancy_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &occupancySensorApiPullOccupancyClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OccupancySensorApi_PullOccupancyClient interface {
	Recv() (*PullOccupancyResponse, error)
	grpc.ClientStream
}

type occupancySensorApiPullOccupancyClient struct {
	grpc.ClientStream
}

func (x *occupancySensorApiPullOccupancyClient) Recv() (*PullOccupancyResponse, error) {
	m := new(PullOccupancyResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OccupancySensorApiServer is the server API for OccupancySensorApi service.
// All implementations must embed UnimplementedOccupancySensorApiServer
// for forward compatibility
type OccupancySensorApiServer interface {
	// Get the current motion state for the device.
	GetOccupancy(context.Context, *GetOccupancyRequest) (*Occupancy, error)
	// subscribe to changes in the motion state for the device.
	PullOccupancy(*PullOccupancyRequest, OccupancySensorApi_PullOccupancyServer) error
	mustEmbedUnimplementedOccupancySensorApiServer()
}

// UnimplementedOccupancySensorApiServer must be embedded to have forward compatible implementations.
type UnimplementedOccupancySensorApiServer struct {
}

func (UnimplementedOccupancySensorApiServer) GetOccupancy(context.Context, *GetOccupancyRequest) (*Occupancy, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOccupancy not implemented")
}
func (UnimplementedOccupancySensorApiServer) PullOccupancy(*PullOccupancyRequest, OccupancySensorApi_PullOccupancyServer) error {
	return status.Errorf(codes.Unimplemented, "method PullOccupancy not implemented")
}
func (UnimplementedOccupancySensorApiServer) mustEmbedUnimplementedOccupancySensorApiServer() {}

// UnsafeOccupancySensorApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OccupancySensorApiServer will
// result in compilation errors.
type UnsafeOccupancySensorApiServer interface {
	mustEmbedUnimplementedOccupancySensorApiServer()
}

func RegisterOccupancySensorApiServer(s grpc.ServiceRegistrar, srv OccupancySensorApiServer) {
	s.RegisterService(&OccupancySensorApi_ServiceDesc, srv)
}

func _OccupancySensorApi_GetOccupancy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOccupancyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OccupancySensorApiServer).GetOccupancy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OccupancySensorApi_GetOccupancy_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OccupancySensorApiServer).GetOccupancy(ctx, req.(*GetOccupancyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OccupancySensorApi_PullOccupancy_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullOccupancyRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OccupancySensorApiServer).PullOccupancy(m, &occupancySensorApiPullOccupancyServer{stream})
}

type OccupancySensorApi_PullOccupancyServer interface {
	Send(*PullOccupancyResponse) error
	grpc.ServerStream
}

type occupancySensorApiPullOccupancyServer struct {
	grpc.ServerStream
}

func (x *occupancySensorApiPullOccupancyServer) Send(m *PullOccupancyResponse) error {
	return x.ServerStream.SendMsg(m)
}

// OccupancySensorApi_ServiceDesc is the grpc.ServiceDesc for OccupancySensorApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OccupancySensorApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OccupancySensorApi",
	HandlerType: (*OccupancySensorApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOccupancy",
			Handler:    _OccupancySensorApi_GetOccupancy_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullOccupancy",
			Handler:       _OccupancySensorApi_PullOccupancy_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/occupancy_sensor.proto",
}

const (
	OccupancySensorInfo_DescribeOccupancy_FullMethodName = "/smartcore.traits.OccupancySensorInfo/DescribeOccupancy"
)

// OccupancySensorInfoClient is the client API for OccupancySensorInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OccupancySensorInfoClient interface {
	// Get information about how a named device implements Occupancy measurements
	DescribeOccupancy(ctx context.Context, in *DescribeOccupancyRequest, opts ...grpc.CallOption) (*OccupancySupport, error)
}

type occupancySensorInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewOccupancySensorInfoClient(cc grpc.ClientConnInterface) OccupancySensorInfoClient {
	return &occupancySensorInfoClient{cc}
}

func (c *occupancySensorInfoClient) DescribeOccupancy(ctx context.Context, in *DescribeOccupancyRequest, opts ...grpc.CallOption) (*OccupancySupport, error) {
	out := new(OccupancySupport)
	err := c.cc.Invoke(ctx, OccupancySensorInfo_DescribeOccupancy_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OccupancySensorInfoServer is the server API for OccupancySensorInfo service.
// All implementations must embed UnimplementedOccupancySensorInfoServer
// for forward compatibility
type OccupancySensorInfoServer interface {
	// Get information about how a named device implements Occupancy measurements
	DescribeOccupancy(context.Context, *DescribeOccupancyRequest) (*OccupancySupport, error)
	mustEmbedUnimplementedOccupancySensorInfoServer()
}

// UnimplementedOccupancySensorInfoServer must be embedded to have forward compatible implementations.
type UnimplementedOccupancySensorInfoServer struct {
}

func (UnimplementedOccupancySensorInfoServer) DescribeOccupancy(context.Context, *DescribeOccupancyRequest) (*OccupancySupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeOccupancy not implemented")
}
func (UnimplementedOccupancySensorInfoServer) mustEmbedUnimplementedOccupancySensorInfoServer() {}

// UnsafeOccupancySensorInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OccupancySensorInfoServer will
// result in compilation errors.
type UnsafeOccupancySensorInfoServer interface {
	mustEmbedUnimplementedOccupancySensorInfoServer()
}

func RegisterOccupancySensorInfoServer(s grpc.ServiceRegistrar, srv OccupancySensorInfoServer) {
	s.RegisterService(&OccupancySensorInfo_ServiceDesc, srv)
}

func _OccupancySensorInfo_DescribeOccupancy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeOccupancyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OccupancySensorInfoServer).DescribeOccupancy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: OccupancySensorInfo_DescribeOccupancy_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OccupancySensorInfoServer).DescribeOccupancy(ctx, req.(*DescribeOccupancyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OccupancySensorInfo_ServiceDesc is the grpc.ServiceDesc for OccupancySensorInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OccupancySensorInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OccupancySensorInfo",
	HandlerType: (*OccupancySensorInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeOccupancy",
			Handler:    _OccupancySensorInfo_DescribeOccupancy_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/occupancy_sensor.proto",
}
