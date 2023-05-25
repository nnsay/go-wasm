# Install TinyGO

```bash
brew tap tinygo-org/tools
brew install tinygo
```

# Build

- go

  ```bash
  GOOS=js GOARCH=wasm go build -o wasm/main.wasm
  ```

- tinygo

  ```bash
  tinygo build -target=wasi -o ./wasm/tiny-main.wasm tiny-main.go
  ```

# Test

- go

  ```bash
  cp $(go env GOROOT)/misc/wasm/wasm_exec.js ./assets
  node test/go-office-executor.js
  ```

- ~~tinygo~~

  ```bash
  node --experimental-wasi-unstable-preview1 test/node-office-executor.js
  ```

  throw error:

  ```bash
  const instance = await WebAssembly.instantiate(wasm, importObject);
                                     ^
  TypeError: WebAssembly.instantiate(): Import #0 module="go" error: module is not an object or function
  ```

# References

- [Node.js with WebAssembly](https://nodejs.dev/zh-cn/learn/nodejs-with-webassembly/#generating-webassembly-modules)
