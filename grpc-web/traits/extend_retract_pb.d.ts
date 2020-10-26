import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_tween_pb from '../types/tween_pb';


export class ExtendRetractAttributes extends jspb.Message {
  getPresetsList(): Array<ExtensionPreset>;
  setPresetsList(value: Array<ExtensionPreset>): ExtendRetractAttributes;
  clearPresetsList(): ExtendRetractAttributes;
  addPresets(value?: ExtensionPreset, index?: number): ExtensionPreset;

  getStep(): number;
  setStep(value: number): ExtendRetractAttributes;

  getTweenSupport(): types_tween_pb.TweenSupport;
  setTweenSupport(value: types_tween_pb.TweenSupport): ExtendRetractAttributes;

  getSupportsCustomPresets(): boolean;
  setSupportsCustomPresets(value: boolean): ExtendRetractAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendRetractAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendRetractAttributes): ExtendRetractAttributes.AsObject;
  static serializeBinaryToWriter(message: ExtendRetractAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendRetractAttributes;
  static deserializeBinaryFromReader(message: ExtendRetractAttributes, reader: jspb.BinaryReader): ExtendRetractAttributes;
}

export namespace ExtendRetractAttributes {
  export type AsObject = {
    presetsList: Array<ExtensionPreset.AsObject>,
    step: number,
    tweenSupport: types_tween_pb.TweenSupport,
    supportsCustomPresets: boolean,
  }
}

export class Extension extends jspb.Message {
  getExtendPercent(): number;
  setExtendPercent(value: number): Extension;

  getExtendPreset(): string;
  setExtendPreset(value: string): Extension;

  getTween(): types_tween_pb.Tween | undefined;
  setTween(value?: types_tween_pb.Tween): Extension;
  hasTween(): boolean;
  clearTween(): Extension;

  getTargetExtendPercent(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTargetExtendPercent(value?: google_protobuf_wrappers_pb.FloatValue): Extension;
  hasTargetExtendPercent(): boolean;
  clearTargetExtendPercent(): Extension;

  getTargetExtendPreset(): string;
  setTargetExtendPreset(value: string): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Extension.AsObject;
  static toObject(includeInstance: boolean, msg: Extension): Extension.AsObject;
  static serializeBinaryToWriter(message: Extension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Extension;
  static deserializeBinaryFromReader(message: Extension, reader: jspb.BinaryReader): Extension;
}

export namespace Extension {
  export type AsObject = {
    extendPercent: number,
    extendPreset: string,
    tween?: types_tween_pb.Tween.AsObject,
    targetExtendPercent?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    targetExtendPreset: string,
  }
}

export class ExtensionPreset extends jspb.Message {
  getName(): string;
  setName(value: string): ExtensionPreset;

  getExtendPercent(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setExtendPercent(value?: google_protobuf_wrappers_pb.FloatValue): ExtensionPreset;
  hasExtendPercent(): boolean;
  clearExtendPercent(): ExtensionPreset;

  getWritable(): boolean;
  setWritable(value: boolean): ExtensionPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionPreset.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionPreset): ExtensionPreset.AsObject;
  static serializeBinaryToWriter(message: ExtensionPreset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionPreset;
  static deserializeBinaryFromReader(message: ExtensionPreset, reader: jspb.BinaryReader): ExtensionPreset;
}

export namespace ExtensionPreset {
  export type AsObject = {
    name: string,
    extendPercent?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    writable: boolean,
  }
}

export class GetExtensionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetExtensionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExtensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExtensionRequest): GetExtensionRequest.AsObject;
  static serializeBinaryToWriter(message: GetExtensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExtensionRequest;
  static deserializeBinaryFromReader(message: GetExtensionRequest, reader: jspb.BinaryReader): GetExtensionRequest;
}

export namespace GetExtensionRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateExtensionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateExtensionRequest;

  getExtension(): Extension | undefined;
  setExtension(value?: Extension): UpdateExtensionRequest;
  hasExtension(): boolean;
  clearExtension(): UpdateExtensionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateExtensionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateExtensionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExtensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExtensionRequest): UpdateExtensionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateExtensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExtensionRequest;
  static deserializeBinaryFromReader(message: UpdateExtensionRequest, reader: jspb.BinaryReader): UpdateExtensionRequest;
}

export namespace UpdateExtensionRequest {
  export type AsObject = {
    name: string,
    extension?: Extension.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ExtendRetractStopRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ExtendRetractStopRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendRetractStopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendRetractStopRequest): ExtendRetractStopRequest.AsObject;
  static serializeBinaryToWriter(message: ExtendRetractStopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendRetractStopRequest;
  static deserializeBinaryFromReader(message: ExtendRetractStopRequest, reader: jspb.BinaryReader): ExtendRetractStopRequest;
}

export namespace ExtendRetractStopRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateExtensionPresetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateExtensionPresetRequest;

  getPreset(): ExtensionPreset | undefined;
  setPreset(value?: ExtensionPreset): CreateExtensionPresetRequest;
  hasPreset(): boolean;
  clearPreset(): CreateExtensionPresetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExtensionPresetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExtensionPresetRequest): CreateExtensionPresetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateExtensionPresetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExtensionPresetRequest;
  static deserializeBinaryFromReader(message: CreateExtensionPresetRequest, reader: jspb.BinaryReader): CreateExtensionPresetRequest;
}

export namespace CreateExtensionPresetRequest {
  export type AsObject = {
    name: string,
    preset?: ExtensionPreset.AsObject,
  }
}

export class PullExtensionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullExtensionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullExtensionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullExtensionsRequest): PullExtensionsRequest.AsObject;
  static serializeBinaryToWriter(message: PullExtensionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullExtensionsRequest;
  static deserializeBinaryFromReader(message: PullExtensionsRequest, reader: jspb.BinaryReader): PullExtensionsRequest;
}

export namespace PullExtensionsRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullExtensionsResponse extends jspb.Message {
  getChangesList(): Array<PullExtensionsResponse.Change>;
  setChangesList(value: Array<PullExtensionsResponse.Change>): PullExtensionsResponse;
  clearChangesList(): PullExtensionsResponse;
  addChanges(value?: PullExtensionsResponse.Change, index?: number): PullExtensionsResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullExtensionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullExtensionsResponse): PullExtensionsResponse.AsObject;
  static serializeBinaryToWriter(message: PullExtensionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullExtensionsResponse;
  static deserializeBinaryFromReader(message: PullExtensionsResponse, reader: jspb.BinaryReader): PullExtensionsResponse;
}

export namespace PullExtensionsResponse {
  export type AsObject = {
    changesList: Array<PullExtensionsResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getExtension(): Extension | undefined;
    setExtension(value?: Extension): Change;
    hasExtension(): boolean;
    clearExtension(): Change;

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
      extension?: Extension.AsObject,
    }
  }

}

