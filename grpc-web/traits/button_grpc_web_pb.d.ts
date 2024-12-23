import * as grpcWeb from 'grpc-web';

import * as traits_button_pb from '../traits/button_pb'; // proto import: "traits/button.proto"


export class ButtonApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getButtonState(
    request: traits_button_pb.GetButtonStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_button_pb.ButtonState) => void
  ): grpcWeb.ClientReadableStream<traits_button_pb.ButtonState>;

  pullButtonState(
    request: traits_button_pb.PullButtonStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_button_pb.PullButtonStateResponse>;

  updateButtonState(
    request: traits_button_pb.UpdateButtonStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_button_pb.ButtonState) => void
  ): grpcWeb.ClientReadableStream<traits_button_pb.ButtonState>;

}

export class ButtonApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getButtonState(
    request: traits_button_pb.GetButtonStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_button_pb.ButtonState>;

  pullButtonState(
    request: traits_button_pb.PullButtonStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_button_pb.PullButtonStateResponse>;

  updateButtonState(
    request: traits_button_pb.UpdateButtonStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_button_pb.ButtonState>;

}

