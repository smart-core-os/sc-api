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
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./humidity_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.HumiditySensorClient =
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
proto.smartcore.traits.HumiditySensorPromiseClient =
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
 *   !proto.smartcore.traits.GetHumidityRequest,
 *   !proto.smartcore.traits.Humidity>}
 */
const methodDescriptor_HumiditySensor_GetHumidity = new grpc.web.MethodDescriptor(
  '/smartcore.traits.HumiditySensor/GetHumidity',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetHumidityRequest,
  proto.smartcore.traits.Humidity,
  /**
   * @param {!proto.smartcore.traits.GetHumidityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Humidity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetHumidityRequest,
 *   !proto.smartcore.traits.Humidity>}
 */
const methodInfo_HumiditySensor_GetHumidity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Humidity,
  /**
   * @param {!proto.smartcore.traits.GetHumidityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Humidity.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetHumidityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Humidity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Humidity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.HumiditySensorClient.prototype.getHumidity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.HumiditySensor/GetHumidity',
      request,
      metadata || {},
      methodDescriptor_HumiditySensor_GetHumidity,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetHumidityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Humidity>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.HumiditySensorPromiseClient.prototype.getHumidity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.HumiditySensor/GetHumidity',
      request,
      metadata || {},
      methodDescriptor_HumiditySensor_GetHumidity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullHumidityRequest,
 *   !proto.smartcore.traits.PullHumidityResponse>}
 */
const methodDescriptor_HumiditySensor_PullHumidity = new grpc.web.MethodDescriptor(
  '/smartcore.traits.HumiditySensor/PullHumidity',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullHumidityRequest,
  proto.smartcore.traits.PullHumidityResponse,
  /**
   * @param {!proto.smartcore.traits.PullHumidityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullHumidityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullHumidityRequest,
 *   !proto.smartcore.traits.PullHumidityResponse>}
 */
const methodInfo_HumiditySensor_PullHumidity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullHumidityResponse,
  /**
   * @param {!proto.smartcore.traits.PullHumidityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullHumidityResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullHumidityRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullHumidityResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.HumiditySensorClient.prototype.pullHumidity =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.HumiditySensor/PullHumidity',
      request,
      metadata || {},
      methodDescriptor_HumiditySensor_PullHumidity);
};


/**
 * @param {!proto.smartcore.traits.PullHumidityRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullHumidityResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.HumiditySensorPromiseClient.prototype.pullHumidity =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.HumiditySensor/PullHumidity',
      request,
      metadata || {},
      methodDescriptor_HumiditySensor_PullHumidity);
};


module.exports = proto.smartcore.traits;

