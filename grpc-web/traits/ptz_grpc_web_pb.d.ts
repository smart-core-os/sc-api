import * as grpcWeb from 'grpc-web';

import * as traits_ptz_pb from '../traits/ptz_pb';


export class PtzApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPtzState(
    request: traits_ptz_pb.GetPtzStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_ptz_pb.PtzState) => void
  ): grpcWeb.ClientReadableStream<traits_ptz_pb.PtzState>;

  updatePtzState(
    request: traits_ptz_pb.UpdatePtzStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_ptz_pb.PtzState) => void
  ): grpcWeb.ClientReadableStream<traits_ptz_pb.PtzState>;

  stop(
    request: traits_ptz_pb.StopPtzRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_ptz_pb.PtzState) => void
  ): grpcWeb.ClientReadableStream<traits_ptz_pb.PtzState>;

  createPreset(
    request: traits_ptz_pb.CreatePtzPresetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_ptz_pb.PtzPreset) => void
  ): grpcWeb.ClientReadableStream<traits_ptz_pb.PtzPreset>;

  pullPtzStates(
    request: traits_ptz_pb.PullPtzStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_ptz_pb.PullPtzStatesResponse>;

}

export class PtzApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPtzState(
    request: traits_ptz_pb.GetPtzStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_ptz_pb.PtzState>;

  updatePtzState(
    request: traits_ptz_pb.UpdatePtzStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_ptz_pb.PtzState>;

  stop(
    request: traits_ptz_pb.StopPtzRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_ptz_pb.PtzState>;

  createPreset(
    request: traits_ptz_pb.CreatePtzPresetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_ptz_pb.PtzPreset>;

  pullPtzStates(
    request: traits_ptz_pb.PullPtzStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_ptz_pb.PullPtzStatesResponse>;

}

