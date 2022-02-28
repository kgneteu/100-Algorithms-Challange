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

export function addTwoDigits(n: number) {
    return n.toString().split("").reduce((a, b) => a + +b, 0)
    // Alt
    // return Math.floor(n / 10) + n % 10
}

