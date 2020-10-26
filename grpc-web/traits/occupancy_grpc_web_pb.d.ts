import * as grpcWeb from 'grpc-web';

import * as traits_occupancy_pb from '../traits/occupancy_pb';


export class OccupancyApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccupancy(
    request: traits_occupancy_pb.GetOccupancyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_occupancy_pb.Occupancy) => void
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.Occupancy>;

  pullOccupancy(
    request: traits_occupancy_pb.PullOccupancyRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.PullOccupancyResponse>;

}

export class OccupancyApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccupancy(
    request: traits_occupancy_pb.GetOccupancyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_occupancy_pb.Occupancy>;

  pullOccupancy(
    request: traits_occupancy_pb.PullOccupancyRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.PullOccupancyResponse>;

}

