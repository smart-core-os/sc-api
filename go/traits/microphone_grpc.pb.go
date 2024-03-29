// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.2
// source: traits/microphone.proto

package traits

import (
	context "context"
	types "github.com/smart-core-os/sc-api/go/types"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	MicrophoneApi_GetGain_FullMethodName    = "/smartcore.traits.MicrophoneApi/GetGain"
	MicrophoneApi_UpdateGain_FullMethodName = "/smartcore.traits.MicrophoneApi/UpdateGain"
	MicrophoneApi_PullGain_FullMethodName   = "/smartcore.traits.MicrophoneApi/PullGain"
)

// MicrophoneApiClient is the client API for MicrophoneApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MicrophoneApiClient interface {
	// Get the current state of the gain for the device
	GetGain(ctx context.Context, in *GetMicrophoneGainRequest, opts ...grpc.CallOption) (*types.AudioLevel, error)
	// update the gain state for the device
	UpdateGain(ctx context.Context, in *UpdateMicrophoneGainRequest, opts ...grpc.CallOption) (*types.AudioLevel, error)
	PullGain(ctx context.Context, in *PullMicrophoneGainRequest, opts ...grpc.CallOption) (MicrophoneApi_PullGainClient, error)
}

type microphoneApiClient struct {
	cc grpc.ClientConnInterface
}

func NewMicrophoneApiClient(cc grpc.ClientConnInterface) MicrophoneApiClient {
	return &microphoneApiClient{cc}
}

func (c *microphoneApiClient) GetGain(ctx context.Context, in *GetMicrophoneGainRequest, opts ...grpc.CallOption) (*types.AudioLevel, error) {
	out := new(types.AudioLevel)
	err := c.cc.Invoke(ctx, MicrophoneApi_GetGain_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *microphoneApiClient) UpdateGain(ctx context.Context, in *UpdateMicrophoneGainRequest, opts ...grpc.CallOption) (*types.AudioLevel, error) {
	out := new(types.AudioLevel)
	err := c.cc.Invoke(ctx, MicrophoneApi_UpdateGain_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *microphoneApiClient) PullGain(ctx context.Context, in *PullMicrophoneGainRequest, opts ...grpc.CallOption) (MicrophoneApi_PullGainClient, error) {
	stream, err := c.cc.NewStream(ctx, &MicrophoneApi_ServiceDesc.Streams[0], MicrophoneApi_PullGain_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &microphoneApiPullGainClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MicrophoneApi_PullGainClient interface {
	Recv() (*PullMicrophoneGainResponse, error)
	grpc.ClientStream
}

type microphoneApiPullGainClient struct {
	grpc.ClientStream
}

func (x *microphoneApiPullGainClient) Recv() (*PullMicrophoneGainResponse, error) {
	m := new(PullMicrophoneGainResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MicrophoneApiServer is the server API for MicrophoneApi service.
// All implementations must embed UnimplementedMicrophoneApiServer
// for forward compatibility
type MicrophoneApiServer interface {
	// Get the current state of the gain for the device
	GetGain(context.Context, *GetMicrophoneGainRequest) (*types.AudioLevel, error)
	// update the gain state for the device
	UpdateGain(context.Context, *UpdateMicrophoneGainRequest) (*types.AudioLevel, error)
	PullGain(*PullMicrophoneGainRequest, MicrophoneApi_PullGainServer) error
	mustEmbedUnimplementedMicrophoneApiServer()
}

// UnimplementedMicrophoneApiServer must be embedded to have forward compatible implementations.
type UnimplementedMicrophoneApiServer struct {
}

func (UnimplementedMicrophoneApiServer) GetGain(context.Context, *GetMicrophoneGainRequest) (*types.AudioLevel, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetGain not implemented")
}
func (UnimplementedMicrophoneApiServer) UpdateGain(context.Context, *UpdateMicrophoneGainRequest) (*types.AudioLevel, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateGain not implemented")
}
func (UnimplementedMicrophoneApiServer) PullGain(*PullMicrophoneGainRequest, MicrophoneApi_PullGainServer) error {
	return status.Errorf(codes.Unimplemented, "method PullGain not implemented")
}
func (UnimplementedMicrophoneApiServer) mustEmbedUnimplementedMicrophoneApiServer() {}

// UnsafeMicrophoneApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MicrophoneApiServer will
// result in compilation errors.
type UnsafeMicrophoneApiServer interface {
	mustEmbedUnimplementedMicrophoneApiServer()
}

func RegisterMicrophoneApiServer(s grpc.ServiceRegistrar, srv MicrophoneApiServer) {
	s.RegisterService(&MicrophoneApi_ServiceDesc, srv)
}

func _MicrophoneApi_GetGain_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMicrophoneGainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrophoneApiServer).GetGain(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MicrophoneApi_GetGain_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrophoneApiServer).GetGain(ctx, req.(*GetMicrophoneGainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MicrophoneApi_UpdateGain_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateMicrophoneGainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrophoneApiServer).UpdateGain(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MicrophoneApi_UpdateGain_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrophoneApiServer).UpdateGain(ctx, req.(*UpdateMicrophoneGainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MicrophoneApi_PullGain_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullMicrophoneGainRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MicrophoneApiServer).PullGain(m, &microphoneApiPullGainServer{stream})
}

type MicrophoneApi_PullGainServer interface {
	Send(*PullMicrophoneGainResponse) error
	grpc.ServerStream
}

type microphoneApiPullGainServer struct {
	grpc.ServerStream
}

func (x *microphoneApiPullGainServer) Send(m *PullMicrophoneGainResponse) error {
	return x.ServerStream.SendMsg(m)
}

// MicrophoneApi_ServiceDesc is the grpc.ServiceDesc for MicrophoneApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MicrophoneApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MicrophoneApi",
	HandlerType: (*MicrophoneApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetGain",
			Handler:    _MicrophoneApi_GetGain_Handler,
		},
		{
			MethodName: "UpdateGain",
			Handler:    _MicrophoneApi_UpdateGain_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullGain",
			Handler:       _MicrophoneApi_PullGain_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/microphone.proto",
}

const (
	MicrophoneInfo_DescribeGain_FullMethodName = "/smartcore.traits.MicrophoneInfo/DescribeGain"
)

// MicrophoneInfoClient is the client API for MicrophoneInfo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MicrophoneInfoClient interface {
	// Get information about how a named device implements Gain features
	DescribeGain(ctx context.Context, in *DescribeGainRequest, opts ...grpc.CallOption) (*GainSupport, error)
}

type microphoneInfoClient struct {
	cc grpc.ClientConnInterface
}

func NewMicrophoneInfoClient(cc grpc.ClientConnInterface) MicrophoneInfoClient {
	return &microphoneInfoClient{cc}
}

func (c *microphoneInfoClient) DescribeGain(ctx context.Context, in *DescribeGainRequest, opts ...grpc.CallOption) (*GainSupport, error) {
	out := new(GainSupport)
	err := c.cc.Invoke(ctx, MicrophoneInfo_DescribeGain_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MicrophoneInfoServer is the server API for MicrophoneInfo service.
// All implementations must embed UnimplementedMicrophoneInfoServer
// for forward compatibility
type MicrophoneInfoServer interface {
	// Get information about how a named device implements Gain features
	DescribeGain(context.Context, *DescribeGainRequest) (*GainSupport, error)
	mustEmbedUnimplementedMicrophoneInfoServer()
}

// UnimplementedMicrophoneInfoServer must be embedded to have forward compatible implementations.
type UnimplementedMicrophoneInfoServer struct {
}

func (UnimplementedMicrophoneInfoServer) DescribeGain(context.Context, *DescribeGainRequest) (*GainSupport, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DescribeGain not implemented")
}
func (UnimplementedMicrophoneInfoServer) mustEmbedUnimplementedMicrophoneInfoServer() {}

// UnsafeMicrophoneInfoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MicrophoneInfoServer will
// result in compilation errors.
type UnsafeMicrophoneInfoServer interface {
	mustEmbedUnimplementedMicrophoneInfoServer()
}

func RegisterMicrophoneInfoServer(s grpc.ServiceRegistrar, srv MicrophoneInfoServer) {
	s.RegisterService(&MicrophoneInfo_ServiceDesc, srv)
}

func _MicrophoneInfo_DescribeGain_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DescribeGainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrophoneInfoServer).DescribeGain(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MicrophoneInfo_DescribeGain_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrophoneInfoServer).DescribeGain(ctx, req.(*DescribeGainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MicrophoneInfo_ServiceDesc is the grpc.ServiceDesc for MicrophoneInfo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MicrophoneInfo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.MicrophoneInfo",
	HandlerType: (*MicrophoneInfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DescribeGain",
			Handler:    _MicrophoneInfo_DescribeGain_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "traits/microphone.proto",
}
