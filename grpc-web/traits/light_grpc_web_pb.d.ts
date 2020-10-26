import * as grpcWeb from 'grpc-web';

import * as traits_light_pb from '../traits/light_pb';


export class LightApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateBrightness(
    request: traits_light_pb.UpdateBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_light_pb.Brightness) => void
  ): grpcWeb.ClientReadableStream<traits_light_pb.Brightness>;

  getBrightness(
    request: traits_light_pb.GetBrightnessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_light_pb.Brightness) => void
  ): grpcWeb.ClientReadableStream<traits_light_pb.Brightness>;

  pullBrightness(
    request: traits_light_pb.PullBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_light_pb.PullBrightnessResponse>;

}

export class LightApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateBrightness(
    request: traits_light_pb.UpdateBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_light_pb.Brightness>;

  getBrightness(
    request: traits_light_pb.GetBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_light_pb.Brightness>;

  pullBrightness(
    request: traits_light_pb.PullBrightnessRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_light_pb.PullBrightnessResponse>;

}

