# Smart Core API
This repository contains the interface definitions for the base Smart Core functionality. Looking at the .proto files
should give a better understanding of how to communicate between different services in a Smart core system.
 
In addition, this repository also holds the generated go dependencies necessary for working with these APIs, and a
pom file for generating the published java dependencies. See readme files in the language folders for details of
updating or publishing these dependencies.

## Traits

A trait is some characteristic of a device. In Smart Core each device has a list of traits that make up the whole api
for that device. Think of a trait as an api for controlling some aspect of the device, maybe the device represents a 
light and as such has the `smartcore.api.device.traits.OnOff` trait.

The full list of traits and their documentation can be found in the [protobuf traits folder].

### Similar concepts in the wild

Smart home companies tend to have a concept similar to traits, here are a list of them:

* [Google Smart Home device traits]
* [Amazon Alexa capability interfaces]
* Apple HomeKit Characteristics

[protobuf traits folder]: protobuf/device/traits/
[Google Smart Home device traits]: https://developers.google.com/actions/smarthome/traits/
[Amazon Alexa capability interfaces]: https://developer.amazon.com/docs/device-apis/list-of-interfaces.html
