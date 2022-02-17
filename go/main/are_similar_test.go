package main

import (
	"reflect"
	"testing"
)

func TestAreSimilar(t *testing.T) {
	data1 := []int{1, 2, 3}
	data2 := []int{1, 2, 3}
	got := AreSimilar(data1, data2)
	want := true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AreSimilar(%v,%v) = %v want %v", data1, data2, got, want)
	}

	data1 = []int{1, 2, 3}
	data2 = []int{2, 1, 3}
	got = AreSimilar(data1, data2)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.AreSimilar(%v,%v) = %v want %v", data1, data2, got, want)
	}

	data1 = []int{1, 2, 2}
	data2 = []int{2, 1, 1}
	got = AreSimilar(data1, data2)
	want = false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3.AreSimilar(%v,%v) = %v want %v", data1, data2, got, want)
	}
}
