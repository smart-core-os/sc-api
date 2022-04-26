import * as grpcWeb from 'grpc-web';

import * as traits_enter_leave_sensor_pb from '../traits/enter_leave_sensor_pb';


export class EnterLeaveSensorApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pullEnterLeaveEvents(
    request: traits_enter_leave_sensor_pb.PullEnterLeaveEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_enter_leave_sensor_pb.PullEnterLeaveEventsResponse>;

}

export class EnterLeaveSensorInfoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

}

export class EnterLeaveSensorApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pullEnterLeaveEvents(
    request: traits_enter_leave_sensor_pb.PullEnterLeaveEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_enter_leave_sensor_pb.PullEnterLeaveEventsResponse>;

}

export class EnterLeaveSensorInfoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

}

