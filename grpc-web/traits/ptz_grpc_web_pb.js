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

var types_number_pb = require('../types/number_pb.js')

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
 *   !proto.smartcore.traits.GetPtzStateRequest,
 *   !proto.smartcore.traits.PtzState>}
 */
const methodDescriptor_PtzApi_GetPtzState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/GetPtzState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetPtzStateRequest,
  proto.smartcore.traits.PtzState,
  /**
   * @param {!proto.smartcore.traits.GetPtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetPtzStateRequest,
 *   !proto.smartcore.traits.PtzState>}
 */
const methodInfo_PtzApi_GetPtzState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PtzState,
  /**
   * @param {!proto.smartcore.traits.GetPtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetPtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.PtzState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PtzState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.getPtzState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PtzApi/GetPtzState',
      request,
      metadata || {},
      methodDescriptor_PtzApi_GetPtzState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetPtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.PtzState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.getPtzState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PtzApi/GetPtzState',
      request,
      metadata || {},
      methodDescriptor_PtzApi_GetPtzState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdatePtzStateRequest,
 *   !proto.smartcore.traits.PtzState>}
 */
const methodDescriptor_PtzApi_UpdatePtzState = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/UpdatePtzState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdatePtzStateRequest,
  proto.smartcore.traits.PtzState,
  /**
   * @param {!proto.smartcore.traits.UpdatePtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdatePtzStateRequest,
 *   !proto.smartcore.traits.PtzState>}
 */
const methodInfo_PtzApi_UpdatePtzState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PtzState,
  /**
   * @param {!proto.smartcore.traits.UpdatePtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdatePtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.PtzState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PtzState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.updatePtzState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PtzApi/UpdatePtzState',
      request,
      metadata || {},
      methodDescriptor_PtzApi_UpdatePtzState,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdatePtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.PtzState>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.updatePtzState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PtzApi/UpdatePtzState',
      request,
      metadata || {},
      methodDescriptor_PtzApi_UpdatePtzState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.StopPtzRequest,
 *   !proto.smartcore.traits.PtzState>}
 */
const methodDescriptor_PtzApi_Stop = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/Stop',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.StopPtzRequest,
  proto.smartcore.traits.PtzState,
  /**
   * @param {!proto.smartcore.traits.StopPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.StopPtzRequest,
 *   !proto.smartcore.traits.PtzState>}
 */
const methodInfo_PtzApi_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PtzState,
  /**
   * @param {!proto.smartcore.traits.StopPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PtzState.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.StopPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.PtzState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PtzState>|undefined}
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
 * @return {!Promise<!proto.smartcore.traits.PtzState>}
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
 *   !proto.smartcore.traits.PullPtzStatesRequest,
 *   !proto.smartcore.traits.PullPtzStatesResponse>}
 */
const methodDescriptor_PtzApi_PullPtzStates = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PtzApi/PullPtzStates',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullPtzStatesRequest,
  proto.smartcore.traits.PullPtzStatesResponse,
  /**
   * @param {!proto.smartcore.traits.PullPtzStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullPtzStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullPtzStatesRequest,
 *   !proto.smartcore.traits.PullPtzStatesResponse>}
 */
const methodInfo_PtzApi_PullPtzStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullPtzStatesResponse,
  /**
   * @param {!proto.smartcore.traits.PullPtzStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullPtzStatesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullPtzStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullPtzStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiClient.prototype.pullPtzStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.PtzApi/PullPtzStates',
      request,
      metadata || {},
      methodDescriptor_PtzApi_PullPtzStates);
};


/**
 * @param {!proto.smartcore.traits.PullPtzStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullPtzStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PtzApiPromiseClient.prototype.pullPtzStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.PtzApi/PullPtzStates',
      request,
      metadata || {},
      methodDescriptor_PtzApi_PullPtzStates);
};


module.exports = proto.smartcore.traits;

