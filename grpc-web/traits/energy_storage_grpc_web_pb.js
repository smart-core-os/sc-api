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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_info_pb = require('../types/info_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./energy_storage_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.EnergyStorageApiClient =
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
proto.smartcore.traits.EnergyStorageApiPromiseClient =
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
 *   !proto.smartcore.traits.GetEnergyLevelRequest,
 *   !proto.smartcore.traits.EnergyLevel>}
 */
const methodDescriptor_EnergyStorageApi_GetEnergyLevel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageApi/GetEnergyLevel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetEnergyLevelRequest,
  proto.smartcore.traits.EnergyLevel,
  /**
   * @param {!proto.smartcore.traits.GetEnergyLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.EnergyLevel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetEnergyLevelRequest,
 *   !proto.smartcore.traits.EnergyLevel>}
 */
const methodInfo_EnergyStorageApi_GetEnergyLevel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.EnergyLevel,
  /**
   * @param {!proto.smartcore.traits.GetEnergyLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.EnergyLevel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetEnergyLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.EnergyLevel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.EnergyLevel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiClient.prototype.getEnergyLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/GetEnergyLevel',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_GetEnergyLevel,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetEnergyLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.EnergyLevel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.EnergyStorageApiPromiseClient.prototype.getEnergyLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/GetEnergyLevel',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_GetEnergyLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullEnergyLevelRequest,
 *   !proto.smartcore.traits.PullEnergyLevelResponse>}
 */
const methodDescriptor_EnergyStorageApi_PullEnergyLevel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageApi/PullEnergyLevel',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullEnergyLevelRequest,
  proto.smartcore.traits.PullEnergyLevelResponse,
  /**
   * @param {!proto.smartcore.traits.PullEnergyLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullEnergyLevelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullEnergyLevelRequest,
 *   !proto.smartcore.traits.PullEnergyLevelResponse>}
 */
const methodInfo_EnergyStorageApi_PullEnergyLevel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullEnergyLevelResponse,
  /**
   * @param {!proto.smartcore.traits.PullEnergyLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullEnergyLevelResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullEnergyLevelRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullEnergyLevelResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiClient.prototype.pullEnergyLevel =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/PullEnergyLevel',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_PullEnergyLevel);
};


/**
 * @param {!proto.smartcore.traits.PullEnergyLevelRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullEnergyLevelResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiPromiseClient.prototype.pullEnergyLevel =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/PullEnergyLevel',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_PullEnergyLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetChargingStatusRequest,
 *   !proto.smartcore.traits.ChargingStatus>}
 */
const methodDescriptor_EnergyStorageApi_GetChargingStatus = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageApi/GetChargingStatus',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetChargingStatusRequest,
  proto.smartcore.traits.ChargingStatus,
  /**
   * @param {!proto.smartcore.traits.GetChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ChargingStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetChargingStatusRequest,
 *   !proto.smartcore.traits.ChargingStatus>}
 */
const methodInfo_EnergyStorageApi_GetChargingStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.ChargingStatus,
  /**
   * @param {!proto.smartcore.traits.GetChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ChargingStatus.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetChargingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.ChargingStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ChargingStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiClient.prototype.getChargingStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/GetChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_GetChargingStatus,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetChargingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ChargingStatus>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.EnergyStorageApiPromiseClient.prototype.getChargingStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/GetChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_GetChargingStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateChargingStatusRequest,
 *   !proto.smartcore.traits.ChargingStatus>}
 */
const methodDescriptor_EnergyStorageApi_UpdateChargingStatus = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageApi/UpdateChargingStatus',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateChargingStatusRequest,
  proto.smartcore.traits.ChargingStatus,
  /**
   * @param {!proto.smartcore.traits.UpdateChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ChargingStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateChargingStatusRequest,
 *   !proto.smartcore.traits.ChargingStatus>}
 */
const methodInfo_EnergyStorageApi_UpdateChargingStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.ChargingStatus,
  /**
   * @param {!proto.smartcore.traits.UpdateChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ChargingStatus.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateChargingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.ChargingStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ChargingStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiClient.prototype.updateChargingStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/UpdateChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_UpdateChargingStatus,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateChargingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ChargingStatus>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.EnergyStorageApiPromiseClient.prototype.updateChargingStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/UpdateChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_UpdateChargingStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullChargingStatusRequest,
 *   !proto.smartcore.traits.PullChargingStatusResponse>}
 */
const methodDescriptor_EnergyStorageApi_PullChargingStatus = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageApi/PullChargingStatus',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullChargingStatusRequest,
  proto.smartcore.traits.PullChargingStatusResponse,
  /**
   * @param {!proto.smartcore.traits.PullChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullChargingStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullChargingStatusRequest,
 *   !proto.smartcore.traits.PullChargingStatusResponse>}
 */
const methodInfo_EnergyStorageApi_PullChargingStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullChargingStatusResponse,
  /**
   * @param {!proto.smartcore.traits.PullChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullChargingStatusResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullChargingStatusRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullChargingStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiClient.prototype.pullChargingStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/PullChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_PullChargingStatus);
};


/**
 * @param {!proto.smartcore.traits.PullChargingStatusRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullChargingStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageApiPromiseClient.prototype.pullChargingStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.EnergyStorageApi/PullChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageApi_PullChargingStatus);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.EnergyStorageInfoClient =
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
proto.smartcore.traits.EnergyStorageInfoPromiseClient =
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
 *   !proto.smartcore.traits.DescribeEnergyLevelRequest,
 *   !proto.smartcore.traits.EnergyLevelSupport>}
 */
const methodDescriptor_EnergyStorageInfo_DescribeEnergyLevel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageInfo/DescribeEnergyLevel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeEnergyLevelRequest,
  proto.smartcore.traits.EnergyLevelSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeEnergyLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.EnergyLevelSupport.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.DescribeEnergyLevelRequest,
 *   !proto.smartcore.traits.EnergyLevelSupport>}
 */
const methodInfo_EnergyStorageInfo_DescribeEnergyLevel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.EnergyLevelSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeEnergyLevelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.EnergyLevelSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeEnergyLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.EnergyLevelSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.EnergyLevelSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageInfoClient.prototype.describeEnergyLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageInfo/DescribeEnergyLevel',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageInfo_DescribeEnergyLevel,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeEnergyLevelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.EnergyLevelSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.EnergyStorageInfoPromiseClient.prototype.describeEnergyLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageInfo/DescribeEnergyLevel',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageInfo_DescribeEnergyLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.DescribeChargingStatusRequest,
 *   !proto.smartcore.traits.ChargingStatusSupport>}
 */
const methodDescriptor_EnergyStorageInfo_DescribeChargingStatus = new grpc.web.MethodDescriptor(
  '/smartcore.traits.EnergyStorageInfo/DescribeChargingStatus',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DescribeChargingStatusRequest,
  proto.smartcore.traits.ChargingStatusSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ChargingStatusSupport.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.DescribeChargingStatusRequest,
 *   !proto.smartcore.traits.ChargingStatusSupport>}
 */
const methodInfo_EnergyStorageInfo_DescribeChargingStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.ChargingStatusSupport,
  /**
   * @param {!proto.smartcore.traits.DescribeChargingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ChargingStatusSupport.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DescribeChargingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.ChargingStatusSupport)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ChargingStatusSupport>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.EnergyStorageInfoClient.prototype.describeChargingStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageInfo/DescribeChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageInfo_DescribeChargingStatus,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DescribeChargingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ChargingStatusSupport>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.EnergyStorageInfoPromiseClient.prototype.describeChargingStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.EnergyStorageInfo/DescribeChargingStatus',
      request,
      metadata || {},
      methodDescriptor_EnergyStorageInfo_DescribeChargingStatus);
};


module.exports = proto.smartcore.traits;

