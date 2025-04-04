// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.29.3
// source: info/auth.proto

package info

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	AuthProvider_AddAccount_FullMethodName               = "/smartcore.info.AuthProvider/AddAccount"
	AuthProvider_RemoveAccount_FullMethodName            = "/smartcore.info.AuthProvider/RemoveAccount"
	AuthProvider_UpdateAccountPermissions_FullMethodName = "/smartcore.info.AuthProvider/UpdateAccountPermissions"
	AuthProvider_GenerateToken_FullMethodName            = "/smartcore.info.AuthProvider/GenerateToken"
)

// AuthProviderClient is the client API for AuthProvider service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// The auth provider service enables granular control of security permissions for a particular Smart Core controller or
// system. It does this using the concept of 'Accounts', each of which has a certain set of permissions for which
// device(s) and/or trait(s)/service(s) they are allowed to access.
type AuthProviderClient interface {
	AddAccount(ctx context.Context, in *AddAccountRequest, opts ...grpc.CallOption) (*AddAccountResponse, error)
	RemoveAccount(ctx context.Context, in *RemoveAccountRequest, opts ...grpc.CallOption) (*RemoveAccountResponse, error)
	UpdateAccountPermissions(ctx context.Context, in *UpdateAccountPermissionsRequest, opts ...grpc.CallOption) (*UpdateAccountPermissionsResponse, error)
	GenerateToken(ctx context.Context, in *GenerateTokenRequest, opts ...grpc.CallOption) (*GenerateTokenResponse, error)
}

type authProviderClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthProviderClient(cc grpc.ClientConnInterface) AuthProviderClient {
	return &authProviderClient{cc}
}

func (c *authProviderClient) AddAccount(ctx context.Context, in *AddAccountRequest, opts ...grpc.CallOption) (*AddAccountResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AddAccountResponse)
	err := c.cc.Invoke(ctx, AuthProvider_AddAccount_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authProviderClient) RemoveAccount(ctx context.Context, in *RemoveAccountRequest, opts ...grpc.CallOption) (*RemoveAccountResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(RemoveAccountResponse)
	err := c.cc.Invoke(ctx, AuthProvider_RemoveAccount_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authProviderClient) UpdateAccountPermissions(ctx context.Context, in *UpdateAccountPermissionsRequest, opts ...grpc.CallOption) (*UpdateAccountPermissionsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UpdateAccountPermissionsResponse)
	err := c.cc.Invoke(ctx, AuthProvider_UpdateAccountPermissions_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authProviderClient) GenerateToken(ctx context.Context, in *GenerateTokenRequest, opts ...grpc.CallOption) (*GenerateTokenResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GenerateTokenResponse)
	err := c.cc.Invoke(ctx, AuthProvider_GenerateToken_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthProviderServer is the server API for AuthProvider service.
// All implementations must embed UnimplementedAuthProviderServer
// for forward compatibility.
//
// The auth provider service enables granular control of security permissions for a particular Smart Core controller or
// system. It does this using the concept of 'Accounts', each of which has a certain set of permissions for which
// device(s) and/or trait(s)/service(s) they are allowed to access.
type AuthProviderServer interface {
	AddAccount(context.Context, *AddAccountRequest) (*AddAccountResponse, error)
	RemoveAccount(context.Context, *RemoveAccountRequest) (*RemoveAccountResponse, error)
	UpdateAccountPermissions(context.Context, *UpdateAccountPermissionsRequest) (*UpdateAccountPermissionsResponse, error)
	GenerateToken(context.Context, *GenerateTokenRequest) (*GenerateTokenResponse, error)
	mustEmbedUnimplementedAuthProviderServer()
}

// UnimplementedAuthProviderServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedAuthProviderServer struct{}

func (UnimplementedAuthProviderServer) AddAccount(context.Context, *AddAccountRequest) (*AddAccountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddAccount not implemented")
}
func (UnimplementedAuthProviderServer) RemoveAccount(context.Context, *RemoveAccountRequest) (*RemoveAccountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveAccount not implemented")
}
func (UnimplementedAuthProviderServer) UpdateAccountPermissions(context.Context, *UpdateAccountPermissionsRequest) (*UpdateAccountPermissionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAccountPermissions not implemented")
}
func (UnimplementedAuthProviderServer) GenerateToken(context.Context, *GenerateTokenRequest) (*GenerateTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateToken not implemented")
}
func (UnimplementedAuthProviderServer) mustEmbedUnimplementedAuthProviderServer() {}
func (UnimplementedAuthProviderServer) testEmbeddedByValue()                      {}

// UnsafeAuthProviderServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthProviderServer will
// result in compilation errors.
type UnsafeAuthProviderServer interface {
	mustEmbedUnimplementedAuthProviderServer()
}

func RegisterAuthProviderServer(s grpc.ServiceRegistrar, srv AuthProviderServer) {
	// If the following call pancis, it indicates UnimplementedAuthProviderServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&AuthProvider_ServiceDesc, srv)
}

func _AuthProvider_AddAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddAccountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthProviderServer).AddAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthProvider_AddAccount_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthProviderServer).AddAccount(ctx, req.(*AddAccountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthProvider_RemoveAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveAccountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthProviderServer).RemoveAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthProvider_RemoveAccount_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthProviderServer).RemoveAccount(ctx, req.(*RemoveAccountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthProvider_UpdateAccountPermissions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAccountPermissionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthProviderServer).UpdateAccountPermissions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthProvider_UpdateAccountPermissions_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthProviderServer).UpdateAccountPermissions(ctx, req.(*UpdateAccountPermissionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthProvider_GenerateToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenerateTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthProviderServer).GenerateToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthProvider_GenerateToken_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthProviderServer).GenerateToken(ctx, req.(*GenerateTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthProvider_ServiceDesc is the grpc.ServiceDesc for AuthProvider service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthProvider_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "smartcore.info.AuthProvider",
	HandlerType: (*AuthProviderServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddAccount",
			Handler:    _AuthProvider_AddAccount_Handler,
		},
		{
			MethodName: "RemoveAccount",
			Handler:    _AuthProvider_RemoveAccount_Handler,
		},
		{
			MethodName: "UpdateAccountPermissions",
			Handler:    _AuthProvider_UpdateAccountPermissions_Handler,
		},
		{
			MethodName: "GenerateToken",
			Handler:    _AuthProvider_GenerateToken_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "info/auth.proto",
}
