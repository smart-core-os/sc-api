import * as grpcWeb from 'grpc-web';

import * as device_traits_health_pb from '../../device/traits/health_pb';


export class HealthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHealthState(
    request: device_traits_health_pb.GetHealthStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_health_pb.HealthState) => void
  ): grpcWeb.ClientReadableStream<device_traits_health_pb.HealthState>;

  pullHealthStates(
    request: device_traits_health_pb.PullHealthStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_health_pb.PullHealthStatesResponse>;

}

export class HealthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getHealthState(
    request: device_traits_health_pb.GetHealthStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_health_pb.HealthState>;

  pullHealthStates(
    request: device_traits_health_pb.PullHealthStatesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_health_pb.PullHealthStatesResponse>;

}

