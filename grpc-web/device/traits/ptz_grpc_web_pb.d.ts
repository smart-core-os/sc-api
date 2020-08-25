import * as grpcWeb from 'grpc-web';

import * as device_traits_ptz_pb from '../../device/traits/ptz_pb';


export class PtzClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPtzState(
    request: device_traits_ptz_pb.GetPtzStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_ptz_pb.PtzState) => void
  ): grpcWeb.ClientReadableStream<device_traits_ptz_pb.PtzState>;

  updatePtzState(
    request: device_traits_ptz_pb.UpdatePtzStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_ptz_pb.PtzState) => void
  ): grpcWeb.ClientReadableStream<device_traits_ptz_pb.PtzState>;

  stop(
    request: device_traits_ptz_pb.StopPtzRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_ptz_pb.PtzState) => void
  ): grpcWeb.ClientReadableStream<device_traits_ptz_pb.PtzState>;

  createPreset(
    request: device_traits_ptz_pb.CreatePtzPresetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_ptz_pb.PtzPreset) => void
  ): grpcWeb.ClientReadableStream<device_traits_ptz_pb.PtzPreset>;

  pullPtzStates(
    request: device_traits_ptz_pb.PullPtzStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_ptz_pb.PullPtzStatesResponse>;

}

export class PtzPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPtzState(
    request: device_traits_ptz_pb.GetPtzStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_ptz_pb.PtzState>;

  updatePtzState(
    request: device_traits_ptz_pb.UpdatePtzStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_ptz_pb.PtzState>;

  stop(
    request: device_traits_ptz_pb.StopPtzRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_ptz_pb.PtzState>;

  createPreset(
    request: device_traits_ptz_pb.CreatePtzPresetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_ptz_pb.PtzPreset>;

  pullPtzStates(
    request: device_traits_ptz_pb.PullPtzStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_ptz_pb.PullPtzStatesResponse>;

}

