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
const path = require("path");

require(path.resolve(path.join(__dirname, "../assets/wasm_exec")));

const go = new Go();
go.env = Object.assign({ TMPDIR: require("os").tmpdir() }, process.env);
go.exit = process.exit;
const wasmBuffer = fs.readFileSync(
  path.resolve(path.join(__dirname, "../wasm/main.wasm"))
);

const add = async (i, j) => {
  const wasmModule = await WebAssembly.instantiate(wasmBuffer, go.importObject);
  process.on("exit", (code) => {
    // Node.js exits if no event handler is pending
    if (code === 0 && !go.exited) {
      const result = globalThis.add(i, j);
      console.log(result);
      // go._resume();
    }
  });
  return await go.run(wasmModule.instance);
};

(async () => {
  return add(1, 3);
})()
  .then(() => {
    console.log("done"); // here is never executed
  })
  .catch((err) => console.error(err));
