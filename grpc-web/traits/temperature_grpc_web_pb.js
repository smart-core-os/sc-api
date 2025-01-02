/**
 * @fileoverview gRPC-Web generated client stub for smartcore.traits
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.3
// source: traits/temperature.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_unit_pb = require('../types/unit_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./temperature_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.TemperatureApiClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.TemperatureApiPromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetTemperatureRequest,
 *   !proto.smartcore.traits.Temperature>}
 */
const methodDescriptor_TemperatureApi_GetTemperature = new grpc.web.MethodDescriptor(
  '/smartcore.traits.TemperatureApi/GetTemperature',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetTemperatureRequest,
  proto.smartcore.traits.Temperature,
  /**
   * @param {!proto.smartcore.traits.GetTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Temperature.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetTemperatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Temperature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Temperature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.TemperatureApiClient.prototype.getTemperature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.TemperatureApi/GetTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureApi_GetTemperature,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetTemperatureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Temperature>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.TemperatureApiPromiseClient.prototype.getTemperature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.TemperatureApi/GetTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureApi_GetTemperature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullTemperatureRequest,
 *   !proto.smartcore.traits.PullTemperatureResponse>}
 */
const methodDescriptor_TemperatureApi_PullTemperature = new grpc.web.MethodDescriptor(
  '/smartcore.traits.TemperatureApi/PullTemperature',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullTemperatureRequest,
  proto.smartcore.traits.PullTemperatureResponse,
  /**
   * @param {!proto.smartcore.traits.PullTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullTemperatureResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullTemperatureRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullTemperatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.TemperatureApiClient.prototype.pullTemperature =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.TemperatureApi/PullTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureApi_PullTemperature);
};


/**
 * @param {!proto.smartcore.traits.PullTemperatureRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullTemperatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.TemperatureApiPromiseClient.prototype.pullTemperature =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.TemperatureApi/PullTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureApi_PullTemperature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateTemperatureRequest,
 *   !proto.smartcore.traits.Temperature>}
 */
const methodDescriptor_TemperatureApi_UpdateTemperature = new grpc.web.MethodDescriptor(
  '/smartcore.traits.TemperatureApi/UpdateTemperature',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateTemperatureRequest,
  proto.smartcore.traits.Temperature,
  /**
   * @param {!proto.smartcore.traits.UpdateTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Temperature.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateTemperatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Temperature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Temperature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.TemperatureApiClient.prototype.updateTemperature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.TemperatureApi/UpdateTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureApi_UpdateTemperature,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateTemperatureRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Temperature>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.TemperatureApiPromiseClient.prototype.updateTemperature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.TemperatureApi/UpdateTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureApi_UpdateTemperature);
};


module.exports = proto.smartcore.traits;
