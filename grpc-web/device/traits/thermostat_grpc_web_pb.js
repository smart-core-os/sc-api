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


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var types_unit_pb = require('../../types/unit_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./thermostat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.ThermostatClient =
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
proto.smartcore.api.device.traits.ThermostatPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetThermostatStateRequest,
 *   !proto.smartcore.api.device.traits.ThermostatState>}
 */
const methodDescriptor_Thermostat_GetState = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Thermostat/GetState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetThermostatStateRequest,
  proto.smartcore.api.device.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.api.device.traits.GetThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ThermostatState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetThermostatStateRequest,
 *   !proto.smartcore.api.device.traits.ThermostatState>}
 */
const methodInfo_Thermostat_GetState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.api.device.traits.GetThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ThermostatState.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.ThermostatState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.ThermostatState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ThermostatClient.prototype.getState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Thermostat/GetState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_GetState,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.ThermostatState>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ThermostatPromiseClient.prototype.getState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Thermostat/GetState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_GetState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateThermostatStateRequest,
 *   !proto.smartcore.api.device.traits.ThermostatState>}
 */
const methodDescriptor_Thermostat_UpdateState = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Thermostat/UpdateState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateThermostatStateRequest,
  proto.smartcore.api.device.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ThermostatState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateThermostatStateRequest,
 *   !proto.smartcore.api.device.traits.ThermostatState>}
 */
const methodInfo_Thermostat_UpdateState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.ThermostatState,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ThermostatState.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.ThermostatState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.ThermostatState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ThermostatClient.prototype.updateState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Thermostat/UpdateState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_UpdateState,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateThermostatStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.ThermostatState>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ThermostatPromiseClient.prototype.updateState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Thermostat/UpdateState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_UpdateState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullThermostatStateRequest,
 *   !proto.smartcore.api.device.traits.PullThermostatStateResponse>}
 */
const methodDescriptor_Thermostat_PullState = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Thermostat/PullState',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullThermostatStateRequest,
  proto.smartcore.api.device.traits.PullThermostatStateResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullThermostatStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullThermostatStateRequest,
 *   !proto.smartcore.api.device.traits.PullThermostatStateResponse>}
 */
const methodInfo_Thermostat_PullState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullThermostatStateResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullThermostatStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullThermostatStateResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullThermostatStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullThermostatStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ThermostatClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Thermostat/PullState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_PullState);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullThermostatStateRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullThermostatStateResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ThermostatPromiseClient.prototype.pullState =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Thermostat/PullState',
      request,
      metadata || {},
      methodDescriptor_Thermostat_PullState);
};


module.exports = proto.smartcore.api.device.traits;

