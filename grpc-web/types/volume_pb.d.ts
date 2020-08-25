import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_unit_pb from '../types/unit_pb';


export class VolumeChange extends jspb.Message {
  getName(): string;
  setName(value: string): VolumeChange;

  getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): VolumeChange;
  hasChangeTime(): boolean;
  clearChangeTime(): VolumeChange;

  getVolume(): types_unit_pb.Volume | undefined;
  setVolume(value?: types_unit_pb.Volume): VolumeChange;
  hasVolume(): boolean;
  clearVolume(): VolumeChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeChange.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeChange): VolumeChange.AsObject;
  static serializeBinaryToWriter(message: VolumeChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeChange;
  static deserializeBinaryFromReader(message: VolumeChange, reader: jspb.BinaryReader): VolumeChange;
}

export namespace VolumeChange {
  export type AsObject = {
    name: string,
    changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    volume?: types_unit_pb.Volume.AsObject,
  }
}

export enum MuteSupport { 
  MUTE_NATIVE = 0,
  MUTE_EMULATED = 1,
}
