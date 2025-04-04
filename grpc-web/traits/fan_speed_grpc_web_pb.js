/**
 * @fileoverview gRPC-Web generated client stub for smartcore.traits
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: traits/fan_speed.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_info_pb = require('../types/info_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./fan_speed_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.FanSpeedApiClient =
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
proto.smartcore.traits.FanSpeedApiPromiseClient =
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
 *   !proto.smartcore.traits.GetFanSpeedRequest,
 *   !proto.smartcore.traits.FanSpeed>}
 */
const methodDescriptor_FanSpeedApi_GetFanSpeed = new grpc.web.MethodDescriptor(
  '/smartcore.traits.FanSpeedApi/GetFanSpeed',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetFanSpeedRequest,
  proto.smartcore.traits.FanSpeed,
  /**
   * @param {!proto.smartcore.traits.GetFanSpeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.FanSpeed.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetFanSpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.FanSpeed)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.FanSpeed>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.FanSpeedApiClient.prototype.getFanSpeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/GetFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_GetFanSpeed,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetFanSpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.FanSpeed>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.FanSpeedApiPromiseClient.prototype.getFanSpeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/GetFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_GetFanSpeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateFanSpeedRequest,
 *   !proto.smartcore.traits.FanSpeed>}
 */
const methodDescriptor_FanSpeedApi_UpdateFanSpeed = new grpc.web.MethodDescriptor(
  '/smartcore.traits.FanSpeedApi/UpdateFanSpeed',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateFanSpeedRequest,
  proto.smartcore.traits.FanSpeed,
  /**
   * @param {!proto.smartcore.traits.UpdateFanSpeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.FanSpeed.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateFanSpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.FanSpeed)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.FanSpeed>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.FanSpeedApiClient.prototype.updateFanSpeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/UpdateFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_UpdateFanSpeed,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateFanSpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.FanSpeed>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.FanSpeedApiPromiseClient.prototype.updateFanSpeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/UpdateFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_UpdateFanSpeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullFanSpeedRequest,
 *   !proto.smartcore.traits.PullFanSpeedResponse>}
 */
const methodDescriptor_FanSpeedApi_PullFanSpeed = new grpc.web.MethodDescriptor(
  '/smartcore.traits.FanSpeedApi/PullFanSpeed',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullFanSpeedRequest,
  proto.smartcore.traits.PullFanSpeedResponse,
  /**
   * @param {!proto.smartcore.traits.PullFanSpeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullFanSpeedResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullFanSpeedRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullFanSpeedResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.FanSpeedApiClient.prototype.pullFanSpeed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/PullFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_PullFanSpeed);
};


/**
 * @param {!proto.smartcore.traits.PullFanSpeedRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullFanSpeedResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.FanSpeedApiPromiseClient.prototype.pullFanSpeed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/PullFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_PullFanSpeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.ReverseFanSpeedDirectionRequest,
 *   !proto.smartcore.traits.FanSpeed>}
 */
const methodDescriptor_FanSpeedApi_ReverseFanSpeedDirection = new grpc.web.MethodDescriptor(
  '/smartcore.traits.FanSpeedApi/ReverseFanSpeedDirection',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.ReverseFanSpeedDirectionRequest,
  proto.smartcore.traits.FanSpeed,
  /**
   * @param {!proto.smartcore.traits.ReverseFanSpeedDirectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.FanSpeed.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.ReverseFanSpeedDirectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.FanSpeed)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.FanSpeed>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.FanSpeedApiClient.prototype.reverseFanSpeedDirection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/ReverseFanSpeedDirection',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_ReverseFanSpeedDirection,
      callback);
};


/**
 * @param {!proto.smartcore.traits.ReverseFanSpeedDirectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.FanSpeed>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.FanSpeedApiPromiseClient.prototype.reverseFanSpeedDirection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.FanSpeedApi/ReverseFanSpeedDirection',
      request,
      metadata || {},
      methodDescriptor_FanSpeedApi_ReverseFanSpeedDirection);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.FanSpeedInfoClient =
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
proto.smartcore.traits.FanSpeedInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeFanSpeedRequest,
 *   !proto.smartcore.traits.FanSpeedSupport>}
 */
const methodDescriptor_FanSpeedInfo_DescribeFanSpeed = new grpc.web.MethodDescriptor(
  '/smartcore.traits.FanSpeedInfo/DescribeFanSpeed',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeFanSpeedRequest,
  proto.smartcore.traits.FanSpeedSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeFanSpeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.FanSpeedSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeFanSpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.FanSpeedSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.FanSpeedSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.FanSpeedInfoClient.prototype.describeFanSpeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.FanSpeedInfo/DescribeFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedInfo_DescribeFanSpeed,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeFanSpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.FanSpeedSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.FanSpeedInfoPromiseClient.prototype.describeFanSpeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.FanSpeedInfo/DescribeFanSpeed',
      request,
      metadata || {},
      methodDescriptor_FanSpeedInfo_DescribeFanSpeed);
};


module.exports = proto.smartcore.traits;

