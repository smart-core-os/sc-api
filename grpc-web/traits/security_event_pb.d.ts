import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as types_change_pb from '../types/change_pb'; // proto import: "types/change.proto"


export class SecurityEvent extends jspb.Message {
  getSecurityEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSecurityEventTime(value?: google_protobuf_timestamp_pb.Timestamp): SecurityEvent;
  hasSecurityEventTime(): boolean;
  clearSecurityEventTime(): SecurityEvent;

  getDescription(): string;
  setDescription(value: string): SecurityEvent;

  getId(): string;
  setId(value: string): SecurityEvent;

  getSource(): string;
  setSource(value: string): SecurityEvent;

  getState(): SecurityEvent.State;
  setState(value: SecurityEvent.State): SecurityEvent;

  getPriority(): number;
  setPriority(value: number): SecurityEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityEvent): SecurityEvent.AsObject;
  static serializeBinaryToWriter(message: SecurityEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityEvent;
  static deserializeBinaryFromReader(message: SecurityEvent, reader: jspb.BinaryReader): SecurityEvent;
}

export namespace SecurityEvent {
  export type AsObject = {
    securityEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    id: string,
    source: string,
    state: SecurityEvent.State,
    priority: number,
  }

  export enum State { 
    STATE_UNKNOWN = 0,
    UNACKNOWLEDGED = 1,
    ACKNOWLEDGED = 2,
    RESOLVED = 3,
  }
}

export class ListSecurityEventsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListSecurityEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSecurityEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListSecurityEventsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSecurityEventsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSecurityEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSecurityEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSecurityEventsRequest): ListSecurityEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSecurityEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSecurityEventsRequest;
  static deserializeBinaryFromReader(message: ListSecurityEventsRequest, reader: jspb.BinaryReader): ListSecurityEventsRequest;
}

export namespace ListSecurityEventsRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSecurityEventsResponse extends jspb.Message {
  getSecurityEventsList(): Array<SecurityEvent>;
  setSecurityEventsList(value: Array<SecurityEvent>): ListSecurityEventsResponse;
  clearSecurityEventsList(): ListSecurityEventsResponse;
  addSecurityEvents(value?: SecurityEvent, index?: number): SecurityEvent;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSecurityEventsResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListSecurityEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSecurityEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSecurityEventsResponse): ListSecurityEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSecurityEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSecurityEventsResponse;
  static deserializeBinaryFromReader(message: ListSecurityEventsResponse, reader: jspb.BinaryReader): ListSecurityEventsResponse;
}

export namespace ListSecurityEventsResponse {
  export type AsObject = {
    securityEventsList: Array<SecurityEvent.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class PullSecurityEventsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullSecurityEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): PullSecurityEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): PullSecurityEventsRequest;

  getUpdatesOnly(): boolean;
  setUpdatesOnly(value: boolean): PullSecurityEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullSecurityEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullSecurityEventsRequest): PullSecurityEventsRequest.AsObject;
  static serializeBinaryToWriter(message: PullSecurityEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullSecurityEventsRequest;
  static deserializeBinaryFromReader(message: PullSecurityEventsRequest, reader: jspb.BinaryReader): PullSecurityEventsRequest;
}

export namespace PullSecurityEventsRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    updatesOnly: boolean,
  }
}

export class PullSecurityEventsResponse extends jspb.Message {
  getChangesList(): Array<PullSecurityEventsResponse.Change>;
  setChangesList(value: Array<PullSecurityEventsResponse.Change>): PullSecurityEventsResponse;
  clearChangesList(): PullSecurityEventsResponse;
  addChanges(value?: PullSecurityEventsResponse.Change, index?: number): PullSecurityEventsResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullSecurityEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullSecurityEventsResponse): PullSecurityEventsResponse.AsObject;
  static serializeBinaryToWriter(message: PullSecurityEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullSecurityEventsResponse;
  static deserializeBinaryFromReader(message: PullSecurityEventsResponse, reader: jspb.BinaryReader): PullSecurityEventsResponse;
}

export namespace PullSecurityEventsResponse {
  export type AsObject = {
    changesList: Array<PullSecurityEventsResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getNewValue(): SecurityEvent | undefined;
    setNewValue(value?: SecurityEvent): Change;
    hasNewValue(): boolean;
    clearNewValue(): Change;

    getOldValue(): SecurityEvent | undefined;
    setOldValue(value?: SecurityEvent): Change;
    hasOldValue(): boolean;
    clearOldValue(): Change;

    getType(): types_change_pb.ChangeType;
    setType(value: types_change_pb.ChangeType): Change;

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
      newValue?: SecurityEvent.AsObject,
      oldValue?: SecurityEvent.AsObject,
      type: types_change_pb.ChangeType,
    }
  }

}

