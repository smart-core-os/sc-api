import * as grpcWeb from 'grpc-web';

import * as traits_air_temperature_pb from '../traits/air_temperature_pb';


export class AirTemperatureClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_air_temperature_pb.GetAirTemperatureStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_air_temperature_pb.AirTemperatureState) => void
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.AirTemperatureState>;

  updateState(
    request: traits_air_temperature_pb.UpdateAirTemperatureStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_air_temperature_pb.AirTemperatureState) => void
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.AirTemperatureState>;

  pullState(
    request: traits_air_temperature_pb.PullAirTemperatureStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.PullAirTemperatureStateResponse>;

}

export class AirTemperaturePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_air_temperature_pb.GetAirTemperatureStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_air_temperature_pb.AirTemperatureState>;

  updateState(
    request: traits_air_temperature_pb.UpdateAirTemperatureStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_air_temperature_pb.AirTemperatureState>;

  pullState(
    request: traits_air_temperature_pb.PullAirTemperatureStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.PullAirTemperatureStateResponse>;

}

