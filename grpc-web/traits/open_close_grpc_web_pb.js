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
 *   !proto.smartcore.traits.GetOpenCloseStatesRequest,
 *   !proto.smartcore.traits.OpenCloseStates>}
 */
const methodDescriptor_OpenCloseApi_GetStates = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/GetStates',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetOpenCloseStatesRequest,
  proto.smartcore.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.traits.GetOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenCloseStates.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetOpenCloseStatesRequest,
 *   !proto.smartcore.traits.OpenCloseStates>}
 */
const methodInfo_OpenCloseApi_GetStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.traits.GetOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenCloseStates.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OpenCloseStates)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OpenCloseStates>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiClient.prototype.getStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/GetStates',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_GetStates,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OpenCloseStates>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OpenCloseApiPromiseClient.prototype.getStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/GetStates',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_GetStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateOpenCloseStatesRequest,
 *   !proto.smartcore.traits.OpenCloseStates>}
 */
const methodDescriptor_OpenCloseApi_UpdateStates = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/UpdateStates',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateOpenCloseStatesRequest,
  proto.smartcore.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.traits.UpdateOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenCloseStates.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateOpenCloseStatesRequest,
 *   !proto.smartcore.traits.OpenCloseStates>}
 */
const methodInfo_OpenCloseApi_UpdateStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.traits.UpdateOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenCloseStates.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OpenCloseStates)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OpenCloseStates>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OpenCloseApiClient.prototype.updateStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_UpdateStates,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OpenCloseStates>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OpenCloseApiPromiseClient.prototype.updateStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OpenCloseApi/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_OpenCloseApi_UpdateStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.StopOpenCloseRequest,
 *   !proto.smartcore.traits.OpenCloseStates>}
 */
const methodDescriptor_OpenCloseApi_Stop = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/Stop',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.StopOpenCloseRequest,
  proto.smartcore.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.traits.StopOpenCloseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenCloseStates.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.StopOpenCloseRequest,
 *   !proto.smartcore.traits.OpenCloseStates>}
 */
const methodInfo_OpenCloseApi_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.traits.StopOpenCloseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OpenCloseStates.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.StopOpenCloseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OpenCloseStates)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OpenCloseStates>|undefined}
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
 * @return {!Promise<!proto.smartcore.traits.OpenCloseStates>}
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
 *   !proto.smartcore.traits.PullOpenCloseStatesRequest,
 *   !proto.smartcore.traits.PullOpenCloseStatesResponse>}
 */
const methodDescriptor_OpenCloseApi_Pull = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OpenCloseApi/Pull',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullOpenCloseStatesRequest,
  proto.smartcore.traits.PullOpenCloseStatesResponse,
  /**
   * @param {!proto.smartcore.traits.PullOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullOpenCloseStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullOpenCloseStatesRequest,
 *   !proto.smartcore.traits.PullOpenCloseStatesResponse>}
 */
const methodInfo_OpenCloseApi_Pull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullOpenCloseStatesResponse,
  /**
   * @param {!proto.smartcore.traits.PullOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullOpenCloseStatesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullOpenCloseStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullOpenCloseStatesResponse>}
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
 * @param {!proto.smartcore.traits.PullOpenCloseStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullOpenCloseStatesResponse>}
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

