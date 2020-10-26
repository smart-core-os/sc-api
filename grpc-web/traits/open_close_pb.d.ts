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

export class OpenClosePositions extends jspb.Message {
  getStatesList(): Array<OpenClosePosition>;
  setStatesList(value: Array<OpenClosePosition>): OpenClosePositions;
  clearStatesList(): OpenClosePositions;
  addStates(value?: OpenClosePosition, index?: number): OpenClosePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenClosePositions.AsObject;
  static toObject(includeInstance: boolean, msg: OpenClosePositions): OpenClosePositions.AsObject;
  static serializeBinaryToWriter(message: OpenClosePositions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenClosePositions;
  static deserializeBinaryFromReader(message: OpenClosePositions, reader: jspb.BinaryReader): OpenClosePositions;
}

export namespace OpenClosePositions {
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

export class GetOpenClosePositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOpenClosePositionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenClosePositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenClosePositionsRequest): GetOpenClosePositionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetOpenClosePositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenClosePositionsRequest;
  static deserializeBinaryFromReader(message: GetOpenClosePositionsRequest, reader: jspb.BinaryReader): GetOpenClosePositionsRequest;
}

export namespace GetOpenClosePositionsRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateOpenClosePositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateOpenClosePositionsRequest;

  getStates(): OpenClosePositions | undefined;
  setStates(value?: OpenClosePositions): UpdateOpenClosePositionsRequest;
  hasStates(): boolean;
  clearStates(): UpdateOpenClosePositionsRequest;

  getDelta(): boolean;
  setDelta(value: boolean): UpdateOpenClosePositionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOpenClosePositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOpenClosePositionsRequest): UpdateOpenClosePositionsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOpenClosePositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOpenClosePositionsRequest;
  static deserializeBinaryFromReader(message: UpdateOpenClosePositionsRequest, reader: jspb.BinaryReader): UpdateOpenClosePositionsRequest;
}

export namespace UpdateOpenClosePositionsRequest {
  export type AsObject = {
    name: string,
    states?: OpenClosePositions.AsObject,
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

export class PullOpenClosePositionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullOpenClosePositionsRequest;

  getExcludeTweening(): boolean;
  setExcludeTweening(value: boolean): PullOpenClosePositionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOpenClosePositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullOpenClosePositionsRequest): PullOpenClosePositionsRequest.AsObject;
  static serializeBinaryToWriter(message: PullOpenClosePositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOpenClosePositionsRequest;
  static deserializeBinaryFromReader(message: PullOpenClosePositionsRequest, reader: jspb.BinaryReader): PullOpenClosePositionsRequest;
}

export namespace PullOpenClosePositionsRequest {
  export type AsObject = {
    name: string,
    excludeTweening: boolean,
  }
}

export class PullOpenClosePositionsResponse extends jspb.Message {
  getChangesList(): Array<PullOpenClosePositionsResponse.Change>;
  setChangesList(value: Array<PullOpenClosePositionsResponse.Change>): PullOpenClosePositionsResponse;
  clearChangesList(): PullOpenClosePositionsResponse;
  addChanges(value?: PullOpenClosePositionsResponse.Change, index?: number): PullOpenClosePositionsResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullOpenClosePositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullOpenClosePositionsResponse): PullOpenClosePositionsResponse.AsObject;
  static serializeBinaryToWriter(message: PullOpenClosePositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullOpenClosePositionsResponse;
  static deserializeBinaryFromReader(message: PullOpenClosePositionsResponse, reader: jspb.BinaryReader): PullOpenClosePositionsResponse;
}

export namespace PullOpenClosePositionsResponse {
  export type AsObject = {
    changesList: Array<PullOpenClosePositionsResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getState(): OpenClosePositions | undefined;
    setState(value?: OpenClosePositions): Change;
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
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      state?: OpenClosePositions.AsObject,
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
