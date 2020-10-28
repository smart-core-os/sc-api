# Traits and Services

## Traits

Each named device, space, or node of a Smart Core building does at least one thing. Maybe it can emit light, maybe it can detect occupancy, maybe it can do both. These capabilities are defined in Smart Core as **Traits**.

A Trait collects together a number of related resources, operations, and concepts, and bundles them together into a named API definition and `proto` file.

We've seen an example of this already in the [Getting Started](README.md#getting-started) section. Here we used the `smartcore.traits.OnOff` trait to allow us to turn `my-device` on. The `OnOff` trait is defined using the protobuf file `protobuf/traits/on_off.proto` in the Smart Core repository. Specifically the trait api is written like this

```protobuf
service OnOffApi {
  rpc GetOnOff (GetOnOffRequest) returns (OnOff);
  rpc UpdateOnOff (UpdateOnOffRequest) returns (OnOff);
  rpc PullOnOff (PullOnOffRequest) returns (stream PullOnOffResponse);
}
```

In the getting started example we use the `UpdateOnOff` rpc call to control `my-device`. As you can see we could also have fetched the current value using `GetOnOff` or subscribed to changes using `PullOnOff`. 

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

A trait is officially named `smartcore.traits.{Trait}`, any reference to a trait in code or data should use this full format. For documentation we usually omit the `smartcore.traits.` prefix and use the traits short name as the context of the document is usually enough to disambiguate. As you may have noticed with the `OnOff` trait above, the short name of the trait is used as the basis for both the api service name and the primary resource. This is fairly typical for Smart Core traits, following the `OnOff` example you can see this pattern play out

 * It is located in a file named `on_off.proto`
 * Its control API is named `OnOffApi`
 * The primary resource is named `OnOff`
 * It also defines `service OnOffInfo` and `message OnOffSettings` - these concepts are covered by [trait settings](#trait-settings)
 
Using this naming convention it becomes easy to guess what the different parts of a trait would be named without having to check the documentation all the time.
 
### Trait Settings

todo: describe the `TraitInfo` and `TraitSettings` concepts

## Services

todo: describe the Info service and name discovery
