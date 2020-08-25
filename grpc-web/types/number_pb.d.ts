import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as types_tween_pb from '../types/tween_pb';


export class NumberCapping extends jspb.Message {
  getMin(): InvalidNumberBehaviour;
  setMin(value: InvalidNumberBehaviour): NumberCapping;

  getStep(): InvalidNumberBehaviour;
  setStep(value: InvalidNumberBehaviour): NumberCapping;

  getMax(): InvalidNumberBehaviour;
  setMax(value: InvalidNumberBehaviour): NumberCapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumberCapping.AsObject;
  static toObject(includeInstance: boolean, msg: NumberCapping): NumberCapping.AsObject;
  static serializeBinaryToWriter(message: NumberCapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumberCapping;
  static deserializeBinaryFromReader(message: NumberCapping, reader: jspb.BinaryReader): NumberCapping;
}

export namespace NumberCapping {
  export type AsObject = {
    min: InvalidNumberBehaviour,
    step: InvalidNumberBehaviour,
    max: InvalidNumberBehaviour,
  }
}

export class Int32Bounds extends jspb.Message {
  getMin(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setMin(value?: google_protobuf_wrappers_pb.Int32Value): Int32Bounds;
  hasMin(): boolean;
  clearMin(): Int32Bounds;

  getMax(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setMax(value?: google_protobuf_wrappers_pb.Int32Value): Int32Bounds;
  hasMax(): boolean;
  clearMax(): Int32Bounds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Bounds.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Bounds): Int32Bounds.AsObject;
  static serializeBinaryToWriter(message: Int32Bounds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Bounds;
  static deserializeBinaryFromReader(message: Int32Bounds, reader: jspb.BinaryReader): Int32Bounds;
}

export namespace Int32Bounds {
  export type AsObject = {
    min?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    max?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class Int32Var extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setValue(value?: google_protobuf_wrappers_pb.Int32Value): Int32Var;
  hasValue(): boolean;
  clearValue(): Int32Var;

  getRamp(): types_tween_pb.Tween | undefined;
  setRamp(value?: types_tween_pb.Tween): Int32Var;
  hasRamp(): boolean;
  clearRamp(): Int32Var;

  getTargetValue(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTargetValue(value?: google_protobuf_wrappers_pb.Int32Value): Int32Var;
  hasTargetValue(): boolean;
  clearTargetValue(): Int32Var;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Var.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Var): Int32Var.AsObject;
  static serializeBinaryToWriter(message: Int32Var, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Var;
  static deserializeBinaryFromReader(message: Int32Var, reader: jspb.BinaryReader): Int32Var;
}

export namespace Int32Var {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    ramp?: types_tween_pb.Tween.AsObject,
    targetValue?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class Int32Attributes extends jspb.Message {
  getBounds(): Int32Bounds | undefined;
  setBounds(value?: Int32Bounds): Int32Attributes;
  hasBounds(): boolean;
  clearBounds(): Int32Attributes;

  getStep(): number;
  setStep(value: number): Int32Attributes;

  getSupportsDelta(): boolean;
  setSupportsDelta(value: boolean): Int32Attributes;

  getRampSupport(): types_tween_pb.TweenSupport;
  setRampSupport(value: types_tween_pb.TweenSupport): Int32Attributes;

  getDefaultCapping(): NumberCapping | undefined;
  setDefaultCapping(value?: NumberCapping): Int32Attributes;
  hasDefaultCapping(): boolean;
  clearDefaultCapping(): Int32Attributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Attributes.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Attributes): Int32Attributes.AsObject;
  static serializeBinaryToWriter(message: Int32Attributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Attributes;
  static deserializeBinaryFromReader(message: Int32Attributes, reader: jspb.BinaryReader): Int32Attributes;
}

export namespace Int32Attributes {
  export type AsObject = {
    bounds?: Int32Bounds.AsObject,
    step: number,
    supportsDelta: boolean,
    rampSupport: types_tween_pb.TweenSupport,
    defaultCapping?: NumberCapping.AsObject,
  }
}

export class FloatBounds extends jspb.Message {
  getMin(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMin(value?: google_protobuf_wrappers_pb.FloatValue): FloatBounds;
  hasMin(): boolean;
  clearMin(): FloatBounds;

  getMax(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMax(value?: google_protobuf_wrappers_pb.FloatValue): FloatBounds;
  hasMax(): boolean;
  clearMax(): FloatBounds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatBounds.AsObject;
  static toObject(includeInstance: boolean, msg: FloatBounds): FloatBounds.AsObject;
  static serializeBinaryToWriter(message: FloatBounds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatBounds;
  static deserializeBinaryFromReader(message: FloatBounds, reader: jspb.BinaryReader): FloatBounds;
}

export namespace FloatBounds {
  export type AsObject = {
    min?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    max?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class FloatVar extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.FloatValue): FloatVar;
  hasValue(): boolean;
  clearValue(): FloatVar;

  getRamp(): types_tween_pb.Tween | undefined;
  setRamp(value?: types_tween_pb.Tween): FloatVar;
  hasRamp(): boolean;
  clearRamp(): FloatVar;

  getTargetValue(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTargetValue(value?: google_protobuf_wrappers_pb.FloatValue): FloatVar;
  hasTargetValue(): boolean;
  clearTargetValue(): FloatVar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatVar.AsObject;
  static toObject(includeInstance: boolean, msg: FloatVar): FloatVar.AsObject;
  static serializeBinaryToWriter(message: FloatVar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatVar;
  static deserializeBinaryFromReader(message: FloatVar, reader: jspb.BinaryReader): FloatVar;
}

export namespace FloatVar {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    ramp?: types_tween_pb.Tween.AsObject,
    targetValue?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class FloatAttributes extends jspb.Message {
  getBounds(): FloatBounds | undefined;
  setBounds(value?: FloatBounds): FloatAttributes;
  hasBounds(): boolean;
  clearBounds(): FloatAttributes;

  getStep(): number;
  setStep(value: number): FloatAttributes;

  getSupportsDelta(): boolean;
  setSupportsDelta(value: boolean): FloatAttributes;

  getRampSupport(): types_tween_pb.TweenSupport;
  setRampSupport(value: types_tween_pb.TweenSupport): FloatAttributes;

  getDefaultCapping(): NumberCapping | undefined;
  setDefaultCapping(value?: NumberCapping): FloatAttributes;
  hasDefaultCapping(): boolean;
  clearDefaultCapping(): FloatAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: FloatAttributes): FloatAttributes.AsObject;
  static serializeBinaryToWriter(message: FloatAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatAttributes;
  static deserializeBinaryFromReader(message: FloatAttributes, reader: jspb.BinaryReader): FloatAttributes;
}

export namespace FloatAttributes {
  export type AsObject = {
    bounds?: FloatBounds.AsObject,
    step: number,
    supportsDelta: boolean,
    rampSupport: types_tween_pb.TweenSupport,
    defaultCapping?: NumberCapping.AsObject,
  }
}

export enum InvalidNumberBehaviour { 
  UNSPECIFIED = 0,
  RESTRICT = 1,
  ERROR = 2,
  ALLOW = 3,
}
