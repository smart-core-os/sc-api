# Golang Smart core API library
This is the (generated) source of the Go packages for working with Smart Core APIs.

## Using
To install the packages on your system, you should use:
```shell script
$ go get -u git.vanti.co.uk/smartcore/sc-api/go
```

In your Go files you can then use
```go
import "git.vanti.co.uk/smartcore/sc-api/go/"
```

## Updating

### Generating the source
If you have made changes to the API definition files and need to re-generate one or more packages, you'll need to run
the following from the root of this folder (i.e. `/go`):
```shell script
$ protoc -I ../protobuf --go_out=paths=source_relative:./ ../protobuf/<package>/*.proto --go-grpc_out=paths=source_relative:./ ../protobuf/<package>/*.proto
```
(**Note:** the wildcard syntax will only work on Linux - from Windows you'll need to specify each proto individually)

Then run the following to build & test the Go module:
```shell script
$ go build ./... && go test ./...
```

For convenience, a shell script is included to regenerate all packages:
```shell script
$ ./generate.sh
```

If you have added a new package, please add it to the script above.

### Deploying a new release
// TODO: details for versioning, etc. In the meantime, see: 
https://github.com/golang/go/wiki/Modules#how-to-prepare-for-a-release
