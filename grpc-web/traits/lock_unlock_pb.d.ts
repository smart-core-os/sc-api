import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as types_time_period_pb from '../types/time/period_pb'; // proto import: "types/time/period.proto"


export class LockUnlock extends jspb.Message {
  getPosition(): LockUnlock.Position;
  setPosition(value: LockUnlock.Position): LockUnlock;

  getJammed(): boolean;
  setJammed(value: boolean): LockUnlock;

  getAllocations(): number;
  setAllocations(value: number): LockUnlock;

  getIsUsable(): boolean;
  setIsUsable(value: boolean): LockUnlock;
  hasIsUsable(): boolean;
  clearIsUsable(): LockUnlock;

  getLocationId(): string;
  setLocationId(value: string): LockUnlock;
  hasLocationId(): boolean;
  clearLocationId(): LockUnlock;

  getIsShared(): boolean;
  setIsShared(value: boolean): LockUnlock;
  hasIsShared(): boolean;
  clearIsShared(): LockUnlock;

  getSharedToUsersList(): Array<string>;
  setSharedToUsersList(value: Array<string>): LockUnlock;
  clearSharedToUsersList(): LockUnlock;
  addSharedToUsers(value: string, index?: number): LockUnlock;

  getIsShareable(): boolean;
  setIsShareable(value: boolean): LockUnlock;
  hasIsShareable(): boolean;
  clearIsShareable(): LockUnlock;

  getSharedBy(): string;
  setSharedBy(value: string): LockUnlock;
  hasSharedBy(): boolean;
  clearSharedBy(): LockUnlock;

  getId(): string;
  setId(value: string): LockUnlock;

  getTitle(): string;
  setTitle(value: string): LockUnlock;

  getBankId(): string;
  setBankId(value: string): LockUnlock;

  getPhysicalPin(): string;
  setPhysicalPin(value: string): LockUnlock;
  hasPhysicalPin(): boolean;
  clearPhysicalPin(): LockUnlock;

  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): LockUnlock;
  hasLastUpdated(): boolean;
  clearLastUpdated(): LockUnlock;

  getExpiresTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresTime(value?: google_protobuf_timestamp_pb.Timestamp): LockUnlock;
  hasExpiresTime(): boolean;
  clearExpiresTime(): LockUnlock;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): LockUnlock;
  hasStartTime(): boolean;
  clearStartTime(): LockUnlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockUnlock.AsObject;
  static toObject(includeInstance: boolean, msg: LockUnlock): LockUnlock.AsObject;
  static serializeBinaryToWriter(message: LockUnlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockUnlock;
  static deserializeBinaryFromReader(message: LockUnlock, reader: jspb.BinaryReader): LockUnlock;
}

export namespace LockUnlock {
  export type AsObject = {
    position: LockUnlock.Position;
    jammed: boolean;
    allocations: number;
    isUsable?: boolean;
    locationId?: string;
    isShared?: boolean;
    sharedToUsersList: Array<string>;
    isShareable?: boolean;
    sharedBy?: string;
    id: string;
    title: string;
    bankId: string;
    physicalPin?: string;
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiresTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum Position {
    POSITION_UNSPECIFIED = 0,
    LOCKED = 1,
    UNLOCKED = 2,
    LOCKING = 3,
    UNLOCKING = 4,
  }

  export enum IsUsableCase {
    _IS_USABLE_NOT_SET = 0,
    IS_USABLE = 4,
  }

  export enum LocationIdCase {
    _LOCATION_ID_NOT_SET = 0,
    LOCATION_ID = 5,
  }

  export enum IsSharedCase {
    _IS_SHARED_NOT_SET = 0,
    IS_SHARED = 6,
  }

  export enum IsShareableCase {
    _IS_SHAREABLE_NOT_SET = 0,
    IS_SHAREABLE = 8,
  }

  export enum SharedByCase {
    _SHARED_BY_NOT_SET = 0,
    SHARED_BY = 9,
  }

  export enum PhysicalPinCase {
    _PHYSICAL_PIN_NOT_SET = 0,
    PHYSICAL_PIN = 13,
  }

  export enum ExpiresTimeCase {
    _EXPIRES_TIME_NOT_SET = 0,
    EXPIRES_TIME = 15,
  }

  export enum StartTimeCase {
    _START_TIME_NOT_SET = 0,
    START_TIME = 16,
  }
}

export class LockUnlockBank extends jspb.Message {
  getId(): string;
  setId(value: string): LockUnlockBank;

  getTitle(): string;
  setTitle(value: string): LockUnlockBank;

  getLocationId(): string;
  setLocationId(value: string): LockUnlockBank;

  getLockablesList(): Array<LockUnlock>;
  setLockablesList(value: Array<LockUnlock>): LockUnlockBank;
  clearLockablesList(): LockUnlockBank;
  addLockables(value?: LockUnlock, index?: number): LockUnlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockUnlockBank.AsObject;
  static toObject(includeInstance: boolean, msg: LockUnlockBank): LockUnlockBank.AsObject;
  static serializeBinaryToWriter(message: LockUnlockBank, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockUnlockBank;
  static deserializeBinaryFromReader(message: LockUnlockBank, reader: jspb.BinaryReader): LockUnlockBank;
}

export namespace LockUnlockBank {
  export type AsObject = {
    id: string;
    title: string;
    locationId: string;
    lockablesList: Array<LockUnlock.AsObject>;
  };
}

export class GetLockUnlockRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLockUnlockRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLockUnlockRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetLockUnlockRequest;

  getId(): string;
  setId(value: string): GetLockUnlockRequest;
  hasId(): boolean;
  clearId(): GetLockUnlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLockUnlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLockUnlockRequest): GetLockUnlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetLockUnlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLockUnlockRequest;
  static deserializeBinaryFromReader(message: GetLockUnlockRequest, reader: jspb.BinaryReader): GetLockUnlockRequest;
}

export namespace GetLockUnlockRequest {
  export type AsObject = {
    name: string;
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    id?: string;
  };

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 3,
  }
}

export class UpdateLockUnlockRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateLockUnlockRequest;

  getLockUnlock(): LockUnlock | undefined;
  setLockUnlock(value?: LockUnlock): UpdateLockUnlockRequest;
  hasLockUnlock(): boolean;
  clearLockUnlock(): UpdateLockUnlockRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLockUnlockRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLockUnlockRequest;

  getId(): string;
  setId(value: string): UpdateLockUnlockRequest;
  hasId(): boolean;
  clearId(): UpdateLockUnlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLockUnlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLockUnlockRequest): UpdateLockUnlockRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLockUnlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLockUnlockRequest;
  static deserializeBinaryFromReader(message: UpdateLockUnlockRequest, reader: jspb.BinaryReader): UpdateLockUnlockRequest;
}

export namespace UpdateLockUnlockRequest {
  export type AsObject = {
    name: string;
    lockUnlock?: LockUnlock.AsObject;
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    id?: string;
  };

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 4,
  }
}

export class PullLockUnlockRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullLockUnlockRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): PullLockUnlockRequest;
  hasReadMask(): boolean;
  clearReadMask(): PullLockUnlockRequest;

  getUpdatesOnly(): boolean;
  setUpdatesOnly(value: boolean): PullLockUnlockRequest;

  getId(): string;
  setId(value: string): PullLockUnlockRequest;
  hasId(): boolean;
  clearId(): PullLockUnlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullLockUnlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullLockUnlockRequest): PullLockUnlockRequest.AsObject;
  static serializeBinaryToWriter(message: PullLockUnlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullLockUnlockRequest;
  static deserializeBinaryFromReader(message: PullLockUnlockRequest, reader: jspb.BinaryReader): PullLockUnlockRequest;
}

export namespace PullLockUnlockRequest {
  export type AsObject = {
    name: string;
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    updatesOnly: boolean;
    id?: string;
  };

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 4,
  }
}

export class PullLockUnlockResponse extends jspb.Message {
  getChangesList(): Array<PullLockUnlockResponse.Change>;
  setChangesList(value: Array<PullLockUnlockResponse.Change>): PullLockUnlockResponse;
  clearChangesList(): PullLockUnlockResponse;
  addChanges(value?: PullLockUnlockResponse.Change, index?: number): PullLockUnlockResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullLockUnlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullLockUnlockResponse): PullLockUnlockResponse.AsObject;
  static serializeBinaryToWriter(message: PullLockUnlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullLockUnlockResponse;
  static deserializeBinaryFromReader(message: PullLockUnlockResponse, reader: jspb.BinaryReader): PullLockUnlockResponse;
}

export namespace PullLockUnlockResponse {
  export type AsObject = {
    changesList: Array<PullLockUnlockResponse.Change.AsObject>;
  };

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getChangeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangeTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasChangeTime(): boolean;
    clearChangeTime(): Change;

    getLockUnlock(): LockUnlock | undefined;
    setLockUnlock(value?: LockUnlock): Change;
    hasLockUnlock(): boolean;
    clearLockUnlock(): Change;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Change.AsObject;
    static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
    static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Change;
    static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
  }

  export namespace Change {
    export type AsObject = {
      name: string;
      changeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
      lockUnlock?: LockUnlock.AsObject;
    };
  }

}

export class ListLockUnlockBanksRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListLockUnlockBanksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLockUnlockBanksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLockUnlockBanksRequest): ListLockUnlockBanksRequest.AsObject;
  static serializeBinaryToWriter(message: ListLockUnlockBanksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLockUnlockBanksRequest;
  static deserializeBinaryFromReader(message: ListLockUnlockBanksRequest, reader: jspb.BinaryReader): ListLockUnlockBanksRequest;
}

export namespace ListLockUnlockBanksRequest {
  export type AsObject = {
    name: string;
  };
}

export class ListLockUnlockBanksResponse extends jspb.Message {
  getLockUnlockBanksList(): Array<LockUnlockBank>;
  setLockUnlockBanksList(value: Array<LockUnlockBank>): ListLockUnlockBanksResponse;
  clearLockUnlockBanksList(): ListLockUnlockBanksResponse;
  addLockUnlockBanks(value?: LockUnlockBank, index?: number): LockUnlockBank;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLockUnlockBanksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLockUnlockBanksResponse): ListLockUnlockBanksResponse.AsObject;
  static serializeBinaryToWriter(message: ListLockUnlockBanksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLockUnlockBanksResponse;
  static deserializeBinaryFromReader(message: ListLockUnlockBanksResponse, reader: jspb.BinaryReader): ListLockUnlockBanksResponse;
}

export namespace ListLockUnlockBanksResponse {
  export type AsObject = {
    lockUnlockBanksList: Array<LockUnlockBank.AsObject>;
  };
}

export class ListLockUnlockHistoryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListLockUnlockHistoryRequest;

  getPeriod(): types_time_period_pb.Period | undefined;
  setPeriod(value?: types_time_period_pb.Period): ListLockUnlockHistoryRequest;
  hasPeriod(): boolean;
  clearPeriod(): ListLockUnlockHistoryRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLockUnlockHistoryRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListLockUnlockHistoryRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLockUnlockHistoryRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLockUnlockHistoryRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListLockUnlockHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLockUnlockHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLockUnlockHistoryRequest): ListLockUnlockHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: ListLockUnlockHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLockUnlockHistoryRequest;
  static deserializeBinaryFromReader(message: ListLockUnlockHistoryRequest, reader: jspb.BinaryReader): ListLockUnlockHistoryRequest;
}

export namespace ListLockUnlockHistoryRequest {
  export type AsObject = {
    name: string;
    period?: types_time_period_pb.Period.AsObject;
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    pageSize: number;
    pageToken: string;
    orderBy: string;
  };
}

export class LockUnlockRecord extends jspb.Message {
  getLockUnlock(): LockUnlock | undefined;
  setLockUnlock(value?: LockUnlock): LockUnlockRecord;
  hasLockUnlock(): boolean;
  clearLockUnlock(): LockUnlockRecord;

  getRecordTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordTime(value?: google_protobuf_timestamp_pb.Timestamp): LockUnlockRecord;
  hasRecordTime(): boolean;
  clearRecordTime(): LockUnlockRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockUnlockRecord.AsObject;
  static toObject(includeInstance: boolean, msg: LockUnlockRecord): LockUnlockRecord.AsObject;
  static serializeBinaryToWriter(message: LockUnlockRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockUnlockRecord;
  static deserializeBinaryFromReader(message: LockUnlockRecord, reader: jspb.BinaryReader): LockUnlockRecord;
}

export namespace LockUnlockRecord {
  export type AsObject = {
    lockUnlock?: LockUnlock.AsObject;
    recordTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class ListLockUnlockHistoryResponse extends jspb.Message {
  getLockUnlockRecordsList(): Array<LockUnlockRecord>;
  setLockUnlockRecordsList(value: Array<LockUnlockRecord>): ListLockUnlockHistoryResponse;
  clearLockUnlockRecordsList(): ListLockUnlockHistoryResponse;
  addLockUnlockRecords(value?: LockUnlockRecord, index?: number): LockUnlockRecord;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLockUnlockHistoryResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListLockUnlockHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLockUnlockHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLockUnlockHistoryResponse): ListLockUnlockHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: ListLockUnlockHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLockUnlockHistoryResponse;
  static deserializeBinaryFromReader(message: ListLockUnlockHistoryResponse, reader: jspb.BinaryReader): ListLockUnlockHistoryResponse;
}

export namespace ListLockUnlockHistoryResponse {
  export type AsObject = {
    lockUnlockRecordsList: Array<LockUnlockRecord.AsObject>;
    nextPageToken: string;
    totalSize: number;
  };
}

