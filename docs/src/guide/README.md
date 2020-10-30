# Introduction

## What is Smart Core

Smart Core is an open platform that connects technology systems in the built environment, enabling a consistent approach to systems integration.

These documents describe the API of Smart Core.


## API Basics

::: warning Prerequisites
This guide assumes awareness of concepts like APIs, networks, servers, and programming languages. It references [protocol buffers](https://developers.google.com/protocol-buffers) and [gRPC](https://grpc.io/) and shows examples in common programming languages like Go, Java, and NodeJS.
:::

The Smart Core API defines how different parts of a building can talk to each other to enable building features. It defines common language and concepts allowing individual parts of a building to do what they do best.

The API is defined by a set of `*.proto` files located in the `protobuf` directory of the Smart Core repository. Protocol Buffers (aka protos or protobufs) are a way of describing the API of a server in a portable, typesafe, and future-proof way. 

[Nodes](#nodes) in a Smart Core building talk to each other using the gRPC protocol. Based on HTTP/2, gRPC gives us Request/Response and streaming requests, strong security, and reliable messaging amongst other things. 

To aid with development, Smart Core also maintains a number of platform libraries for common languages like `Go` and `NodeJS` so you don't have to re-generate the Smart Core client and server libraries yourself.


## Getting Started

The simplest way to begin with a Smart Core building is to add one of the pre-built Smart Core API libraries to your project.

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

Congratulations, you've just successfully connected to a Smart Core building and asked it to turn something on.


## Names

> “There are only two hard things in computer science: cache invalidation and naming things.” — Phil Karlton

Everything that can be queried or controlled in a Smart Core building has a name. In the [Getting Started](#getting-started) example we used the name `my-device` to identify the thing that we wished to turn on within the Smart Core server located at `10.11.100.200:23557`.

Names in Smart Core are simply a sequence of characters, there is no restriction on length, content, format, or anything else. 

```
"my-device"
"The Front Door"
"cn=Office,dc=Company"
"uk/lon/hq/l14/printer2"
"LT-021"
```

These are all perfectly valid Smart Core names. If your building has a naming standard, we don't want to get in the way of that.

The thing that is identified by a name is a logical component of a building, it is responsible for some aspect of the buildings function. It could be a space `room-42`, a device `visitor-kiosk`, a sub-device `tv/left-speaker`, or a Smart Core node `lobby-controller`. If it is replaced, maybe it is faulty, then the Smart Core name remains the same as the building function hasn't changed, everything that references that name continues to work.


### Best Practices

Smart Core _recommends_ a hierarchical structure for your names following the [relative resource name](https://cloud.google.com/apis/design/resource_names) pattern: `{collection}/{resource}/{collection}/{resource}`. Using a known scheme allows the people using the building to infer and deduce expected names, which reduces how many times you need to refer back to that spreadsheet of names.

Where possible, device names should be human understandable, globally unique, and describe how the name is different from the other names in the building. `ns/acme/sites/12way/floors/7/rooms/N12/devices/VC_001` is a good name for the _video conference unit_ in room _N12_, on _floor 7_, in the _ACME_ site _12 Way_. Using this example you can imagine a suite of rooms that all look similar having `VC_001` devices in them, and you can imagine `N12` having a number of devices that make up the functionality of the room.


## Nodes

Looking back at the [Getting Started](#getting-started) example, the client code connected to a Smart Core server located at `10.11.100.200:23557`. We call this a Smart Core **node**. Any `host:port` that exposes a Smart Core API is classed as a Smart Core node. Nodes also have [names](#names).

Nodes can use the Smart Core API to talk to each other allowing them to take on many responsibilities within the building. Some examples include routing requests, aggregating data and control, intercepting requests or responses, providing load balancing and fail over, or implementing automated features. While dedicated nodes can be deployed, i.e. a router node, an aggregation node, etc, it's more likely that a node will take on multiple responsibilities at the same time, we call these **Controllers**.

Nodes can be used to directly control devices within a building by bridging the gap between a devices native control language and the building's Smart Core API. These nodes tend to be distributed physically within a building, connecting to and controlling a localised set of devices that all contribute to a space. We call these **Area Controllers**.


## Traits

The primary organisational unit of the Smart Core API is the [Trait](traits.md). It describes a set of resources and actions that can be applied to a named device, space, or node. Traits can be combined, for example a device that can both emit light and sense occupancy, can implement both the `Light` and `OccupancySensor` traits.

The `smartcore.traits.OnOff` trait API that we used in the [Getting Started](#getting-started) example is defined as the Protobuf service

```protobuf
service OnOffApi {
  // Update the device to be on or off
  rpc UpdateOnOff (UpdateOnOffRequest) returns (OnOff);

  // other rpc methods relating to the on/off concept
}
```

We used the `UpdateOnOff` method of this trait, via the generated client library, to ask the `my-device` to turn on.

## Ready for More?

This introduction has covered the central concepts of the Smart Core API and hopefully has given you an idea what it's like to develop and interact with a Smart Core building. The rest of this guide will delve into more of the details and expand on these concepts. Strap in! :rocket:
