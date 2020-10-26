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

// OccupancySensorApiClient is the client API for OccupancySensorApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OccupancySensorApiClient interface {
	// Get the current motion state for the device.
	GetOccupancy(ctx context.Context, in *GetOccupancyRequest, opts ...grpc.CallOption) (*Occupancy, error)
	// subscribe to changes in the motion state for the device.
	PullOccupancy(ctx context.Context, in *PullOccupancyRequest, opts ...grpc.CallOption) (OccupancySensorApi_PullOccupancyClient, error)
}

type occupancySensorApiClient struct {
	cc grpc.ClientConnInterface
}

func NewOccupancySensorApiClient(cc grpc.ClientConnInterface) OccupancySensorApiClient {
	return &occupancySensorApiClient{cc}
}

func (c *occupancySensorApiClient) GetOccupancy(ctx context.Context, in *GetOccupancyRequest, opts ...grpc.CallOption) (*Occupancy, error) {
	out := new(Occupancy)
	err := c.cc.Invoke(ctx, "/smartcore.traits.OccupancySensorApi/GetOccupancy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *occupancySensorApiClient) PullOccupancy(ctx context.Context, in *PullOccupancyRequest, opts ...grpc.CallOption) (OccupancySensorApi_PullOccupancyClient, error) {
	stream, err := c.cc.NewStream(ctx, &_OccupancySensorApi_serviceDesc.Streams[0], "/smartcore.traits.OccupancySensorApi/PullOccupancy", opts...)
	if err != nil {
		return nil, err
	}
	x := &occupancySensorApiPullOccupancyClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OccupancySensorApi_PullOccupancyClient interface {
	Recv() (*PullOccupancyResponse, error)
	grpc.ClientStream
}

type occupancySensorApiPullOccupancyClient struct {
	grpc.ClientStream
}

func (x *occupancySensorApiPullOccupancyClient) Recv() (*PullOccupancyResponse, error) {
	m := new(PullOccupancyResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OccupancySensorApiServer is the server API for OccupancySensorApi service.
// All implementations must embed UnimplementedOccupancySensorApiServer
// for forward compatibility
type OccupancySensorApiServer interface {
	// Get the current motion state for the device.
	GetOccupancy(context.Context, *GetOccupancyRequest) (*Occupancy, error)
	// subscribe to changes in the motion state for the device.
	PullOccupancy(*PullOccupancyRequest, OccupancySensorApi_PullOccupancyServer) error
	mustEmbedUnimplementedOccupancySensorApiServer()
}

// UnimplementedOccupancySensorApiServer must be embedded to have forward compatible implementations.
type UnimplementedOccupancySensorApiServer struct {
}

func (*UnimplementedOccupancySensorApiServer) GetOccupancy(context.Context, *GetOccupancyRequest) (*Occupancy, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOccupancy not implemented")
}
func (*UnimplementedOccupancySensorApiServer) PullOccupancy(*PullOccupancyRequest, OccupancySensorApi_PullOccupancyServer) error {
	return status.Errorf(codes.Unimplemented, "method PullOccupancy not implemented")
}
func (*UnimplementedOccupancySensorApiServer) mustEmbedUnimplementedOccupancySensorApiServer() {}

func RegisterOccupancySensorApiServer(s *grpc.Server, srv OccupancySensorApiServer) {
	s.RegisterService(&_OccupancySensorApi_serviceDesc, srv)
}

func _OccupancySensorApi_GetOccupancy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOccupancyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OccupancySensorApiServer).GetOccupancy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.OccupancySensorApi/GetOccupancy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OccupancySensorApiServer).GetOccupancy(ctx, req.(*GetOccupancyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OccupancySensorApi_PullOccupancy_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullOccupancyRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OccupancySensorApiServer).PullOccupancy(m, &occupancySensorApiPullOccupancyServer{stream})
}

type OccupancySensorApi_PullOccupancyServer interface {
	Send(*PullOccupancyResponse) error
	grpc.ServerStream
}

type occupancySensorApiPullOccupancyServer struct {
	grpc.ServerStream
}

func (x *occupancySensorApiPullOccupancyServer) Send(m *PullOccupancyResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _OccupancySensorApi_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.OccupancySensorApi",
	HandlerType: (*OccupancySensorApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOccupancy",
			Handler:    _OccupancySensorApi_GetOccupancy_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullOccupancy",
			Handler:       _OccupancySensorApi_PullOccupancy_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/occupancy_sensor.proto",
}