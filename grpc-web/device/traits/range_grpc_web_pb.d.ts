import * as grpcWeb from 'grpc-web';

import * as device_traits_range_pb from '../../device/traits/range_pb';
import * as types_number_pb from '../../types/number_pb';


export class RangeClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: device_traits_range_pb.UpdateRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_number_pb.Int32Var) => void
  ): grpcWeb.ClientReadableStream<types_number_pb.Int32Var>;

  getRangeValue(
    request: device_traits_range_pb.GetRangeValueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_number_pb.Int32Var) => void
  ): grpcWeb.ClientReadableStream<types_number_pb.Int32Var>;

  pullRangeValue(
    request: device_traits_range_pb.PullRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_range_pb.PullRangeValueResponse>;

}

export class RangePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: device_traits_range_pb.UpdateRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_number_pb.Int32Var>;

  getRangeValue(
    request: device_traits_range_pb.GetRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_number_pb.Int32Var>;

  pullRangeValue(
    request: device_traits_range_pb.PullRangeValueRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_range_pb.PullRangeValueResponse>;

}

