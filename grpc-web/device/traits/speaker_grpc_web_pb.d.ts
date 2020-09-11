import * as grpcWeb from 'grpc-web';

import * as types_unit_pb from '../../types/unit_pb';
import * as device_traits_speaker_pb from '../../device/traits/speaker_pb';


export class SpeakerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVolume(
    request: device_traits_speaker_pb.GetSpeakerVolumeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_unit_pb.Volume) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.Volume>;

  updateVolume(
    request: device_traits_speaker_pb.UpdateSpeakerVolumeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: types_unit_pb.Volume) => void
  ): grpcWeb.ClientReadableStream<types_unit_pb.Volume>;

  pullVolume(
    request: device_traits_speaker_pb.PullSpeakerVolumeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_speaker_pb.PullSpeakerVolumeResponse>;

}

export class SpeakerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVolume(
    request: device_traits_speaker_pb.GetSpeakerVolumeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.Volume>;

  updateVolume(
    request: device_traits_speaker_pb.UpdateSpeakerVolumeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<types_unit_pb.Volume>;

  pullVolume(
    request: device_traits_speaker_pb.PullSpeakerVolumeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_speaker_pb.PullSpeakerVolumeResponse>;

}

