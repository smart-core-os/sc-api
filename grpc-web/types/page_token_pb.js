// source: types/page_token.proto
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

goog.exportSymbol('proto.smartcore.types.PageToken', null, global);
goog.exportSymbol('proto.smartcore.types.PageToken.PageStartCase', null, global);
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
proto.smartcore.types.PageToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.smartcore.types.PageToken.oneofGroups_);
};
goog.inherits(proto.smartcore.types.PageToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.PageToken.displayName = 'proto.smartcore.types.PageToken';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.smartcore.types.PageToken.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.smartcore.types.PageToken.PageStartCase = {
  PAGE_START_NOT_SET: 0,
  LAST_OFFSET: 1,
  LAST_RESOURCE_NAME: 2
};

/**
 * @return {proto.smartcore.types.PageToken.PageStartCase}
 */
proto.smartcore.types.PageToken.prototype.getPageStartCase = function() {
  return /** @type {proto.smartcore.types.PageToken.PageStartCase} */(jspb.Message.computeOneofCase(this, proto.smartcore.types.PageToken.oneofGroups_[0]));
};



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
proto.smartcore.types.PageToken.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.PageToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.PageToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.PageToken.toObject = function(includeInstance, msg) {
  var f, obj = {
lastOffset: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
lastResourceName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.smartcore.types.PageToken}
 */
proto.smartcore.types.PageToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.PageToken;
  return proto.smartcore.types.PageToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.PageToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.PageToken}
 */
proto.smartcore.types.PageToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastOffset(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastResourceName(value);
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
proto.smartcore.types.PageToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.PageToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.PageToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.PageToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 last_offset = 1;
 * @return {number}
 */
proto.smartcore.types.PageToken.prototype.getLastOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.types.PageToken} returns this
 */
proto.smartcore.types.PageToken.prototype.setLastOffset = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.smartcore.types.PageToken.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.smartcore.types.PageToken} returns this
 */
proto.smartcore.types.PageToken.prototype.clearLastOffset = function() {
  return jspb.Message.setOneofField(this, 1, proto.smartcore.types.PageToken.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.PageToken.prototype.hasLastOffset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string last_resource_name = 2;
 * @return {string}
 */
proto.smartcore.types.PageToken.prototype.getLastResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.PageToken} returns this
 */
proto.smartcore.types.PageToken.prototype.setLastResourceName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.smartcore.types.PageToken.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.smartcore.types.PageToken} returns this
 */
proto.smartcore.types.PageToken.prototype.clearLastResourceName = function() {
  return jspb.Message.setOneofField(this, 2, proto.smartcore.types.PageToken.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.PageToken.prototype.hasLastResourceName = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.smartcore.types);
