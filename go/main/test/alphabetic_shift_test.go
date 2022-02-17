package main

import (
	"reflect"
	"testing"
)

func TestAlphabeticShift(t *testing.T) {
	data := "crazy"
	got := AlphabeticShift(data)
	want := "dsbaz"
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AlphabeticShift(#{data}) = #{got} want #{want}")
	}
}
