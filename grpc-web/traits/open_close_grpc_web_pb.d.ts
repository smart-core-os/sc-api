import * as grpcWeb from 'grpc-web';

import * as traits_open_close_pb from '../traits/open_close_pb';


export class OpenCloseApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPositions(
    request: traits_open_close_pb.GetOpenClosePositionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_open_close_pb.OpenClosePositions) => void
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.OpenClosePositions>;

  updatePositions(
    request: traits_open_close_pb.UpdateOpenClosePositionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_open_close_pb.OpenClosePositions) => void
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.OpenClosePositions>;

  stop(
    request: traits_open_close_pb.StopOpenCloseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_open_close_pb.OpenClosePositions) => void
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.OpenClosePositions>;

  pull(
    request: traits_open_close_pb.PullOpenClosePositionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.PullOpenClosePositionsResponse>;

}

export class OpenCloseApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPositions(
    request: traits_open_close_pb.GetOpenClosePositionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_open_close_pb.OpenClosePositions>;

  updatePositions(
    request: traits_open_close_pb.UpdateOpenClosePositionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_open_close_pb.OpenClosePositions>;

  stop(
    request: traits_open_close_pb.StopOpenCloseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_open_close_pb.OpenClosePositions>;

  pull(
    request: traits_open_close_pb.PullOpenClosePositionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_open_close_pb.PullOpenClosePositionsResponse>;

}

