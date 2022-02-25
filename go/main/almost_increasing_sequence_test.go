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
		t.Errorf("1.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{2, 3, 1, 3, 4, 5, 6}
	got = AlmostIncreasingSequence(data)
	want = false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{1, 3, 2}
	got = AlmostIncreasingSequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{1, 2, 5, 3, 5}
	got = AlmostIncreasingSequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("4.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{10, 1, 2, 3, 4, 5}
	got = AlmostIncreasingSequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("5.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{1, 2, 3, 4, 99, 5, 6}
	got = AlmostIncreasingSequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("6.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{123, -17, -5, 1, 2, 3, 12, 43, 45}
	got = AlmostIncreasingSequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("7.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}

	data = []int{1, 2, 3, 4, 3, 6}
	got = AlmostIncreasingSequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("8.AlmostIncreasingSequence(%v) = %v want %v", data, got, want)
	}
}
