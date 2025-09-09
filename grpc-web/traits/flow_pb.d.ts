import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Flow extends jspb.Message {
  getFlowRateSetPoint(): number;
  setFlowRateSetPoint(value: number): Flow;

  getDriveFrequencySetPoint(): number;
  setDriveFrequencySetPoint(value: number): Flow;

  getMeasuredFlowRate(): number;
  setMeasuredFlowRate(value: number): Flow;

  getMeasuredDriveFrequency(): number;
  setMeasuredDriveFrequency(value: number): Flow;

  getMode(): Flow.FlowMode;
  setMode(value: Flow.FlowMode): Flow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Flow.AsObject;
  static toObject(includeInstance: boolean, msg: Flow): Flow.AsObject;
  static serializeBinaryToWriter(message: Flow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Flow;
  static deserializeBinaryFromReader(message: Flow, reader: jspb.BinaryReader): Flow;
}

export namespace Flow {
  export type AsObject = {
    flowRateSetPoint: number,
    driveFrequencySetPoint: number,
    measuredFlowRate: number,
    measuredDriveFrequency: number,
    mode: Flow.FlowMode,
  }

  export enum FlowMode { 
    UNSPECIFIED = 0,
    FLOW = 1,
    RETURN = 2,
    BLOCKING = 3,
  }
}

export class GetFlowRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFlowRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetFlowRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetFlowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlowRequest): GetFlowRequest.AsObject;
  static serializeBinaryToWriter(message: GetFlowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlowRequest;
  static deserializeBinaryFromReader(message: GetFlowRequest, reader: jspb.BinaryReader): GetFlowRequest;
}

export namespace GetFlowRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullFlowRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullFlowRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): PullFlowRequest;
  hasReadMask(): boolean;
  clearReadMask(): PullFlowRequest;

  getUpdatesOnly(): boolean;
  setUpdatesOnly(value: boolean): PullFlowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullFlowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullFlowRequest): PullFlowRequest.AsObject;
  static serializeBinaryToWriter(message: PullFlowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullFlowRequest;
  static deserializeBinaryFromReader(message: PullFlowRequest, reader: jspb.BinaryReader): PullFlowRequest;
}

export namespace PullFlowRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    updatesOnly: boolean,
  }
}

export class PullFlowResponse extends jspb.Message {
  getChangesList(): Array<PullFlowResponse.Change>;
  setChangesList(value: Array<PullFlowResponse.Change>): PullFlowResponse;
  clearChangesList(): PullFlowResponse;
  addChanges(value?: PullFlowResponse.Change, index?: number): PullFlowResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullFlowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullFlowResponse): PullFlowResponse.AsObject;
  static serializeBinaryToWriter(message: PullFlowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullFlowResponse;
  static deserializeBinaryFromReader(message: PullFlowResponse, reader: jspb.BinaryReader): PullFlowResponse;
}

export namespace PullFlowResponse {
  export type AsObject = {
    changesList: Array<PullFlowResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getFlow(): Flow | undefined;
    setFlow(value?: Flow): Change;
    hasFlow(): boolean;
    clearFlow(): Change;

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
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      flow?: Flow.AsObject,
    }
  }

}

export class UpdateFlowRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateFlowRequest;

  getFlow(): Flow | undefined;
  setFlow(value?: Flow): UpdateFlowRequest;
  hasFlow(): boolean;
  clearFlow(): UpdateFlowRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFlowRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateFlowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFlowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFlowRequest): UpdateFlowRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFlowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFlowRequest;
  static deserializeBinaryFromReader(message: UpdateFlowRequest, reader: jspb.BinaryReader): UpdateFlowRequest;
}

export namespace UpdateFlowRequest {
  export type AsObject = {
    name: string,
    flow?: Flow.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFlowResponse extends jspb.Message {
  getFlow(): Flow | undefined;
  setFlow(value?: Flow): UpdateFlowResponse;
  hasFlow(): boolean;
  clearFlow(): UpdateFlowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFlowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFlowResponse): UpdateFlowResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFlowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFlowResponse;
  static deserializeBinaryFromReader(message: UpdateFlowResponse, reader: jspb.BinaryReader): UpdateFlowResponse;
}

export namespace UpdateFlowResponse {
  export type AsObject = {
    flow?: Flow.AsObject,
  }
}

