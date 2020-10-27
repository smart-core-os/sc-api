import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as device_traits_occupancy_pb from '../../device/traits/occupancy_pb';


export class OccupancyApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccupancy(
    request: device_traits_occupancy_pb.GetOccupancyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_occupancy_pb.Occupancy) => void
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.Occupancy>;

  pullOccupancy(
    request: device_traits_occupancy_pb.PullOccupancyRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.PullOccupancyResponse>;

  createOccupancyOverride(
    request: device_traits_occupancy_pb.CreateOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_occupancy_pb.OccupancyOverride) => void
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.OccupancyOverride>;

  updateOccupancyOverride(
    request: device_traits_occupancy_pb.UpdateOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_occupancy_pb.OccupancyOverride) => void
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.OccupancyOverride>;

  deleteOccupancyOverride(
    request: device_traits_occupancy_pb.DeleteOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getOccupancyOverride(
    request: device_traits_occupancy_pb.GetOccupancyOverrideRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_occupancy_pb.OccupancyOverride) => void
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.OccupancyOverride>;

  listOccupancyOverrides(
    request: device_traits_occupancy_pb.ListOccupancyOverridesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_occupancy_pb.ListOccupancyOverridesResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.ListOccupancyOverridesResponse>;

}

export class OccupancyApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccupancy(
    request: device_traits_occupancy_pb.GetOccupancyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_occupancy_pb.Occupancy>;

  pullOccupancy(
    request: device_traits_occupancy_pb.PullOccupancyRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_occupancy_pb.PullOccupancyResponse>;

  createOccupancyOverride(
    request: device_traits_occupancy_pb.CreateOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_occupancy_pb.OccupancyOverride>;

  updateOccupancyOverride(
    request: device_traits_occupancy_pb.UpdateOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_occupancy_pb.OccupancyOverride>;

  deleteOccupancyOverride(
    request: device_traits_occupancy_pb.DeleteOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getOccupancyOverride(
    request: device_traits_occupancy_pb.GetOccupancyOverrideRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_occupancy_pb.OccupancyOverride>;

  listOccupancyOverrides(
    request: device_traits_occupancy_pb.ListOccupancyOverridesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_occupancy_pb.ListOccupancyOverridesResponse>;

}

