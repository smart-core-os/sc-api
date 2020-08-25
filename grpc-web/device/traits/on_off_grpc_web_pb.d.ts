import * as grpcWeb from 'grpc-web';

import * as device_traits_on_off_pb from '../../device/traits/on_off_pb';


export class OnOffClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  on(
    request: device_traits_on_off_pb.OnRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_on_off_pb.OnReply) => void
  ): grpcWeb.ClientReadableStream<device_traits_on_off_pb.OnReply>;

  off(
    request: device_traits_on_off_pb.OffRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_on_off_pb.OffReply) => void
  ): grpcWeb.ClientReadableStream<device_traits_on_off_pb.OffReply>;

  getOnOffState(
    request: device_traits_on_off_pb.GetOnOffStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_on_off_pb.GetOnOffStateResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_on_off_pb.GetOnOffStateResponse>;

  pull(
    request: device_traits_on_off_pb.OnOffPullRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_on_off_pb.OnOffPullResponse>;

}

export class OnOffPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  on(
    request: device_traits_on_off_pb.OnRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_on_off_pb.OnReply>;

  off(
    request: device_traits_on_off_pb.OffRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_on_off_pb.OffReply>;

  getOnOffState(
    request: device_traits_on_off_pb.GetOnOffStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_on_off_pb.GetOnOffStateResponse>;

  pull(
    request: device_traits_on_off_pb.OnOffPullRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_on_off_pb.OnOffPullResponse>;

}

