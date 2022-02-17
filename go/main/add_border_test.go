package main

import (
	"reflect"
	"testing"
)

func TestAddBorder(t *testing.T) {
	data := []string{"abc", "ded"}
	got := AddBorder(data)
	expected := []string{"*****", "*abc*", "*ded*", "*****"}
	if !reflect.DeepEqual(got, expected) {
		t.Errorf("AddBorder(%s) = %s; want %s", data, got, expected)
	}
}

