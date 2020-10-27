# Traits and Services

## Traits

A trait represents a logical function that something can perform. Maybe it can be turned on or off, maybe it can detect occupancy. These are traits, in this case the `smartcore.traits.OnOff` and `smartcore.traits.OccupancySensor` traits.

Traits are not mutually exclusive, they can be combined to fully describe the capabilities of a device or space.

Typically traits come in two flavours: Sensors and Resources. A sensor trait is read-only with no way to update the value the trait is exposing. A resource trait on the other had allows control of the state. The `OnOff` trait is a resource trait, allow you to control the on or off state of the device. The `OccupancySensor` on the other hand has no way to control the occupancy, and is a sensor trait.

## Services
