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

var types_number_pb = require('../types/number_pb.js')

var types_unit_pb = require('../types/unit_pb.js')

var types_volume_pb = require('../types/volume_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./microphone_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.MicrophoneApiClient =
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
proto.smartcore.traits.MicrophoneApiPromiseClient =
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
 *   !proto.smartcore.traits.GetMicrophoneGainRequest,
 *   !proto.smartcore.api.types.AudioLevel>}
 */
const methodDescriptor_MicrophoneApi_GetGain = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MicrophoneApi/GetGain',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetMicrophoneGainRequest,
  types_unit_pb.AudioLevel,
  /**
   * @param {!proto.smartcore.traits.GetMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.AudioLevel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetMicrophoneGainRequest,
 *   !proto.smartcore.api.types.AudioLevel>}
 */
const methodInfo_MicrophoneApi_GetGain = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.AudioLevel,
  /**
   * @param {!proto.smartcore.traits.GetMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.AudioLevel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.AudioLevel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.AudioLevel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MicrophoneApiClient.prototype.getGain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MicrophoneApi/GetGain',
      request,
      metadata || {},
      methodDescriptor_MicrophoneApi_GetGain,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.AudioLevel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MicrophoneApiPromiseClient.prototype.getGain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MicrophoneApi/GetGain',
      request,
      metadata || {},
      methodDescriptor_MicrophoneApi_GetGain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateMicrophoneGainRequest,
 *   !proto.smartcore.api.types.AudioLevel>}
 */
const methodDescriptor_MicrophoneApi_UpdateGain = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MicrophoneApi/UpdateGain',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateMicrophoneGainRequest,
  types_unit_pb.AudioLevel,
  /**
   * @param {!proto.smartcore.traits.UpdateMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.AudioLevel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateMicrophoneGainRequest,
 *   !proto.smartcore.api.types.AudioLevel>}
 */
const methodInfo_MicrophoneApi_UpdateGain = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.AudioLevel,
  /**
   * @param {!proto.smartcore.traits.UpdateMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.AudioLevel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.AudioLevel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.AudioLevel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MicrophoneApiClient.prototype.updateGain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.MicrophoneApi/UpdateGain',
      request,
      metadata || {},
      methodDescriptor_MicrophoneApi_UpdateGain,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.AudioLevel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.MicrophoneApiPromiseClient.prototype.updateGain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.MicrophoneApi/UpdateGain',
      request,
      metadata || {},
      methodDescriptor_MicrophoneApi_UpdateGain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullMicrophoneGainRequest,
 *   !proto.smartcore.traits.PullMicrophoneGainResponse>}
 */
const methodDescriptor_MicrophoneApi_PullGain = new grpc.web.MethodDescriptor(
  '/smartcore.traits.MicrophoneApi/PullGain',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullMicrophoneGainRequest,
  proto.smartcore.traits.PullMicrophoneGainResponse,
  /**
   * @param {!proto.smartcore.traits.PullMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullMicrophoneGainResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullMicrophoneGainRequest,
 *   !proto.smartcore.traits.PullMicrophoneGainResponse>}
 */
const methodInfo_MicrophoneApi_PullGain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullMicrophoneGainResponse,
  /**
   * @param {!proto.smartcore.traits.PullMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullMicrophoneGainResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullMicrophoneGainRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMicrophoneGainResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MicrophoneApiClient.prototype.pullGain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MicrophoneApi/PullGain',
      request,
      metadata || {},
      methodDescriptor_MicrophoneApi_PullGain);
};


/**
 * @param {!proto.smartcore.traits.PullMicrophoneGainRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullMicrophoneGainResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.MicrophoneApiPromiseClient.prototype.pullGain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.MicrophoneApi/PullGain',
      request,
      metadata || {},
      methodDescriptor_MicrophoneApi_PullGain);
};


module.exports = proto.smartcore.traits;

