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
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./input_select_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.InputSelectClient =
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
proto.smartcore.traits.InputSelectPromiseClient =
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
 *   !proto.smartcore.traits.UpdateInputRequest,
 *   !proto.smartcore.traits.Input>}
 */
const methodDescriptor_InputSelect_UpdateInput = new grpc.web.MethodDescriptor(
  '/smartcore.traits.InputSelect/UpdateInput',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateInputRequest,
  proto.smartcore.traits.Input,
  /**
   * @param {!proto.smartcore.traits.UpdateInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Input.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.UpdateInputRequest,
 *   !proto.smartcore.traits.Input>}
 */
const methodInfo_InputSelect_UpdateInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Input,
  /**
   * @param {!proto.smartcore.traits.UpdateInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Input.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Input)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Input>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.InputSelectClient.prototype.updateInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.InputSelect/UpdateInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_UpdateInput,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Input>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.InputSelectPromiseClient.prototype.updateInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.InputSelect/UpdateInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_UpdateInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetInputRequest,
 *   !proto.smartcore.traits.Input>}
 */
const methodDescriptor_InputSelect_GetInput = new grpc.web.MethodDescriptor(
  '/smartcore.traits.InputSelect/GetInput',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetInputRequest,
  proto.smartcore.traits.Input,
  /**
   * @param {!proto.smartcore.traits.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Input.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.GetInputRequest,
 *   !proto.smartcore.traits.Input>}
 */
const methodInfo_InputSelect_GetInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.Input,
  /**
   * @param {!proto.smartcore.traits.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Input.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.Input)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Input>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.InputSelectClient.prototype.getInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.InputSelect/GetInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_GetInput,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Input>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.InputSelectPromiseClient.prototype.getInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.InputSelect/GetInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_GetInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullInputRequest,
 *   !proto.smartcore.traits.PullInputResponse>}
 */
const methodDescriptor_InputSelect_PullInput = new grpc.web.MethodDescriptor(
  '/smartcore.traits.InputSelect/PullInput',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullInputRequest,
  proto.smartcore.traits.PullInputResponse,
  /**
   * @param {!proto.smartcore.traits.PullInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullInputRequest,
 *   !proto.smartcore.traits.PullInputResponse>}
 */
const methodInfo_InputSelect_PullInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullInputResponse,
  /**
   * @param {!proto.smartcore.traits.PullInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullInputResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullInputRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullInputResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.InputSelectClient.prototype.pullInput =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.InputSelect/PullInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_PullInput);
};


/**
 * @param {!proto.smartcore.traits.PullInputRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullInputResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.InputSelectPromiseClient.prototype.pullInput =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.InputSelect/PullInput',
      request,
      metadata || {},
      methodDescriptor_InputSelect_PullInput);
};


module.exports = proto.smartcore.traits;

