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
proto.smartcore.traits = require('./brightness_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.BrightnessApiClient =
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
proto.smartcore.traits.BrightnessApiPromiseClient =
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
 *   !proto.smartcore.traits.UpdateBrightnessRequest,
 *   !proto.smartcore.traits.Brightness>}
 */
const methodDescriptor_BrightnessApi_UpdateBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.traits.BrightnessApi/UpdateBrightness',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateBrightnessRequest,
  proto.smartcore.traits.Brightness,
  /**
   * @param {!proto.smartcore.traits.UpdateBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Brightness.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateBrightnessRequest,
 *   !proto.smartcore.traits.Brightness>}
 */
const methodInfo_BrightnessApi_UpdateBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Brightness,
  /**
   * @param {!proto.smartcore.traits.UpdateBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Brightness.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Brightness)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Brightness>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessApiClient.prototype.updateBrightness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.BrightnessApi/UpdateBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_UpdateBrightness,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Brightness>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.BrightnessApiPromiseClient.prototype.updateBrightness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.BrightnessApi/UpdateBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_UpdateBrightness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetBrightnessRequest,
 *   !proto.smartcore.traits.Brightness>}
 */
const methodDescriptor_BrightnessApi_GetBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.traits.BrightnessApi/GetBrightness',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetBrightnessRequest,
  proto.smartcore.traits.Brightness,
  /**
   * @param {!proto.smartcore.traits.GetBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Brightness.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetBrightnessRequest,
 *   !proto.smartcore.traits.Brightness>}
 */
const methodInfo_BrightnessApi_GetBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Brightness,
  /**
   * @param {!proto.smartcore.traits.GetBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Brightness.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Brightness)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Brightness>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessApiClient.prototype.getBrightness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.BrightnessApi/GetBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_GetBrightness,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Brightness>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.BrightnessApiPromiseClient.prototype.getBrightness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.BrightnessApi/GetBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_GetBrightness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullBrightnessRequest,
 *   !proto.smartcore.traits.PullBrightnessResponse>}
 */
const methodDescriptor_BrightnessApi_PullBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.traits.BrightnessApi/PullBrightness',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullBrightnessRequest,
  proto.smartcore.traits.PullBrightnessResponse,
  /**
   * @param {!proto.smartcore.traits.PullBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullBrightnessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullBrightnessRequest,
 *   !proto.smartcore.traits.PullBrightnessResponse>}
 */
const methodInfo_BrightnessApi_PullBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullBrightnessResponse,
  /**
   * @param {!proto.smartcore.traits.PullBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullBrightnessResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullBrightnessRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullBrightnessResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessApiClient.prototype.pullBrightness =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.BrightnessApi/PullBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_PullBrightness);
};


/**
 * @param {!proto.smartcore.traits.PullBrightnessRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullBrightnessResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessApiPromiseClient.prototype.pullBrightness =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.BrightnessApi/PullBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_PullBrightness);
};


module.exports = proto.smartcore.traits;

