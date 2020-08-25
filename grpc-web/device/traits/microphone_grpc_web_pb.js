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

var types_number_pb = require('../../types/number_pb.js')

var types_unit_pb = require('../../types/unit_pb.js')

var types_volume_pb = require('../../types/volume_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./microphone_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.MicrophoneClient =
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
proto.smartcore.api.device.traits.MicrophonePromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetMicrophoneGainRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodDescriptor_Microphone_GetGain = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Microphone/GetGain',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetMicrophoneGainRequest,
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.api.device.traits.GetMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Volume.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetMicrophoneGainRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodInfo_Microphone_GetGain = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.api.device.traits.GetMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Volume.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Volume)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Volume>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MicrophoneClient.prototype.getGain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Microphone/GetGain',
      request,
      metadata || {},
      methodDescriptor_Microphone_GetGain,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Volume>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.MicrophonePromiseClient.prototype.getGain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Microphone/GetGain',
      request,
      metadata || {},
      methodDescriptor_Microphone_GetGain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodDescriptor_Microphone_UpdateGain = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Microphone/UpdateGain',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest,
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Volume.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodInfo_Microphone_UpdateGain = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Volume.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Volume)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Volume>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MicrophoneClient.prototype.updateGain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Microphone/UpdateGain',
      request,
      metadata || {},
      methodDescriptor_Microphone_UpdateGain,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateMicrophoneGainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Volume>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.MicrophonePromiseClient.prototype.updateGain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Microphone/UpdateGain',
      request,
      metadata || {},
      methodDescriptor_Microphone_UpdateGain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullMicrophoneGainRequest,
 *   !proto.smartcore.api.device.traits.PullMicrophoneGainResponse>}
 */
const methodDescriptor_Microphone_PullGain = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Microphone/PullGain',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullMicrophoneGainRequest,
  proto.smartcore.api.device.traits.PullMicrophoneGainResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullMicrophoneGainResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullMicrophoneGainRequest,
 *   !proto.smartcore.api.device.traits.PullMicrophoneGainResponse>}
 */
const methodInfo_Microphone_PullGain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullMicrophoneGainResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullMicrophoneGainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullMicrophoneGainResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullMicrophoneGainRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullMicrophoneGainResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MicrophoneClient.prototype.pullGain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Microphone/PullGain',
      request,
      metadata || {},
      methodDescriptor_Microphone_PullGain);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullMicrophoneGainRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullMicrophoneGainResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.MicrophonePromiseClient.prototype.pullGain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Microphone/PullGain',
      request,
      metadata || {},
      methodDescriptor_Microphone_PullGain);
};


module.exports = proto.smartcore.api.device.traits;

