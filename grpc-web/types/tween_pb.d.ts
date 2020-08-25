import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class Tween extends jspb.Message {
  getProgress(): number;
  setProgress(value: number): Tween;

  getTotalDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTotalDuration(value?: google_protobuf_duration_pb.Duration): Tween;
  hasTotalDuration(): boolean;
  clearTotalDuration(): Tween;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tween.AsObject;
  static toObject(includeInstance: boolean, msg: Tween): Tween.AsObject;
  static serializeBinaryToWriter(message: Tween, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tween;
  static deserializeBinaryFromReader(message: Tween, reader: jspb.BinaryReader): Tween;
}

export namespace Tween {
  export type AsObject = {
    progress: number,
    totalDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export enum TweenSupport { 
  NO_SUPPORT = 0,
  NATIVE = 1,
  EMULATED = 2,
  FIXED = 3,
}
