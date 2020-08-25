import * as grpcWeb from 'grpc-web';

import * as device_traits_motion_sensor_pb from '../../device/traits/motion_sensor_pb';


export class MotionSensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMotionDetection(
    request: device_traits_motion_sensor_pb.GetMotionDetectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_motion_sensor_pb.MotionDetection) => void
  ): grpcWeb.ClientReadableStream<device_traits_motion_sensor_pb.MotionDetection>;

  pullMotionDetections(
    request: device_traits_motion_sensor_pb.PullMotionDetectionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_motion_sensor_pb.PullMotionDetectionResponse>;

}

export class MotionSensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMotionDetection(
    request: device_traits_motion_sensor_pb.GetMotionDetectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_motion_sensor_pb.MotionDetection>;

  pullMotionDetections(
    request: device_traits_motion_sensor_pb.PullMotionDetectionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_motion_sensor_pb.PullMotionDetectionResponse>;

}

