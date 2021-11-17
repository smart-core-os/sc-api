import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as types_change_pb from '../types/change_pb';
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

export class DrawNotificationSupport extends jspb.Message {
  getResourceSupport(): types_info_pb.ResourceSupport | undefined;
  setResourceSupport(value?: types_info_pb.ResourceSupport): DrawNotificationSupport;
  hasResourceSupport(): boolean;
  clearResourceSupport(): DrawNotificationSupport;

  getDrawNotificationsTotalSizeEstimated(): boolean;
  setDrawNotificationsTotalSizeEstimated(value: boolean): DrawNotificationSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawNotificationSupport.AsObject;
  static toObject(includeInstance: boolean, msg: DrawNotificationSupport): DrawNotificationSupport.AsObject;
  static serializeBinaryToWriter(message: DrawNotificationSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawNotificationSupport;
  static deserializeBinaryFromReader(message: DrawNotificationSupport, reader: jspb.BinaryReader): DrawNotificationSupport;
}

export namespace DrawNotificationSupport {
  export type AsObject = {
    resourceSupport?: types_info_pb.ResourceSupport.AsObject,
    drawNotificationsTotalSizeEstimated: boolean,
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

  getPending(): number;
  setPending(value: number): PowerCapacity;

  getLoadCase(): PowerCapacity.LoadCase;

  getCapacityCase(): PowerCapacity.CapacityCase;

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
    pending: number,
  }

  export enum LoadCase { 
    _LOAD_NOT_SET = 0,
    LOAD = 3,
  }

  export enum CapacityCase { 
    _CAPACITY_NOT_SET = 0,
    CAPACITY = 4,
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

  getNotificationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotificationTime(value?: google_protobuf_timestamp_pb.Timestamp): DrawNotification;
  hasNotificationTime(): boolean;
  clearNotificationTime(): DrawNotification;

  getForce(): boolean;
  setForce(value: boolean): DrawNotification;

  getPending(): boolean;
  setPending(value: boolean): DrawNotification;

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
    notificationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    force: boolean,
    pending: boolean,
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

export class DescribeDrawNotificationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DescribeDrawNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeDrawNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeDrawNotificationRequest): DescribeDrawNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: DescribeDrawNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeDrawNotificationRequest;
  static deserializeBinaryFromReader(message: DescribeDrawNotificationRequest, reader: jspb.BinaryReader): DescribeDrawNotificationRequest;
}

export namespace DescribeDrawNotificationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDrawNotificationsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListDrawNotificationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDrawNotificationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDrawNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDrawNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDrawNotificationsRequest): ListDrawNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDrawNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDrawNotificationsRequest;
  static deserializeBinaryFromReader(message: ListDrawNotificationsRequest, reader: jspb.BinaryReader): ListDrawNotificationsRequest;
}

export namespace ListDrawNotificationsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDrawNotificationsResponse extends jspb.Message {
  getDrawNotificationsList(): Array<DrawNotification>;
  setDrawNotificationsList(value: Array<DrawNotification>): ListDrawNotificationsResponse;
  clearDrawNotificationsList(): ListDrawNotificationsResponse;
  addDrawNotifications(value?: DrawNotification, index?: number): DrawNotification;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDrawNotificationsResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListDrawNotificationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDrawNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDrawNotificationsResponse): ListDrawNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDrawNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDrawNotificationsResponse;
  static deserializeBinaryFromReader(message: ListDrawNotificationsResponse, reader: jspb.BinaryReader): ListDrawNotificationsResponse;
}

export namespace ListDrawNotificationsResponse {
  export type AsObject = {
    drawNotificationsList: Array<DrawNotification.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class CreateDrawNotificationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateDrawNotificationRequest;

  getDrawNotification(): DrawNotification | undefined;
  setDrawNotification(value?: DrawNotification): CreateDrawNotificationRequest;
  hasDrawNotification(): boolean;
  clearDrawNotification(): CreateDrawNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDrawNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDrawNotificationRequest): CreateDrawNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDrawNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDrawNotificationRequest;
  static deserializeBinaryFromReader(message: CreateDrawNotificationRequest, reader: jspb.BinaryReader): CreateDrawNotificationRequest;
}

export namespace CreateDrawNotificationRequest {
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

  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDrawNotificationRequest;
  hasFields(): boolean;
  clearFields(): UpdateDrawNotificationRequest;

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
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDrawNotificationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteDrawNotificationRequest;

  getId(): string;
  setId(value: string): DeleteDrawNotificationRequest;

  getAllowMissing(): boolean;
  setAllowMissing(value: boolean): DeleteDrawNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDrawNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDrawNotificationRequest): DeleteDrawNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDrawNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDrawNotificationRequest;
  static deserializeBinaryFromReader(message: DeleteDrawNotificationRequest, reader: jspb.BinaryReader): DeleteDrawNotificationRequest;
}

export namespace DeleteDrawNotificationRequest {
  export type AsObject = {
    name: string,
    id: string,
    allowMissing: boolean,
  }
}

export class PullDrawNotificationsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullDrawNotificationsRequest;

  getId(): string;
  setId(value: string): PullDrawNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullDrawNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullDrawNotificationsRequest): PullDrawNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: PullDrawNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullDrawNotificationsRequest;
  static deserializeBinaryFromReader(message: PullDrawNotificationsRequest, reader: jspb.BinaryReader): PullDrawNotificationsRequest;
}

export namespace PullDrawNotificationsRequest {
  export type AsObject = {
    name: string,
    id: string,
  }
}

export class PullDrawNotificationsResponse extends jspb.Message {
  getChangesList(): Array<PullDrawNotificationsResponse.Change>;
  setChangesList(value: Array<PullDrawNotificationsResponse.Change>): PullDrawNotificationsResponse;
  clearChangesList(): PullDrawNotificationsResponse;
  addChanges(value?: PullDrawNotificationsResponse.Change, index?: number): PullDrawNotificationsResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullDrawNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullDrawNotificationsResponse): PullDrawNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: PullDrawNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullDrawNotificationsResponse;
  static deserializeBinaryFromReader(message: PullDrawNotificationsResponse, reader: jspb.BinaryReader): PullDrawNotificationsResponse;
}

export namespace PullDrawNotificationsResponse {
  export type AsObject = {
    changesList: Array<PullDrawNotificationsResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getType(): types_change_pb.ChangeType;
    setType(value: types_change_pb.ChangeType): Change;

    getNewValue(): DrawNotification | undefined;
    setNewValue(value?: DrawNotification): Change;
    hasNewValue(): boolean;
    clearNewValue(): Change;

    getOldValue(): DrawNotification | undefined;
    setOldValue(value?: DrawNotification): Change;
    hasOldValue(): boolean;
    clearOldValue(): Change;

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
      type: types_change_pb.ChangeType,
      newValue?: DrawNotification.AsObject,
      oldValue?: DrawNotification.AsObject,
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

