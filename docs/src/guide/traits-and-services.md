# Traits and Services

## Traits

Each named device, space, or node of a Smart Core building does at least one thing. Maybe it can emit light, maybe it can detect occupancy, maybe it can do both. These capabilities are defined in Smart Core as **Traits**.

A Trait collects together a number of related resources, operations, and concepts, and bundles them together into a named API definition and `proto` file.

We've seen an example of this already in the [introduction](README.md#getting-started). There we used the `OnOff` trait to allow us to turn `my-device` on. The `OnOff` trait is defined using the protobuf file `protobuf/traits/on_off.proto` in the Smart Core repository. Specifically the trait api is written like this (comments omitted for brevity)

```protobuf
service OnOffApi {
  rpc GetOnOff (GetOnOffRequest) returns (OnOff);
  rpc UpdateOnOff (UpdateOnOffRequest) returns (OnOff);
  rpc PullOnOff (PullOnOffRequest) returns (stream PullOnOffResponse);
}
```

In the introduction example we use the `UpdateOnOff` rpc call to control `my-device`. As you can see we could also have fetched the current value using `GetOnOff` or subscribed to changes using `PullOnOff`.

### What Makes a Trait

Traits are intended to describe a single concept, not a device type. The concepts should be concrete not abstract, they should be specific and not general, and they should express their intent upfront in simple words instead of using jargon or technically correct wording.

The aim is to describe what a building or space or device can do, and not what it is. The number of different things that can be done is a lot less than the total number of devices that exist.

In some cases the concept and the device type happen have the same name, unfortunately the English language is ambiguous in a lot of ways. In all cases the trait name should be thought of as the underlying concept not specifically a device of that type. `Microphone` and `Speaker`, while both types of device, in Smart Core these traits represent the general concepts of recording and emitting sound.

| :x:   | :heavy_check_mark: | Reason | 
| :---: | :----------------: | :------|
| `Relay`, `Binary` | `OnOff` | Obvious and specific names should be use instead of device types or abstract terms |
| `Volume` | `Microphone`, `Speaker` | Distinct concepts should remain distinct even if they appear similar in function, see below |

The concepts represented by traits are designed to be tailored to how they will be used, or at least thought of. Taking the `Microphone` and `Speaker` traits as an example, both these traits allow you to control the audio level and mute state of sound and could have been combined into a single `Volume` trait. In practice they both represent different - if abstractly similar - concepts, so Smart Core defines them as different traits.

Smart Core traits do not deal with high bandwidth data transfer. For example while the `Channel` trait allows you to control the current channel, it doesn't have APIs for publishing a stream of bytes representing a network video. It is assumed that the devices themselves have these capabilities, Smart Core is then used to coordinate and control these features.


### Naming by Convention

Most of the traits Smart Core defines are centered around a specific resource type. For the `OnOff` trait the resource is the `OnOff` message type. You interact with that resource using rpc methods prefixed with the verb describing that interaction.

| Verb | Meaning | Example |
| ---- | ------- | ------- |
| Get  | Retrieve the current value of the resource | `GetOnOff` |
| Update | Update the all or part of the resource | `UpdateOnOff` |
| Pull | Subscribe to changes in the resource | `PullOnOff` |

Some traits are read-only, these traits are suffixed with `sensor`. The `smartcore.traits.OccupancySensor` is an example of this. Sensors do not have an `Update` rpc method, but can still be read and subscribed to.

::: tip
Smart Core uses the verb `Pull` to mean Subscribe because it's a short word and reads well when suffixed with the name of the resource you are expecting to receive.
:::

A trait is officially named `smartcore.traits.{Trait}`, any reference to a trait in code or data should use this full format. For documentation we usually omit the `smartcore.traits.` prefix and use the traits **short name** as the context of the document is usually enough to disambiguate. As you may have noticed with the `OnOff` trait above, the short name of the trait is used as the basis for both the api service name and the primary resource. This is fairly typical for Smart Core traits, following the `OnOff` example you can see this pattern play out

 * It is located in a file named `on_off.proto`
 * Its control API is named `OnOffApi`
 * The primary resource is named `OnOff`
 * It also defines `service OnOffInfo` and `message OnOffSettings` - these concepts are covered by [trait settings](#trait-settings)
 
Using this naming convention it becomes easy to guess what the different parts of a trait would be named without having to check the documentation all the time.

In all cases we use the [protobuf style guide](https://developers.google.com/protocol-buffers/docs/style), that is to say:

 * Files use `lower_snake_case.proto`
 * Services and messages use `PascalCase`
 * Fields use `lower_snake_case`
 
see the linked style guide for more details.

Words and symbols in Smart Core use the common American English spelling for words, following the pattern of most open-source software libraries and programming languages.

 
### Trait Settings

todo: describe the `TraitInfo` and `TraitSettings` concepts

## Services

todo: describe the Info service and name discovery
