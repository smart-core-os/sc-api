import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_number_pb from '../types/number_pb';


export class RangeAttributes extends jspb.Message {
  getValueAttributes(): types_number_pb.Int32Attributes | undefined;
  setValueAttributes(value?: types_number_pb.Int32Attributes): RangeAttributes;
  hasValueAttributes(): boolean;
  clearValueAttributes(): RangeAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: RangeAttributes): RangeAttributes.AsObject;
  static serializeBinaryToWriter(message: RangeAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeAttributes;
  static deserializeBinaryFromReader(message: RangeAttributes, reader: jspb.BinaryReader): RangeAttributes;
}

export namespace RangeAttributes {
  export type AsObject = {
    valueAttributes?: types_number_pb.Int32Attributes.AsObject,
  }
}

export class UpdateRangeValueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateRangeValueRequest;

  getRangeValue(): types_number_pb.Int32Var | undefined;
  setRangeValue(value?: types_number_pb.Int32Var): UpdateRangeValueRequest;
  hasRangeValue(): boolean;
  clearRangeValue(): UpdateRangeValueRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateRangeValueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRangeValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRangeValueRequest): UpdateRangeValueRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRangeValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRangeValueRequest;
  static deserializeBinaryFromReader(message: UpdateRangeValueRequest, reader: jspb.BinaryReader): UpdateRangeValueRequest;
}

export namespace UpdateRangeValueRequest {
  export type AsObject = {
    name: string,
    rangeValue?: types_number_pb.Int32Var.AsObject,
    delta: boolean,
  }
}

export class GetRangeValueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetRangeValueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRangeValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRangeValueRequest): GetRangeValueRequest.AsObject;
  static serializeBinaryToWriter(message: GetRangeValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRangeValueRequest;
  static deserializeBinaryFromReader(message: GetRangeValueRequest, reader: jspb.BinaryReader): GetRangeValueRequest;
}

export namespace GetRangeValueRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullRangeValueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullRangeValueRequest;

  getExcludeRamping(): boolean;
  setExcludeRamping(value: boolean): PullRangeValueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRangeValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullRangeValueRequest): PullRangeValueRequest.AsObject;
  static serializeBinaryToWriter(message: PullRangeValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRangeValueRequest;
  static deserializeBinaryFromReader(message: PullRangeValueRequest, reader: jspb.BinaryReader): PullRangeValueRequest;
}

export namespace PullRangeValueRequest {
  export type AsObject = {
    name: string,
    excludeRamping: boolean,
  }
}

export class PullRangeValueResponse extends jspb.Message {
  getChangesList(): Array<PullRangeValueResponse.Change>;
  setChangesList(value: Array<PullRangeValueResponse.Change>): PullRangeValueResponse;
  clearChangesList(): PullRangeValueResponse;
  addChanges(value?: PullRangeValueResponse.Change, index?: number): PullRangeValueResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRangeValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullRangeValueResponse): PullRangeValueResponse.AsObject;
  static serializeBinaryToWriter(message: PullRangeValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRangeValueResponse;
  static deserializeBinaryFromReader(message: PullRangeValueResponse, reader: jspb.BinaryReader): PullRangeValueResponse;
}

export namespace PullRangeValueResponse {
  export type AsObject = {
    changesList: Array<PullRangeValueResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasCreateTime(): boolean;
    clearCreateTime(): Change;

    getRangeValue(): types_number_pb.Int32Var | undefined;
    setRangeValue(value?: types_number_pb.Int32Var): Change;
    hasRangeValue(): boolean;
    clearRangeValue(): Change;

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
      rangeValue?: types_number_pb.Int32Var.AsObject,
    }
  }

}

