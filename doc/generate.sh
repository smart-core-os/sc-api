#!/bin/bash

set -e

protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,audit.html ../protobuf/device/traits/audit.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,brightness.html ../protobuf/device/traits/brightness.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,extend_retract.html ../protobuf/device/traits/extend_retract.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,health.html ../protobuf/device/traits/health.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,humidity_sensor.html ../protobuf/device/traits/humidity_sensor.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,input_select.html ../protobuf/device/traits/input_select.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,microphone.html ../protobuf/device/traits/microphone.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,motion_sensor.html ../protobuf/device/traits/motion_sensor.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,occupancy.html ../protobuf/device/traits/occupancy.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,on_off.html ../protobuf/device/traits/on_off.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,open_close.html ../protobuf/device/traits/open_close.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,ptz.html ../protobuf/device/traits/ptz.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,range.html ../protobuf/device/traits/range.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,speaker.html ../protobuf/device/traits/speaker.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,temperature_sensor.html ../protobuf/device/traits/temperature_sensor.proto
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,thermostat.html ../protobuf/device/traits/thermostat.proto

protoc -I ../protobuf/ --doc_out ./device/info --doc_opt=html,info.html ../protobuf/device/info/info.proto

protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,change.html ../protobuf/types/change.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,connection.html ../protobuf/types/connection.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,number.html ../protobuf/types/number.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,on_off.html ../protobuf/types/on_off.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,page_token.html ../protobuf/types/page_token.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,tween.html ../protobuf/types/tween.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,unit.html ../protobuf/types/unit.proto
protoc -I ../protobuf/ --doc_out ./types --doc_opt=html,volume.html ../protobuf/types/volume.proto

