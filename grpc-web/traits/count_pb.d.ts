import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class CountAttributes extends jspb.Message {
  getTwoWay(): boolean;
  setTwoWay(value: boolean): CountAttributes;

  getSupportsReset(): boolean;
  setSupportsReset(value: boolean): CountAttributes;

  getSupportsDelta(): boolean;
  setSupportsDelta(value: boolean): CountAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: CountAttributes): CountAttributes.AsObject;
  static serializeBinaryToWriter(message: CountAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountAttributes;
  static deserializeBinaryFromReader(message: CountAttributes, reader: jspb.BinaryReader): CountAttributes;
}

export namespace CountAttributes {
  export type AsObject = {
    twoWay: boolean,
    supportsReset: boolean,
    supportsDelta: boolean,
  }
}

export class Count extends jspb.Message {
  getAdded(): number;
  setAdded(value: number): Count;

  getRemoved(): number;
  setRemoved(value: number): Count;

  getResetTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResetTime(value?: google_protobuf_timestamp_pb.Timestamp): Count;
  hasResetTime(): boolean;
  clearResetTime(): Count;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Count.AsObject;
  static toObject(includeInstance: boolean, msg: Count): Count.AsObject;
  static serializeBinaryToWriter(message: Count, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Count;
  static deserializeBinaryFromReader(message: Count, reader: jspb.BinaryReader): Count;
}

export namespace Count {
  export type AsObject = {
    added: number,
    removed: number,
    resetTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetCountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountRequest): GetCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountRequest;
  static deserializeBinaryFromReader(message: GetCountRequest, reader: jspb.BinaryReader): GetCountRequest;
}

export namespace GetCountRequest {
  export type AsObject = {
    name: string,
  }
}

export class ResetCountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ResetCountRequest;

  getResetTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResetTime(value?: google_protobuf_timestamp_pb.Timestamp): ResetCountRequest;
  hasResetTime(): boolean;
  clearResetTime(): ResetCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetCountRequest): ResetCountRequest.AsObject;
  static serializeBinaryToWriter(message: ResetCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetCountRequest;
  static deserializeBinaryFromReader(message: ResetCountRequest, reader: jspb.BinaryReader): ResetCountRequest;
}

export namespace ResetCountRequest {
  export type AsObject = {
    name: string,
    resetTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateCountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateCountRequest;

  getCount(): Count | undefined;
  setCount(value?: Count): UpdateCountRequest;
  hasCount(): boolean;
  clearCount(): UpdateCountRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCountRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCountRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCountRequest): UpdateCountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCountRequest;
  static deserializeBinaryFromReader(message: UpdateCountRequest, reader: jspb.BinaryReader): UpdateCountRequest;
}

export namespace UpdateCountRequest {
  export type AsObject = {
    name: string,
    count?: Count.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    delta: boolean,
  }
}

export class PullCountsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullCountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullCountsRequest): PullCountsRequest.AsObject;
  static serializeBinaryToWriter(message: PullCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullCountsRequest;
  static deserializeBinaryFromReader(message: PullCountsRequest, reader: jspb.BinaryReader): PullCountsRequest;
}

export namespace PullCountsRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullCountsResponse extends jspb.Message {
  getChangesList(): Array<PullCountsResponse.Change>;
  setChangesList(value: Array<PullCountsResponse.Change>): PullCountsResponse;
  clearChangesList(): PullCountsResponse;
  addChanges(value?: PullCountsResponse.Change, index?: number): PullCountsResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullCountsResponse): PullCountsResponse.AsObject;
  static serializeBinaryToWriter(message: PullCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullCountsResponse;
  static deserializeBinaryFromReader(message: PullCountsResponse, reader: jspb.BinaryReader): PullCountsResponse;
}

export namespace PullCountsResponse {
  export type AsObject = {
    changesList: Array<PullCountsResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getCount(): Count | undefined;
    setCount(value?: Count): Change;
    hasCount(): boolean;
    clearCount(): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

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
      count?: Count.AsObject,
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

