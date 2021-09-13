import * as grpcWeb from 'grpc-web';

import * as traits_energy_storage_pb from '../traits/energy_storage_pb';


export class EnergyStorageApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEnergyLevel(
    request: traits_energy_storage_pb.GetEnergyLevelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_storage_pb.EnergyLevel) => void
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.EnergyLevel>;

  pullEnergyLevel(
    request: traits_energy_storage_pb.PullEnergyLevelRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.PullEnergyLevelResponse>;

  getChargingStatus(
    request: traits_energy_storage_pb.GetChargingStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_storage_pb.ChargingStatus) => void
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.ChargingStatus>;

  updateChargingStatus(
    request: traits_energy_storage_pb.UpdateChargingStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_storage_pb.ChargingStatus) => void
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.ChargingStatus>;

  pullChargingStatus(
    request: traits_energy_storage_pb.PullChargingStatusRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.PullChargingStatusResponse>;

}

export class EnergyStorageInfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describeEnergyLevel(
    request: traits_energy_storage_pb.DescribeEnergyLevelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_storage_pb.EnergyLevelSupport) => void
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.EnergyLevelSupport>;

  describeChargingStatus(
    request: traits_energy_storage_pb.DescribeChargingStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_energy_storage_pb.ChargingStatusSupport) => void
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.ChargingStatusSupport>;

}

export class EnergyStorageApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEnergyLevel(
    request: traits_energy_storage_pb.GetEnergyLevelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_storage_pb.EnergyLevel>;

  pullEnergyLevel(
    request: traits_energy_storage_pb.PullEnergyLevelRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.PullEnergyLevelResponse>;

  getChargingStatus(
    request: traits_energy_storage_pb.GetChargingStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_storage_pb.ChargingStatus>;

  updateChargingStatus(
    request: traits_energy_storage_pb.UpdateChargingStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_storage_pb.ChargingStatus>;

  pullChargingStatus(
    request: traits_energy_storage_pb.PullChargingStatusRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_energy_storage_pb.PullChargingStatusResponse>;

}

export class EnergyStorageInfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  describeEnergyLevel(
    request: traits_energy_storage_pb.DescribeEnergyLevelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_storage_pb.EnergyLevelSupport>;

  describeChargingStatus(
    request: traits_energy_storage_pb.DescribeChargingStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_energy_storage_pb.ChargingStatusSupport>;

}

