package main

import (
	"reflect"
	"testing"
)

func TestArrayPreviousLess(t *testing.T) {
	data := []int{3, 5, 2, 4, 5}
	got := ArrayPreviousLess(data)
	want := []int{-1, 3, -1, 2, 4}
	if !reflect.DeepEqual(got, want) {
		t.Errorf("ArrayPreviousLess(#{data}) = #{got} want #{want}")
	}
}