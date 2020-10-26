import * as grpcWeb from 'grpc-web';

import * as traits_count_pb from '../traits/count_pb';


export class CountApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCount(
    request: traits_count_pb.GetCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_count_pb.Count) => void
  ): grpcWeb.ClientReadableStream<traits_count_pb.Count>;

  resetCount(
    request: traits_count_pb.ResetCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_count_pb.Count) => void
  ): grpcWeb.ClientReadableStream<traits_count_pb.Count>;

  updateCount(
    request: traits_count_pb.UpdateCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_count_pb.Count) => void
  ): grpcWeb.ClientReadableStream<traits_count_pb.Count>;

  pullCounts(
    request: traits_count_pb.PullCountsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_count_pb.PullCountsResponse>;

}

export class CountApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCount(
    request: traits_count_pb.GetCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_count_pb.Count>;

  resetCount(
    request: traits_count_pb.ResetCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_count_pb.Count>;

  updateCount(
    request: traits_count_pb.UpdateCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_count_pb.Count>;

  pullCounts(
    request: traits_count_pb.PullCountsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_count_pb.PullCountsResponse>;

}

