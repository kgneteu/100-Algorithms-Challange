// Given a string, check if it can become a palindrome through a
// case change of some (possibly, none) letters.
//
//     Example
//
// For inputString = "AaBaa", the output should be
// isCaseInsensitivePalindrome(inputString) = true.
// "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc
//
// For inputString = "abac", the output should be
// isCaseInsensitivePalindrome(inputString) = false.
// All the strings which can be obtained via changing case of some group of letters,
// i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.
//
//     Hints
//
// join()
// reverse()
// toLowerCase()
// split()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string inputString
//
// Non-empty string consisting of English letters. Guaranteed constraints: 4 ≤ inputString.length ≤ 10
//
//     [output] boolean

export function isCaseInsensitivePalindrome(inputString: string): boolean {
    let s1 = inputString.toLowerCase();
    let s2 = s1.split("").reverse().join("");
    return s1 === s2;
}

// console.log(isCaseInsensitivePalindrome('AaBaa'));
// console.log(isCaseInsensitivePalindrome('abac'));
