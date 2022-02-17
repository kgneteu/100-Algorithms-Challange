package main

import (
	"reflect"
	"testing"
)

func TestAlmostIncreasingSequence(t *testing.T) {
	data := []int{1, 3, 2, 1}
	got := AlmostIncreasingSequence(data)
	want := false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AlmostIncreasingSequence(#{data}) = #{got} want #{want}")
	}

    data = []int{1, 3, 2}
    got = AlmostIncreasingSequence(data)
    want = true
    if !reflect.DeepEqual(got, want) {
        t.Errorf("2.AlmostIncreasingSequence(#{data}) = #{got} want #{want}")
    }

    data = []int{2, 3, 1, 3, 4, 5, 6}
    got = AlmostIncreasingSequence(data)
    want = false
    if !reflect.DeepEqual(got, want) {
        t.Errorf("3.AlmostIncreasingSequence(#{data}) = #{got} want #{want}")
    }
}
