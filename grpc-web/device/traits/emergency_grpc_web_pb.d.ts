import * as grpcWeb from 'grpc-web';

import * as device_traits_emergency_pb from '../../device/traits/emergency_pb';


export class EmergencyApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEmergency(
    request: device_traits_emergency_pb.GetEmergencyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_emergency_pb.Emergency) => void
  ): grpcWeb.ClientReadableStream<device_traits_emergency_pb.Emergency>;

  updateEmergency(
    request: device_traits_emergency_pb.UpdateEmergencyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_emergency_pb.Emergency) => void
  ): grpcWeb.ClientReadableStream<device_traits_emergency_pb.Emergency>;

  pullEmergency(
    request: device_traits_emergency_pb.PullEmergencyRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_emergency_pb.PullEmergencyResponse>;

}

export class EmergencyApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEmergency(
    request: device_traits_emergency_pb.GetEmergencyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_emergency_pb.Emergency>;

  updateEmergency(
    request: device_traits_emergency_pb.UpdateEmergencyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_emergency_pb.Emergency>;

  pullEmergency(
    request: device_traits_emergency_pb.PullEmergencyRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_emergency_pb.PullEmergencyResponse>;

}

