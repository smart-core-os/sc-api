import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_info_pb from '../types/info_pb';
import * as types_number_pb from '../types/number_pb';


export class PowerCapacitySupport extends jspb.Message {
  getResourceSupport(): types_info_pb.ResourceSupport | undefined;
  setResourceSupport(value?: types_info_pb.ResourceSupport): PowerCapacitySupport;
  hasResourceSupport(): boolean;
  clearResourceSupport(): PowerCapacitySupport;

  getAvailableAttributes(): types_number_pb.FloatAttributes | undefined;
  setAvailableAttributes(value?: types_number_pb.FloatAttributes): PowerCapacitySupport;
  hasAvailableAttributes(): boolean;
  clearAvailableAttributes(): PowerCapacitySupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerCapacitySupport.AsObject;
  static toObject(includeInstance: boolean, msg: PowerCapacitySupport): PowerCapacitySupport.AsObject;
  static serializeBinaryToWriter(message: PowerCapacitySupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerCapacitySupport;
  static deserializeBinaryFromReader(message: PowerCapacitySupport, reader: jspb.BinaryReader): PowerCapacitySupport;
}

export namespace PowerCapacitySupport {
  export type AsObject = {
    resourceSupport?: types_info_pb.ResourceSupport.AsObject,
    availableAttributes?: types_number_pb.FloatAttributes.AsObject,
  }
}

export class PowerCapacity extends jspb.Message {
  getRating(): number;
  setRating(value: number): PowerCapacity;

  getVoltage(): number;
  setVoltage(value: number): PowerCapacity;

  getLoad(): number;
  setLoad(value: number): PowerCapacity;

  getCapacity(): number;
  setCapacity(value: number): PowerCapacity;

  getFree(): number;
  setFree(value: number): PowerCapacity;

  getNotified(): number;
  setNotified(value: number): PowerCapacity;

  getLoadCase(): PowerCapacity.LoadCase;

  getCapacityCase(): PowerCapacity.CapacityCase;

  getFreeCase(): PowerCapacity.FreeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerCapacity.AsObject;
  static toObject(includeInstance: boolean, msg: PowerCapacity): PowerCapacity.AsObject;
  static serializeBinaryToWriter(message: PowerCapacity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerCapacity;
  static deserializeBinaryFromReader(message: PowerCapacity, reader: jspb.BinaryReader): PowerCapacity;
}

export namespace PowerCapacity {
  export type AsObject = {
    rating: number,
    voltage: number,
    load: number,
    capacity: number,
    free: number,
    notified: number,
  }

  export enum LoadCase { 
    _LOAD_NOT_SET = 0,
    LOAD = 3,
  }

  export enum CapacityCase { 
    _CAPACITY_NOT_SET = 0,
    CAPACITY = 4,
  }

  export enum FreeCase { 
    _FREE_NOT_SET = 0,
    FREE = 5,
  }
}

export class DrawNotification extends jspb.Message {
  getId(): string;
  setId(value: string): DrawNotification;

  getMaxDraw(): number;
  setMaxDraw(value: number): DrawNotification;

  getRampDuration(): google_protobuf_duration_pb.Duration | undefined;
  setRampDuration(value?: google_protobuf_duration_pb.Duration): DrawNotification;
  hasRampDuration(): boolean;
  clearRampDuration(): DrawNotification;

  getMinDraw(): number;
  setMinDraw(value: number): DrawNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawNotification.AsObject;
  static toObject(includeInstance: boolean, msg: DrawNotification): DrawNotification.AsObject;
  static serializeBinaryToWriter(message: DrawNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawNotification;
  static deserializeBinaryFromReader(message: DrawNotification, reader: jspb.BinaryReader): DrawNotification;
}

export namespace DrawNotification {
  export type AsObject = {
    id: string,
    maxDraw: number,
    rampDuration?: google_protobuf_duration_pb.Duration.AsObject,
    minDraw: number,
  }
}

export class GetPowerCapacityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetPowerCapacityRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): GetPowerCapacityRequest;
  hasFields(): boolean;
  clearFields(): GetPowerCapacityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPowerCapacityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPowerCapacityRequest): GetPowerCapacityRequest.AsObject;
  static serializeBinaryToWriter(message: GetPowerCapacityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPowerCapacityRequest;
  static deserializeBinaryFromReader(message: GetPowerCapacityRequest, reader: jspb.BinaryReader): GetPowerCapacityRequest;
}

export namespace GetPowerCapacityRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullPowerCapacityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullPowerCapacityRequest;

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): PullPowerCapacityRequest;
  hasFields(): boolean;
  clearFields(): PullPowerCapacityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPowerCapacityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullPowerCapacityRequest): PullPowerCapacityRequest.AsObject;
  static serializeBinaryToWriter(message: PullPowerCapacityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPowerCapacityRequest;
  static deserializeBinaryFromReader(message: PullPowerCapacityRequest, reader: jspb.BinaryReader): PullPowerCapacityRequest;
}

export namespace PullPowerCapacityRequest {
  export type AsObject = {
    name: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PullPowerCapacityResponse extends jspb.Message {
  getChangesList(): Array<PullPowerCapacityResponse.Change>;
  setChangesList(value: Array<PullPowerCapacityResponse.Change>): PullPowerCapacityResponse;
  clearChangesList(): PullPowerCapacityResponse;
  addChanges(value?: PullPowerCapacityResponse.Change, index?: number): PullPowerCapacityResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullPowerCapacityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullPowerCapacityResponse): PullPowerCapacityResponse.AsObject;
  static serializeBinaryToWriter(message: PullPowerCapacityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullPowerCapacityResponse;
  static deserializeBinaryFromReader(message: PullPowerCapacityResponse, reader: jspb.BinaryReader): PullPowerCapacityResponse;
}

export namespace PullPowerCapacityResponse {
  export type AsObject = {
    changesList: Array<PullPowerCapacityResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getAvailableCapacity(): PowerCapacity | undefined;
    setAvailableCapacity(value?: PowerCapacity): Change;
    hasAvailableCapacity(): boolean;
    clearAvailableCapacity(): Change;

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
      availableCapacity?: PowerCapacity.AsObject,
    }
  }

}

export class DescribePowerCapacityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DescribePowerCapacityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribePowerCapacityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribePowerCapacityRequest): DescribePowerCapacityRequest.AsObject;
  static serializeBinaryToWriter(message: DescribePowerCapacityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribePowerCapacityRequest;
  static deserializeBinaryFromReader(message: DescribePowerCapacityRequest, reader: jspb.BinaryReader): DescribePowerCapacityRequest;
}

export namespace DescribePowerCapacityRequest {
  export type AsObject = {
    name: string,
  }
}

export class AddDrawNotificationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddDrawNotificationRequest;

  getDrawNotification(): DrawNotification | undefined;
  setDrawNotification(value?: DrawNotification): AddDrawNotificationRequest;
  hasDrawNotification(): boolean;
  clearDrawNotification(): AddDrawNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDrawNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDrawNotificationRequest): AddDrawNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: AddDrawNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDrawNotificationRequest;
  static deserializeBinaryFromReader(message: AddDrawNotificationRequest, reader: jspb.BinaryReader): AddDrawNotificationRequest;
}

export namespace AddDrawNotificationRequest {
  export type AsObject = {
    name: string,
    drawNotification?: DrawNotification.AsObject,
  }
}

export class UpdateDrawNotificationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateDrawNotificationRequest;

  getDrawNotification(): DrawNotification | undefined;
  setDrawNotification(value?: DrawNotification): UpdateDrawNotificationRequest;
  hasDrawNotification(): boolean;
  clearDrawNotification(): UpdateDrawNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDrawNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDrawNotificationRequest): UpdateDrawNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDrawNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDrawNotificationRequest;
  static deserializeBinaryFromReader(message: UpdateDrawNotificationRequest, reader: jspb.BinaryReader): UpdateDrawNotificationRequest;
}

export namespace UpdateDrawNotificationRequest {
  export type AsObject = {
    name: string,
    drawNotification?: DrawNotification.AsObject,
  }
}

export class RemoveDrawNotificationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RemoveDrawNotificationRequest;

  getId(): string;
  setId(value: string): RemoveDrawNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDrawNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDrawNotificationRequest): RemoveDrawNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveDrawNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDrawNotificationRequest;
  static deserializeBinaryFromReader(message: RemoveDrawNotificationRequest, reader: jspb.BinaryReader): RemoveDrawNotificationRequest;
}

export namespace RemoveDrawNotificationRequest {
  export type AsObject = {
    name: string,
    id: string,
  }
}

