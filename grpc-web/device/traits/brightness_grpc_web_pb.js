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
proto.smartcore.api.device.traits = require('./brightness_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.BrightnessApiClient =
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
proto.smartcore.api.device.traits.BrightnessApiPromiseClient =
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
 *   !proto.smartcore.api.device.traits.UpdateBrightnessRequest,
 *   !proto.smartcore.api.device.traits.Brightness>}
 */
const methodDescriptor_BrightnessApi_UpdateRangeValue = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BrightnessApi/UpdateRangeValue',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateBrightnessRequest,
  proto.smartcore.api.device.traits.Brightness,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Brightness.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateBrightnessRequest,
 *   !proto.smartcore.api.device.traits.Brightness>}
 */
const methodInfo_BrightnessApi_UpdateRangeValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Brightness,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Brightness.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Brightness)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Brightness>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BrightnessApiClient.prototype.updateRangeValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BrightnessApi/UpdateRangeValue',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_UpdateRangeValue,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Brightness>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BrightnessApiPromiseClient.prototype.updateRangeValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BrightnessApi/UpdateRangeValue',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_UpdateRangeValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.GetBrightnessRequest,
 *   !proto.smartcore.api.device.traits.Brightness>}
 */
const methodDescriptor_BrightnessApi_GetBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BrightnessApi/GetBrightness',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetBrightnessRequest,
  proto.smartcore.api.device.traits.Brightness,
  /**
   * @param {!proto.smartcore.api.device.traits.GetBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Brightness.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetBrightnessRequest,
 *   !proto.smartcore.api.device.traits.Brightness>}
 */
const methodInfo_BrightnessApi_GetBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Brightness,
  /**
   * @param {!proto.smartcore.api.device.traits.GetBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Brightness.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Brightness)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Brightness>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BrightnessApiClient.prototype.getBrightness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BrightnessApi/GetBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_GetBrightness,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Brightness>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BrightnessApiPromiseClient.prototype.getBrightness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BrightnessApi/GetBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_GetBrightness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullBrightnessRequest,
 *   !proto.smartcore.api.device.traits.PullBrightnessResponse>}
 */
const methodDescriptor_BrightnessApi_PullBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BrightnessApi/PullBrightness',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullBrightnessRequest,
  proto.smartcore.api.device.traits.PullBrightnessResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullBrightnessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullBrightnessRequest,
 *   !proto.smartcore.api.device.traits.PullBrightnessResponse>}
 */
const methodInfo_BrightnessApi_PullBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullBrightnessResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullBrightnessResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullBrightnessRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullBrightnessResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BrightnessApiClient.prototype.pullBrightness =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.BrightnessApi/PullBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_PullBrightness);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullBrightnessRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullBrightnessResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BrightnessApiPromiseClient.prototype.pullBrightness =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.BrightnessApi/PullBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessApi_PullBrightness);
};


module.exports = proto.smartcore.api.device.traits;

