import * as grpcWeb from 'grpc-web';

import * as device_traits_thermostat_pb from '../../device/traits/thermostat_pb';


export class ThermostatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: device_traits_thermostat_pb.GetThermostatStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_thermostat_pb.ThermostatState) => void
  ): grpcWeb.ClientReadableStream<device_traits_thermostat_pb.ThermostatState>;

  updateState(
    request: device_traits_thermostat_pb.UpdateThermostatStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_thermostat_pb.ThermostatState) => void
  ): grpcWeb.ClientReadableStream<device_traits_thermostat_pb.ThermostatState>;

  pullState(
    request: device_traits_thermostat_pb.PullThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_thermostat_pb.PullThermostatStateResponse>;

}

export class ThermostatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getState(
    request: device_traits_thermostat_pb.GetThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_thermostat_pb.ThermostatState>;

  updateState(
    request: device_traits_thermostat_pb.UpdateThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_thermostat_pb.ThermostatState>;

  pullState(
    request: device_traits_thermostat_pb.PullThermostatStateRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_thermostat_pb.PullThermostatStateResponse>;

}

