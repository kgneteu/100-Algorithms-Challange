// Define an alphabet reflection as follows:
// a turns into z, b turns into y, c turns into x, ..., n turns into m,
// m turns into n, ..., z turns into a.
//
// Define a string reflection as the result of applying the alphabet reflection to each
// of its characters.
//
// Reflect the given string.
//
// Example
//
// For inputString = "name", the output should be reflectString(inputString) = "mznv".
//
// Hints
//
// split()
// Input/Output
//
// [execution time limit] 5 seconds (ts)
// [input] string inputString
// A string of lowercase characters.
//
// Guaranteed constraints:
//
//    3 ≤ inputString.length ≤ 10.
//
// [output] string

export function reflectString(inputString: string): string {
    const firstLetter = "a".charCodeAt(0);
    const lastLetter = "z".charCodeAt(0);

    return inputString.split("").map(c => String.fromCharCode(firstLetter + lastLetter - c.charCodeAt(0))).join("")
}

