package main

import (
	"reflect"
	"testing"
)

func TestAlphabetSubsequence(t *testing.T) {
	data := "effg"
	got := AlphabetSubsequence(data)
	want := false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AlphabetSubsequence(%v) = %v want %v", data, got, want)
	}

	data = "ace"
	got = AlphabetSubsequence(data)
	want = true
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.AlphabetSubsequence(%v) = %v want %v", data, got, want)
	}
}
