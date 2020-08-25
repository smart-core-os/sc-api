import * as jspb from 'google-protobuf'

import * as types_number_pb from '../types/number_pb';


export class Temperature extends jspb.Message {
  getValueCelsius(): number;
  setValueCelsius(value: number): Temperature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Temperature.AsObject;
  static toObject(includeInstance: boolean, msg: Temperature): Temperature.AsObject;
  static serializeBinaryToWriter(message: Temperature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Temperature;
  static deserializeBinaryFromReader(message: Temperature, reader: jspb.BinaryReader): Temperature;
}

export namespace Temperature {
  export type AsObject = {
    valueCelsius: number,
  }
}

export class Volume extends jspb.Message {
  getGain(): types_number_pb.FloatVar | undefined;
  setGain(value?: types_number_pb.FloatVar): Volume;
  hasGain(): boolean;
  clearGain(): Volume;

  getMute(): boolean;
  setMute(value: boolean): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volume.AsObject;
  static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
  static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volume;
  static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
  export type AsObject = {
    gain?: types_number_pb.FloatVar.AsObject,
    mute: boolean,
  }
}

export enum TemperatureUnit { 
  CELSIUS = 0,
  FAHRENHEIT = 1,
  KELVIN = 2,
}
