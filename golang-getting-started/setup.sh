#! /bin/bash

echo "1.拷贝wasm_exec.js"
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" golang-getting-started/

echo "2.编译wasm"
GOOS=js GOARCH=wasm go build -o golang-getting-started/main.wasm golang-getting-started/main.go

echo "3.开启静态网站"
caddy file-server --listen :3000 --root golang-getting-started
