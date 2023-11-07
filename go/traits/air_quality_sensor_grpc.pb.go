// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: traits/air_quality_sensor.proto

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
	AirQualitySensorApi_GetAirQuality_FullMethodName  = "/smartcore.traits.AirQualitySensorApi/GetAirQuality"
	AirQualitySensorApi_PullAirQuality_FullMethodName = "/smartcore.traits.AirQualitySensorApi/PullAirQuality"
)

// AirQualitySensorApiClient is the client API for AirQualitySensorApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AirQualitySensorApiClient interface {
	// Get the current state of all reading this device supports
	GetAirQuality(ctx context.Context, in *GetAirQualityRequest, opts ...grpc.CallOption) (*AirQuality, error)
	// Be notified of changes to any reading
	PullAirQuality(ctx context.Context, in *PullAirQualityRequest, opts ...grpc.CallOption) (AirQualitySensorApi_PullAirQualityClient, error)
}

type airQualitySensorApiClient struct {
	cc grpc.ClientConnInterface
}

func NewAirQualitySensorApiClient(cc grpc.ClientConnInterface) AirQualitySensorApiClient {
	return &airQualitySensorApiClient{cc}
}

func (c *airQualitySensorApiClient) GetAirQuality(ctx context.Context, in *GetAirQualityRequest, opts ...grpc.CallOption) (*AirQuality, error) {
	out := new(AirQuality)
	err := c.cc.Invoke(ctx, AirQualitySensorApi_GetAirQuality_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *airQualitySensorApiClient) PullAirQuality(ctx context.Context, in *PullAirQualityRequest, opts ...grpc.CallOption) (AirQualitySensorApi_PullAirQualityClient, error) {
	stream, err := c.cc.NewStream(ctx, &AirQualitySensorApi_ServiceDesc.Streams[0], AirQualitySensorApi_PullAirQuality_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &airQualitySensorApiPullAirQualityClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type AirQualitySensorApi_PullAirQualityClient interface {
	Recv() (*PullAirQualityResponse, error)
	grpc.ClientStream
}

type airQualitySensorApiPullAirQualityClient struct {
	grpc.ClientStream
}

func (x *airQualitySensorApiPullAirQualityClient) Recv() (*PullAirQualityResponse, error) {
	m := new(PullAirQualityResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// AirQualitySensorApiServer is the server API for AirQualitySensorApi service.
// All implementations must embed UnimplementedAirQualitySensorApiServer
// for forward compatibility
type AirQualitySensorApiServer interface {
	// Get the current state of all reading this device supports
	GetAirQuality(context.Context, *GetAirQualityRequest) (*AirQuality, error)
	// Be notified of changes to any reading
	PullAirQuality(*PullAirQualityRequest, AirQualitySensorApi_PullAirQualityServer) error
	mustEmbedUnimplementedAirQualitySensorApiServer()
}

// UnimplementedAirQualitySensorApiServer must be embedded to have forward compatible implementations.
type UnimplementedAirQualitySensorApiServer struct {
}

func (UnimplementedAirQualitySensorApiServer) GetAirQuality(context.Context, *GetAirQualityRequest) (*AirQuality, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAirQuality not implemented")
}
func (UnimplementedAirQualitySensorApiServer) PullAirQuality(*PullAirQualityRequest, AirQualitySensorApi_PullAirQualityServer) error {
	return status.Errorf(codes.Unimplemented, "method PullAirQuality not implemented")
}
func (UnimplementedAirQualitySensorApiServer) mustEmbedUnimplementedAirQualitySensorApiServer() {}

// UnsafeAirQualitySensorApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AirQualitySensorApiServer will
// result in compilation errors.
type UnsafeAirQualitySensorApiServer interface {
	mustEmbedUnimplementedAirQualitySensorApiServer()
}

func RegisterAirQualitySensorApiServer(s grpc.ServiceRegistrar, srv AirQualitySensorApiServer) {
	s.RegisterService(&AirQualitySensorApi_ServiceDesc, srv)
}

func _AirQualitySensorApi_GetAirQuality_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAirQualityRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AirQualitySensorApiServer).GetAirQuality(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AirQualitySensorApi_GetAirQuality_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AirQualitySensorApiServer).GetAirQuality(ctx, req.(*GetAirQualityRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AirQualitySensorApi_PullAirQuality_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullAirQualityRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(AirQualitySensorApiServer).PullAirQuality(m, &airQualitySensorApiPullAirQualityServer{stream})
}

type AirQualitySensorApi_PullAirQualityServer interface {
	Send(*PullAirQualityResponse) error
	grpc.ServerStream
}

type airQualitySensorApiPullAirQualityServer struct {
	grpc.ServerStream
}

func (x *airQualitySensorApiPullAirQualityServer) Send(m *PullAirQualityResponse) error {
	return x.ServerStream.SendMsg(m)
}

// AirQualitySensorApi_ServiceDesc is the grpc.ServiceDesc for AirQualitySensorApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AirQualitySensorApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.AirQualitySensorApi",
	HandlerType: (*AirQualitySensorApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAirQuality",
			Handler:    _AirQualitySensorApi_GetAirQuality_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullAirQuality",
			Handler:       _AirQualitySensorApi_PullAirQuality_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/air_quality_sensor.proto",
}

const (
	AirQualitySensorInfo_DescribeAirQuality_FullMethodName = "/smartcore.traits.AirQualitySensorInfo/DescribeAirQuality"
)

// AirQualitySensorInfoClient is the client API for AirQualitySensorInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AirQualitySensorInfoClient interface {
	// Get information about how a named device implements AirQuality measurements
	DescribeAirQuality(ctx context.Context, in *DescribeAirQualityRequest, opts ...grpc.CallOption) (*AirQualitySupport, error)
}

type airQualitySensorInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewAirQualitySensorInfoClient(cc grpc.ClientConnInterface) AirQualitySensorInfoClient {
	return &airQualitySensorInfoClient{cc}
}

func (c *airQualitySensorInfoClient) DescribeAirQuality(ctx context.Context, in *DescribeAirQualityRequest, opts ...grpc.CallOption) (*AirQualitySupport, error) {
	out := new(AirQualitySupport)
	err := c.cc.Invoke(ctx, AirQualitySensorInfo_DescribeAirQuality_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AirQualitySensorInfoServer is the server API for AirQualitySensorInfo service.
// All implementations must embed UnimplementedAirQualitySensorInfoServer
// for forward compatibility
type AirQualitySensorInfoServer interface {
	// Get information about how a named device implements AirQuality measurements
	DescribeAirQuality(context.Context, *DescribeAirQualityRequest) (*AirQualitySupport, error)
	mustEmbedUnimplementedAirQualitySensorInfoServer()
}

// UnimplementedAirQualitySensorInfoServer must be embedded to have forward compatible implementations.
type UnimplementedAirQualitySensorInfoServer struct {
}

func (UnimplementedAirQualitySensorInfoServer) DescribeAirQuality(context.Context, *DescribeAirQualityRequest) (*AirQualitySupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeAirQuality not implemented")
}
func (UnimplementedAirQualitySensorInfoServer) mustEmbedUnimplementedAirQualitySensorInfoServer() {}

// UnsafeAirQualitySensorInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AirQualitySensorInfoServer will
// result in compilation errors.
type UnsafeAirQualitySensorInfoServer interface {
	mustEmbedUnimplementedAirQualitySensorInfoServer()
}

func RegisterAirQualitySensorInfoServer(s grpc.ServiceRegistrar, srv AirQualitySensorInfoServer) {
	s.RegisterService(&AirQualitySensorInfo_ServiceDesc, srv)
}

func _AirQualitySensorInfo_DescribeAirQuality_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeAirQualityRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AirQualitySensorInfoServer).DescribeAirQuality(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AirQualitySensorInfo_DescribeAirQuality_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AirQualitySensorInfoServer).DescribeAirQuality(ctx, req.(*DescribeAirQualityRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AirQualitySensorInfo_ServiceDesc is the grpc.ServiceDesc for AirQualitySensorInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AirQualitySensorInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.AirQualitySensorInfo",
	HandlerType: (*AirQualitySensorInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeAirQuality",
			Handler:    _AirQualitySensorInfo_DescribeAirQuality_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/air_quality_sensor.proto",
}
