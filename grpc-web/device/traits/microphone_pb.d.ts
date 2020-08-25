import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as types_number_pb from '../../types/number_pb';
import * as types_unit_pb from '../../types/unit_pb';
import * as types_volume_pb from '../../types/volume_pb';


export class MicrophoneAttributes extends jspb.Message {
  getGainAttributes(): types_number_pb.FloatAttributes | undefined;
  setGainAttributes(value?: types_number_pb.FloatAttributes): MicrophoneAttributes;
  hasGainAttributes(): boolean;
  clearGainAttributes(): MicrophoneAttributes;

  getMuteSupport(): types_volume_pb.MuteSupport;
  setMuteSupport(value: types_volume_pb.MuteSupport): MicrophoneAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicrophoneAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: MicrophoneAttributes): MicrophoneAttributes.AsObject;
  static serializeBinaryToWriter(message: MicrophoneAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicrophoneAttributes;
  static deserializeBinaryFromReader(message: MicrophoneAttributes, reader: jspb.BinaryReader): MicrophoneAttributes;
}

export namespace MicrophoneAttributes {
  export type AsObject = {
    gainAttributes?: types_number_pb.FloatAttributes.AsObject,
    muteSupport: types_volume_pb.MuteSupport,
  }
}

export class GetMicrophoneGainRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetMicrophoneGainRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): GetMicrophoneGainRequest;
  hasFields(): boolean;
  clearFields(): GetMicrophoneGainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMicrophoneGainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMicrophoneGainRequest): GetMicrophoneGainRequest.AsObject;
  static serializeBinaryToWriter(message: GetMicrophoneGainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMicrophoneGainRequest;
  static deserializeBinaryFromReader(message: GetMicrophoneGainRequest, reader: jspb.BinaryReader): GetMicrophoneGainRequest;
}

export namespace GetMicrophoneGainRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateMicrophoneGainRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateMicrophoneGainRequest;

  getGain(): types_unit_pb.Volume | undefined;
  setGain(value?: types_unit_pb.Volume): UpdateMicrophoneGainRequest;
  hasGain(): boolean;
  clearGain(): UpdateMicrophoneGainRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateMicrophoneGainRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateMicrophoneGainRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateMicrophoneGainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMicrophoneGainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMicrophoneGainRequest): UpdateMicrophoneGainRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMicrophoneGainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMicrophoneGainRequest;
  static deserializeBinaryFromReader(message: UpdateMicrophoneGainRequest, reader: jspb.BinaryReader): UpdateMicrophoneGainRequest;
}

export namespace UpdateMicrophoneGainRequest {
  export type AsObject = {
    name: string,
    gain?: types_unit_pb.Volume.AsObject,
    delta: boolean,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullMicrophoneGainRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullMicrophoneGainRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): PullMicrophoneGainRequest;
  hasFields(): boolean;
  clearFields(): PullMicrophoneGainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullMicrophoneGainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullMicrophoneGainRequest): PullMicrophoneGainRequest.AsObject;
  static serializeBinaryToWriter(message: PullMicrophoneGainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullMicrophoneGainRequest;
  static deserializeBinaryFromReader(message: PullMicrophoneGainRequest, reader: jspb.BinaryReader): PullMicrophoneGainRequest;
}

export namespace PullMicrophoneGainRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullMicrophoneGainResponse extends jspb.Message {
  getChangesList(): Array<types_volume_pb.VolumeChange>;
  setChangesList(value: Array<types_volume_pb.VolumeChange>): PullMicrophoneGainResponse;
  clearChangesList(): PullMicrophoneGainResponse;
  addChanges(value?: types_volume_pb.VolumeChange, index?: number): types_volume_pb.VolumeChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullMicrophoneGainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullMicrophoneGainResponse): PullMicrophoneGainResponse.AsObject;
  static serializeBinaryToWriter(message: PullMicrophoneGainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullMicrophoneGainResponse;
  static deserializeBinaryFromReader(message: PullMicrophoneGainResponse, reader: jspb.BinaryReader): PullMicrophoneGainResponse;
}

export namespace PullMicrophoneGainResponse {
  export type AsObject = {
    changesList: Array<types_volume_pb.VolumeChange.AsObject>,
  }
}
