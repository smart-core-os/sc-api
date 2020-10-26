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
proto.smartcore.traits = require('./thermostat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.ThermostatClient =
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
proto.smartcore.traits.ThermostatPromiseClient =
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
 *   !proto.smartcore.traits.GetThermostatStateRequest,
 *   !proto.smartcore.traits.ThermostatState>}
 */
const methodDescriptor_Thermostat_GetState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Thermostat/GetState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetThermostatStateRequest,
  proto.smartcore.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.traits.GetThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ThermostatState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetThermostatStateRequest,
 *   !proto.smartcore.traits.ThermostatState>}
 */
const methodInfo_Thermostat_GetState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.traits.GetThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ThermostatState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.ThermostatState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ThermostatState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ThermostatClient.prototype.getState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Thermostat/GetState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_GetState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ThermostatState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ThermostatPromiseClient.prototype.getState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Thermostat/GetState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_GetState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateThermostatStateRequest,
 *   !proto.smartcore.traits.ThermostatState>}
 */
const methodDescriptor_Thermostat_UpdateState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Thermostat/UpdateState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateThermostatStateRequest,
  proto.smartcore.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.traits.UpdateThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ThermostatState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateThermostatStateRequest,
 *   !proto.smartcore.traits.ThermostatState>}
 */
const methodInfo_Thermostat_UpdateState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.traits.UpdateThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ThermostatState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.ThermostatState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ThermostatState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ThermostatClient.prototype.updateState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Thermostat/UpdateState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_UpdateState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ThermostatState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ThermostatPromiseClient.prototype.updateState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Thermostat/UpdateState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_UpdateState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullThermostatStateRequest,
 *   !proto.smartcore.traits.PullThermostatStateResponse>}
 */
const methodDescriptor_Thermostat_PullState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Thermostat/PullState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullThermostatStateRequest,
  proto.smartcore.traits.PullThermostatStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullThermostatStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullThermostatStateRequest,
 *   !proto.smartcore.traits.PullThermostatStateResponse>}
 */
const methodInfo_Thermostat_PullState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullThermostatStateResponse,
  /**
   * @param {!proto.smartcore.traits.PullThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullThermostatStateResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullThermostatStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullThermostatStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ThermostatClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Thermostat/PullState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_PullState);
};


/**
 * @param {!proto.smartcore.traits.PullThermostatStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullThermostatStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ThermostatPromiseClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Thermostat/PullState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_PullState);
};


module.exports = proto.smartcore.traits;

