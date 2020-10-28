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

The API is defined by a set of `*.proto` files located in the `protobuf` directory of the Smart Core repository. To help Smart Core also maintains a number of generated libraries for languages like `Go` and `NodeJS` so you don't have to re-generate the Smart Core client and server libraries yourself.

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
            OnOrOff: traits.OnOrOff_ON_OR_OFF_ON,
        },
    })
    fmt.Printf("my-device is now %v", res.GetOnOrOff())
    // Outputs: my-device is now ON_OR_OFF_ON
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
              .setOnOrOff(OnOrOff.ON_OR_OFF_ON)
          )
          .build());
      System.out.println("my-device is now " + res.getOnOrOff());
      // > my-device is now ON_OR_OFF_ON
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
  on_off: {on_or_off: 'ON_OR_OFF_ON'}
}, (err, res) => {
  if (err) return; // handle errors
  console.log(`my-device is now ${res.on_or_off}`);
  // prints 'my-device is now ON_OR_OFF_ON'
});
```
</template>
</code-switcher>
