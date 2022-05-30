#!/bin/bash

set -e # if a command fails it stops the execution

function gen_folder() {
  for file in ../protobuf/$1/*.proto; do
    mkdir -p ./api/$1 # ensure target dir exists
    [ -f "$file" ] || continue # verify the source file exists
    protoc -I ../protobuf/ --doc_out ./api/$1 --doc_opt=./markdown.tmpl,$(basename "$file" .proto).md $file
  done
}

gen_folder "info"
gen_folder "traits"
gen_folder "types"
gen_folder "types/time"
