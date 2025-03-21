// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.3
// source: traits/enter_leave_sensor.proto

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
	EnterLeaveSensorApi_PullEnterLeaveEvents_FullMethodName  = "/smartcore.traits.EnterLeaveSensorApi/PullEnterLeaveEvents"
	EnterLeaveSensorApi_GetEnterLeaveEvent_FullMethodName    = "/smartcore.traits.EnterLeaveSensorApi/GetEnterLeaveEvent"
	EnterLeaveSensorApi_ResetEnterLeaveTotals_FullMethodName = "/smartcore.traits.EnterLeaveSensorApi/ResetEnterLeaveTotals"
)

// EnterLeaveSensorApiClient is the client API for EnterLeaveSensorApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// EnterLeaveSensor applies to devices that can track objects entering or leaving.
// It could apply to footfall counters, turn styles, or car park entry barriers.
type EnterLeaveSensorApiClient interface {
	// Subscribe to new enter or leave events.
	PullEnterLeaveEvents(ctx context.Context, in *PullEnterLeaveEventsRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullEnterLeaveEventsResponse], error)
	// Get information about the enter leave state.
	// The response will not contain a direction or occupant, but may include totals.
	GetEnterLeaveEvent(ctx context.Context, in *GetEnterLeaveEventRequest, opts ...grpc.CallOption) (*EnterLeaveEvent, error)
	// Reset the enter and leave totals.
	ResetEnterLeaveTotals(ctx context.Context, in *ResetEnterLeaveTotalsRequest, opts ...grpc.CallOption) (*ResetEnterLeaveTotalsResponse, error)
}

type enterLeaveSensorApiClient struct {
	cc grpc.ClientConnInterface
}

func NewEnterLeaveSensorApiClient(cc grpc.ClientConnInterface) EnterLeaveSensorApiClient {
	return &enterLeaveSensorApiClient{cc}
}

func (c *enterLeaveSensorApiClient) PullEnterLeaveEvents(ctx context.Context, in *PullEnterLeaveEventsRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PullEnterLeaveEventsResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &EnterLeaveSensorApi_ServiceDesc.Streams[0], EnterLeaveSensorApi_PullEnterLeaveEvents_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PullEnterLeaveEventsRequest, PullEnterLeaveEventsResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type EnterLeaveSensorApi_PullEnterLeaveEventsClient = grpc.ServerStreamingClient[PullEnterLeaveEventsResponse]

func (c *enterLeaveSensorApiClient) GetEnterLeaveEvent(ctx context.Context, in *GetEnterLeaveEventRequest, opts ...grpc.CallOption) (*EnterLeaveEvent, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(EnterLeaveEvent)
	err := c.cc.Invoke(ctx, EnterLeaveSensorApi_GetEnterLeaveEvent_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *enterLeaveSensorApiClient) ResetEnterLeaveTotals(ctx context.Context, in *ResetEnterLeaveTotalsRequest, opts ...grpc.CallOption) (*ResetEnterLeaveTotalsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ResetEnterLeaveTotalsResponse)
	err := c.cc.Invoke(ctx, EnterLeaveSensorApi_ResetEnterLeaveTotals_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EnterLeaveSensorApiServer is the server API for EnterLeaveSensorApi service.
// All implementations must embed UnimplementedEnterLeaveSensorApiServer
// for forward compatibility.
//
// EnterLeaveSensor applies to devices that can track objects entering or leaving.
// It could apply to footfall counters, turn styles, or car park entry barriers.
type EnterLeaveSensorApiServer interface {
	// Subscribe to new enter or leave events.
	PullEnterLeaveEvents(*PullEnterLeaveEventsRequest, grpc.ServerStreamingServer[PullEnterLeaveEventsResponse]) error
	// Get information about the enter leave state.
	// The response will not contain a direction or occupant, but may include totals.
	GetEnterLeaveEvent(context.Context, *GetEnterLeaveEventRequest) (*EnterLeaveEvent, error)
	// Reset the enter and leave totals.
	ResetEnterLeaveTotals(context.Context, *ResetEnterLeaveTotalsRequest) (*ResetEnterLeaveTotalsResponse, error)
	mustEmbedUnimplementedEnterLeaveSensorApiServer()
}

// UnimplementedEnterLeaveSensorApiServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedEnterLeaveSensorApiServer struct{}

func (UnimplementedEnterLeaveSensorApiServer) PullEnterLeaveEvents(*PullEnterLeaveEventsRequest, grpc.ServerStreamingServer[PullEnterLeaveEventsResponse]) error {
	return status.Errorf(codes.Unimplemented, "method PullEnterLeaveEvents not implemented")
}
func (UnimplementedEnterLeaveSensorApiServer) GetEnterLeaveEvent(context.Context, *GetEnterLeaveEventRequest) (*EnterLeaveEvent, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEnterLeaveEvent not implemented")
}
func (UnimplementedEnterLeaveSensorApiServer) ResetEnterLeaveTotals(context.Context, *ResetEnterLeaveTotalsRequest) (*ResetEnterLeaveTotalsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResetEnterLeaveTotals not implemented")
}
func (UnimplementedEnterLeaveSensorApiServer) mustEmbedUnimplementedEnterLeaveSensorApiServer() {}
func (UnimplementedEnterLeaveSensorApiServer) testEmbeddedByValue()                             {}

// UnsafeEnterLeaveSensorApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EnterLeaveSensorApiServer will
// result in compilation errors.
type UnsafeEnterLeaveSensorApiServer interface {
	mustEmbedUnimplementedEnterLeaveSensorApiServer()
}

func RegisterEnterLeaveSensorApiServer(s grpc.ServiceRegistrar, srv EnterLeaveSensorApiServer) {
	// If the following call pancis, it indicates UnimplementedEnterLeaveSensorApiServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&EnterLeaveSensorApi_ServiceDesc, srv)
}

func _EnterLeaveSensorApi_PullEnterLeaveEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullEnterLeaveEventsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(EnterLeaveSensorApiServer).PullEnterLeaveEvents(m, &grpc.GenericServerStream[PullEnterLeaveEventsRequest, PullEnterLeaveEventsResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type EnterLeaveSensorApi_PullEnterLeaveEventsServer = grpc.ServerStreamingServer[PullEnterLeaveEventsResponse]

func _EnterLeaveSensorApi_GetEnterLeaveEvent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEnterLeaveEventRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnterLeaveSensorApiServer).GetEnterLeaveEvent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EnterLeaveSensorApi_GetEnterLeaveEvent_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnterLeaveSensorApiServer).GetEnterLeaveEvent(ctx, req.(*GetEnterLeaveEventRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnterLeaveSensorApi_ResetEnterLeaveTotals_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResetEnterLeaveTotalsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnterLeaveSensorApiServer).ResetEnterLeaveTotals(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: EnterLeaveSensorApi_ResetEnterLeaveTotals_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnterLeaveSensorApiServer).ResetEnterLeaveTotals(ctx, req.(*ResetEnterLeaveTotalsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EnterLeaveSensorApi_ServiceDesc is the grpc.ServiceDesc for EnterLeaveSensorApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EnterLeaveSensorApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.EnterLeaveSensorApi",
	HandlerType: (*EnterLeaveSensorApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEnterLeaveEvent",
			Handler:    _EnterLeaveSensorApi_GetEnterLeaveEvent_Handler,
		},
		{
			MethodName: "ResetEnterLeaveTotals",
			Handler:    _EnterLeaveSensorApi_ResetEnterLeaveTotals_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullEnterLeaveEvents",
			Handler:       _EnterLeaveSensorApi_PullEnterLeaveEvents_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/enter_leave_sensor.proto",
}

// EnterLeaveSensorInfoClient is the client API for EnterLeaveSensorInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EnterLeaveSensorInfoClient interface {
}

type enterLeaveSensorInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewEnterLeaveSensorInfoClient(cc grpc.ClientConnInterface) EnterLeaveSensorInfoClient {
	return &enterLeaveSensorInfoClient{cc}
}

// EnterLeaveSensorInfoServer is the server API for EnterLeaveSensorInfo service.
// All implementations must embed UnimplementedEnterLeaveSensorInfoServer
// for forward compatibility.
type EnterLeaveSensorInfoServer interface {
	mustEmbedUnimplementedEnterLeaveSensorInfoServer()
}

// UnimplementedEnterLeaveSensorInfoServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedEnterLeaveSensorInfoServer struct{}

func (UnimplementedEnterLeaveSensorInfoServer) mustEmbedUnimplementedEnterLeaveSensorInfoServer() {}
func (UnimplementedEnterLeaveSensorInfoServer) testEmbeddedByValue()                              {}

// UnsafeEnterLeaveSensorInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EnterLeaveSensorInfoServer will
// result in compilation errors.
type UnsafeEnterLeaveSensorInfoServer interface {
	mustEmbedUnimplementedEnterLeaveSensorInfoServer()
}

func RegisterEnterLeaveSensorInfoServer(s grpc.ServiceRegistrar, srv EnterLeaveSensorInfoServer) {
	// If the following call pancis, it indicates UnimplementedEnterLeaveSensorInfoServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&EnterLeaveSensorInfo_ServiceDesc, srv)
}

// EnterLeaveSensorInfo_ServiceDesc is the grpc.ServiceDesc for EnterLeaveSensorInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EnterLeaveSensorInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.EnterLeaveSensorInfo",
	HandlerType: (*EnterLeaveSensorInfoServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "traits/enter_leave_sensor.proto",
}
