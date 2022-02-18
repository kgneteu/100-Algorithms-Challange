// Given the string, check if it is a palindrome.
//
//     Example
//
// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.
//     Hints
//
// toLowerCase()
// split()
// reverse()
// join()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string inputString
// A non-empty string consisting of lowercase characters.
//
//     Guaranteed constraints:
//
//     1 ≤ inputString.length ≤ 105.
//
//     [output] boolean
//
// true if inputString is a palindrome, false otherwise.
//

export function checkPalindrome(inputString: string): boolean {
    let s1 = inputString.toLowerCase();
    let s2 = s1.split("").reverse().join("");
    return s1 == s2;
}
