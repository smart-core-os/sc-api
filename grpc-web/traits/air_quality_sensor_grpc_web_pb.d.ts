import * as grpcWeb from 'grpc-web';

import * as traits_air_quality_sensor_pb from '../traits/air_quality_sensor_pb';


export class AirQualitySensorApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_air_quality_sensor_pb.GetAirQualityStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_air_quality_sensor_pb.AirQualityState) => void
  ): grpcWeb.ClientReadableStream<traits_air_quality_sensor_pb.AirQualityState>;

  pullState(
    request: traits_air_quality_sensor_pb.PullAirQualityStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_air_quality_sensor_pb.PullAirQualityStateResponse>;

}

export class AirQualitySensorApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_air_quality_sensor_pb.GetAirQualityStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_air_quality_sensor_pb.AirQualityState>;

  pullState(
    request: traits_air_quality_sensor_pb.PullAirQualityStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_air_quality_sensor_pb.PullAirQualityStateResponse>;

}

