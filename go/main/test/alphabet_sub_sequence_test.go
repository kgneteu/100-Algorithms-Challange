package main

import (
	"reflect"
	"testing"
)

func TestAlphabetSubSequence(t *testing.T) {
	data := "effg"
	got := AlphabetSubSequence(data)
	want := false
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AlphabetSubSequence(#{data}) = #{got} want #{want}")
	}

    data = "ace"
    got = AlphabetSubSequence(data)
    want = true
    if !reflect.DeepEqual(got, want) {
        t.Errorf("2.AlphabetSubSequence(#{data}) = #{got} want #{want}")
    }
}
