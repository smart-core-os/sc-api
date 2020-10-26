import * as grpcWeb from 'grpc-web';

import * as traits_audit_pb from '../traits/audit_pb';


export class AuditClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAuditRecords(
    request: traits_audit_pb.ListAuditRecordsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_audit_pb.ListAuditRecordsResponse) => void
  ): grpcWeb.ClientReadableStream<traits_audit_pb.ListAuditRecordsResponse>;

  createAuditRecord(
    request: traits_audit_pb.CreateAuditRecordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_audit_pb.AuditRecord) => void
  ): grpcWeb.ClientReadableStream<traits_audit_pb.AuditRecord>;

  pullAuditRecords(
    request: traits_audit_pb.PullAuditRecordsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_audit_pb.PullAuditRecordsResponse>;

}

export class AuditPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAuditRecords(
    request: traits_audit_pb.ListAuditRecordsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_audit_pb.ListAuditRecordsResponse>;

  createAuditRecord(
    request: traits_audit_pb.CreateAuditRecordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_audit_pb.AuditRecord>;

  pullAuditRecords(
    request: traits_audit_pb.PullAuditRecordsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_audit_pb.PullAuditRecordsResponse>;

}

