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

// SensorClient is the client API for Sensor service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SensorClient interface {
	// Get the current state of all reading this device supports
	GetState(ctx context.Context, in *GetSensorStateRequest, opts ...grpc.CallOption) (*SensorState, error)
	// Be notified of changes to any reading
	PullState(ctx context.Context, in *PullSensorStateRequest, opts ...grpc.CallOption) (Sensor_PullStateClient, error)
}

type sensorClient struct {
	cc grpc.ClientConnInterface
}

func NewSensorClient(cc grpc.ClientConnInterface) SensorClient {
	return &sensorClient{cc}
}

func (c *sensorClient) GetState(ctx context.Context, in *GetSensorStateRequest, opts ...grpc.CallOption) (*SensorState, error) {
	out := new(SensorState)
	err := c.cc.Invoke(ctx, "/smartcore.traits.Sensor/GetState", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sensorClient) PullState(ctx context.Context, in *PullSensorStateRequest, opts ...grpc.CallOption) (Sensor_PullStateClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Sensor_serviceDesc.Streams[0], "/smartcore.traits.Sensor/PullState", opts...)
	if err != nil {
		return nil, err
	}
	x := &sensorPullStateClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Sensor_PullStateClient interface {
	Recv() (*PullSensorStateResponse, error)
	grpc.ClientStream
}

type sensorPullStateClient struct {
	grpc.ClientStream
}

func (x *sensorPullStateClient) Recv() (*PullSensorStateResponse, error) {
	m := new(PullSensorStateResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// SensorServer is the server API for Sensor service.
// All implementations must embed UnimplementedSensorServer
// for forward compatibility
type SensorServer interface {
	// Get the current state of all reading this device supports
	GetState(context.Context, *GetSensorStateRequest) (*SensorState, error)
	// Be notified of changes to any reading
	PullState(*PullSensorStateRequest, Sensor_PullStateServer) error
	mustEmbedUnimplementedSensorServer()
}

// UnimplementedSensorServer must be embedded to have forward compatible implementations.
type UnimplementedSensorServer struct {
}

func (*UnimplementedSensorServer) GetState(context.Context, *GetSensorStateRequest) (*SensorState, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetState not implemented")
}
func (*UnimplementedSensorServer) PullState(*PullSensorStateRequest, Sensor_PullStateServer) error {
	return status.Errorf(codes.Unimplemented, "method PullState not implemented")
}
func (*UnimplementedSensorServer) mustEmbedUnimplementedSensorServer() {}

func RegisterSensorServer(s *grpc.Server, srv SensorServer) {
	s.RegisterService(&_Sensor_serviceDesc, srv)
}

func _Sensor_GetState_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSensorStateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SensorServer).GetState(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.Sensor/GetState",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SensorServer).GetState(ctx, req.(*GetSensorStateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Sensor_PullState_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullSensorStateRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SensorServer).PullState(m, &sensorPullStateServer{stream})
}

type Sensor_PullStateServer interface {
	Send(*PullSensorStateResponse) error
	grpc.ServerStream
}

type sensorPullStateServer struct {
	grpc.ServerStream
}

func (x *sensorPullStateServer) Send(m *PullSensorStateResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _Sensor_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.Sensor",
	HandlerType: (*SensorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetState",
			Handler:    _Sensor_GetState_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullState",
			Handler:       _Sensor_PullState_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/sensor.proto",
}
