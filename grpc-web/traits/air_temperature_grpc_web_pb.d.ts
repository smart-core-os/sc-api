import * as grpcWeb from 'grpc-web';

import * as traits_air_temperature_pb from '../traits/air_temperature_pb';


export class AirTemperatureApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAirTemperature(
    request: traits_air_temperature_pb.GetAirTemperatureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_air_temperature_pb.AirTemperature) => void
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.AirTemperature>;

  updateAirTemperature(
    request: traits_air_temperature_pb.UpdateAirTemperatureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_air_temperature_pb.AirTemperature) => void
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.AirTemperature>;

  pullAirTemperature(
    request: traits_air_temperature_pb.PullAirTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.PullAirTemperatureResponse>;

}

export class AirTemperatureApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAirTemperature(
    request: traits_air_temperature_pb.GetAirTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_air_temperature_pb.AirTemperature>;

  updateAirTemperature(
    request: traits_air_temperature_pb.UpdateAirTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_air_temperature_pb.AirTemperature>;

  pullAirTemperature(
    request: traits_air_temperature_pb.PullAirTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_air_temperature_pb.PullAirTemperatureResponse>;

}

