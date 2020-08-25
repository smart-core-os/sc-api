import * as grpcWeb from 'grpc-web';

import * as device_traits_open_close_pb from '../../device/traits/open_close_pb';


export class OpenCloseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getStates(
    request: device_traits_open_close_pb.GetOpenCloseStatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_open_close_pb.OpenCloseStates) => void
  ): grpcWeb.ClientReadableStream<device_traits_open_close_pb.OpenCloseStates>;

  updateStates(
    request: device_traits_open_close_pb.UpdateOpenCloseStatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_open_close_pb.OpenCloseStates) => void
  ): grpcWeb.ClientReadableStream<device_traits_open_close_pb.OpenCloseStates>;

  pull(
    request: device_traits_open_close_pb.PullOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_open_close_pb.PullOpenCloseStatesResponse>;

}

export class OpenClosePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getStates(
    request: device_traits_open_close_pb.GetOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_open_close_pb.OpenCloseStates>;

  updateStates(
    request: device_traits_open_close_pb.UpdateOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_open_close_pb.OpenCloseStates>;

  pull(
    request: device_traits_open_close_pb.PullOpenCloseStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_open_close_pb.PullOpenCloseStatesResponse>;

}

