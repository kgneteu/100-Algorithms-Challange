// Given an array of strings, sort them in the order of increasing lengths.
// If two strings have the same length, their relative order must be the same
// as in the initial array.
//
// Example
//
// For
//
// inputArray = ["abc", "", "aaa", "a", "zz"]
//
// the output should be
//
// sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
//
// Hints
//
// sort()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//     [input] array.string inputArray
// A non-empty array of strings.
//
//     Guaranteed constraints:
//
//     3 ≤ inputArray.length ≤ 10, 0 ≤ inputArray[i].length ≤ 10.
//
//     [output] array.string

export function sortByLength(inputArray: string[]): string[] {
    return inputArray.sort((a, b) => a.length - b.length)
}

// console.log(sortByLength(["abc",
// "",
// "aaa",
// "a",
// "zz"]));
