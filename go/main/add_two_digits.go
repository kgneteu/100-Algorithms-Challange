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
func AddTwoDigits(n int)int {
     sum := 0
    n.toString().split('').forEach(digit => sum += +digit)
    return sum
}
