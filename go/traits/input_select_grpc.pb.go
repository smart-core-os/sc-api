// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.2
// source: traits/input_select.proto

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
	InputSelectApi_UpdateInput_FullMethodName = "/smartcore.traits.InputSelectApi/UpdateInput"
	InputSelectApi_GetInput_FullMethodName    = "/smartcore.traits.InputSelectApi/GetInput"
	InputSelectApi_PullInput_FullMethodName   = "/smartcore.traits.InputSelectApi/PullInput"
)

// InputSelectApiClient is the client API for InputSelectApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InputSelectApiClient interface {
	// request that the input be selected
	UpdateInput(ctx context.Context, in *UpdateInputRequest, opts ...grpc.CallOption) (*Input, error)
	// get the current value of the selected input
	GetInput(ctx context.Context, in *GetInputRequest, opts ...grpc.CallOption) (*Input, error)
	// request updates to changes in the selected input
	PullInput(ctx context.Context, in *PullInputRequest, opts ...grpc.CallOption) (InputSelectApi_PullInputClient, error)
}

type inputSelectApiClient struct {
	cc grpc.ClientConnInterface
}

func NewInputSelectApiClient(cc grpc.ClientConnInterface) InputSelectApiClient {
	return &inputSelectApiClient{cc}
}

func (c *inputSelectApiClient) UpdateInput(ctx context.Context, in *UpdateInputRequest, opts ...grpc.CallOption) (*Input, error) {
	out := new(Input)
	err := c.cc.Invoke(ctx, InputSelectApi_UpdateInput_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *inputSelectApiClient) GetInput(ctx context.Context, in *GetInputRequest, opts ...grpc.CallOption) (*Input, error) {
	out := new(Input)
	err := c.cc.Invoke(ctx, InputSelectApi_GetInput_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *inputSelectApiClient) PullInput(ctx context.Context, in *PullInputRequest, opts ...grpc.CallOption) (InputSelectApi_PullInputClient, error) {
	stream, err := c.cc.NewStream(ctx, &InputSelectApi_ServiceDesc.Streams[0], InputSelectApi_PullInput_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &inputSelectApiPullInputClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type InputSelectApi_PullInputClient interface {
	Recv() (*PullInputResponse, error)
	grpc.ClientStream
}

type inputSelectApiPullInputClient struct {
	grpc.ClientStream
}

func (x *inputSelectApiPullInputClient) Recv() (*PullInputResponse, error) {
	m := new(PullInputResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// InputSelectApiServer is the server API for InputSelectApi service.
// All implementations must embed UnimplementedInputSelectApiServer
// for forward compatibility
type InputSelectApiServer interface {
	// request that the input be selected
	UpdateInput(context.Context, *UpdateInputRequest) (*Input, error)
	// get the current value of the selected input
	GetInput(context.Context, *GetInputRequest) (*Input, error)
	// request updates to changes in the selected input
	PullInput(*PullInputRequest, InputSelectApi_PullInputServer) error
	mustEmbedUnimplementedInputSelectApiServer()
}

// UnimplementedInputSelectApiServer must be embedded to have forward compatible implementations.
type UnimplementedInputSelectApiServer struct {
}

func (UnimplementedInputSelectApiServer) UpdateInput(context.Context, *UpdateInputRequest) (*Input, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateInput not implemented")
}
func (UnimplementedInputSelectApiServer) GetInput(context.Context, *GetInputRequest) (*Input, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInput not implemented")
}
func (UnimplementedInputSelectApiServer) PullInput(*PullInputRequest, InputSelectApi_PullInputServer) error {
	return status.Errorf(codes.Unimplemented, "method PullInput not implemented")
}
func (UnimplementedInputSelectApiServer) mustEmbedUnimplementedInputSelectApiServer() {}

// UnsafeInputSelectApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InputSelectApiServer will
// result in compilation errors.
type UnsafeInputSelectApiServer interface {
	mustEmbedUnimplementedInputSelectApiServer()
}

func RegisterInputSelectApiServer(s grpc.ServiceRegistrar, srv InputSelectApiServer) {
	s.RegisterService(&InputSelectApi_ServiceDesc, srv)
}

func _InputSelectApi_UpdateInput_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateInputRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InputSelectApiServer).UpdateInput(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InputSelectApi_UpdateInput_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InputSelectApiServer).UpdateInput(ctx, req.(*UpdateInputRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InputSelectApi_GetInput_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInputRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InputSelectApiServer).GetInput(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InputSelectApi_GetInput_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InputSelectApiServer).GetInput(ctx, req.(*GetInputRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InputSelectApi_PullInput_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullInputRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(InputSelectApiServer).PullInput(m, &inputSelectApiPullInputServer{stream})
}

type InputSelectApi_PullInputServer interface {
	Send(*PullInputResponse) error
	grpc.ServerStream
}

type inputSelectApiPullInputServer struct {
	grpc.ServerStream
}

func (x *inputSelectApiPullInputServer) Send(m *PullInputResponse) error {
	return x.ServerStream.SendMsg(m)
}

// InputSelectApi_ServiceDesc is the grpc.ServiceDesc for InputSelectApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InputSelectApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.InputSelectApi",
	HandlerType: (*InputSelectApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateInput",
			Handler:    _InputSelectApi_UpdateInput_Handler,
		},
		{
			MethodName: "GetInput",
			Handler:    _InputSelectApi_GetInput_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullInput",
			Handler:       _InputSelectApi_PullInput_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/input_select.proto",
}

const (
	InputSelectInfo_DescribeInput_FullMethodName = "/smartcore.traits.InputSelectInfo/DescribeInput"
)

// InputSelectInfoClient is the client API for InputSelectInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InputSelectInfoClient interface {
	// Get information about how a named device implements Input features
	DescribeInput(ctx context.Context, in *DescribeInputRequest, opts ...grpc.CallOption) (*InputSupport, error)
}

type inputSelectInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewInputSelectInfoClient(cc grpc.ClientConnInterface) InputSelectInfoClient {
	return &inputSelectInfoClient{cc}
}

func (c *inputSelectInfoClient) DescribeInput(ctx context.Context, in *DescribeInputRequest, opts ...grpc.CallOption) (*InputSupport, error) {
	out := new(InputSupport)
	err := c.cc.Invoke(ctx, InputSelectInfo_DescribeInput_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InputSelectInfoServer is the server API for InputSelectInfo service.
// All implementations must embed UnimplementedInputSelectInfoServer
// for forward compatibility
type InputSelectInfoServer interface {
	// Get information about how a named device implements Input features
	DescribeInput(context.Context, *DescribeInputRequest) (*InputSupport, error)
	mustEmbedUnimplementedInputSelectInfoServer()
}

// UnimplementedInputSelectInfoServer must be embedded to have forward compatible implementations.
type UnimplementedInputSelectInfoServer struct {
}

func (UnimplementedInputSelectInfoServer) DescribeInput(context.Context, *DescribeInputRequest) (*InputSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeInput not implemented")
}
func (UnimplementedInputSelectInfoServer) mustEmbedUnimplementedInputSelectInfoServer() {}

// UnsafeInputSelectInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InputSelectInfoServer will
// result in compilation errors.
type UnsafeInputSelectInfoServer interface {
	mustEmbedUnimplementedInputSelectInfoServer()
}

func RegisterInputSelectInfoServer(s grpc.ServiceRegistrar, srv InputSelectInfoServer) {
	s.RegisterService(&InputSelectInfo_ServiceDesc, srv)
}

func _InputSelectInfo_DescribeInput_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeInputRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InputSelectInfoServer).DescribeInput(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InputSelectInfo_DescribeInput_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InputSelectInfoServer).DescribeInput(ctx, req.(*DescribeInputRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// InputSelectInfo_ServiceDesc is the grpc.ServiceDesc for InputSelectInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InputSelectInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.InputSelectInfo",
	HandlerType: (*InputSelectInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeInput",
			Handler:    _InputSelectInfo_DescribeInput_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/input_select.proto",
}
