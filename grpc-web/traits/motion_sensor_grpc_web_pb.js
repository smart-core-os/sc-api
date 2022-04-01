/**
 * @fileoverview gRPC-Web generated client stub for smartcore.traits
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_info_pb = require('../types/info_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./motion_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MotionSensorApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MotionSensorApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.smartcore.traits.GetMotionDetectionRequest,
 *   !proto.smartcore.traits.MotionDetection>}
 */
const methodDescriptor_MotionSensorApi_GetMotionDetection = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MotionSensorApi/GetMotionDetection',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetMotionDetectionRequest,
  proto.smartcore.traits.MotionDetection,
  /**
   * @param {!proto.smartcore.traits.GetMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.MotionDetection.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetMotionDetectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.MotionDetection)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.MotionDetection>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MotionSensorApiClient.prototype.getMotionDetection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MotionSensorApi/GetMotionDetection',
      request,
      metadata || {},
      methodDescriptor_MotionSensorApi_GetMotionDetection,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetMotionDetectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.MotionDetection>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MotionSensorApiPromiseClient.prototype.getMotionDetection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MotionSensorApi/GetMotionDetection',
      request,
      metadata || {},
      methodDescriptor_MotionSensorApi_GetMotionDetection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullMotionDetectionRequest,
 *   !proto.smartcore.traits.PullMotionDetectionResponse>}
 */
const methodDescriptor_MotionSensorApi_PullMotionDetections = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MotionSensorApi/PullMotionDetections',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullMotionDetectionRequest,
  proto.smartcore.traits.PullMotionDetectionResponse,
  /**
   * @param {!proto.smartcore.traits.PullMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullMotionDetectionResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullMotionDetectionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMotionDetectionResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MotionSensorApiClient.prototype.pullMotionDetections =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MotionSensorApi/PullMotionDetections',
      request,
      metadata || {},
      methodDescriptor_MotionSensorApi_PullMotionDetections);
};


/**
 * @param {!proto.smartcore.traits.PullMotionDetectionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMotionDetectionResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MotionSensorApiPromiseClient.prototype.pullMotionDetections =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MotionSensorApi/PullMotionDetections',
      request,
      metadata || {},
      methodDescriptor_MotionSensorApi_PullMotionDetections);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MotionSensorSensorInfoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MotionSensorSensorInfoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.smartcore.traits.DescribeMotionDetectionRequest,
 *   !proto.smartcore.traits.MotionDetectionSupport>}
 */
const methodDescriptor_MotionSensorSensorInfo_DescribeMotionDetection = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MotionSensorSensorInfo/DescribeMotionDetection',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeMotionDetectionRequest,
  proto.smartcore.traits.MotionDetectionSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeMotionDetectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.MotionDetectionSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeMotionDetectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.MotionDetectionSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.MotionDetectionSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MotionSensorSensorInfoClient.prototype.describeMotionDetection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MotionSensorSensorInfo/DescribeMotionDetection',
      request,
      metadata || {},
      methodDescriptor_MotionSensorSensorInfo_DescribeMotionDetection,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeMotionDetectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.MotionDetectionSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MotionSensorSensorInfoPromiseClient.prototype.describeMotionDetection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MotionSensorSensorInfo/DescribeMotionDetection',
      request,
      metadata || {},
      methodDescriptor_MotionSensorSensorInfo_DescribeMotionDetection);
};


module.exports = proto.smartcore.traits;

