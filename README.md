# Install TinyGO

```bash
brew tap tinygo-org/tools
brew install tinygo
```

# Build

- go

  ```bash
  ./golang-getting-started/setup.sh
  ```

- tinygo

  ```bash
  tinygo build -target=wasi -o ./wasm/tiny-main.wasm tiny-main.go
  ```

# References

- [Node.js with WebAssembly](https://nodejs.dev/zh-cn/learn/nodejs-with-webassembly/#generating-webassembly-modules)
