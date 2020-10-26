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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./audit_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.AuditClient =
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
proto.smartcore.traits.AuditPromiseClient =
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
 *   !proto.smartcore.traits.ListAuditRecordsRequest,
 *   !proto.smartcore.traits.ListAuditRecordsResponse>}
 */
const methodDescriptor_Audit_ListAuditRecords = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Audit/ListAuditRecords',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.ListAuditRecordsRequest,
  proto.smartcore.traits.ListAuditRecordsResponse,
  /**
   * @param {!proto.smartcore.traits.ListAuditRecordsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ListAuditRecordsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.ListAuditRecordsRequest,
 *   !proto.smartcore.traits.ListAuditRecordsResponse>}
 */
const methodInfo_Audit_ListAuditRecords = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.ListAuditRecordsResponse,
  /**
   * @param {!proto.smartcore.traits.ListAuditRecordsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ListAuditRecordsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.ListAuditRecordsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.ListAuditRecordsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ListAuditRecordsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AuditClient.prototype.listAuditRecords =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Audit/ListAuditRecords',
      request,
      metadata || {},
      methodDescriptor_Audit_ListAuditRecords,
      callback);
};


/**
 * @param {!proto.smartcore.traits.ListAuditRecordsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ListAuditRecordsResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.AuditPromiseClient.prototype.listAuditRecords =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Audit/ListAuditRecords',
      request,
      metadata || {},
      methodDescriptor_Audit_ListAuditRecords);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.CreateAuditRecordRequest,
 *   !proto.smartcore.traits.AuditRecord>}
 */
const methodDescriptor_Audit_CreateAuditRecord = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Audit/CreateAuditRecord',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.CreateAuditRecordRequest,
  proto.smartcore.traits.AuditRecord,
  /**
   * @param {!proto.smartcore.traits.CreateAuditRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AuditRecord.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.CreateAuditRecordRequest,
 *   !proto.smartcore.traits.AuditRecord>}
 */
const methodInfo_Audit_CreateAuditRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.AuditRecord,
  /**
   * @param {!proto.smartcore.traits.CreateAuditRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.AuditRecord.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.CreateAuditRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.traits.AuditRecord)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.AuditRecord>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AuditClient.prototype.createAuditRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.Audit/CreateAuditRecord',
      request,
      metadata || {},
      methodDescriptor_Audit_CreateAuditRecord,
      callback);
};


/**
 * @param {!proto.smartcore.traits.CreateAuditRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.AuditRecord>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.AuditPromiseClient.prototype.createAuditRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.Audit/CreateAuditRecord',
      request,
      metadata || {},
      methodDescriptor_Audit_CreateAuditRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullAuditRecordsRequest,
 *   !proto.smartcore.traits.PullAuditRecordsResponse>}
 */
const methodDescriptor_Audit_PullAuditRecords = new grpc.web.MethodDescriptor(
  '/smartcore.traits.Audit/PullAuditRecords',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullAuditRecordsRequest,
  proto.smartcore.traits.PullAuditRecordsResponse,
  /**
   * @param {!proto.smartcore.traits.PullAuditRecordsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAuditRecordsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.traits.PullAuditRecordsRequest,
 *   !proto.smartcore.traits.PullAuditRecordsResponse>}
 */
const methodInfo_Audit_PullAuditRecords = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.traits.PullAuditRecordsResponse,
  /**
   * @param {!proto.smartcore.traits.PullAuditRecordsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullAuditRecordsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullAuditRecordsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAuditRecordsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AuditClient.prototype.pullAuditRecords =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Audit/PullAuditRecords',
      request,
      metadata || {},
      methodDescriptor_Audit_PullAuditRecords);
};


/**
 * @param {!proto.smartcore.traits.PullAuditRecordsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullAuditRecordsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.AuditPromiseClient.prototype.pullAuditRecords =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.Audit/PullAuditRecords',
      request,
      metadata || {},
      methodDescriptor_Audit_PullAuditRecords);
};


module.exports = proto.smartcore.traits;

