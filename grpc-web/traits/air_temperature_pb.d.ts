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

export class GetAirTemperatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAirTemperatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAirTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAirTemperatureRequest): GetAirTemperatureRequest.AsObject;
  static serializeBinaryToWriter(message: GetAirTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAirTemperatureRequest;
  static deserializeBinaryFromReader(message: GetAirTemperatureRequest, reader: jspb.BinaryReader): GetAirTemperatureRequest;
}

export namespace GetAirTemperatureRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateAirTemperatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateAirTemperatureRequest;

  getState(): AirTemperature | undefined;
  setState(value?: AirTemperature): UpdateAirTemperatureRequest;
  hasState(): boolean;
  clearState(): UpdateAirTemperatureRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAirTemperatureRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateAirTemperatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAirTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAirTemperatureRequest): UpdateAirTemperatureRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAirTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAirTemperatureRequest;
  static deserializeBinaryFromReader(message: UpdateAirTemperatureRequest, reader: jspb.BinaryReader): UpdateAirTemperatureRequest;
}

export namespace UpdateAirTemperatureRequest {
  export type AsObject = {
    name: string,
    state?: AirTemperature.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAirTemperatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAirTemperatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirTemperatureRequest): PullAirTemperatureRequest.AsObject;
  static serializeBinaryToWriter(message: PullAirTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirTemperatureRequest;
  static deserializeBinaryFromReader(message: PullAirTemperatureRequest, reader: jspb.BinaryReader): PullAirTemperatureRequest;
}

export namespace PullAirTemperatureRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullAirTemperatureResponse extends jspb.Message {
  getChangesList(): Array<PullAirTemperatureResponse.Change>;
  setChangesList(value: Array<PullAirTemperatureResponse.Change>): PullAirTemperatureResponse;
  clearChangesList(): PullAirTemperatureResponse;
  addChanges(value?: PullAirTemperatureResponse.Change, index?: number): PullAirTemperatureResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirTemperatureResponse): PullAirTemperatureResponse.AsObject;
  static serializeBinaryToWriter(message: PullAirTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirTemperatureResponse;
  static deserializeBinaryFromReader(message: PullAirTemperatureResponse, reader: jspb.BinaryReader): PullAirTemperatureResponse;
}

export namespace PullAirTemperatureResponse {
  export type AsObject = {
    changesList: Array<PullAirTemperatureResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getState(): AirTemperature | undefined;
    setState(value?: AirTemperature): Change;
    hasState(): boolean;
    clearState(): Change;

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
      state?: AirTemperature.AsObject,
    }
  }

}

export class AirTemperature extends jspb.Message {
  getMode(): AirTemperatureMode;
  setMode(value: AirTemperatureMode): AirTemperature;

  getTemperatureSetPoint(): types_unit_pb.Temperature | undefined;
  setTemperatureSetPoint(value?: types_unit_pb.Temperature): AirTemperature;
  hasTemperatureSetPoint(): boolean;
  clearTemperatureSetPoint(): AirTemperature;

  getTemperatureSetPointDelta(): types_unit_pb.Temperature | undefined;
  setTemperatureSetPointDelta(value?: types_unit_pb.Temperature): AirTemperature;
  hasTemperatureSetPointDelta(): boolean;
  clearTemperatureSetPointDelta(): AirTemperature;

  getTemperatureRange(): TemperatureRange | undefined;
  setTemperatureRange(value?: TemperatureRange): AirTemperature;
  hasTemperatureRange(): boolean;
  clearTemperatureRange(): AirTemperature;

  getAmbientTemperature(): types_unit_pb.Temperature | undefined;
  setAmbientTemperature(value?: types_unit_pb.Temperature): AirTemperature;
  hasAmbientTemperature(): boolean;
  clearAmbientTemperature(): AirTemperature;

  getAmbientHumidity(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAmbientHumidity(value?: google_protobuf_wrappers_pb.FloatValue): AirTemperature;
  hasAmbientHumidity(): boolean;
  clearAmbientHumidity(): AirTemperature;

  getDewPoint(): types_unit_pb.Temperature | undefined;
  setDewPoint(value?: types_unit_pb.Temperature): AirTemperature;
  hasDewPoint(): boolean;
  clearDewPoint(): AirTemperature;

  getTemperatureGoalCase(): AirTemperature.TemperatureGoalCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirTemperature.AsObject;
  static toObject(includeInstance: boolean, msg: AirTemperature): AirTemperature.AsObject;
  static serializeBinaryToWriter(message: AirTemperature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirTemperature;
  static deserializeBinaryFromReader(message: AirTemperature, reader: jspb.BinaryReader): AirTemperature;
}

export namespace AirTemperature {
  export type AsObject = {
    mode: AirTemperatureMode,
    temperatureSetPoint?: types_unit_pb.Temperature.AsObject,
    temperatureSetPointDelta?: types_unit_pb.Temperature.AsObject,
    temperatureRange?: TemperatureRange.AsObject,
    ambientTemperature?: types_unit_pb.Temperature.AsObject,
    ambientHumidity?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    dewPoint?: types_unit_pb.Temperature.AsObject,
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
  AIR_TEMPERATURE_MODE_UNKNOWN = 0,
  AIR_TEMPERATURE_MODE_ON = 1,
  AIR_TEMPERATURE_MODE_OFF = 2,
  AIR_TEMPERATURE_MODE_HEAT = 3,
  AIR_TEMPERATURE_MODE_COOL = 4,
  AIR_TEMPERATURE_MODE_HEAT_COOL = 5,
  AIR_TEMPERATURE_MODE_AUTO = 6,
  AIR_TEMPERATURE_MODE_FAN_ONLY = 7,
  AIR_TEMPERATURE_MODE_ECO = 8,
  AIR_TEMPERATURE_MODE_PURIFIER = 9,
  AIR_TEMPERATURE_MODE_DRY = 10,
  AIR_TEMPERATURE_MODE_LOCKED = 11,
}
