package main

import (
	"reflect"
	"testing"
)

func TestArrayChange(t *testing.T) {
	data := []int{1, 1, 1}
	got := ArrayChange(data)
	want := 3
	if !reflect.DeepEqual(got, want) {
		t.Errorf("ArrayChange(#{data}) = #{got} want #{want}")
	}
}
