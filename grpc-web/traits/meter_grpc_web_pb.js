/**
 * @fileoverview gRPC-Web generated client stub for smartcore.traits
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: traits/meter.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_info_pb = require('../types/info_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./meter_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MeterApiClient =
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
proto.smartcore.traits.MeterApiPromiseClient =
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
 *   !proto.smartcore.traits.GetMeterReadingRequest,
 *   !proto.smartcore.traits.MeterReading>}
 */
const methodDescriptor_MeterApi_GetMeterReading = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MeterApi/GetMeterReading',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetMeterReadingRequest,
  proto.smartcore.traits.MeterReading,
  /**
   * @param {!proto.smartcore.traits.GetMeterReadingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.MeterReading.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetMeterReadingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.MeterReading)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.MeterReading>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MeterApiClient.prototype.getMeterReading =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MeterApi/GetMeterReading',
      request,
      metadata || {},
      methodDescriptor_MeterApi_GetMeterReading,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetMeterReadingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.MeterReading>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MeterApiPromiseClient.prototype.getMeterReading =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MeterApi/GetMeterReading',
      request,
      metadata || {},
      methodDescriptor_MeterApi_GetMeterReading);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullMeterReadingsRequest,
 *   !proto.smartcore.traits.PullMeterReadingsResponse>}
 */
const methodDescriptor_MeterApi_PullMeterReadings = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MeterApi/PullMeterReadings',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullMeterReadingsRequest,
  proto.smartcore.traits.PullMeterReadingsResponse,
  /**
   * @param {!proto.smartcore.traits.PullMeterReadingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullMeterReadingsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullMeterReadingsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMeterReadingsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MeterApiClient.prototype.pullMeterReadings =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MeterApi/PullMeterReadings',
      request,
      metadata || {},
      methodDescriptor_MeterApi_PullMeterReadings);
};


/**
 * @param {!proto.smartcore.traits.PullMeterReadingsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMeterReadingsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MeterApiPromiseClient.prototype.pullMeterReadings =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MeterApi/PullMeterReadings',
      request,
      metadata || {},
      methodDescriptor_MeterApi_PullMeterReadings);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MeterInfoClient =
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
proto.smartcore.traits.MeterInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeMeterReadingRequest,
 *   !proto.smartcore.traits.MeterReadingSupport>}
 */
const methodDescriptor_MeterInfo_DescribeMeterReading = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MeterInfo/DescribeMeterReading',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeMeterReadingRequest,
  proto.smartcore.traits.MeterReadingSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeMeterReadingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.MeterReadingSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeMeterReadingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.MeterReadingSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.MeterReadingSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MeterInfoClient.prototype.describeMeterReading =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MeterInfo/DescribeMeterReading',
      request,
      metadata || {},
      methodDescriptor_MeterInfo_DescribeMeterReading,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeMeterReadingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.MeterReadingSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MeterInfoPromiseClient.prototype.describeMeterReading =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MeterInfo/DescribeMeterReading',
      request,
      metadata || {},
      methodDescriptor_MeterInfo_DescribeMeterReading);
};


module.exports = proto.smartcore.traits;

