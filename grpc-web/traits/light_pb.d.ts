import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_number_pb from '../types/number_pb';


export class LightAttributes extends jspb.Message {
  getBrightnessAttributes(): types_number_pb.Int32Attributes | undefined;
  setBrightnessAttributes(value?: types_number_pb.Int32Attributes): LightAttributes;
  hasBrightnessAttributes(): boolean;
  clearBrightnessAttributes(): LightAttributes;

  getPresetsList(): Array<LightPreset>;
  setPresetsList(value: Array<LightPreset>): LightAttributes;
  clearPresetsList(): LightAttributes;
  addPresets(value?: LightPreset, index?: number): LightPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: LightAttributes): LightAttributes.AsObject;
  static serializeBinaryToWriter(message: LightAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightAttributes;
  static deserializeBinaryFromReader(message: LightAttributes, reader: jspb.BinaryReader): LightAttributes;
}

export namespace LightAttributes {
  export type AsObject = {
    brightnessAttributes?: types_number_pb.Int32Attributes.AsObject,
    presetsList: Array<LightPreset.AsObject>,
  }
}

export class Brightness extends jspb.Message {
  getLevelPercent(): types_number_pb.Int32Var | undefined;
  setLevelPercent(value?: types_number_pb.Int32Var): Brightness;
  hasLevelPercent(): boolean;
  clearLevelPercent(): Brightness;

  getPreset(): LightPreset | undefined;
  setPreset(value?: LightPreset): Brightness;
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
    levelPercent?: types_number_pb.Int32Var.AsObject,
    preset?: LightPreset.AsObject,
  }
}

export class LightPreset extends jspb.Message {
  getName(): string;
  setName(value: string): LightPreset;

  getTitle(): string;
  setTitle(value: string): LightPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightPreset.AsObject;
  static toObject(includeInstance: boolean, msg: LightPreset): LightPreset.AsObject;
  static serializeBinaryToWriter(message: LightPreset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightPreset;
  static deserializeBinaryFromReader(message: LightPreset, reader: jspb.BinaryReader): LightPreset;
}

export namespace LightPreset {
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
  getChangesList(): Array<PullBrightnessResponse.Change>;
  setChangesList(value: Array<PullBrightnessResponse.Change>): PullBrightnessResponse;
  clearChangesList(): PullBrightnessResponse;
  addChanges(value?: PullBrightnessResponse.Change, index?: number): PullBrightnessResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullBrightnessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullBrightnessResponse): PullBrightnessResponse.AsObject;
  static serializeBinaryToWriter(message: PullBrightnessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullBrightnessResponse;
  static deserializeBinaryFromReader(message: PullBrightnessResponse, reader: jspb.BinaryReader): PullBrightnessResponse;
}

export namespace PullBrightnessResponse {
  export type AsObject = {
    changesList: Array<PullBrightnessResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getBrightness(): Brightness | undefined;
    setBrightness(value?: Brightness): Change;
    hasBrightness(): boolean;
    clearBrightness(): Change;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Change.AsObject;
    static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
    static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Change;
    static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
  }

  export namespace Change {
    export type AsObject = {
      name: string,
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      brightness?: Brightness.AsObject,
    }
  }

}

