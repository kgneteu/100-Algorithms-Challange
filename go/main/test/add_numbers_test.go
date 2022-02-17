package main

import (
	"reflect"
	"testing"
)

func TestAddNumbers(t *testing.T) {
	got := Add(1, 2)
	want := 3
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AddNumbers(1,2) = #{got} want #{want}")
	}
	got = Add(3, 2)
	want = 5
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AddNumbers(3,2) = #{got} want #{want}")
	}
	data := []int{1, 2, 3, 4, 5}
	got = Add2(data)
	want = 15
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AddNumbers(#{data}) = #{got} want #{want}")
	}
	data = []int{2, 3}
	got = Add2(data)
	want = 5
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AddNumbers(#{data}) = #{got} want #{want}")
	}
}
