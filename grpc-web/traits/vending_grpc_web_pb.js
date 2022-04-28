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

var types_change_pb = require('../types/change_pb.js')

var types_image_pb = require('../types/image_pb.js')

var types_number_pb = require('../types/number_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.traits = require('./vending_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.VendingApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.VendingApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.smartcore.traits.ListConsumablesRequest,
 *   !proto.smartcore.traits.ListConsumablesResponse>}
 */
const methodDescriptor_VendingApi_ListConsumables = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/ListConsumables',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.ListConsumablesRequest,
  proto.smartcore.traits.ListConsumablesResponse,
  /**
   * @param {!proto.smartcore.traits.ListConsumablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ListConsumablesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.ListConsumablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.ListConsumablesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ListConsumablesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.listConsumables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.VendingApi/ListConsumables',
      request,
      metadata || {},
      methodDescriptor_VendingApi_ListConsumables,
      callback);
};


/**
 * @param {!proto.smartcore.traits.ListConsumablesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ListConsumablesResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.listConsumables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.VendingApi/ListConsumables',
      request,
      metadata || {},
      methodDescriptor_VendingApi_ListConsumables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullConsumablesRequest,
 *   !proto.smartcore.traits.PullConsumablesResponse>}
 */
const methodDescriptor_VendingApi_PullConsumables = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/PullConsumables',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullConsumablesRequest,
  proto.smartcore.traits.PullConsumablesResponse,
  /**
   * @param {!proto.smartcore.traits.PullConsumablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullConsumablesResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullConsumablesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullConsumablesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.pullConsumables =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.VendingApi/PullConsumables',
      request,
      metadata || {},
      methodDescriptor_VendingApi_PullConsumables);
};


/**
 * @param {!proto.smartcore.traits.PullConsumablesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullConsumablesResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.pullConsumables =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.VendingApi/PullConsumables',
      request,
      metadata || {},
      methodDescriptor_VendingApi_PullConsumables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.GetStockRequest,
 *   !proto.smartcore.traits.Consumable.Stock>}
 */
const methodDescriptor_VendingApi_GetStock = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/GetStock',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.GetStockRequest,
  proto.smartcore.traits.Consumable.Stock,
  /**
   * @param {!proto.smartcore.traits.GetStockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Consumable.Stock.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.GetStockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Consumable.Stock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Consumable.Stock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.getStock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.VendingApi/GetStock',
      request,
      metadata || {},
      methodDescriptor_VendingApi_GetStock,
      callback);
};


/**
 * @param {!proto.smartcore.traits.GetStockRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Consumable.Stock>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.getStock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.VendingApi/GetStock',
      request,
      metadata || {},
      methodDescriptor_VendingApi_GetStock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.UpdateStockRequest,
 *   !proto.smartcore.traits.Consumable.Stock>}
 */
const methodDescriptor_VendingApi_UpdateStock = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/UpdateStock',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.UpdateStockRequest,
  proto.smartcore.traits.Consumable.Stock,
  /**
   * @param {!proto.smartcore.traits.UpdateStockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Consumable.Stock.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.UpdateStockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Consumable.Stock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Consumable.Stock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.updateStock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.VendingApi/UpdateStock',
      request,
      metadata || {},
      methodDescriptor_VendingApi_UpdateStock,
      callback);
};


/**
 * @param {!proto.smartcore.traits.UpdateStockRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Consumable.Stock>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.updateStock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.VendingApi/UpdateStock',
      request,
      metadata || {},
      methodDescriptor_VendingApi_UpdateStock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullStockRequest,
 *   !proto.smartcore.traits.PullStockResponse>}
 */
const methodDescriptor_VendingApi_PullStock = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/PullStock',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullStockRequest,
  proto.smartcore.traits.PullStockResponse,
  /**
   * @param {!proto.smartcore.traits.PullStockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullStockResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullStockRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullStockResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.pullStock =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.VendingApi/PullStock',
      request,
      metadata || {},
      methodDescriptor_VendingApi_PullStock);
};


/**
 * @param {!proto.smartcore.traits.PullStockRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullStockResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.pullStock =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.VendingApi/PullStock',
      request,
      metadata || {},
      methodDescriptor_VendingApi_PullStock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.ListInventoryRequest,
 *   !proto.smartcore.traits.ListInventoryResponse>}
 */
const methodDescriptor_VendingApi_ListInventory = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/ListInventory',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.ListInventoryRequest,
  proto.smartcore.traits.ListInventoryResponse,
  /**
   * @param {!proto.smartcore.traits.ListInventoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.ListInventoryResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.ListInventoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.ListInventoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.ListInventoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.listInventory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.VendingApi/ListInventory',
      request,
      metadata || {},
      methodDescriptor_VendingApi_ListInventory,
      callback);
};


/**
 * @param {!proto.smartcore.traits.ListInventoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.ListInventoryResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.listInventory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.VendingApi/ListInventory',
      request,
      metadata || {},
      methodDescriptor_VendingApi_ListInventory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.PullInventoryRequest,
 *   !proto.smartcore.traits.PullInventoryResponse>}
 */
const methodDescriptor_VendingApi_PullInventory = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/PullInventory',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.traits.PullInventoryRequest,
  proto.smartcore.traits.PullInventoryResponse,
  /**
   * @param {!proto.smartcore.traits.PullInventoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.PullInventoryResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.PullInventoryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullInventoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.pullInventory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.VendingApi/PullInventory',
      request,
      metadata || {},
      methodDescriptor_VendingApi_PullInventory);
};


/**
 * @param {!proto.smartcore.traits.PullInventoryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.PullInventoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.pullInventory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.traits.VendingApi/PullInventory',
      request,
      metadata || {},
      methodDescriptor_VendingApi_PullInventory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.DispenseRequest,
 *   !proto.smartcore.traits.Consumable.Stock>}
 */
const methodDescriptor_VendingApi_Dispense = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/Dispense',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.DispenseRequest,
  proto.smartcore.traits.Consumable.Stock,
  /**
   * @param {!proto.smartcore.traits.DispenseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Consumable.Stock.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.DispenseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Consumable.Stock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Consumable.Stock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.dispense =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.VendingApi/Dispense',
      request,
      metadata || {},
      methodDescriptor_VendingApi_Dispense,
      callback);
};


/**
 * @param {!proto.smartcore.traits.DispenseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Consumable.Stock>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.dispense =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.VendingApi/Dispense',
      request,
      metadata || {},
      methodDescriptor_VendingApi_Dispense);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.traits.StopDispenseRequest,
 *   !proto.smartcore.traits.Consumable.Stock>}
 */
const methodDescriptor_VendingApi_StopDispense = new grpc.web.MethodDescriptor(
  '/smartcore.traits.VendingApi/StopDispense',
  grpc.web.MethodType.UNARY,
  proto.smartcore.traits.StopDispenseRequest,
  proto.smartcore.traits.Consumable.Stock,
  /**
   * @param {!proto.smartcore.traits.StopDispenseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.traits.Consumable.Stock.deserializeBinary
);


/**
 * @param {!proto.smartcore.traits.StopDispenseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.smartcore.traits.Consumable.Stock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.traits.Consumable.Stock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.traits.VendingApiClient.prototype.stopDispense =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.traits.VendingApi/StopDispense',
      request,
      metadata || {},
      methodDescriptor_VendingApi_StopDispense,
      callback);
};


/**
 * @param {!proto.smartcore.traits.StopDispenseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.traits.Consumable.Stock>}
 *     Promise that resolves to the response
 */
proto.smartcore.traits.VendingApiPromiseClient.prototype.stopDispense =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.traits.VendingApi/StopDispense',
      request,
      metadata || {},
      methodDescriptor_VendingApi_StopDispense);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.VendingInfoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.traits.VendingInfoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


module.exports = proto.smartcore.traits;
