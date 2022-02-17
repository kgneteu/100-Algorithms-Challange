// Given an array of strings, return another array containing all of its longest strings.
//
//     Example
//
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//
//     Hints
//
// None
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.string inputArray
// A non-empty array.
//
//     Guaranteed constraints:
//
//     1 ≤ inputArray.length ≤ 10,
//
//     1 ≤ inputArray[i].length ≤ 10.
//
//     [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.

package main

func Filter(arr []string, f func(string) bool) []string {
	var result []string
	for i := range arr {
		if f(arr[i]) {
			result = append(result, arr[i])
		}
	}
	return result
}

func AllLongestStrings(strings []string) []string {
	maxLength := 0
	for _, s := range strings {
		if len(s) > maxLength {
			maxLength = len(s)
		}
	}
	return Filter(strings, func(v string) bool { return len(v) == maxLength })
}
