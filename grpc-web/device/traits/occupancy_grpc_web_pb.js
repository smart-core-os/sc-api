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


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./occupancy_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.OccupancyApiClient =
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
proto.smartcore.api.device.traits.OccupancyApiPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetOccupancyRequest,
 *   !proto.smartcore.api.device.traits.Occupancy>}
 */
const methodDescriptor_OccupancyApi_GetOccupancy = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/GetOccupancy',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetOccupancyRequest,
  proto.smartcore.api.device.traits.Occupancy,
  /**
   * @param {!proto.smartcore.api.device.traits.GetOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Occupancy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetOccupancyRequest,
 *   !proto.smartcore.api.device.traits.Occupancy>}
 */
const methodInfo_OccupancyApi_GetOccupancy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Occupancy,
  /**
   * @param {!proto.smartcore.api.device.traits.GetOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Occupancy.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetOccupancyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Occupancy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Occupancy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.getOccupancy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/GetOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_GetOccupancy,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetOccupancyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Occupancy>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.getOccupancy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/GetOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_GetOccupancy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullOccupancyRequest,
 *   !proto.smartcore.api.device.traits.PullOccupancyResponse>}
 */
const methodDescriptor_OccupancyApi_PullOccupancy = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/PullOccupancy',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullOccupancyRequest,
  proto.smartcore.api.device.traits.PullOccupancyResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullOccupancyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullOccupancyRequest,
 *   !proto.smartcore.api.device.traits.PullOccupancyResponse>}
 */
const methodInfo_OccupancyApi_PullOccupancy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullOccupancyResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullOccupancyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullOccupancyResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullOccupancyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullOccupancyResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.pullOccupancy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/PullOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_PullOccupancy);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullOccupancyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullOccupancyResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.pullOccupancy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/PullOccupancy',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_PullOccupancy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest,
 *   !proto.smartcore.api.device.traits.OccupancyOverride>}
 */
const methodDescriptor_OccupancyApi_CreateOccupancyOverride = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/CreateOccupancyOverride',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest,
  proto.smartcore.api.device.traits.OccupancyOverride,
  /**
   * @param {!proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OccupancyOverride.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest,
 *   !proto.smartcore.api.device.traits.OccupancyOverride>}
 */
const methodInfo_OccupancyApi_CreateOccupancyOverride = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.OccupancyOverride,
  /**
   * @param {!proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OccupancyOverride.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.OccupancyOverride)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.OccupancyOverride>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.createOccupancyOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/CreateOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_CreateOccupancyOverride,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.CreateOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.OccupancyOverride>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.createOccupancyOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/CreateOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_CreateOccupancyOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest,
 *   !proto.smartcore.api.device.traits.OccupancyOverride>}
 */
const methodDescriptor_OccupancyApi_UpdateOccupancyOverride = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/UpdateOccupancyOverride',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest,
  proto.smartcore.api.device.traits.OccupancyOverride,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OccupancyOverride.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest,
 *   !proto.smartcore.api.device.traits.OccupancyOverride>}
 */
const methodInfo_OccupancyApi_UpdateOccupancyOverride = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.OccupancyOverride,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OccupancyOverride.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.OccupancyOverride)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.OccupancyOverride>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.updateOccupancyOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/UpdateOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_UpdateOccupancyOverride,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.OccupancyOverride>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.updateOccupancyOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/UpdateOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_UpdateOccupancyOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OccupancyApi_DeleteOccupancyOverride = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/DeleteOccupancyOverride',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_OccupancyApi_DeleteOccupancyOverride = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.deleteOccupancyOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/DeleteOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_DeleteOccupancyOverride,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.DeleteOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.deleteOccupancyOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/DeleteOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_DeleteOccupancyOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.GetOccupancyOverrideRequest,
 *   !proto.smartcore.api.device.traits.OccupancyOverride>}
 */
const methodDescriptor_OccupancyApi_GetOccupancyOverride = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/GetOccupancyOverride',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetOccupancyOverrideRequest,
  proto.smartcore.api.device.traits.OccupancyOverride,
  /**
   * @param {!proto.smartcore.api.device.traits.GetOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OccupancyOverride.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetOccupancyOverrideRequest,
 *   !proto.smartcore.api.device.traits.OccupancyOverride>}
 */
const methodInfo_OccupancyApi_GetOccupancyOverride = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.OccupancyOverride,
  /**
   * @param {!proto.smartcore.api.device.traits.GetOccupancyOverrideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.OccupancyOverride.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.OccupancyOverride)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.OccupancyOverride>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.getOccupancyOverride =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/GetOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_GetOccupancyOverride,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetOccupancyOverrideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.OccupancyOverride>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.getOccupancyOverride =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/GetOccupancyOverride',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_GetOccupancyOverride);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.ListOccupancyOverridesRequest,
 *   !proto.smartcore.api.device.traits.ListOccupancyOverridesResponse>}
 */
const methodDescriptor_OccupancyApi_ListOccupancyOverrides = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.OccupancyApi/ListOccupancyOverrides',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.ListOccupancyOverridesRequest,
  proto.smartcore.api.device.traits.ListOccupancyOverridesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.ListOccupancyOverridesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ListOccupancyOverridesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.ListOccupancyOverridesRequest,
 *   !proto.smartcore.api.device.traits.ListOccupancyOverridesResponse>}
 */
const methodInfo_OccupancyApi_ListOccupancyOverrides = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.ListOccupancyOverridesResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.ListOccupancyOverridesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ListOccupancyOverridesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.ListOccupancyOverridesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.ListOccupancyOverridesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.ListOccupancyOverridesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.OccupancyApiClient.prototype.listOccupancyOverrides =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/ListOccupancyOverrides',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_ListOccupancyOverrides,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.ListOccupancyOverridesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.ListOccupancyOverridesResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.OccupancyApiPromiseClient.prototype.listOccupancyOverrides =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.OccupancyApi/ListOccupancyOverrides',
      request,
      metadata || {},
      methodDescriptor_OccupancyApi_ListOccupancyOverrides);
};


module.exports = proto.smartcore.api.device.traits;

