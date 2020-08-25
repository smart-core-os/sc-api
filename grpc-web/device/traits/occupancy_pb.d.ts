import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OccupancyAttributes extends jspb.Message {
  getMaxPeople(): number;
  setMaxPeople(value: number): OccupancyAttributes;

  getSupportsOverride(): boolean;
  setSupportsOverride(value: boolean): OccupancyAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OccupancyAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: OccupancyAttributes): OccupancyAttributes.AsObject;
  static serializeBinaryToWriter(message: OccupancyAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OccupancyAttributes;
  static deserializeBinaryFromReader(message: OccupancyAttributes, reader: jspb.BinaryReader): OccupancyAttributes;
}

export namespace OccupancyAttributes {
  export type AsObject = {
    maxPeople: number,
    supportsOverride: boolean,
  }
}

export class Occupancy extends jspb.Message {
  getState(): OccupancyState;
  setState(value: OccupancyState): Occupancy;

  getPeopleCount(): number;
  setPeopleCount(value: number): Occupancy;

  getStateChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Occupancy;
  hasStateChangeTime(): boolean;
  clearStateChangeTime(): Occupancy;

  getReasonsList(): Array<string>;
  setReasonsList(value: Array<string>): Occupancy;
  clearReasonsList(): Occupancy;
  addReasons(value: string, index?: number): Occupancy;

  getConfidence(): number;
  setConfidence(value: number): Occupancy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Occupancy.AsObject;
  static toObject(includeInstance: boolean, msg: Occupancy): Occupancy.AsObject;
  static serializeBinaryToWriter(message: Occupancy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Occupancy;
  static deserializeBinaryFromReader(message: Occupancy, reader: jspb.BinaryReader): Occupancy;
}

export namespace Occupancy {
  export type AsObject = {
    state: OccupancyState,
    peopleCount: number,
    stateChangeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reasonsList: Array<string>,
    confidence: number,
  }
}

export class OccupancyOverride extends jspb.Message {
  getName(): string;
  setName(value: string): OccupancyOverride;

  getState(): OccupancyState;
  setState(value: OccupancyState): OccupancyOverride;

  getPeopleCount(): number;
  setPeopleCount(value: number): OccupancyOverride;

  getBeginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginTime(value?: google_protobuf_timestamp_pb.Timestamp): OccupancyOverride;
  hasBeginTime(): boolean;
  clearBeginTime(): OccupancyOverride;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): OccupancyOverride;
  hasExpireTime(): boolean;
  clearExpireTime(): OccupancyOverride;

  getReason(): string;
  setReason(value: string): OccupancyOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OccupancyOverride.AsObject;
  static toObject(includeInstance: boolean, msg: OccupancyOverride): OccupancyOverride.AsObject;
  static serializeBinaryToWriter(message: OccupancyOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OccupancyOverride;
  static deserializeBinaryFromReader(message: OccupancyOverride, reader: jspb.BinaryReader): OccupancyOverride;
}

export namespace OccupancyOverride {
  export type AsObject = {
    name: string,
    state: OccupancyState,
    peopleCount: number,
    beginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reason: string,
  }
}

export class GetOccupancyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOccupancyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccupancyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccupancyRequest): GetOccupancyRequest.AsObject;
  static serializeBinaryToWriter(message: GetOccupancyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccupancyRequest;
  static deserializeBinaryFromReader(message: GetOccupancyRequest, reader: jspb.BinaryReader): GetOccupancyRequest;
}

export namespace GetOccupancyRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullOccupancyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullOccupancyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOccupancyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullOccupancyRequest): PullOccupancyRequest.AsObject;
  static serializeBinaryToWriter(message: PullOccupancyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOccupancyRequest;
  static deserializeBinaryFromReader(message: PullOccupancyRequest, reader: jspb.BinaryReader): PullOccupancyRequest;
}

export namespace PullOccupancyRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullOccupancyResponse extends jspb.Message {
  getChangesList(): Array<OccupancyChange>;
  setChangesList(value: Array<OccupancyChange>): PullOccupancyResponse;
  clearChangesList(): PullOccupancyResponse;
  addChanges(value?: OccupancyChange, index?: number): OccupancyChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOccupancyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullOccupancyResponse): PullOccupancyResponse.AsObject;
  static serializeBinaryToWriter(message: PullOccupancyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOccupancyResponse;
  static deserializeBinaryFromReader(message: PullOccupancyResponse, reader: jspb.BinaryReader): PullOccupancyResponse;
}

export namespace PullOccupancyResponse {
  export type AsObject = {
    changesList: Array<OccupancyChange.AsObject>,
  }
}

export class OccupancyChange extends jspb.Message {
  getName(): string;
  setName(value: string): OccupancyChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OccupancyChange;
  hasCreateTime(): boolean;
  clearCreateTime(): OccupancyChange;

  getOccupancy(): Occupancy | undefined;
  setOccupancy(value?: Occupancy): OccupancyChange;
  hasOccupancy(): boolean;
  clearOccupancy(): OccupancyChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OccupancyChange.AsObject;
  static toObject(includeInstance: boolean, msg: OccupancyChange): OccupancyChange.AsObject;
  static serializeBinaryToWriter(message: OccupancyChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OccupancyChange;
  static deserializeBinaryFromReader(message: OccupancyChange, reader: jspb.BinaryReader): OccupancyChange;
}

export namespace OccupancyChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    occupancy?: Occupancy.AsObject,
  }
}

export class CreateOccupancyOverrideRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateOccupancyOverrideRequest;

  getOverride(): OccupancyOverride | undefined;
  setOverride(value?: OccupancyOverride): CreateOccupancyOverrideRequest;
  hasOverride(): boolean;
  clearOverride(): CreateOccupancyOverrideRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOccupancyOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOccupancyOverrideRequest): CreateOccupancyOverrideRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOccupancyOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOccupancyOverrideRequest;
  static deserializeBinaryFromReader(message: CreateOccupancyOverrideRequest, reader: jspb.BinaryReader): CreateOccupancyOverrideRequest;
}

export namespace CreateOccupancyOverrideRequest {
  export type AsObject = {
    name: string,
    override?: OccupancyOverride.AsObject,
  }
}

export class UpdateOccupancyOverrideRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateOccupancyOverrideRequest;

  getOverride(): OccupancyOverride | undefined;
  setOverride(value?: OccupancyOverride): UpdateOccupancyOverrideRequest;
  hasOverride(): boolean;
  clearOverride(): UpdateOccupancyOverrideRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateOccupancyOverrideRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateOccupancyOverrideRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOccupancyOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOccupancyOverrideRequest): UpdateOccupancyOverrideRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOccupancyOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOccupancyOverrideRequest;
  static deserializeBinaryFromReader(message: UpdateOccupancyOverrideRequest, reader: jspb.BinaryReader): UpdateOccupancyOverrideRequest;
}

export namespace UpdateOccupancyOverrideRequest {
  export type AsObject = {
    name: string,
    override?: OccupancyOverride.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteOccupancyOverrideRequest extends jspb.Message {
  getDeviceName(): string;
  setDeviceName(value: string): DeleteOccupancyOverrideRequest;

  getOverrideName(): string;
  setOverrideName(value: string): DeleteOccupancyOverrideRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOccupancyOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOccupancyOverrideRequest): DeleteOccupancyOverrideRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOccupancyOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOccupancyOverrideRequest;
  static deserializeBinaryFromReader(message: DeleteOccupancyOverrideRequest, reader: jspb.BinaryReader): DeleteOccupancyOverrideRequest;
}

export namespace DeleteOccupancyOverrideRequest {
  export type AsObject = {
    deviceName: string,
    overrideName: string,
  }
}

export class GetOccupancyOverrideRequest extends jspb.Message {
  getDeviceName(): string;
  setDeviceName(value: string): GetOccupancyOverrideRequest;

  getOverrideName(): string;
  setOverrideName(value: string): GetOccupancyOverrideRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccupancyOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccupancyOverrideRequest): GetOccupancyOverrideRequest.AsObject;
  static serializeBinaryToWriter(message: GetOccupancyOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccupancyOverrideRequest;
  static deserializeBinaryFromReader(message: GetOccupancyOverrideRequest, reader: jspb.BinaryReader): GetOccupancyOverrideRequest;
}

export namespace GetOccupancyOverrideRequest {
  export type AsObject = {
    deviceName: string,
    overrideName: string,
  }
}

export class ListOccupancyOverridesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListOccupancyOverridesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccupancyOverridesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccupancyOverridesRequest): ListOccupancyOverridesRequest.AsObject;
  static serializeBinaryToWriter(message: ListOccupancyOverridesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccupancyOverridesRequest;
  static deserializeBinaryFromReader(message: ListOccupancyOverridesRequest, reader: jspb.BinaryReader): ListOccupancyOverridesRequest;
}

export namespace ListOccupancyOverridesRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListOccupancyOverridesResponse extends jspb.Message {
  getOverridesList(): Array<OccupancyOverride>;
  setOverridesList(value: Array<OccupancyOverride>): ListOccupancyOverridesResponse;
  clearOverridesList(): ListOccupancyOverridesResponse;
  addOverrides(value?: OccupancyOverride, index?: number): OccupancyOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccupancyOverridesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccupancyOverridesResponse): ListOccupancyOverridesResponse.AsObject;
  static serializeBinaryToWriter(message: ListOccupancyOverridesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccupancyOverridesResponse;
  static deserializeBinaryFromReader(message: ListOccupancyOverridesResponse, reader: jspb.BinaryReader): ListOccupancyOverridesResponse;
}

export namespace ListOccupancyOverridesResponse {
  export type AsObject = {
    overridesList: Array<OccupancyOverride.AsObject>,
  }
}

export enum OccupancyState { 
  NO_SIGNALS = 0,
  OCCUPIED = 1,
  UNOCCUPIED = 2,
  IDLE = 3,
}
