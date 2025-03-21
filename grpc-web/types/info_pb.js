// source: types/info.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.smartcore.types.PullSupport', null, global);
goog.exportSymbol('proto.smartcore.types.ResourceSupport', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.smartcore.types.ResourceSupport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.types.ResourceSupport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.ResourceSupport.displayName = 'proto.smartcore.types.ResourceSupport';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.smartcore.types.ResourceSupport.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.ResourceSupport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.ResourceSupport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.ResourceSupport.toObject = function(includeInstance, msg) {
  var f, obj = {
readable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
writable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
observable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
writableFields: (f = msg.getWritableFields()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
pullSupport: jspb.Message.getFieldWithDefault(msg, 5, 0),
pullPoll: (f = msg.getPullPoll()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.smartcore.types.ResourceSupport}
 */
proto.smartcore.types.ResourceSupport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.ResourceSupport;
  return proto.smartcore.types.ResourceSupport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.ResourceSupport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.ResourceSupport}
 */
proto.smartcore.types.ResourceSupport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadable(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWritable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setObservable(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setWritableFields(value);
      break;
    case 5:
      var value = /** @type {!proto.smartcore.types.PullSupport} */ (reader.readEnum());
      msg.setPullSupport(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPullPoll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.smartcore.types.ResourceSupport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.ResourceSupport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.ResourceSupport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.ResourceSupport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReadable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getWritable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getObservable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWritableFields();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPullSupport();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPullPoll();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool readable = 1;
 * @return {boolean}
 */
proto.smartcore.types.ResourceSupport.prototype.getReadable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.smartcore.types.ResourceSupport} returns this
 */
proto.smartcore.types.ResourceSupport.prototype.setReadable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool writable = 2;
 * @return {boolean}
 */
proto.smartcore.types.ResourceSupport.prototype.getWritable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.smartcore.types.ResourceSupport} returns this
 */
proto.smartcore.types.ResourceSupport.prototype.setWritable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool observable = 3;
 * @return {boolean}
 */
proto.smartcore.types.ResourceSupport.prototype.getObservable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.smartcore.types.ResourceSupport} returns this
 */
proto.smartcore.types.ResourceSupport.prototype.setObservable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask writable_fields = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.smartcore.types.ResourceSupport.prototype.getWritableFields = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.smartcore.types.ResourceSupport} returns this
*/
proto.smartcore.types.ResourceSupport.prototype.setWritableFields = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.types.ResourceSupport} returns this
 */
proto.smartcore.types.ResourceSupport.prototype.clearWritableFields = function() {
  return this.setWritableFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.ResourceSupport.prototype.hasWritableFields = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PullSupport pull_support = 5;
 * @return {!proto.smartcore.types.PullSupport}
 */
proto.smartcore.types.ResourceSupport.prototype.getPullSupport = function() {
  return /** @type {!proto.smartcore.types.PullSupport} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.smartcore.types.PullSupport} value
 * @return {!proto.smartcore.types.ResourceSupport} returns this
 */
proto.smartcore.types.ResourceSupport.prototype.setPullSupport = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Duration pull_poll = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.smartcore.types.ResourceSupport.prototype.getPullPoll = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.smartcore.types.ResourceSupport} returns this
*/
proto.smartcore.types.ResourceSupport.prototype.setPullPoll = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.types.ResourceSupport} returns this
 */
proto.smartcore.types.ResourceSupport.prototype.clearPullPoll = function() {
  return this.setPullPoll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.ResourceSupport.prototype.hasPullPoll = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.smartcore.types.PullSupport = {
  PULL_SUPPORT_UNSPECIFIED: 0,
  PULL_SUPPORT_NATIVE: 1,
  PULL_SUPPORT_EMULATED: 2
};

goog.object.extend(exports, proto.smartcore.types);
