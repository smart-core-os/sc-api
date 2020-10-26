import * as grpcWeb from 'grpc-web';

import * as traits_brightness_sensor_pb from '../traits/brightness_sensor_pb';


export class BrightnessSensorApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAmbientBrightness(
    request: traits_brightness_sensor_pb.GetAmbientBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_brightness_sensor_pb.AmbientBrightness) => void
  ): grpcWeb.ClientReadableStream<traits_brightness_sensor_pb.AmbientBrightness>;

  pullAmbientBrightness(
    request: traits_brightness_sensor_pb.PullAmbientBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_brightness_sensor_pb.PullAmbientBrightnessResponse>;

}

export class BrightnessSensorApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAmbientBrightness(
    request: traits_brightness_sensor_pb.GetAmbientBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_brightness_sensor_pb.AmbientBrightness>;

  pullAmbientBrightness(
    request: traits_brightness_sensor_pb.PullAmbientBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_brightness_sensor_pb.PullAmbientBrightnessResponse>;

}

