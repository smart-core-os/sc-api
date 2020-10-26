import * as grpcWeb from 'grpc-web';

import * as traits_health_pb from '../traits/health_pb';


export class HealthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHealthState(
    request: traits_health_pb.GetHealthStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_health_pb.HealthState) => void
  ): grpcWeb.ClientReadableStream<traits_health_pb.HealthState>;

  pullHealthStates(
    request: traits_health_pb.PullHealthStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_health_pb.PullHealthStatesResponse>;

}

export class HealthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHealthState(
    request: traits_health_pb.GetHealthStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_health_pb.HealthState>;

  pullHealthStates(
    request: traits_health_pb.PullHealthStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_health_pb.PullHealthStatesResponse>;

}

