import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_unit_pb from '../types/unit_pb';


export class AirTemperatureAttributes extends jspb.Message {
  getNativeUnit(): types_unit_pb.TemperatureUnit;
  setNativeUnit(value: types_unit_pb.TemperatureUnit): AirTemperatureAttributes;

  getSupportedModesList(): Array<AirTemperatureMode>;
  setSupportedModesList(value: Array<AirTemperatureMode>): AirTemperatureAttributes;
  clearSupportedModesList(): AirTemperatureAttributes;
  addSupportedModes(value: AirTemperatureMode, index?: number): AirTemperatureAttributes;

  getMinRangeCelsius(): number;
  setMinRangeCelsius(value: number): AirTemperatureAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirTemperatureAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: AirTemperatureAttributes): AirTemperatureAttributes.AsObject;
  static serializeBinaryToWriter(message: AirTemperatureAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirTemperatureAttributes;
  static deserializeBinaryFromReader(message: AirTemperatureAttributes, reader: jspb.BinaryReader): AirTemperatureAttributes;
}

export namespace AirTemperatureAttributes {
  export type AsObject = {
    nativeUnit: types_unit_pb.TemperatureUnit,
    supportedModesList: Array<AirTemperatureMode>,
    minRangeCelsius: number,
  }
}

export class GetAirTemperatureStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAirTemperatureStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAirTemperatureStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAirTemperatureStateRequest): GetAirTemperatureStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetAirTemperatureStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAirTemperatureStateRequest;
  static deserializeBinaryFromReader(message: GetAirTemperatureStateRequest, reader: jspb.BinaryReader): GetAirTemperatureStateRequest;
}

export namespace GetAirTemperatureStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateAirTemperatureStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateAirTemperatureStateRequest;

  getState(): AirTemperatureState | undefined;
  setState(value?: AirTemperatureState): UpdateAirTemperatureStateRequest;
  hasState(): boolean;
  clearState(): UpdateAirTemperatureStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAirTemperatureStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateAirTemperatureStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAirTemperatureStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAirTemperatureStateRequest): UpdateAirTemperatureStateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAirTemperatureStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAirTemperatureStateRequest;
  static deserializeBinaryFromReader(message: UpdateAirTemperatureStateRequest, reader: jspb.BinaryReader): UpdateAirTemperatureStateRequest;
}

export namespace UpdateAirTemperatureStateRequest {
  export type AsObject = {
    name: string,
    state?: AirTemperatureState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAirTemperatureStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAirTemperatureStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirTemperatureStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirTemperatureStateRequest): PullAirTemperatureStateRequest.AsObject;
  static serializeBinaryToWriter(message: PullAirTemperatureStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirTemperatureStateRequest;
  static deserializeBinaryFromReader(message: PullAirTemperatureStateRequest, reader: jspb.BinaryReader): PullAirTemperatureStateRequest;
}

export namespace PullAirTemperatureStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullAirTemperatureStateResponse extends jspb.Message {
  getChangesList(): Array<AirTemperatureStateChange>;
  setChangesList(value: Array<AirTemperatureStateChange>): PullAirTemperatureStateResponse;
  clearChangesList(): PullAirTemperatureStateResponse;
  addChanges(value?: AirTemperatureStateChange, index?: number): AirTemperatureStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirTemperatureStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirTemperatureStateResponse): PullAirTemperatureStateResponse.AsObject;
  static serializeBinaryToWriter(message: PullAirTemperatureStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirTemperatureStateResponse;
  static deserializeBinaryFromReader(message: PullAirTemperatureStateResponse, reader: jspb.BinaryReader): PullAirTemperatureStateResponse;
}

export namespace PullAirTemperatureStateResponse {
  export type AsObject = {
    changesList: Array<AirTemperatureStateChange.AsObject>,
  }
}

export class AirTemperatureStateChange extends jspb.Message {
  getName(): string;
  setName(value: string): AirTemperatureStateChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): AirTemperatureStateChange;
  hasCreateTime(): boolean;
  clearCreateTime(): AirTemperatureStateChange;

  getState(): AirTemperatureState | undefined;
  setState(value?: AirTemperatureState): AirTemperatureStateChange;
  hasState(): boolean;
  clearState(): AirTemperatureStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirTemperatureStateChange.AsObject;
  static toObject(includeInstance: boolean, msg: AirTemperatureStateChange): AirTemperatureStateChange.AsObject;
  static serializeBinaryToWriter(message: AirTemperatureStateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirTemperatureStateChange;
  static deserializeBinaryFromReader(message: AirTemperatureStateChange, reader: jspb.BinaryReader): AirTemperatureStateChange;
}

export namespace AirTemperatureStateChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: AirTemperatureState.AsObject,
  }
}

export class AirTemperatureState extends jspb.Message {
  getMode(): AirTemperatureMode;
  setMode(value: AirTemperatureMode): AirTemperatureState;

  getTemperatureSetPoint(): types_unit_pb.Temperature | undefined;
  setTemperatureSetPoint(value?: types_unit_pb.Temperature): AirTemperatureState;
  hasTemperatureSetPoint(): boolean;
  clearTemperatureSetPoint(): AirTemperatureState;

  getTemperatureSetPointDelta(): types_unit_pb.Temperature | undefined;
  setTemperatureSetPointDelta(value?: types_unit_pb.Temperature): AirTemperatureState;
  hasTemperatureSetPointDelta(): boolean;
  clearTemperatureSetPointDelta(): AirTemperatureState;

  getTemperatureRange(): TemperatureRange | undefined;
  setTemperatureRange(value?: TemperatureRange): AirTemperatureState;
  hasTemperatureRange(): boolean;
  clearTemperatureRange(): AirTemperatureState;

  getAmbientTemperature(): types_unit_pb.Temperature | undefined;
  setAmbientTemperature(value?: types_unit_pb.Temperature): AirTemperatureState;
  hasAmbientTemperature(): boolean;
  clearAmbientTemperature(): AirTemperatureState;

  getAmbientHumidity(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAmbientHumidity(value?: google_protobuf_wrappers_pb.FloatValue): AirTemperatureState;
  hasAmbientHumidity(): boolean;
  clearAmbientHumidity(): AirTemperatureState;

  getTemperatureGoalCase(): AirTemperatureState.TemperatureGoalCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirTemperatureState.AsObject;
  static toObject(includeInstance: boolean, msg: AirTemperatureState): AirTemperatureState.AsObject;
  static serializeBinaryToWriter(message: AirTemperatureState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirTemperatureState;
  static deserializeBinaryFromReader(message: AirTemperatureState, reader: jspb.BinaryReader): AirTemperatureState;
}

export namespace AirTemperatureState {
  export type AsObject = {
    mode: AirTemperatureMode,
    temperatureSetPoint?: types_unit_pb.Temperature.AsObject,
    temperatureSetPointDelta?: types_unit_pb.Temperature.AsObject,
    temperatureRange?: TemperatureRange.AsObject,
    ambientTemperature?: types_unit_pb.Temperature.AsObject,
    ambientHumidity?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }

  export enum TemperatureGoalCase { 
    TEMPERATURE_GOAL_NOT_SET = 0,
    TEMPERATURE_SET_POINT = 2,
    TEMPERATURE_SET_POINT_DELTA = 3,
    TEMPERATURE_RANGE = 4,
  }
}

export class TemperatureRange extends jspb.Message {
  getLow(): types_unit_pb.Temperature | undefined;
  setLow(value?: types_unit_pb.Temperature): TemperatureRange;
  hasLow(): boolean;
  clearLow(): TemperatureRange;

  getHigh(): types_unit_pb.Temperature | undefined;
  setHigh(value?: types_unit_pb.Temperature): TemperatureRange;
  hasHigh(): boolean;
  clearHigh(): TemperatureRange;

  getIdeal(): types_unit_pb.Temperature | undefined;
  setIdeal(value?: types_unit_pb.Temperature): TemperatureRange;
  hasIdeal(): boolean;
  clearIdeal(): TemperatureRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureRange.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureRange): TemperatureRange.AsObject;
  static serializeBinaryToWriter(message: TemperatureRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureRange;
  static deserializeBinaryFromReader(message: TemperatureRange, reader: jspb.BinaryReader): TemperatureRange;
}

export namespace TemperatureRange {
  export type AsObject = {
    low?: types_unit_pb.Temperature.AsObject,
    high?: types_unit_pb.Temperature.AsObject,
    ideal?: types_unit_pb.Temperature.AsObject,
  }
}

export enum AirTemperatureMode { 
  UNKNOWN = 0,
  ON = 1,
  OFF = 2,
  HEAT = 3,
  COOL = 4,
  HEAT_COOL = 5,
  AUTO = 6,
  FAN_ONLY = 7,
  ECO = 8,
  PURIFIER = 9,
  DRY = 10,
  LOCKED = 11,
}
