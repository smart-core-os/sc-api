import * as grpcWeb from 'grpc-web';

import * as types_unit_pb from '../types/unit_pb';
import * as traits_temperature_sensor_pb from '../traits/temperature_sensor_pb';


export class TemperatureSensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTemperature(
    request: traits_temperature_sensor_pb.GetTemperatureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_unit_pb.Temperature) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.Temperature>;

  pullTemperature(
    request: traits_temperature_sensor_pb.PullTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_temperature_sensor_pb.PullTemperatureResponse>;

}

export class TemperatureSensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTemperature(
    request: traits_temperature_sensor_pb.GetTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.Temperature>;

  pullTemperature(
    request: traits_temperature_sensor_pb.PullTemperatureRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_temperature_sensor_pb.PullTemperatureResponse>;

}

