import * as grpcWeb from 'grpc-web';

import * as traits_pressure_pb from '../traits/pressure_pb'; // proto import: "traits/pressure.proto"


export class PressureApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPressure(
    request: traits_pressure_pb.GetPressureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_pressure_pb.Pressure) => void
  ): grpcWeb.ClientReadableStream<traits_pressure_pb.Pressure>;

  pullPressure(
    request: traits_pressure_pb.PullPressureRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_pressure_pb.PullPressureResponse>;

  updatePressure(
    request: traits_pressure_pb.UpdatePressureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_pressure_pb.Pressure) => void
  ): grpcWeb.ClientReadableStream<traits_pressure_pb.Pressure>;

}

export class PressureApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPressure(
    request: traits_pressure_pb.GetPressureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_pressure_pb.Pressure>;

  pullPressure(
    request: traits_pressure_pb.PullPressureRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_pressure_pb.PullPressureResponse>;

  updatePressure(
    request: traits_pressure_pb.UpdatePressureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_pressure_pb.Pressure>;

}

