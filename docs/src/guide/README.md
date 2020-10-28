# Introduction

## What is Smart Core

Smart Core is an API, tools, and recipes for creating smart buildings. It is built using modern and open IT approaches to allow building users and developers to get the most out of the built environment.

These documents describe the API of Smart Core.


## API Basics

::: warning
This guide assumes a working understanding of [protocol buffers](https://developers.google.com/protocol-buffers) and 
knowledge of concepts like programming languages, APIs, networks, and code generation. Some parts will talk about 
[gRPC](https://grpc.io/) though that will come later.
:::

The Smart Core API isn't something you can simply install to magically get a smart building. It is a tool used by programmers to have the programs they write talk to each other without needing to go through the effort and pain of defining the API language itself.

The API is defined by a set of `*.proto` files located in the `protobuf` directory of the Smart Core repository. To help, Smart Core also maintains a number of generated libraries for languages like `Go` and `NodeJS` so you don't have to re-generate the Smart Core client and server libraries yourself.

The API definitions are split into two main categories [Traits and Services](traits-and-services.md). Traits define how to talk to devices, services define everything else.


## Getting Started

The simplest way to begin with a Smart Core building is add one of the pre-built Smart Core API libraries to your project.

<code-switcher :languages="{go:'Go', java:'Java', nodejs: 'NodeJS'}">
<template v-slot:go>

```bash
go get -u git.vanti.co.uk/smartcore/sc-api/go
```
</template>
<template v-slot:java>

```xml
<dependency>
  <groupId>dev.smartcore</groupId>
  <artifactId>sc-api-java</artifactId>
  <version>1.0.0-SNAPSHOT</version>
</dependency>
```

</template>
<template v-slot:nodejs>

```bash
# api proto files
yarn add @smart-core-os/sc-api
# tools used to call the api
yarn add grpc @grpc/proto-loader google-proto-files
```
</template>
</code-switcher>

If your programming platform isn't pre-built you can clone the Smart Core repository and run the `protoc` tool against the source `.proto` files as needed.

Using the API follows standard [gRPC patterns](https://grpc.io/docs/languages/) for your chosen platform

<code-switcher :languages="{go:'Go',java:'Java',nodejs:'NodeJS'}">
<template v-slot:go>

```go
package main

import (
    "fmt"
    
    "git.vanti.co.uk/smartcore/sc-api/go/traits"
    "google.golang.org/grpc"
)

func main() {
    // connect to a Smart Core server
    conn, _ := grpc.Dial("10.11.100.200:23557")
    defer conn.Close()
    // create a trait client
    onOffClient := traits.NewOnOffApiClient(conn)
    // turn my-device on
    res, _ := onOffClient.UpdateOnOff(&traits.UpdateOnOffRequest{
        Name: "my-device",
        OnOff: &traits.OnOff{
            State: traits.OnOff_ON,
        },
    })
    fmt.Printf("my-device is now %v", res.GetState())
    // Outputs: my-device is now ON
}
```

</template>
<template v-slot:java>

```java
import dev.smartcore.traits.*;
import io.grpc.*;

class OnOffClient {
  public static void main(String[] args) {
    // connect to the Smart Core server
    Channel channel = ManagedChannelBuilder.forAddress("10.11.100.200", 23557).build();
    // create a trait client
    OnOffApiBlockingStub onOffClient = OnOffApiGrpc.newBlockingStub(channel);
    try {
      // turn on my-device
      OnOff res = onOffClient.UpdateOnOff(UpdateOnOffRequest.newBuilder()
          .setOnOff(OnOff.newBuilder()
              .setState(OnOff.State.ON)
          )
          .build());
      System.out.println("my-device is now " + res.getState());
      // > my-device is now ON
    } catch (StatusRuntimeException e) {
      // handle the error
    }
  }
}
```
</template>
<template v-slot:nodejs>

```js
const path = require('path'); 
const PROTO_ROOT = path.dirname(require.resolve('@smart-core-os/sc-api/package.json'));
const INCLUDE_DIRS = [
  path.dirname(require.resolve('google-proto-files/package.json')), // well-known-types
  path.resolve(PROTO_ROOT, './proto/'), // root of all the smart core protos
];
const PROTO_PATH = path.resolve(PROTO_ROOT, './protos/traits/on-off.proto');

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    default: true,
    oneofs: true,
    includeDirs: INCLUDE_DIRS
  }
);
const traits = grpc.loadPackageDefinition(packageDefinition).smartcore.traits;

// create a trait client that talks to the Smart Core server
const client = new traits.OnOffApi('10.11.100.200:23557');
// turn on my-device
client.updateOnOff({
  name: 'my-device',
  on_off: {state: 'ON'}
}, (err, res) => {
  if (err) return; // handle errors
  console.log(`my-device is now ${res.state}`);
  // prints 'my-device is now ON'
});
```
</template>
</code-switcher>

Congratulations :rocket:, you've just successfully connected to a Smart Core building and asked it to turn something on.


## Names

Everything that can be queried or controlled in a Smart Core building has a name. In the [Getting Started](#getting-started) example we used the name `my-device` to identify within the Smart Core server located at `10.11.100.200:23557` the thing that we wished to turn on.

Names in Smart Core are simply a sequence of characters, there is no restriction on length, content, format, or anything else. `my-device`, `The Front Door`, `cn=Office,dc=Company`, `uk/lon/hq/l14/printer2`, and `LT_021` are all perfectly valid Smart Core names. 

The thing that is identified by a name is a logical component of a building, it responsible for some aspect of the buildings function. It could be a space `room-42`, a device `visitor-kiosk`, or a sub-device `tv/left-speaker`. If it is replaced, maybe it is faulty, then the Smart Core name remains the same as the building function hasn't changed.


### Best Practices

Smart Core recommends a hierarchical structure for your names, typically following the [relative resource name](https://cloud.google.com/apis/design/resource_names) pattern: `{collection}/{resource}/{collection}/{resource}`. Using a known scheme allows the people using the building to infer and deduce expected names, which reduces how many times you need to refer back to that spreadsheet of names.

Where possible, device names should be human understandable, globally unique, and describe how the name is different from the other names in the building. `ns/acme/sites/12way/floors/7/rooms/N12/devices/VC_001` is a good name for the _video conference unit_ in room _N12_, on _floor 7_, in the _ACME_ site _12 Way_. Using this example you can imagine a suite of rooms that all look similar having `VC_001` devices in them, and you can imagine `N12` having a number of devices that make up the functionality of the room.
