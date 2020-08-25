/**
 * @fileoverview gRPC-Web generated client stub for smartcore.api.device.info
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var types_change_pb = require('../../types/change_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.info = require('./info_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.info.InfoClient =
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
proto.smartcore.api.device.info.InfoPromiseClient =
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
 *   !proto.smartcore.api.device.info.ListDevicesRequest,
 *   !proto.smartcore.api.device.info.ListDevicesResponse>}
 */
const methodDescriptor_Info_ListDevices = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.info.Info/ListDevices',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.info.ListDevicesRequest,
  proto.smartcore.api.device.info.ListDevicesResponse,
  /**
   * @param {!proto.smartcore.api.device.info.ListDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.ListDevicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.info.ListDevicesRequest,
 *   !proto.smartcore.api.device.info.ListDevicesResponse>}
 */
const methodInfo_Info_ListDevices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.info.ListDevicesResponse,
  /**
   * @param {!proto.smartcore.api.device.info.ListDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.ListDevicesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.info.ListDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.info.ListDevicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.ListDevicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.InfoClient.prototype.listDevices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.info.Info/ListDevices',
      request,
      metadata || {},
      methodDescriptor_Info_ListDevices,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.info.ListDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.info.ListDevicesResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.info.InfoPromiseClient.prototype.listDevices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.info.Info/ListDevices',
      request,
      metadata || {},
      methodDescriptor_Info_ListDevices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.info.PullDevicesRequest,
 *   !proto.smartcore.api.device.info.PullDevicesResponse>}
 */
const methodDescriptor_Info_PullDevices = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.info.Info/PullDevices',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.info.PullDevicesRequest,
  proto.smartcore.api.device.info.PullDevicesResponse,
  /**
   * @param {!proto.smartcore.api.device.info.PullDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.PullDevicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.info.PullDevicesRequest,
 *   !proto.smartcore.api.device.info.PullDevicesResponse>}
 */
const methodInfo_Info_PullDevices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.info.PullDevicesResponse,
  /**
   * @param {!proto.smartcore.api.device.info.PullDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.PullDevicesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.info.PullDevicesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.PullDevicesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.InfoClient.prototype.pullDevices =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.info.Info/PullDevices',
      request,
      metadata || {},
      methodDescriptor_Info_PullDevices);
};


/**
 * @param {!proto.smartcore.api.device.info.PullDevicesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.PullDevicesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.InfoPromiseClient.prototype.pullDevices =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.info.Info/PullDevices',
      request,
      metadata || {},
      methodDescriptor_Info_PullDevices);
};


module.exports = proto.smartcore.api.device.info;

