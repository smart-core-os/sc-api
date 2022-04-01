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

var types_info_pb = require('../types/info_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./occupancy_sensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.OccupancySensorApiClient =
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
proto.smartcore.traits.OccupancySensorApiPromiseClient =
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
 *   !proto.smartcore.traits.GetOccupancyRequest,
 *   !proto.smartcore.traits.Occupancy>}
 */
const methodDescriptor_OccupancySensorApi_GetOccupancy = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OccupancySensorApi/GetOccupancy',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetOccupancyRequest,
  proto.smartcore.traits.Occupancy,
  /**
   * @param {!proto.smartcore.traits.GetOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Occupancy.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetOccupancyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Occupancy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Occupancy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OccupancySensorApiClient.prototype.getOccupancy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OccupancySensorApi/GetOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancySensorApi_GetOccupancy,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetOccupancyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Occupancy>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OccupancySensorApiPromiseClient.prototype.getOccupancy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OccupancySensorApi/GetOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancySensorApi_GetOccupancy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullOccupancyRequest,
 *   !proto.smartcore.traits.PullOccupancyResponse>}
 */
const methodDescriptor_OccupancySensorApi_PullOccupancy = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OccupancySensorApi/PullOccupancy',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullOccupancyRequest,
  proto.smartcore.traits.PullOccupancyResponse,
  /**
   * @param {!proto.smartcore.traits.PullOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullOccupancyResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullOccupancyRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullOccupancyResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OccupancySensorApiClient.prototype.pullOccupancy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.OccupancySensorApi/PullOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancySensorApi_PullOccupancy);
};


/**
 * @param {!proto.smartcore.traits.PullOccupancyRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullOccupancyResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OccupancySensorApiPromiseClient.prototype.pullOccupancy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.OccupancySensorApi/PullOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancySensorApi_PullOccupancy);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.OccupancySensorInfoClient =
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
proto.smartcore.traits.OccupancySensorInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeOccupancyRequest,
 *   !proto.smartcore.traits.OccupancySupport>}
 */
const methodDescriptor_OccupancySensorInfo_DescribeOccupancy = new grpc.web.MethodDescriptor(
  '/smartcore.traits.OccupancySensorInfo/DescribeOccupancy',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeOccupancyRequest,
  proto.smartcore.traits.OccupancySupport,
  /**
   * @param {!proto.smartcore.traits.DescribeOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.OccupancySupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeOccupancyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.OccupancySupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.OccupancySupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.OccupancySensorInfoClient.prototype.describeOccupancy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.OccupancySensorInfo/DescribeOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancySensorInfo_DescribeOccupancy,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeOccupancyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.OccupancySupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.OccupancySensorInfoPromiseClient.prototype.describeOccupancy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.OccupancySensorInfo/DescribeOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancySensorInfo_DescribeOccupancy);
};


module.exports = proto.smartcore.traits;

