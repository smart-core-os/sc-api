#!/bin/bash

set -e

function gen_folder() {
  for file in ../protobuf/$1/*.proto; do
    [ -f "$file" ] || continue
    protoc -I ../protobuf/ --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:. $file
  done
}

gen_folder "device/traits"
gen_folder "device/info"
gen_folder "types"
