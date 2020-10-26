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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_number_pb = require('../types/number_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./range_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.RangeApiClient =
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
proto.smartcore.traits.RangeApiPromiseClient =
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
 *   !proto.smartcore.traits.UpdateRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodDescriptor_RangeApi_UpdateRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.traits.RangeApi/UpdateRangeValue',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateRangeValueRequest,
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.traits.UpdateRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_number_pb.Int32Var.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodInfo_RangeApi_UpdateRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.traits.UpdateRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_number_pb.Int32Var.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Int32Var)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Int32Var>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.RangeApiClient.prototype.updateRangeValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.RangeApi/UpdateRangeValue',
      request,
      metadata || {},
      methodDescriptor_RangeApi_UpdateRangeValue,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Int32Var>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.RangeApiPromiseClient.prototype.updateRangeValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.RangeApi/UpdateRangeValue',
      request,
      metadata || {},
      methodDescriptor_RangeApi_UpdateRangeValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodDescriptor_RangeApi_GetRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.traits.RangeApi/GetRangeValue',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetRangeValueRequest,
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.traits.GetRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_number_pb.Int32Var.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodInfo_RangeApi_GetRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.traits.GetRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_number_pb.Int32Var.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Int32Var)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Int32Var>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.RangeApiClient.prototype.getRangeValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.RangeApi/GetRangeValue',
      request,
      metadata || {},
      methodDescriptor_RangeApi_GetRangeValue,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Int32Var>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.RangeApiPromiseClient.prototype.getRangeValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.RangeApi/GetRangeValue',
      request,
      metadata || {},
      methodDescriptor_RangeApi_GetRangeValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullRangeValueRequest,
 *   !proto.smartcore.traits.PullRangeValueResponse>}
 */
const methodDescriptor_RangeApi_PullRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.traits.RangeApi/PullRangeValue',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullRangeValueRequest,
  proto.smartcore.traits.PullRangeValueResponse,
  /**
   * @param {!proto.smartcore.traits.PullRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullRangeValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullRangeValueRequest,
 *   !proto.smartcore.traits.PullRangeValueResponse>}
 */
const methodInfo_RangeApi_PullRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullRangeValueResponse,
  /**
   * @param {!proto.smartcore.traits.PullRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullRangeValueResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullRangeValueRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullRangeValueResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.RangeApiClient.prototype.pullRangeValue =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.RangeApi/PullRangeValue',
      request,
      metadata || {},
      methodDescriptor_RangeApi_PullRangeValue);
};


/**
 * @param {!proto.smartcore.traits.PullRangeValueRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullRangeValueResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.RangeApiPromiseClient.prototype.pullRangeValue =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.RangeApi/PullRangeValue',
      request,
      metadata || {},
      methodDescriptor_RangeApi_PullRangeValue);
};


module.exports = proto.smartcore.traits;

