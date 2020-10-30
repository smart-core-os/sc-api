# Smart Core API
This repository contains the interface definitions for the base Smart Core functionality. Looking at the .proto files
should give a better understanding of how to communicate between different services in a Smart core system.
 
In addition, this repository also holds the generated go dependencies necessary for working with these APIs, and a
pom file for generating the published java dependencies. See readme files in the language folders for details of
updating or publishing these dependencies.

## Project Layout

Most of the source in this repository is generated by tooling based off of the files in [protobuf](./protobuf). Here is a rundown of the different sub-modules

 * `protobuf` - The definitions for the Smart Core API, edit the API here
 * `docs` - Public documentation for the API
 * `doc` - Generated API reference
 * `go` - Generated Go API library
 * `grpc-web` - Generated grpc-web API library
 * `java` - Setup for generating and deploying the Java API library
 * `node` - Generated NodeJS package for the API
 
## Re-generating Code

Run `./generate-all.sh` if you change anything in the `protobuf` directory to re-generate all the derived sources. This script only works in a shell environment like Linux or GitBash.
