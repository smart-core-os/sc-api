#!/bin/bash

set -e

function gen_folder() {
  protoc -I ../protobuf --go_out=paths=source_relative:. --go-grpc_out=paths=source_relative:. ../protobuf/$1/*.proto
}

gen_folder "types"
gen_folder "types/time"
gen_folder "info"
gen_folder "traits"

go build ./...
go test ./...

