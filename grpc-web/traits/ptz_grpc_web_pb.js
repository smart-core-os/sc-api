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

var types_tween_pb = require('../types/tween_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./ptz_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.PtzApiClient =
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
proto.smartcore.traits.PtzApiPromiseClient =
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
 *   !proto.smartcore.traits.GetPtzRequest,
 *   !proto.smartcore.traits.Ptz>}
 */
const methodDescriptor_PtzApi_GetPtz = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/GetPtz',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetPtzRequest,
  proto.smartcore.traits.Ptz,
  /**
   * @param {!proto.smartcore.traits.GetPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Ptz.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetPtzRequest,
 *   !proto.smartcore.traits.Ptz>}
 */
const methodInfo_PtzApi_GetPtz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Ptz,
  /**
   * @param {!proto.smartcore.traits.GetPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Ptz.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Ptz)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Ptz>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.getPtz =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PtzApi/GetPtz',
      request,
      metadata || {},
      methodDescriptor_PtzApi_GetPtz,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Ptz>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.getPtz =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PtzApi/GetPtz',
      request,
      metadata || {},
      methodDescriptor_PtzApi_GetPtz);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdatePtzRequest,
 *   !proto.smartcore.traits.Ptz>}
 */
const methodDescriptor_PtzApi_UpdatePtz = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/UpdatePtz',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdatePtzRequest,
  proto.smartcore.traits.Ptz,
  /**
   * @param {!proto.smartcore.traits.UpdatePtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Ptz.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdatePtzRequest,
 *   !proto.smartcore.traits.Ptz>}
 */
const methodInfo_PtzApi_UpdatePtz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Ptz,
  /**
   * @param {!proto.smartcore.traits.UpdatePtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Ptz.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdatePtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Ptz)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Ptz>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.updatePtz =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PtzApi/UpdatePtz',
      request,
      metadata || {},
      methodDescriptor_PtzApi_UpdatePtz,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdatePtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Ptz>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.updatePtz =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PtzApi/UpdatePtz',
      request,
      metadata || {},
      methodDescriptor_PtzApi_UpdatePtz);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.StopPtzRequest,
 *   !proto.smartcore.traits.Ptz>}
 */
const methodDescriptor_PtzApi_Stop = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/Stop',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.StopPtzRequest,
  proto.smartcore.traits.Ptz,
  /**
   * @param {!proto.smartcore.traits.StopPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Ptz.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.StopPtzRequest,
 *   !proto.smartcore.traits.Ptz>}
 */
const methodInfo_PtzApi_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Ptz,
  /**
   * @param {!proto.smartcore.traits.StopPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Ptz.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.StopPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Ptz)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Ptz>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PtzApi/Stop',
      request,
      metadata || {},
      methodDescriptor_PtzApi_Stop,
      callback);
};


/**
 * @param {!proto.smartcore.traits.StopPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Ptz>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PtzApi/Stop',
      request,
      metadata || {},
      methodDescriptor_PtzApi_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.CreatePtzPresetRequest,
 *   !proto.smartcore.traits.PtzPreset>}
 */
const methodDescriptor_PtzApi_CreatePreset = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/CreatePreset',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.CreatePtzPresetRequest,
  proto.smartcore.traits.PtzPreset,
  /**
   * @param {!proto.smartcore.traits.CreatePtzPresetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzPreset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.CreatePtzPresetRequest,
 *   !proto.smartcore.traits.PtzPreset>}
 */
const methodInfo_PtzApi_CreatePreset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PtzPreset,
  /**
   * @param {!proto.smartcore.traits.CreatePtzPresetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzPreset.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.CreatePtzPresetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.PtzPreset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PtzPreset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.createPreset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PtzApi/CreatePreset',
      request,
      metadata || {},
      methodDescriptor_PtzApi_CreatePreset,
      callback);
};


/**
 * @param {!proto.smartcore.traits.CreatePtzPresetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.PtzPreset>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.createPreset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PtzApi/CreatePreset',
      request,
      metadata || {},
      methodDescriptor_PtzApi_CreatePreset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullPtzRequest,
 *   !proto.smartcore.traits.PullPtzResponse>}
 */
const methodDescriptor_PtzApi_PullPtz = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/PullPtz',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullPtzRequest,
  proto.smartcore.traits.PullPtzResponse,
  /**
   * @param {!proto.smartcore.traits.PullPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullPtzResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullPtzRequest,
 *   !proto.smartcore.traits.PullPtzResponse>}
 */
const methodInfo_PtzApi_PullPtz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullPtzResponse,
  /**
   * @param {!proto.smartcore.traits.PullPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullPtzResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullPtzRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullPtzResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.pullPtz =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.PtzApi/PullPtz',
      request,
      metadata || {},
      methodDescriptor_PtzApi_PullPtz);
};


/**
 * @param {!proto.smartcore.traits.PullPtzRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullPtzResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.pullPtz =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.PtzApi/PullPtz',
      request,
      metadata || {},
      methodDescriptor_PtzApi_PullPtz);
};


module.exports = proto.smartcore.traits;

