import * as grpcWeb from 'grpc-web';

import * as device_traits_count_pb from '../../device/traits/count_pb';


export class CountApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCount(
    request: device_traits_count_pb.GetCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_count_pb.Count) => void
  ): grpcWeb.ClientReadableStream<device_traits_count_pb.Count>;

  resetCount(
    request: device_traits_count_pb.ResetCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_count_pb.Count) => void
  ): grpcWeb.ClientReadableStream<device_traits_count_pb.Count>;

  updateCount(
    request: device_traits_count_pb.UpdateCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_count_pb.Count) => void
  ): grpcWeb.ClientReadableStream<device_traits_count_pb.Count>;

  pullCounts(
    request: device_traits_count_pb.PullCountsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_count_pb.PullCountsResponse>;

}

export class CountApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCount(
    request: device_traits_count_pb.GetCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_count_pb.Count>;

  resetCount(
    request: device_traits_count_pb.ResetCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_count_pb.Count>;

  updateCount(
    request: device_traits_count_pb.UpdateCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_count_pb.Count>;

  pullCounts(
    request: device_traits_count_pb.PullCountsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_count_pb.PullCountsResponse>;

}

