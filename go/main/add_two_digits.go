// You are given a two-digit integer n. Return the sum of its digits.
//
//     Example
//
// For n = 29, the output should be addTwoDigits(n) = 11.
//
// Hint
//
// split()
// parseInt()
// toString()
// reduce()
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] integer n
//
// A positive two-digit integer.
//
//     Guaranteed constraints:
//
//     10 ≤ n ≤ 99.
//
//     [output] integer
//
// The sum of the first and second digits of the input number.

package main

import (
	"strconv"
	"strings"
)

func AddTwoDigits(n int) int {
	var result int
	str := strconv.Itoa(n)
	arr := strings.Split(str, "")
	for _, c := range arr {
		s, _ := strconv.Atoi(c)
		result += s
	}
	return result
}
