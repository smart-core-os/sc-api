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

var types_unit_pb = require('../../types/unit_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./temperature_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.TemperatureSensorClient =
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
proto.smartcore.api.device.traits.TemperatureSensorPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetTemperatureRequest,
 *   !proto.smartcore.api.types.Temperature>}
 */
const methodDescriptor_TemperatureSensor_GetTemperature = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.TemperatureSensor/GetTemperature',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetTemperatureRequest,
  types_unit_pb.Temperature,
  /**
   * @param {!proto.smartcore.api.device.traits.GetTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Temperature.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetTemperatureRequest,
 *   !proto.smartcore.api.types.Temperature>}
 */
const methodInfo_TemperatureSensor_GetTemperature = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.Temperature,
  /**
   * @param {!proto.smartcore.api.device.traits.GetTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Temperature.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetTemperatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Temperature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Temperature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.TemperatureSensorClient.prototype.getTemperature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.TemperatureSensor/GetTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureSensor_GetTemperature,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetTemperatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Temperature>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.TemperatureSensorPromiseClient.prototype.getTemperature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.TemperatureSensor/GetTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureSensor_GetTemperature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullTemperatureRequest,
 *   !proto.smartcore.api.device.traits.PullTemperatureResponse>}
 */
const methodDescriptor_TemperatureSensor_PullTemperature = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.TemperatureSensor/PullTemperature',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullTemperatureRequest,
  proto.smartcore.api.device.traits.PullTemperatureResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullTemperatureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullTemperatureRequest,
 *   !proto.smartcore.api.device.traits.PullTemperatureResponse>}
 */
const methodInfo_TemperatureSensor_PullTemperature = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullTemperatureResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullTemperatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullTemperatureResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullTemperatureRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullTemperatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.TemperatureSensorClient.prototype.pullTemperature =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.TemperatureSensor/PullTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureSensor_PullTemperature);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullTemperatureRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullTemperatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.TemperatureSensorPromiseClient.prototype.pullTemperature =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.TemperatureSensor/PullTemperature',
      request,
      metadata || {},
      methodDescriptor_TemperatureSensor_PullTemperature);
};


module.exports = proto.smartcore.api.device.traits;

