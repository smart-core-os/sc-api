import * as grpcWeb from 'grpc-web';

import * as traits_on_off_pb from '../traits/on_off_pb';


export class OnOffApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOnOff(
    request: traits_on_off_pb.GetOnOffRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_on_off_pb.OnOff) => void
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.OnOff>;

  updateOnOff(
    request: traits_on_off_pb.UpdateOnOffRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_on_off_pb.OnOff) => void
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.OnOff>;

  pullOnOff(
    request: traits_on_off_pb.PullOnOffRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.PullOnOffResponse>;

}

export class OnOffApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOnOff(
    request: traits_on_off_pb.GetOnOffRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_on_off_pb.OnOff>;

  updateOnOff(
    request: traits_on_off_pb.UpdateOnOffRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_on_off_pb.OnOff>;

  pullOnOff(
    request: traits_on_off_pb.PullOnOffRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_on_off_pb.PullOnOffResponse>;

}

