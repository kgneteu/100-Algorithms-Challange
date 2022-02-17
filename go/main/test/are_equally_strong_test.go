package main

import (
	"reflect"
	"testing"
)

func TestAreEquallyStrong(t *testing.T) {
	data := []int{10, 15, 15, 10}
	got := AreEquallyStrong(data...)
	want := true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AreEquallyStrong(#{data}) = #{got} want #{want}")
	}

	data = []int{15, 10, 15, 10}
	got = AreEquallyStrong(data...)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.AreEquallyStrong(#{data}) = #{got} want #{want}")
	}

	data = []int{15, 10, 15, 9}
	got = AreEquallyStrong(data...)
	want = false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3.AreEquallyStrong(#{data}) = #{got} want #{want}")
	}
	data = []int{12, 10, 8, 14}
	got = AreEquallyStrong(data...)
	want = false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("4.AreEquallyStrong(#{data}) = #{got} want #{want}")
	}
}
