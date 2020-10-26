import * as grpcWeb from 'grpc-web';

import * as traits_open_close_pb from '../traits/open_close_pb';


export class OpenCloseApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getStates(
    request: traits_open_close_pb.GetOpenCloseStatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_open_close_pb.OpenCloseStates) => void
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.OpenCloseStates>;

  updateStates(
    request: traits_open_close_pb.UpdateOpenCloseStatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_open_close_pb.OpenCloseStates) => void
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.OpenCloseStates>;

  stop(
    request: traits_open_close_pb.StopOpenCloseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_open_close_pb.OpenCloseStates) => void
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.OpenCloseStates>;

  pull(
    request: traits_open_close_pb.PullOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.PullOpenCloseStatesResponse>;

}

export class OpenCloseApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getStates(
    request: traits_open_close_pb.GetOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_open_close_pb.OpenCloseStates>;

  updateStates(
    request: traits_open_close_pb.UpdateOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_open_close_pb.OpenCloseStates>;

  stop(
    request: traits_open_close_pb.StopOpenCloseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_open_close_pb.OpenCloseStates>;

  pull(
    request: traits_open_close_pb.PullOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.PullOpenCloseStatesResponse>;

}

