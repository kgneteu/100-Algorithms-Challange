package main

import (
	"reflect"
	"testing"
)

func TestArrayMaximalAdjacentDifference(t *testing.T) {
	data := []int{2, 4, 1, 0}
	got := ArrayMaximalAdjacentDifference(data)
	want := 3
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.ArrayMaximalAdjacentDifference(#{data}) = #{got} want #{want}")
	}

	data = []int{2, 9, 1, 0}
	got = ArrayMaximalAdjacentDifference(data)
	want = 8
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.ArrayMaximalAdjacentDifference(#{data}) = #{got} want #{want}")
	}
}
