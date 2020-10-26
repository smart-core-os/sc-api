import * as grpcWeb from 'grpc-web';

import * as traits_on_off_pb from '../traits/on_off_pb';


export class OnOffClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  on(
    request: traits_on_off_pb.OnRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_on_off_pb.OnReply) => void
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.OnReply>;

  off(
    request: traits_on_off_pb.OffRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_on_off_pb.OffReply) => void
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.OffReply>;

  getOnOffState(
    request: traits_on_off_pb.GetOnOffStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_on_off_pb.GetOnOffStateResponse) => void
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.GetOnOffStateResponse>;

  pull(
    request: traits_on_off_pb.OnOffPullRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.OnOffPullResponse>;

}

export class OnOffPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  on(
    request: traits_on_off_pb.OnRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_on_off_pb.OnReply>;

  off(
    request: traits_on_off_pb.OffRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_on_off_pb.OffReply>;

  getOnOffState(
    request: traits_on_off_pb.GetOnOffStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_on_off_pb.GetOnOffStateResponse>;

  pull(
    request: traits_on_off_pb.OnOffPullRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.OnOffPullResponse>;

}

