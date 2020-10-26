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

var types_unit_pb = require('../types/unit_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./air_temperature_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.AirTemperatureClient =
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
proto.smartcore.traits.AirTemperaturePromiseClient =
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
 *   !proto.smartcore.traits.GetAirTemperatureStateRequest,
 *   !proto.smartcore.traits.AirTemperatureState>}
 */
const methodDescriptor_AirTemperature_GetState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AirTemperature/GetState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetAirTemperatureStateRequest,
  proto.smartcore.traits.AirTemperatureState,
  /**
   * @param {!proto.smartcore.traits.GetAirTemperatureStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AirTemperatureState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetAirTemperatureStateRequest,
 *   !proto.smartcore.traits.AirTemperatureState>}
 */
const methodInfo_AirTemperature_GetState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.AirTemperatureState,
  /**
   * @param {!proto.smartcore.traits.GetAirTemperatureStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AirTemperatureState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetAirTemperatureStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.AirTemperatureState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AirTemperatureState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirTemperatureClient.prototype.getState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.AirTemperature/GetState',
      request,
      metadata || {},
      methodDescriptor_AirTemperature_GetState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetAirTemperatureStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AirTemperatureState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.AirTemperaturePromiseClient.prototype.getState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.AirTemperature/GetState',
      request,
      metadata || {},
      methodDescriptor_AirTemperature_GetState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateAirTemperatureStateRequest,
 *   !proto.smartcore.traits.AirTemperatureState>}
 */
const methodDescriptor_AirTemperature_UpdateState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AirTemperature/UpdateState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateAirTemperatureStateRequest,
  proto.smartcore.traits.AirTemperatureState,
  /**
   * @param {!proto.smartcore.traits.UpdateAirTemperatureStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AirTemperatureState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateAirTemperatureStateRequest,
 *   !proto.smartcore.traits.AirTemperatureState>}
 */
const methodInfo_AirTemperature_UpdateState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.AirTemperatureState,
  /**
   * @param {!proto.smartcore.traits.UpdateAirTemperatureStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AirTemperatureState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateAirTemperatureStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.AirTemperatureState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AirTemperatureState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirTemperatureClient.prototype.updateState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.AirTemperature/UpdateState',
      request,
      metadata || {},
      methodDescriptor_AirTemperature_UpdateState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateAirTemperatureStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AirTemperatureState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.AirTemperaturePromiseClient.prototype.updateState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.AirTemperature/UpdateState',
      request,
      metadata || {},
      methodDescriptor_AirTemperature_UpdateState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullAirTemperatureStateRequest,
 *   !proto.smartcore.traits.PullAirTemperatureStateResponse>}
 */
const methodDescriptor_AirTemperature_PullState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AirTemperature/PullState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullAirTemperatureStateRequest,
  proto.smartcore.traits.PullAirTemperatureStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullAirTemperatureStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAirTemperatureStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullAirTemperatureStateRequest,
 *   !proto.smartcore.traits.PullAirTemperatureStateResponse>}
 */
const methodInfo_AirTemperature_PullState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullAirTemperatureStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullAirTemperatureStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAirTemperatureStateResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullAirTemperatureStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAirTemperatureStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirTemperatureClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.AirTemperature/PullState',
      request,
      metadata || {},
      methodDescriptor_AirTemperature_PullState);
};


/**
 * @param {!proto.smartcore.traits.PullAirTemperatureStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAirTemperatureStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AirTemperaturePromiseClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.AirTemperature/PullState',
      request,
      metadata || {},
      methodDescriptor_AirTemperature_PullState);
};


module.exports = proto.smartcore.traits;
