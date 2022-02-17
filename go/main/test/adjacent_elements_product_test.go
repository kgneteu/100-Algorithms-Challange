package main

import (
	"reflect"
	"testing"
)

func TestAdjacentElementsProduct(t *testing.T) {
	data := []int{3, 6, -2, -5, 7, 3}
	got := AdjacentElementsProduct(data)
	want := 21
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AdjacentElementsProduct(#{data}) = #{got} want #{want}")
	}
}

