import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_number_pb from '../types/number_pb';


export class BrightnessSensorAttributes extends jspb.Message {
  getAmbientBrightnessAttributes(): types_number_pb.FloatAttributes | undefined;
  setAmbientBrightnessAttributes(value?: types_number_pb.FloatAttributes): BrightnessSensorAttributes;
  hasAmbientBrightnessAttributes(): boolean;
  clearAmbientBrightnessAttributes(): BrightnessSensorAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrightnessSensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: BrightnessSensorAttributes): BrightnessSensorAttributes.AsObject;
  static serializeBinaryToWriter(message: BrightnessSensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrightnessSensorAttributes;
  static deserializeBinaryFromReader(message: BrightnessSensorAttributes, reader: jspb.BinaryReader): BrightnessSensorAttributes;
}

export namespace BrightnessSensorAttributes {
  export type AsObject = {
    ambientBrightnessAttributes?: types_number_pb.FloatAttributes.AsObject,
  }
}

export class AmbientBrightness extends jspb.Message {
  getBrightnessLux(): number;
  setBrightnessLux(value: number): AmbientBrightness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmbientBrightness.AsObject;
  static toObject(includeInstance: boolean, msg: AmbientBrightness): AmbientBrightness.AsObject;
  static serializeBinaryToWriter(message: AmbientBrightness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmbientBrightness;
  static deserializeBinaryFromReader(message: AmbientBrightness, reader: jspb.BinaryReader): AmbientBrightness;
}

export namespace AmbientBrightness {
  export type AsObject = {
    brightnessLux: number,
  }
}

export class GetAmbientBrightnessRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAmbientBrightnessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAmbientBrightnessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAmbientBrightnessRequest): GetAmbientBrightnessRequest.AsObject;
  static serializeBinaryToWriter(message: GetAmbientBrightnessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAmbientBrightnessRequest;
  static deserializeBinaryFromReader(message: GetAmbientBrightnessRequest, reader: jspb.BinaryReader): GetAmbientBrightnessRequest;
}

export namespace GetAmbientBrightnessRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullAmbientBrightnessRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAmbientBrightnessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAmbientBrightnessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAmbientBrightnessRequest): PullAmbientBrightnessRequest.AsObject;
  static serializeBinaryToWriter(message: PullAmbientBrightnessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAmbientBrightnessRequest;
  static deserializeBinaryFromReader(message: PullAmbientBrightnessRequest, reader: jspb.BinaryReader): PullAmbientBrightnessRequest;
}

export namespace PullAmbientBrightnessRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullAmbientBrightnessResponse extends jspb.Message {
  getChangesList(): Array<PullAmbientBrightnessResponse.Change>;
  setChangesList(value: Array<PullAmbientBrightnessResponse.Change>): PullAmbientBrightnessResponse;
  clearChangesList(): PullAmbientBrightnessResponse;
  addChanges(value?: PullAmbientBrightnessResponse.Change, index?: number): PullAmbientBrightnessResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAmbientBrightnessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAmbientBrightnessResponse): PullAmbientBrightnessResponse.AsObject;
  static serializeBinaryToWriter(message: PullAmbientBrightnessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAmbientBrightnessResponse;
  static deserializeBinaryFromReader(message: PullAmbientBrightnessResponse, reader: jspb.BinaryReader): PullAmbientBrightnessResponse;
}

export namespace PullAmbientBrightnessResponse {
  export type AsObject = {
    changesList: Array<PullAmbientBrightnessResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getAmbientBrightness(): AmbientBrightness | undefined;
    setAmbientBrightness(value?: AmbientBrightness): Change;
    hasAmbientBrightness(): boolean;
    clearAmbientBrightness(): Change;

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
      ambientBrightness?: AmbientBrightness.AsObject,
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

