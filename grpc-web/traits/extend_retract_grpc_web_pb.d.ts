import * as grpcWeb from 'grpc-web';

import * as traits_extend_retract_pb from '../traits/extend_retract_pb';


export class ExtendRetractClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getExtension(
    request: traits_extend_retract_pb.GetExtensionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_extend_retract_pb.Extension) => void
  ): grpcWeb.ClientReadableStream<traits_extend_retract_pb.Extension>;

  updateExtension(
    request: traits_extend_retract_pb.UpdateExtensionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_extend_retract_pb.Extension) => void
  ): grpcWeb.ClientReadableStream<traits_extend_retract_pb.Extension>;

  stop(
    request: traits_extend_retract_pb.ExtendRetractStopRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_extend_retract_pb.Extension) => void
  ): grpcWeb.ClientReadableStream<traits_extend_retract_pb.Extension>;

  createExtensionPreset(
    request: traits_extend_retract_pb.CreateExtensionPresetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_extend_retract_pb.ExtensionPreset) => void
  ): grpcWeb.ClientReadableStream<traits_extend_retract_pb.ExtensionPreset>;

  pullExtensions(
    request: traits_extend_retract_pb.PullExtensionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_extend_retract_pb.PullExtensionsResponse>;

}

export class ExtendRetractPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getExtension(
    request: traits_extend_retract_pb.GetExtensionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_extend_retract_pb.Extension>;

  updateExtension(
    request: traits_extend_retract_pb.UpdateExtensionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_extend_retract_pb.Extension>;

  stop(
    request: traits_extend_retract_pb.ExtendRetractStopRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_extend_retract_pb.Extension>;

  createExtensionPreset(
    request: traits_extend_retract_pb.CreateExtensionPresetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_extend_retract_pb.ExtensionPreset>;

  pullExtensions(
    request: traits_extend_retract_pb.PullExtensionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_extend_retract_pb.PullExtensionsResponse>;

}

