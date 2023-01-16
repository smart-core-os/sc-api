// source: types/unit.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var types_tween_pb = require('../types/tween_pb.js');
goog.object.extend(proto, types_tween_pb);
goog.exportSymbol('proto.smartcore.types.AudioLevel', null, global);
goog.exportSymbol('proto.smartcore.types.AudioLevelChange', null, global);
goog.exportSymbol('proto.smartcore.types.MuteSupport', null, global);
goog.exportSymbol('proto.smartcore.types.Temperature', null, global);
goog.exportSymbol('proto.smartcore.types.TemperatureUnit', null, global);
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
proto.smartcore.types.Temperature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.types.Temperature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.Temperature.displayName = 'proto.smartcore.types.Temperature';
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
proto.smartcore.types.AudioLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.types.AudioLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.AudioLevel.displayName = 'proto.smartcore.types.AudioLevel';
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
proto.smartcore.types.AudioLevelChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.types.AudioLevelChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.types.AudioLevelChange.displayName = 'proto.smartcore.types.AudioLevelChange';
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
proto.smartcore.types.Temperature.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.Temperature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.Temperature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Temperature.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueCelsius: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.smartcore.types.Temperature}
 */
proto.smartcore.types.Temperature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.Temperature;
  return proto.smartcore.types.Temperature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.Temperature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.Temperature}
 */
proto.smartcore.types.Temperature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValueCelsius(value);
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
proto.smartcore.types.Temperature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.Temperature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.Temperature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.Temperature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueCelsius();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double value_celsius = 1;
 * @return {number}
 */
proto.smartcore.types.Temperature.prototype.getValueCelsius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.types.Temperature} returns this
 */
proto.smartcore.types.Temperature.prototype.setValueCelsius = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
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
proto.smartcore.types.AudioLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.AudioLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.AudioLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.AudioLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    gain: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    gainTween: (f = msg.getGainTween()) && types_tween_pb.Tween.toObject(includeInstance, f),
    targetGain: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    muted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.smartcore.types.AudioLevel}
 */
proto.smartcore.types.AudioLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.AudioLevel;
  return proto.smartcore.types.AudioLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.AudioLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.AudioLevel}
 */
proto.smartcore.types.AudioLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGain(value);
      break;
    case 2:
      var value = new types_tween_pb.Tween;
      reader.readMessage(value,types_tween_pb.Tween.deserializeBinaryFromReader);
      msg.setGainTween(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetGain(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMuted(value);
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
proto.smartcore.types.AudioLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.AudioLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.AudioLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.AudioLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGain();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getGainTween();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_tween_pb.Tween.serializeBinaryToWriter
    );
  }
  f = message.getTargetGain();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMuted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional float gain = 1;
 * @return {number}
 */
proto.smartcore.types.AudioLevel.prototype.getGain = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.types.AudioLevel} returns this
 */
proto.smartcore.types.AudioLevel.prototype.setGain = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Tween gain_tween = 2;
 * @return {?proto.smartcore.types.Tween}
 */
proto.smartcore.types.AudioLevel.prototype.getGainTween = function() {
  return /** @type{?proto.smartcore.types.Tween} */ (
    jspb.Message.getWrapperField(this, types_tween_pb.Tween, 2));
};


/**
 * @param {?proto.smartcore.types.Tween|undefined} value
 * @return {!proto.smartcore.types.AudioLevel} returns this
*/
proto.smartcore.types.AudioLevel.prototype.setGainTween = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.types.AudioLevel} returns this
 */
proto.smartcore.types.AudioLevel.prototype.clearGainTween = function() {
  return this.setGainTween(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.AudioLevel.prototype.hasGainTween = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float target_gain = 3;
 * @return {number}
 */
proto.smartcore.types.AudioLevel.prototype.getTargetGain = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.types.AudioLevel} returns this
 */
proto.smartcore.types.AudioLevel.prototype.setTargetGain = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool muted = 4;
 * @return {boolean}
 */
proto.smartcore.types.AudioLevel.prototype.getMuted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.smartcore.types.AudioLevel} returns this
 */
proto.smartcore.types.AudioLevel.prototype.setMuted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.smartcore.types.AudioLevelChange.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.types.AudioLevelChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.types.AudioLevelChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.AudioLevelChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    changeTime: (f = msg.getChangeTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    level: (f = msg.getLevel()) && proto.smartcore.types.AudioLevel.toObject(includeInstance, f)
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
 * @return {!proto.smartcore.types.AudioLevelChange}
 */
proto.smartcore.types.AudioLevelChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.types.AudioLevelChange;
  return proto.smartcore.types.AudioLevelChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.types.AudioLevelChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.types.AudioLevelChange}
 */
proto.smartcore.types.AudioLevelChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeTime(value);
      break;
    case 3:
      var value = new proto.smartcore.types.AudioLevel;
      reader.readMessage(value,proto.smartcore.types.AudioLevel.deserializeBinaryFromReader);
      msg.setLevel(value);
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
proto.smartcore.types.AudioLevelChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.types.AudioLevelChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.types.AudioLevelChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.types.AudioLevelChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChangeTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLevel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.smartcore.types.AudioLevel.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.types.AudioLevelChange.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.types.AudioLevelChange} returns this
 */
proto.smartcore.types.AudioLevelChange.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp change_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.smartcore.types.AudioLevelChange.prototype.getChangeTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.smartcore.types.AudioLevelChange} returns this
*/
proto.smartcore.types.AudioLevelChange.prototype.setChangeTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.types.AudioLevelChange} returns this
 */
proto.smartcore.types.AudioLevelChange.prototype.clearChangeTime = function() {
  return this.setChangeTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.AudioLevelChange.prototype.hasChangeTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AudioLevel level = 3;
 * @return {?proto.smartcore.types.AudioLevel}
 */
proto.smartcore.types.AudioLevelChange.prototype.getLevel = function() {
  return /** @type{?proto.smartcore.types.AudioLevel} */ (
    jspb.Message.getWrapperField(this, proto.smartcore.types.AudioLevel, 3));
};


/**
 * @param {?proto.smartcore.types.AudioLevel|undefined} value
 * @return {!proto.smartcore.types.AudioLevelChange} returns this
*/
proto.smartcore.types.AudioLevelChange.prototype.setLevel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.types.AudioLevelChange} returns this
 */
proto.smartcore.types.AudioLevelChange.prototype.clearLevel = function() {
  return this.setLevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.types.AudioLevelChange.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.smartcore.types.TemperatureUnit = {
  TEMPERATURE_UNIT_UNSPECIFIED: 0,
  CELSIUS: 1,
  FAHRENHEIT: 2,
  KELVIN: 3
};

/**
 * @enum {number}
 */
proto.smartcore.types.MuteSupport = {
  MUTE_SUPPORT_UNSPECIFIED: 0,
  MUTE_NATIVE: 1,
  MUTE_EMULATED: 2
};

goog.object.extend(exports, proto.smartcore.types);
