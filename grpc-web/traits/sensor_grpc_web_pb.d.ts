import * as grpcWeb from 'grpc-web';

import * as traits_sensor_pb from '../traits/sensor_pb';


export class SensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_sensor_pb.GetSensorStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_sensor_pb.SensorState) => void
  ): grpcWeb.ClientReadableStream<traits_sensor_pb.SensorState>;

  pullState(
    request: traits_sensor_pb.PullSensorStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_sensor_pb.PullSensorStateResponse>;

}

export class SensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_sensor_pb.GetSensorStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_sensor_pb.SensorState>;

  pullState(
    request: traits_sensor_pb.PullSensorStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_sensor_pb.PullSensorStateResponse>;

}

