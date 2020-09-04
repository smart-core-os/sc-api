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
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./input_select_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.InputSelectClient =
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
proto.smartcore.api.device.traits.InputSelectPromiseClient =
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
 *   !proto.smartcore.api.device.traits.UpdateInputRequest,
 *   !proto.smartcore.api.device.traits.Input>}
 */
const methodDescriptor_InputSelect_UpdateInput = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.InputSelect/UpdateInput',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateInputRequest,
  proto.smartcore.api.device.traits.Input,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Input.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateInputRequest,
 *   !proto.smartcore.api.device.traits.Input>}
 */
const methodInfo_InputSelect_UpdateInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Input,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Input.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Input)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Input>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.InputSelectClient.prototype.updateInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.InputSelect/UpdateInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_UpdateInput,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Input>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.InputSelectPromiseClient.prototype.updateInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.InputSelect/UpdateInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_UpdateInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.GetInputRequest,
 *   !proto.smartcore.api.device.traits.Input>}
 */
const methodDescriptor_InputSelect_GetInput = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.InputSelect/GetInput',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.GetInputRequest,
  proto.smartcore.api.device.traits.Input,
  /**
   * @param {!proto.smartcore.api.device.traits.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Input.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.GetInputRequest,
 *   !proto.smartcore.api.device.traits.Input>}
 */
const methodInfo_InputSelect_GetInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.Input,
  /**
   * @param {!proto.smartcore.api.device.traits.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.Input.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.Input)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.Input>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.InputSelectClient.prototype.getInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.InputSelect/GetInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_GetInput,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.Input>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.InputSelectPromiseClient.prototype.getInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.InputSelect/GetInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_GetInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.PullInputRequest,
 *   !proto.smartcore.api.device.traits.PullInputResponse>}
 */
const methodDescriptor_InputSelect_PullInput = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.InputSelect/PullInput',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.PullInputRequest,
  proto.smartcore.api.device.traits.PullInputResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.PullInputRequest,
 *   !proto.smartcore.api.device.traits.PullInputResponse>}
 */
const methodInfo_InputSelect_PullInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullInputResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.PullInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullInputResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.PullInputRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullInputResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.InputSelectClient.prototype.pullInput =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.InputSelect/PullInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_PullInput);
};


/**
 * @param {!proto.smartcore.api.device.traits.PullInputRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullInputResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.InputSelectPromiseClient.prototype.pullInput =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.InputSelect/PullInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_PullInput);
};


module.exports = proto.smartcore.api.device.traits;

