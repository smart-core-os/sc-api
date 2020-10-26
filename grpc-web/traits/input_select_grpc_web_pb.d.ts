import * as grpcWeb from 'grpc-web';

import * as traits_input_select_pb from '../traits/input_select_pb';


export class InputSelectClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateInput(
    request: traits_input_select_pb.UpdateInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_input_select_pb.Input) => void
  ): grpcWeb.ClientReadableStream<traits_input_select_pb.Input>;

  getInput(
    request: traits_input_select_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_input_select_pb.Input) => void
  ): grpcWeb.ClientReadableStream<traits_input_select_pb.Input>;

  pullInput(
    request: traits_input_select_pb.PullInputRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_input_select_pb.PullInputResponse>;

}

export class InputSelectPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateInput(
    request: traits_input_select_pb.UpdateInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_input_select_pb.Input>;

  getInput(
    request: traits_input_select_pb.GetInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_input_select_pb.Input>;

  pullInput(
    request: traits_input_select_pb.PullInputRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_input_select_pb.PullInputResponse>;

}

