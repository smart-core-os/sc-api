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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_number_pb = require('../../types/number_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./range_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.RangeClient =
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
proto.smartcore.api.device.traits.RangePromiseClient =
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
 *   !proto.smartcore.api.device.traits.UpdateRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodDescriptor_Range_UpdateRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Range/UpdateRangeValue',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateRangeValueRequest,
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateRangeValueRequest} request
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
 *   !proto.smartcore.api.device.traits.UpdateRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodInfo_Range_UpdateRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_number_pb.Int32Var.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Int32Var)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Int32Var>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.RangeClient.prototype.updateRangeValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Range/UpdateRangeValue',
      request,
      metadata || {},
      methodDescriptor_Range_UpdateRangeValue,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Int32Var>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.RangePromiseClient.prototype.updateRangeValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Range/UpdateRangeValue',
      request,
      metadata || {},
      methodDescriptor_Range_UpdateRangeValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.GetRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodDescriptor_Range_GetRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Range/GetRangeValue',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetRangeValueRequest,
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.api.device.traits.GetRangeValueRequest} request
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
 *   !proto.smartcore.api.device.traits.GetRangeValueRequest,
 *   !proto.smartcore.api.types.Int32Var>}
 */
const methodInfo_Range_GetRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  types_number_pb.Int32Var,
  /**
   * @param {!proto.smartcore.api.device.traits.GetRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_number_pb.Int32Var.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Int32Var)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Int32Var>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.RangeClient.prototype.getRangeValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Range/GetRangeValue',
      request,
      metadata || {},
      methodDescriptor_Range_GetRangeValue,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetRangeValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Int32Var>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.RangePromiseClient.prototype.getRangeValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Range/GetRangeValue',
      request,
      metadata || {},
      methodDescriptor_Range_GetRangeValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullRangeValueRequest,
 *   !proto.smartcore.api.device.traits.PullRangeValueResponse>}
 */
const methodDescriptor_Range_PullRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Range/PullRangeValue',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullRangeValueRequest,
  proto.smartcore.api.device.traits.PullRangeValueResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullRangeValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullRangeValueRequest,
 *   !proto.smartcore.api.device.traits.PullRangeValueResponse>}
 */
const methodInfo_Range_PullRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullRangeValueResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullRangeValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullRangeValueResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullRangeValueRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullRangeValueResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.RangeClient.prototype.pullRangeValue =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Range/PullRangeValue',
      request,
      metadata || {},
      methodDescriptor_Range_PullRangeValue);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullRangeValueRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullRangeValueResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.RangePromiseClient.prototype.pullRangeValue =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Range/PullRangeValue',
      request,
      metadata || {},
      methodDescriptor_Range_PullRangeValue);
};


module.exports = proto.smartcore.api.device.traits;

