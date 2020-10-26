import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class EmergencyApiAttributes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmergencyApiAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: EmergencyApiAttributes): EmergencyApiAttributes.AsObject;
  static serializeBinaryToWriter(message: EmergencyApiAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmergencyApiAttributes;
  static deserializeBinaryFromReader(message: EmergencyApiAttributes, reader: jspb.BinaryReader): EmergencyApiAttributes;
}

export namespace EmergencyApiAttributes {
  export type AsObject = {
  }
}

export class Emergency extends jspb.Message {
  getLevel(): EmergencyLevel;
  setLevel(value: EmergencyLevel): Emergency;

  getReason(): string;
  setReason(value: string): Emergency;

  getLevelChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLevelChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Emergency;
  hasLevelChangeTime(): boolean;
  clearLevelChangeTime(): Emergency;

  getSilent(): boolean;
  setSilent(value: boolean): Emergency;

  getDrill(): boolean;
  setDrill(value: boolean): Emergency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Emergency.AsObject;
  static toObject(includeInstance: boolean, msg: Emergency): Emergency.AsObject;
  static serializeBinaryToWriter(message: Emergency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Emergency;
  static deserializeBinaryFromReader(message: Emergency, reader: jspb.BinaryReader): Emergency;
}

export namespace Emergency {
  export type AsObject = {
    level: EmergencyLevel,
    reason: string,
    levelChangeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    silent: boolean,
    drill: boolean,
  }
}

export class GetEmergencyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetEmergencyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmergencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmergencyRequest): GetEmergencyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEmergencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmergencyRequest;
  static deserializeBinaryFromReader(message: GetEmergencyRequest, reader: jspb.BinaryReader): GetEmergencyRequest;
}

export namespace GetEmergencyRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateEmergencyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateEmergencyRequest;

  getEmergency(): Emergency | undefined;
  setEmergency(value?: Emergency): UpdateEmergencyRequest;
  hasEmergency(): boolean;
  clearEmergency(): UpdateEmergencyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEmergencyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateEmergencyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmergencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmergencyRequest): UpdateEmergencyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEmergencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmergencyRequest;
  static deserializeBinaryFromReader(message: UpdateEmergencyRequest, reader: jspb.BinaryReader): UpdateEmergencyRequest;
}

export namespace UpdateEmergencyRequest {
  export type AsObject = {
    name: string,
    emergency?: Emergency.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullEmergencyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullEmergencyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullEmergencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullEmergencyRequest): PullEmergencyRequest.AsObject;
  static serializeBinaryToWriter(message: PullEmergencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullEmergencyRequest;
  static deserializeBinaryFromReader(message: PullEmergencyRequest, reader: jspb.BinaryReader): PullEmergencyRequest;
}

export namespace PullEmergencyRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullEmergencyResponse extends jspb.Message {
  getChangesList(): Array<EmergencyChange>;
  setChangesList(value: Array<EmergencyChange>): PullEmergencyResponse;
  clearChangesList(): PullEmergencyResponse;
  addChanges(value?: EmergencyChange, index?: number): EmergencyChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullEmergencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullEmergencyResponse): PullEmergencyResponse.AsObject;
  static serializeBinaryToWriter(message: PullEmergencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullEmergencyResponse;
  static deserializeBinaryFromReader(message: PullEmergencyResponse, reader: jspb.BinaryReader): PullEmergencyResponse;
}

export namespace PullEmergencyResponse {
  export type AsObject = {
    changesList: Array<EmergencyChange.AsObject>,
  }
}

export class EmergencyChange extends jspb.Message {
  getName(): string;
  setName(value: string): EmergencyChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): EmergencyChange;
  hasCreateTime(): boolean;
  clearCreateTime(): EmergencyChange;

  getEmergency(): Emergency | undefined;
  setEmergency(value?: Emergency): EmergencyChange;
  hasEmergency(): boolean;
  clearEmergency(): EmergencyChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmergencyChange.AsObject;
  static toObject(includeInstance: boolean, msg: EmergencyChange): EmergencyChange.AsObject;
  static serializeBinaryToWriter(message: EmergencyChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmergencyChange;
  static deserializeBinaryFromReader(message: EmergencyChange, reader: jspb.BinaryReader): EmergencyChange;
}

export namespace EmergencyChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    emergency?: Emergency.AsObject,
  }
}

export enum EmergencyLevel { 
  EMERGENCY_LEVEL_UNKNOWN = 0,
  EMERGENCY_LEVEL_OK = 1,
  EMERGENCY_LEVEL_WARNING = 2,
  EMERGENCY_LEVEL_EMERGENCY = 3,
}
