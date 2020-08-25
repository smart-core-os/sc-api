import * as grpcWeb from 'grpc-web';

import * as device_info_auth_pb from '../../device/info/auth_pb';


export class AuthProviderClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addAccount(
    request: device_info_auth_pb.AddAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_info_auth_pb.AddAccountResponse) => void
  ): grpcWeb.ClientReadableStream<device_info_auth_pb.AddAccountResponse>;

  removeAccount(
    request: device_info_auth_pb.RemoveAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_info_auth_pb.RemoveAccountResponse) => void
  ): grpcWeb.ClientReadableStream<device_info_auth_pb.RemoveAccountResponse>;

  updateAccountPermissions(
    request: device_info_auth_pb.UpdateAccountPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_info_auth_pb.UpdateAccountPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<device_info_auth_pb.UpdateAccountPermissionsResponse>;

  generateToken(
    request: device_info_auth_pb.GenerateTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_info_auth_pb.GenerateTokenResponse) => void
  ): grpcWeb.ClientReadableStream<device_info_auth_pb.GenerateTokenResponse>;

}

export class AuthProviderPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addAccount(
    request: device_info_auth_pb.AddAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_info_auth_pb.AddAccountResponse>;

  removeAccount(
    request: device_info_auth_pb.RemoveAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_info_auth_pb.RemoveAccountResponse>;

  updateAccountPermissions(
    request: device_info_auth_pb.UpdateAccountPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_info_auth_pb.UpdateAccountPermissionsResponse>;

  generateToken(
    request: device_info_auth_pb.GenerateTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_info_auth_pb.GenerateTokenResponse>;

}

