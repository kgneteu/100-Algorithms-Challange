// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//
//     Example
//
// For
//
// picture = ["abc",
//     "ded"]
// the output should be
//
// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]
// Hints
//
// concat()
// unshift()
// push()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.string picture
// A non-empty array of non-empty equal-length strings.
//
//     Guaranteed constraints:
//
//     1 ≤ picture.length ≤ 5,
//
//     1 ≤ picture[i].length ≤ 5.
//
//     [output] array.string
// The same matrix of characters, framed with a border of asterisks of width 1.

package main

import (
	"strings"
)

func Map(vs []string, f func(string) string) []string {
	vsm := make([]string, len(vs))
	for i, v := range vs {
		vsm[i] = f(v)
	}
	return vsm
}

func AddBorder(picture []string) (ret []string) {
	wall := strings.Repeat("*", len(picture[0])+2)
	mid := Map(picture, func(s string) string {
		return "*" + s + "*"
	})
	ret = []string{wall}
	ret = append(ret, mid...)
	ret = append(ret, wall)
	return
}
