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


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./emergency_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.EmergencyApiClient =
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
proto.smartcore.api.device.traits.EmergencyApiPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetEmergencyRequest,
 *   !proto.smartcore.api.device.traits.Emergency>}
 */
const methodDescriptor_EmergencyApi_GetEmergency = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.EmergencyApi/GetEmergency',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetEmergencyRequest,
  proto.smartcore.api.device.traits.Emergency,
  /**
   * @param {!proto.smartcore.api.device.traits.GetEmergencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Emergency.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetEmergencyRequest,
 *   !proto.smartcore.api.device.traits.Emergency>}
 */
const methodInfo_EmergencyApi_GetEmergency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Emergency,
  /**
   * @param {!proto.smartcore.api.device.traits.GetEmergencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Emergency.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetEmergencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Emergency)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Emergency>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.EmergencyApiClient.prototype.getEmergency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.EmergencyApi/GetEmergency',
      request,
      metadata || {},
      methodDescriptor_EmergencyApi_GetEmergency,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetEmergencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Emergency>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.EmergencyApiPromiseClient.prototype.getEmergency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.EmergencyApi/GetEmergency',
      request,
      metadata || {},
      methodDescriptor_EmergencyApi_GetEmergency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateEmergencyRequest,
 *   !proto.smartcore.api.device.traits.Emergency>}
 */
const methodDescriptor_EmergencyApi_UpdateEmergency = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.EmergencyApi/UpdateEmergency',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateEmergencyRequest,
  proto.smartcore.api.device.traits.Emergency,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateEmergencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Emergency.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateEmergencyRequest,
 *   !proto.smartcore.api.device.traits.Emergency>}
 */
const methodInfo_EmergencyApi_UpdateEmergency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Emergency,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateEmergencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Emergency.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateEmergencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Emergency)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Emergency>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.EmergencyApiClient.prototype.updateEmergency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.EmergencyApi/UpdateEmergency',
      request,
      metadata || {},
      methodDescriptor_EmergencyApi_UpdateEmergency,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateEmergencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Emergency>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.EmergencyApiPromiseClient.prototype.updateEmergency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.EmergencyApi/UpdateEmergency',
      request,
      metadata || {},
      methodDescriptor_EmergencyApi_UpdateEmergency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullEmergencyRequest,
 *   !proto.smartcore.api.device.traits.PullEmergencyResponse>}
 */
const methodDescriptor_EmergencyApi_PullEmergency = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.EmergencyApi/PullEmergency',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullEmergencyRequest,
  proto.smartcore.api.device.traits.PullEmergencyResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullEmergencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullEmergencyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullEmergencyRequest,
 *   !proto.smartcore.api.device.traits.PullEmergencyResponse>}
 */
const methodInfo_EmergencyApi_PullEmergency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullEmergencyResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullEmergencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullEmergencyResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullEmergencyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullEmergencyResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.EmergencyApiClient.prototype.pullEmergency =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.EmergencyApi/PullEmergency',
      request,
      metadata || {},
      methodDescriptor_EmergencyApi_PullEmergency);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullEmergencyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullEmergencyResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.EmergencyApiPromiseClient.prototype.pullEmergency =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.EmergencyApi/PullEmergency',
      request,
      metadata || {},
      methodDescriptor_EmergencyApi_PullEmergency);
};


module.exports = proto.smartcore.api.device.traits;

