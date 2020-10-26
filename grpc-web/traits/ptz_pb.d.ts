import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_number_pb from '../types/number_pb';
import * as types_tween_pb from '../types/tween_pb';


export class PtzAttributes extends jspb.Message {
  getSupportsPosition(): boolean;
  setSupportsPosition(value: boolean): PtzAttributes;

  getSupportsMovement(): boolean;
  setSupportsMovement(value: boolean): PtzAttributes;

  getPresetsList(): Array<PtzPreset>;
  setPresetsList(value: Array<PtzPreset>): PtzAttributes;
  clearPresetsList(): PtzAttributes;
  addPresets(value?: PtzPreset, index?: number): PtzPreset;

  getSupportsCustomPresets(): boolean;
  setSupportsCustomPresets(value: boolean): PtzAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: PtzAttributes): PtzAttributes.AsObject;
  static serializeBinaryToWriter(message: PtzAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzAttributes;
  static deserializeBinaryFromReader(message: PtzAttributes, reader: jspb.BinaryReader): PtzAttributes;
}

export namespace PtzAttributes {
  export type AsObject = {
    supportsPosition: boolean,
    supportsMovement: boolean,
    presetsList: Array<PtzPreset.AsObject>,
    supportsCustomPresets: boolean,
  }
}

export class PtzState extends jspb.Message {
  getPosition(): PtzPosition | undefined;
  setPosition(value?: PtzPosition): PtzState;
  hasPosition(): boolean;
  clearPosition(): PtzState;

  getMovement(): PtzMovement | undefined;
  setMovement(value?: PtzMovement): PtzState;
  hasMovement(): boolean;
  clearMovement(): PtzState;

  getPreset(): string;
  setPreset(value: string): PtzState;

  getPresetSpeed(): number;
  setPresetSpeed(value: number): PtzState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzState.AsObject;
  static toObject(includeInstance: boolean, msg: PtzState): PtzState.AsObject;
  static serializeBinaryToWriter(message: PtzState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzState;
  static deserializeBinaryFromReader(message: PtzState, reader: jspb.BinaryReader): PtzState;
}

export namespace PtzState {
  export type AsObject = {
    position?: PtzPosition.AsObject,
    movement?: PtzMovement.AsObject,
    preset: string,
    presetSpeed: number,
  }
}

export class PtzVector extends jspb.Message {
  getPan(): number;
  setPan(value: number): PtzVector;

  getTilt(): number;
  setTilt(value: number): PtzVector;

  getZoom(): number;
  setZoom(value: number): PtzVector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzVector.AsObject;
  static toObject(includeInstance: boolean, msg: PtzVector): PtzVector.AsObject;
  static serializeBinaryToWriter(message: PtzVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzVector;
  static deserializeBinaryFromReader(message: PtzVector, reader: jspb.BinaryReader): PtzVector;
}

export namespace PtzVector {
  export type AsObject = {
    pan: number,
    tilt: number,
    zoom: number,
  }
}

export class PtzBounds extends jspb.Message {
  getMin(): PtzVector | undefined;
  setMin(value?: PtzVector): PtzBounds;
  hasMin(): boolean;
  clearMin(): PtzBounds;

  getMax(): PtzVector | undefined;
  setMax(value?: PtzVector): PtzBounds;
  hasMax(): boolean;
  clearMax(): PtzBounds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzBounds.AsObject;
  static toObject(includeInstance: boolean, msg: PtzBounds): PtzBounds.AsObject;
  static serializeBinaryToWriter(message: PtzBounds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzBounds;
  static deserializeBinaryFromReader(message: PtzBounds, reader: jspb.BinaryReader): PtzBounds;
}

export namespace PtzBounds {
  export type AsObject = {
    min?: PtzVector.AsObject,
    max?: PtzVector.AsObject,
  }
}

export class PtzMovement extends jspb.Message {
  getDirection(): PtzVector | undefined;
  setDirection(value?: PtzVector): PtzMovement;
  hasDirection(): boolean;
  clearDirection(): PtzMovement;

  getSpeed(): types_number_pb.Int32Var | undefined;
  setSpeed(value?: types_number_pb.Int32Var): PtzMovement;
  hasSpeed(): boolean;
  clearSpeed(): PtzMovement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzMovement.AsObject;
  static toObject(includeInstance: boolean, msg: PtzMovement): PtzMovement.AsObject;
  static serializeBinaryToWriter(message: PtzMovement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzMovement;
  static deserializeBinaryFromReader(message: PtzMovement, reader: jspb.BinaryReader): PtzMovement;
}

export namespace PtzMovement {
  export type AsObject = {
    direction?: PtzVector.AsObject,
    speed?: types_number_pb.Int32Var.AsObject,
  }
}

export class PtzPosition extends jspb.Message {
  getPosition(): PtzVector | undefined;
  setPosition(value?: PtzVector): PtzPosition;
  hasPosition(): boolean;
  clearPosition(): PtzPosition;

  getTween(): types_tween_pb.Tween | undefined;
  setTween(value?: types_tween_pb.Tween): PtzPosition;
  hasTween(): boolean;
  clearTween(): PtzPosition;

  getTargetPosition(): PtzVector | undefined;
  setTargetPosition(value?: PtzVector): PtzPosition;
  hasTargetPosition(): boolean;
  clearTargetPosition(): PtzPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzPosition.AsObject;
  static toObject(includeInstance: boolean, msg: PtzPosition): PtzPosition.AsObject;
  static serializeBinaryToWriter(message: PtzPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzPosition;
  static deserializeBinaryFromReader(message: PtzPosition, reader: jspb.BinaryReader): PtzPosition;
}

export namespace PtzPosition {
  export type AsObject = {
    position?: PtzVector.AsObject,
    tween?: types_tween_pb.Tween.AsObject,
    targetPosition?: PtzVector.AsObject,
  }
}

export class PtzPreset extends jspb.Message {
  getName(): string;
  setName(value: string): PtzPreset;

  getTitle(): string;
  setTitle(value: string): PtzPreset;

  getDescription(): string;
  setDescription(value: string): PtzPreset;

  getPosition(): PtzVector | undefined;
  setPosition(value?: PtzVector): PtzPreset;
  hasPosition(): boolean;
  clearPosition(): PtzPreset;

  getWritable(): boolean;
  setWritable(value: boolean): PtzPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzPreset.AsObject;
  static toObject(includeInstance: boolean, msg: PtzPreset): PtzPreset.AsObject;
  static serializeBinaryToWriter(message: PtzPreset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzPreset;
  static deserializeBinaryFromReader(message: PtzPreset, reader: jspb.BinaryReader): PtzPreset;
}

export namespace PtzPreset {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
    position?: PtzVector.AsObject,
    writable: boolean,
  }
}

export class GetPtzStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetPtzStateRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): GetPtzStateRequest;
  hasFields(): boolean;
  clearFields(): GetPtzStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPtzStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPtzStateRequest): GetPtzStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetPtzStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPtzStateRequest;
  static deserializeBinaryFromReader(message: GetPtzStateRequest, reader: jspb.BinaryReader): GetPtzStateRequest;
}

export namespace GetPtzStateRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePtzStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdatePtzStateRequest;

  getState(): PtzState | undefined;
  setState(value?: PtzState): UpdatePtzStateRequest;
  hasState(): boolean;
  clearState(): UpdatePtzStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdatePtzStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdatePtzStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePtzStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePtzStateRequest): UpdatePtzStateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePtzStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePtzStateRequest;
  static deserializeBinaryFromReader(message: UpdatePtzStateRequest, reader: jspb.BinaryReader): UpdatePtzStateRequest;
}

export namespace UpdatePtzStateRequest {
  export type AsObject = {
    name: string,
    state?: PtzState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class StopPtzRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopPtzRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopPtzRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopPtzRequest): StopPtzRequest.AsObject;
  static serializeBinaryToWriter(message: StopPtzRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopPtzRequest;
  static deserializeBinaryFromReader(message: StopPtzRequest, reader: jspb.BinaryReader): StopPtzRequest;
}

export namespace StopPtzRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreatePtzPresetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreatePtzPresetRequest;

  getPreset(): PtzPreset | undefined;
  setPreset(value?: PtzPreset): CreatePtzPresetRequest;
  hasPreset(): boolean;
  clearPreset(): CreatePtzPresetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePtzPresetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePtzPresetRequest): CreatePtzPresetRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePtzPresetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePtzPresetRequest;
  static deserializeBinaryFromReader(message: CreatePtzPresetRequest, reader: jspb.BinaryReader): CreatePtzPresetRequest;
}

export namespace CreatePtzPresetRequest {
  export type AsObject = {
    name: string,
    preset?: PtzPreset.AsObject,
  }
}

export class PullPtzStatesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullPtzStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPtzStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullPtzStatesRequest): PullPtzStatesRequest.AsObject;
  static serializeBinaryToWriter(message: PullPtzStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPtzStatesRequest;
  static deserializeBinaryFromReader(message: PullPtzStatesRequest, reader: jspb.BinaryReader): PullPtzStatesRequest;
}

export namespace PullPtzStatesRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullPtzStatesResponse extends jspb.Message {
  getChangesList(): Array<PtzStateChange>;
  setChangesList(value: Array<PtzStateChange>): PullPtzStatesResponse;
  clearChangesList(): PullPtzStatesResponse;
  addChanges(value?: PtzStateChange, index?: number): PtzStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPtzStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullPtzStatesResponse): PullPtzStatesResponse.AsObject;
  static serializeBinaryToWriter(message: PullPtzStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPtzStatesResponse;
  static deserializeBinaryFromReader(message: PullPtzStatesResponse, reader: jspb.BinaryReader): PullPtzStatesResponse;
}

export namespace PullPtzStatesResponse {
  export type AsObject = {
    changesList: Array<PtzStateChange.AsObject>,
  }
}

export class PtzStateChange extends jspb.Message {
  getName(): string;
  setName(value: string): PtzStateChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): PtzStateChange;
  hasCreateTime(): boolean;
  clearCreateTime(): PtzStateChange;

  getState(): PtzState | undefined;
  setState(value?: PtzState): PtzStateChange;
  hasState(): boolean;
  clearState(): PtzStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PtzStateChange.AsObject;
  static toObject(includeInstance: boolean, msg: PtzStateChange): PtzStateChange.AsObject;
  static serializeBinaryToWriter(message: PtzStateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PtzStateChange;
  static deserializeBinaryFromReader(message: PtzStateChange, reader: jspb.BinaryReader): PtzStateChange;
}

export namespace PtzStateChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: PtzState.AsObject,
  }
}

