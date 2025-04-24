import * as grpcWeb from 'grpc-web';

import * as traits_microphone_pb from '../traits/microphone_pb'; // proto import: "traits/microphone.proto"
import * as types_unit_pb from '../types/unit_pb'; // proto import: "types/unit.proto"


export class MicrophoneApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAudioLevel(
    request: traits_microphone_pb.GetAudioLevelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: types_unit_pb.AudioLevel) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.AudioLevel>;

  updateAudioLevel(
    request: traits_microphone_pb.UpdateAudioLevelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: types_unit_pb.AudioLevel) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.AudioLevel>;

  pullAudioLevel(
    request: traits_microphone_pb.PullAudioLevelRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_microphone_pb.PullAudioLevelResponse>;

}

export class MicrophoneInfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describeAudioLevel(
    request: traits_microphone_pb.DescribeAudioLevelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_microphone_pb.AudioLevelSupport) => void
  ): grpcWeb.ClientReadableStream<traits_microphone_pb.AudioLevelSupport>;

}

export class MicrophoneApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAudioLevel(
    request: traits_microphone_pb.GetAudioLevelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.AudioLevel>;

  updateAudioLevel(
    request: traits_microphone_pb.UpdateAudioLevelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.AudioLevel>;

  pullAudioLevel(
    request: traits_microphone_pb.PullAudioLevelRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_microphone_pb.PullAudioLevelResponse>;

}

export class MicrophoneInfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describeAudioLevel(
    request: traits_microphone_pb.DescribeAudioLevelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_microphone_pb.AudioLevelSupport>;

}

