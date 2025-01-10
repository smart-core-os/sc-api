import * as grpcWeb from 'grpc-web';

import * as traits_security_event_pb from '../traits/security_event_pb'; // proto import: "traits/security_event.proto"


export class SecurityEventApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSecurityEvents(
    request: traits_security_event_pb.ListSecurityEventsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_security_event_pb.ListSecurityEventsResponse) => void
  ): grpcWeb.ClientReadableStream<traits_security_event_pb.ListSecurityEventsResponse>;

  pullSecurityEvents(
    request: traits_security_event_pb.PullSecurityEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_security_event_pb.PullSecurityEventsResponse>;

}

export class SecurityEventApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSecurityEvents(
    request: traits_security_event_pb.ListSecurityEventsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_security_event_pb.ListSecurityEventsResponse>;

  pullSecurityEvents(
    request: traits_security_event_pb.PullSecurityEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_security_event_pb.PullSecurityEventsResponse>;

}

