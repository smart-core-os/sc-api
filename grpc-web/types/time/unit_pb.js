// source: types/time/unit.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.smartcore.types.time.Unit', null, global);
/**
 * @enum {number}
 */
proto.smartcore.types.time.Unit = {
  UNIT_SECONDS: 0,
  UNIT_MICROSECONDS: 1,
  UNIT_MILLISECONDS: 2,
  UNIT_NANOSECONDS: 3,
  UNIT_YEARS: 4,
  UNIT_MONTHS: 5,
  UNIT_WEEKS: 6,
  UNIT_DAYS: 7,
  UNIT_HOURS: 8,
  UNIT_MINUTES: 9
};

goog.object.extend(exports, proto.smartcore.types.time);
