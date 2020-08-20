// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package traits

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// BrightnessApiClient is the client API for BrightnessApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BrightnessApiClient interface {
	// request that the range value be changed
	UpdateRangeValue(ctx context.Context, in *UpdateBrightnessRequest, opts ...grpc.CallOption) (*Brightness, error)
	// get the current value of the range
	GetBrightness(ctx context.Context, in *GetBrightnessRequest, opts ...grpc.CallOption) (*Brightness, error)
	// request updates to changes in the range value
	PullBrightness(ctx context.Context, in *PullBrightnessRequest, opts ...grpc.CallOption) (BrightnessApi_PullBrightnessClient, error)
}

type brightnessApiClient struct {
	cc grpc.ClientConnInterface
}

func NewBrightnessApiClient(cc grpc.ClientConnInterface) BrightnessApiClient {
	return &brightnessApiClient{cc}
}

func (c *brightnessApiClient) UpdateRangeValue(ctx context.Context, in *UpdateBrightnessRequest, opts ...grpc.CallOption) (*Brightness, error) {
	out := new(Brightness)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.BrightnessApi/UpdateRangeValue", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *brightnessApiClient) GetBrightness(ctx context.Context, in *GetBrightnessRequest, opts ...grpc.CallOption) (*Brightness, error) {
	out := new(Brightness)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.BrightnessApi/GetBrightness", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *brightnessApiClient) PullBrightness(ctx context.Context, in *PullBrightnessRequest, opts ...grpc.CallOption) (BrightnessApi_PullBrightnessClient, error) {
	stream, err := c.cc.NewStream(ctx, &_BrightnessApi_serviceDesc.Streams[0], "/smartcore.api.device.traits.BrightnessApi/PullBrightness", opts...)
	if err != nil {
		return nil, err
	}
	x := &brightnessApiPullBrightnessClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type BrightnessApi_PullBrightnessClient interface {
	Recv() (*PullBrightnessResponse, error)
	grpc.ClientStream
}

type brightnessApiPullBrightnessClient struct {
	grpc.ClientStream
}

func (x *brightnessApiPullBrightnessClient) Recv() (*PullBrightnessResponse, error) {
	m := new(PullBrightnessResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// BrightnessApiServer is the server API for BrightnessApi service.
// All implementations must embed UnimplementedBrightnessApiServer
// for forward compatibility
type BrightnessApiServer interface {
	// request that the range value be changed
	UpdateRangeValue(context.Context, *UpdateBrightnessRequest) (*Brightness, error)
	// get the current value of the range
	GetBrightness(context.Context, *GetBrightnessRequest) (*Brightness, error)
	// request updates to changes in the range value
	PullBrightness(*PullBrightnessRequest, BrightnessApi_PullBrightnessServer) error
	mustEmbedUnimplementedBrightnessApiServer()
}

// UnimplementedBrightnessApiServer must be embedded to have forward compatible implementations.
type UnimplementedBrightnessApiServer struct {
}

func (*UnimplementedBrightnessApiServer) UpdateRangeValue(context.Context, *UpdateBrightnessRequest) (*Brightness, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateRangeValue not implemented")
}
func (*UnimplementedBrightnessApiServer) GetBrightness(context.Context, *GetBrightnessRequest) (*Brightness, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBrightness not implemented")
}
func (*UnimplementedBrightnessApiServer) PullBrightness(*PullBrightnessRequest, BrightnessApi_PullBrightnessServer) error {
	return status.Errorf(codes.Unimplemented, "method PullBrightness not implemented")
}
func (*UnimplementedBrightnessApiServer) mustEmbedUnimplementedBrightnessApiServer() {}

func RegisterBrightnessApiServer(s *grpc.Server, srv BrightnessApiServer) {
	s.RegisterService(&_BrightnessApi_serviceDesc, srv)
}

func _BrightnessApi_UpdateRangeValue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateBrightnessRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BrightnessApiServer).UpdateRangeValue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.BrightnessApi/UpdateRangeValue",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BrightnessApiServer).UpdateRangeValue(ctx, req.(*UpdateBrightnessRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BrightnessApi_GetBrightness_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBrightnessRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BrightnessApiServer).GetBrightness(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.BrightnessApi/GetBrightness",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BrightnessApiServer).GetBrightness(ctx, req.(*GetBrightnessRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BrightnessApi_PullBrightness_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullBrightnessRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(BrightnessApiServer).PullBrightness(m, &brightnessApiPullBrightnessServer{stream})
}

type BrightnessApi_PullBrightnessServer interface {
	Send(*PullBrightnessResponse) error
	grpc.ServerStream
}

type brightnessApiPullBrightnessServer struct {
	grpc.ServerStream
}

func (x *brightnessApiPullBrightnessServer) Send(m *PullBrightnessResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _BrightnessApi_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.api.device.traits.BrightnessApi",
	HandlerType: (*BrightnessApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateRangeValue",
			Handler:    _BrightnessApi_UpdateRangeValue_Handler,
		},
		{
			MethodName: "GetBrightness",
			Handler:    _BrightnessApi_GetBrightness_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullBrightness",
			Handler:       _BrightnessApi_PullBrightness_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "device/traits/brightness.proto",
}