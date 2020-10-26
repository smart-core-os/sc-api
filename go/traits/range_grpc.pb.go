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

// RangeClient is the client API for Range service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RangeClient interface {
	// request that the range value be changes
	UpdateRangeValue(ctx context.Context, in *UpdateRangeValueRequest, opts ...grpc.CallOption) (*types.Int32Var, error)
	// get the current value of the range
	GetRangeValue(ctx context.Context, in *GetRangeValueRequest, opts ...grpc.CallOption) (*types.Int32Var, error)
	// request updates to changes in the range value
	PullRangeValue(ctx context.Context, in *PullRangeValueRequest, opts ...grpc.CallOption) (Range_PullRangeValueClient, error)
}

type rangeClient struct {
	cc grpc.ClientConnInterface
}

func NewRangeClient(cc grpc.ClientConnInterface) RangeClient {
	return &rangeClient{cc}
}

func (c *rangeClient) UpdateRangeValue(ctx context.Context, in *UpdateRangeValueRequest, opts ...grpc.CallOption) (*types.Int32Var, error) {
	out := new(types.Int32Var)
	err := c.cc.Invoke(ctx, "/smartcore.traits.Range/UpdateRangeValue", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rangeClient) GetRangeValue(ctx context.Context, in *GetRangeValueRequest, opts ...grpc.CallOption) (*types.Int32Var, error) {
	out := new(types.Int32Var)
	err := c.cc.Invoke(ctx, "/smartcore.traits.Range/GetRangeValue", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rangeClient) PullRangeValue(ctx context.Context, in *PullRangeValueRequest, opts ...grpc.CallOption) (Range_PullRangeValueClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Range_serviceDesc.Streams[0], "/smartcore.traits.Range/PullRangeValue", opts...)
	if err != nil {
		return nil, err
	}
	x := &rangePullRangeValueClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Range_PullRangeValueClient interface {
	Recv() (*PullRangeValueResponse, error)
	grpc.ClientStream
}

type rangePullRangeValueClient struct {
	grpc.ClientStream
}

func (x *rangePullRangeValueClient) Recv() (*PullRangeValueResponse, error) {
	m := new(PullRangeValueResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// RangeServer is the server API for Range service.
// All implementations must embed UnimplementedRangeServer
// for forward compatibility
type RangeServer interface {
	// request that the range value be changes
	UpdateRangeValue(context.Context, *UpdateRangeValueRequest) (*types.Int32Var, error)
	// get the current value of the range
	GetRangeValue(context.Context, *GetRangeValueRequest) (*types.Int32Var, error)
	// request updates to changes in the range value
	PullRangeValue(*PullRangeValueRequest, Range_PullRangeValueServer) error
	mustEmbedUnimplementedRangeServer()
}

// UnimplementedRangeServer must be embedded to have forward compatible implementations.
type UnimplementedRangeServer struct {
}

func (*UnimplementedRangeServer) UpdateRangeValue(context.Context, *UpdateRangeValueRequest) (*types.Int32Var, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateRangeValue not implemented")
}
func (*UnimplementedRangeServer) GetRangeValue(context.Context, *GetRangeValueRequest) (*types.Int32Var, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRangeValue not implemented")
}
func (*UnimplementedRangeServer) PullRangeValue(*PullRangeValueRequest, Range_PullRangeValueServer) error {
	return status.Errorf(codes.Unimplemented, "method PullRangeValue not implemented")
}
func (*UnimplementedRangeServer) mustEmbedUnimplementedRangeServer() {}

func RegisterRangeServer(s *grpc.Server, srv RangeServer) {
	s.RegisterService(&_Range_serviceDesc, srv)
}

func _Range_UpdateRangeValue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateRangeValueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RangeServer).UpdateRangeValue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.Range/UpdateRangeValue",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RangeServer).UpdateRangeValue(ctx, req.(*UpdateRangeValueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Range_GetRangeValue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRangeValueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RangeServer).GetRangeValue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.Range/GetRangeValue",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RangeServer).GetRangeValue(ctx, req.(*GetRangeValueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Range_PullRangeValue_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullRangeValueRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(RangeServer).PullRangeValue(m, &rangePullRangeValueServer{stream})
}

type Range_PullRangeValueServer interface {
	Send(*PullRangeValueResponse) error
	grpc.ServerStream
}

type rangePullRangeValueServer struct {
	grpc.ServerStream
}

func (x *rangePullRangeValueServer) Send(m *PullRangeValueResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _Range_serviceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.Range",
	HandlerType: (*RangeServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateRangeValue",
			Handler:    _Range_UpdateRangeValue_Handler,
		},
		{
			MethodName: "GetRangeValue",
			Handler:    _Range_GetRangeValue_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullRangeValue",
			Handler:       _Range_PullRangeValue_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/range.proto",
}
