// source: types/connection.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.smartcore.api.types.CommStatus', null, global);
goog.exportSymbol('proto.smartcore.api.types.Connectivity', null, global);
/**
 * @enum {number}
 */
proto.smartcore.api.types.Connectivity = {
  NOT_APPLICABLE: 0,
  DISCONNECTED: 1,
  CONNECTED: 2
};

/**
 * @enum {number}
 */
proto.smartcore.api.types.CommStatus = {
  COMM_UNKNOWN: 0,
  COMM_SUCCESS: 1,
  COMM_FAILURE: 2
};

goog.object.extend(exports, proto.smartcore.api.types);
