import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_number_pb from '../types/number_pb';


export class AirQualitySensorAttributes extends jspb.Message {
  getCarbonDioxideLevel(): types_number_pb.FloatBounds | undefined;
  setCarbonDioxideLevel(value?: types_number_pb.FloatBounds): AirQualitySensorAttributes;
  hasCarbonDioxideLevel(): boolean;
  clearCarbonDioxideLevel(): AirQualitySensorAttributes;

  getVolatileOrganicCompounds(): types_number_pb.FloatBounds | undefined;
  setVolatileOrganicCompounds(value?: types_number_pb.FloatBounds): AirQualitySensorAttributes;
  hasVolatileOrganicCompounds(): boolean;
  clearVolatileOrganicCompounds(): AirQualitySensorAttributes;

  getAirPressure(): types_number_pb.FloatBounds | undefined;
  setAirPressure(value?: types_number_pb.FloatBounds): AirQualitySensorAttributes;
  hasAirPressure(): boolean;
  clearAirPressure(): AirQualitySensorAttributes;

  getComfortList(): Array<AirQualityComfort>;
  setComfortList(value: Array<AirQualityComfort>): AirQualitySensorAttributes;
  clearComfortList(): AirQualitySensorAttributes;
  addComfort(value: AirQualityComfort, index?: number): AirQualitySensorAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirQualitySensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: AirQualitySensorAttributes): AirQualitySensorAttributes.AsObject;
  static serializeBinaryToWriter(message: AirQualitySensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirQualitySensorAttributes;
  static deserializeBinaryFromReader(message: AirQualitySensorAttributes, reader: jspb.BinaryReader): AirQualitySensorAttributes;
}

export namespace AirQualitySensorAttributes {
  export type AsObject = {
    carbonDioxideLevel?: types_number_pb.FloatBounds.AsObject,
    volatileOrganicCompounds?: types_number_pb.FloatBounds.AsObject,
    airPressure?: types_number_pb.FloatBounds.AsObject,
    comfortList: Array<AirQualityComfort>,
  }
}

export class AirQualityState extends jspb.Message {
  getCarbonDioxideLevel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setCarbonDioxideLevel(value?: google_protobuf_wrappers_pb.FloatValue): AirQualityState;
  hasCarbonDioxideLevel(): boolean;
  clearCarbonDioxideLevel(): AirQualityState;

  getVolatileOrganicCompounds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setVolatileOrganicCompounds(value?: google_protobuf_wrappers_pb.FloatValue): AirQualityState;
  hasVolatileOrganicCompounds(): boolean;
  clearVolatileOrganicCompounds(): AirQualityState;

  getAirPressure(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAirPressure(value?: google_protobuf_wrappers_pb.FloatValue): AirQualityState;
  hasAirPressure(): boolean;
  clearAirPressure(): AirQualityState;

  getComfort(): AirQualityComfort;
  setComfort(value: AirQualityComfort): AirQualityState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirQualityState.AsObject;
  static toObject(includeInstance: boolean, msg: AirQualityState): AirQualityState.AsObject;
  static serializeBinaryToWriter(message: AirQualityState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirQualityState;
  static deserializeBinaryFromReader(message: AirQualityState, reader: jspb.BinaryReader): AirQualityState;
}

export namespace AirQualityState {
  export type AsObject = {
    carbonDioxideLevel?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    volatileOrganicCompounds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    airPressure?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    comfort: AirQualityComfort,
  }
}

export class GetAirQualityStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAirQualityStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): GetAirQualityStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): GetAirQualityStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAirQualityStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAirQualityStateRequest): GetAirQualityStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetAirQualityStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAirQualityStateRequest;
  static deserializeBinaryFromReader(message: GetAirQualityStateRequest, reader: jspb.BinaryReader): GetAirQualityStateRequest;
}

export namespace GetAirQualityStateRequest {
  export type AsObject = {
    name: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAirQualityStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAirQualityStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): PullAirQualityStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): PullAirQualityStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirQualityStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirQualityStateRequest): PullAirQualityStateRequest.AsObject;
  static serializeBinaryToWriter(message: PullAirQualityStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirQualityStateRequest;
  static deserializeBinaryFromReader(message: PullAirQualityStateRequest, reader: jspb.BinaryReader): PullAirQualityStateRequest;
}

export namespace PullAirQualityStateRequest {
  export type AsObject = {
    name: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAirQualityStateResponse extends jspb.Message {
  getChangesList(): Array<AirQualityStateChange>;
  setChangesList(value: Array<AirQualityStateChange>): PullAirQualityStateResponse;
  clearChangesList(): PullAirQualityStateResponse;
  addChanges(value?: AirQualityStateChange, index?: number): AirQualityStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirQualityStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirQualityStateResponse): PullAirQualityStateResponse.AsObject;
  static serializeBinaryToWriter(message: PullAirQualityStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirQualityStateResponse;
  static deserializeBinaryFromReader(message: PullAirQualityStateResponse, reader: jspb.BinaryReader): PullAirQualityStateResponse;
}

export namespace PullAirQualityStateResponse {
  export type AsObject = {
    changesList: Array<AirQualityStateChange.AsObject>,
  }
}

export class AirQualityStateChange extends jspb.Message {
  getName(): string;
  setName(value: string): AirQualityStateChange;

  getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): AirQualityStateChange;
  hasChangeTime(): boolean;
  clearChangeTime(): AirQualityStateChange;

  getState(): AirQualityState | undefined;
  setState(value?: AirQualityState): AirQualityStateChange;
  hasState(): boolean;
  clearState(): AirQualityStateChange;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): AirQualityStateChange;
  hasUpdateMask(): boolean;
  clearUpdateMask(): AirQualityStateChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirQualityStateChange.AsObject;
  static toObject(includeInstance: boolean, msg: AirQualityStateChange): AirQualityStateChange.AsObject;
  static serializeBinaryToWriter(message: AirQualityStateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirQualityStateChange;
  static deserializeBinaryFromReader(message: AirQualityStateChange, reader: jspb.BinaryReader): AirQualityStateChange;
}

export namespace AirQualityStateChange {
  export type AsObject = {
    name: string,
    changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: AirQualityState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export enum AirQualityComfort { 
  AIR_QUALITY_COMFORT_UNKNOWN = 0,
  AIR_QUALITY_COMFORT_COMFORTABLE = 1,
  AIR_QUALITY_COMFORT_UNCOMFORTABLE = 2,
}
