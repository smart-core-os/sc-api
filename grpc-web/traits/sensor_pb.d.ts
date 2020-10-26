import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_number_pb from '../types/number_pb';


export class SensorAttributes extends jspb.Message {
  getBrightness(): types_number_pb.FloatBounds | undefined;
  setBrightness(value?: types_number_pb.FloatBounds): SensorAttributes;
  hasBrightness(): boolean;
  clearBrightness(): SensorAttributes;

  getCarbonDioxideLevel(): types_number_pb.FloatBounds | undefined;
  setCarbonDioxideLevel(value?: types_number_pb.FloatBounds): SensorAttributes;
  hasCarbonDioxideLevel(): boolean;
  clearCarbonDioxideLevel(): SensorAttributes;

  getVolatileOrganicCompounds(): types_number_pb.FloatBounds | undefined;
  setVolatileOrganicCompounds(value?: types_number_pb.FloatBounds): SensorAttributes;
  hasVolatileOrganicCompounds(): boolean;
  clearVolatileOrganicCompounds(): SensorAttributes;

  getAirPressure(): types_number_pb.FloatBounds | undefined;
  setAirPressure(value?: types_number_pb.FloatBounds): SensorAttributes;
  hasAirPressure(): boolean;
  clearAirPressure(): SensorAttributes;

  getComfortList(): Array<SensorComfort>;
  setComfortList(value: Array<SensorComfort>): SensorAttributes;
  clearComfortList(): SensorAttributes;
  addComfort(value: SensorComfort, index?: number): SensorAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: SensorAttributes): SensorAttributes.AsObject;
  static serializeBinaryToWriter(message: SensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorAttributes;
  static deserializeBinaryFromReader(message: SensorAttributes, reader: jspb.BinaryReader): SensorAttributes;
}

export namespace SensorAttributes {
  export type AsObject = {
    brightness?: types_number_pb.FloatBounds.AsObject,
    carbonDioxideLevel?: types_number_pb.FloatBounds.AsObject,
    volatileOrganicCompounds?: types_number_pb.FloatBounds.AsObject,
    airPressure?: types_number_pb.FloatBounds.AsObject,
    comfortList: Array<SensorComfort>,
  }
}

export class SensorState extends jspb.Message {
  getBrightnessLux(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setBrightnessLux(value?: google_protobuf_wrappers_pb.FloatValue): SensorState;
  hasBrightnessLux(): boolean;
  clearBrightnessLux(): SensorState;

  getCarbonDioxideLevel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setCarbonDioxideLevel(value?: google_protobuf_wrappers_pb.FloatValue): SensorState;
  hasCarbonDioxideLevel(): boolean;
  clearCarbonDioxideLevel(): SensorState;

  getVolatileOrganicCompounds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setVolatileOrganicCompounds(value?: google_protobuf_wrappers_pb.FloatValue): SensorState;
  hasVolatileOrganicCompounds(): boolean;
  clearVolatileOrganicCompounds(): SensorState;

  getAirPressure(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAirPressure(value?: google_protobuf_wrappers_pb.FloatValue): SensorState;
  hasAirPressure(): boolean;
  clearAirPressure(): SensorState;

  getComfort(): SensorComfort;
  setComfort(value: SensorComfort): SensorState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorState.AsObject;
  static toObject(includeInstance: boolean, msg: SensorState): SensorState.AsObject;
  static serializeBinaryToWriter(message: SensorState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorState;
  static deserializeBinaryFromReader(message: SensorState, reader: jspb.BinaryReader): SensorState;
}

export namespace SensorState {
  export type AsObject = {
    brightnessLux?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    carbonDioxideLevel?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    volatileOrganicCompounds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    airPressure?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    comfort: SensorComfort,
  }
}

export class GetSensorStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSensorStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSensorStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): GetSensorStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSensorStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSensorStateRequest): GetSensorStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetSensorStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSensorStateRequest;
  static deserializeBinaryFromReader(message: GetSensorStateRequest, reader: jspb.BinaryReader): GetSensorStateRequest;
}

export namespace GetSensorStateRequest {
  export type AsObject = {
    name: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullSensorStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullSensorStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): PullSensorStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): PullSensorStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullSensorStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullSensorStateRequest): PullSensorStateRequest.AsObject;
  static serializeBinaryToWriter(message: PullSensorStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullSensorStateRequest;
  static deserializeBinaryFromReader(message: PullSensorStateRequest, reader: jspb.BinaryReader): PullSensorStateRequest;
}

export namespace PullSensorStateRequest {
  export type AsObject = {
    name: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullSensorStateResponse extends jspb.Message {
  getChangesList(): Array<SensorStateChange>;
  setChangesList(value: Array<SensorStateChange>): PullSensorStateResponse;
  clearChangesList(): PullSensorStateResponse;
  addChanges(value?: SensorStateChange, index?: number): SensorStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullSensorStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullSensorStateResponse): PullSensorStateResponse.AsObject;
  static serializeBinaryToWriter(message: PullSensorStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullSensorStateResponse;
  static deserializeBinaryFromReader(message: PullSensorStateResponse, reader: jspb.BinaryReader): PullSensorStateResponse;
}

export namespace PullSensorStateResponse {
  export type AsObject = {
    changesList: Array<SensorStateChange.AsObject>,
  }
}

export class SensorStateChange extends jspb.Message {
  getName(): string;
  setName(value: string): SensorStateChange;

  getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): SensorStateChange;
  hasChangeTime(): boolean;
  clearChangeTime(): SensorStateChange;

  getState(): SensorState | undefined;
  setState(value?: SensorState): SensorStateChange;
  hasState(): boolean;
  clearState(): SensorStateChange;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): SensorStateChange;
  hasUpdateMask(): boolean;
  clearUpdateMask(): SensorStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorStateChange.AsObject;
  static toObject(includeInstance: boolean, msg: SensorStateChange): SensorStateChange.AsObject;
  static serializeBinaryToWriter(message: SensorStateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorStateChange;
  static deserializeBinaryFromReader(message: SensorStateChange, reader: jspb.BinaryReader): SensorStateChange;
}

export namespace SensorStateChange {
  export type AsObject = {
    name: string,
    changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: SensorState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export enum SensorComfort { 
  SENSOR_COMFORT_UNKNOWN = 0,
  SENSOR_COMFORT_COMFORTABLE = 1,
  SENSOR_COMFORT_UNCOMFORTABLE = 2,
}
