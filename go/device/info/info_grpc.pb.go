// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package info

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// InfoClient is the client API for Info service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InfoClient interface {
	// Get devices that this service knows about
	ListDevices(ctx context.Context, in *ListDevicesRequest, opts ...grpc.CallOption) (*ListDevicesResponse, error)
	// Open a server stream that responds with changes to the set of devices described in the request
	PullDevices(ctx context.Context, in *PullDevicesRequest, opts ...grpc.CallOption) (Info_PullDevicesClient, error)
}

type infoClient struct {
	cc grpc.ClientConnInterface
}

func NewInfoClient(cc grpc.ClientConnInterface) InfoClient {
	return &infoClient{cc}
}

func (c *infoClient) ListDevices(ctx context.Context, in *ListDevicesRequest, opts ...grpc.CallOption) (*ListDevicesResponse, error) {
	out := new(ListDevicesResponse)
	err := c.cc.Invoke(ctx, "/smartcore.api.device.info.Info/ListDevices", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *infoClient) PullDevices(ctx context.Context, in *PullDevicesRequest, opts ...grpc.CallOption) (Info_PullDevicesClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Info_serviceDesc.Streams[0], "/smartcore.api.device.info.Info/PullDevices", opts...)
	if err != nil {
		return nil, err
	}
	x := &infoPullDevicesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Info_PullDevicesClient interface {
	Recv() (*PullDevicesResponse, error)
	grpc.ClientStream
}

type infoPullDevicesClient struct {
	grpc.ClientStream
}

func (x *infoPullDevicesClient) Recv() (*PullDevicesResponse, error) {
	m := new(PullDevicesResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// InfoServer is the server API for Info service.
// All implementations must embed UnimplementedInfoServer
// for forward compatibility
type InfoServer interface {
	// Get devices that this service knows about
	ListDevices(context.Context, *ListDevicesRequest) (*ListDevicesResponse, error)
	// Open a server stream that responds with changes to the set of devices described in the request
	PullDevices(*PullDevicesRequest, Info_PullDevicesServer) error
	mustEmbedUnimplementedInfoServer()
}

// UnimplementedInfoServer must be embedded to have forward compatible implementations.
type UnimplementedInfoServer struct {
}

func (*UnimplementedInfoServer) ListDevices(context.Context, *ListDevicesRequest) (*ListDevicesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDevices not implemented")
}
func (*UnimplementedInfoServer) PullDevices(*PullDevicesRequest, Info_PullDevicesServer) error {
	return status.Errorf(codes.Unimplemented, "method PullDevices not implemented")
}
func (*UnimplementedInfoServer) mustEmbedUnimplementedInfoServer() {}

func RegisterInfoServer(s *grpc.Server, srv InfoServer) {
	s.RegisterService(&_Info_serviceDesc, srv)
}

func _Info_ListDevices_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDevicesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InfoServer).ListDevices(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.api.device.info.Info/ListDevices",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InfoServer).ListDevices(ctx, req.(*ListDevicesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Info_PullDevices_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullDevicesRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(InfoServer).PullDevices(m, &infoPullDevicesServer{stream})
}

type Info_PullDevicesServer interface {
	Send(*PullDevicesResponse) error
	grpc.ServerStream
}

type infoPullDevicesServer struct {
	grpc.ServerStream
}

func (x *infoPullDevicesServer) Send(m *PullDevicesResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _Info_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.api.device.info.Info",
	HandlerType: (*InfoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListDevices",
			Handler:    _Info_ListDevices_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullDevices",
			Handler:       _Info_PullDevices_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "device/info/info.proto",
}