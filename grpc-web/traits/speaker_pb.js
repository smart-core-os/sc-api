// source: traits/speaker.proto
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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var types_number_pb = require('../types/number_pb.js');
goog.object.extend(proto, types_number_pb);
var types_unit_pb = require('../types/unit_pb.js');
goog.object.extend(proto, types_unit_pb);
var types_volume_pb = require('../types/volume_pb.js');
goog.object.extend(proto, types_volume_pb);
goog.exportSymbol('proto.smartcore.traits.GetSpeakerVolumeRequest', null, global);
goog.exportSymbol('proto.smartcore.traits.PullSpeakerVolumeRequest', null, global);
goog.exportSymbol('proto.smartcore.traits.PullSpeakerVolumeResponse', null, global);
goog.exportSymbol('proto.smartcore.traits.SpeakerAttributes', null, global);
goog.exportSymbol('proto.smartcore.traits.UpdateSpeakerVolumeRequest', null, global);
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
proto.smartcore.traits.SpeakerAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.traits.SpeakerAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.traits.SpeakerAttributes.displayName = 'proto.smartcore.traits.SpeakerAttributes';
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
proto.smartcore.traits.GetSpeakerVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.traits.GetSpeakerVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.traits.GetSpeakerVolumeRequest.displayName = 'proto.smartcore.traits.GetSpeakerVolumeRequest';
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
proto.smartcore.traits.UpdateSpeakerVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.traits.UpdateSpeakerVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.traits.UpdateSpeakerVolumeRequest.displayName = 'proto.smartcore.traits.UpdateSpeakerVolumeRequest';
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
proto.smartcore.traits.PullSpeakerVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.traits.PullSpeakerVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.traits.PullSpeakerVolumeRequest.displayName = 'proto.smartcore.traits.PullSpeakerVolumeRequest';
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
proto.smartcore.traits.PullSpeakerVolumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.smartcore.traits.PullSpeakerVolumeResponse.repeatedFields_, null);
};
goog.inherits(proto.smartcore.traits.PullSpeakerVolumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.traits.PullSpeakerVolumeResponse.displayName = 'proto.smartcore.traits.PullSpeakerVolumeResponse';
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
proto.smartcore.traits.SpeakerAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.traits.SpeakerAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.traits.SpeakerAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.SpeakerAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeAttributes: (f = msg.getVolumeAttributes()) && types_number_pb.FloatAttributes.toObject(includeInstance, f),
    muteSupport: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.smartcore.traits.SpeakerAttributes}
 */
proto.smartcore.traits.SpeakerAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.traits.SpeakerAttributes;
  return proto.smartcore.traits.SpeakerAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.traits.SpeakerAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.traits.SpeakerAttributes}
 */
proto.smartcore.traits.SpeakerAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_number_pb.FloatAttributes;
      reader.readMessage(value,types_number_pb.FloatAttributes.deserializeBinaryFromReader);
      msg.setVolumeAttributes(value);
      break;
    case 3:
      var value = /** @type {!proto.smartcore.api.types.MuteSupport} */ (reader.readEnum());
      msg.setMuteSupport(value);
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
proto.smartcore.traits.SpeakerAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.traits.SpeakerAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.traits.SpeakerAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.SpeakerAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeAttributes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_number_pb.FloatAttributes.serializeBinaryToWriter
    );
  }
  f = message.getMuteSupport();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional smartcore.api.types.FloatAttributes volume_attributes = 1;
 * @return {?proto.smartcore.api.types.FloatAttributes}
 */
proto.smartcore.traits.SpeakerAttributes.prototype.getVolumeAttributes = function() {
  return /** @type{?proto.smartcore.api.types.FloatAttributes} */ (
    jspb.Message.getWrapperField(this, types_number_pb.FloatAttributes, 1));
};


/**
 * @param {?proto.smartcore.api.types.FloatAttributes|undefined} value
 * @return {!proto.smartcore.traits.SpeakerAttributes} returns this
*/
proto.smartcore.traits.SpeakerAttributes.prototype.setVolumeAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.traits.SpeakerAttributes} returns this
 */
proto.smartcore.traits.SpeakerAttributes.prototype.clearVolumeAttributes = function() {
  return this.setVolumeAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.traits.SpeakerAttributes.prototype.hasVolumeAttributes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional smartcore.api.types.MuteSupport mute_support = 3;
 * @return {!proto.smartcore.api.types.MuteSupport}
 */
proto.smartcore.traits.SpeakerAttributes.prototype.getMuteSupport = function() {
  return /** @type {!proto.smartcore.api.types.MuteSupport} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.smartcore.api.types.MuteSupport} value
 * @return {!proto.smartcore.traits.SpeakerAttributes} returns this
 */
proto.smartcore.traits.SpeakerAttributes.prototype.setMuteSupport = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.traits.GetSpeakerVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fields: (f = msg.getFields()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.smartcore.traits.GetSpeakerVolumeRequest}
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.traits.GetSpeakerVolumeRequest;
  return proto.smartcore.traits.GetSpeakerVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.traits.GetSpeakerVolumeRequest}
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFields(value);
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
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.traits.GetSpeakerVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.traits.GetSpeakerVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFields();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.traits.GetSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask fields = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.getFields = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.smartcore.traits.GetSpeakerVolumeRequest} returns this
*/
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.setFields = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.traits.GetSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.clearFields = function() {
  return this.setFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.traits.GetSpeakerVolumeRequest.prototype.hasFields = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.traits.UpdateSpeakerVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volume: (f = msg.getVolume()) && types_unit_pb.Volume.toObject(includeInstance, f),
    delta: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.traits.UpdateSpeakerVolumeRequest;
  return proto.smartcore.traits.UpdateSpeakerVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new types_unit_pb.Volume;
      reader.readMessage(value,types_unit_pb.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelta(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.traits.UpdateSpeakerVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_unit_pb.Volume.serializeBinaryToWriter
    );
  }
  f = message.getDelta();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional smartcore.api.types.Volume volume = 2;
 * @return {?proto.smartcore.api.types.Volume}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.getVolume = function() {
  return /** @type{?proto.smartcore.api.types.Volume} */ (
    jspb.Message.getWrapperField(this, types_unit_pb.Volume, 2));
};


/**
 * @param {?proto.smartcore.api.types.Volume|undefined} value
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} returns this
*/
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.setVolume = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.clearVolume = function() {
  return this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool delta = 3;
 * @return {boolean}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.getDelta = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.setDelta = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} returns this
*/
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.traits.UpdateSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.traits.UpdateSpeakerVolumeRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.traits.PullSpeakerVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fields: (f = msg.getFields()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.smartcore.traits.PullSpeakerVolumeRequest}
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.traits.PullSpeakerVolumeRequest;
  return proto.smartcore.traits.PullSpeakerVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.traits.PullSpeakerVolumeRequest}
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFields(value);
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
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.traits.PullSpeakerVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.traits.PullSpeakerVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFields();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.traits.PullSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask fields = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.getFields = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.smartcore.traits.PullSpeakerVolumeRequest} returns this
*/
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.setFields = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.traits.PullSpeakerVolumeRequest} returns this
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.clearFields = function() {
  return this.setFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.traits.PullSpeakerVolumeRequest.prototype.hasFields = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.repeatedFields_ = [1];



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
proto.smartcore.traits.PullSpeakerVolumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.traits.PullSpeakerVolumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.traits.PullSpeakerVolumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    types_volume_pb.VolumeChange.toObject, includeInstance)
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
 * @return {!proto.smartcore.traits.PullSpeakerVolumeResponse}
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.traits.PullSpeakerVolumeResponse;
  return proto.smartcore.traits.PullSpeakerVolumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.traits.PullSpeakerVolumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.traits.PullSpeakerVolumeResponse}
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_volume_pb.VolumeChange;
      reader.readMessage(value,types_volume_pb.VolumeChange.deserializeBinaryFromReader);
      msg.addChanges(value);
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
proto.smartcore.traits.PullSpeakerVolumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.traits.PullSpeakerVolumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.traits.PullSpeakerVolumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_volume_pb.VolumeChange.serializeBinaryToWriter
    );
  }
};


/**
 * repeated smartcore.api.types.VolumeChange changes = 1;
 * @return {!Array<!proto.smartcore.api.types.VolumeChange>}
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.smartcore.api.types.VolumeChange>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_volume_pb.VolumeChange, 1));
};


/**
 * @param {!Array<!proto.smartcore.api.types.VolumeChange>} value
 * @return {!proto.smartcore.traits.PullSpeakerVolumeResponse} returns this
*/
proto.smartcore.traits.PullSpeakerVolumeResponse.prototype.setChangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.smartcore.api.types.VolumeChange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.smartcore.api.types.VolumeChange}
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.smartcore.api.types.VolumeChange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.smartcore.traits.PullSpeakerVolumeResponse} returns this
 */
proto.smartcore.traits.PullSpeakerVolumeResponse.prototype.clearChangesList = function() {
  return this.setChangesList([]);
};


goog.object.extend(exports, proto.smartcore.traits);