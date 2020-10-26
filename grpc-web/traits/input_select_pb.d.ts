import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class InputSelectAttributes extends jspb.Message {
  getInputsList(): Array<AvPort>;
  setInputsList(value: Array<AvPort>): InputSelectAttributes;
  clearInputsList(): InputSelectAttributes;
  addInputs(value?: AvPort, index?: number): AvPort;

  getSupportedFeature(): InputSelectFeature;
  setSupportedFeature(value: InputSelectFeature): InputSelectAttributes;

  getOutputsList(): Array<AvPort>;
  setOutputsList(value: Array<AvPort>): InputSelectAttributes;
  clearOutputsList(): InputSelectAttributes;
  addOutputs(value?: AvPort, index?: number): AvPort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputSelectAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: InputSelectAttributes): InputSelectAttributes.AsObject;
  static serializeBinaryToWriter(message: InputSelectAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputSelectAttributes;
  static deserializeBinaryFromReader(message: InputSelectAttributes, reader: jspb.BinaryReader): InputSelectAttributes;
}

export namespace InputSelectAttributes {
  export type AsObject = {
    inputsList: Array<AvPort.AsObject>,
    supportedFeature: InputSelectFeature,
    outputsList: Array<AvPort.AsObject>,
  }
}

export class AvPort extends jspb.Message {
  getName(): string;
  setName(value: string): AvPort;

  getTitle(): string;
  setTitle(value: string): AvPort;

  getDescription(): string;
  setDescription(value: string): AvPort;

  getSupportedFeature(): InputSelectFeature;
  setSupportedFeature(value: InputSelectFeature): AvPort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvPort.AsObject;
  static toObject(includeInstance: boolean, msg: AvPort): AvPort.AsObject;
  static serializeBinaryToWriter(message: AvPort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvPort;
  static deserializeBinaryFromReader(message: AvPort, reader: jspb.BinaryReader): AvPort;
}

export namespace AvPort {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
    supportedFeature: InputSelectFeature,
  }
}

export class Input extends jspb.Message {
  getVideoInput(): string;
  setVideoInput(value: string): Input;

  getAudioInput(): string;
  setAudioInput(value: string): Input;

  getIndependentAv(): boolean;
  setIndependentAv(value: boolean): Input;

  getOutput(): string;
  setOutput(value: string): Input;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    videoInput: string,
    audioInput: string,
    independentAv: boolean,
    output: string,
  }
}

export class UpdateInputRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateInputRequest;

  getInput(): Input | undefined;
  setInput(value?: Input): UpdateInputRequest;
  hasInput(): boolean;
  clearInput(): UpdateInputRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateInputRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInputRequest): UpdateInputRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInputRequest;
  static deserializeBinaryFromReader(message: UpdateInputRequest, reader: jspb.BinaryReader): UpdateInputRequest;
}

export namespace UpdateInputRequest {
  export type AsObject = {
    name: string,
    input?: Input.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetInputRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetInputRequest;

  getOutput(): string;
  setOutput(value: string): GetInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputRequest): GetInputRequest.AsObject;
  static serializeBinaryToWriter(message: GetInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputRequest;
  static deserializeBinaryFromReader(message: GetInputRequest, reader: jspb.BinaryReader): GetInputRequest;
}

export namespace GetInputRequest {
  export type AsObject = {
    name: string,
    output: string,
  }
}

export class PullInputRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PullInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullInputRequest): PullInputRequest.AsObject;
  static serializeBinaryToWriter(message: PullInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullInputRequest;
  static deserializeBinaryFromReader(message: PullInputRequest, reader: jspb.BinaryReader): PullInputRequest;
}

export namespace PullInputRequest {
  export type AsObject = {
    name: string,
  }
}

export class PullInputResponse extends jspb.Message {
  getChangesList(): Array<PullInputResponse.Change>;
  setChangesList(value: Array<PullInputResponse.Change>): PullInputResponse;
  clearChangesList(): PullInputResponse;
  addChanges(value?: PullInputResponse.Change, index?: number): PullInputResponse.Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullInputResponse): PullInputResponse.AsObject;
  static serializeBinaryToWriter(message: PullInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullInputResponse;
  static deserializeBinaryFromReader(message: PullInputResponse, reader: jspb.BinaryReader): PullInputResponse;
}

export namespace PullInputResponse {
  export type AsObject = {
    changesList: Array<PullInputResponse.Change.AsObject>,
  }

  export class Change extends jspb.Message {
    getName(): string;
    setName(value: string): Change;

    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Change;
    hasCreateTime(): boolean;
    clearCreateTime(): Change;

    getInput(): Input | undefined;
    setInput(value?: Input): Change;
    hasInput(): boolean;
    clearInput(): Change;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Change.AsObject;
    static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
    static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Change;
    static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
  }

  export namespace Change {
    export type AsObject = {
      name: string,
      createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      input?: Input.AsObject,
    }
  }

}

export enum InputSelectFeature { 
  AV = 0,
  AUDIO_ONLY = 1,
  VIDEO_ONLY = 2,
  INDEPENDENT = 3,
}
