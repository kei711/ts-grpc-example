#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "${SCRIPT_DIR}" || exit

DEST_DIR=./generated
rm -rf ${DEST_DIR}
mkdir -p ${DEST_DIR}

"$(yarn bin)"/pbjs \
  --target static-module \
  --no-encode \
  --no-decode \
  --path ../../ \
  --out ${DEST_DIR}/index.js \
  ../../pingpong.proto

"$(yarn bin)"/pbts \
  --out ${DEST_DIR}/index.d.ts \
  ${DEST_DIR}/index.js
