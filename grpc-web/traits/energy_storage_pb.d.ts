import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_info_pb from '../types/info_pb';


export class EnergyLevelSupport extends jspb.Message {
  getResourceSupport(): types_info_pb.ResourceSupport | undefined;
  setResourceSupport(value?: types_info_pb.ResourceSupport): EnergyLevelSupport;
  hasResourceSupport(): boolean;
  clearResourceSupport(): EnergyLevelSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnergyLevelSupport.AsObject;
  static toObject(includeInstance: boolean, msg: EnergyLevelSupport): EnergyLevelSupport.AsObject;
  static serializeBinaryToWriter(message: EnergyLevelSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnergyLevelSupport;
  static deserializeBinaryFromReader(message: EnergyLevelSupport, reader: jspb.BinaryReader): EnergyLevelSupport;
}

export namespace EnergyLevelSupport {
  export type AsObject = {
    resourceSupport?: types_info_pb.ResourceSupport.AsObject,
  }
}

export class ChargingStatusSupport extends jspb.Message {
  getResourceSupport(): types_info_pb.ResourceSupport | undefined;
  setResourceSupport(value?: types_info_pb.ResourceSupport): ChargingStatusSupport;
  hasResourceSupport(): boolean;
  clearResourceSupport(): ChargingStatusSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargingStatusSupport.AsObject;
  static toObject(includeInstance: boolean, msg: ChargingStatusSupport): ChargingStatusSupport.AsObject;
  static serializeBinaryToWriter(message: ChargingStatusSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargingStatusSupport;
  static deserializeBinaryFromReader(message: ChargingStatusSupport, reader: jspb.BinaryReader): ChargingStatusSupport;
}

export namespace ChargingStatusSupport {
  export type AsObject = {
    resourceSupport?: types_info_pb.ResourceSupport.AsObject,
  }
}

export class EnergyLevel extends jspb.Message {
  getDescriptiveThreshold(): EnergyLevel.Threshold;
  setDescriptiveThreshold(value: EnergyLevel.Threshold): EnergyLevel;

  getRemaining(): EnergyLevel.Remaining | undefined;
  setRemaining(value?: EnergyLevel.Remaining): EnergyLevel;
  hasRemaining(): boolean;
  clearRemaining(): EnergyLevel;

  getUntilFull(): EnergyLevel.UntilFull | undefined;
  setUntilFull(value?: EnergyLevel.UntilFull): EnergyLevel;
  hasUntilFull(): boolean;
  clearUntilFull(): EnergyLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnergyLevel.AsObject;
  static toObject(includeInstance: boolean, msg: EnergyLevel): EnergyLevel.AsObject;
  static serializeBinaryToWriter(message: EnergyLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnergyLevel;
  static deserializeBinaryFromReader(message: EnergyLevel, reader: jspb.BinaryReader): EnergyLevel;
}

export namespace EnergyLevel {
  export type AsObject = {
    descriptiveThreshold: EnergyLevel.Threshold,
    remaining?: EnergyLevel.Remaining.AsObject,
    untilFull?: EnergyLevel.UntilFull.AsObject,
  }

  export class Remaining extends jspb.Message {
    getTime(): google_protobuf_duration_pb.Duration | undefined;
    setTime(value?: google_protobuf_duration_pb.Duration): Remaining;
    hasTime(): boolean;
    clearTime(): Remaining;

    getDistanceKm(): number;
    setDistanceKm(value: number): Remaining;

    getPercentage(): number;
    setPercentage(value: number): Remaining;

    getEnergyKwh(): number;
    setEnergyKwh(value: number): Remaining;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Remaining.AsObject;
    static toObject(includeInstance: boolean, msg: Remaining): Remaining.AsObject;
    static serializeBinaryToWriter(message: Remaining, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Remaining;
    static deserializeBinaryFromReader(message: Remaining, reader: jspb.BinaryReader): Remaining;
  }

  export namespace Remaining {
    export type AsObject = {
      time?: google_protobuf_duration_pb.Duration.AsObject,
      distanceKm: number,
      percentage: number,
      energyKwh: number,
    }
  }


  export class UntilFull extends jspb.Message {
    getTime(): google_protobuf_duration_pb.Duration | undefined;
    setTime(value?: google_protobuf_duration_pb.Duration): UntilFull;
    hasTime(): boolean;
    clearTime(): UntilFull;

    getDistanceKm(): number;
    setDistanceKm(value: number): UntilFull;

    getPercentage(): number;
    setPercentage(value: number): UntilFull;

    getEnergyKwh(): number;
    setEnergyKwh(value: number): UntilFull;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UntilFull.AsObject;
    static toObject(includeInstance: boolean, msg: UntilFull): UntilFull.AsObject;
    static serializeBinaryToWriter(message: UntilFull, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UntilFull;
    static deserializeBinaryFromReader(message: UntilFull, reader: jspb.BinaryReader): UntilFull;
  }

  export namespace UntilFull {
    export type AsObject = {
      time?: google_protobuf_duration_pb.Duration.AsObject,
      distanceKm: number,
      percentage: number,
      energyKwh: number,
    }
  }


  export enum Threshold { 
    THRESHOLD_UNKNOWN = 0,
    CRITICALLY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    FULL = 6,
    CRITICALLY_HIGH = 7,
  }
}

export class ChargingStatus extends jspb.Message {
  getCharging(): boolean;
  setCharging(value: boolean): ChargingStatus;

  getPluggedIn(): boolean;
  setPluggedIn(value: boolean): ChargingStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ChargingStatus): ChargingStatus.AsObject;
  static serializeBinaryToWriter(message: ChargingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargingStatus;
  static deserializeBinaryFromReader(message: ChargingStatus, reader: jspb.BinaryReader): ChargingStatus;
}

export namespace ChargingStatus {
  export type AsObject = {
    charging: boolean,
    pluggedIn: boolean,
  }
}

export class GetEnergyLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetEnergyLevelRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): GetEnergyLevelRequest;
  hasFields(): boolean;
  clearFields(): GetEnergyLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnergyLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnergyLevelRequest): GetEnergyLevelRequest.AsObject;
  static serializeBinaryToWriter(message: GetEnergyLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnergyLevelRequest;
  static deserializeBinaryFromReader(message: GetEnergyLevelRequest, reader: jspb.BinaryReader): GetEnergyLevelRequest;
}

export namespace GetEnergyLevelRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullEnergyLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullEnergyLevelRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): PullEnergyLevelRequest;
  hasFields(): boolean;
  clearFields(): PullEnergyLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullEnergyLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullEnergyLevelRequest): PullEnergyLevelRequest.AsObject;
  static serializeBinaryToWriter(message: PullEnergyLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullEnergyLevelRequest;
  static deserializeBinaryFromReader(message: PullEnergyLevelRequest, reader: jspb.BinaryReader): PullEnergyLevelRequest;
}

export namespace PullEnergyLevelRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullEnergyLevelResponse extends jspb.Message {
  getChangesList(): Array<PullEnergyLevelResponse.Change>;
  setChangesList(value: Array<PullEnergyLevelResponse.Change>): PullEnergyLevelResponse;
  clearChangesList(): PullEnergyLevelResponse;
  addChanges(value?: PullEnergyLevelResponse.Change, index?: number): PullEnergyLevelResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullEnergyLevelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullEnergyLevelResponse): PullEnergyLevelResponse.AsObject;
  static serializeBinaryToWriter(message: PullEnergyLevelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullEnergyLevelResponse;
  static deserializeBinaryFromReader(message: PullEnergyLevelResponse, reader: jspb.BinaryReader): PullEnergyLevelResponse;
}

export namespace PullEnergyLevelResponse {
  export type AsObject = {
    changesList: Array<PullEnergyLevelResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getEnergyLevel(): EnergyLevel | undefined;
    setEnergyLevel(value?: EnergyLevel): Change;
    hasEnergyLevel(): boolean;
    clearEnergyLevel(): Change;

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
      energyLevel?: EnergyLevel.AsObject,
    }
  }

}

export class GetChargingStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetChargingStatusRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): GetChargingStatusRequest;
  hasFields(): boolean;
  clearFields(): GetChargingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChargingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChargingStatusRequest): GetChargingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetChargingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChargingStatusRequest;
  static deserializeBinaryFromReader(message: GetChargingStatusRequest, reader: jspb.BinaryReader): GetChargingStatusRequest;
}

export namespace GetChargingStatusRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateChargingStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateChargingStatusRequest;

  getChargingStatus(): ChargingStatus | undefined;
  setChargingStatus(value?: ChargingStatus): UpdateChargingStatusRequest;
  hasChargingStatus(): boolean;
  clearChargingStatus(): UpdateChargingStatusRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateChargingStatusRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateChargingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChargingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChargingStatusRequest): UpdateChargingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChargingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChargingStatusRequest;
  static deserializeBinaryFromReader(message: UpdateChargingStatusRequest, reader: jspb.BinaryReader): UpdateChargingStatusRequest;
}

export namespace UpdateChargingStatusRequest {
  export type AsObject = {
    name: string,
    chargingStatus?: ChargingStatus.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullChargingStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullChargingStatusRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): PullChargingStatusRequest;
  hasFields(): boolean;
  clearFields(): PullChargingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullChargingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullChargingStatusRequest): PullChargingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: PullChargingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullChargingStatusRequest;
  static deserializeBinaryFromReader(message: PullChargingStatusRequest, reader: jspb.BinaryReader): PullChargingStatusRequest;
}

export namespace PullChargingStatusRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullChargingStatusResponse extends jspb.Message {
  getChangesList(): Array<PullChargingStatusResponse.Change>;
  setChangesList(value: Array<PullChargingStatusResponse.Change>): PullChargingStatusResponse;
  clearChangesList(): PullChargingStatusResponse;
  addChanges(value?: PullChargingStatusResponse.Change, index?: number): PullChargingStatusResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullChargingStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullChargingStatusResponse): PullChargingStatusResponse.AsObject;
  static serializeBinaryToWriter(message: PullChargingStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullChargingStatusResponse;
  static deserializeBinaryFromReader(message: PullChargingStatusResponse, reader: jspb.BinaryReader): PullChargingStatusResponse;
}

export namespace PullChargingStatusResponse {
  export type AsObject = {
    changesList: Array<PullChargingStatusResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getChargingStatus(): ChargingStatus | undefined;
    setChargingStatus(value?: ChargingStatus): Change;
    hasChargingStatus(): boolean;
    clearChargingStatus(): Change;

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
      chargingStatus?: ChargingStatus.AsObject,
    }
  }

}

export class DescribeEnergyLevelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DescribeEnergyLevelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeEnergyLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeEnergyLevelRequest): DescribeEnergyLevelRequest.AsObject;
  static serializeBinaryToWriter(message: DescribeEnergyLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeEnergyLevelRequest;
  static deserializeBinaryFromReader(message: DescribeEnergyLevelRequest, reader: jspb.BinaryReader): DescribeEnergyLevelRequest;
}

export namespace DescribeEnergyLevelRequest {
  export type AsObject = {
    name: string,
  }
}

export class DescribeChargingStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DescribeChargingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeChargingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeChargingStatusRequest): DescribeChargingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: DescribeChargingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeChargingStatusRequest;
  static deserializeBinaryFromReader(message: DescribeChargingStatusRequest, reader: jspb.BinaryReader): DescribeChargingStatusRequest;
}

export namespace DescribeChargingStatusRequest {
  export type AsObject = {
    name: string,
  }
}

