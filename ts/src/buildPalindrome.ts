// Given a string, find the shortest possible string which can be achieved by
// adding characters to the end of initial string to make it a palindrome.
//
//     Example
//
// For st = "abcdc", the output should be
// solution(st) = "abcdcba".
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string st
//
// A string consisting of lowercase English letters.
//
//     Guaranteed constraints:
//     3 ≤ st.length ≤ 10.
//
//     [output] string

export function buildPalindrome(st: string): string {
    let result = st;
    const reversed = st.split("").reverse().join("");
    if (reversed === st) return st;
    for (let i = st.length - 1; i >= 0; i--) {
        result = st + reversed.slice(i);
        if (result.split("").reverse().join("") === result) break;
    }
    return result;
}
