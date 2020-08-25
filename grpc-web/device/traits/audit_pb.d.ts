import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class AuditAttributes extends jspb.Message {
  getRetention(): AuditRetention | undefined;
  setRetention(value?: AuditRetention): AuditAttributes;
  hasRetention(): boolean;
  clearRetention(): AuditAttributes;

  getPrioritiesList(): Array<Priority>;
  setPrioritiesList(value: Array<Priority>): AuditAttributes;
  clearPrioritiesList(): AuditAttributes;
  addPriorities(value?: Priority, index?: number): Priority;

  getSeveritiesList(): Array<Severity>;
  setSeveritiesList(value: Array<Severity>): AuditAttributes;
  clearSeveritiesList(): AuditAttributes;
  addSeverities(value?: Severity, index?: number): Severity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: AuditAttributes): AuditAttributes.AsObject;
  static serializeBinaryToWriter(message: AuditAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditAttributes;
  static deserializeBinaryFromReader(message: AuditAttributes, reader: jspb.BinaryReader): AuditAttributes;
}

export namespace AuditAttributes {
  export type AsObject = {
    retention?: AuditRetention.AsObject,
    prioritiesList: Array<Priority.AsObject>,
    severitiesList: Array<Severity.AsObject>,
  }
}

export class AuditRetention extends jspb.Message {
  getMaxRecords(): number;
  setMaxRecords(value: number): AuditRetention;

  getMaxAge(): google_protobuf_duration_pb.Duration | undefined;
  setMaxAge(value?: google_protobuf_duration_pb.Duration): AuditRetention;
  hasMaxAge(): boolean;
  clearMaxAge(): AuditRetention;

  getPersistent(): boolean;
  setPersistent(value: boolean): AuditRetention;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRetention.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRetention): AuditRetention.AsObject;
  static serializeBinaryToWriter(message: AuditRetention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRetention;
  static deserializeBinaryFromReader(message: AuditRetention, reader: jspb.BinaryReader): AuditRetention;
}

export namespace AuditRetention {
  export type AsObject = {
    maxRecords: number,
    maxAge?: google_protobuf_duration_pb.Duration.AsObject,
    persistent: boolean,
  }
}

export class AuditRecord extends jspb.Message {
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): AuditRecord;
  hasEventTime(): boolean;
  clearEventTime(): AuditRecord;

  getTitle(): string;
  setTitle(value: string): AuditRecord;

  getDescription(): string;
  setDescription(value: string): AuditRecord;

  getPriorityLevel(): number;
  setPriorityLevel(value: number): AuditRecord;

  getSeverityLevel(): number;
  setSeverityLevel(value: number): AuditRecord;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): AuditRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRecord.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRecord): AuditRecord.AsObject;
  static serializeBinaryToWriter(message: AuditRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRecord;
  static deserializeBinaryFromReader(message: AuditRecord, reader: jspb.BinaryReader): AuditRecord;
}

export namespace AuditRecord {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    description: string,
    priorityLevel: number,
    severityLevel: number,
    labelsMap: Array<[string, string]>,
  }
}

export class Category extends jspb.Message {
  getName(): string;
  setName(value: string): Category;

  getTitle(): string;
  setTitle(value: string): Category;

  getDescription(): string;
  setDescription(value: string): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
  }
}

export class Priority extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): Priority;

  getTitle(): string;
  setTitle(value: string): Priority;

  getDescription(): string;
  setDescription(value: string): Priority;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Priority.AsObject;
  static toObject(includeInstance: boolean, msg: Priority): Priority.AsObject;
  static serializeBinaryToWriter(message: Priority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Priority;
  static deserializeBinaryFromReader(message: Priority, reader: jspb.BinaryReader): Priority;
}

export namespace Priority {
  export type AsObject = {
    level: number,
    title: string,
    description: string,
  }
}

export class Severity extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): Severity;

  getTitle(): string;
  setTitle(value: string): Severity;

  getDescription(): string;
  setDescription(value: string): Severity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Severity.AsObject;
  static toObject(includeInstance: boolean, msg: Severity): Severity.AsObject;
  static serializeBinaryToWriter(message: Severity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Severity;
  static deserializeBinaryFromReader(message: Severity, reader: jspb.BinaryReader): Severity;
}

export namespace Severity {
  export type AsObject = {
    level: number,
    title: string,
    description: string,
  }
}

export class ListAuditRecordsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListAuditRecordsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAuditRecordsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAuditRecordsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuditRecordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuditRecordsRequest): ListAuditRecordsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAuditRecordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuditRecordsRequest;
  static deserializeBinaryFromReader(message: ListAuditRecordsRequest, reader: jspb.BinaryReader): ListAuditRecordsRequest;
}

export namespace ListAuditRecordsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAuditRecordsResponse extends jspb.Message {
  getAuditRecordsList(): Array<AuditRecord>;
  setAuditRecordsList(value: Array<AuditRecord>): ListAuditRecordsResponse;
  clearAuditRecordsList(): ListAuditRecordsResponse;
  addAuditRecords(value?: AuditRecord, index?: number): AuditRecord;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAuditRecordsResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListAuditRecordsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuditRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuditRecordsResponse): ListAuditRecordsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAuditRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuditRecordsResponse;
  static deserializeBinaryFromReader(message: ListAuditRecordsResponse, reader: jspb.BinaryReader): ListAuditRecordsResponse;
}

export namespace ListAuditRecordsResponse {
  export type AsObject = {
    auditRecordsList: Array<AuditRecord.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class CreateAuditRecordRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateAuditRecordRequest;

  getAuditRecord(): AuditRecord | undefined;
  setAuditRecord(value?: AuditRecord): CreateAuditRecordRequest;
  hasAuditRecord(): boolean;
  clearAuditRecord(): CreateAuditRecordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuditRecordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuditRecordRequest): CreateAuditRecordRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAuditRecordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuditRecordRequest;
  static deserializeBinaryFromReader(message: CreateAuditRecordRequest, reader: jspb.BinaryReader): CreateAuditRecordRequest;
}

export namespace CreateAuditRecordRequest {
  export type AsObject = {
    name: string,
    auditRecord?: AuditRecord.AsObject,
  }
}

export class PullAuditRecordsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullAuditRecordsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAuditRecordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullAuditRecordsRequest): PullAuditRecordsRequest.AsObject;
  static serializeBinaryToWriter(message: PullAuditRecordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAuditRecordsRequest;
  static deserializeBinaryFromReader(message: PullAuditRecordsRequest, reader: jspb.BinaryReader): PullAuditRecordsRequest;
}

export namespace PullAuditRecordsRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullAuditRecordsResponse extends jspb.Message {
  getChangesList(): Array<AuditRecordChange>;
  setChangesList(value: Array<AuditRecordChange>): PullAuditRecordsResponse;
  clearChangesList(): PullAuditRecordsResponse;
  addChanges(value?: AuditRecordChange, index?: number): AuditRecordChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullAuditRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullAuditRecordsResponse): PullAuditRecordsResponse.AsObject;
  static serializeBinaryToWriter(message: PullAuditRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullAuditRecordsResponse;
  static deserializeBinaryFromReader(message: PullAuditRecordsResponse, reader: jspb.BinaryReader): PullAuditRecordsResponse;
}

export namespace PullAuditRecordsResponse {
  export type AsObject = {
    changesList: Array<AuditRecordChange.AsObject>,
  }
}

export class AuditRecordChange extends jspb.Message {
  getName(): string;
  setName(value: string): AuditRecordChange;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): AuditRecordChange;
  hasCreateTime(): boolean;
  clearCreateTime(): AuditRecordChange;

  getHumidity(): AuditRecord | undefined;
  setHumidity(value?: AuditRecord): AuditRecordChange;
  hasHumidity(): boolean;
  clearHumidity(): AuditRecordChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRecordChange.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRecordChange): AuditRecordChange.AsObject;
  static serializeBinaryToWriter(message: AuditRecordChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRecordChange;
  static deserializeBinaryFromReader(message: AuditRecordChange, reader: jspb.BinaryReader): AuditRecordChange;
}

export namespace AuditRecordChange {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    humidity?: AuditRecord.AsObject,
  }
}

