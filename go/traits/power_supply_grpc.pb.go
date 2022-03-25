// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: traits/power_supply.proto

package traits

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PowerSupplyApiClient is the client API for PowerSupplyApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PowerSupplyApiClient interface {
	// Get the current capacity available for supply.
	// The available capacity shouldn't include any draw made on this device directly.
	GetPowerCapacity(ctx context.Context, in *GetPowerCapacityRequest, opts ...grpc.CallOption) (*PowerCapacity, error)
	// Be notified of changes to the available capacity.
	PullPowerCapacity(ctx context.Context, in *PullPowerCapacityRequest, opts ...grpc.CallOption) (PowerSupplyApi_PullPowerCapacityClient, error)
	// ListDrawNotifications returns the list of active draw notifications.
	ListDrawNotifications(ctx context.Context, in *ListDrawNotificationsRequest, opts ...grpc.CallOption) (*ListDrawNotificationsResponse, error)
	// CreateDrawNotification indicates that the caller intends to draw the given capacity from this power supply.
	// This device may respond to say that the requested draw is not available at this time.
	CreateDrawNotification(ctx context.Context, in *CreateDrawNotificationRequest, opts ...grpc.CallOption) (*DrawNotification, error)
	// Update an existing draw notification.
	// If no such draw notification exists, will return an error.
	UpdateDrawNotification(ctx context.Context, in *UpdateDrawNotificationRequest, opts ...grpc.CallOption) (*DrawNotification, error)
	// DeleteDrawNotification allows the caller to remove their notification of draw.
	// Typically used if the situation has changed and the expected draw will no longer happen.
	// If the expected draw level has changed consider using UpdateDrawNotification.
	// If no such draw notification exists, returns NOT_FOUND unless allow_missing is true.
	// There is no need to remove notifications after their ramp_duration has expired.
	DeleteDrawNotification(ctx context.Context, in *DeleteDrawNotificationRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// PullDrawNotifications returns a stream of list changes for active draw notifications.
	// No guarantee is made for if or when a Draw Notification might be removed after it's notification period has
	// expired. Only client initiated events are guaranteed to be published via the returned stream.
	PullDrawNotifications(ctx context.Context, in *PullDrawNotificationsRequest, opts ...grpc.CallOption) (PowerSupplyApi_PullDrawNotificationsClient, error)
}

type powerSupplyApiClient struct {
	cc grpc.ClientConnInterface
}

func NewPowerSupplyApiClient(cc grpc.ClientConnInterface) PowerSupplyApiClient {
	return &powerSupplyApiClient{cc}
}

func (c *powerSupplyApiClient) GetPowerCapacity(ctx context.Context, in *GetPowerCapacityRequest, opts ...grpc.CallOption) (*PowerCapacity, error) {
	out := new(PowerCapacity)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyApi/GetPowerCapacity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *powerSupplyApiClient) PullPowerCapacity(ctx context.Context, in *PullPowerCapacityRequest, opts ...grpc.CallOption) (PowerSupplyApi_PullPowerCapacityClient, error) {
	stream, err := c.cc.NewStream(ctx, &PowerSupplyApi_ServiceDesc.Streams[0], "/smartcore.traits.PowerSupplyApi/PullPowerCapacity", opts...)
	if err != nil {
		return nil, err
	}
	x := &powerSupplyApiPullPowerCapacityClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PowerSupplyApi_PullPowerCapacityClient interface {
	Recv() (*PullPowerCapacityResponse, error)
	grpc.ClientStream
}

type powerSupplyApiPullPowerCapacityClient struct {
	grpc.ClientStream
}

func (x *powerSupplyApiPullPowerCapacityClient) Recv() (*PullPowerCapacityResponse, error) {
	m := new(PullPowerCapacityResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *powerSupplyApiClient) ListDrawNotifications(ctx context.Context, in *ListDrawNotificationsRequest, opts ...grpc.CallOption) (*ListDrawNotificationsResponse, error) {
	out := new(ListDrawNotificationsResponse)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyApi/ListDrawNotifications", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *powerSupplyApiClient) CreateDrawNotification(ctx context.Context, in *CreateDrawNotificationRequest, opts ...grpc.CallOption) (*DrawNotification, error) {
	out := new(DrawNotification)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyApi/CreateDrawNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *powerSupplyApiClient) UpdateDrawNotification(ctx context.Context, in *UpdateDrawNotificationRequest, opts ...grpc.CallOption) (*DrawNotification, error) {
	out := new(DrawNotification)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyApi/UpdateDrawNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *powerSupplyApiClient) DeleteDrawNotification(ctx context.Context, in *DeleteDrawNotificationRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyApi/DeleteDrawNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *powerSupplyApiClient) PullDrawNotifications(ctx context.Context, in *PullDrawNotificationsRequest, opts ...grpc.CallOption) (PowerSupplyApi_PullDrawNotificationsClient, error) {
	stream, err := c.cc.NewStream(ctx, &PowerSupplyApi_ServiceDesc.Streams[1], "/smartcore.traits.PowerSupplyApi/PullDrawNotifications", opts...)
	if err != nil {
		return nil, err
	}
	x := &powerSupplyApiPullDrawNotificationsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PowerSupplyApi_PullDrawNotificationsClient interface {
	Recv() (*PullDrawNotificationsResponse, error)
	grpc.ClientStream
}

type powerSupplyApiPullDrawNotificationsClient struct {
	grpc.ClientStream
}

func (x *powerSupplyApiPullDrawNotificationsClient) Recv() (*PullDrawNotificationsResponse, error) {
	m := new(PullDrawNotificationsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PowerSupplyApiServer is the server API for PowerSupplyApi service.
// All implementations must embed UnimplementedPowerSupplyApiServer
// for forward compatibility
type PowerSupplyApiServer interface {
	// Get the current capacity available for supply.
	// The available capacity shouldn't include any draw made on this device directly.
	GetPowerCapacity(context.Context, *GetPowerCapacityRequest) (*PowerCapacity, error)
	// Be notified of changes to the available capacity.
	PullPowerCapacity(*PullPowerCapacityRequest, PowerSupplyApi_PullPowerCapacityServer) error
	// ListDrawNotifications returns the list of active draw notifications.
	ListDrawNotifications(context.Context, *ListDrawNotificationsRequest) (*ListDrawNotificationsResponse, error)
	// CreateDrawNotification indicates that the caller intends to draw the given capacity from this power supply.
	// This device may respond to say that the requested draw is not available at this time.
	CreateDrawNotification(context.Context, *CreateDrawNotificationRequest) (*DrawNotification, error)
	// Update an existing draw notification.
	// If no such draw notification exists, will return an error.
	UpdateDrawNotification(context.Context, *UpdateDrawNotificationRequest) (*DrawNotification, error)
	// DeleteDrawNotification allows the caller to remove their notification of draw.
	// Typically used if the situation has changed and the expected draw will no longer happen.
	// If the expected draw level has changed consider using UpdateDrawNotification.
	// If no such draw notification exists, returns NOT_FOUND unless allow_missing is true.
	// There is no need to remove notifications after their ramp_duration has expired.
	DeleteDrawNotification(context.Context, *DeleteDrawNotificationRequest) (*emptypb.Empty, error)
	// PullDrawNotifications returns a stream of list changes for active draw notifications.
	// No guarantee is made for if or when a Draw Notification might be removed after it's notification period has
	// expired. Only client initiated events are guaranteed to be published via the returned stream.
	PullDrawNotifications(*PullDrawNotificationsRequest, PowerSupplyApi_PullDrawNotificationsServer) error
	mustEmbedUnimplementedPowerSupplyApiServer()
}

// UnimplementedPowerSupplyApiServer must be embedded to have forward compatible implementations.
type UnimplementedPowerSupplyApiServer struct {
}

func (UnimplementedPowerSupplyApiServer) GetPowerCapacity(context.Context, *GetPowerCapacityRequest) (*PowerCapacity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPowerCapacity not implemented")
}
func (UnimplementedPowerSupplyApiServer) PullPowerCapacity(*PullPowerCapacityRequest, PowerSupplyApi_PullPowerCapacityServer) error {
	return status.Errorf(codes.Unimplemented, "method PullPowerCapacity not implemented")
}
func (UnimplementedPowerSupplyApiServer) ListDrawNotifications(context.Context, *ListDrawNotificationsRequest) (*ListDrawNotificationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDrawNotifications not implemented")
}
func (UnimplementedPowerSupplyApiServer) CreateDrawNotification(context.Context, *CreateDrawNotificationRequest) (*DrawNotification, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDrawNotification not implemented")
}
func (UnimplementedPowerSupplyApiServer) UpdateDrawNotification(context.Context, *UpdateDrawNotificationRequest) (*DrawNotification, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDrawNotification not implemented")
}
func (UnimplementedPowerSupplyApiServer) DeleteDrawNotification(context.Context, *DeleteDrawNotificationRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDrawNotification not implemented")
}
func (UnimplementedPowerSupplyApiServer) PullDrawNotifications(*PullDrawNotificationsRequest, PowerSupplyApi_PullDrawNotificationsServer) error {
	return status.Errorf(codes.Unimplemented, "method PullDrawNotifications not implemented")
}
func (UnimplementedPowerSupplyApiServer) mustEmbedUnimplementedPowerSupplyApiServer() {}

// UnsafePowerSupplyApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PowerSupplyApiServer will
// result in compilation errors.
type UnsafePowerSupplyApiServer interface {
	mustEmbedUnimplementedPowerSupplyApiServer()
}

func RegisterPowerSupplyApiServer(s grpc.ServiceRegistrar, srv PowerSupplyApiServer) {
	s.RegisterService(&PowerSupplyApi_ServiceDesc, srv)
}

func _PowerSupplyApi_GetPowerCapacity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPowerCapacityRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyApiServer).GetPowerCapacity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyApi/GetPowerCapacity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyApiServer).GetPowerCapacity(ctx, req.(*GetPowerCapacityRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PowerSupplyApi_PullPowerCapacity_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullPowerCapacityRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PowerSupplyApiServer).PullPowerCapacity(m, &powerSupplyApiPullPowerCapacityServer{stream})
}

type PowerSupplyApi_PullPowerCapacityServer interface {
	Send(*PullPowerCapacityResponse) error
	grpc.ServerStream
}

type powerSupplyApiPullPowerCapacityServer struct {
	grpc.ServerStream
}

func (x *powerSupplyApiPullPowerCapacityServer) Send(m *PullPowerCapacityResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PowerSupplyApi_ListDrawNotifications_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDrawNotificationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyApiServer).ListDrawNotifications(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyApi/ListDrawNotifications",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyApiServer).ListDrawNotifications(ctx, req.(*ListDrawNotificationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PowerSupplyApi_CreateDrawNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDrawNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyApiServer).CreateDrawNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyApi/CreateDrawNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyApiServer).CreateDrawNotification(ctx, req.(*CreateDrawNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PowerSupplyApi_UpdateDrawNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDrawNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyApiServer).UpdateDrawNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyApi/UpdateDrawNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyApiServer).UpdateDrawNotification(ctx, req.(*UpdateDrawNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PowerSupplyApi_DeleteDrawNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDrawNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyApiServer).DeleteDrawNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyApi/DeleteDrawNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyApiServer).DeleteDrawNotification(ctx, req.(*DeleteDrawNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PowerSupplyApi_PullDrawNotifications_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullDrawNotificationsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PowerSupplyApiServer).PullDrawNotifications(m, &powerSupplyApiPullDrawNotificationsServer{stream})
}

type PowerSupplyApi_PullDrawNotificationsServer interface {
	Send(*PullDrawNotificationsResponse) error
	grpc.ServerStream
}

type powerSupplyApiPullDrawNotificationsServer struct {
	grpc.ServerStream
}

func (x *powerSupplyApiPullDrawNotificationsServer) Send(m *PullDrawNotificationsResponse) error {
	return x.ServerStream.SendMsg(m)
}

// PowerSupplyApi_ServiceDesc is the grpc.ServiceDesc for PowerSupplyApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PowerSupplyApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.PowerSupplyApi",
	HandlerType: (*PowerSupplyApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPowerCapacity",
			Handler:    _PowerSupplyApi_GetPowerCapacity_Handler,
		},
		{
			MethodName: "ListDrawNotifications",
			Handler:    _PowerSupplyApi_ListDrawNotifications_Handler,
		},
		{
			MethodName: "CreateDrawNotification",
			Handler:    _PowerSupplyApi_CreateDrawNotification_Handler,
		},
		{
			MethodName: "UpdateDrawNotification",
			Handler:    _PowerSupplyApi_UpdateDrawNotification_Handler,
		},
		{
			MethodName: "DeleteDrawNotification",
			Handler:    _PowerSupplyApi_DeleteDrawNotification_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullPowerCapacity",
			Handler:       _PowerSupplyApi_PullPowerCapacity_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "PullDrawNotifications",
			Handler:       _PowerSupplyApi_PullDrawNotifications_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/power_supply.proto",
}

// PowerSupplyInfoClient is the client API for PowerSupplyInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PowerSupplyInfoClient interface {
	// Get information about how a named device implements PowerCapacity features
	DescribePowerCapacity(ctx context.Context, in *DescribePowerCapacityRequest, opts ...grpc.CallOption) (*PowerCapacitySupport, error)
	// Get information about how a named device implements DrawNotification features
	DescribeDrawNotification(ctx context.Context, in *DescribeDrawNotificationRequest, opts ...grpc.CallOption) (*DrawNotificationSupport, error)
}

type powerSupplyInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewPowerSupplyInfoClient(cc grpc.ClientConnInterface) PowerSupplyInfoClient {
	return &powerSupplyInfoClient{cc}
}

func (c *powerSupplyInfoClient) DescribePowerCapacity(ctx context.Context, in *DescribePowerCapacityRequest, opts ...grpc.CallOption) (*PowerCapacitySupport, error) {
	out := new(PowerCapacitySupport)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyInfo/DescribePowerCapacity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *powerSupplyInfoClient) DescribeDrawNotification(ctx context.Context, in *DescribeDrawNotificationRequest, opts ...grpc.CallOption) (*DrawNotificationSupport, error) {
	out := new(DrawNotificationSupport)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PowerSupplyInfo/DescribeDrawNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PowerSupplyInfoServer is the server API for PowerSupplyInfo service.
// All implementations must embed UnimplementedPowerSupplyInfoServer
// for forward compatibility
type PowerSupplyInfoServer interface {
	// Get information about how a named device implements PowerCapacity features
	DescribePowerCapacity(context.Context, *DescribePowerCapacityRequest) (*PowerCapacitySupport, error)
	// Get information about how a named device implements DrawNotification features
	DescribeDrawNotification(context.Context, *DescribeDrawNotificationRequest) (*DrawNotificationSupport, error)
	mustEmbedUnimplementedPowerSupplyInfoServer()
}

// UnimplementedPowerSupplyInfoServer must be embedded to have forward compatible implementations.
type UnimplementedPowerSupplyInfoServer struct {
}

func (UnimplementedPowerSupplyInfoServer) DescribePowerCapacity(context.Context, *DescribePowerCapacityRequest) (*PowerCapacitySupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribePowerCapacity not implemented")
}
func (UnimplementedPowerSupplyInfoServer) DescribeDrawNotification(context.Context, *DescribeDrawNotificationRequest) (*DrawNotificationSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeDrawNotification not implemented")
}
func (UnimplementedPowerSupplyInfoServer) mustEmbedUnimplementedPowerSupplyInfoServer() {}

// UnsafePowerSupplyInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PowerSupplyInfoServer will
// result in compilation errors.
type UnsafePowerSupplyInfoServer interface {
	mustEmbedUnimplementedPowerSupplyInfoServer()
}

func RegisterPowerSupplyInfoServer(s grpc.ServiceRegistrar, srv PowerSupplyInfoServer) {
	s.RegisterService(&PowerSupplyInfo_ServiceDesc, srv)
}

func _PowerSupplyInfo_DescribePowerCapacity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribePowerCapacityRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyInfoServer).DescribePowerCapacity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyInfo/DescribePowerCapacity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyInfoServer).DescribePowerCapacity(ctx, req.(*DescribePowerCapacityRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PowerSupplyInfo_DescribeDrawNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeDrawNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PowerSupplyInfoServer).DescribeDrawNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PowerSupplyInfo/DescribeDrawNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PowerSupplyInfoServer).DescribeDrawNotification(ctx, req.(*DescribeDrawNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PowerSupplyInfo_ServiceDesc is the grpc.ServiceDesc for PowerSupplyInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PowerSupplyInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.PowerSupplyInfo",
	HandlerType: (*PowerSupplyInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribePowerCapacity",
			Handler:    _PowerSupplyInfo_DescribePowerCapacity_Handler,
		},
		{
			MethodName: "DescribeDrawNotification",
			Handler:    _PowerSupplyInfo_DescribeDrawNotification_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/power_supply.proto",
}
