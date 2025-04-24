import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as types_info_pb from '../types/info_pb'; // proto import: "types/info.proto"
import * as types_number_pb from '../types/number_pb'; // proto import: "types/number.proto"
import * as types_unit_pb from '../types/unit_pb'; // proto import: "types/unit.proto"


export class AudioLevelSupport extends jspb.Message {
  getResourceSupport(): types_info_pb.ResourceSupport | undefined;
  setResourceSupport(value?: types_info_pb.ResourceSupport): AudioLevelSupport;
  hasResourceSupport(): boolean;
  clearResourceSupport(): AudioLevelSupport;

  getGainAttributes(): types_number_pb.FloatAttributes | undefined;
  setGainAttributes(value?: types_number_pb.FloatAttributes): AudioLevelSupport;
  hasGainAttributes(): boolean;
  clearGainAttributes(): AudioLevelSupport;

  getMuteSupport(): types_unit_pb.MuteSupport;
  setMuteSupport(value: types_unit_pb.MuteSupport): AudioLevelSupport;

  getSoundLevelUnit(): string;
  setSoundLevelUnit(value: string): AudioLevelSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioLevelSupport.AsObject;
  static toObject(includeInstance: boolean, msg: AudioLevelSupport): AudioLevelSupport.AsObject;
  static serializeBinaryToWriter(message: AudioLevelSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioLevelSupport;
  static deserializeBinaryFromReader(message: AudioLevelSupport, reader: jspb.BinaryReader): AudioLevelSupport;
}

export namespace AudioLevelSupport {
  export type AsObject = {
    resourceSupport?: types_info_pb.ResourceSupport.AsObject,
    gainAttributes?: types_number_pb.FloatAttributes.AsObject,
    muteSupport: types_unit_pb.MuteSupport,
    soundLevelUnit: string,
  }
}

export class GetAudioLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAudioLevelRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetAudioLevelRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetAudioLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAudioLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAudioLevelRequest): GetAudioLevelRequest.AsObject;
  static serializeBinaryToWriter(message: GetAudioLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAudioLevelRequest;
  static deserializeBinaryFromReader(message: GetAudioLevelRequest, reader: jspb.BinaryReader): GetAudioLevelRequest;
}

export namespace GetAudioLevelRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAudioLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateAudioLevelRequest;

  getGain(): types_unit_pb.AudioLevel | undefined;
  setGain(value?: types_unit_pb.AudioLevel): UpdateAudioLevelRequest;
  hasGain(): boolean;
  clearGain(): UpdateAudioLevelRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateAudioLevelRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAudioLevelRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateAudioLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAudioLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAudioLevelRequest): UpdateAudioLevelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAudioLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAudioLevelRequest;
  static deserializeBinaryFromReader(message: UpdateAudioLevelRequest, reader: jspb.BinaryReader): UpdateAudioLevelRequest;
}

export namespace UpdateAudioLevelRequest {
  export type AsObject = {
    name: string,
    gain?: types_unit_pb.AudioLevel.AsObject,
    delta: boolean,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAudioLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAudioLevelRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): PullAudioLevelRequest;
  hasReadMask(): boolean;
  clearReadMask(): PullAudioLevelRequest;

  getUpdatesOnly(): boolean;
  setUpdatesOnly(value: boolean): PullAudioLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAudioLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAudioLevelRequest): PullAudioLevelRequest.AsObject;
  static serializeBinaryToWriter(message: PullAudioLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAudioLevelRequest;
  static deserializeBinaryFromReader(message: PullAudioLevelRequest, reader: jspb.BinaryReader): PullAudioLevelRequest;
}

export namespace PullAudioLevelRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    updatesOnly: boolean,
  }
}

export class PullAudioLevelResponse extends jspb.Message {
  getChangesList(): Array<types_unit_pb.AudioLevelChange>;
  setChangesList(value: Array<types_unit_pb.AudioLevelChange>): PullAudioLevelResponse;
  clearChangesList(): PullAudioLevelResponse;
  addChanges(value?: types_unit_pb.AudioLevelChange, index?: number): types_unit_pb.AudioLevelChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAudioLevelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAudioLevelResponse): PullAudioLevelResponse.AsObject;
  static serializeBinaryToWriter(message: PullAudioLevelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAudioLevelResponse;
  static deserializeBinaryFromReader(message: PullAudioLevelResponse, reader: jspb.BinaryReader): PullAudioLevelResponse;
}

export namespace PullAudioLevelResponse {
  export type AsObject = {
    changesList: Array<types_unit_pb.AudioLevelChange.AsObject>,
  }
}

export class DescribeAudioLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DescribeAudioLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeAudioLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeAudioLevelRequest): DescribeAudioLevelRequest.AsObject;
  static serializeBinaryToWriter(message: DescribeAudioLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeAudioLevelRequest;
  static deserializeBinaryFromReader(message: DescribeAudioLevelRequest, reader: jspb.BinaryReader): DescribeAudioLevelRequest;
}

export namespace DescribeAudioLevelRequest {
  export type AsObject = {
    name: string,
  }
}

