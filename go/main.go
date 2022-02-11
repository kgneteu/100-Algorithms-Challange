package main

import "strings"

func main(){
	s:=[]string{"abc","cdf"}
	println(strings.Join(addBorder(s[:]),"\n"))
}