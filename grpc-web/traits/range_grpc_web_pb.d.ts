import * as grpcWeb from 'grpc-web';

import * as types_number_pb from '../types/number_pb';
import * as traits_range_pb from '../traits/range_pb';


export class RangeApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: traits_range_pb.UpdateRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_number_pb.Int32Var) => void
  ): grpcWeb.ClientReadableStream<types_number_pb.Int32Var>;

  getRangeValue(
    request: traits_range_pb.GetRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_number_pb.Int32Var) => void
  ): grpcWeb.ClientReadableStream<types_number_pb.Int32Var>;

  pullRangeValue(
    request: traits_range_pb.PullRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_range_pb.PullRangeValueResponse>;

}

export class RangeApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: traits_range_pb.UpdateRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_number_pb.Int32Var>;

  getRangeValue(
    request: traits_range_pb.GetRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_number_pb.Int32Var>;

  pullRangeValue(
    request: traits_range_pb.PullRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_range_pb.PullRangeValueResponse>;

}

