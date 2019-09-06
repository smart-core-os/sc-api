#!/bin/bash

set -e

protoc -I ../protobuf --go_out=plugins=grpc,paths=source_relative:./ ../protobuf/types/*.proto
protoc -I ../protobuf --go_out=plugins=grpc,paths=source_relative:./ ../protobuf/device/traits/*.proto

go build ./...
go test ./...

