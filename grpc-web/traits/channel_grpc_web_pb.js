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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./channel_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.ChannelApiClient =
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
proto.smartcore.traits.ChannelApiPromiseClient =
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
 *   !proto.smartcore.traits.GetChosenChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodDescriptor_ChannelApi_GetChosenChannel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ChannelApi/GetChosenChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetChosenChannelRequest,
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.GetChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetChosenChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodInfo_ChannelApi_GetChosenChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.GetChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetChosenChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ChannelApiClient.prototype.getChosenChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/GetChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_GetChosenChannel,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetChosenChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ChannelApiPromiseClient.prototype.getChosenChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/GetChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_GetChosenChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.ChooseChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodDescriptor_ChannelApi_ChooseChannel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ChannelApi/ChooseChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.ChooseChannelRequest,
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.ChooseChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.ChooseChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodInfo_ChannelApi_ChooseChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.ChooseChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.ChooseChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ChannelApiClient.prototype.chooseChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/ChooseChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ChooseChannel,
      callback);
};


/**
 * @param {!proto.smartcore.traits.ChooseChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ChannelApiPromiseClient.prototype.chooseChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/ChooseChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ChooseChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.AdjustChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodDescriptor_ChannelApi_AdjustChannel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ChannelApi/AdjustChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.AdjustChannelRequest,
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.AdjustChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.AdjustChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodInfo_ChannelApi_AdjustChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.AdjustChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.AdjustChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ChannelApiClient.prototype.adjustChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/AdjustChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_AdjustChannel,
      callback);
};


/**
 * @param {!proto.smartcore.traits.AdjustChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ChannelApiPromiseClient.prototype.adjustChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/AdjustChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_AdjustChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.ReturnChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodDescriptor_ChannelApi_ReturnChannel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ChannelApi/ReturnChannel',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.ReturnChannelRequest,
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.ReturnChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.ReturnChannelRequest,
 *   !proto.smartcore.traits.Channel>}
 */
const methodInfo_ChannelApi_ReturnChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Channel,
  /**
   * @param {!proto.smartcore.traits.ReturnChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Channel.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.ReturnChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Channel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Channel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ChannelApiClient.prototype.returnChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/ReturnChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ReturnChannel,
      callback);
};


/**
 * @param {!proto.smartcore.traits.ReturnChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Channel>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.ChannelApiPromiseClient.prototype.returnChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.ChannelApi/ReturnChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_ReturnChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullChosenChannelRequest,
 *   !proto.smartcore.traits.PullChosenChannelResponse>}
 */
const methodDescriptor_ChannelApi_PullChosenChannel = new grpc.web.MethodDescriptor(
  '/smartcore.traits.ChannelApi/PullChosenChannel',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullChosenChannelRequest,
  proto.smartcore.traits.PullChosenChannelResponse,
  /**
   * @param {!proto.smartcore.traits.PullChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullChosenChannelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullChosenChannelRequest,
 *   !proto.smartcore.traits.PullChosenChannelResponse>}
 */
const methodInfo_ChannelApi_PullChosenChannel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullChosenChannelResponse,
  /**
   * @param {!proto.smartcore.traits.PullChosenChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullChosenChannelResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullChosenChannelRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullChosenChannelResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ChannelApiClient.prototype.pullChosenChannel =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.ChannelApi/PullChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_PullChosenChannel);
};


/**
 * @param {!proto.smartcore.traits.PullChosenChannelRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullChosenChannelResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.ChannelApiPromiseClient.prototype.pullChosenChannel =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.ChannelApi/PullChosenChannel',
      request,
      metadata || {},
      methodDescriptor_ChannelApi_PullChosenChannel);
};


module.exports = proto.smartcore.traits;

