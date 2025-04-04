// source: types/image.proto
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

goog.exportSymbol('proto.smartcore.types.Image', null, global);
goog.exportSymbol('proto.smartcore.types.Image.Content', null, global);
goog.exportSymbol('proto.smartcore.types.Image.Content.ContentCase', null, global);
goog.exportSymbol('proto.smartcore.types.Image.Source', null, global);
goog.exportSymbol('proto.smartcore.types.Image.Source.Purpose', null, global);
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
proto.smartcore.types.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.smartcore.types.Image.repeatedFields_, null);
};
goog.inherits(proto.smartcore.types.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.Image.displayName = 'proto.smartcore.types.Image';
}
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
proto.smartcore.types.Image.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.smartcore.types.Image.Content.oneofGroups_);
};
goog.inherits(proto.smartcore.types.Image.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.Image.Content.displayName = 'proto.smartcore.types.Image.Content';
}
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
proto.smartcore.types.Image.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.smartcore.types.Image.Source.repeatedFields_, null);
};
goog.inherits(proto.smartcore.types.Image.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.Image.Source.displayName = 'proto.smartcore.types.Image.Source';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.smartcore.types.Image.repeatedFields_ = [1];



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
proto.smartcore.types.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
sourcesList: jspb.Message.toObjectList(msg.getSourcesList(),
    proto.smartcore.types.Image.Source.toObject, includeInstance),
description: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.smartcore.types.Image}
 */
proto.smartcore.types.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.Image;
  return proto.smartcore.types.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.Image}
 */
proto.smartcore.types.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.smartcore.types.Image.Source;
      reader.readMessage(value,proto.smartcore.types.Image.Source.deserializeBinaryFromReader);
      msg.addSources(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.smartcore.types.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.smartcore.types.Image.Source.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.smartcore.types.Image.Content.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.smartcore.types.Image.Content.ContentCase = {
  CONTENT_NOT_SET: 0,
  BODY: 2,
  URL: 3,
  REF: 4,
  PATH: 5
};

/**
 * @return {proto.smartcore.types.Image.Content.ContentCase}
 */
proto.smartcore.types.Image.Content.prototype.getContentCase = function() {
  return /** @type {proto.smartcore.types.Image.Content.ContentCase} */(jspb.Message.computeOneofCase(this, proto.smartcore.types.Image.Content.oneofGroups_[0]));
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
proto.smartcore.types.Image.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.Image.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.Image.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Image.Content.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
body: msg.getBody_asB64(),
url: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
ref: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
path: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.smartcore.types.Image.Content}
 */
proto.smartcore.types.Image.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.Image.Content;
  return proto.smartcore.types.Image.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.Image.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.Image.Content}
 */
proto.smartcore.types.Image.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBody(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.smartcore.types.Image.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.Image.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.Image.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Image.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.smartcore.types.Image.Content.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes body = 2;
 * @return {!(string|Uint8Array)}
 */
proto.smartcore.types.Image.Content.prototype.getBody = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes body = 2;
 * This is a type-conversion wrapper around `getBody()`
 * @return {string}
 */
proto.smartcore.types.Image.Content.prototype.getBody_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBody()));
};


/**
 * optional bytes body = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBody()`
 * @return {!Uint8Array}
 */
proto.smartcore.types.Image.Content.prototype.getBody_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBody()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.setBody = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.smartcore.types.Image.Content.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.clearBody = function() {
  return jspb.Message.setOneofField(this, 2, proto.smartcore.types.Image.Content.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.Image.Content.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.smartcore.types.Image.Content.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.setUrl = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.smartcore.types.Image.Content.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.clearUrl = function() {
  return jspb.Message.setOneofField(this, 3, proto.smartcore.types.Image.Content.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.Image.Content.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ref = 4;
 * @return {string}
 */
proto.smartcore.types.Image.Content.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.setRef = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.smartcore.types.Image.Content.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.clearRef = function() {
  return jspb.Message.setOneofField(this, 4, proto.smartcore.types.Image.Content.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.Image.Content.prototype.hasRef = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string path = 5;
 * @return {string}
 */
proto.smartcore.types.Image.Content.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.setPath = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.smartcore.types.Image.Content.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.smartcore.types.Image.Content} returns this
 */
proto.smartcore.types.Image.Content.prototype.clearPath = function() {
  return jspb.Message.setOneofField(this, 5, proto.smartcore.types.Image.Content.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.Image.Content.prototype.hasPath = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.smartcore.types.Image.Source.repeatedFields_ = [1];



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
proto.smartcore.types.Image.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.Image.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.Image.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Image.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
srcList: jspb.Message.toObjectList(msg.getSrcList(),
    proto.smartcore.types.Image.Content.toObject, includeInstance),
width: jspb.Message.getFieldWithDefault(msg, 2, 0),
height: jspb.Message.getFieldWithDefault(msg, 3, 0),
purpose: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.smartcore.types.Image.Source}
 */
proto.smartcore.types.Image.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.Image.Source;
  return proto.smartcore.types.Image.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.Image.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.Image.Source}
 */
proto.smartcore.types.Image.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.smartcore.types.Image.Content;
      reader.readMessage(value,proto.smartcore.types.Image.Content.deserializeBinaryFromReader);
      msg.addSrc(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {!proto.smartcore.types.Image.Source.Purpose} */ (reader.readEnum());
      msg.setPurpose(value);
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
proto.smartcore.types.Image.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.Image.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.Image.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Image.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.smartcore.types.Image.Content.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPurpose();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.smartcore.types.Image.Source.Purpose = {
  PURPOSE_UNSPECIFIED: 0,
  ANY: 1,
  MASKABLE: 2
};

/**
 * repeated Content src = 1;
 * @return {!Array<!proto.smartcore.types.Image.Content>}
 */
proto.smartcore.types.Image.Source.prototype.getSrcList = function() {
  return /** @type{!Array<!proto.smartcore.types.Image.Content>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.smartcore.types.Image.Content, 1));
};


/**
 * @param {!Array<!proto.smartcore.types.Image.Content>} value
 * @return {!proto.smartcore.types.Image.Source} returns this
*/
proto.smartcore.types.Image.Source.prototype.setSrcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.smartcore.types.Image.Content=} opt_value
 * @param {number=} opt_index
 * @return {!proto.smartcore.types.Image.Content}
 */
proto.smartcore.types.Image.Source.prototype.addSrc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.smartcore.types.Image.Content, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.smartcore.types.Image.Source} returns this
 */
proto.smartcore.types.Image.Source.prototype.clearSrcList = function() {
  return this.setSrcList([]);
};


/**
 * optional int32 width = 2;
 * @return {number}
 */
proto.smartcore.types.Image.Source.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.types.Image.Source} returns this
 */
proto.smartcore.types.Image.Source.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 height = 3;
 * @return {number}
 */
proto.smartcore.types.Image.Source.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.types.Image.Source} returns this
 */
proto.smartcore.types.Image.Source.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Purpose purpose = 4;
 * @return {!proto.smartcore.types.Image.Source.Purpose}
 */
proto.smartcore.types.Image.Source.prototype.getPurpose = function() {
  return /** @type {!proto.smartcore.types.Image.Source.Purpose} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.smartcore.types.Image.Source.Purpose} value
 * @return {!proto.smartcore.types.Image.Source} returns this
 */
proto.smartcore.types.Image.Source.prototype.setPurpose = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Source sources = 1;
 * @return {!Array<!proto.smartcore.types.Image.Source>}
 */
proto.smartcore.types.Image.prototype.getSourcesList = function() {
  return /** @type{!Array<!proto.smartcore.types.Image.Source>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.smartcore.types.Image.Source, 1));
};


/**
 * @param {!Array<!proto.smartcore.types.Image.Source>} value
 * @return {!proto.smartcore.types.Image} returns this
*/
proto.smartcore.types.Image.prototype.setSourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.smartcore.types.Image.Source=} opt_value
 * @param {number=} opt_index
 * @return {!proto.smartcore.types.Image.Source}
 */
proto.smartcore.types.Image.prototype.addSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.smartcore.types.Image.Source, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.smartcore.types.Image} returns this
 */
proto.smartcore.types.Image.prototype.clearSourcesList = function() {
  return this.setSourcesList([]);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.smartcore.types.Image.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.Image} returns this
 */
proto.smartcore.types.Image.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.smartcore.types);
