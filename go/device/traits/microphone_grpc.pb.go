// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package traits

import (
	context "context"
	types "git.vanti.co.uk/smartcore/sc-api/go/types"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// MicrophoneClient is the client API for Microphone service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MicrophoneClient interface {
	// Get the current state of the gain for the device
	GetGain(ctx context.Context, in *GetMicrophoneGainRequest, opts ...grpc.CallOption) (*types.Volume, error)
	// update the gain state for the device
	UpdateGain(ctx context.Context, in *UpdateMicrophoneGainRequest, opts ...grpc.CallOption) (*types.Volume, error)
	PullGain(ctx context.Context, in *PullMicrophoneGainRequest, opts ...grpc.CallOption) (Microphone_PullGainClient, error)
}

type microphoneClient struct {
	cc grpc.ClientConnInterface
}

func NewMicrophoneClient(cc grpc.ClientConnInterface) MicrophoneClient {
	return &microphoneClient{cc}
}

func (c *microphoneClient) GetGain(ctx context.Context, in *GetMicrophoneGainRequest, opts ...grpc.CallOption) (*types.Volume, error) {
	out := new(types.Volume)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.Microphone/GetGain", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *microphoneClient) UpdateGain(ctx context.Context, in *UpdateMicrophoneGainRequest, opts ...grpc.CallOption) (*types.Volume, error) {
	out := new(types.Volume)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.traits.Microphone/UpdateGain", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *microphoneClient) PullGain(ctx context.Context, in *PullMicrophoneGainRequest, opts ...grpc.CallOption) (Microphone_PullGainClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Microphone_serviceDesc.Streams[0], "/smartcore.api.device.traits.Microphone/PullGain", opts...)
	if err != nil {
		return nil, err
	}
	x := &microphonePullGainClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Microphone_PullGainClient interface {
	Recv() (*PullMicrophoneGainResponse, error)
	grpc.ClientStream
}

type microphonePullGainClient struct {
	grpc.ClientStream
}

func (x *microphonePullGainClient) Recv() (*PullMicrophoneGainResponse, error) {
	m := new(PullMicrophoneGainResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MicrophoneServer is the server API for Microphone service.
// All implementations must embed UnimplementedMicrophoneServer
// for forward compatibility
type MicrophoneServer interface {
	// Get the current state of the gain for the device
	GetGain(context.Context, *GetMicrophoneGainRequest) (*types.Volume, error)
	// update the gain state for the device
	UpdateGain(context.Context, *UpdateMicrophoneGainRequest) (*types.Volume, error)
	PullGain(*PullMicrophoneGainRequest, Microphone_PullGainServer) error
	mustEmbedUnimplementedMicrophoneServer()
}

// UnimplementedMicrophoneServer must be embedded to have forward compatible implementations.
type UnimplementedMicrophoneServer struct {
}

func (*UnimplementedMicrophoneServer) GetGain(context.Context, *GetMicrophoneGainRequest) (*types.Volume, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetGain not implemented")
}
func (*UnimplementedMicrophoneServer) UpdateGain(context.Context, *UpdateMicrophoneGainRequest) (*types.Volume, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateGain not implemented")
}
func (*UnimplementedMicrophoneServer) PullGain(*PullMicrophoneGainRequest, Microphone_PullGainServer) error {
	return status.Errorf(codes.Unimplemented, "method PullGain not implemented")
}
func (*UnimplementedMicrophoneServer) mustEmbedUnimplementedMicrophoneServer() {}

func RegisterMicrophoneServer(s *grpc.Server, srv MicrophoneServer) {
	s.RegisterService(&_Microphone_serviceDesc, srv)
}

func _Microphone_GetGain_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMicrophoneGainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrophoneServer).GetGain(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.Microphone/GetGain",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrophoneServer).GetGain(ctx, req.(*GetMicrophoneGainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Microphone_UpdateGain_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateMicrophoneGainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrophoneServer).UpdateGain(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.traits.Microphone/UpdateGain",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrophoneServer).UpdateGain(ctx, req.(*UpdateMicrophoneGainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Microphone_PullGain_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullMicrophoneGainRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MicrophoneServer).PullGain(m, &microphonePullGainServer{stream})
}

type Microphone_PullGainServer interface {
	Send(*PullMicrophoneGainResponse) error
	grpc.ServerStream
}

type microphonePullGainServer struct {
	grpc.ServerStream
}

func (x *microphonePullGainServer) Send(m *PullMicrophoneGainResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _Microphone_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.api.device.traits.Microphone",
	HandlerType: (*MicrophoneServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetGain",
			Handler:    _Microphone_GetGain_Handler,
		},
		{
			MethodName: "UpdateGain",
			Handler:    _Microphone_UpdateGain_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullGain",
			Handler:       _Microphone_PullGain_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "device/traits/microphone.proto",
}