import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OccupancySensorAttributes extends jspb.Message {
  getMaxPeople(): number;
  setMaxPeople(value: number): OccupancySensorAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OccupancySensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: OccupancySensorAttributes): OccupancySensorAttributes.AsObject;
  static serializeBinaryToWriter(message: OccupancySensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OccupancySensorAttributes;
  static deserializeBinaryFromReader(message: OccupancySensorAttributes, reader: jspb.BinaryReader): OccupancySensorAttributes;
}

export namespace OccupancySensorAttributes {
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
  getChangesList(): Array<PullOccupancyResponse.Change>;
  setChangesList(value: Array<PullOccupancyResponse.Change>): PullOccupancyResponse;
  clearChangesList(): PullOccupancyResponse;
  addChanges(value?: PullOccupancyResponse.Change, index?: number): PullOccupancyResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOccupancyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullOccupancyResponse): PullOccupancyResponse.AsObject;
  static serializeBinaryToWriter(message: PullOccupancyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOccupancyResponse;
  static deserializeBinaryFromReader(message: PullOccupancyResponse, reader: jspb.BinaryReader): PullOccupancyResponse;
}

export namespace PullOccupancyResponse {
  export type AsObject = {
    changesList: Array<PullOccupancyResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasCreateTime(): boolean;
    clearCreateTime(): Change;

    getOccupancy(): Occupancy | undefined;
    setOccupancy(value?: Occupancy): Change;
    hasOccupancy(): boolean;
    clearOccupancy(): Change;

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
      createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      occupancy?: Occupancy.AsObject,
    }
  }

}

export enum OccupancyState { 
  NO_SIGNALS = 0,
  OCCUPIED = 1,
  UNOCCUPIED = 2,
  IDLE = 3,
}
