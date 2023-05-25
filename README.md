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
  todo
  ```

# Test

```bash
cp $(go env GOROOT)/misc/wasm/wasm_exec.js ./assets
node test/go-office-executor.js
```

# References

- [Node.js with WebAssembly](https://nodejs.dev/zh-cn/learn/nodejs-with-webassembly/#generating-webassembly-modules)
