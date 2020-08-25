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

var types_connection_pb = require('../../types/connection_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.HealthClient =
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
proto.smartcore.api.device.traits.HealthPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetHealthStateRequest,
 *   !proto.smartcore.api.device.traits.HealthState>}
 */
const methodDescriptor_Health_GetHealthState = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Health/GetHealthState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetHealthStateRequest,
  proto.smartcore.api.device.traits.HealthState,
  /**
   * @param {!proto.smartcore.api.device.traits.GetHealthStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.HealthState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetHealthStateRequest,
 *   !proto.smartcore.api.device.traits.HealthState>}
 */
const methodInfo_Health_GetHealthState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.HealthState,
  /**
   * @param {!proto.smartcore.api.device.traits.GetHealthStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.HealthState.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetHealthStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.HealthState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.HealthState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.HealthClient.prototype.getHealthState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Health/GetHealthState',
      request,
      metadata || {},
      methodDescriptor_Health_GetHealthState,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetHealthStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.HealthState>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.HealthPromiseClient.prototype.getHealthState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Health/GetHealthState',
      request,
      metadata || {},
      methodDescriptor_Health_GetHealthState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullHealthStatesRequest,
 *   !proto.smartcore.api.device.traits.PullHealthStatesResponse>}
 */
const methodDescriptor_Health_PullHealthStates = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Health/PullHealthStates',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullHealthStatesRequest,
  proto.smartcore.api.device.traits.PullHealthStatesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullHealthStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullHealthStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullHealthStatesRequest,
 *   !proto.smartcore.api.device.traits.PullHealthStatesResponse>}
 */
const methodInfo_Health_PullHealthStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullHealthStatesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullHealthStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullHealthStatesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullHealthStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullHealthStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.HealthClient.prototype.pullHealthStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Health/PullHealthStates',
      request,
      metadata || {},
      methodDescriptor_Health_PullHealthStates);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullHealthStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullHealthStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.HealthPromiseClient.prototype.pullHealthStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Health/PullHealthStates',
      request,
      metadata || {},
      methodDescriptor_Health_PullHealthStates);
};


module.exports = proto.smartcore.api.device.traits;

