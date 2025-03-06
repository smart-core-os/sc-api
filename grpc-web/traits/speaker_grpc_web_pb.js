/**
 * @fileoverview gRPC-Web generated client stub for smartcore.traits
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.1
// source: traits/speaker.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var types_info_pb = require('../types/info_pb.js')

var types_number_pb = require('../types/number_pb.js')

var types_unit_pb = require('../types/unit_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./speaker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.SpeakerApiClient =
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
proto.smartcore.traits.SpeakerApiPromiseClient =
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
 *   !proto.smartcore.traits.GetSpeakerVolumeRequest,
 *   !proto.smartcore.types.AudioLevel>}
 */
const methodDescriptor_SpeakerApi_GetVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.SpeakerApi/GetVolume',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetSpeakerVolumeRequest,
  types_unit_pb.AudioLevel,
  /**
   * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.AudioLevel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.types.AudioLevel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.types.AudioLevel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerApiClient.prototype.getVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.SpeakerApi/GetVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerApi_GetVolume,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.types.AudioLevel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.SpeakerApiPromiseClient.prototype.getVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.SpeakerApi/GetVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerApi_GetVolume);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateSpeakerVolumeRequest,
 *   !proto.smartcore.types.AudioLevel>}
 */
const methodDescriptor_SpeakerApi_UpdateVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.SpeakerApi/UpdateVolume',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateSpeakerVolumeRequest,
  types_unit_pb.AudioLevel,
  /**
   * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  types_unit_pb.AudioLevel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.types.AudioLevel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.types.AudioLevel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerApiClient.prototype.updateVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.SpeakerApi/UpdateVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerApi_UpdateVolume,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.types.AudioLevel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.SpeakerApiPromiseClient.prototype.updateVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.SpeakerApi/UpdateVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerApi_UpdateVolume);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullSpeakerVolumeRequest,
 *   !proto.smartcore.traits.PullSpeakerVolumeResponse>}
 */
const methodDescriptor_SpeakerApi_PullVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.SpeakerApi/PullVolume',
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
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullSpeakerVolumeResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerApiClient.prototype.pullVolume =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.SpeakerApi/PullVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerApi_PullVolume);
};


/**
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullSpeakerVolumeResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerApiPromiseClient.prototype.pullVolume =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.SpeakerApi/PullVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerApi_PullVolume);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.SpeakerInfoClient =
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
proto.smartcore.traits.SpeakerInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeVolumeRequest,
 *   !proto.smartcore.traits.VolumeSupport>}
 */
const methodDescriptor_SpeakerInfo_DescribeVolume = new grpc.web.MethodDescriptor(
  '/smartcore.traits.SpeakerInfo/DescribeVolume',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeVolumeRequest,
  proto.smartcore.traits.VolumeSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.VolumeSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.VolumeSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.VolumeSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.SpeakerInfoClient.prototype.describeVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.SpeakerInfo/DescribeVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerInfo_DescribeVolume,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.VolumeSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.SpeakerInfoPromiseClient.prototype.describeVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.SpeakerInfo/DescribeVolume',
      request,
      metadata || {},
      methodDescriptor_SpeakerInfo_DescribeVolume);
};


module.exports = proto.smartcore.traits;

