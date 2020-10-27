import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class SensorSupport extends jspb.Message {
  getReadable(): boolean;
  setReadable(value: boolean): SensorSupport;

  getObservable(): boolean;
  setObservable(value: boolean): SensorSupport;

  getPullSupport(): PullSupport;
  setPullSupport(value: PullSupport): SensorSupport;

  getPullPoll(): google_protobuf_duration_pb.Duration | undefined;
  setPullPoll(value?: google_protobuf_duration_pb.Duration): SensorSupport;
  hasPullPoll(): boolean;
  clearPullPoll(): SensorSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorSupport.AsObject;
  static toObject(includeInstance: boolean, msg: SensorSupport): SensorSupport.AsObject;
  static serializeBinaryToWriter(message: SensorSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorSupport;
  static deserializeBinaryFromReader(message: SensorSupport, reader: jspb.BinaryReader): SensorSupport;
}

export namespace SensorSupport {
  export type AsObject = {
    readable: boolean,
    observable: boolean,
    pullSupport: PullSupport,
    pullPoll?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ResourceSupport extends jspb.Message {
  getReadable(): boolean;
  setReadable(value: boolean): ResourceSupport;

  getWritable(): boolean;
  setWritable(value: boolean): ResourceSupport;

  getObservable(): boolean;
  setObservable(value: boolean): ResourceSupport;

  getWritableFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setWritableFields(value?: google_protobuf_field_mask_pb.FieldMask): ResourceSupport;
  hasWritableFields(): boolean;
  clearWritableFields(): ResourceSupport;

  getPullSupport(): PullSupport;
  setPullSupport(value: PullSupport): ResourceSupport;

  getPullPoll(): google_protobuf_duration_pb.Duration | undefined;
  setPullPoll(value?: google_protobuf_duration_pb.Duration): ResourceSupport;
  hasPullPoll(): boolean;
  clearPullPoll(): ResourceSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceSupport.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceSupport): ResourceSupport.AsObject;
  static serializeBinaryToWriter(message: ResourceSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceSupport;
  static deserializeBinaryFromReader(message: ResourceSupport, reader: jspb.BinaryReader): ResourceSupport;
}

export namespace ResourceSupport {
  export type AsObject = {
    readable: boolean,
    writable: boolean,
    observable: boolean,
    writableFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pullSupport: PullSupport,
    pullPoll?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export enum PullSupport { 
  PULL_SUPPORT_UNKNOWN = 0,
  PULL_SUPPORT_NATIVE = 1,
  PULL_SUPPORT_EMULATED = 2,
}
