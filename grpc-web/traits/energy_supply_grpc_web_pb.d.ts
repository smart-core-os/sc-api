import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as traits_energy_supply_pb from '../traits/energy_supply_pb';


export class PowerSupplyApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPowerCapacity(
    request: traits_energy_supply_pb.GetPowerCapacityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_supply_pb.PowerCapacity) => void
  ): grpcWeb.ClientReadableStream<traits_energy_supply_pb.PowerCapacity>;

  pullPowerCapacity(
    request: traits_energy_supply_pb.PullPowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_energy_supply_pb.PullPowerCapacityResponse>;

  addDrawNotification(
    request: traits_energy_supply_pb.AddDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_supply_pb.DrawNotification) => void
  ): grpcWeb.ClientReadableStream<traits_energy_supply_pb.DrawNotification>;

  updateDrawNotification(
    request: traits_energy_supply_pb.UpdateDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_supply_pb.DrawNotification) => void
  ): grpcWeb.ClientReadableStream<traits_energy_supply_pb.DrawNotification>;

  removeDrawNotification(
    request: traits_energy_supply_pb.RemoveDrawNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class PowerSupplyInfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describePowerCapacity(
    request: traits_energy_supply_pb.DescribePowerCapacityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_supply_pb.PowerCapacitySupport) => void
  ): grpcWeb.ClientReadableStream<traits_energy_supply_pb.PowerCapacitySupport>;

}

export class PowerSupplyApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPowerCapacity(
    request: traits_energy_supply_pb.GetPowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_supply_pb.PowerCapacity>;

  pullPowerCapacity(
    request: traits_energy_supply_pb.PullPowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_energy_supply_pb.PullPowerCapacityResponse>;

  addDrawNotification(
    request: traits_energy_supply_pb.AddDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_supply_pb.DrawNotification>;

  updateDrawNotification(
    request: traits_energy_supply_pb.UpdateDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_supply_pb.DrawNotification>;

  removeDrawNotification(
    request: traits_energy_supply_pb.RemoveDrawNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class PowerSupplyInfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describePowerCapacity(
    request: traits_energy_supply_pb.DescribePowerCapacityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_supply_pb.PowerCapacitySupport>;

}

