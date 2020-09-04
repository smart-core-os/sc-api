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
proto.smartcore.api.device.traits = require('./open_close_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.OpenCloseClient =
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
proto.smartcore.api.device.traits.OpenClosePromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetOpenCloseStatesRequest,
 *   !proto.smartcore.api.device.traits.OpenCloseStates>}
 */
const methodDescriptor_OpenClose_GetStates = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OpenClose/GetStates',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetOpenCloseStatesRequest,
  proto.smartcore.api.device.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.api.device.traits.GetOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OpenCloseStates.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetOpenCloseStatesRequest,
 *   !proto.smartcore.api.device.traits.OpenCloseStates>}
 */
const methodInfo_OpenClose_GetStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.api.device.traits.GetOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OpenCloseStates.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.OpenCloseStates)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.OpenCloseStates>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OpenCloseClient.prototype.getStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OpenClose/GetStates',
      request,
      metadata || {},
      methodDescriptor_OpenClose_GetStates,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.OpenCloseStates>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OpenClosePromiseClient.prototype.getStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OpenClose/GetStates',
      request,
      metadata || {},
      methodDescriptor_OpenClose_GetStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest,
 *   !proto.smartcore.api.device.traits.OpenCloseStates>}
 */
const methodDescriptor_OpenClose_UpdateStates = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OpenClose/UpdateStates',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest,
  proto.smartcore.api.device.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OpenCloseStates.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest,
 *   !proto.smartcore.api.device.traits.OpenCloseStates>}
 */
const methodInfo_OpenClose_UpdateStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.OpenCloseStates,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OpenCloseStates.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.OpenCloseStates)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.OpenCloseStates>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OpenCloseClient.prototype.updateStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OpenClose/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_OpenClose_UpdateStates,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateOpenCloseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.OpenCloseStates>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OpenClosePromiseClient.prototype.updateStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OpenClose/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_OpenClose_UpdateStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullOpenCloseStatesRequest,
 *   !proto.smartcore.api.device.traits.PullOpenCloseStatesResponse>}
 */
const methodDescriptor_OpenClose_Pull = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OpenClose/Pull',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullOpenCloseStatesRequest,
  proto.smartcore.api.device.traits.PullOpenCloseStatesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullOpenCloseStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullOpenCloseStatesRequest,
 *   !proto.smartcore.api.device.traits.PullOpenCloseStatesResponse>}
 */
const methodInfo_OpenClose_Pull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullOpenCloseStatesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullOpenCloseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullOpenCloseStatesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullOpenCloseStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullOpenCloseStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OpenCloseClient.prototype.pull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.OpenClose/Pull',
      request,
      metadata || {},
      methodDescriptor_OpenClose_Pull);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullOpenCloseStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullOpenCloseStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OpenClosePromiseClient.prototype.pull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.OpenClose/Pull',
      request,
      metadata || {},
      methodDescriptor_OpenClose_Pull);
};


module.exports = proto.smartcore.api.device.traits;

