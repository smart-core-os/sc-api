/**
 * @fileoverview gRPC-Web generated client stub for smartcore.api.device.info
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_change_pb = require('../../types/change_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.info = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.info.AuthProviderClient =
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
proto.smartcore.api.device.info.AuthProviderPromiseClient =
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
 *   !proto.smartcore.api.device.info.AddAccountRequest,
 *   !proto.smartcore.api.device.info.AddAccountResponse>}
 */
const methodDescriptor_AuthProvider_AddAccount = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.info.AuthProvider/AddAccount',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.info.AddAccountRequest,
  proto.smartcore.api.device.info.AddAccountResponse,
  /**
   * @param {!proto.smartcore.api.device.info.AddAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.AddAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.info.AddAccountRequest,
 *   !proto.smartcore.api.device.info.AddAccountResponse>}
 */
const methodInfo_AuthProvider_AddAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.info.AddAccountResponse,
  /**
   * @param {!proto.smartcore.api.device.info.AddAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.AddAccountResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.info.AddAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.info.AddAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.AddAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.AuthProviderClient.prototype.addAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/AddAccount',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_AddAccount,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.info.AddAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.info.AddAccountResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.info.AuthProviderPromiseClient.prototype.addAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/AddAccount',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_AddAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.info.RemoveAccountRequest,
 *   !proto.smartcore.api.device.info.RemoveAccountResponse>}
 */
const methodDescriptor_AuthProvider_RemoveAccount = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.info.AuthProvider/RemoveAccount',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.info.RemoveAccountRequest,
  proto.smartcore.api.device.info.RemoveAccountResponse,
  /**
   * @param {!proto.smartcore.api.device.info.RemoveAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.RemoveAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.info.RemoveAccountRequest,
 *   !proto.smartcore.api.device.info.RemoveAccountResponse>}
 */
const methodInfo_AuthProvider_RemoveAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.info.RemoveAccountResponse,
  /**
   * @param {!proto.smartcore.api.device.info.RemoveAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.RemoveAccountResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.info.RemoveAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.info.RemoveAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.RemoveAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.AuthProviderClient.prototype.removeAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/RemoveAccount',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_RemoveAccount,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.info.RemoveAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.info.RemoveAccountResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.info.AuthProviderPromiseClient.prototype.removeAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/RemoveAccount',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_RemoveAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.info.UpdateAccountPermissionsRequest,
 *   !proto.smartcore.api.device.info.UpdateAccountPermissionsResponse>}
 */
const methodDescriptor_AuthProvider_UpdateAccountPermissions = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.info.AuthProvider/UpdateAccountPermissions',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.info.UpdateAccountPermissionsRequest,
  proto.smartcore.api.device.info.UpdateAccountPermissionsResponse,
  /**
   * @param {!proto.smartcore.api.device.info.UpdateAccountPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.UpdateAccountPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.info.UpdateAccountPermissionsRequest,
 *   !proto.smartcore.api.device.info.UpdateAccountPermissionsResponse>}
 */
const methodInfo_AuthProvider_UpdateAccountPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.info.UpdateAccountPermissionsResponse,
  /**
   * @param {!proto.smartcore.api.device.info.UpdateAccountPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.UpdateAccountPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.info.UpdateAccountPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.info.UpdateAccountPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.UpdateAccountPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.AuthProviderClient.prototype.updateAccountPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/UpdateAccountPermissions',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_UpdateAccountPermissions,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.info.UpdateAccountPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.info.UpdateAccountPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.info.AuthProviderPromiseClient.prototype.updateAccountPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/UpdateAccountPermissions',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_UpdateAccountPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.info.GenerateTokenRequest,
 *   !proto.smartcore.api.device.info.GenerateTokenResponse>}
 */
const methodDescriptor_AuthProvider_GenerateToken = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.info.AuthProvider/GenerateToken',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.info.GenerateTokenRequest,
  proto.smartcore.api.device.info.GenerateTokenResponse,
  /**
   * @param {!proto.smartcore.api.device.info.GenerateTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.GenerateTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.info.GenerateTokenRequest,
 *   !proto.smartcore.api.device.info.GenerateTokenResponse>}
 */
const methodInfo_AuthProvider_GenerateToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.info.GenerateTokenResponse,
  /**
   * @param {!proto.smartcore.api.device.info.GenerateTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.info.GenerateTokenResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.info.GenerateTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.info.GenerateTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.info.GenerateTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.info.AuthProviderClient.prototype.generateToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/GenerateToken',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_GenerateToken,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.info.GenerateTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.info.GenerateTokenResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.info.AuthProviderPromiseClient.prototype.generateToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.info.AuthProvider/GenerateToken',
      request,
      metadata || {},
      methodDescriptor_AuthProvider_GenerateToken);
};


module.exports = proto.smartcore.api.device.info;

