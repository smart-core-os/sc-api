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

 * For Go `go get -u git.vanti.co.uk/smartcore/sc-api/go`
 * For Java add `dev.smartcore:sc-api-java:1.0.0-SNAPSHOT` to your POM
 * For NodeJS `yarn add @smart-core-os/sc-api`

If your programming platform isn't pre-built you can clone the Smart Core repository and run the `protoc` tool against the source `.proto` files as needed.

Using the API follows standard gRPC patterns for your chosen platform, for Go this would look something like this

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
