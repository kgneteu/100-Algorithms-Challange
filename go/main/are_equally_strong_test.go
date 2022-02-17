package main

import (
	"reflect"
	"testing"
)

func TestAreEquallyStrong(t *testing.T) {
	data := []int{10, 15, 15, 10}
	got := AreEquallyStrong(10, 15, 15, 10)
	want := true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AreEquallyStrong(%v) = %v want %v", data, got, want)
	}

	data = []int{15, 10, 15, 10}
	got = AreEquallyStrong(15, 10, 15, 10)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.AreEquallyStrong(%v) = %v want %v", data, got, want)
	}

	data = []int{15, 10, 15, 9}
	got = AreEquallyStrong(15, 10, 15, 9)
	want = false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3.AreEquallyStrong(%v) = %v want %v", data, got, want)
	}
	data = []int{12, 10, 8, 14}
	got = AreEquallyStrong(12, 10, 8, 14)
	want = false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("4.AreEquallyStrong(%v) = %v want %v", data, got, want)
	}
}
