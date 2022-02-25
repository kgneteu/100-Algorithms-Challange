// A string is said to be beautiful if each letter in the string appears at most as many times
// as the previous letter in the alphabet within the string; ie:
// b occurs no more times than a; c occurs no more times than b; etc.
// Note that letter a has no previous letter.
//
// Given a string, check whether it is beautiful.
//
// Example
//
// For inputString = "bbbaacdafe", the output should be solution(inputString) = true.
//
// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter),
// so since there aren't any letters that appear more frequently than the previous letter,
// this string qualifies as beautiful.
//
// For inputString = "aabbb", the output should be solution(inputString) = false.
//
// Since there are more bs than as, this string is not beautiful.
//
// For inputString = "bbc", the output should be solution(inputString) = false.
//
// Although there are more bs than cs, this string is not beautiful because there are no as,
// so therefore there are more bs than as.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string inputString
//
// A string of lowercase English letters.
//
//     Guaranteed constraints:
//     3 ≤ inputString.length ≤ 50.
//
//     [output] boolean
//
// Return true if the string is beautiful, false otherwise.

export function isBeautifulString(inputString: string): boolean {
    const stat: { [index: string]: number } = {}
    for (let c of inputString) {
        stat.hasOwnProperty(c) ? stat[c]++ : stat[c] = 1;
    }
    let sorted = Object.keys(stat).sort();
    if (sorted[0] !== "a") return false;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].charCodeAt(0) - sorted[i - 1].charCodeAt(0) !== 1) return false;
        if (stat[sorted[i]] > stat[sorted[i - 1]]) return false;
    }

    return true;
}

console.log(isBeautifulString("bbbaacdafe"))
console.log(isBeautifulString("aabbb"))
console.log(isBeautifulString("bbc"))
console.log(isBeautifulString("zaa"))
//
// function solution(inputString) {
//     s = "abcdefghijklmnopqrstuvwxyz"
//     for (i = 1; i < s.length; i++) {
//         if (inputString.split(s[i]).length-1 > inputString.split(s[i-1]).length-1) {
//             return false}}
//     return true}

// function solution(inputString) {
//     a = new Array(26).fill(0)
//     inputString.split``.map(v => a[Buffer(v)[0]-97]++)
//     m = a[0]
//     return a.every(v => m>=v && (m=v,1))
// }
