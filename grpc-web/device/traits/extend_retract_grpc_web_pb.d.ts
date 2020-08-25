import * as grpcWeb from 'grpc-web';

import * as device_traits_extend_retract_pb from '../../device/traits/extend_retract_pb';


export class ExtendRetractClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getExtension(
    request: device_traits_extend_retract_pb.GetExtensionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_extend_retract_pb.Extension) => void
  ): grpcWeb.ClientReadableStream<device_traits_extend_retract_pb.Extension>;

  updateExtension(
    request: device_traits_extend_retract_pb.UpdateExtensionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_extend_retract_pb.Extension) => void
  ): grpcWeb.ClientReadableStream<device_traits_extend_retract_pb.Extension>;

  stop(
    request: device_traits_extend_retract_pb.ExtendRetractStopRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_extend_retract_pb.Extension) => void
  ): grpcWeb.ClientReadableStream<device_traits_extend_retract_pb.Extension>;

  createExtensionPreset(
    request: device_traits_extend_retract_pb.CreateExtensionPresetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_extend_retract_pb.ExtensionPreset) => void
  ): grpcWeb.ClientReadableStream<device_traits_extend_retract_pb.ExtensionPreset>;

  pullExtensions(
    request: device_traits_extend_retract_pb.PullExtensionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_extend_retract_pb.PullExtensionsResponse>;

}

export class ExtendRetractPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getExtension(
    request: device_traits_extend_retract_pb.GetExtensionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_extend_retract_pb.Extension>;

  updateExtension(
    request: device_traits_extend_retract_pb.UpdateExtensionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_extend_retract_pb.Extension>;

  stop(
    request: device_traits_extend_retract_pb.ExtendRetractStopRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_extend_retract_pb.Extension>;

  createExtensionPreset(
    request: device_traits_extend_retract_pb.CreateExtensionPresetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_extend_retract_pb.ExtensionPreset>;

  pullExtensions(
    request: device_traits_extend_retract_pb.PullExtensionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_extend_retract_pb.PullExtensionsResponse>;

}

