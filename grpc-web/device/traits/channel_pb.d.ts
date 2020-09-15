import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ChannelApiAttributes extends jspb.Message {
  getAdjustMax(): number;
  setAdjustMax(value: number): ChannelApiAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelApiAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelApiAttributes): ChannelApiAttributes.AsObject;
  static serializeBinaryToWriter(message: ChannelApiAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelApiAttributes;
  static deserializeBinaryFromReader(message: ChannelApiAttributes, reader: jspb.BinaryReader): ChannelApiAttributes;
}

export namespace ChannelApiAttributes {
  export type AsObject = {
    adjustMax: number,
  }
}

export class Channel extends jspb.Message {
  getId(): string;
  setId(value: string): Channel;

  getChannelNumber(): string;
  setChannelNumber(value: string): Channel;

  getTitle(): string;
  setTitle(value: string): Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    id: string,
    channelNumber: string,
    title: string,
  }
}

export class GetChosenChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetChosenChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChosenChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChosenChannelRequest): GetChosenChannelRequest.AsObject;
  static serializeBinaryToWriter(message: GetChosenChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChosenChannelRequest;
  static deserializeBinaryFromReader(message: GetChosenChannelRequest, reader: jspb.BinaryReader): GetChosenChannelRequest;
}

export namespace GetChosenChannelRequest {
  export type AsObject = {
    name: string,
  }
}

export class ChooseChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ChooseChannelRequest;

  getChannel(): Channel | undefined;
  setChannel(value?: Channel): ChooseChannelRequest;
  hasChannel(): boolean;
  clearChannel(): ChooseChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChooseChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChooseChannelRequest): ChooseChannelRequest.AsObject;
  static serializeBinaryToWriter(message: ChooseChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChooseChannelRequest;
  static deserializeBinaryFromReader(message: ChooseChannelRequest, reader: jspb.BinaryReader): ChooseChannelRequest;
}

export namespace ChooseChannelRequest {
  export type AsObject = {
    name: string,
    channel?: Channel.AsObject,
  }
}

export class AdjustChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AdjustChannelRequest;

  getAmount(): number;
  setAmount(value: number): AdjustChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdjustChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdjustChannelRequest): AdjustChannelRequest.AsObject;
  static serializeBinaryToWriter(message: AdjustChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdjustChannelRequest;
  static deserializeBinaryFromReader(message: AdjustChannelRequest, reader: jspb.BinaryReader): AdjustChannelRequest;
}

export namespace AdjustChannelRequest {
  export type AsObject = {
    name: string,
    amount: number,
  }
}

export class ReturnChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ReturnChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReturnChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReturnChannelRequest): ReturnChannelRequest.AsObject;
  static serializeBinaryToWriter(message: ReturnChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReturnChannelRequest;
  static deserializeBinaryFromReader(message: ReturnChannelRequest, reader: jspb.BinaryReader): ReturnChannelRequest;
}

export namespace ReturnChannelRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullChosenChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullChosenChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullChosenChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullChosenChannelRequest): PullChosenChannelRequest.AsObject;
  static serializeBinaryToWriter(message: PullChosenChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullChosenChannelRequest;
  static deserializeBinaryFromReader(message: PullChosenChannelRequest, reader: jspb.BinaryReader): PullChosenChannelRequest;
}

export namespace PullChosenChannelRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullChosenChannelResponse extends jspb.Message {
  getChangeList(): Array<ChosenChannelChange>;
  setChangeList(value: Array<ChosenChannelChange>): PullChosenChannelResponse;
  clearChangeList(): PullChosenChannelResponse;
  addChange(value?: ChosenChannelChange, index?: number): ChosenChannelChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullChosenChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullChosenChannelResponse): PullChosenChannelResponse.AsObject;
  static serializeBinaryToWriter(message: PullChosenChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullChosenChannelResponse;
  static deserializeBinaryFromReader(message: PullChosenChannelResponse, reader: jspb.BinaryReader): PullChosenChannelResponse;
}

export namespace PullChosenChannelResponse {
  export type AsObject = {
    changeList: Array<ChosenChannelChange.AsObject>,
  }
}

export class ChosenChannelChange extends jspb.Message {
  getName(): string;
  setName(value: string): ChosenChannelChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): ChosenChannelChange;
  hasCreateTime(): boolean;
  clearCreateTime(): ChosenChannelChange;

  getChannel(): Channel | undefined;
  setChannel(value?: Channel): ChosenChannelChange;
  hasChannel(): boolean;
  clearChannel(): ChosenChannelChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChosenChannelChange.AsObject;
  static toObject(includeInstance: boolean, msg: ChosenChannelChange): ChosenChannelChange.AsObject;
  static serializeBinaryToWriter(message: ChosenChannelChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChosenChannelChange;
  static deserializeBinaryFromReader(message: ChosenChannelChange, reader: jspb.BinaryReader): ChosenChannelChange;
}

export namespace ChosenChannelChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    channel?: Channel.AsObject,
  }
}

