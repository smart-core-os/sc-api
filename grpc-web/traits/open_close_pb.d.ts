import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_number_pb from '../types/number_pb';


export class OpenCloseAttributes extends jspb.Message {
  getPositionAttributes(): types_number_pb.FloatAttributes | undefined;
  setPositionAttributes(value?: types_number_pb.FloatAttributes): OpenCloseAttributes;
  hasPositionAttributes(): boolean;
  clearPositionAttributes(): OpenCloseAttributes;

  getDirectionsList(): Array<OpenCloseDirection>;
  setDirectionsList(value: Array<OpenCloseDirection>): OpenCloseAttributes;
  clearDirectionsList(): OpenCloseAttributes;
  addDirections(value: OpenCloseDirection, index?: number): OpenCloseAttributes;

  getSupportsStop(): boolean;
  setSupportsStop(value: boolean): OpenCloseAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenCloseAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: OpenCloseAttributes): OpenCloseAttributes.AsObject;
  static serializeBinaryToWriter(message: OpenCloseAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenCloseAttributes;
  static deserializeBinaryFromReader(message: OpenCloseAttributes, reader: jspb.BinaryReader): OpenCloseAttributes;
}

export namespace OpenCloseAttributes {
  export type AsObject = {
    positionAttributes?: types_number_pb.FloatAttributes.AsObject,
    directionsList: Array<OpenCloseDirection>,
    supportsStop: boolean,
  }
}

export class OpenCloseStates extends jspb.Message {
  getStatesList(): Array<OpenClosePosition>;
  setStatesList(value: Array<OpenClosePosition>): OpenCloseStates;
  clearStatesList(): OpenCloseStates;
  addStates(value?: OpenClosePosition, index?: number): OpenClosePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenCloseStates.AsObject;
  static toObject(includeInstance: boolean, msg: OpenCloseStates): OpenCloseStates.AsObject;
  static serializeBinaryToWriter(message: OpenCloseStates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenCloseStates;
  static deserializeBinaryFromReader(message: OpenCloseStates, reader: jspb.BinaryReader): OpenCloseStates;
}

export namespace OpenCloseStates {
  export type AsObject = {
    statesList: Array<OpenClosePosition.AsObject>,
  }
}

export class OpenClosePosition extends jspb.Message {
  getPositionPercent(): types_number_pb.FloatVar | undefined;
  setPositionPercent(value?: types_number_pb.FloatVar): OpenClosePosition;
  hasPositionPercent(): boolean;
  clearPositionPercent(): OpenClosePosition;

  getDirection(): OpenCloseDirection;
  setDirection(value: OpenCloseDirection): OpenClosePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenClosePosition.AsObject;
  static toObject(includeInstance: boolean, msg: OpenClosePosition): OpenClosePosition.AsObject;
  static serializeBinaryToWriter(message: OpenClosePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenClosePosition;
  static deserializeBinaryFromReader(message: OpenClosePosition, reader: jspb.BinaryReader): OpenClosePosition;
}

export namespace OpenClosePosition {
  export type AsObject = {
    positionPercent?: types_number_pb.FloatVar.AsObject,
    direction: OpenCloseDirection,
  }
}

export class GetOpenCloseStatesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOpenCloseStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenCloseStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenCloseStatesRequest): GetOpenCloseStatesRequest.AsObject;
  static serializeBinaryToWriter(message: GetOpenCloseStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenCloseStatesRequest;
  static deserializeBinaryFromReader(message: GetOpenCloseStatesRequest, reader: jspb.BinaryReader): GetOpenCloseStatesRequest;
}

export namespace GetOpenCloseStatesRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateOpenCloseStatesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateOpenCloseStatesRequest;

  getStates(): OpenCloseStates | undefined;
  setStates(value?: OpenCloseStates): UpdateOpenCloseStatesRequest;
  hasStates(): boolean;
  clearStates(): UpdateOpenCloseStatesRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateOpenCloseStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOpenCloseStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOpenCloseStatesRequest): UpdateOpenCloseStatesRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOpenCloseStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOpenCloseStatesRequest;
  static deserializeBinaryFromReader(message: UpdateOpenCloseStatesRequest, reader: jspb.BinaryReader): UpdateOpenCloseStatesRequest;
}

export namespace UpdateOpenCloseStatesRequest {
  export type AsObject = {
    name: string,
    states?: OpenCloseStates.AsObject,
    delta: boolean,
  }
}

export class StopOpenCloseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopOpenCloseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopOpenCloseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopOpenCloseRequest): StopOpenCloseRequest.AsObject;
  static serializeBinaryToWriter(message: StopOpenCloseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopOpenCloseRequest;
  static deserializeBinaryFromReader(message: StopOpenCloseRequest, reader: jspb.BinaryReader): StopOpenCloseRequest;
}

export namespace StopOpenCloseRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullOpenCloseStatesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullOpenCloseStatesRequest;

  getExcludeTweening(): boolean;
  setExcludeTweening(value: boolean): PullOpenCloseStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOpenCloseStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullOpenCloseStatesRequest): PullOpenCloseStatesRequest.AsObject;
  static serializeBinaryToWriter(message: PullOpenCloseStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOpenCloseStatesRequest;
  static deserializeBinaryFromReader(message: PullOpenCloseStatesRequest, reader: jspb.BinaryReader): PullOpenCloseStatesRequest;
}

export namespace PullOpenCloseStatesRequest {
  export type AsObject = {
    name: string,
    excludeTweening: boolean,
  }
}

export class PullOpenCloseStatesResponse extends jspb.Message {
  getChangesList(): Array<PullOpenCloseStatesResponse.Change>;
  setChangesList(value: Array<PullOpenCloseStatesResponse.Change>): PullOpenCloseStatesResponse;
  clearChangesList(): PullOpenCloseStatesResponse;
  addChanges(value?: PullOpenCloseStatesResponse.Change, index?: number): PullOpenCloseStatesResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOpenCloseStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullOpenCloseStatesResponse): PullOpenCloseStatesResponse.AsObject;
  static serializeBinaryToWriter(message: PullOpenCloseStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOpenCloseStatesResponse;
  static deserializeBinaryFromReader(message: PullOpenCloseStatesResponse, reader: jspb.BinaryReader): PullOpenCloseStatesResponse;
}

export namespace PullOpenCloseStatesResponse {
  export type AsObject = {
    changesList: Array<PullOpenCloseStatesResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasCreateTime(): boolean;
    clearCreateTime(): Change;

    getState(): OpenCloseStates | undefined;
    setState(value?: OpenCloseStates): Change;
    hasState(): boolean;
    clearState(): Change;

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
      state?: OpenCloseStates.AsObject,
    }
  }

}

export enum OpenCloseDirection { 
  UNSPECIFIED = 0,
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
  IN = 5,
  OUT = 6,
}
