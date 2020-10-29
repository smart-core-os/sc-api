# Traits

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

## What Makes a Trait

Traits are intended to describe a single concept, not a device type. The concepts should be concrete not abstract, they should be specific and not general, and they should express their intent upfront in simple words instead of using jargon or technically correct wording.

The aim is to describe what a building or space or device can do, and not what it is. The number of different things that can be done is a lot less than the total number of devices that exist.

In some cases the concept and the device type happen have the same name, unfortunately the English language is ambiguous in a lot of ways. In all cases the trait name should be thought of as the underlying concept not specifically a device of that type. `Microphone` and `Speaker`, while both types of device, in Smart Core these traits represent the general concepts of recording and emitting sound.

| :x:   | :heavy_check_mark: | Reason | 
| :---: | :----------------: | :------|
| `Relay`, `Binary` | `OnOff` | Obvious and specific names should be use instead of device types or abstract terms |
| `Volume` | `Microphone`, `Speaker` | Distinct concepts should remain distinct even if they appear similar in function, see below |

The concepts represented by traits are designed to be tailored to how they will be used, or at least thought of. Taking the `Microphone` and `Speaker` traits as an example, both these traits allow you to control the audio level and mute state of sound and could have been combined into a single `Volume` trait. In practice they both represent different - if abstractly similar - concepts, so Smart Core defines them as different traits.

Smart Core traits do not deal with high bandwidth data transfer. For example while the `Channel` trait allows you to control the current channel, it doesn't have APIs for publishing a stream of bytes representing a network video. It is assumed that the devices themselves have these capabilities, Smart Core is then used to coordinate and control these features.


## Naming by Convention

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
 * It also defines `service OnOffInfo` and `message OnOffSupport` - these concepts are covered by [trait info](#trait-info)
 
Using this naming convention it becomes easy to guess what the different parts of a trait would be named without having to check the documentation all the time.

In all cases we use the [protobuf style guide](https://developers.google.com/protocol-buffers/docs/style), that is to say:

 * Files use `lower_snake_case.proto`
 * Services and messages use `PascalCase`
 * Fields use `lower_snake_case`
 
see the linked style guide for more details.

Words and symbols in Smart Core use the common American English spelling for words, following the pattern of most open-source software libraries and programming languages.

 
## Trait Info

Think of trait info as fine tuning knobs for describing how a device implements a trait.

![Control Dials](./william-warby-WahfNoqbYnM-unsplash.jpg)

Maybe the device displays temperature in Fahrenheit, maybe it can only sense up to 900 LUX, maybe it doesn't support the `Pull` verb. All of this variance is exposed via the **Trait Info** service.

Every trait in Smart Core defines _what_ it does via `service TraitApi` and _how_ it implements that API via `service TraitInfo`. The trait info service describes all the ways an implementor of a trait can vary, from describing support for the different resource verbs, to native units, and so on.

As an example the `AirQualitySensor` trait defines an `AirQualitySensorInfo` service as a companion to the `AirQualitySensorApi` service.

```protobuf
service AirQualitySensorInfo {
  rpc DescribeAirQuality (DescribeAirQualityRequest) returns (AirQualitySupport);
}
```

You'll notice we've introduced a new verb `Describe`. For each resource the trait exposes, ot will have it's own describe method, just like it would have it's own get or update methods as part of the control API. The response from this method is a **support message** that describes how this device differs from the default behavior expected by devices implementing this trait.

Support messages have a standard name `{Resource}Support`, and follow a common pattern. The support message for the `AirQuality` resource would look like

```protobuf{3}
message AirQualitySupport {
  // common to all ResourceSupport messages
  smartcore.types.ResourceSupport resource_support = 1;
  // unique to this resource type...
  smartcore.api.types.FloatBounds carbon_dioxide_level = 2;
  smartcore.api.types.FloatBounds volatile_organic_compounds = 3;
  smartcore.api.types.FloatBounds air_pressure = 4;
  // other fields
}
```

For each resource in a trait there is a basic set of actions that can be performed - the verbs we mentioned earlier - highlighted in the snippet above. Some implementors of the trait might not support all of these verbs, or their implementation might be limited. This variation in the trait is encoded into the `ResourceSupport` type, which describes support for reading, writing, and observing the resource.

In addition to the common verbs, each resource can also describe specific variations relative to it's own information. In the `AirQualitySupport` example above you can see this with these lines

```protobuf
smartcore.api.types.FloatBounds carbon_dioxide_level = 2;
smartcore.api.types.FloatBounds volatile_organic_compounds = 3;
smartcore.api.types.FloatBounds air_pressure = 4;
```

Each field in this case describes the bounds (min and max) values that would be reported by the device implementing this trait.

### Info is Optional!

A specific device or implementor of a trait is **not** required to implement the info service for that trait. While we recommend that you do, the trait info api is designed with enhancement in mind. Clients are not expected to ask the info service what is possible before calling a method, servers are not expected to respond to info requests when asked.

_So what's the point?_

The trait info API exists to enable general tools and integrations to get better at their job without complicating the core control api of the traits. The more complicated the core functions are, the harder it is to learn, implement, or use. 

A facility dashboard should work perfectly fine without knowing that `my-sensor` has a max `carbon_dioxide_level` reading of `1400ppm`, but knowing that information _could_ help with display and analysis of the information. Similarly a controller might not know that `pandoras-box` doesn't support the `close` method, but that's ok - if they try then an error will be returned, but if they did know then they could optimise their interaction ahead of time.

That's what this is all about, we want to provide some way for clients or implementors to optimise their interaction if they want to, but we don't want to force everyone to have to do it.



## Similar Concepts in Other Systems

Smart home companies tend to have a concept similar to traits, here are a list of them:

* [Google Smart Home device traits]
* [Amazon Alexa capability interfaces]
* [Apple HomeKit Characteristics]

[Google Smart Home device traits]: https://developers.google.com/actions/smarthome/traits/
[Amazon Alexa capability interfaces]: https://developer.amazon.com/docs/device-apis/list-of-interfaces.html
[Apple HomeKit Characteristics]: https://developer.apple.com/documentation/homekit/hmcharacteristic/characteristic_types
