import * as grpcWeb from 'grpc-web';

import * as traits_flow_pb from '../traits/flow_pb'; // proto import: "traits/flow.proto"


export class FlowApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFlow(
    request: traits_flow_pb.GetFlowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_flow_pb.Flow) => void
  ): grpcWeb.ClientReadableStream<traits_flow_pb.Flow>;

  pullFlow(
    request: traits_flow_pb.PullFlowRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_flow_pb.PullFlowResponse>;

  updateFlow(
    request: traits_flow_pb.UpdateFlowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: traits_flow_pb.Flow) => void
  ): grpcWeb.ClientReadableStream<traits_flow_pb.Flow>;

}

export class FlowApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFlow(
    request: traits_flow_pb.GetFlowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_flow_pb.Flow>;

  pullFlow(
    request: traits_flow_pb.PullFlowRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_flow_pb.PullFlowResponse>;

  updateFlow(
    request: traits_flow_pb.UpdateFlowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_flow_pb.Flow>;

}

