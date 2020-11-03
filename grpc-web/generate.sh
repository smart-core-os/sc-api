#!/bin/bash

set -e

function gen_folder() {
  protoc -I ../protobuf --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. ../protobuf/"$1"/*.proto
}

gen_folder "info"
gen_folder "traits"
gen_folder "types"
gen_folder "types/time"
