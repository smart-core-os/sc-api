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

var types_image_pb = require('../types/image_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./enter_leave_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.EnterLeaveSensorApiClient =
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
proto.smartcore.traits.EnterLeaveSensorApiPromiseClient =
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
 *   !proto.smartcore.traits.PullEnterLeaveEventsRequest,
 *   !proto.smartcore.traits.PullEnterLeaveEventsResponse>}
 */
const methodDescriptor_EnterLeaveSensorApi_PullEnterLeaveEvents = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnterLeaveSensorApi/PullEnterLeaveEvents',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullEnterLeaveEventsRequest,
  proto.smartcore.traits.PullEnterLeaveEventsResponse,
  /**
   * @param {!proto.smartcore.traits.PullEnterLeaveEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullEnterLeaveEventsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullEnterLeaveEventsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullEnterLeaveEventsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnterLeaveSensorApiClient.prototype.pullEnterLeaveEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.EnterLeaveSensorApi/PullEnterLeaveEvents',
      request,
      metadata || {},
      methodDescriptor_EnterLeaveSensorApi_PullEnterLeaveEvents);
};


/**
 * @param {!proto.smartcore.traits.PullEnterLeaveEventsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullEnterLeaveEventsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnterLeaveSensorApiPromiseClient.prototype.pullEnterLeaveEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.EnterLeaveSensorApi/PullEnterLeaveEvents',
      request,
      metadata || {},
      methodDescriptor_EnterLeaveSensorApi_PullEnterLeaveEvents);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.EnterLeaveSensorInfoClient =
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
proto.smartcore.traits.EnterLeaveSensorInfoPromiseClient =
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


module.exports = proto.smartcore.traits;

