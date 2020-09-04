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


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var types_change_pb = require('../../types/change_pb.js')

var types_time_period_pb = require('../../types/time/period_pb.js')

var types_time_unit_pb = require('../../types/time/unit_pb.js')
const proto = {};
proto.smartcore = {};
proto.smartcore.api = {};
proto.smartcore.api.device = {};
proto.smartcore.api.device.traits = require('./booking_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.smartcore.api.device.traits.BookingApiClient =
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
proto.smartcore.api.device.traits.BookingApiPromiseClient =
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
 *   !proto.smartcore.api.device.traits.ListBookingsRequest,
 *   !proto.smartcore.api.device.traits.ListBookingsResponse>}
 */
const methodDescriptor_BookingApi_ListBookings = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BookingApi/ListBookings',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.ListBookingsRequest,
  proto.smartcore.api.device.traits.ListBookingsResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ListBookingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.ListBookingsRequest,
 *   !proto.smartcore.api.device.traits.ListBookingsResponse>}
 */
const methodInfo_BookingApi_ListBookings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.ListBookingsResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.ListBookingsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.ListBookingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.ListBookingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiClient.prototype.listBookings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/ListBookings',
      request,
      metadata || {},
      methodDescriptor_BookingApi_ListBookings,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.ListBookingsResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BookingApiPromiseClient.prototype.listBookings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/ListBookings',
      request,
      metadata || {},
      methodDescriptor_BookingApi_ListBookings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.CheckInBookingRequest,
 *   !proto.smartcore.api.device.traits.CheckInBookingResponse>}
 */
const methodDescriptor_BookingApi_CheckInBooking = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BookingApi/CheckInBooking',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.CheckInBookingRequest,
  proto.smartcore.api.device.traits.CheckInBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.CheckInBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.CheckInBookingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.CheckInBookingRequest,
 *   !proto.smartcore.api.device.traits.CheckInBookingResponse>}
 */
const methodInfo_BookingApi_CheckInBooking = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.CheckInBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.CheckInBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.CheckInBookingResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.CheckInBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.CheckInBookingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.CheckInBookingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiClient.prototype.checkInBooking =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/CheckInBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_CheckInBooking,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.CheckInBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.CheckInBookingResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BookingApiPromiseClient.prototype.checkInBooking =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/CheckInBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_CheckInBooking);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.CheckOutBookingRequest,
 *   !proto.smartcore.api.device.traits.CheckOutBookingResponse>}
 */
const methodDescriptor_BookingApi_CheckOutBooking = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BookingApi/CheckOutBooking',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.CheckOutBookingRequest,
  proto.smartcore.api.device.traits.CheckOutBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.CheckOutBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.CheckOutBookingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.CheckOutBookingRequest,
 *   !proto.smartcore.api.device.traits.CheckOutBookingResponse>}
 */
const methodInfo_BookingApi_CheckOutBooking = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.CheckOutBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.CheckOutBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.CheckOutBookingResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.CheckOutBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.CheckOutBookingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.CheckOutBookingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiClient.prototype.checkOutBooking =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/CheckOutBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_CheckOutBooking,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.CheckOutBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.CheckOutBookingResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BookingApiPromiseClient.prototype.checkOutBooking =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/CheckOutBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_CheckOutBooking);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.CreateBookingRequest,
 *   !proto.smartcore.api.device.traits.CreateBookingResponse>}
 */
const methodDescriptor_BookingApi_CreateBooking = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BookingApi/CreateBooking',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.CreateBookingRequest,
  proto.smartcore.api.device.traits.CreateBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.CreateBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.CreateBookingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.CreateBookingRequest,
 *   !proto.smartcore.api.device.traits.CreateBookingResponse>}
 */
const methodInfo_BookingApi_CreateBooking = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.CreateBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.CreateBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.CreateBookingResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.CreateBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.CreateBookingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.CreateBookingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiClient.prototype.createBooking =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/CreateBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_CreateBooking,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.CreateBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.CreateBookingResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BookingApiPromiseClient.prototype.createBooking =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/CreateBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_CreateBooking);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.UpdateBookingRequest,
 *   !proto.smartcore.api.device.traits.UpdateBookingResponse>}
 */
const methodDescriptor_BookingApi_UpdateBooking = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BookingApi/UpdateBooking',
  grpc.web.MethodType.UNARY,
  proto.smartcore.api.device.traits.UpdateBookingRequest,
  proto.smartcore.api.device.traits.UpdateBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.UpdateBookingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.UpdateBookingRequest,
 *   !proto.smartcore.api.device.traits.UpdateBookingResponse>}
 */
const methodInfo_BookingApi_UpdateBooking = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.UpdateBookingResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.UpdateBookingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.UpdateBookingResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.UpdateBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.smartcore.api.device.traits.UpdateBookingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.UpdateBookingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiClient.prototype.updateBooking =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/UpdateBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_UpdateBooking,
      callback);
};


/**
 * @param {!proto.smartcore.api.device.traits.UpdateBookingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.smartcore.api.device.traits.UpdateBookingResponse>}
 *     Promise that resolves to the response
 */
proto.smartcore.api.device.traits.BookingApiPromiseClient.prototype.updateBooking =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/UpdateBooking',
      request,
      metadata || {},
      methodDescriptor_BookingApi_UpdateBooking);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.smartcore.api.device.traits.ListBookingsRequest,
 *   !proto.smartcore.api.device.traits.PullBookingsResponse>}
 */
const methodDescriptor_BookingApi_PullBookings = new grpc.web.MethodDescriptor(
  '/smartcore.api.device.traits.BookingApi/PullBookings',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.smartcore.api.device.traits.ListBookingsRequest,
  proto.smartcore.api.device.traits.PullBookingsResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullBookingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.smartcore.api.device.traits.ListBookingsRequest,
 *   !proto.smartcore.api.device.traits.PullBookingsResponse>}
 */
const methodInfo_BookingApi_PullBookings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.smartcore.api.device.traits.PullBookingsResponse,
  /**
   * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.smartcore.api.device.traits.PullBookingsResponse.deserializeBinary
);


/**
 * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullBookingsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiClient.prototype.pullBookings =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/PullBookings',
      request,
      metadata || {},
      methodDescriptor_BookingApi_PullBookings);
};


/**
 * @param {!proto.smartcore.api.device.traits.ListBookingsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.smartcore.api.device.traits.PullBookingsResponse>}
 *     The XHR Node Readable Stream
 */
proto.smartcore.api.device.traits.BookingApiPromiseClient.prototype.pullBookings =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/smartcore.api.device.traits.BookingApi/PullBookings',
      request,
      metadata || {},
      methodDescriptor_BookingApi_PullBookings);
};


module.exports = proto.smartcore.api.device.traits;

