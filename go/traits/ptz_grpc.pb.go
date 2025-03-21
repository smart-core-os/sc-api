// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.3
// source: traits/ptz.proto

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
	PtzApi_GetPtz_FullMethodName       = "/smartcore.traits.PtzApi/GetPtz"
	PtzApi_UpdatePtz_FullMethodName    = "/smartcore.traits.PtzApi/UpdatePtz"
	PtzApi_Stop_FullMethodName         = "/smartcore.traits.PtzApi/Stop"
	PtzApi_CreatePreset_FullMethodName = "/smartcore.traits.PtzApi/CreatePreset"
	PtzApi_PullPtz_FullMethodName      = "/smartcore.traits.PtzApi/PullPtz"
)

// PtzApiClient is the client API for PtzApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// Allows interaction with a pan-tilt-zoom device, typically a camera.
type PtzApiClient interface {
	// Set the target state for the device
	GetPtz(ctx context.Context, in *GetPtzRequest, opts ...grpc.CallOption) (*Ptz, error)
	// Set the target state for the device
	UpdatePtz(ctx context.Context, in *UpdatePtzRequest, opts ...grpc.CallOption) (*Ptz, error)
	// Stop the device if it is extending or retracting, returns the current known state after stopping.
	Stop(ctx context.Context, in *StopPtzRequest, opts ...grpc.CallOption) (*Ptz, error)
	// Create a preset for the ptz position. If no preset ptz position is specified then use the current position
	CreatePreset(ctx context.Context, in *CreatePtzPresetRequest, opts ...grpc.CallOption) (*PtzPreset, error)
	// Get notified of changes to the OnOffState of a device
	PullPtz(ctx context.Context, in *PullPtzRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullPtzResponse], error)
}

type ptzApiClient struct {
	cc grpc.ClientConnInterface
}

func NewPtzApiClient(cc grpc.ClientConnInterface) PtzApiClient {
	return &ptzApiClient{cc}
}

func (c *ptzApiClient) GetPtz(ctx context.Context, in *GetPtzRequest, opts ...grpc.CallOption) (*Ptz, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Ptz)
	err := c.cc.Invoke(ctx, PtzApi_GetPtz_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ptzApiClient) UpdatePtz(ctx context.Context, in *UpdatePtzRequest, opts ...grpc.CallOption) (*Ptz, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Ptz)
	err := c.cc.Invoke(ctx, PtzApi_UpdatePtz_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ptzApiClient) Stop(ctx context.Context, in *StopPtzRequest, opts ...grpc.CallOption) (*Ptz, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Ptz)
	err := c.cc.Invoke(ctx, PtzApi_Stop_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ptzApiClient) CreatePreset(ctx context.Context, in *CreatePtzPresetRequest, opts ...grpc.CallOption) (*PtzPreset, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(PtzPreset)
	err := c.cc.Invoke(ctx, PtzApi_CreatePreset_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ptzApiClient) PullPtz(ctx context.Context, in *PullPtzRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullPtzResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &PtzApi_ServiceDesc.Streams[0], PtzApi_PullPtz_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PullPtzRequest, PullPtzResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type PtzApi_PullPtzClient = grpc.ServerStreamingClient[PullPtzResponse]

// PtzApiServer is the server API for PtzApi service.
// All implementations must embed UnimplementedPtzApiServer
// for forward compatibility.
//
// Allows interaction with a pan-tilt-zoom device, typically a camera.
type PtzApiServer interface {
	// Set the target state for the device
	GetPtz(context.Context, *GetPtzRequest) (*Ptz, error)
	// Set the target state for the device
	UpdatePtz(context.Context, *UpdatePtzRequest) (*Ptz, error)
	// Stop the device if it is extending or retracting, returns the current known state after stopping.
	Stop(context.Context, *StopPtzRequest) (*Ptz, error)
	// Create a preset for the ptz position. If no preset ptz position is specified then use the current position
	CreatePreset(context.Context, *CreatePtzPresetRequest) (*PtzPreset, error)
	// Get notified of changes to the OnOffState of a device
	PullPtz(*PullPtzRequest, grpc.ServerStreamingServer[PullPtzResponse]) error
	mustEmbedUnimplementedPtzApiServer()
}

// UnimplementedPtzApiServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedPtzApiServer struct{}

func (UnimplementedPtzApiServer) GetPtz(context.Context, *GetPtzRequest) (*Ptz, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPtz not implemented")
}
func (UnimplementedPtzApiServer) UpdatePtz(context.Context, *UpdatePtzRequest) (*Ptz, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePtz not implemented")
}
func (UnimplementedPtzApiServer) Stop(context.Context, *StopPtzRequest) (*Ptz, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (UnimplementedPtzApiServer) CreatePreset(context.Context, *CreatePtzPresetRequest) (*PtzPreset, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePreset not implemented")
}
func (UnimplementedPtzApiServer) PullPtz(*PullPtzRequest, grpc.ServerStreamingServer[PullPtzResponse]) error {
	return status.Errorf(codes.Unimplemented, "method PullPtz not implemented")
}
func (UnimplementedPtzApiServer) mustEmbedUnimplementedPtzApiServer() {}
func (UnimplementedPtzApiServer) testEmbeddedByValue()                {}

// UnsafePtzApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PtzApiServer will
// result in compilation errors.
type UnsafePtzApiServer interface {
	mustEmbedUnimplementedPtzApiServer()
}

func RegisterPtzApiServer(s grpc.ServiceRegistrar, srv PtzApiServer) {
	// If the following call pancis, it indicates UnimplementedPtzApiServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&PtzApi_ServiceDesc, srv)
}

func _PtzApi_GetPtz_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPtzRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PtzApiServer).GetPtz(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PtzApi_GetPtz_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PtzApiServer).GetPtz(ctx, req.(*GetPtzRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PtzApi_UpdatePtz_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePtzRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PtzApiServer).UpdatePtz(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PtzApi_UpdatePtz_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PtzApiServer).UpdatePtz(ctx, req.(*UpdatePtzRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PtzApi_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopPtzRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PtzApiServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PtzApi_Stop_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PtzApiServer).Stop(ctx, req.(*StopPtzRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PtzApi_CreatePreset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePtzPresetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PtzApiServer).CreatePreset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PtzApi_CreatePreset_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PtzApiServer).CreatePreset(ctx, req.(*CreatePtzPresetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PtzApi_PullPtz_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullPtzRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PtzApiServer).PullPtz(m, &grpc.GenericServerStream[PullPtzRequest, PullPtzResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type PtzApi_PullPtzServer = grpc.ServerStreamingServer[PullPtzResponse]

// PtzApi_ServiceDesc is the grpc.ServiceDesc for PtzApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PtzApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.PtzApi",
	HandlerType: (*PtzApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPtz",
			Handler:    _PtzApi_GetPtz_Handler,
		},
		{
			MethodName: "UpdatePtz",
			Handler:    _PtzApi_UpdatePtz_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _PtzApi_Stop_Handler,
		},
		{
			MethodName: "CreatePreset",
			Handler:    _PtzApi_CreatePreset_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullPtz",
			Handler:       _PtzApi_PullPtz_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/ptz.proto",
}

const (
	PtzInfo_DescribePtz_FullMethodName = "/smartcore.traits.PtzInfo/DescribePtz"
)

// PtzInfoClient is the client API for PtzInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// Describes the capabilities of a specific named device with respect to this trait.
type PtzInfoClient interface {
	// Get information about how a named device implements Ptz features
	DescribePtz(ctx context.Context, in *DescribePtzRequest, opts ...grpc.CallOption) (*PtzSupport, error)
}

type ptzInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewPtzInfoClient(cc grpc.ClientConnInterface) PtzInfoClient {
	return &ptzInfoClient{cc}
}

func (c *ptzInfoClient) DescribePtz(ctx context.Context, in *DescribePtzRequest, opts ...grpc.CallOption) (*PtzSupport, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(PtzSupport)
	err := c.cc.Invoke(ctx, PtzInfo_DescribePtz_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PtzInfoServer is the server API for PtzInfo service.
// All implementations must embed UnimplementedPtzInfoServer
// for forward compatibility.
//
// Describes the capabilities of a specific named device with respect to this trait.
type PtzInfoServer interface {
	// Get information about how a named device implements Ptz features
	DescribePtz(context.Context, *DescribePtzRequest) (*PtzSupport, error)
	mustEmbedUnimplementedPtzInfoServer()
}

// UnimplementedPtzInfoServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedPtzInfoServer struct{}

func (UnimplementedPtzInfoServer) DescribePtz(context.Context, *DescribePtzRequest) (*PtzSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribePtz not implemented")
}
func (UnimplementedPtzInfoServer) mustEmbedUnimplementedPtzInfoServer() {}
func (UnimplementedPtzInfoServer) testEmbeddedByValue()                 {}

// UnsafePtzInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PtzInfoServer will
// result in compilation errors.
type UnsafePtzInfoServer interface {
	mustEmbedUnimplementedPtzInfoServer()
}

func RegisterPtzInfoServer(s grpc.ServiceRegistrar, srv PtzInfoServer) {
	// If the following call pancis, it indicates UnimplementedPtzInfoServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&PtzInfo_ServiceDesc, srv)
}

func _PtzInfo_DescribePtz_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribePtzRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PtzInfoServer).DescribePtz(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PtzInfo_DescribePtz_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PtzInfoServer).DescribePtz(ctx, req.(*DescribePtzRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PtzInfo_ServiceDesc is the grpc.ServiceDesc for PtzInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PtzInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.PtzInfo",
	HandlerType: (*PtzInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribePtz",
			Handler:    _PtzInfo_DescribePtz_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/ptz.proto",
}
