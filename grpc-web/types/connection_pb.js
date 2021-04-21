// source: types/connection.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.smartcore.types.CommStatus', null, global);
goog.exportSymbol('proto.smartcore.types.Connectivity', null, global);
/**
 * @enum {number}
 */
proto.smartcore.types.Connectivity = {
  NOT_APPLICABLE: 0,
  DISCONNECTED: 1,
  CONNECTED: 2
};

/**
 * @enum {number}
 */
proto.smartcore.types.CommStatus = {
  COMM_UNKNOWN: 0,
  COMM_SUCCESS: 1,
  COMM_FAILURE: 2
};

goog.object.extend(exports, proto.smartcore.types);
