import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_on_off_pb from '../../types/on_off_pb';


export class OnOffChange extends jspb.Message {
  getName(): string;
  setName(value: string): OnOffChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OnOffChange;
  hasCreateTime(): boolean;
  clearCreateTime(): OnOffChange;

  getState(): types_on_off_pb.OnOffState;
  setState(value: types_on_off_pb.OnOffState): OnOffChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnOffChange.AsObject;
  static toObject(includeInstance: boolean, msg: OnOffChange): OnOffChange.AsObject;
  static serializeBinaryToWriter(message: OnOffChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnOffChange;
  static deserializeBinaryFromReader(message: OnOffChange, reader: jspb.BinaryReader): OnOffChange;
}

export namespace OnOffChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: types_on_off_pb.OnOffState,
  }
}

export class OnRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OnRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnRequest): OnRequest.AsObject;
  static serializeBinaryToWriter(message: OnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnRequest;
  static deserializeBinaryFromReader(message: OnRequest, reader: jspb.BinaryReader): OnRequest;
}

export namespace OnRequest {
  export type AsObject = {
    name: string,
  }
}

export class OnReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnReply.AsObject;
  static toObject(includeInstance: boolean, msg: OnReply): OnReply.AsObject;
  static serializeBinaryToWriter(message: OnReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnReply;
  static deserializeBinaryFromReader(message: OnReply, reader: jspb.BinaryReader): OnReply;
}

export namespace OnReply {
  export type AsObject = {
  }
}

export class OffRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OffRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OffRequest): OffRequest.AsObject;
  static serializeBinaryToWriter(message: OffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OffRequest;
  static deserializeBinaryFromReader(message: OffRequest, reader: jspb.BinaryReader): OffRequest;
}

export namespace OffRequest {
  export type AsObject = {
    name: string,
  }
}

export class OffReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OffReply.AsObject;
  static toObject(includeInstance: boolean, msg: OffReply): OffReply.AsObject;
  static serializeBinaryToWriter(message: OffReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OffReply;
  static deserializeBinaryFromReader(message: OffReply, reader: jspb.BinaryReader): OffReply;
}

export namespace OffReply {
  export type AsObject = {
  }
}

export class GetOnOffStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOnOffStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOnOffStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOnOffStateRequest): GetOnOffStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetOnOffStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOnOffStateRequest;
  static deserializeBinaryFromReader(message: GetOnOffStateRequest, reader: jspb.BinaryReader): GetOnOffStateRequest;
}

export namespace GetOnOffStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetOnOffStateResponse extends jspb.Message {
  getState(): types_on_off_pb.OnOffState;
  setState(value: types_on_off_pb.OnOffState): GetOnOffStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOnOffStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOnOffStateResponse): GetOnOffStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetOnOffStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOnOffStateResponse;
  static deserializeBinaryFromReader(message: GetOnOffStateResponse, reader: jspb.BinaryReader): GetOnOffStateResponse;
}

export namespace GetOnOffStateResponse {
  export type AsObject = {
    state: types_on_off_pb.OnOffState,
  }
}

export class OnOffPullRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OnOffPullRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnOffPullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnOffPullRequest): OnOffPullRequest.AsObject;
  static serializeBinaryToWriter(message: OnOffPullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnOffPullRequest;
  static deserializeBinaryFromReader(message: OnOffPullRequest, reader: jspb.BinaryReader): OnOffPullRequest;
}

export namespace OnOffPullRequest {
  export type AsObject = {
    name: string,
  }
}

export class OnOffPullResponse extends jspb.Message {
  getChangesList(): Array<OnOffChange>;
  setChangesList(value: Array<OnOffChange>): OnOffPullResponse;
  clearChangesList(): OnOffPullResponse;
  addChanges(value?: OnOffChange, index?: number): OnOffChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnOffPullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OnOffPullResponse): OnOffPullResponse.AsObject;
  static serializeBinaryToWriter(message: OnOffPullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnOffPullResponse;
  static deserializeBinaryFromReader(message: OnOffPullResponse, reader: jspb.BinaryReader): OnOffPullResponse;
}

export namespace OnOffPullResponse {
  export type AsObject = {
    changesList: Array<OnOffChange.AsObject>,
  }
}

