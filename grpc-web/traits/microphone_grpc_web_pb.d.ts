import * as grpcWeb from 'grpc-web';

import * as types_unit_pb from '../types/unit_pb';
import * as traits_microphone_pb from '../traits/microphone_pb';


export class MicrophoneApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGain(
    request: traits_microphone_pb.GetMicrophoneGainRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_unit_pb.Volume) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.Volume>;

  updateGain(
    request: traits_microphone_pb.UpdateMicrophoneGainRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_unit_pb.Volume) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.Volume>;

  pullGain(
    request: traits_microphone_pb.PullMicrophoneGainRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_microphone_pb.PullMicrophoneGainResponse>;

}

export class MicrophoneApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGain(
    request: traits_microphone_pb.GetMicrophoneGainRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.Volume>;

  updateGain(
    request: traits_microphone_pb.UpdateMicrophoneGainRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.Volume>;

  pullGain(
    request: traits_microphone_pb.PullMicrophoneGainRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_microphone_pb.PullMicrophoneGainResponse>;

}

