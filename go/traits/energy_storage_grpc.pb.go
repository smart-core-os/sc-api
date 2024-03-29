// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.2
// source: traits/energy_storage.proto

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
	EnergyStorageApi_GetEnergyLevel_FullMethodName  = "/smartcore.traits.EnergyStorageApi/GetEnergyLevel"
	EnergyStorageApi_PullEnergyLevel_FullMethodName = "/smartcore.traits.EnergyStorageApi/PullEnergyLevel"
	EnergyStorageApi_Charge_FullMethodName          = "/smartcore.traits.EnergyStorageApi/Charge"
)

// EnergyStorageApiClient is the client API for EnergyStorageApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EnergyStorageApiClient interface {
	// GetEnergyLevel retrieves the current charge level and potential charge level for the device.
	GetEnergyLevel(ctx context.Context, in *GetEnergyLevelRequest, opts ...grpc.CallOption) (*EnergyLevel, error)
	// PullEnergyLevel subscribes to changes in energy level.
	PullEnergyLevel(ctx context.Context, in *PullEnergyLevelRequest, opts ...grpc.CallOption) (EnergyStorageApi_PullEnergyLevelClient, error)
	// Charge starts or stops the device charging.
	// If the device is not plugged in then this will return a FAILED_PRECONDITION error.
	// Devices may start or stop charging on their own.
	Charge(ctx context.Context, in *ChargeRequest, opts ...grpc.CallOption) (*ChargeResponse, error)
}

type energyStorageApiClient struct {
	cc grpc.ClientConnInterface
}

func NewEnergyStorageApiClient(cc grpc.ClientConnInterface) EnergyStorageApiClient {
	return &energyStorageApiClient{cc}
}

func (c *energyStorageApiClient) GetEnergyLevel(ctx context.Context, in *GetEnergyLevelRequest, opts ...grpc.CallOption) (*EnergyLevel, error) {
	out := new(EnergyLevel)
	err := c.cc.Invoke(ctx, EnergyStorageApi_GetEnergyLevel_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *energyStorageApiClient) PullEnergyLevel(ctx context.Context, in *PullEnergyLevelRequest, opts ...grpc.CallOption) (EnergyStorageApi_PullEnergyLevelClient, error) {
	stream, err := c.cc.NewStream(ctx, &EnergyStorageApi_ServiceDesc.Streams[0], EnergyStorageApi_PullEnergyLevel_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &energyStorageApiPullEnergyLevelClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type EnergyStorageApi_PullEnergyLevelClient interface {
	Recv() (*PullEnergyLevelResponse, error)
	grpc.ClientStream
}

type energyStorageApiPullEnergyLevelClient struct {
	grpc.ClientStream
}

func (x *energyStorageApiPullEnergyLevelClient) Recv() (*PullEnergyLevelResponse, error) {
	m := new(PullEnergyLevelResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *energyStorageApiClient) Charge(ctx context.Context, in *ChargeRequest, opts ...grpc.CallOption) (*ChargeResponse, error) {
	out := new(ChargeResponse)
	err := c.cc.Invoke(ctx, EnergyStorageApi_Charge_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EnergyStorageApiServer is the server API for EnergyStorageApi service.
// All implementations must embed UnimplementedEnergyStorageApiServer
// for forward compatibility
type EnergyStorageApiServer interface {
	// GetEnergyLevel retrieves the current charge level and potential charge level for the device.
	GetEnergyLevel(context.Context, *GetEnergyLevelRequest) (*EnergyLevel, error)
	// PullEnergyLevel subscribes to changes in energy level.
	PullEnergyLevel(*PullEnergyLevelRequest, EnergyStorageApi_PullEnergyLevelServer) error
	// Charge starts or stops the device charging.
	// If the device is not plugged in then this will return a FAILED_PRECONDITION error.
	// Devices may start or stop charging on their own.
	Charge(context.Context, *ChargeRequest) (*ChargeResponse, error)
	mustEmbedUnimplementedEnergyStorageApiServer()
}

// UnimplementedEnergyStorageApiServer must be embedded to have forward compatible implementations.
type UnimplementedEnergyStorageApiServer struct {
}

func (UnimplementedEnergyStorageApiServer) GetEnergyLevel(context.Context, *GetEnergyLevelRequest) (*EnergyLevel, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEnergyLevel not implemented")
}
func (UnimplementedEnergyStorageApiServer) PullEnergyLevel(*PullEnergyLevelRequest, EnergyStorageApi_PullEnergyLevelServer) error {
	return status.Errorf(codes.Unimplemented, "method PullEnergyLevel not implemented")
}
func (UnimplementedEnergyStorageApiServer) Charge(context.Context, *ChargeRequest) (*ChargeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Charge not implemented")
}
func (UnimplementedEnergyStorageApiServer) mustEmbedUnimplementedEnergyStorageApiServer() {}

// UnsafeEnergyStorageApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EnergyStorageApiServer will
// result in compilation errors.
type UnsafeEnergyStorageApiServer interface {
	mustEmbedUnimplementedEnergyStorageApiServer()
}

func RegisterEnergyStorageApiServer(s grpc.ServiceRegistrar, srv EnergyStorageApiServer) {
	s.RegisterService(&EnergyStorageApi_ServiceDesc, srv)
}

func _EnergyStorageApi_GetEnergyLevel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEnergyLevelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnergyStorageApiServer).GetEnergyLevel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EnergyStorageApi_GetEnergyLevel_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnergyStorageApiServer).GetEnergyLevel(ctx, req.(*GetEnergyLevelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnergyStorageApi_PullEnergyLevel_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullEnergyLevelRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(EnergyStorageApiServer).PullEnergyLevel(m, &energyStorageApiPullEnergyLevelServer{stream})
}

type EnergyStorageApi_PullEnergyLevelServer interface {
	Send(*PullEnergyLevelResponse) error
	grpc.ServerStream
}

type energyStorageApiPullEnergyLevelServer struct {
	grpc.ServerStream
}

func (x *energyStorageApiPullEnergyLevelServer) Send(m *PullEnergyLevelResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _EnergyStorageApi_Charge_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ChargeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnergyStorageApiServer).Charge(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EnergyStorageApi_Charge_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnergyStorageApiServer).Charge(ctx, req.(*ChargeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EnergyStorageApi_ServiceDesc is the grpc.ServiceDesc for EnergyStorageApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EnergyStorageApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.EnergyStorageApi",
	HandlerType: (*EnergyStorageApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEnergyLevel",
			Handler:    _EnergyStorageApi_GetEnergyLevel_Handler,
		},
		{
			MethodName: "Charge",
			Handler:    _EnergyStorageApi_Charge_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullEnergyLevel",
			Handler:       _EnergyStorageApi_PullEnergyLevel_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/energy_storage.proto",
}

const (
	EnergyStorageInfo_DescribeEnergyLevel_FullMethodName = "/smartcore.traits.EnergyStorageInfo/DescribeEnergyLevel"
)

// EnergyStorageInfoClient is the client API for EnergyStorageInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EnergyStorageInfoClient interface {
	// Get information about how a named device implements EnergyLevel features
	DescribeEnergyLevel(ctx context.Context, in *DescribeEnergyLevelRequest, opts ...grpc.CallOption) (*EnergyLevelSupport, error)
}

type energyStorageInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewEnergyStorageInfoClient(cc grpc.ClientConnInterface) EnergyStorageInfoClient {
	return &energyStorageInfoClient{cc}
}

func (c *energyStorageInfoClient) DescribeEnergyLevel(ctx context.Context, in *DescribeEnergyLevelRequest, opts ...grpc.CallOption) (*EnergyLevelSupport, error) {
	out := new(EnergyLevelSupport)
	err := c.cc.Invoke(ctx, EnergyStorageInfo_DescribeEnergyLevel_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EnergyStorageInfoServer is the server API for EnergyStorageInfo service.
// All implementations must embed UnimplementedEnergyStorageInfoServer
// for forward compatibility
type EnergyStorageInfoServer interface {
	// Get information about how a named device implements EnergyLevel features
	DescribeEnergyLevel(context.Context, *DescribeEnergyLevelRequest) (*EnergyLevelSupport, error)
	mustEmbedUnimplementedEnergyStorageInfoServer()
}

// UnimplementedEnergyStorageInfoServer must be embedded to have forward compatible implementations.
type UnimplementedEnergyStorageInfoServer struct {
}

func (UnimplementedEnergyStorageInfoServer) DescribeEnergyLevel(context.Context, *DescribeEnergyLevelRequest) (*EnergyLevelSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeEnergyLevel not implemented")
}
func (UnimplementedEnergyStorageInfoServer) mustEmbedUnimplementedEnergyStorageInfoServer() {}

// UnsafeEnergyStorageInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EnergyStorageInfoServer will
// result in compilation errors.
type UnsafeEnergyStorageInfoServer interface {
	mustEmbedUnimplementedEnergyStorageInfoServer()
}

func RegisterEnergyStorageInfoServer(s grpc.ServiceRegistrar, srv EnergyStorageInfoServer) {
	s.RegisterService(&EnergyStorageInfo_ServiceDesc, srv)
}

func _EnergyStorageInfo_DescribeEnergyLevel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeEnergyLevelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnergyStorageInfoServer).DescribeEnergyLevel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EnergyStorageInfo_DescribeEnergyLevel_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnergyStorageInfoServer).DescribeEnergyLevel(ctx, req.(*DescribeEnergyLevelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EnergyStorageInfo_ServiceDesc is the grpc.ServiceDesc for EnergyStorageInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EnergyStorageInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.EnergyStorageInfo",
	HandlerType: (*EnergyStorageInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeEnergyLevel",
			Handler:    _EnergyStorageInfo_DescribeEnergyLevel_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/energy_storage.proto",
}
