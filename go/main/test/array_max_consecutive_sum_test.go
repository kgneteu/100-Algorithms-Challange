package main

import (
	"reflect"
	"testing"
)

func TestArrayMaxConsecutiveSum(t *testing.T) {
	data := []int{2, 3, 5, 1, 6}
	got := ArrayMaxConsecutiveSum(data,2)
	want := 8
	if !reflect.DeepEqual(got, want) {
		t.Errorf("ArrayMaxConsecutiveSum(#{data},2) = #{got} want #{want}")
	}
}

