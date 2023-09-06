package main

import (
	"fmt"
)

func main() {
	fmt.Println("👋 Hello World 🌍")
	fmt.Printf("test add function %d\n", add(2, 3))
	// prevent the function from returning,
	// which is required in a wasm module
	<-make(chan bool)
}

// This function is imported from JavaScript, as it doesn't define a body.
// You should define a function named 'add' in the WebAssembly 'env'
// module from JavaScript.
//
//export add
func add(x, y int) int

// This function is exported to JavaScript, so can be called using
// exports.multiply() in JavaScript.
//
//export multiply
func multiply(x, y int) int {
	return x * y
}
