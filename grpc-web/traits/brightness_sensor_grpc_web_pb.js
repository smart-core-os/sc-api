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

var types_info_pb = require('../types/info_pb.js')

var types_number_pb = require('../types/number_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./brightness_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.BrightnessSensorApiClient =
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
proto.smartcore.traits.BrightnessSensorApiPromiseClient =
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
 *   !proto.smartcore.traits.GetAmbientBrightnessRequest,
 *   !proto.smartcore.traits.AmbientBrightness>}
 */
const methodDescriptor_BrightnessSensorApi_GetAmbientBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.traits.BrightnessSensorApi/GetAmbientBrightness',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetAmbientBrightnessRequest,
  proto.smartcore.traits.AmbientBrightness,
  /**
   * @param {!proto.smartcore.traits.GetAmbientBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AmbientBrightness.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetAmbientBrightnessRequest,
 *   !proto.smartcore.traits.AmbientBrightness>}
 */
const methodInfo_BrightnessSensorApi_GetAmbientBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.AmbientBrightness,
  /**
   * @param {!proto.smartcore.traits.GetAmbientBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AmbientBrightness.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetAmbientBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.AmbientBrightness)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AmbientBrightness>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessSensorApiClient.prototype.getAmbientBrightness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.BrightnessSensorApi/GetAmbientBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessSensorApi_GetAmbientBrightness,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetAmbientBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AmbientBrightness>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.BrightnessSensorApiPromiseClient.prototype.getAmbientBrightness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.BrightnessSensorApi/GetAmbientBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessSensorApi_GetAmbientBrightness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullAmbientBrightnessRequest,
 *   !proto.smartcore.traits.PullAmbientBrightnessResponse>}
 */
const methodDescriptor_BrightnessSensorApi_PullAmbientBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.traits.BrightnessSensorApi/PullAmbientBrightness',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullAmbientBrightnessRequest,
  proto.smartcore.traits.PullAmbientBrightnessResponse,
  /**
   * @param {!proto.smartcore.traits.PullAmbientBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAmbientBrightnessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullAmbientBrightnessRequest,
 *   !proto.smartcore.traits.PullAmbientBrightnessResponse>}
 */
const methodInfo_BrightnessSensorApi_PullAmbientBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullAmbientBrightnessResponse,
  /**
   * @param {!proto.smartcore.traits.PullAmbientBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAmbientBrightnessResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullAmbientBrightnessRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAmbientBrightnessResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessSensorApiClient.prototype.pullAmbientBrightness =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.BrightnessSensorApi/PullAmbientBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessSensorApi_PullAmbientBrightness);
};


/**
 * @param {!proto.smartcore.traits.PullAmbientBrightnessRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAmbientBrightnessResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessSensorApiPromiseClient.prototype.pullAmbientBrightness =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.BrightnessSensorApi/PullAmbientBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessSensorApi_PullAmbientBrightness);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.BrightnessSensorInfoClient =
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
proto.smartcore.traits.BrightnessSensorInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeAmbientBrightnessRequest,
 *   !proto.smartcore.traits.AmbientBrightnessSupport>}
 */
const methodDescriptor_BrightnessSensorInfo_DescribeAmbientBrightness = new grpc.web.MethodDescriptor(
  '/smartcore.traits.BrightnessSensorInfo/DescribeAmbientBrightness',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeAmbientBrightnessRequest,
  proto.smartcore.traits.AmbientBrightnessSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeAmbientBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AmbientBrightnessSupport.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.DescribeAmbientBrightnessRequest,
 *   !proto.smartcore.traits.AmbientBrightnessSupport>}
 */
const methodInfo_BrightnessSensorInfo_DescribeAmbientBrightness = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.AmbientBrightnessSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeAmbientBrightnessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AmbientBrightnessSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeAmbientBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.AmbientBrightnessSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AmbientBrightnessSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.BrightnessSensorInfoClient.prototype.describeAmbientBrightness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.BrightnessSensorInfo/DescribeAmbientBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessSensorInfo_DescribeAmbientBrightness,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeAmbientBrightnessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AmbientBrightnessSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.BrightnessSensorInfoPromiseClient.prototype.describeAmbientBrightness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.BrightnessSensorInfo/DescribeAmbientBrightness',
      request,
      metadata || {},
      methodDescriptor_BrightnessSensorInfo_DescribeAmbientBrightness);
};


module.exports = proto.smartcore.traits;

