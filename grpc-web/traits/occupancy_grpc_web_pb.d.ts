import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
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

  createOccupancyOverride(
    request: traits_occupancy_pb.CreateOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_occupancy_pb.OccupancyOverride) => void
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.OccupancyOverride>;

  updateOccupancyOverride(
    request: traits_occupancy_pb.UpdateOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_occupancy_pb.OccupancyOverride) => void
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.OccupancyOverride>;

  deleteOccupancyOverride(
    request: traits_occupancy_pb.DeleteOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getOccupancyOverride(
    request: traits_occupancy_pb.GetOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_occupancy_pb.OccupancyOverride) => void
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.OccupancyOverride>;

  listOccupancyOverrides(
    request: traits_occupancy_pb.ListOccupancyOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_occupancy_pb.ListOccupancyOverridesResponse) => void
  ): grpcWeb.ClientReadableStream<traits_occupancy_pb.ListOccupancyOverridesResponse>;

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

  createOccupancyOverride(
    request: traits_occupancy_pb.CreateOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_occupancy_pb.OccupancyOverride>;

  updateOccupancyOverride(
    request: traits_occupancy_pb.UpdateOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_occupancy_pb.OccupancyOverride>;

  deleteOccupancyOverride(
    request: traits_occupancy_pb.DeleteOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getOccupancyOverride(
    request: traits_occupancy_pb.GetOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_occupancy_pb.OccupancyOverride>;

  listOccupancyOverrides(
    request: traits_occupancy_pb.ListOccupancyOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_occupancy_pb.ListOccupancyOverridesResponse>;

}

