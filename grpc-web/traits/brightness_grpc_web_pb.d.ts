import * as grpcWeb from 'grpc-web';

import * as traits_brightness_pb from '../traits/brightness_pb';


export class BrightnessApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateBrightness(
    request: traits_brightness_pb.UpdateBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_brightness_pb.Brightness) => void
  ): grpcWeb.ClientReadableStream<traits_brightness_pb.Brightness>;

  getBrightness(
    request: traits_brightness_pb.GetBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_brightness_pb.Brightness) => void
  ): grpcWeb.ClientReadableStream<traits_brightness_pb.Brightness>;

  pullBrightness(
    request: traits_brightness_pb.PullBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_brightness_pb.PullBrightnessResponse>;

}

export class BrightnessApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateBrightness(
    request: traits_brightness_pb.UpdateBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_brightness_pb.Brightness>;

  getBrightness(
    request: traits_brightness_pb.GetBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_brightness_pb.Brightness>;

  pullBrightness(
    request: traits_brightness_pb.PullBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_brightness_pb.PullBrightnessResponse>;

}

