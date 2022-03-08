// Given a string, find out if its characters can be rearranged to form a palindrome.
//
// Example
//
// For inputString = "aabb", the output should be palindromeRearranging(inputString) = true.
//
// We can rearrange "aabb" to make "abba", which is a palindrome.
//
// Hints
//
// split()
// hasOwnProperty()
// Input/Output
//
// [time limit] 4000ms (js)
// [input] string inputString
//
// A string consisting of lowercase English letters.
//
// Guaranteed constraints:
//
// 1 ≤ inputString.length ≤ 50.
//
// [output] boolean
// true if the characters of the inputString can be rearranged to form
// a palindrome, false otherwise.

export function palindromeRearranging(inputString: string): boolean {
    const stat: { [index: string]: number } = {};
    for (const c of inputString) {
        stat.hasOwnProperty(c) ? stat[c]++ : stat[c] = 1;
    }
    let odds = 0;
    for (const c in stat) {
        if (stat[c] % 2 !== 0) {
            odds++;
            if (odds > 1) return false;
            if (inputString.length % 2 == 0) return false;
        }
    }
    return true
    //return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;

}

// console.log(palindromeRearranging('aaabb'));
// console.log(palindromeRearranging('aabbccccdee'));
