import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OccupancyAttributes extends jspb.Message {
  getMaxPeople(): number;
  setMaxPeople(value: number): OccupancyAttributes;

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

export enum OccupancyState { 
  NO_SIGNALS = 0,
  OCCUPIED = 1,
  UNOCCUPIED = 2,
  IDLE = 3,
}
