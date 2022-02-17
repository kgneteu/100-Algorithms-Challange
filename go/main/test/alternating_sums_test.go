package main

import (
	"reflect"
	"testing"
)

func TestAlternatingSums(t *testing.T) {
	data := []int{50, 60, 60, 45, 70}
	got := AlternatingSums(data)
	want := []int{180, 105}
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AlternatingSums(#{data}) = #{got} want #{want}")
	}
}

