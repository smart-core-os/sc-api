import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class HumiditySensorAttributes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumiditySensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: HumiditySensorAttributes): HumiditySensorAttributes.AsObject;
  static serializeBinaryToWriter(message: HumiditySensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumiditySensorAttributes;
  static deserializeBinaryFromReader(message: HumiditySensorAttributes, reader: jspb.BinaryReader): HumiditySensorAttributes;
}

export namespace HumiditySensorAttributes {
  export type AsObject = {
  }
}

export class Humidity extends jspb.Message {
  getRelativeHumidity(): number;
  setRelativeHumidity(value: number): Humidity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Humidity.AsObject;
  static toObject(includeInstance: boolean, msg: Humidity): Humidity.AsObject;
  static serializeBinaryToWriter(message: Humidity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Humidity;
  static deserializeBinaryFromReader(message: Humidity, reader: jspb.BinaryReader): Humidity;
}

export namespace Humidity {
  export type AsObject = {
    relativeHumidity: number,
  }
}

export class GetHumidityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetHumidityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHumidityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHumidityRequest): GetHumidityRequest.AsObject;
  static serializeBinaryToWriter(message: GetHumidityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHumidityRequest;
  static deserializeBinaryFromReader(message: GetHumidityRequest, reader: jspb.BinaryReader): GetHumidityRequest;
}

export namespace GetHumidityRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullHumidityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullHumidityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullHumidityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullHumidityRequest): PullHumidityRequest.AsObject;
  static serializeBinaryToWriter(message: PullHumidityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullHumidityRequest;
  static deserializeBinaryFromReader(message: PullHumidityRequest, reader: jspb.BinaryReader): PullHumidityRequest;
}

export namespace PullHumidityRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullHumidityResponse extends jspb.Message {
  getChangesList(): Array<HumidityChange>;
  setChangesList(value: Array<HumidityChange>): PullHumidityResponse;
  clearChangesList(): PullHumidityResponse;
  addChanges(value?: HumidityChange, index?: number): HumidityChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullHumidityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullHumidityResponse): PullHumidityResponse.AsObject;
  static serializeBinaryToWriter(message: PullHumidityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullHumidityResponse;
  static deserializeBinaryFromReader(message: PullHumidityResponse, reader: jspb.BinaryReader): PullHumidityResponse;
}

export namespace PullHumidityResponse {
  export type AsObject = {
    changesList: Array<HumidityChange.AsObject>,
  }
}

export class HumidityChange extends jspb.Message {
  getName(): string;
  setName(value: string): HumidityChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): HumidityChange;
  hasCreateTime(): boolean;
  clearCreateTime(): HumidityChange;

  getHumidity(): Humidity | undefined;
  setHumidity(value?: Humidity): HumidityChange;
  hasHumidity(): boolean;
  clearHumidity(): HumidityChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumidityChange.AsObject;
  static toObject(includeInstance: boolean, msg: HumidityChange): HumidityChange.AsObject;
  static serializeBinaryToWriter(message: HumidityChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumidityChange;
  static deserializeBinaryFromReader(message: HumidityChange, reader: jspb.BinaryReader): HumidityChange;
}

export namespace HumidityChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    humidity?: Humidity.AsObject,
  }
}

