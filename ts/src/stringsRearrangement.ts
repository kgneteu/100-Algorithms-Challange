// Given an array of equal-length strings, you'd like to know if
// it's possible to rearrange the order of the elements in such a way
// that each consecutive pair of strings differ by exactly one character.
// Return true if it's possible, and false if not.
//
// Note: You're only rearranging the order of the strings,
// not the order of the letters within the strings!
//
// Example
//
// For inputArray = ["aba", "bbb", "bab"], the output should be
// solution(inputArray) = false.
//
//     There are 6 possible arrangements for these strings:
//
//     ["aba", "bbb", "bab"]
//     ["aba", "bab", "bbb"]
//     ["bbb", "aba", "bab"]
//     ["bbb", "bab", "aba"]
//     ["bab", "bbb", "aba"]
//     ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character,
// so the answer is false.
//
// For inputArray = ["ab", "bb", "aa"], the output should be
// solution(inputArray) = true.
//
// It's possible to arrange these strings in a way that each consecutive pair of strings
// differ by 1 character
// (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.string inputArray
//
// A non-empty array of strings of lowercase letters.
//
//     Guaranteed constraints:
//     2 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 15.
//
//     [output] boolean
//
// Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).

export function stringsRearrangement(inputArray: string[]): boolean {
    const test: string[] = [inputArray.shift()]

    function isSimilar(a: string, b: string): boolean {
        if (a.length === 0 || a.length !== b.length) return false;
        let diff = false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                if (diff) return false;
                diff = true;
            }
        }
        return diff; //exactly one diff
    }

    function fit(s: string): boolean {
        for (let i = 0; i < test.length; i++) {
            if (isSimilar(s, test[i])) {
                if (i === 0) {
                    test.unshift(s)
                    return true;
                } else {
                    if (isSimilar(s, test[i - 1])) {
                        test.splice(i, 0, s)
                        return true;
                    } else if (i === test.length -1){
                        test.push(s);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    while (inputArray.length > 0) {
        let found = false;
        for (let i = 0; i < inputArray.length ; i++) {
            if (fit(inputArray[i])) {
                inputArray.splice(i, 1)
                found = true;
                break;
            }
        }
        if (!found) break;
    }
    return inputArray.length === 0;
}


//todo works, but i wouldn't trust it is should be tree or permutation
//console.log(stringsRearrangement(["aba", "bbb", "bab"]));
//console.log(stringsRearrangement(["ab", "bb", "aa"]));
