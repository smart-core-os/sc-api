import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_number_pb from '../types/number_pb';


export class BrightnessAttributes extends jspb.Message {
  getBrightnessAttributes(): types_number_pb.Int32Attributes | undefined;
  setBrightnessAttributes(value?: types_number_pb.Int32Attributes): BrightnessAttributes;
  hasBrightnessAttributes(): boolean;
  clearBrightnessAttributes(): BrightnessAttributes;

  getPresetsList(): Array<BrightnessPreset>;
  setPresetsList(value: Array<BrightnessPreset>): BrightnessAttributes;
  clearPresetsList(): BrightnessAttributes;
  addPresets(value?: BrightnessPreset, index?: number): BrightnessPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrightnessAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: BrightnessAttributes): BrightnessAttributes.AsObject;
  static serializeBinaryToWriter(message: BrightnessAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrightnessAttributes;
  static deserializeBinaryFromReader(message: BrightnessAttributes, reader: jspb.BinaryReader): BrightnessAttributes;
}

export namespace BrightnessAttributes {
  export type AsObject = {
    brightnessAttributes?: types_number_pb.Int32Attributes.AsObject,
    presetsList: Array<BrightnessPreset.AsObject>,
  }
}

export class Brightness extends jspb.Message {
  getLevel(): types_number_pb.Int32Var | undefined;
  setLevel(value?: types_number_pb.Int32Var): Brightness;
  hasLevel(): boolean;
  clearLevel(): Brightness;

  getPreset(): BrightnessPreset | undefined;
  setPreset(value?: BrightnessPreset): Brightness;
  hasPreset(): boolean;
  clearPreset(): Brightness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Brightness.AsObject;
  static toObject(includeInstance: boolean, msg: Brightness): Brightness.AsObject;
  static serializeBinaryToWriter(message: Brightness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Brightness;
  static deserializeBinaryFromReader(message: Brightness, reader: jspb.BinaryReader): Brightness;
}

export namespace Brightness {
  export type AsObject = {
    level?: types_number_pb.Int32Var.AsObject,
    preset?: BrightnessPreset.AsObject,
  }
}

export class BrightnessPreset extends jspb.Message {
  getName(): string;
  setName(value: string): BrightnessPreset;

  getTitle(): string;
  setTitle(value: string): BrightnessPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrightnessPreset.AsObject;
  static toObject(includeInstance: boolean, msg: BrightnessPreset): BrightnessPreset.AsObject;
  static serializeBinaryToWriter(message: BrightnessPreset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrightnessPreset;
  static deserializeBinaryFromReader(message: BrightnessPreset, reader: jspb.BinaryReader): BrightnessPreset;
}

export namespace BrightnessPreset {
  export type AsObject = {
    name: string,
    title: string,
  }
}

export class UpdateBrightnessRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateBrightnessRequest;

  getBrightness(): Brightness | undefined;
  setBrightness(value?: Brightness): UpdateBrightnessRequest;
  hasBrightness(): boolean;
  clearBrightness(): UpdateBrightnessRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateBrightnessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBrightnessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBrightnessRequest): UpdateBrightnessRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBrightnessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBrightnessRequest;
  static deserializeBinaryFromReader(message: UpdateBrightnessRequest, reader: jspb.BinaryReader): UpdateBrightnessRequest;
}

export namespace UpdateBrightnessRequest {
  export type AsObject = {
    name: string,
    brightness?: Brightness.AsObject,
    delta: boolean,
  }
}

export class GetBrightnessRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBrightnessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrightnessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrightnessRequest): GetBrightnessRequest.AsObject;
  static serializeBinaryToWriter(message: GetBrightnessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrightnessRequest;
  static deserializeBinaryFromReader(message: GetBrightnessRequest, reader: jspb.BinaryReader): GetBrightnessRequest;
}

export namespace GetBrightnessRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullBrightnessRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullBrightnessRequest;

  getExcludeRamping(): boolean;
  setExcludeRamping(value: boolean): PullBrightnessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullBrightnessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullBrightnessRequest): PullBrightnessRequest.AsObject;
  static serializeBinaryToWriter(message: PullBrightnessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullBrightnessRequest;
  static deserializeBinaryFromReader(message: PullBrightnessRequest, reader: jspb.BinaryReader): PullBrightnessRequest;
}

export namespace PullBrightnessRequest {
  export type AsObject = {
    name: string,
    excludeRamping: boolean,
  }
}

export class PullBrightnessResponse extends jspb.Message {
  getChangesList(): Array<BrightnessChange>;
  setChangesList(value: Array<BrightnessChange>): PullBrightnessResponse;
  clearChangesList(): PullBrightnessResponse;
  addChanges(value?: BrightnessChange, index?: number): BrightnessChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullBrightnessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullBrightnessResponse): PullBrightnessResponse.AsObject;
  static serializeBinaryToWriter(message: PullBrightnessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullBrightnessResponse;
  static deserializeBinaryFromReader(message: PullBrightnessResponse, reader: jspb.BinaryReader): PullBrightnessResponse;
}

export namespace PullBrightnessResponse {
  export type AsObject = {
    changesList: Array<BrightnessChange.AsObject>,
  }
}

export class BrightnessChange extends jspb.Message {
  getName(): string;
  setName(value: string): BrightnessChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BrightnessChange;
  hasCreateTime(): boolean;
  clearCreateTime(): BrightnessChange;

  getBrightness(): Brightness | undefined;
  setBrightness(value?: Brightness): BrightnessChange;
  hasBrightness(): boolean;
  clearBrightness(): BrightnessChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrightnessChange.AsObject;
  static toObject(includeInstance: boolean, msg: BrightnessChange): BrightnessChange.AsObject;
  static serializeBinaryToWriter(message: BrightnessChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrightnessChange;
  static deserializeBinaryFromReader(message: BrightnessChange, reader: jspb.BinaryReader): BrightnessChange;
}

export namespace BrightnessChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brightness?: Brightness.AsObject,
  }
}

