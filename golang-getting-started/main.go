package main

// golang不支持导出方法, 也就是说一个wasm文件被执行仅做main函数中的操作, 多个方法需要多个wasm
// 依据提案: https://github.com/golang/go/issues/58584
func main() {
	println("hello webassembly")
}

/**
TODO:

1. 执行wasm的之后怎么传递参数
*/
