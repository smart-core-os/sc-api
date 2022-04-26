import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_image_pb from '../types/image_pb';


export class EnterLeaveEvent extends jspb.Message {
  getDirection(): EnterLeaveEvent.Direction;
  setDirection(value: EnterLeaveEvent.Direction): EnterLeaveEvent;

  getOccupant(): EnterLeaveEvent.Occupant | undefined;
  setOccupant(value?: EnterLeaveEvent.Occupant): EnterLeaveEvent;
  hasOccupant(): boolean;
  clearOccupant(): EnterLeaveEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterLeaveEvent.AsObject;
  static toObject(includeInstance: boolean, msg: EnterLeaveEvent): EnterLeaveEvent.AsObject;
  static serializeBinaryToWriter(message: EnterLeaveEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterLeaveEvent;
  static deserializeBinaryFromReader(message: EnterLeaveEvent, reader: jspb.BinaryReader): EnterLeaveEvent;
}

export namespace EnterLeaveEvent {
  export type AsObject = {
    direction: EnterLeaveEvent.Direction,
    occupant?: EnterLeaveEvent.Occupant.AsObject,
  }

  export class Occupant extends jspb.Message {
    getName(): string;
    setName(value: string): Occupant;

    getTitle(): string;
    setTitle(value: string): Occupant;

    getDisplayName(): string;
    setDisplayName(value: string): Occupant;

    getPicture(): types_image_pb.Image | undefined;
    setPicture(value?: types_image_pb.Image): Occupant;
    hasPicture(): boolean;
    clearPicture(): Occupant;

    getUrl(): string;
    setUrl(value: string): Occupant;

    getEmail(): string;
    setEmail(value: string): Occupant;

    getIdsMap(): jspb.Map<string, string>;
    clearIdsMap(): Occupant;

    getMoreMap(): jspb.Map<string, string>;
    clearMoreMap(): Occupant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Occupant.AsObject;
    static toObject(includeInstance: boolean, msg: Occupant): Occupant.AsObject;
    static serializeBinaryToWriter(message: Occupant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Occupant;
    static deserializeBinaryFromReader(message: Occupant, reader: jspb.BinaryReader): Occupant;
  }

  export namespace Occupant {
    export type AsObject = {
      name: string,
      title: string,
      displayName: string,
      picture?: types_image_pb.Image.AsObject,
      url: string,
      email: string,
      idsMap: Array<[string, string]>,
      moreMap: Array<[string, string]>,
    }
  }


  export enum Direction { 
    DIRECTION_UNSPECIFIED = 0,
    ENTER = 1,
    LEAVE = 2,
  }
}

export class PullEnterLeaveEventsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullEnterLeaveEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): PullEnterLeaveEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): PullEnterLeaveEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullEnterLeaveEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullEnterLeaveEventsRequest): PullEnterLeaveEventsRequest.AsObject;
  static serializeBinaryToWriter(message: PullEnterLeaveEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullEnterLeaveEventsRequest;
  static deserializeBinaryFromReader(message: PullEnterLeaveEventsRequest, reader: jspb.BinaryReader): PullEnterLeaveEventsRequest;
}

export namespace PullEnterLeaveEventsRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullEnterLeaveEventsResponse extends jspb.Message {
  getChangesList(): Array<PullEnterLeaveEventsResponse.Change>;
  setChangesList(value: Array<PullEnterLeaveEventsResponse.Change>): PullEnterLeaveEventsResponse;
  clearChangesList(): PullEnterLeaveEventsResponse;
  addChanges(value?: PullEnterLeaveEventsResponse.Change, index?: number): PullEnterLeaveEventsResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullEnterLeaveEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullEnterLeaveEventsResponse): PullEnterLeaveEventsResponse.AsObject;
  static serializeBinaryToWriter(message: PullEnterLeaveEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullEnterLeaveEventsResponse;
  static deserializeBinaryFromReader(message: PullEnterLeaveEventsResponse, reader: jspb.BinaryReader): PullEnterLeaveEventsResponse;
}

export namespace PullEnterLeaveEventsResponse {
  export type AsObject = {
    changesList: Array<PullEnterLeaveEventsResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getEnterLeaveEvent(): EnterLeaveEvent | undefined;
    setEnterLeaveEvent(value?: EnterLeaveEvent): Change;
    hasEnterLeaveEvent(): boolean;
    clearEnterLeaveEvent(): Change;

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
      enterLeaveEvent?: EnterLeaveEvent.AsObject,
    }
  }

}

