import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_unit_pb from '../../types/unit_pb';


export class TemperatureSensorAttributes extends jspb.Message {
  getNativeUnit(): types_unit_pb.TemperatureUnit;
  setNativeUnit(value: types_unit_pb.TemperatureUnit): TemperatureSensorAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureSensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureSensorAttributes): TemperatureSensorAttributes.AsObject;
  static serializeBinaryToWriter(message: TemperatureSensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureSensorAttributes;
  static deserializeBinaryFromReader(message: TemperatureSensorAttributes, reader: jspb.BinaryReader): TemperatureSensorAttributes;
}

export namespace TemperatureSensorAttributes {
  export type AsObject = {
    nativeUnit: types_unit_pb.TemperatureUnit,
  }
}

export class GetTemperatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetTemperatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTemperatureRequest): GetTemperatureRequest.AsObject;
  static serializeBinaryToWriter(message: GetTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemperatureRequest;
  static deserializeBinaryFromReader(message: GetTemperatureRequest, reader: jspb.BinaryReader): GetTemperatureRequest;
}

export namespace GetTemperatureRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullTemperatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullTemperatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullTemperatureRequest): PullTemperatureRequest.AsObject;
  static serializeBinaryToWriter(message: PullTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullTemperatureRequest;
  static deserializeBinaryFromReader(message: PullTemperatureRequest, reader: jspb.BinaryReader): PullTemperatureRequest;
}

export namespace PullTemperatureRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullTemperatureResponse extends jspb.Message {
  getChangesList(): Array<TemperatureChange>;
  setChangesList(value: Array<TemperatureChange>): PullTemperatureResponse;
  clearChangesList(): PullTemperatureResponse;
  addChanges(value?: TemperatureChange, index?: number): TemperatureChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullTemperatureResponse): PullTemperatureResponse.AsObject;
  static serializeBinaryToWriter(message: PullTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullTemperatureResponse;
  static deserializeBinaryFromReader(message: PullTemperatureResponse, reader: jspb.BinaryReader): PullTemperatureResponse;
}

export namespace PullTemperatureResponse {
  export type AsObject = {
    changesList: Array<TemperatureChange.AsObject>,
  }
}

export class TemperatureChange extends jspb.Message {
  getName(): string;
  setName(value: string): TemperatureChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): TemperatureChange;
  hasCreateTime(): boolean;
  clearCreateTime(): TemperatureChange;

  getTemperature(): types_unit_pb.Temperature | undefined;
  setTemperature(value?: types_unit_pb.Temperature): TemperatureChange;
  hasTemperature(): boolean;
  clearTemperature(): TemperatureChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureChange.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureChange): TemperatureChange.AsObject;
  static serializeBinaryToWriter(message: TemperatureChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureChange;
  static deserializeBinaryFromReader(message: TemperatureChange, reader: jspb.BinaryReader): TemperatureChange;
}

export namespace TemperatureChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temperature?: types_unit_pb.Temperature.AsObject,
  }
}

