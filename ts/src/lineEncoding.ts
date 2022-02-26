// Given a string, return its encoding defined as follows:
//
// First, the string is divided into the least possible number of disjoint substrings
// consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
//
// Next, each substring with length greater than one is replaced with a concatenation of
// its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
//
// Finally, all the new strings are concatenated together in the same order and a new string
// is returned.
//
// Example
//
// For s = "aabbbc", the output should be
// solution(s) = "2a3bc".
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string s
//
// String consisting of lowercase English letters.
//
//     Guaranteed constraints:
//     4 ≤ s.length ≤ 15.
//
//     [output] string
//
// Encoded version of s.

export function lineEncoding(s: string): string {
    let result = "";
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && s[i] === s[i + 1]) {
            count++;
        } else {
            count == 1 ? result += s[i] : result += count + s[i];
            count = 1;
        }
    }
    return result
}
//todo check regex
// s.replace(
//     /(.)\1*/g,
//     (e,i) => i==e ? i : e.length+i
// )
// return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
// }




