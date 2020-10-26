import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class MotionDetection extends jspb.Message {
  getState(): MotionDetectionState;
  setState(value: MotionDetectionState): MotionDetection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MotionDetection.AsObject;
  static toObject(includeInstance: boolean, msg: MotionDetection): MotionDetection.AsObject;
  static serializeBinaryToWriter(message: MotionDetection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MotionDetection;
  static deserializeBinaryFromReader(message: MotionDetection, reader: jspb.BinaryReader): MotionDetection;
}

export namespace MotionDetection {
  export type AsObject = {
    state: MotionDetectionState,
  }
}

export class MotionSensorAttributes extends jspb.Message {
  getNotDetectedDelay(): google_protobuf_duration_pb.Duration | undefined;
  setNotDetectedDelay(value?: google_protobuf_duration_pb.Duration): MotionSensorAttributes;
  hasNotDetectedDelay(): boolean;
  clearNotDetectedDelay(): MotionSensorAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MotionSensorAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: MotionSensorAttributes): MotionSensorAttributes.AsObject;
  static serializeBinaryToWriter(message: MotionSensorAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MotionSensorAttributes;
  static deserializeBinaryFromReader(message: MotionSensorAttributes, reader: jspb.BinaryReader): MotionSensorAttributes;
}

export namespace MotionSensorAttributes {
  export type AsObject = {
    notDetectedDelay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GetMotionDetectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetMotionDetectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMotionDetectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMotionDetectionRequest): GetMotionDetectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetMotionDetectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMotionDetectionRequest;
  static deserializeBinaryFromReader(message: GetMotionDetectionRequest, reader: jspb.BinaryReader): GetMotionDetectionRequest;
}

export namespace GetMotionDetectionRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullMotionDetectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullMotionDetectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullMotionDetectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullMotionDetectionRequest): PullMotionDetectionRequest.AsObject;
  static serializeBinaryToWriter(message: PullMotionDetectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullMotionDetectionRequest;
  static deserializeBinaryFromReader(message: PullMotionDetectionRequest, reader: jspb.BinaryReader): PullMotionDetectionRequest;
}

export namespace PullMotionDetectionRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullMotionDetectionResponse extends jspb.Message {
  getChangesList(): Array<MotionDetectionChange>;
  setChangesList(value: Array<MotionDetectionChange>): PullMotionDetectionResponse;
  clearChangesList(): PullMotionDetectionResponse;
  addChanges(value?: MotionDetectionChange, index?: number): MotionDetectionChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullMotionDetectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullMotionDetectionResponse): PullMotionDetectionResponse.AsObject;
  static serializeBinaryToWriter(message: PullMotionDetectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullMotionDetectionResponse;
  static deserializeBinaryFromReader(message: PullMotionDetectionResponse, reader: jspb.BinaryReader): PullMotionDetectionResponse;
}

export namespace PullMotionDetectionResponse {
  export type AsObject = {
    changesList: Array<MotionDetectionChange.AsObject>,
  }
}

export class MotionDetectionChange extends jspb.Message {
  getName(): string;
  setName(value: string): MotionDetectionChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): MotionDetectionChange;
  hasCreateTime(): boolean;
  clearCreateTime(): MotionDetectionChange;

  getMotionDetection(): MotionDetection | undefined;
  setMotionDetection(value?: MotionDetection): MotionDetectionChange;
  hasMotionDetection(): boolean;
  clearMotionDetection(): MotionDetectionChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MotionDetectionChange.AsObject;
  static toObject(includeInstance: boolean, msg: MotionDetectionChange): MotionDetectionChange.AsObject;
  static serializeBinaryToWriter(message: MotionDetectionChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MotionDetectionChange;
  static deserializeBinaryFromReader(message: MotionDetectionChange, reader: jspb.BinaryReader): MotionDetectionChange;
}

export namespace MotionDetectionChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    motionDetection?: MotionDetection.AsObject,
  }
}

export enum MotionDetectionState { 
  NOT_DETECTED = 0,
  DETECTED = 1,
}
