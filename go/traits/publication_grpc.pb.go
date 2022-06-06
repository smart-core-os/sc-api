// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: traits/publication.proto

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

// PublicationApiClient is the client API for PublicationApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PublicationApiClient interface {
	// Create a new publication.
	// The returned Publication will include an id unique for this new publication within the named device.
	// Note that if you want to create a new version for an existing publication, use UpdatePublication.
	CreatePublication(ctx context.Context, in *CreatePublicationRequest, opts ...grpc.CallOption) (*Publication, error)
	// Get the contents and metadata for a publication identified by id.
	// If version is not provided, this returns the newest version.
	GetPublication(ctx context.Context, in *GetPublicationRequest, opts ...grpc.CallOption) (*Publication, error)
	// Update a publication by id.
	// The updated Publication will have a new version, publish time, and reset receipt properties.
	// If the request has a version then the device will compare it with its known version and fail to update if
	// they differ enabling multiple concurrent uses of this API.
	UpdatePublication(ctx context.Context, in *UpdatePublicationRequest, opts ...grpc.CallOption) (*Publication, error)
	// Delete a publication by id.
	// If the request has a version then the device will compare it with its known version and fail to delete if
	// they differ enabling multiple concurrent uses of this API.
	DeletePublication(ctx context.Context, in *DeletePublicationRequest, opts ...grpc.CallOption) (*Publication, error)
	// Subscribe to changes for a single publication.
	// The stream is closed if the publication is deleted.
	PullPublication(ctx context.Context, in *PullPublicationRequest, opts ...grpc.CallOption) (PublicationApi_PullPublicationClient, error)
	// List all publications available on the device.
	// The version returned for each publication will be the latest.
	ListPublications(ctx context.Context, in *ListPublicationsRequest, opts ...grpc.CallOption) (*ListPublicationsResponse, error)
	// Subscribe to changes in publications on the device.
	PullPublications(ctx context.Context, in *PullPublicationsRequest, opts ...grpc.CallOption) (PublicationApi_PullPublicationsClient, error)
	// Acknowledge the receipt of a publication.
	// This API should only be called when the audience for a publication has received that publication.
	// Typically the audience will call this method itself after a get or pull publication method returns a new version.
	AcknowledgePublication(ctx context.Context, in *AcknowledgePublicationRequest, opts ...grpc.CallOption) (*Publication, error)
}

type publicationApiClient struct {
	cc grpc.ClientConnInterface
}

func NewPublicationApiClient(cc grpc.ClientConnInterface) PublicationApiClient {
	return &publicationApiClient{cc}
}

func (c *publicationApiClient) CreatePublication(ctx context.Context, in *CreatePublicationRequest, opts ...grpc.CallOption) (*Publication, error) {
	out := new(Publication)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PublicationApi/CreatePublication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicationApiClient) GetPublication(ctx context.Context, in *GetPublicationRequest, opts ...grpc.CallOption) (*Publication, error) {
	out := new(Publication)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PublicationApi/GetPublication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicationApiClient) UpdatePublication(ctx context.Context, in *UpdatePublicationRequest, opts ...grpc.CallOption) (*Publication, error) {
	out := new(Publication)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PublicationApi/UpdatePublication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicationApiClient) DeletePublication(ctx context.Context, in *DeletePublicationRequest, opts ...grpc.CallOption) (*Publication, error) {
	out := new(Publication)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PublicationApi/DeletePublication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicationApiClient) PullPublication(ctx context.Context, in *PullPublicationRequest, opts ...grpc.CallOption) (PublicationApi_PullPublicationClient, error) {
	stream, err := c.cc.NewStream(ctx, &PublicationApi_ServiceDesc.Streams[0], "/smartcore.traits.PublicationApi/PullPublication", opts...)
	if err != nil {
		return nil, err
	}
	x := &publicationApiPullPublicationClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PublicationApi_PullPublicationClient interface {
	Recv() (*PullPublicationResponse, error)
	grpc.ClientStream
}

type publicationApiPullPublicationClient struct {
	grpc.ClientStream
}

func (x *publicationApiPullPublicationClient) Recv() (*PullPublicationResponse, error) {
	m := new(PullPublicationResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *publicationApiClient) ListPublications(ctx context.Context, in *ListPublicationsRequest, opts ...grpc.CallOption) (*ListPublicationsResponse, error) {
	out := new(ListPublicationsResponse)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PublicationApi/ListPublications", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *publicationApiClient) PullPublications(ctx context.Context, in *PullPublicationsRequest, opts ...grpc.CallOption) (PublicationApi_PullPublicationsClient, error) {
	stream, err := c.cc.NewStream(ctx, &PublicationApi_ServiceDesc.Streams[1], "/smartcore.traits.PublicationApi/PullPublications", opts...)
	if err != nil {
		return nil, err
	}
	x := &publicationApiPullPublicationsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PublicationApi_PullPublicationsClient interface {
	Recv() (*PullPublicationsResponse, error)
	grpc.ClientStream
}

type publicationApiPullPublicationsClient struct {
	grpc.ClientStream
}

func (x *publicationApiPullPublicationsClient) Recv() (*PullPublicationsResponse, error) {
	m := new(PullPublicationsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *publicationApiClient) AcknowledgePublication(ctx context.Context, in *AcknowledgePublicationRequest, opts ...grpc.CallOption) (*Publication, error) {
	out := new(Publication)
	err := c.cc.Invoke(ctx, "/smartcore.traits.PublicationApi/AcknowledgePublication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PublicationApiServer is the server API for PublicationApi service.
// All implementations must embed UnimplementedPublicationApiServer
// for forward compatibility
type PublicationApiServer interface {
	// Create a new publication.
	// The returned Publication will include an id unique for this new publication within the named device.
	// Note that if you want to create a new version for an existing publication, use UpdatePublication.
	CreatePublication(context.Context, *CreatePublicationRequest) (*Publication, error)
	// Get the contents and metadata for a publication identified by id.
	// If version is not provided, this returns the newest version.
	GetPublication(context.Context, *GetPublicationRequest) (*Publication, error)
	// Update a publication by id.
	// The updated Publication will have a new version, publish time, and reset receipt properties.
	// If the request has a version then the device will compare it with its known version and fail to update if
	// they differ enabling multiple concurrent uses of this API.
	UpdatePublication(context.Context, *UpdatePublicationRequest) (*Publication, error)
	// Delete a publication by id.
	// If the request has a version then the device will compare it with its known version and fail to delete if
	// they differ enabling multiple concurrent uses of this API.
	DeletePublication(context.Context, *DeletePublicationRequest) (*Publication, error)
	// Subscribe to changes for a single publication.
	// The stream is closed if the publication is deleted.
	PullPublication(*PullPublicationRequest, PublicationApi_PullPublicationServer) error
	// List all publications available on the device.
	// The version returned for each publication will be the latest.
	ListPublications(context.Context, *ListPublicationsRequest) (*ListPublicationsResponse, error)
	// Subscribe to changes in publications on the device.
	PullPublications(*PullPublicationsRequest, PublicationApi_PullPublicationsServer) error
	// Acknowledge the receipt of a publication.
	// This API should only be called when the audience for a publication has received that publication.
	// Typically the audience will call this method itself after a get or pull publication method returns a new version.
	AcknowledgePublication(context.Context, *AcknowledgePublicationRequest) (*Publication, error)
	mustEmbedUnimplementedPublicationApiServer()
}

// UnimplementedPublicationApiServer must be embedded to have forward compatible implementations.
type UnimplementedPublicationApiServer struct {
}

func (UnimplementedPublicationApiServer) CreatePublication(context.Context, *CreatePublicationRequest) (*Publication, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePublication not implemented")
}
func (UnimplementedPublicationApiServer) GetPublication(context.Context, *GetPublicationRequest) (*Publication, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPublication not implemented")
}
func (UnimplementedPublicationApiServer) UpdatePublication(context.Context, *UpdatePublicationRequest) (*Publication, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePublication not implemented")
}
func (UnimplementedPublicationApiServer) DeletePublication(context.Context, *DeletePublicationRequest) (*Publication, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePublication not implemented")
}
func (UnimplementedPublicationApiServer) PullPublication(*PullPublicationRequest, PublicationApi_PullPublicationServer) error {
	return status.Errorf(codes.Unimplemented, "method PullPublication not implemented")
}
func (UnimplementedPublicationApiServer) ListPublications(context.Context, *ListPublicationsRequest) (*ListPublicationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPublications not implemented")
}
func (UnimplementedPublicationApiServer) PullPublications(*PullPublicationsRequest, PublicationApi_PullPublicationsServer) error {
	return status.Errorf(codes.Unimplemented, "method PullPublications not implemented")
}
func (UnimplementedPublicationApiServer) AcknowledgePublication(context.Context, *AcknowledgePublicationRequest) (*Publication, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AcknowledgePublication not implemented")
}
func (UnimplementedPublicationApiServer) mustEmbedUnimplementedPublicationApiServer() {}

// UnsafePublicationApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PublicationApiServer will
// result in compilation errors.
type UnsafePublicationApiServer interface {
	mustEmbedUnimplementedPublicationApiServer()
}

func RegisterPublicationApiServer(s grpc.ServiceRegistrar, srv PublicationApiServer) {
	s.RegisterService(&PublicationApi_ServiceDesc, srv)
}

func _PublicationApi_CreatePublication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePublicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicationApiServer).CreatePublication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PublicationApi/CreatePublication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicationApiServer).CreatePublication(ctx, req.(*CreatePublicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicationApi_GetPublication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPublicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicationApiServer).GetPublication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PublicationApi/GetPublication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicationApiServer).GetPublication(ctx, req.(*GetPublicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicationApi_UpdatePublication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePublicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicationApiServer).UpdatePublication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PublicationApi/UpdatePublication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicationApiServer).UpdatePublication(ctx, req.(*UpdatePublicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicationApi_DeletePublication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePublicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicationApiServer).DeletePublication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PublicationApi/DeletePublication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicationApiServer).DeletePublication(ctx, req.(*DeletePublicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicationApi_PullPublication_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullPublicationRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PublicationApiServer).PullPublication(m, &publicationApiPullPublicationServer{stream})
}

type PublicationApi_PullPublicationServer interface {
	Send(*PullPublicationResponse) error
	grpc.ServerStream
}

type publicationApiPullPublicationServer struct {
	grpc.ServerStream
}

func (x *publicationApiPullPublicationServer) Send(m *PullPublicationResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PublicationApi_ListPublications_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPublicationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicationApiServer).ListPublications(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PublicationApi/ListPublications",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicationApiServer).ListPublications(ctx, req.(*ListPublicationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PublicationApi_PullPublications_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PullPublicationsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PublicationApiServer).PullPublications(m, &publicationApiPullPublicationsServer{stream})
}

type PublicationApi_PullPublicationsServer interface {
	Send(*PullPublicationsResponse) error
	grpc.ServerStream
}

type publicationApiPullPublicationsServer struct {
	grpc.ServerStream
}

func (x *publicationApiPullPublicationsServer) Send(m *PullPublicationsResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _PublicationApi_AcknowledgePublication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AcknowledgePublicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PublicationApiServer).AcknowledgePublication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/smartcore.traits.PublicationApi/AcknowledgePublication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PublicationApiServer).AcknowledgePublication(ctx, req.(*AcknowledgePublicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PublicationApi_ServiceDesc is the grpc.ServiceDesc for PublicationApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PublicationApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.traits.PublicationApi",
	HandlerType: (*PublicationApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePublication",
			Handler:    _PublicationApi_CreatePublication_Handler,
		},
		{
			MethodName: "GetPublication",
			Handler:    _PublicationApi_GetPublication_Handler,
		},
		{
			MethodName: "UpdatePublication",
			Handler:    _PublicationApi_UpdatePublication_Handler,
		},
		{
			MethodName: "DeletePublication",
			Handler:    _PublicationApi_DeletePublication_Handler,
		},
		{
			MethodName: "ListPublications",
			Handler:    _PublicationApi_ListPublications_Handler,
		},
		{
			MethodName: "AcknowledgePublication",
			Handler:    _PublicationApi_AcknowledgePublication_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PullPublication",
			Handler:       _PublicationApi_PullPublication_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "PullPublications",
			Handler:       _PublicationApi_PullPublications_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "traits/publication.proto",
}