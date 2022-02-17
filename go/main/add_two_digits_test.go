package main

import (
	"reflect"
	"testing"
)

func TestAddTwoDigits(t *testing.T) {
	data := 29
	got := AddTwoDigits(data)
	want := 11
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AddTwoDigits(%v) = %v want %v", data, got, want)
	}
}
