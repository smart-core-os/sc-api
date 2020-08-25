import * as grpcWeb from 'grpc-web';

import * as device_info_info_pb from '../../device/info/info_pb';


export class InfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDevices(
    request: device_info_info_pb.ListDevicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_info_info_pb.ListDevicesResponse) => void
  ): grpcWeb.ClientReadableStream<device_info_info_pb.ListDevicesResponse>;

  pullDevices(
    request: device_info_info_pb.PullDevicesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_info_info_pb.PullDevicesResponse>;

}

export class InfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDevices(
    request: device_info_info_pb.ListDevicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_info_info_pb.ListDevicesResponse>;

  pullDevices(
    request: device_info_info_pb.PullDevicesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_info_info_pb.PullDevicesResponse>;

}

