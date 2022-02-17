// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
//
// Example
//
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
//
//     Hints
//
// split()
// indexOf()
// join()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string inputString
// Non-empty string consisting of lowercase English characters.
//
//     Guaranteed constraints:
//
//     1 ≤ inputString.length ≤ 10.
//
//     [output] string
// The result string after replacing all of its characters.

package main

func AlphabeticShift(s string) string {
	result := ""
	for c := range s {
		if c == 'z' {
			result += "a"
		} else {
			result += string(rune(int(c) + 1))
		}
	}
	return result
}
