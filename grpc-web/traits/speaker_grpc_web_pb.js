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
proto.smartcore.traits = require('./speaker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.SpeakerClient =
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
proto.smartcore.traits.SpeakerPromiseClient =
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
 *   !proto.smartcore.traits.GetSpeakerVolumeRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodDescriptor_Speaker_GetVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Speaker/GetVolume',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetSpeakerVolumeRequest,
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request
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
 *   !proto.smartcore.traits.GetSpeakerVolumeRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodInfo_Speaker_GetVolume = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Volume.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Volume)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Volume>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerClient.prototype.getVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Speaker/GetVolume',
      request,
      metadata || {},
      methodDescriptor_Speaker_GetVolume,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Volume>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.SpeakerPromiseClient.prototype.getVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Speaker/GetVolume',
      request,
      metadata || {},
      methodDescriptor_Speaker_GetVolume);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateSpeakerVolumeRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodDescriptor_Speaker_UpdateVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Speaker/UpdateVolume',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateSpeakerVolumeRequest,
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request
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
 *   !proto.smartcore.traits.UpdateSpeakerVolumeRequest,
 *   !proto.smartcore.api.types.Volume>}
 */
const methodInfo_Speaker_UpdateVolume = new grpc.web.AbstractClientBase.MethodInfo(
  types_unit_pb.Volume,
  /**
   * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.Volume.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.types.Volume)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.types.Volume>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerClient.prototype.updateVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Speaker/UpdateVolume',
      request,
      metadata || {},
      methodDescriptor_Speaker_UpdateVolume,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.types.Volume>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.SpeakerPromiseClient.prototype.updateVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Speaker/UpdateVolume',
      request,
      metadata || {},
      methodDescriptor_Speaker_UpdateVolume);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullSpeakerVolumeRequest,
 *   !proto.smartcore.traits.PullSpeakerVolumeResponse>}
 */
const methodDescriptor_Speaker_PullVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Speaker/PullVolume',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullSpeakerVolumeRequest,
  proto.smartcore.traits.PullSpeakerVolumeResponse,
  /**
   * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullSpeakerVolumeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullSpeakerVolumeRequest,
 *   !proto.smartcore.traits.PullSpeakerVolumeResponse>}
 */
const methodInfo_Speaker_PullVolume = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullSpeakerVolumeResponse,
  /**
   * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullSpeakerVolumeResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullSpeakerVolumeResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerClient.prototype.pullVolume =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Speaker/PullVolume',
      request,
      metadata || {},
      methodDescriptor_Speaker_PullVolume);
};


/**
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullSpeakerVolumeResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerPromiseClient.prototype.pullVolume =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Speaker/PullVolume',
      request,
      metadata || {},
      methodDescriptor_Speaker_PullVolume);
};


module.exports = proto.smartcore.traits;
