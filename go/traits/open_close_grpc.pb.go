// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: traits/open_close.proto

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

// OpenCloseApiClient is the client API for OpenCloseApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OpenCloseApiClient interface {
	GetPositions(ctx context.Context, in *GetOpenClosePositionsRequest, opts ...grpc.CallOption) (*OpenClosePositions, error)
	UpdatePositions(ctx context.Context, in *UpdateOpenClosePositionsRequest, opts ...grpc.CallOption) (*OpenClosePositions, error)
	// Stop causes any changes being performed by the underlying device to stop. Will return the current state.
	Stop(ctx context.Context, in *StopOpenCloseRequest, opts ...grpc.CallOption) (*OpenClosePositions, error)
	// Get notified of changes to the OpenCloseState of a device
	PullPositions(ctx context.Context, in *PullOpenClosePositionsRequest, opts ...grpc.CallOption) (OpenCloseApi_PullPositionsClient, error)
}

type openCloseApiClient struct {
	cc grpc.ClientConnInterface
}

func NewOpenCloseApiClient(cc grpc.ClientConnInterface) OpenCloseApiClient {
	return &openCloseApiClient{cc}
}

func (c *openCloseApiClient) GetPositions(ctx context.Context, in *GetOpenClosePositionsRequest, opts ...grpc.CallOption) (*OpenClosePositions, error) {
	out := new(OpenClosePositions)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OpenCloseApi/GetPositions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *openCloseApiClient) UpdatePositions(ctx context.Context, in *UpdateOpenClosePositionsRequest, opts ...grpc.CallOption) (*OpenClosePositions, error) {
	out := new(OpenClosePositions)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OpenCloseApi/UpdatePositions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *openCloseApiClient) Stop(ctx context.Context, in *StopOpenCloseRequest, opts ...grpc.CallOption) (*OpenClosePositions, error) {
	out := new(OpenClosePositions)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OpenCloseApi/Stop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *openCloseApiClient) PullPositions(ctx context.Context, in *PullOpenClosePositionsRequest, opts ...grpc.CallOption) (OpenCloseApi_PullPositionsClient, error) {
	stream, err := c.cc.NewStream(ctx, &OpenCloseApi_ServiceDesc.Streams[0], "/smartcore.traits.OpenCloseApi/PullPositions", opts...)
	if err != nil {
		return nil, err
	}
	x := &openCloseApiPullPositionsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OpenCloseApi_PullPositionsClient interface {
	Recv() (*PullOpenClosePositionsResponse, error)
	grpc.ClientStream
}

type openCloseApiPullPositionsClient struct {
	grpc.ClientStream
}

func (x *openCloseApiPullPositionsClient) Recv() (*PullOpenClosePositionsResponse, error) {
	m := new(PullOpenClosePositionsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OpenCloseApiServer is the server API for OpenCloseApi service.
// All implementations must embed UnimplementedOpenCloseApiServer
// for forward compatibility
type OpenCloseApiServer interface {
	GetPositions(context.Context, *GetOpenClosePositionsRequest) (*OpenClosePositions, error)
	UpdatePositions(context.Context, *UpdateOpenClosePositionsRequest) (*OpenClosePositions, error)
	// Stop causes any changes being performed by the underlying device to stop. Will return the current state.
	Stop(context.Context, *StopOpenCloseRequest) (*OpenClosePositions, error)
	// Get notified of changes to the OpenCloseState of a device
	PullPositions(*PullOpenClosePositionsRequest, OpenCloseApi_PullPositionsServer) error
	mustEmbedUnimplementedOpenCloseApiServer()
}

// UnimplementedOpenCloseApiServer must be embedded to have forward compatible implementations.
type UnimplementedOpenCloseApiServer struct {
}

func (UnimplementedOpenCloseApiServer) GetPositions(context.Context, *GetOpenClosePositionsRequest) (*OpenClosePositions, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPositions not implemented")
}
func (UnimplementedOpenCloseApiServer) UpdatePositions(context.Context, *UpdateOpenClosePositionsRequest) (*OpenClosePositions, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePositions not implemented")
}
func (UnimplementedOpenCloseApiServer) Stop(context.Context, *StopOpenCloseRequest) (*OpenClosePositions, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (UnimplementedOpenCloseApiServer) PullPositions(*PullOpenClosePositionsRequest, OpenCloseApi_PullPositionsServer) error {
	return status.Errorf(codes.Unimplemented, "method PullPositions not implemented")
}
func (UnimplementedOpenCloseApiServer) mustEmbedUnimplementedOpenCloseApiServer() {}

// UnsafeOpenCloseApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OpenCloseApiServer will
// result in compilation errors.
type UnsafeOpenCloseApiServer interface {
	mustEmbedUnimplementedOpenCloseApiServer()
}

func RegisterOpenCloseApiServer(s grpc.ServiceRegistrar, srv OpenCloseApiServer) {
	s.RegisterService(&OpenCloseApi_ServiceDesc, srv)
}

func _OpenCloseApi_GetPositions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOpenClosePositionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OpenCloseApiServer).GetPositions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OpenCloseApi/GetPositions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OpenCloseApiServer).GetPositions(ctx, req.(*GetOpenClosePositionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OpenCloseApi_UpdatePositions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateOpenClosePositionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OpenCloseApiServer).UpdatePositions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OpenCloseApi/UpdatePositions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OpenCloseApiServer).UpdatePositions(ctx, req.(*UpdateOpenClosePositionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OpenCloseApi_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopOpenCloseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OpenCloseApiServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OpenCloseApi/Stop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OpenCloseApiServer).Stop(ctx, req.(*StopOpenCloseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OpenCloseApi_PullPositions_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullOpenClosePositionsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OpenCloseApiServer).PullPositions(m, &openCloseApiPullPositionsServer{stream})
}

type OpenCloseApi_PullPositionsServer interface {
	Send(*PullOpenClosePositionsResponse) error
	grpc.ServerStream
}

type openCloseApiPullPositionsServer struct {
	grpc.ServerStream
}

func (x *openCloseApiPullPositionsServer) Send(m *PullOpenClosePositionsResponse) error {
	return x.ServerStream.SendMsg(m)
}

// OpenCloseApi_ServiceDesc is the grpc.ServiceDesc for OpenCloseApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OpenCloseApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OpenCloseApi",
	HandlerType: (*OpenCloseApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPositions",
			Handler:    _OpenCloseApi_GetPositions_Handler,
		},
		{
			MethodName: "UpdatePositions",
			Handler:    _OpenCloseApi_UpdatePositions_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _OpenCloseApi_Stop_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullPositions",
			Handler:       _OpenCloseApi_PullPositions_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/open_close.proto",
}

// OpenCloseInfoClient is the client API for OpenCloseInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OpenCloseInfoClient interface {
	// Get information about how a named device implements Positions features
	DescribePositions(ctx context.Context, in *DescribePositionsRequest, opts ...grpc.CallOption) (*PositionsSupport, error)
}

type openCloseInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewOpenCloseInfoClient(cc grpc.ClientConnInterface) OpenCloseInfoClient {
	return &openCloseInfoClient{cc}
}

func (c *openCloseInfoClient) DescribePositions(ctx context.Context, in *DescribePositionsRequest, opts ...grpc.CallOption) (*PositionsSupport, error) {
	out := new(PositionsSupport)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OpenCloseInfo/DescribePositions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OpenCloseInfoServer is the server API for OpenCloseInfo service.
// All implementations must embed UnimplementedOpenCloseInfoServer
// for forward compatibility
type OpenCloseInfoServer interface {
	// Get information about how a named device implements Positions features
	DescribePositions(context.Context, *DescribePositionsRequest) (*PositionsSupport, error)
	mustEmbedUnimplementedOpenCloseInfoServer()
}

// UnimplementedOpenCloseInfoServer must be embedded to have forward compatible implementations.
type UnimplementedOpenCloseInfoServer struct {
}

func (UnimplementedOpenCloseInfoServer) DescribePositions(context.Context, *DescribePositionsRequest) (*PositionsSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribePositions not implemented")
}
func (UnimplementedOpenCloseInfoServer) mustEmbedUnimplementedOpenCloseInfoServer() {}

// UnsafeOpenCloseInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OpenCloseInfoServer will
// result in compilation errors.
type UnsafeOpenCloseInfoServer interface {
	mustEmbedUnimplementedOpenCloseInfoServer()
}

func RegisterOpenCloseInfoServer(s grpc.ServiceRegistrar, srv OpenCloseInfoServer) {
	s.RegisterService(&OpenCloseInfo_ServiceDesc, srv)
}

func _OpenCloseInfo_DescribePositions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribePositionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OpenCloseInfoServer).DescribePositions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OpenCloseInfo/DescribePositions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OpenCloseInfoServer).DescribePositions(ctx, req.(*DescribePositionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OpenCloseInfo_ServiceDesc is the grpc.ServiceDesc for OpenCloseInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OpenCloseInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OpenCloseInfo",
	HandlerType: (*OpenCloseInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribePositions",
			Handler:    _OpenCloseInfo_DescribePositions_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/open_close.proto",
}
