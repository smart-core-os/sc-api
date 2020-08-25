#!/bin/bash

set -e

function gen_folder() {
  for file in ../protobuf/$1/*.proto; do
    [ -f "$file" ] || continue
    protoc -I ../protobuf/ --doc_out ./$1 --doc_opt=html,$(basename "$file" .proto).html $file
  done
}

gen_folder "device/traits"
gen_folder "device/info"
gen_folder "types"
