package main

import (
	"reflect"
	"testing"
)

func TestAllLongestStrings(t *testing.T) {
	data := []string{"aba", "aa", "ad", "vcd", "aba"}
	got := AllLongestStrings(data)
	want := []string{"aba", "vcd", "aba"}
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AllLongestStrings(#{data}) = #{got} want #{want}")
	}
}

