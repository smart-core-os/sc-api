# Smart core API Docs
This is the (generated) html docs for the protobuf definitions

## Updating

### Generating the HTML
The docs are generated using the `protoc-gen-doc` protoc plugin, available here: 
https://github.com/pseudomuto/protoc-gen-doc  To install it locally, simply run:
```shell script
go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
```

If you have made changes to the API definition files and need to re-generate one or more packages, you'll need to run
the following from the root of this folder (i.e. `/doc`):
```shell script
protoc -I ../protobuf/ --doc_out ./device/traits --doc_opt=html,audit.html ../protobuf/device/traits/audit.proto
```

For convenience, a shell script is included to regenerate all packages (linux only):
```shell script
$ ./generate.sh
```

If you have added a new package, please add it to the script above.
