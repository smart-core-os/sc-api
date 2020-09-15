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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./channel_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.ChannelApiClient =
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
proto.smartcore.api.device.traits.ChannelApiPromiseClient =
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
 *   !proto.smartcore.api.device.traits.GetChosenChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodDescriptor_ChannelApi_GetChosenChannel = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ChannelApi/GetChosenChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetChosenChannelRequest,
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.GetChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetChosenChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodInfo_ChannelApi_GetChosenChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.GetChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetChosenChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ChannelApiClient.prototype.getChosenChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/GetChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_GetChosenChannel,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetChosenChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ChannelApiPromiseClient.prototype.getChosenChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/GetChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_GetChosenChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.ChooseChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodDescriptor_ChannelApi_ChooseChannel = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ChannelApi/ChooseChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.ChooseChannelRequest,
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.ChooseChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.ChooseChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodInfo_ChannelApi_ChooseChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.ChooseChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.ChooseChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ChannelApiClient.prototype.chooseChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/ChooseChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ChooseChannel,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.ChooseChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ChannelApiPromiseClient.prototype.chooseChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/ChooseChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ChooseChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.AdjustChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodDescriptor_ChannelApi_AdjustChannel = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ChannelApi/AdjustChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.AdjustChannelRequest,
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.AdjustChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.AdjustChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodInfo_ChannelApi_AdjustChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.AdjustChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.AdjustChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ChannelApiClient.prototype.adjustChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/AdjustChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_AdjustChannel,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.AdjustChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ChannelApiPromiseClient.prototype.adjustChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/AdjustChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_AdjustChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.ReturnChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodDescriptor_ChannelApi_ReturnChannel = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ChannelApi/ReturnChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.ReturnChannelRequest,
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.ReturnChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.ReturnChannelRequest,
 *   !proto.smartcore.api.device.traits.Channel>}
 */
const methodInfo_ChannelApi_ReturnChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Channel,
  /**
   * @param {!proto.smartcore.api.device.traits.ReturnChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.ReturnChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ChannelApiClient.prototype.returnChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/ReturnChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ReturnChannel,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.ReturnChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.ChannelApiPromiseClient.prototype.returnChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/ReturnChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ReturnChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullChosenChannelRequest,
 *   !proto.smartcore.api.device.traits.PullChosenChannelResponse>}
 */
const methodDescriptor_ChannelApi_PullChosenChannel = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.ChannelApi/PullChosenChannel',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullChosenChannelRequest,
  proto.smartcore.api.device.traits.PullChosenChannelResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullChosenChannelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullChosenChannelRequest,
 *   !proto.smartcore.api.device.traits.PullChosenChannelResponse>}
 */
const methodInfo_ChannelApi_PullChosenChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullChosenChannelResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullChosenChannelResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullChosenChannelRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullChosenChannelResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ChannelApiClient.prototype.pullChosenChannel =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/PullChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_PullChosenChannel);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullChosenChannelRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullChosenChannelResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.ChannelApiPromiseClient.prototype.pullChosenChannel =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.ChannelApi/PullChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_PullChosenChannel);
};


module.exports = proto.smartcore.api.device.traits;

