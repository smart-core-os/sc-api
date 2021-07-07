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


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_info_pb = require('../types/info_pb.js')

var types_number_pb = require('../types/number_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./energy_supply_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.PowerSupplyApiClient =
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
proto.smartcore.traits.PowerSupplyApiPromiseClient =
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
 *   !proto.smartcore.traits.GetPowerCapacityRequest,
 *   !proto.smartcore.traits.PowerCapacity>}
 */
const methodDescriptor_PowerSupplyApi_GetPowerCapacity = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PowerSupplyApi/GetPowerCapacity',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetPowerCapacityRequest,
  proto.smartcore.traits.PowerCapacity,
  /**
   * @param {!proto.smartcore.traits.GetPowerCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PowerCapacity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetPowerCapacityRequest,
 *   !proto.smartcore.traits.PowerCapacity>}
 */
const methodInfo_PowerSupplyApi_GetPowerCapacity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PowerCapacity,
  /**
   * @param {!proto.smartcore.traits.GetPowerCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PowerCapacity.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetPowerCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.PowerCapacity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PowerCapacity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyApiClient.prototype.getPowerCapacity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/GetPowerCapacity',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_GetPowerCapacity,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetPowerCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.PowerCapacity>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PowerSupplyApiPromiseClient.prototype.getPowerCapacity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/GetPowerCapacity',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_GetPowerCapacity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullPowerCapacityRequest,
 *   !proto.smartcore.traits.PullPowerCapacityResponse>}
 */
const methodDescriptor_PowerSupplyApi_PullPowerCapacity = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PowerSupplyApi/PullPowerCapacity',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullPowerCapacityRequest,
  proto.smartcore.traits.PullPowerCapacityResponse,
  /**
   * @param {!proto.smartcore.traits.PullPowerCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullPowerCapacityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullPowerCapacityRequest,
 *   !proto.smartcore.traits.PullPowerCapacityResponse>}
 */
const methodInfo_PowerSupplyApi_PullPowerCapacity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullPowerCapacityResponse,
  /**
   * @param {!proto.smartcore.traits.PullPowerCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullPowerCapacityResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullPowerCapacityRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullPowerCapacityResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyApiClient.prototype.pullPowerCapacity =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/PullPowerCapacity',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_PullPowerCapacity);
};


/**
 * @param {!proto.smartcore.traits.PullPowerCapacityRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullPowerCapacityResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyApiPromiseClient.prototype.pullPowerCapacity =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/PullPowerCapacity',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_PullPowerCapacity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.CreateDrawNotificationRequest,
 *   !proto.smartcore.traits.DrawNotification>}
 */
const methodDescriptor_PowerSupplyApi_CreateDrawNotification = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PowerSupplyApi/CreateDrawNotification',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.CreateDrawNotificationRequest,
  proto.smartcore.traits.DrawNotification,
  /**
   * @param {!proto.smartcore.traits.CreateDrawNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.DrawNotification.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.CreateDrawNotificationRequest,
 *   !proto.smartcore.traits.DrawNotification>}
 */
const methodInfo_PowerSupplyApi_CreateDrawNotification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.DrawNotification,
  /**
   * @param {!proto.smartcore.traits.CreateDrawNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.DrawNotification.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.CreateDrawNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.DrawNotification)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.DrawNotification>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyApiClient.prototype.createDrawNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/CreateDrawNotification',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_CreateDrawNotification,
      callback);
};


/**
 * @param {!proto.smartcore.traits.CreateDrawNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.DrawNotification>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PowerSupplyApiPromiseClient.prototype.createDrawNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/CreateDrawNotification',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_CreateDrawNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateDrawNotificationRequest,
 *   !proto.smartcore.traits.DrawNotification>}
 */
const methodDescriptor_PowerSupplyApi_UpdateDrawNotification = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PowerSupplyApi/UpdateDrawNotification',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateDrawNotificationRequest,
  proto.smartcore.traits.DrawNotification,
  /**
   * @param {!proto.smartcore.traits.UpdateDrawNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.DrawNotification.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateDrawNotificationRequest,
 *   !proto.smartcore.traits.DrawNotification>}
 */
const methodInfo_PowerSupplyApi_UpdateDrawNotification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.DrawNotification,
  /**
   * @param {!proto.smartcore.traits.UpdateDrawNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.DrawNotification.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateDrawNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.DrawNotification)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.DrawNotification>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyApiClient.prototype.updateDrawNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/UpdateDrawNotification',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_UpdateDrawNotification,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateDrawNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.DrawNotification>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PowerSupplyApiPromiseClient.prototype.updateDrawNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/UpdateDrawNotification',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_UpdateDrawNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.DeleteDrawNotificationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PowerSupplyApi_DeleteDrawNotification = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PowerSupplyApi/DeleteDrawNotification',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DeleteDrawNotificationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.smartcore.traits.DeleteDrawNotificationRequest} request
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
 *   !proto.smartcore.traits.DeleteDrawNotificationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PowerSupplyApi_DeleteDrawNotification = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.smartcore.traits.DeleteDrawNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DeleteDrawNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyApiClient.prototype.deleteDrawNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/DeleteDrawNotification',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_DeleteDrawNotification,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DeleteDrawNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PowerSupplyApiPromiseClient.prototype.deleteDrawNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyApi/DeleteDrawNotification',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyApi_DeleteDrawNotification);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.PowerSupplyInfoClient =
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
proto.smartcore.traits.PowerSupplyInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribePowerCapacityRequest,
 *   !proto.smartcore.traits.PowerCapacitySupport>}
 */
const methodDescriptor_PowerSupplyInfo_DescribePowerCapacity = new grpc.web.MethodDescriptor(
  '/smartcore.traits.PowerSupplyInfo/DescribePowerCapacity',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribePowerCapacityRequest,
  proto.smartcore.traits.PowerCapacitySupport,
  /**
   * @param {!proto.smartcore.traits.DescribePowerCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PowerCapacitySupport.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.DescribePowerCapacityRequest,
 *   !proto.smartcore.traits.PowerCapacitySupport>}
 */
const methodInfo_PowerSupplyInfo_DescribePowerCapacity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PowerCapacitySupport,
  /**
   * @param {!proto.smartcore.traits.DescribePowerCapacityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PowerCapacitySupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribePowerCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.PowerCapacitySupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PowerCapacitySupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.PowerSupplyInfoClient.prototype.describePowerCapacity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyInfo/DescribePowerCapacity',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyInfo_DescribePowerCapacity,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribePowerCapacityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.PowerCapacitySupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.PowerSupplyInfoPromiseClient.prototype.describePowerCapacity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.PowerSupplyInfo/DescribePowerCapacity',
      request,
      metadata || {},
      methodDescriptor_PowerSupplyInfo_DescribePowerCapacity);
};


module.exports = proto.smartcore.traits;

