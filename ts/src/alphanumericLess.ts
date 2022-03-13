// An alphanumeric ordering of strings is defined as follows:
// each string is considered as a sequence of tokens,
// where each token is a letter or a number
// (as opposed to an isolated digit, as is the case in
// lexicographic ordering).
//
// For example, the tokens of the string
// "ab01c004" are [a, b, 01, c, 004].
// In order to compare two strings, we'll first break them
// down into tokens and then compare the corresponding pairs of tokens
// with each other (i.e. compare the first token of the first string with the
// first token of the second string, etc).
//
// Here is how tokens are compared:
//
//  - If a letter is compared with another letter, the usual alphabetical order applies.
//  - A number is always considered less than a letter.
//  - When two numbers are compared, their values are compared.
//    Leading zeros, if any, are ignored.
//
// If at some point one string has no more tokens left while the other
// one still does, the one with fewer tokens is considered smaller.
//
// If the two strings s1 and s2 appear to be equal, consider the smallest
// index i such that tokens(s1)[i] and tokens(s2)[i]
// (where tokens(s)[i] is the ith token of string s)
// differ only by the number of leading zeros.
// If no such i exists, the strings are indeed equal.
// Otherwise, the string whose ith token has more leading zeros
// is considered smaller.
//
// Here are some examples of comparing strings using alphanumeric ordering.
//
// "a" < "a1" < "ab"
// "ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
// "x11y012" < "x011y13"
//
// Your task is to return true if s1 is strictly less than s2, and false otherwise.
//
// Example
//
// For s1 = "a" and s2 = "a1", the output should be solution(s1, s2) = true;
//
// These strings have equal first tokens,
// but since s1 has fewer tokens than s2,
// it's considered smaller.
//
// For s1 = "ab" and s2 = "a1", the output should be solution(s1, s2) = false;
//
// These strings also have equal first tokens, but since numbers
// are considered less than letters, s1 is larger.
//
// For s1 = "b" and s2 = "a1", the output should be solution(s1, s2) = false.
//
// Since b is greater than a, s1 is larger.
//
// Input/Output
//
// [execution time limit] 5 seconds (ts)
//
// [input] string s1
//
// A string consisting of English letters and digits.
//
//     Guaranteed constraints:
//     1 ≤ s1.length ≤ 20.
//
//     [input] string s2
//
// A string consisting of English letters and digits.
//
//     Guaranteed constraints:
//     1 ≤ s2.length ≤ 20.
//
//     [output] boolean
//
// true if s1 is alphanumerically strictly less than s2, false otherwise.

export function alphanumericLess(s1: string, s2: string): boolean {
    const t1 = s1.match(/\d+|\D/g)
    const t2 = s2.match(/\d+|\D/g)
    const min = Math.min(t1.length, t2.length);
    for (let i = 0; i < min; i++) {
        let a: string | number | BigInt = t1[i];
        let b: string | number | BigInt = t2[i];
        if (!isNaN(+a)) {
            if (isNaN(+b)) return true;
            a = BigInt(a);
            b = BigInt(b);
        } else {
            if (!isNaN(+t2[i])) return false;
        }
        if (a > b) return false;
        if (a < b) return true;
    }
    if (t1.length != t2.length) return t1.length < t2.length;

    for (let i = 0; i < min; i++) {
        if (!isNaN(+t1[i])) {
            let a = (t1[i].match(/^0+/g) || []).toString()
            let b = (t2[i].match(/^0+/g) || []).toString()
            if (a.length > b.length) return true;
            if (a.length < b.length) return false;
        }
    }
    return false;
}

// console.log(alphanumericLess("ab01c004", "ab000144x"))
// console.log(alphanumericLess("ab", "a1"))
//console.log(alphanumericLess("0000", "000"))
//console.log(alphanumericLess("ab000144", "ab144"))
//console.log(alphanumericLess("12345678909876543210", "12345678909876543211"))



