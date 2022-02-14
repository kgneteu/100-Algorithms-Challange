package main

import "strings"

func main() {
	s := []string{"abc", "cdf"}
	println(strings.Join(AddBorder(s[:]), "\n"))
}
