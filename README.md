# 安装 TinyGO

```bash
brew tap tinygo-org/tools
brew install tinygo
```

# 编译

```bash
GOOS=js GOARCH=wasm go build -o main.wasm
```

# 执行

```bash
cp $(go env GOROOT)/misc/wasm/wasm_exec.js ./
$(go env GOROOT)/misc/wasm/go_js_wasm_exec main.wasm
node test.js
```

# 文档

- [Node.js with WebAssembly](https://nodejs.dev/zh-cn/learn/nodejs-with-webassembly/#generating-webassembly-modules)
