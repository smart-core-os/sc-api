/**
 * @fileoverview gRPC-Web generated client stub for smartcore.api.device.traits
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./motion_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.MotionSensorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.MotionSensorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.GetMotionDetectionRequest,
 *   !proto.smartcore.api.device.traits.MotionDetection>}
 */
const methodDescriptor_MotionSensor_GetMotionDetection = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.MotionSensor/GetMotionDetection',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetMotionDetectionRequest,
  proto.smartcore.api.device.traits.MotionDetection,
  /**
   * @param {!proto.smartcore.api.device.traits.GetMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.MotionDetection.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetMotionDetectionRequest,
 *   !proto.smartcore.api.device.traits.MotionDetection>}
 */
const methodInfo_MotionSensor_GetMotionDetection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.MotionDetection,
  /**
   * @param {!proto.smartcore.api.device.traits.GetMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.MotionDetection.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetMotionDetectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.MotionDetection)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.MotionDetection>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MotionSensorClient.prototype.getMotionDetection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.MotionSensor/GetMotionDetection',
      request,
      metadata || {},
      methodDescriptor_MotionSensor_GetMotionDetection,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetMotionDetectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.MotionDetection>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.MotionSensorPromiseClient.prototype.getMotionDetection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.MotionSensor/GetMotionDetection',
      request,
      metadata || {},
      methodDescriptor_MotionSensor_GetMotionDetection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullMotionDetectionRequest,
 *   !proto.smartcore.api.device.traits.PullMotionDetectionResponse>}
 */
const methodDescriptor_MotionSensor_PullMotionDetections = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.MotionSensor/PullMotionDetections',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullMotionDetectionRequest,
  proto.smartcore.api.device.traits.PullMotionDetectionResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullMotionDetectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullMotionDetectionRequest,
 *   !proto.smartcore.api.device.traits.PullMotionDetectionResponse>}
 */
const methodInfo_MotionSensor_PullMotionDetections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullMotionDetectionResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullMotionDetectionResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullMotionDetectionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullMotionDetectionResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MotionSensorClient.prototype.pullMotionDetections =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.MotionSensor/PullMotionDetections',
      request,
      metadata || {},
      methodDescriptor_MotionSensor_PullMotionDetections);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullMotionDetectionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullMotionDetectionResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MotionSensorPromiseClient.prototype.pullMotionDetections =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.MotionSensor/PullMotionDetections',
      request,
      metadata || {},
      methodDescriptor_MotionSensor_PullMotionDetections);
};


module.exports = proto.smartcore.api.device.traits;

