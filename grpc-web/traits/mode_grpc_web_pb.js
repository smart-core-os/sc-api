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

var types_info_pb = require('../types/info_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./mode_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.ModeApiClient =
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
proto.smartcore.traits.ModeApiPromiseClient =
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
 *   !proto.smartcore.traits.GetModeValuesRequest,
 *   !proto.smartcore.traits.ModeValues>}
 */
const methodDescriptor_ModeApi_GetModeValues = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ModeApi/GetModeValues',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetModeValuesRequest,
  proto.smartcore.traits.ModeValues,
  /**
   * @param {!proto.smartcore.traits.GetModeValuesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ModeValues.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetModeValuesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.ModeValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ModeValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ModeApiClient.prototype.getModeValues =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ModeApi/GetModeValues',
      request,
      metadata || {},
      methodDescriptor_ModeApi_GetModeValues,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetModeValuesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ModeValues>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ModeApiPromiseClient.prototype.getModeValues =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ModeApi/GetModeValues',
      request,
      metadata || {},
      methodDescriptor_ModeApi_GetModeValues);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateModeValuesRequest,
 *   !proto.smartcore.traits.ModeValues>}
 */
const methodDescriptor_ModeApi_UpdateModeValues = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ModeApi/UpdateModeValues',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateModeValuesRequest,
  proto.smartcore.traits.ModeValues,
  /**
   * @param {!proto.smartcore.traits.UpdateModeValuesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ModeValues.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateModeValuesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.ModeValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ModeValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ModeApiClient.prototype.updateModeValues =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ModeApi/UpdateModeValues',
      request,
      metadata || {},
      methodDescriptor_ModeApi_UpdateModeValues,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateModeValuesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ModeValues>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ModeApiPromiseClient.prototype.updateModeValues =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ModeApi/UpdateModeValues',
      request,
      metadata || {},
      methodDescriptor_ModeApi_UpdateModeValues);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullModeValuesRequest,
 *   !proto.smartcore.traits.PullModeValuesResponse>}
 */
const methodDescriptor_ModeApi_PullModeValues = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ModeApi/PullModeValues',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullModeValuesRequest,
  proto.smartcore.traits.PullModeValuesResponse,
  /**
   * @param {!proto.smartcore.traits.PullModeValuesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullModeValuesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullModeValuesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullModeValuesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ModeApiClient.prototype.pullModeValues =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.ModeApi/PullModeValues',
      request,
      metadata || {},
      methodDescriptor_ModeApi_PullModeValues);
};


/**
 * @param {!proto.smartcore.traits.PullModeValuesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullModeValuesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ModeApiPromiseClient.prototype.pullModeValues =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.ModeApi/PullModeValues',
      request,
      metadata || {},
      methodDescriptor_ModeApi_PullModeValues);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.ModeInfoClient =
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
proto.smartcore.traits.ModeInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeModesRequest,
 *   !proto.smartcore.traits.ModesSupport>}
 */
const methodDescriptor_ModeInfo_DescribeModes = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ModeInfo/DescribeModes',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeModesRequest,
  proto.smartcore.traits.ModesSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeModesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ModesSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeModesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.ModesSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ModesSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ModeInfoClient.prototype.describeModes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ModeInfo/DescribeModes',
      request,
      metadata || {},
      methodDescriptor_ModeInfo_DescribeModes,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeModesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ModesSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ModeInfoPromiseClient.prototype.describeModes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ModeInfo/DescribeModes',
      request,
      metadata || {},
      methodDescriptor_ModeInfo_DescribeModes);
};


module.exports = proto.smartcore.traits;
