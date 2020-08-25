import * as grpcWeb from 'grpc-web';

import * as device_traits_input_select_pb from '../../device/traits/input_select_pb';


export class InputSelectClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateInput(
    request: device_traits_input_select_pb.UpdateInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_input_select_pb.Input) => void
  ): grpcWeb.ClientReadableStream<device_traits_input_select_pb.Input>;

  getInput(
    request: device_traits_input_select_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_input_select_pb.Input) => void
  ): grpcWeb.ClientReadableStream<device_traits_input_select_pb.Input>;

  pullInput(
    request: device_traits_input_select_pb.PullInputRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_input_select_pb.PullInputResponse>;

}

export class InputSelectPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateInput(
    request: device_traits_input_select_pb.UpdateInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_input_select_pb.Input>;

  getInput(
    request: device_traits_input_select_pb.GetInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_input_select_pb.Input>;

  pullInput(
    request: device_traits_input_select_pb.PullInputRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_input_select_pb.PullInputResponse>;

}

