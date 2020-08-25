import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as types_number_pb from '../../types/number_pb';
import * as types_unit_pb from '../../types/unit_pb';
import * as types_volume_pb from '../../types/volume_pb';


export class SpeakerAttributes extends jspb.Message {
  getVolumeAttributes(): types_number_pb.FloatAttributes | undefined;
  setVolumeAttributes(value?: types_number_pb.FloatAttributes): SpeakerAttributes;
  hasVolumeAttributes(): boolean;
  clearVolumeAttributes(): SpeakerAttributes;

  getMuteSupport(): types_volume_pb.MuteSupport;
  setMuteSupport(value: types_volume_pb.MuteSupport): SpeakerAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeakerAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: SpeakerAttributes): SpeakerAttributes.AsObject;
  static serializeBinaryToWriter(message: SpeakerAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeakerAttributes;
  static deserializeBinaryFromReader(message: SpeakerAttributes, reader: jspb.BinaryReader): SpeakerAttributes;
}

export namespace SpeakerAttributes {
  export type AsObject = {
    volumeAttributes?: types_number_pb.FloatAttributes.AsObject,
    muteSupport: types_volume_pb.MuteSupport,
  }
}

export class GetSpeakerVolumeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSpeakerVolumeRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): GetSpeakerVolumeRequest;
  hasFields(): boolean;
  clearFields(): GetSpeakerVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpeakerVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpeakerVolumeRequest): GetSpeakerVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: GetSpeakerVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpeakerVolumeRequest;
  static deserializeBinaryFromReader(message: GetSpeakerVolumeRequest, reader: jspb.BinaryReader): GetSpeakerVolumeRequest;
}

export namespace GetSpeakerVolumeRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSpeakerVolumeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateSpeakerVolumeRequest;

  getVolume(): types_unit_pb.Volume | undefined;
  setVolume(value?: types_unit_pb.Volume): UpdateSpeakerVolumeRequest;
  hasVolume(): boolean;
  clearVolume(): UpdateSpeakerVolumeRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateSpeakerVolumeRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSpeakerVolumeRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSpeakerVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSpeakerVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSpeakerVolumeRequest): UpdateSpeakerVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSpeakerVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSpeakerVolumeRequest;
  static deserializeBinaryFromReader(message: UpdateSpeakerVolumeRequest, reader: jspb.BinaryReader): UpdateSpeakerVolumeRequest;
}

export namespace UpdateSpeakerVolumeRequest {
  export type AsObject = {
    name: string,
    volume?: types_unit_pb.Volume.AsObject,
    delta: boolean,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullSpeakerVolumeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullSpeakerVolumeRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): PullSpeakerVolumeRequest;
  hasFields(): boolean;
  clearFields(): PullSpeakerVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullSpeakerVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullSpeakerVolumeRequest): PullSpeakerVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: PullSpeakerVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullSpeakerVolumeRequest;
  static deserializeBinaryFromReader(message: PullSpeakerVolumeRequest, reader: jspb.BinaryReader): PullSpeakerVolumeRequest;
}

export namespace PullSpeakerVolumeRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullSpeakerVolumeResponse extends jspb.Message {
  getChangesList(): Array<types_volume_pb.VolumeChange>;
  setChangesList(value: Array<types_volume_pb.VolumeChange>): PullSpeakerVolumeResponse;
  clearChangesList(): PullSpeakerVolumeResponse;
  addChanges(value?: types_volume_pb.VolumeChange, index?: number): types_volume_pb.VolumeChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullSpeakerVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullSpeakerVolumeResponse): PullSpeakerVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: PullSpeakerVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullSpeakerVolumeResponse;
  static deserializeBinaryFromReader(message: PullSpeakerVolumeResponse, reader: jspb.BinaryReader): PullSpeakerVolumeResponse;
}

export namespace PullSpeakerVolumeResponse {
  export type AsObject = {
    changesList: Array<types_volume_pb.VolumeChange.AsObject>,
  }
}

