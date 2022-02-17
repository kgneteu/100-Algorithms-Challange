package main

import (
	"reflect"
	"testing"
)

func TestArrayReplace(t *testing.T) {
	data := []int{3, 5, 2, 4, 5}
	got := ArrayReplace(data, 5, 8)
	want := []int{3, 8, 2, 4, 8}
	if !reflect.DeepEqual(got, want) {
		t.Errorf("ArrayReplace(#{data}, 5, 8) = #{got} want #{want}")
	}
}

