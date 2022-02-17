package main

import (
	"reflect"
	"testing"
)

func TestAbsoluteValuesSumMinimization(t *testing.T) {
	data := []int{2, 4, 7}
	got := AbsoluteValuesSumMinimization(data)
	want := 4
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1 AbsoluteValuesSumMinimization(#{data}) = #{got}; want #{want}")
	}

	data = []int{2, 4, 7, 6}
	got = AbsoluteValuesSumMinimization(data)
	want = 4
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2 AbsoluteValuesSumMinimization(#{data}) = #{got}; want #{want}")
	}

	data = []int{2, 4, 7, 6, 6}
	got = AbsoluteValuesSumMinimization(data)
	want = 7
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3 AbsoluteValuesSumMinimization(#{data}) = #{got}; want #{want}")
	}

	data = []int{2, 4, 7, 6, 6, 8}
	got = AbsoluteValuesSumMinimization(data)
	want = 7
	if !reflect.DeepEqual(got, want) {
		t.Errorf("4 AbsoluteValuesSumMinimization(#{data}) = #{got}; want #{want}")
	}
}
