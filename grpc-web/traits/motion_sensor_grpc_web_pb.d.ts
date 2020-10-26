import * as grpcWeb from 'grpc-web';

import * as traits_motion_sensor_pb from '../traits/motion_sensor_pb';


export class MotionSensorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMotionDetection(
    request: traits_motion_sensor_pb.GetMotionDetectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: traits_motion_sensor_pb.MotionDetection) => void
  ): grpcWeb.ClientReadableStream<traits_motion_sensor_pb.MotionDetection>;

  pullMotionDetections(
    request: traits_motion_sensor_pb.PullMotionDetectionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_motion_sensor_pb.PullMotionDetectionResponse>;

}

export class MotionSensorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMotionDetection(
    request: traits_motion_sensor_pb.GetMotionDetectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<traits_motion_sensor_pb.MotionDetection>;

  pullMotionDetections(
    request: traits_motion_sensor_pb.PullMotionDetectionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<traits_motion_sensor_pb.PullMotionDetectionResponse>;

}

