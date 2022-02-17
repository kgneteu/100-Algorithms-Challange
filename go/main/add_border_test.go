package main

import (
	"reflect"
	"testing"
)

func TestAddBorder(t *testing.T) {
	data := []string{"abc", "ded"}
	got := AddBorder(data)
	want := []string{"*****", "*abc*", "*ded*", "*****"}
	if !reflect.DeepEqual(got, want) {
		t.Errorf("AddBorder(%v) = %v want %v", data, got, want)
	}
}
