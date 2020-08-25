import * as grpcWeb from 'grpc-web';

import * as device_traits_brightness_pb from '../../device/traits/brightness_pb';


export class BrightnessApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: device_traits_brightness_pb.UpdateBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_brightness_pb.Brightness) => void
  ): grpcWeb.ClientReadableStream<device_traits_brightness_pb.Brightness>;

  getBrightness(
    request: device_traits_brightness_pb.GetBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_brightness_pb.Brightness) => void
  ): grpcWeb.ClientReadableStream<device_traits_brightness_pb.Brightness>;

  pullBrightness(
    request: device_traits_brightness_pb.PullBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_brightness_pb.PullBrightnessResponse>;

}

export class BrightnessApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateRangeValue(
    request: device_traits_brightness_pb.UpdateBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_brightness_pb.Brightness>;

  getBrightness(
    request: device_traits_brightness_pb.GetBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_brightness_pb.Brightness>;

  pullBrightness(
    request: device_traits_brightness_pb.PullBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_brightness_pb.PullBrightnessResponse>;

}

