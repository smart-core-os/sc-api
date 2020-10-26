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
proto.smartcore.traits = require('./air_quality_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.AirQualitySensorApiClient =
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
proto.smartcore.traits.AirQualitySensorApiPromiseClient =
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
 *   !proto.smartcore.traits.GetAirQualityStateRequest,
 *   !proto.smartcore.traits.AirQualityState>}
 */
const methodDescriptor_AirQualitySensorApi_GetState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AirQualitySensorApi/GetState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetAirQualityStateRequest,
  proto.smartcore.traits.AirQualityState,
  /**
   * @param {!proto.smartcore.traits.GetAirQualityStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AirQualityState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetAirQualityStateRequest,
 *   !proto.smartcore.traits.AirQualityState>}
 */
const methodInfo_AirQualitySensorApi_GetState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.AirQualityState,
  /**
   * @param {!proto.smartcore.traits.GetAirQualityStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AirQualityState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetAirQualityStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.AirQualityState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AirQualityState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirQualitySensorApiClient.prototype.getState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.AirQualitySensorApi/GetState',
      request,
      metadata || {},
      methodDescriptor_AirQualitySensorApi_GetState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetAirQualityStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AirQualityState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.AirQualitySensorApiPromiseClient.prototype.getState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.AirQualitySensorApi/GetState',
      request,
      metadata || {},
      methodDescriptor_AirQualitySensorApi_GetState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullAirQualityStateRequest,
 *   !proto.smartcore.traits.PullAirQualityStateResponse>}
 */
const methodDescriptor_AirQualitySensorApi_PullState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AirQualitySensorApi/PullState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullAirQualityStateRequest,
  proto.smartcore.traits.PullAirQualityStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullAirQualityStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAirQualityStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullAirQualityStateRequest,
 *   !proto.smartcore.traits.PullAirQualityStateResponse>}
 */
const methodInfo_AirQualitySensorApi_PullState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullAirQualityStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullAirQualityStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAirQualityStateResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullAirQualityStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAirQualityStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirQualitySensorApiClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.AirQualitySensorApi/PullState',
      request,
      metadata || {},
      methodDescriptor_AirQualitySensorApi_PullState);
};


/**
 * @param {!proto.smartcore.traits.PullAirQualityStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAirQualityStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirQualitySensorApiPromiseClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.AirQualitySensorApi/PullState',
      request,
      metadata || {},
      methodDescriptor_AirQualitySensorApi_PullState);
};


module.exports = proto.smartcore.traits;

