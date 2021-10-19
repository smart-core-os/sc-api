import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as traits_power_supply_pb from '../traits/power_supply_pb';


export class PowerSupplyApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPowerCapacity(
    request: traits_power_supply_pb.GetPowerCapacityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_power_supply_pb.PowerCapacity) => void
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.PowerCapacity>;

  pullPowerCapacity(
    request: traits_power_supply_pb.PullPowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.PullPowerCapacityResponse>;

  listDrawNotifications(
    request: traits_power_supply_pb.ListDrawNotificationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_power_supply_pb.ListDrawNotificationsResponse) => void
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.ListDrawNotificationsResponse>;

  createDrawNotification(
    request: traits_power_supply_pb.CreateDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_power_supply_pb.DrawNotification) => void
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.DrawNotification>;

  updateDrawNotification(
    request: traits_power_supply_pb.UpdateDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_power_supply_pb.DrawNotification) => void
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.DrawNotification>;

  deleteDrawNotification(
    request: traits_power_supply_pb.DeleteDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  pullDrawNotifications(
    request: traits_power_supply_pb.PullDrawNotificationsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.PullDrawNotificationsResponse>;

}

export class PowerSupplyInfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describePowerCapacity(
    request: traits_power_supply_pb.DescribePowerCapacityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_power_supply_pb.PowerCapacitySupport) => void
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.PowerCapacitySupport>;

  describeDrawNotification(
    request: traits_power_supply_pb.DescribeDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_power_supply_pb.DrawNotificationSupport) => void
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.DrawNotificationSupport>;

}

export class PowerSupplyApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPowerCapacity(
    request: traits_power_supply_pb.GetPowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_power_supply_pb.PowerCapacity>;

  pullPowerCapacity(
    request: traits_power_supply_pb.PullPowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.PullPowerCapacityResponse>;

  listDrawNotifications(
    request: traits_power_supply_pb.ListDrawNotificationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_power_supply_pb.ListDrawNotificationsResponse>;

  createDrawNotification(
    request: traits_power_supply_pb.CreateDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_power_supply_pb.DrawNotification>;

  updateDrawNotification(
    request: traits_power_supply_pb.UpdateDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_power_supply_pb.DrawNotification>;

  deleteDrawNotification(
    request: traits_power_supply_pb.DeleteDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  pullDrawNotifications(
    request: traits_power_supply_pb.PullDrawNotificationsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_power_supply_pb.PullDrawNotificationsResponse>;

}

export class PowerSupplyInfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describePowerCapacity(
    request: traits_power_supply_pb.DescribePowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_power_supply_pb.PowerCapacitySupport>;

  describeDrawNotification(
    request: traits_power_supply_pb.DescribeDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_power_supply_pb.DrawNotificationSupport>;

}

