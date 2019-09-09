#!/bin/bash

set -e

protoc -I ../protobuf --go_out=plugins=grpc,paths=source_relative:./ ../protobuf/types/*.proto
protoc -I ../protobuf --go_out=plugins=grpc,paths=source_relative:./ ../protobuf/device/traits/*.proto
protoc -I ../protobuf --go_out=plugins=grpc,paths=source_relative:./ ../protobuf/device/info/*.proto

go build ./...
go test ./...

