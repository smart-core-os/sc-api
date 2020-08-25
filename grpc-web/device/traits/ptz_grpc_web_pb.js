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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_number_pb = require('../../types/number_pb.js')

var types_tween_pb = require('../../types/tween_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./ptz_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.PtzClient =
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
proto.smartcore.api.device.traits.PtzPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetPtzStateRequest,
 *   !proto.smartcore.api.device.traits.PtzState>}
 */
const methodDescriptor_Ptz_GetPtzState = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Ptz/GetPtzState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetPtzStateRequest,
  proto.smartcore.api.device.traits.PtzState,
  /**
   * @param {!proto.smartcore.api.device.traits.GetPtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetPtzStateRequest,
 *   !proto.smartcore.api.device.traits.PtzState>}
 */
const methodInfo_Ptz_GetPtzState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PtzState,
  /**
   * @param {!proto.smartcore.api.device.traits.GetPtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzState.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetPtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.PtzState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PtzState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.PtzClient.prototype.getPtzState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/GetPtzState',
      request,
      metadata || {},
      methodDescriptor_Ptz_GetPtzState,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetPtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.PtzState>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.PtzPromiseClient.prototype.getPtzState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/GetPtzState',
      request,
      metadata || {},
      methodDescriptor_Ptz_GetPtzState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdatePtzStateRequest,
 *   !proto.smartcore.api.device.traits.PtzState>}
 */
const methodDescriptor_Ptz_UpdatePtzState = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Ptz/UpdatePtzState',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdatePtzStateRequest,
  proto.smartcore.api.device.traits.PtzState,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdatePtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdatePtzStateRequest,
 *   !proto.smartcore.api.device.traits.PtzState>}
 */
const methodInfo_Ptz_UpdatePtzState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PtzState,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdatePtzStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzState.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdatePtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.PtzState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PtzState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.PtzClient.prototype.updatePtzState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/UpdatePtzState',
      request,
      metadata || {},
      methodDescriptor_Ptz_UpdatePtzState,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdatePtzStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.PtzState>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.PtzPromiseClient.prototype.updatePtzState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/UpdatePtzState',
      request,
      metadata || {},
      methodDescriptor_Ptz_UpdatePtzState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.StopPtzRequest,
 *   !proto.smartcore.api.device.traits.PtzState>}
 */
const methodDescriptor_Ptz_Stop = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Ptz/Stop',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.StopPtzRequest,
  proto.smartcore.api.device.traits.PtzState,
  /**
   * @param {!proto.smartcore.api.device.traits.StopPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzState.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.StopPtzRequest,
 *   !proto.smartcore.api.device.traits.PtzState>}
 */
const methodInfo_Ptz_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PtzState,
  /**
   * @param {!proto.smartcore.api.device.traits.StopPtzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzState.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.StopPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.PtzState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PtzState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.PtzClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/Stop',
      request,
      metadata || {},
      methodDescriptor_Ptz_Stop,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.StopPtzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.PtzState>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.PtzPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/Stop',
      request,
      metadata || {},
      methodDescriptor_Ptz_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.CreatePtzPresetRequest,
 *   !proto.smartcore.api.device.traits.PtzPreset>}
 */
const methodDescriptor_Ptz_CreatePreset = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Ptz/CreatePreset',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.CreatePtzPresetRequest,
  proto.smartcore.api.device.traits.PtzPreset,
  /**
   * @param {!proto.smartcore.api.device.traits.CreatePtzPresetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzPreset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.CreatePtzPresetRequest,
 *   !proto.smartcore.api.device.traits.PtzPreset>}
 */
const methodInfo_Ptz_CreatePreset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PtzPreset,
  /**
   * @param {!proto.smartcore.api.device.traits.CreatePtzPresetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PtzPreset.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.CreatePtzPresetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.PtzPreset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PtzPreset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.PtzClient.prototype.createPreset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/CreatePreset',
      request,
      metadata || {},
      methodDescriptor_Ptz_CreatePreset,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.CreatePtzPresetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.PtzPreset>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.PtzPromiseClient.prototype.createPreset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/CreatePreset',
      request,
      metadata || {},
      methodDescriptor_Ptz_CreatePreset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullPtzStatesRequest,
 *   !proto.smartcore.api.device.traits.PullPtzStatesResponse>}
 */
const methodDescriptor_Ptz_PullPtzStates = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.Ptz/PullPtzStates',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullPtzStatesRequest,
  proto.smartcore.api.device.traits.PullPtzStatesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullPtzStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullPtzStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullPtzStatesRequest,
 *   !proto.smartcore.api.device.traits.PullPtzStatesResponse>}
 */
const methodInfo_Ptz_PullPtzStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullPtzStatesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullPtzStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullPtzStatesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullPtzStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullPtzStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.PtzClient.prototype.pullPtzStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/PullPtzStates',
      request,
      metadata || {},
      methodDescriptor_Ptz_PullPtzStates);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullPtzStatesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullPtzStatesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.PtzPromiseClient.prototype.pullPtzStates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.Ptz/PullPtzStates',
      request,
      metadata || {},
      methodDescriptor_Ptz_PullPtzStates);
};


module.exports = proto.smartcore.api.device.traits;

