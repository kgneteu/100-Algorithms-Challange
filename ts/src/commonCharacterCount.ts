// Given two strings, find the number of common characters between them.
//
//     Example
//
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
//
// Strings have 3 common characters - 2 "a"s and 1 "c".
//
//     Hints
//
// split()
// hasOwnProperty()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string s1
// A string consisting of lowercase latin letters a-z.
//
//     Guaranteed constraints:
//
//     1 ≤ s1.length ≤ 15.
//
//     [input] string s2
// A string consisting of lowercase latin letters a-z.
//
//     Guaranteed constraints:
//
//     1 ≤ s2.length ≤ 15.
//
//     [output] integer

export function commonCharacterCount(s1: string, s2: string): number {
    let common = 0;
    const str1: { [index: string]: number } = {};
    const str2: { [index: string]: number } = {};
    for (let c of s1.split("")) {
        str1.hasOwnProperty(c) ? str1[c]++ : str1[c] = 1;
    }
    for (let c of s2.split("")) {
        str2.hasOwnProperty(c) ? str2[c]++ : str2[c] = 1;
    }
    for (let c of Object.keys(str1)) {
        if (str2.hasOwnProperty(c)) {
            common += Math.min(str1[c], str2[c]);
        }
    }
    return common;
}


