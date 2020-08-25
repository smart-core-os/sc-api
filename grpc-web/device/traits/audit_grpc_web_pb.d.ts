import * as grpcWeb from 'grpc-web';

import * as device_traits_audit_pb from '../../device/traits/audit_pb';


export class AuditClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAuditRecords(
    request: device_traits_audit_pb.ListAuditRecordsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_audit_pb.ListAuditRecordsResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_audit_pb.ListAuditRecordsResponse>;

  createAuditRecord(
    request: device_traits_audit_pb.CreateAuditRecordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_audit_pb.AuditRecord) => void
  ): grpcWeb.ClientReadableStream<device_traits_audit_pb.AuditRecord>;

  pullAuditRecords(
    request: device_traits_audit_pb.PullAuditRecordsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_audit_pb.PullAuditRecordsResponse>;

}

export class AuditPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAuditRecords(
    request: device_traits_audit_pb.ListAuditRecordsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_audit_pb.ListAuditRecordsResponse>;

  createAuditRecord(
    request: device_traits_audit_pb.CreateAuditRecordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_audit_pb.AuditRecord>;

  pullAuditRecords(
    request: device_traits_audit_pb.PullAuditRecordsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_audit_pb.PullAuditRecordsResponse>;

}

