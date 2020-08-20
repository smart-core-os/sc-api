#!/bin/bash

set -e

protoc -I ../protobuf --go_out=paths=source_relative:./ ../protobuf/types/*.proto --go-grpc_out=paths=source_relative:./ ../protobuf/types/*.proto
protoc -I ../protobuf --go_out=paths=source_relative:./ ../protobuf/types/time/*.proto --go-grpc_out=paths=source_relative:./ ../protobuf/types/time/*.proto

protoc -I ../protobuf --go_out=paths=source_relative:./ ../protobuf/device/traits/*.proto --go-grpc_out=paths=source_relative:./ ../protobuf/device/traits/*.proto

protoc -I ../protobuf --go_out=paths=source_relative:./ ../protobuf/device/info/*.proto --go-grpc_out=paths=source_relative:./ ../protobuf/device/info/*.proto

go build ./...
go test ./...

