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


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var types_number_pb = require('../types/number_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.SensorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
proto.smartcore.traits.SensorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 *   !proto.smartcore.traits.GetSensorStateRequest,
 *   !proto.smartcore.traits.SensorState>}
 */
const methodDescriptor_Sensor_GetState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Sensor/GetState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetSensorStateRequest,
  proto.smartcore.traits.SensorState,
  /**
   * @param {!proto.smartcore.traits.GetSensorStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.SensorState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetSensorStateRequest,
 *   !proto.smartcore.traits.SensorState>}
 */
const methodInfo_Sensor_GetState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.SensorState,
  /**
   * @param {!proto.smartcore.traits.GetSensorStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.SensorState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetSensorStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.SensorState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.SensorState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SensorClient.prototype.getState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Sensor/GetState',
      request,
      metadata || {},
      methodDescriptor_Sensor_GetState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetSensorStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.SensorState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.SensorPromiseClient.prototype.getState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Sensor/GetState',
      request,
      metadata || {},
      methodDescriptor_Sensor_GetState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullSensorStateRequest,
 *   !proto.smartcore.traits.PullSensorStateResponse>}
 */
const methodDescriptor_Sensor_PullState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Sensor/PullState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullSensorStateRequest,
  proto.smartcore.traits.PullSensorStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullSensorStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullSensorStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullSensorStateRequest,
 *   !proto.smartcore.traits.PullSensorStateResponse>}
 */
const methodInfo_Sensor_PullState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullSensorStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullSensorStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullSensorStateResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullSensorStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullSensorStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SensorClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Sensor/PullState',
      request,
      metadata || {},
      methodDescriptor_Sensor_PullState);
};


/**
 * @param {!proto.smartcore.traits.PullSensorStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullSensorStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SensorPromiseClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Sensor/PullState',
      request,
      metadata || {},
      methodDescriptor_Sensor_PullState);
};


module.exports = proto.smartcore.traits;

