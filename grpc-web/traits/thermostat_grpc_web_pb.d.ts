import * as grpcWeb from 'grpc-web';

import * as traits_thermostat_pb from '../traits/thermostat_pb';


export class ThermostatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_thermostat_pb.GetThermostatStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_thermostat_pb.ThermostatState) => void
  ): grpcWeb.ClientReadableStream<traits_thermostat_pb.ThermostatState>;

  updateState(
    request: traits_thermostat_pb.UpdateThermostatStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_thermostat_pb.ThermostatState) => void
  ): grpcWeb.ClientReadableStream<traits_thermostat_pb.ThermostatState>;

  pullState(
    request: traits_thermostat_pb.PullThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_thermostat_pb.PullThermostatStateResponse>;

}

export class ThermostatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: traits_thermostat_pb.GetThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_thermostat_pb.ThermostatState>;

  updateState(
    request: traits_thermostat_pb.UpdateThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_thermostat_pb.ThermostatState>;

  pullState(
    request: traits_thermostat_pb.PullThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_thermostat_pb.PullThermostatStateResponse>;

}

