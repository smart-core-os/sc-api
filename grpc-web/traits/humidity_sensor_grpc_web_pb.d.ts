import * as grpcWeb from 'grpc-web';

import * as traits_humidity_sensor_pb from '../traits/humidity_sensor_pb';


export class HumiditySensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHumidity(
    request: traits_humidity_sensor_pb.GetHumidityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_humidity_sensor_pb.Humidity) => void
  ): grpcWeb.ClientReadableStream<traits_humidity_sensor_pb.Humidity>;

  pullHumidity(
    request: traits_humidity_sensor_pb.PullHumidityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_humidity_sensor_pb.PullHumidityResponse>;

}

export class HumiditySensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHumidity(
    request: traits_humidity_sensor_pb.GetHumidityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_humidity_sensor_pb.Humidity>;

  pullHumidity(
    request: traits_humidity_sensor_pb.PullHumidityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_humidity_sensor_pb.PullHumidityResponse>;

}

