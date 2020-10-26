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

var types_on_off_pb = require('../types/on_off_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./on_off_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.OnOffClient =
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
proto.smartcore.traits.OnOffPromiseClient =
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
 *   !proto.smartcore.traits.OnRequest,
 *   !proto.smartcore.traits.OnReply>}
 */
const methodDescriptor_OnOff_On = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OnOff/On',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.OnRequest,
  proto.smartcore.traits.OnReply,
  /**
   * @param {!proto.smartcore.traits.OnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OnReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.OnRequest,
 *   !proto.smartcore.traits.OnReply>}
 */
const methodInfo_OnOff_On = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OnReply,
  /**
   * @param {!proto.smartcore.traits.OnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OnReply.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.OnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OnReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OnReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OnOffClient.prototype.on =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OnOff/On',
      request,
      metadata || {},
      methodDescriptor_OnOff_On,
      callback);
};


/**
 * @param {!proto.smartcore.traits.OnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OnReply>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OnOffPromiseClient.prototype.on =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OnOff/On',
      request,
      metadata || {},
      methodDescriptor_OnOff_On);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.OffRequest,
 *   !proto.smartcore.traits.OffReply>}
 */
const methodDescriptor_OnOff_Off = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OnOff/Off',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.OffRequest,
  proto.smartcore.traits.OffReply,
  /**
   * @param {!proto.smartcore.traits.OffRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OffReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.OffRequest,
 *   !proto.smartcore.traits.OffReply>}
 */
const methodInfo_OnOff_Off = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OffReply,
  /**
   * @param {!proto.smartcore.traits.OffRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OffReply.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.OffRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.OffReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OffReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OnOffClient.prototype.off =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OnOff/Off',
      request,
      metadata || {},
      methodDescriptor_OnOff_Off,
      callback);
};


/**
 * @param {!proto.smartcore.traits.OffRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OffReply>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OnOffPromiseClient.prototype.off =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OnOff/Off',
      request,
      metadata || {},
      methodDescriptor_OnOff_Off);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetOnOffStateRequest,
 *   !proto.smartcore.traits.GetOnOffStateResponse>}
 */
const methodDescriptor_OnOff_GetOnOffState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OnOff/GetOnOffState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetOnOffStateRequest,
  proto.smartcore.traits.GetOnOffStateResponse,
  /**
   * @param {!proto.smartcore.traits.GetOnOffStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.GetOnOffStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetOnOffStateRequest,
 *   !proto.smartcore.traits.GetOnOffStateResponse>}
 */
const methodInfo_OnOff_GetOnOffState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.GetOnOffStateResponse,
  /**
   * @param {!proto.smartcore.traits.GetOnOffStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.GetOnOffStateResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetOnOffStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.GetOnOffStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.GetOnOffStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OnOffClient.prototype.getOnOffState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OnOff/GetOnOffState',
      request,
      metadata || {},
      methodDescriptor_OnOff_GetOnOffState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetOnOffStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.GetOnOffStateResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OnOffPromiseClient.prototype.getOnOffState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OnOff/GetOnOffState',
      request,
      metadata || {},
      methodDescriptor_OnOff_GetOnOffState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.OnOffPullRequest,
 *   !proto.smartcore.traits.OnOffPullResponse>}
 */
const methodDescriptor_OnOff_Pull = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OnOff/Pull',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.OnOffPullRequest,
  proto.smartcore.traits.OnOffPullResponse,
  /**
   * @param {!proto.smartcore.traits.OnOffPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OnOffPullResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.OnOffPullRequest,
 *   !proto.smartcore.traits.OnOffPullResponse>}
 */
const methodInfo_OnOff_Pull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.OnOffPullResponse,
  /**
   * @param {!proto.smartcore.traits.OnOffPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OnOffPullResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.OnOffPullRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OnOffPullResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OnOffClient.prototype.pull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.OnOff/Pull',
      request,
      metadata || {},
      methodDescriptor_OnOff_Pull);
};


/**
 * @param {!proto.smartcore.traits.OnOffPullRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OnOffPullResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OnOffPromiseClient.prototype.pull =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.OnOff/Pull',
      request,
      metadata || {},
      methodDescriptor_OnOff_Pull);
};


module.exports = proto.smartcore.traits;

