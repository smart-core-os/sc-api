import * as grpcWeb from 'grpc-web';

import * as device_traits_sensor_pb from '../../device/traits/sensor_pb';


export class SensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: device_traits_sensor_pb.GetSensorStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_sensor_pb.SensorState) => void
  ): grpcWeb.ClientReadableStream<device_traits_sensor_pb.SensorState>;

  pullState(
    request: device_traits_sensor_pb.PullSensorStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_sensor_pb.PullSensorStateResponse>;

}

export class SensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: device_traits_sensor_pb.GetSensorStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_sensor_pb.SensorState>;

  pullState(
    request: device_traits_sensor_pb.PullSensorStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_sensor_pb.PullSensorStateResponse>;

}

