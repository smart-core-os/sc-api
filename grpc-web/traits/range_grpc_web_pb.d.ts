import * as grpcWeb from 'grpc-web';

import * as traits_range_pb from '../traits/range_pb';


export class RangeApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: traits_range_pb.UpdateRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_range_pb.RangeValue) => void
  ): grpcWeb.ClientReadableStream<traits_range_pb.RangeValue>;

  getRangeValue(
    request: traits_range_pb.GetRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_range_pb.RangeValue) => void
  ): grpcWeb.ClientReadableStream<traits_range_pb.RangeValue>;

  pullRangeValue(
    request: traits_range_pb.PullRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_range_pb.PullRangeValueResponse>;

}

export class RangeInfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describeRangeValue(
    request: traits_range_pb.DescribeRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_range_pb.RangeValueSupport) => void
  ): grpcWeb.ClientReadableStream<traits_range_pb.RangeValueSupport>;

}

export class RangeApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: traits_range_pb.UpdateRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_range_pb.RangeValue>;

  getRangeValue(
    request: traits_range_pb.GetRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_range_pb.RangeValue>;

  pullRangeValue(
    request: traits_range_pb.PullRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_range_pb.PullRangeValueResponse>;

}

export class RangeInfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describeRangeValue(
    request: traits_range_pb.DescribeRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_range_pb.RangeValueSupport>;

}

