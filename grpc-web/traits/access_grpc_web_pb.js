/**
 * @fileoverview gRPC-Web generated client stub for smartcore.traits
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: traits/access.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_image_pb = require('../types/image_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./access_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.AccessApiClient =
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
proto.smartcore.traits.AccessApiPromiseClient =
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
 *   !proto.smartcore.traits.GetLastAccessAttemptRequest,
 *   !proto.smartcore.traits.AccessAttempt>}
 */
const methodDescriptor_AccessApi_GetLastAccessAttempt = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AccessApi/GetLastAccessAttempt',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetLastAccessAttemptRequest,
  proto.smartcore.traits.AccessAttempt,
  /**
   * @param {!proto.smartcore.traits.GetLastAccessAttemptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AccessAttempt.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetLastAccessAttemptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.AccessAttempt)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AccessAttempt>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AccessApiClient.prototype.getLastAccessAttempt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.AccessApi/GetLastAccessAttempt',
      request,
      metadata || {},
      methodDescriptor_AccessApi_GetLastAccessAttempt,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetLastAccessAttemptRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AccessAttempt>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.AccessApiPromiseClient.prototype.getLastAccessAttempt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.AccessApi/GetLastAccessAttempt',
      request,
      metadata || {},
      methodDescriptor_AccessApi_GetLastAccessAttempt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullAccessAttemptsRequest,
 *   !proto.smartcore.traits.PullAccessAttemptsResponse>}
 */
const methodDescriptor_AccessApi_PullAccessAttempts = new grpc.web.MethodDescriptor(
  '/smartcore.traits.AccessApi/PullAccessAttempts',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullAccessAttemptsRequest,
  proto.smartcore.traits.PullAccessAttemptsResponse,
  /**
   * @param {!proto.smartcore.traits.PullAccessAttemptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAccessAttemptsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullAccessAttemptsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAccessAttemptsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AccessApiClient.prototype.pullAccessAttempts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.AccessApi/PullAccessAttempts',
      request,
      metadata || {},
      methodDescriptor_AccessApi_PullAccessAttempts);
};


/**
 * @param {!proto.smartcore.traits.PullAccessAttemptsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAccessAttemptsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AccessApiPromiseClient.prototype.pullAccessAttempts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.AccessApi/PullAccessAttempts',
      request,
      metadata || {},
      methodDescriptor_AccessApi_PullAccessAttempts);
};


module.exports = proto.smartcore.traits;

