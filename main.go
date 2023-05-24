package main

import (
	"syscall/js"
)

func add(this js.Value, args []js.Value) interface{} {
	js.Global().Set("output", js.ValueOf(args[0].Int()+args[1].Int()))
	return js.ValueOf(args[0].Int() + args[1].Int()).Int()
}

func registerCallbacks() {
	js.Global().Set("add", js.FuncOf(add))
}

func main() {
	c := make(chan struct{}, 0)

	println("WASM Go Initialized")
	// register functions
	registerCallbacks()
	<-c
}
