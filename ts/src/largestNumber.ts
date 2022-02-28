// Given an integer n, return the largest number that
// contains exactly n digits.
// Example
//
// For n = 2, the output should be largestNumber(n) = 99.
// Hints
//
// concat()
// parseInt()
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//     [input] integer n
// Guaranteed constraints:
//
//     1 ≤ n ≤ 9.
//
//     [output] integer
//
// Guaranteed constraints:
//
//     The largest integer of length n.
export function largestNumber(n: number): number {
    // let result = "";
    // for (let i = 0; i < n; i++) {
    //     result = result.concat("9")
    // }
    // return parseInt(result);

    //Alt
    //return parseInt("9".repeat(n));

    //Alt
    //return Math.pow(10, n) - 1;

    return 10 ** n - 1;
}

