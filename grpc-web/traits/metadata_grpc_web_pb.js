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
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./metadata_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MetadataApiClient =
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
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MetadataApiPromiseClient =
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
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetMetadataRequest,
 *   !proto.smartcore.traits.Metadata>}
 */
const methodDescriptor_MetadataApi_GetMetadata = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MetadataApi/GetMetadata',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetMetadataRequest,
  proto.smartcore.traits.Metadata,
  /**
   * @param {!proto.smartcore.traits.GetMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Metadata.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Metadata)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Metadata>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MetadataApiClient.prototype.getMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MetadataApi/GetMetadata',
      request,
      metadata || {},
      methodDescriptor_MetadataApi_GetMetadata,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Metadata>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MetadataApiPromiseClient.prototype.getMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MetadataApi/GetMetadata',
      request,
      metadata || {},
      methodDescriptor_MetadataApi_GetMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullMetadataRequest,
 *   !proto.smartcore.traits.PullMetadataResponse>}
 */
const methodDescriptor_MetadataApi_PullMetadata = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MetadataApi/PullMetadata',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullMetadataRequest,
  proto.smartcore.traits.PullMetadataResponse,
  /**
   * @param {!proto.smartcore.traits.PullMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullMetadataRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMetadataResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MetadataApiClient.prototype.pullMetadata =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MetadataApi/PullMetadata',
      request,
      metadata || {},
      methodDescriptor_MetadataApi_PullMetadata);
};


/**
 * @param {!proto.smartcore.traits.PullMetadataRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMetadataResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MetadataApiPromiseClient.prototype.pullMetadata =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MetadataApi/PullMetadata',
      request,
      metadata || {},
      methodDescriptor_MetadataApi_PullMetadata);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MetadataInfoClient =
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
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MetadataInfoPromiseClient =
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
  this.hostname_ = hostname;

};


module.exports = proto.smartcore.traits;
