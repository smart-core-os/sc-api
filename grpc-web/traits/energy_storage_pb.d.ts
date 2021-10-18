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

  getRechargeable(): boolean;
  setRechargeable(value: boolean): EnergyLevelSupport;

  getChargeControl(): EnergyLevelSupport.ChargeControl;
  setChargeControl(value: EnergyLevelSupport.ChargeControl): EnergyLevelSupport;

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
    rechargeable: boolean,
    chargeControl: EnergyLevelSupport.ChargeControl,
  }

  export enum ChargeControl { 
    CHARGE_CONTROL_UNSPECIFIED = 0,
    NONE = 1,
    DEVICE = 2,
    EXTERNAL = 3,
    ALL = 4,
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

  getQuantity(): EnergyLevel.Quantity | undefined;
  setQuantity(value?: EnergyLevel.Quantity): EnergyLevel;
  hasQuantity(): boolean;
  clearQuantity(): EnergyLevel;

  getCharging(): boolean;
  setCharging(value: boolean): EnergyLevel;

  getPluggedIn(): boolean;
  setPluggedIn(value: boolean): EnergyLevel;

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
    quantity?: EnergyLevel.Quantity.AsObject,
    charging: boolean,
    pluggedIn: boolean,
  }

  export class Remaining extends jspb.Message {
    getTime(): google_protobuf_duration_pb.Duration | undefined;
    setTime(value?: google_protobuf_duration_pb.Duration): Remaining;
    hasTime(): boolean;
    clearTime(): Remaining;

    getDistanceKm(): number;
    setDistanceKm(value: number): Remaining;

    getSpeed(): EnergyLevel.Speed;
    setSpeed(value: EnergyLevel.Speed): Remaining;

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
      speed: EnergyLevel.Speed,
    }
  }


  export class UntilFull extends jspb.Message {
    getTime(): google_protobuf_duration_pb.Duration | undefined;
    setTime(value?: google_protobuf_duration_pb.Duration): UntilFull;
    hasTime(): boolean;
    clearTime(): UntilFull;

    getDistanceKm(): number;
    setDistanceKm(value: number): UntilFull;

    getSpeed(): EnergyLevel.Speed;
    setSpeed(value: EnergyLevel.Speed): UntilFull;

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
      speed: EnergyLevel.Speed,
    }
  }


  export class Quantity extends jspb.Message {
    getPercentage(): number;
    setPercentage(value: number): Quantity;

    getEnergyKwh(): number;
    setEnergyKwh(value: number): Quantity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quantity.AsObject;
    static toObject(includeInstance: boolean, msg: Quantity): Quantity.AsObject;
    static serializeBinaryToWriter(message: Quantity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quantity;
    static deserializeBinaryFromReader(message: Quantity, reader: jspb.BinaryReader): Quantity;
  }

  export namespace Quantity {
    export type AsObject = {
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

  export enum Speed { 
    SPEED_UNSPECIFIED = 0,
    EXTRA_SLOW = 1,
    SLOW = 2,
    NORMAL = 3,
    FAST = 4,
    EXTRA_FAST = 5,
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

export class ChargeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ChargeRequest;

  getCharge(): boolean;
  setCharge(value: boolean): ChargeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeRequest): ChargeRequest.AsObject;
  static serializeBinaryToWriter(message: ChargeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeRequest;
  static deserializeBinaryFromReader(message: ChargeRequest, reader: jspb.BinaryReader): ChargeRequest;
}

export namespace ChargeRequest {
  export type AsObject = {
    name: string,
    charge: boolean,
  }
}

export class ChargeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeResponse): ChargeResponse.AsObject;
  static serializeBinaryToWriter(message: ChargeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeResponse;
  static deserializeBinaryFromReader(message: ChargeResponse, reader: jspb.BinaryReader): ChargeResponse;
}

export namespace ChargeResponse {
  export type AsObject = {
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

