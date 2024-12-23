import * as grpcWeb from 'grpc-web';

import * as traits_status_pb from '../traits/status_pb'; // proto import: "traits/status.proto"


export class StatusApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCurrentStatus(
    request: traits_status_pb.GetCurrentStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_status_pb.StatusLog) => void
  ): grpcWeb.ClientReadableStream<traits_status_pb.StatusLog>;

  pullCurrentStatus(
    request: traits_status_pb.PullCurrentStatusRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_status_pb.PullCurrentStatusResponse>;

}

export class StatusHistoryClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listCurrentStatusHistory(
    request: traits_status_pb.ListCurrentStatusHistoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_status_pb.ListCurrentStatusHistoryResponse) => void
  ): grpcWeb.ClientReadableStream<traits_status_pb.ListCurrentStatusHistoryResponse>;

}

export class StatusApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCurrentStatus(
    request: traits_status_pb.GetCurrentStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_status_pb.StatusLog>;

  pullCurrentStatus(
    request: traits_status_pb.PullCurrentStatusRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_status_pb.PullCurrentStatusResponse>;

}

export class StatusHistoryPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listCurrentStatusHistory(
    request: traits_status_pb.ListCurrentStatusHistoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_status_pb.ListCurrentStatusHistoryResponse>;

}

