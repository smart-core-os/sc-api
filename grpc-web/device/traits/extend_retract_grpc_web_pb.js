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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var types_tween_pb = require('../../types/tween_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./extend_retract_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.ExtendRetractClient =
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
proto.smartcore.api.device.traits.ExtendRetractPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetExtensionRequest,
 *   !proto.smartcore.api.device.traits.Extension>}
 */
const methodDescriptor_ExtendRetract_GetExtension = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ExtendRetract/GetExtension',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetExtensionRequest,
  proto.smartcore.api.device.traits.Extension,
  /**
   * @param {!proto.smartcore.api.device.traits.GetExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Extension.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetExtensionRequest,
 *   !proto.smartcore.api.device.traits.Extension>}
 */
const methodInfo_ExtendRetract_GetExtension = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Extension,
  /**
   * @param {!proto.smartcore.api.device.traits.GetExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Extension.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Extension)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Extension>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ExtendRetractClient.prototype.getExtension =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/GetExtension',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_GetExtension,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Extension>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ExtendRetractPromiseClient.prototype.getExtension =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/GetExtension',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_GetExtension);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateExtensionRequest,
 *   !proto.smartcore.api.device.traits.Extension>}
 */
const methodDescriptor_ExtendRetract_UpdateExtension = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ExtendRetract/UpdateExtension',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateExtensionRequest,
  proto.smartcore.api.device.traits.Extension,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Extension.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateExtensionRequest,
 *   !proto.smartcore.api.device.traits.Extension>}
 */
const methodInfo_ExtendRetract_UpdateExtension = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Extension,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateExtensionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Extension.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Extension)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Extension>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ExtendRetractClient.prototype.updateExtension =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/UpdateExtension',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_UpdateExtension,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateExtensionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Extension>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ExtendRetractPromiseClient.prototype.updateExtension =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/UpdateExtension',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_UpdateExtension);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.ExtendRetractStopRequest,
 *   !proto.smartcore.api.device.traits.Extension>}
 */
const methodDescriptor_ExtendRetract_Stop = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ExtendRetract/Stop',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.ExtendRetractStopRequest,
  proto.smartcore.api.device.traits.Extension,
  /**
   * @param {!proto.smartcore.api.device.traits.ExtendRetractStopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Extension.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.ExtendRetractStopRequest,
 *   !proto.smartcore.api.device.traits.Extension>}
 */
const methodInfo_ExtendRetract_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Extension,
  /**
   * @param {!proto.smartcore.api.device.traits.ExtendRetractStopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Extension.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.ExtendRetractStopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Extension)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Extension>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ExtendRetractClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/Stop',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_Stop,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.ExtendRetractStopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Extension>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ExtendRetractPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/Stop',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.CreateExtensionPresetRequest,
 *   !proto.smartcore.api.device.traits.ExtensionPreset>}
 */
const methodDescriptor_ExtendRetract_CreateExtensionPreset = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ExtendRetract/CreateExtensionPreset',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.CreateExtensionPresetRequest,
  proto.smartcore.api.device.traits.ExtensionPreset,
  /**
   * @param {!proto.smartcore.api.device.traits.CreateExtensionPresetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ExtensionPreset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.CreateExtensionPresetRequest,
 *   !proto.smartcore.api.device.traits.ExtensionPreset>}
 */
const methodInfo_ExtendRetract_CreateExtensionPreset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.ExtensionPreset,
  /**
   * @param {!proto.smartcore.api.device.traits.CreateExtensionPresetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ExtensionPreset.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.CreateExtensionPresetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.ExtensionPreset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.ExtensionPreset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ExtendRetractClient.prototype.createExtensionPreset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/CreateExtensionPreset',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_CreateExtensionPreset,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.CreateExtensionPresetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.ExtensionPreset>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ExtendRetractPromiseClient.prototype.createExtensionPreset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/CreateExtensionPreset',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_CreateExtensionPreset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullExtensionsRequest,
 *   !proto.smartcore.api.device.traits.PullExtensionsResponse>}
 */
const methodDescriptor_ExtendRetract_PullExtensions = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ExtendRetract/PullExtensions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullExtensionsRequest,
  proto.smartcore.api.device.traits.PullExtensionsResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullExtensionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullExtensionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullExtensionsRequest,
 *   !proto.smartcore.api.device.traits.PullExtensionsResponse>}
 */
const methodInfo_ExtendRetract_PullExtensions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullExtensionsResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullExtensionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullExtensionsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullExtensionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullExtensionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ExtendRetractClient.prototype.pullExtensions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/PullExtensions',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_PullExtensions);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullExtensionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullExtensionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ExtendRetractPromiseClient.prototype.pullExtensions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.ExtendRetract/PullExtensions',
      request,
      metadata || {},
      methodDescriptor_ExtendRetract_PullExtensions);
};


module.exports = proto.smartcore.api.device.traits;

