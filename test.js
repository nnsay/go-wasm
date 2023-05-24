globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;

globalThis.performance = {
  now() {
    const [sec, nsec] = process.hrtime();
    return sec * 1000 + nsec / 1000000;
  },
};

const crypto = require("crypto");
globalThis.crypto = {
  getRandomValues(b) {
    crypto.randomFillSync(b);
  },
};

const fs = require("fs");

require("./wasm_exec");

const go = new Go();
go.argv = process.argv.slice(2);
go.env = Object.assign({ TMPDIR: require("os").tmpdir() }, process.env);
go.exit = process.exit;

const wasmBuffer = fs.readFileSync("./main.wasm");
WebAssembly.instantiate(wasmBuffer, go.importObject).then((wasmModule) => {
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum); // Outputs: 11
});
