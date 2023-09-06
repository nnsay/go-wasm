#! /bin/bash

echo "1.拷贝wasm_exec.js"
cp "$(tinygo env TINYGOROOT)/targets/wasm_exec.js" tinygo-getting-started/

echo "2.编译wasm"
tinygo build -o tinygo-getting-started/main.wasm -target wasm ./tinygo-getting-started

echo "3.开启静态网站"
caddy file-server --listen :3000 --root tinygo-getting-started
