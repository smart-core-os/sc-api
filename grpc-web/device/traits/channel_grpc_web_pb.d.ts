import * as grpcWeb from 'grpc-web';

import * as device_traits_channel_pb from '../../device/traits/channel_pb';


export class ChannelApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getChosenChannel(
    request: device_traits_channel_pb.GetChosenChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_channel_pb.Channel) => void
  ): grpcWeb.ClientReadableStream<device_traits_channel_pb.Channel>;

  chooseChannel(
    request: device_traits_channel_pb.ChooseChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_channel_pb.Channel) => void
  ): grpcWeb.ClientReadableStream<device_traits_channel_pb.Channel>;

  adjustChannel(
    request: device_traits_channel_pb.AdjustChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_channel_pb.Channel) => void
  ): grpcWeb.ClientReadableStream<device_traits_channel_pb.Channel>;

  returnChannel(
    request: device_traits_channel_pb.ReturnChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_channel_pb.Channel) => void
  ): grpcWeb.ClientReadableStream<device_traits_channel_pb.Channel>;

  pullChosenChannel(
    request: device_traits_channel_pb.PullChosenChannelRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_channel_pb.PullChosenChannelResponse>;

}

export class ChannelApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getChosenChannel(
    request: device_traits_channel_pb.GetChosenChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_channel_pb.Channel>;

  chooseChannel(
    request: device_traits_channel_pb.ChooseChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_channel_pb.Channel>;

  adjustChannel(
    request: device_traits_channel_pb.AdjustChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_channel_pb.Channel>;

  returnChannel(
    request: device_traits_channel_pb.ReturnChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_channel_pb.Channel>;

  pullChosenChannel(
    request: device_traits_channel_pb.PullChosenChannelRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_channel_pb.PullChosenChannelResponse>;

}

