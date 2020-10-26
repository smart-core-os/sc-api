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

var types_connection_pb = require('../types/connection_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.HealthClient =
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
proto.smartcore.traits.HealthPromiseClient =
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
 *   !proto.smartcore.traits.GetHealthStateRequest,
 *   !proto.smartcore.traits.HealthState>}
 */
const methodDescriptor_Health_GetHealthState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Health/GetHealthState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetHealthStateRequest,
  proto.smartcore.traits.HealthState,
  /**
   * @param {!proto.smartcore.traits.GetHealthStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.HealthState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetHealthStateRequest,
 *   !proto.smartcore.traits.HealthState>}
 */
const methodInfo_Health_GetHealthState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.HealthState,
  /**
   * @param {!proto.smartcore.traits.GetHealthStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.HealthState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetHealthStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.HealthState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.HealthState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.HealthClient.prototype.getHealthState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Health/GetHealthState',
      request,
      metadata || {},
      methodDescriptor_Health_GetHealthState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetHealthStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.HealthState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.HealthPromiseClient.prototype.getHealthState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Health/GetHealthState',
      request,
      metadata || {},
      methodDescriptor_Health_GetHealthState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullHealthStatesRequest,
 *   !proto.smartcore.traits.PullHealthStatesResponse>}
 */
const methodDescriptor_Health_PullHealthStates = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Health/PullHealthStates',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullHealthStatesRequest,
  proto.smartcore.traits.PullHealthStatesResponse,
  /**
   * @param {!proto.smartcore.traits.PullHealthStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullHealthStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullHealthStatesRequest,
 *   !proto.smartcore.traits.PullHealthStatesResponse>}
 */
const methodInfo_Health_PullHealthStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullHealthStatesResponse,
  /**
   * @param {!proto.smartcore.traits.PullHealthStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullHealthStatesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullHealthStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullHealthStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.HealthClient.prototype.pullHealthStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Health/PullHealthStates',
      request,
      metadata || {},
      methodDescriptor_Health_PullHealthStates);
};


/**
 * @param {!proto.smartcore.traits.PullHealthStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullHealthStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.HealthPromiseClient.prototype.pullHealthStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Health/PullHealthStates',
      request,
      metadata || {},
      methodDescriptor_Health_PullHealthStates);
};


module.exports = proto.smartcore.traits;

