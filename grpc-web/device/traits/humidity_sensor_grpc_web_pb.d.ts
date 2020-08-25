import * as grpcWeb from 'grpc-web';

import * as device_traits_humidity_sensor_pb from '../../device/traits/humidity_sensor_pb';


export class HumiditySensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHumidity(
    request: device_traits_humidity_sensor_pb.GetHumidityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_humidity_sensor_pb.Humidity) => void
  ): grpcWeb.ClientReadableStream<device_traits_humidity_sensor_pb.Humidity>;

  pullHumidity(
    request: device_traits_humidity_sensor_pb.PullHumidityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_humidity_sensor_pb.PullHumidityResponse>;

}

export class HumiditySensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHumidity(
    request: device_traits_humidity_sensor_pb.GetHumidityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_humidity_sensor_pb.Humidity>;

  pullHumidity(
    request: device_traits_humidity_sensor_pb.PullHumidityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_humidity_sensor_pb.PullHumidityResponse>;

}

