import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_info_pb from '../types/info_pb';
import * as types_number_pb from '../types/number_pb';


export class AirQuality extends jspb.Message {
  getCarbonDioxideLevel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setCarbonDioxideLevel(value?: google_protobuf_wrappers_pb.FloatValue): AirQuality;
  hasCarbonDioxideLevel(): boolean;
  clearCarbonDioxideLevel(): AirQuality;

  getVolatileOrganicCompounds(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setVolatileOrganicCompounds(value?: google_protobuf_wrappers_pb.FloatValue): AirQuality;
  hasVolatileOrganicCompounds(): boolean;
  clearVolatileOrganicCompounds(): AirQuality;

  getAirPressure(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAirPressure(value?: google_protobuf_wrappers_pb.FloatValue): AirQuality;
  hasAirPressure(): boolean;
  clearAirPressure(): AirQuality;

  getComfort(): AirQuality.Comfort;
  setComfort(value: AirQuality.Comfort): AirQuality;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirQuality.AsObject;
  static toObject(includeInstance: boolean, msg: AirQuality): AirQuality.AsObject;
  static serializeBinaryToWriter(message: AirQuality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirQuality;
  static deserializeBinaryFromReader(message: AirQuality, reader: jspb.BinaryReader): AirQuality;
}

export namespace AirQuality {
  export type AsObject = {
    carbonDioxideLevel?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    volatileOrganicCompounds?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    airPressure?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    comfort: AirQuality.Comfort,
  }

  export enum Comfort { 
    UNKNOWN = 0,
    COMFORTABLE = 1,
    UNCOMFORTABLE = 2,
  }
}

export class AirQualitySupport extends jspb.Message {
  getResourceSupport(): types_info_pb.ResourceSupport | undefined;
  setResourceSupport(value?: types_info_pb.ResourceSupport): AirQualitySupport;
  hasResourceSupport(): boolean;
  clearResourceSupport(): AirQualitySupport;

  getCarbonDioxideLevel(): types_number_pb.FloatBounds | undefined;
  setCarbonDioxideLevel(value?: types_number_pb.FloatBounds): AirQualitySupport;
  hasCarbonDioxideLevel(): boolean;
  clearCarbonDioxideLevel(): AirQualitySupport;

  getVolatileOrganicCompounds(): types_number_pb.FloatBounds | undefined;
  setVolatileOrganicCompounds(value?: types_number_pb.FloatBounds): AirQualitySupport;
  hasVolatileOrganicCompounds(): boolean;
  clearVolatileOrganicCompounds(): AirQualitySupport;

  getAirPressure(): types_number_pb.FloatBounds | undefined;
  setAirPressure(value?: types_number_pb.FloatBounds): AirQualitySupport;
  hasAirPressure(): boolean;
  clearAirPressure(): AirQualitySupport;

  getComfortList(): Array<AirQuality.Comfort>;
  setComfortList(value: Array<AirQuality.Comfort>): AirQualitySupport;
  clearComfortList(): AirQualitySupport;
  addComfort(value: AirQuality.Comfort, index?: number): AirQualitySupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirQualitySupport.AsObject;
  static toObject(includeInstance: boolean, msg: AirQualitySupport): AirQualitySupport.AsObject;
  static serializeBinaryToWriter(message: AirQualitySupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirQualitySupport;
  static deserializeBinaryFromReader(message: AirQualitySupport, reader: jspb.BinaryReader): AirQualitySupport;
}

export namespace AirQualitySupport {
  export type AsObject = {
    resourceSupport?: types_info_pb.ResourceSupport.AsObject,
    carbonDioxideLevel?: types_number_pb.FloatBounds.AsObject,
    volatileOrganicCompounds?: types_number_pb.FloatBounds.AsObject,
    airPressure?: types_number_pb.FloatBounds.AsObject,
    comfortList: Array<AirQuality.Comfort>,
  }
}

export class GetAirQualityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAirQualityRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetAirQualityRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetAirQualityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAirQualityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAirQualityRequest): GetAirQualityRequest.AsObject;
  static serializeBinaryToWriter(message: GetAirQualityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAirQualityRequest;
  static deserializeBinaryFromReader(message: GetAirQualityRequest, reader: jspb.BinaryReader): GetAirQualityRequest;
}

export namespace GetAirQualityRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAirQualityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAirQualityRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): PullAirQualityRequest;
  hasReadMask(): boolean;
  clearReadMask(): PullAirQualityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirQualityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirQualityRequest): PullAirQualityRequest.AsObject;
  static serializeBinaryToWriter(message: PullAirQualityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirQualityRequest;
  static deserializeBinaryFromReader(message: PullAirQualityRequest, reader: jspb.BinaryReader): PullAirQualityRequest;
}

export namespace PullAirQualityRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullAirQualityResponse extends jspb.Message {
  getChangesList(): Array<PullAirQualityResponse.Change>;
  setChangesList(value: Array<PullAirQualityResponse.Change>): PullAirQualityResponse;
  clearChangesList(): PullAirQualityResponse;
  addChanges(value?: PullAirQualityResponse.Change, index?: number): PullAirQualityResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAirQualityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAirQualityResponse): PullAirQualityResponse.AsObject;
  static serializeBinaryToWriter(message: PullAirQualityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAirQualityResponse;
  static deserializeBinaryFromReader(message: PullAirQualityResponse, reader: jspb.BinaryReader): PullAirQualityResponse;
}

export namespace PullAirQualityResponse {
  export type AsObject = {
    changesList: Array<PullAirQualityResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getAirQuality(): AirQuality | undefined;
    setAirQuality(value?: AirQuality): Change;
    hasAirQuality(): boolean;
    clearAirQuality(): Change;

    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): Change;
    hasUpdateMask(): boolean;
    clearUpdateMask(): Change;

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
      airQuality?: AirQuality.AsObject,
      updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
  }

}

export class DescribeAirQualityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DescribeAirQualityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeAirQualityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeAirQualityRequest): DescribeAirQualityRequest.AsObject;
  static serializeBinaryToWriter(message: DescribeAirQualityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeAirQualityRequest;
  static deserializeBinaryFromReader(message: DescribeAirQualityRequest, reader: jspb.BinaryReader): DescribeAirQualityRequest;
}

export namespace DescribeAirQualityRequest {
  export type AsObject = {
    name: string,
  }
}

