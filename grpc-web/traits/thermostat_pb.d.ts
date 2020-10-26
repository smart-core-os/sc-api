import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_unit_pb from '../types/unit_pb';


export class ThermostatAttributes extends jspb.Message {
  getNativeUnit(): types_unit_pb.TemperatureUnit;
  setNativeUnit(value: types_unit_pb.TemperatureUnit): ThermostatAttributes;

  getSupportedModesList(): Array<ThermostatMode>;
  setSupportedModesList(value: Array<ThermostatMode>): ThermostatAttributes;
  clearSupportedModesList(): ThermostatAttributes;
  addSupportedModes(value: ThermostatMode, index?: number): ThermostatAttributes;

  getMinRangeCelsius(): number;
  setMinRangeCelsius(value: number): ThermostatAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThermostatAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ThermostatAttributes): ThermostatAttributes.AsObject;
  static serializeBinaryToWriter(message: ThermostatAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThermostatAttributes;
  static deserializeBinaryFromReader(message: ThermostatAttributes, reader: jspb.BinaryReader): ThermostatAttributes;
}

export namespace ThermostatAttributes {
  export type AsObject = {
    nativeUnit: types_unit_pb.TemperatureUnit,
    supportedModesList: Array<ThermostatMode>,
    minRangeCelsius: number,
  }
}

export class GetThermostatStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetThermostatStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThermostatStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThermostatStateRequest): GetThermostatStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetThermostatStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThermostatStateRequest;
  static deserializeBinaryFromReader(message: GetThermostatStateRequest, reader: jspb.BinaryReader): GetThermostatStateRequest;
}

export namespace GetThermostatStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateThermostatStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateThermostatStateRequest;

  getState(): ThermostatState | undefined;
  setState(value?: ThermostatState): UpdateThermostatStateRequest;
  hasState(): boolean;
  clearState(): UpdateThermostatStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateThermostatStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateThermostatStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateThermostatStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateThermostatStateRequest): UpdateThermostatStateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateThermostatStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateThermostatStateRequest;
  static deserializeBinaryFromReader(message: UpdateThermostatStateRequest, reader: jspb.BinaryReader): UpdateThermostatStateRequest;
}

export namespace UpdateThermostatStateRequest {
  export type AsObject = {
    name: string,
    state?: ThermostatState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullThermostatStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullThermostatStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullThermostatStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullThermostatStateRequest): PullThermostatStateRequest.AsObject;
  static serializeBinaryToWriter(message: PullThermostatStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullThermostatStateRequest;
  static deserializeBinaryFromReader(message: PullThermostatStateRequest, reader: jspb.BinaryReader): PullThermostatStateRequest;
}

export namespace PullThermostatStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullThermostatStateResponse extends jspb.Message {
  getChangesList(): Array<ThermostatStateChange>;
  setChangesList(value: Array<ThermostatStateChange>): PullThermostatStateResponse;
  clearChangesList(): PullThermostatStateResponse;
  addChanges(value?: ThermostatStateChange, index?: number): ThermostatStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullThermostatStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullThermostatStateResponse): PullThermostatStateResponse.AsObject;
  static serializeBinaryToWriter(message: PullThermostatStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullThermostatStateResponse;
  static deserializeBinaryFromReader(message: PullThermostatStateResponse, reader: jspb.BinaryReader): PullThermostatStateResponse;
}

export namespace PullThermostatStateResponse {
  export type AsObject = {
    changesList: Array<ThermostatStateChange.AsObject>,
  }
}

export class ThermostatStateChange extends jspb.Message {
  getName(): string;
  setName(value: string): ThermostatStateChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): ThermostatStateChange;
  hasCreateTime(): boolean;
  clearCreateTime(): ThermostatStateChange;

  getState(): ThermostatState | undefined;
  setState(value?: ThermostatState): ThermostatStateChange;
  hasState(): boolean;
  clearState(): ThermostatStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThermostatStateChange.AsObject;
  static toObject(includeInstance: boolean, msg: ThermostatStateChange): ThermostatStateChange.AsObject;
  static serializeBinaryToWriter(message: ThermostatStateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThermostatStateChange;
  static deserializeBinaryFromReader(message: ThermostatStateChange, reader: jspb.BinaryReader): ThermostatStateChange;
}

export namespace ThermostatStateChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: ThermostatState.AsObject,
  }
}

export class ThermostatState extends jspb.Message {
  getMode(): ThermostatMode;
  setMode(value: ThermostatMode): ThermostatState;

  getTemperatureSetPoint(): types_unit_pb.Temperature | undefined;
  setTemperatureSetPoint(value?: types_unit_pb.Temperature): ThermostatState;
  hasTemperatureSetPoint(): boolean;
  clearTemperatureSetPoint(): ThermostatState;

  getTemperatureSetPointDelta(): types_unit_pb.Temperature | undefined;
  setTemperatureSetPointDelta(value?: types_unit_pb.Temperature): ThermostatState;
  hasTemperatureSetPointDelta(): boolean;
  clearTemperatureSetPointDelta(): ThermostatState;

  getTemperatureRange(): TemperatureRange | undefined;
  setTemperatureRange(value?: TemperatureRange): ThermostatState;
  hasTemperatureRange(): boolean;
  clearTemperatureRange(): ThermostatState;

  getAmbientTemperature(): types_unit_pb.Temperature | undefined;
  setAmbientTemperature(value?: types_unit_pb.Temperature): ThermostatState;
  hasAmbientTemperature(): boolean;
  clearAmbientTemperature(): ThermostatState;

  getAmbientHumidity(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAmbientHumidity(value?: google_protobuf_wrappers_pb.FloatValue): ThermostatState;
  hasAmbientHumidity(): boolean;
  clearAmbientHumidity(): ThermostatState;

  getTemperatureGoalCase(): ThermostatState.TemperatureGoalCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThermostatState.AsObject;
  static toObject(includeInstance: boolean, msg: ThermostatState): ThermostatState.AsObject;
  static serializeBinaryToWriter(message: ThermostatState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThermostatState;
  static deserializeBinaryFromReader(message: ThermostatState, reader: jspb.BinaryReader): ThermostatState;
}

export namespace ThermostatState {
  export type AsObject = {
    mode: ThermostatMode,
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

export enum ThermostatMode { 
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
