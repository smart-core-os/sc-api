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
proto.smartcore.traits = require('./open_close_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.OpenCloseApiClient =
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
proto.smartcore.traits.OpenCloseApiPromiseClient =
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
 *   !proto.smartcore.traits.GetOpenClosePositionsRequest,
 *   !proto.smartcore.traits.OpenClosePositions>}
 */
const methodDescriptor_OpenCloseApi_GetPositions = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/GetPositions',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetOpenClosePositionsRequest,
  proto.smartcore.traits.OpenClosePositions,
  /**
   * @param {!proto.smartcore.traits.GetOpenClosePositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenClosePositions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetOpenClosePositionsRequest,
 *   !proto.smartcore.traits.OpenClosePositions>}
 */
const methodInfo_OpenCloseApi_GetPositions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OpenClosePositions,
  /**
   * @param {!proto.smartcore.traits.GetOpenClosePositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenClosePositions.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetOpenClosePositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OpenClosePositions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OpenClosePositions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiClient.prototype.getPositions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/GetPositions',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_GetPositions,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetOpenClosePositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OpenClosePositions>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OpenCloseApiPromiseClient.prototype.getPositions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/GetPositions',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_GetPositions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateOpenClosePositionsRequest,
 *   !proto.smartcore.traits.OpenClosePositions>}
 */
const methodDescriptor_OpenCloseApi_UpdatePositions = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/UpdatePositions',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateOpenClosePositionsRequest,
  proto.smartcore.traits.OpenClosePositions,
  /**
   * @param {!proto.smartcore.traits.UpdateOpenClosePositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenClosePositions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateOpenClosePositionsRequest,
 *   !proto.smartcore.traits.OpenClosePositions>}
 */
const methodInfo_OpenCloseApi_UpdatePositions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OpenClosePositions,
  /**
   * @param {!proto.smartcore.traits.UpdateOpenClosePositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenClosePositions.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateOpenClosePositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OpenClosePositions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OpenClosePositions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiClient.prototype.updatePositions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/UpdatePositions',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_UpdatePositions,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateOpenClosePositionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OpenClosePositions>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OpenCloseApiPromiseClient.prototype.updatePositions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/UpdatePositions',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_UpdatePositions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.StopOpenCloseRequest,
 *   !proto.smartcore.traits.OpenClosePositions>}
 */
const methodDescriptor_OpenCloseApi_Stop = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/Stop',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.StopOpenCloseRequest,
  proto.smartcore.traits.OpenClosePositions,
  /**
   * @param {!proto.smartcore.traits.StopOpenCloseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenClosePositions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.StopOpenCloseRequest,
 *   !proto.smartcore.traits.OpenClosePositions>}
 */
const methodInfo_OpenCloseApi_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OpenClosePositions,
  /**
   * @param {!proto.smartcore.traits.StopOpenCloseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenClosePositions.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.StopOpenCloseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OpenClosePositions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OpenClosePositions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/Stop',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_Stop,
      callback);
};


/**
 * @param {!proto.smartcore.traits.StopOpenCloseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OpenClosePositions>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OpenCloseApiPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/Stop',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullOpenClosePositionsRequest,
 *   !proto.smartcore.traits.PullOpenClosePositionsResponse>}
 */
const methodDescriptor_OpenCloseApi_Pull = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/Pull',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullOpenClosePositionsRequest,
  proto.smartcore.traits.PullOpenClosePositionsResponse,
  /**
   * @param {!proto.smartcore.traits.PullOpenClosePositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullOpenClosePositionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullOpenClosePositionsRequest,
 *   !proto.smartcore.traits.PullOpenClosePositionsResponse>}
 */
const methodInfo_OpenCloseApi_Pull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullOpenClosePositionsResponse,
  /**
   * @param {!proto.smartcore.traits.PullOpenClosePositionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullOpenClosePositionsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullOpenClosePositionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullOpenClosePositionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiClient.prototype.pull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/Pull',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_Pull);
};


/**
 * @param {!proto.smartcore.traits.PullOpenClosePositionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullOpenClosePositionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiPromiseClient.prototype.pull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/Pull',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_Pull);
};


module.exports = proto.smartcore.traits;

