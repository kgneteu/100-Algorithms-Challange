package main

import (
	"reflect"
	"testing"
)

func TestAvoidObstacles(t *testing.T) {
	data := []int{5, 3, 6, 7, 9}
	got := AvoidObstacles(data)
	want := 4
	if !reflect.DeepEqual(got, want) {
		t.Errorf("1.AvoidObstacles(#{data}) = #{got} want #{want}")
	}
	data = []int{1, 3, 5, 7, 9}
	got = AvoidObstacles(data)
	want = 2
	if !reflect.DeepEqual(got, want) {
		t.Errorf("2.AvoidObstacles(#{data}) = #{got} want #{want}")
	}
	data = []int{2, 5, 7, 9}
	got = AvoidObstacles(data)
	want = 4
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3.AvoidObstacles(#{data}) = #{got} want #{want}")
	}
	data = []int{2, 4, 7, 10}
	got = AvoidObstacles(data)
	want = 3
	if !reflect.DeepEqual(got, want) {
		t.Errorf("3.AvoidObstacles(#{data}) = #{got} want #{want}")
	}
}
