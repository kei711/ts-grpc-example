#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "${SCRIPT_DIR}" || exit

DEST_DIR=./generated
rm -rf ${DEST_DIR}
mkdir -p ${DEST_DIR}

"$(yarn bin)"/grpc_tools_node_protoc \
--plugin=protoc-gen-grpc="$(yarn bin)"/grpc_tools_node_protoc_plugin \
--js_out=import_style=commonjs,binary:${DEST_DIR} \
--grpc_out=${DEST_DIR} \
-I ../../ ../../pingpong.proto

"$(yarn bin)"/grpc_tools_node_protoc \
--plugin=protoc-gen-ts="$(yarn bin)"/protoc-gen-ts \
--ts_out=${DEST_DIR} \
-I ../../ ../../pingpong.proto
