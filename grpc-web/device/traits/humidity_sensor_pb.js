// source: device/traits/humidity_sensor.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.smartcore.api.device.traits.GetHumidityRequest', null, global);
goog.exportSymbol('proto.smartcore.api.device.traits.Humidity', null, global);
goog.exportSymbol('proto.smartcore.api.device.traits.HumidityChange', null, global);
goog.exportSymbol('proto.smartcore.api.device.traits.HumiditySensorAttributes', null, global);
goog.exportSymbol('proto.smartcore.api.device.traits.PullHumidityRequest', null, global);
goog.exportSymbol('proto.smartcore.api.device.traits.PullHumidityResponse', null, global);
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
proto.smartcore.api.device.traits.HumiditySensorAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.api.device.traits.HumiditySensorAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.api.device.traits.HumiditySensorAttributes.displayName = 'proto.smartcore.api.device.traits.HumiditySensorAttributes';
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
proto.smartcore.api.device.traits.Humidity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.api.device.traits.Humidity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.api.device.traits.Humidity.displayName = 'proto.smartcore.api.device.traits.Humidity';
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
proto.smartcore.api.device.traits.GetHumidityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.api.device.traits.GetHumidityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.api.device.traits.GetHumidityRequest.displayName = 'proto.smartcore.api.device.traits.GetHumidityRequest';
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
proto.smartcore.api.device.traits.PullHumidityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.api.device.traits.PullHumidityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.api.device.traits.PullHumidityRequest.displayName = 'proto.smartcore.api.device.traits.PullHumidityRequest';
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
proto.smartcore.api.device.traits.PullHumidityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.smartcore.api.device.traits.PullHumidityResponse.repeatedFields_, null);
};
goog.inherits(proto.smartcore.api.device.traits.PullHumidityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.api.device.traits.PullHumidityResponse.displayName = 'proto.smartcore.api.device.traits.PullHumidityResponse';
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
proto.smartcore.api.device.traits.HumidityChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smartcore.api.device.traits.HumidityChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.smartcore.api.device.traits.HumidityChange.displayName = 'proto.smartcore.api.device.traits.HumidityChange';
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
proto.smartcore.api.device.traits.HumiditySensorAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.api.device.traits.HumiditySensorAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.api.device.traits.HumiditySensorAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.HumiditySensorAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.smartcore.api.device.traits.HumiditySensorAttributes}
 */
proto.smartcore.api.device.traits.HumiditySensorAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.api.device.traits.HumiditySensorAttributes;
  return proto.smartcore.api.device.traits.HumiditySensorAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.api.device.traits.HumiditySensorAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.api.device.traits.HumiditySensorAttributes}
 */
proto.smartcore.api.device.traits.HumiditySensorAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.smartcore.api.device.traits.HumiditySensorAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.api.device.traits.HumiditySensorAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.api.device.traits.HumiditySensorAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.HumiditySensorAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.smartcore.api.device.traits.Humidity.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.api.device.traits.Humidity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.api.device.traits.Humidity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.Humidity.toObject = function(includeInstance, msg) {
  var f, obj = {
    relativeHumidity: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.smartcore.api.device.traits.Humidity}
 */
proto.smartcore.api.device.traits.Humidity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.api.device.traits.Humidity;
  return proto.smartcore.api.device.traits.Humidity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.api.device.traits.Humidity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.api.device.traits.Humidity}
 */
proto.smartcore.api.device.traits.Humidity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRelativeHumidity(value);
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
proto.smartcore.api.device.traits.Humidity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.api.device.traits.Humidity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.api.device.traits.Humidity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.Humidity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelativeHumidity();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double relative_humidity = 1;
 * @return {number}
 */
proto.smartcore.api.device.traits.Humidity.prototype.getRelativeHumidity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.smartcore.api.device.traits.Humidity} returns this
 */
proto.smartcore.api.device.traits.Humidity.prototype.setRelativeHumidity = function(value) {
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
proto.smartcore.api.device.traits.GetHumidityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.api.device.traits.GetHumidityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.api.device.traits.GetHumidityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.GetHumidityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.smartcore.api.device.traits.GetHumidityRequest}
 */
proto.smartcore.api.device.traits.GetHumidityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.api.device.traits.GetHumidityRequest;
  return proto.smartcore.api.device.traits.GetHumidityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.api.device.traits.GetHumidityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.api.device.traits.GetHumidityRequest}
 */
proto.smartcore.api.device.traits.GetHumidityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.smartcore.api.device.traits.GetHumidityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.api.device.traits.GetHumidityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.api.device.traits.GetHumidityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.GetHumidityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.api.device.traits.GetHumidityRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.api.device.traits.GetHumidityRequest} returns this
 */
proto.smartcore.api.device.traits.GetHumidityRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.smartcore.api.device.traits.PullHumidityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.api.device.traits.PullHumidityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.api.device.traits.PullHumidityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.PullHumidityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.smartcore.api.device.traits.PullHumidityRequest}
 */
proto.smartcore.api.device.traits.PullHumidityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.api.device.traits.PullHumidityRequest;
  return proto.smartcore.api.device.traits.PullHumidityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.api.device.traits.PullHumidityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.api.device.traits.PullHumidityRequest}
 */
proto.smartcore.api.device.traits.PullHumidityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.smartcore.api.device.traits.PullHumidityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.api.device.traits.PullHumidityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.api.device.traits.PullHumidityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.PullHumidityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.api.device.traits.PullHumidityRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.api.device.traits.PullHumidityRequest} returns this
 */
proto.smartcore.api.device.traits.PullHumidityRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.smartcore.api.device.traits.PullHumidityResponse.repeatedFields_ = [1];



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
proto.smartcore.api.device.traits.PullHumidityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.api.device.traits.PullHumidityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.api.device.traits.PullHumidityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.PullHumidityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    proto.smartcore.api.device.traits.HumidityChange.toObject, includeInstance)
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
 * @return {!proto.smartcore.api.device.traits.PullHumidityResponse}
 */
proto.smartcore.api.device.traits.PullHumidityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.api.device.traits.PullHumidityResponse;
  return proto.smartcore.api.device.traits.PullHumidityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.api.device.traits.PullHumidityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.api.device.traits.PullHumidityResponse}
 */
proto.smartcore.api.device.traits.PullHumidityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.smartcore.api.device.traits.HumidityChange;
      reader.readMessage(value,proto.smartcore.api.device.traits.HumidityChange.deserializeBinaryFromReader);
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
proto.smartcore.api.device.traits.PullHumidityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.api.device.traits.PullHumidityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.api.device.traits.PullHumidityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.PullHumidityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.smartcore.api.device.traits.HumidityChange.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HumidityChange changes = 1;
 * @return {!Array<!proto.smartcore.api.device.traits.HumidityChange>}
 */
proto.smartcore.api.device.traits.PullHumidityResponse.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.smartcore.api.device.traits.HumidityChange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.smartcore.api.device.traits.HumidityChange, 1));
};


/**
 * @param {!Array<!proto.smartcore.api.device.traits.HumidityChange>} value
 * @return {!proto.smartcore.api.device.traits.PullHumidityResponse} returns this
*/
proto.smartcore.api.device.traits.PullHumidityResponse.prototype.setChangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.smartcore.api.device.traits.HumidityChange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.smartcore.api.device.traits.HumidityChange}
 */
proto.smartcore.api.device.traits.PullHumidityResponse.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.smartcore.api.device.traits.HumidityChange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.smartcore.api.device.traits.PullHumidityResponse} returns this
 */
proto.smartcore.api.device.traits.PullHumidityResponse.prototype.clearChangesList = function() {
  return this.setChangesList([]);
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
proto.smartcore.api.device.traits.HumidityChange.prototype.toObject = function(opt_includeInstance) {
  return proto.smartcore.api.device.traits.HumidityChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smartcore.api.device.traits.HumidityChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.HumidityChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    humidity: (f = msg.getHumidity()) && proto.smartcore.api.device.traits.Humidity.toObject(includeInstance, f)
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
 * @return {!proto.smartcore.api.device.traits.HumidityChange}
 */
proto.smartcore.api.device.traits.HumidityChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smartcore.api.device.traits.HumidityChange;
  return proto.smartcore.api.device.traits.HumidityChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smartcore.api.device.traits.HumidityChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smartcore.api.device.traits.HumidityChange}
 */
proto.smartcore.api.device.traits.HumidityChange.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCreateTime(value);
      break;
    case 3:
      var value = new proto.smartcore.api.device.traits.Humidity;
      reader.readMessage(value,proto.smartcore.api.device.traits.Humidity.deserializeBinaryFromReader);
      msg.setHumidity(value);
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
proto.smartcore.api.device.traits.HumidityChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smartcore.api.device.traits.HumidityChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smartcore.api.device.traits.HumidityChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smartcore.api.device.traits.HumidityChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHumidity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.smartcore.api.device.traits.Humidity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.smartcore.api.device.traits.HumidityChange} returns this
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.smartcore.api.device.traits.HumidityChange} returns this
*/
proto.smartcore.api.device.traits.HumidityChange.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.api.device.traits.HumidityChange} returns this
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Humidity humidity = 3;
 * @return {?proto.smartcore.api.device.traits.Humidity}
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.getHumidity = function() {
  return /** @type{?proto.smartcore.api.device.traits.Humidity} */ (
    jspb.Message.getWrapperField(this, proto.smartcore.api.device.traits.Humidity, 3));
};


/**
 * @param {?proto.smartcore.api.device.traits.Humidity|undefined} value
 * @return {!proto.smartcore.api.device.traits.HumidityChange} returns this
*/
proto.smartcore.api.device.traits.HumidityChange.prototype.setHumidity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.smartcore.api.device.traits.HumidityChange} returns this
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.clearHumidity = function() {
  return this.setHumidity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.smartcore.api.device.traits.HumidityChange.prototype.hasHumidity = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.smartcore.api.device.traits);
