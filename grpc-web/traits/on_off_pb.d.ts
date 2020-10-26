import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OnOff extends jspb.Message {
  getOnOrOff(): OnOrOff;
  setOnOrOff(value: OnOrOff): OnOff;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnOff.AsObject;
  static toObject(includeInstance: boolean, msg: OnOff): OnOff.AsObject;
  static serializeBinaryToWriter(message: OnOff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnOff;
  static deserializeBinaryFromReader(message: OnOff, reader: jspb.BinaryReader): OnOff;
}

export namespace OnOff {
  export type AsObject = {
    onOrOff: OnOrOff,
  }
}

export class GetOnOffRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOnOffRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOnOffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOnOffRequest): GetOnOffRequest.AsObject;
  static serializeBinaryToWriter(message: GetOnOffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOnOffRequest;
  static deserializeBinaryFromReader(message: GetOnOffRequest, reader: jspb.BinaryReader): GetOnOffRequest;
}

export namespace GetOnOffRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateOnOffRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateOnOffRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOnOffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOnOffRequest): UpdateOnOffRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOnOffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOnOffRequest;
  static deserializeBinaryFromReader(message: UpdateOnOffRequest, reader: jspb.BinaryReader): UpdateOnOffRequest;
}

export namespace UpdateOnOffRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullOnOffRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullOnOffRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOnOffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullOnOffRequest): PullOnOffRequest.AsObject;
  static serializeBinaryToWriter(message: PullOnOffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOnOffRequest;
  static deserializeBinaryFromReader(message: PullOnOffRequest, reader: jspb.BinaryReader): PullOnOffRequest;
}

export namespace PullOnOffRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullOnOffResponse extends jspb.Message {
  getChangesList(): Array<PullOnOffResponse.Change>;
  setChangesList(value: Array<PullOnOffResponse.Change>): PullOnOffResponse;
  clearChangesList(): PullOnOffResponse;
  addChanges(value?: PullOnOffResponse.Change, index?: number): PullOnOffResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOnOffResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullOnOffResponse): PullOnOffResponse.AsObject;
  static serializeBinaryToWriter(message: PullOnOffResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOnOffResponse;
  static deserializeBinaryFromReader(message: PullOnOffResponse, reader: jspb.BinaryReader): PullOnOffResponse;
}

export namespace PullOnOffResponse {
  export type AsObject = {
    changesList: Array<PullOnOffResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getOnOff(): OnOff | undefined;
    setOnOff(value?: OnOff): Change;
    hasOnOff(): boolean;
    clearOnOff(): Change;

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
      onOff?: OnOff.AsObject,
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export enum OnOrOff { 
  ON_OR_OFF_UNKNOWN = 0,
  ON_OR_OFF_ON = 1,
  ON_OR_OFF_OFF = 2,
}
