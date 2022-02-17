package main

import (
	"reflect"
	"testing"
)

func TestArrayConversion(t *testing.T) {
	data := []int{1, 2, 3, 4, 5, 6, 7, 8}
	got := ArrayConversion(data)
	want := 186
	if !reflect.DeepEqual(got, want) {
		t.Errorf("ArrayConversion(%v) = %v want %v", data, got, want)
	}
}
