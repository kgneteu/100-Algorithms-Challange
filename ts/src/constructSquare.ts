// Given a string consisting of lowercase English letters,
// find the largest square number which can be obtained
// by reordering the string's characters and replacing
// them with any digits you need (leading zeros are not allowed)
// where same characters always map to the same digits
// and different characters always map to different digits.
//
// If there is no solution, return -1.
//
// Example
//
// For s = "ab", the output should be
// solution(s) = 81.
// The largest 2-digit square number with different digits is 81.
//
// For s = "zzz", the output should be
// solution(s) = -1.
// There are no 3-digit square numbers with identical digits.
//     For s = "aba", the output should be
// solution(s) = 900.
// It can be obtained after reordering the initial string
// into "baa" and replacing "a" with 0 and "b" with 9.
//     Input/Output
//
//         [execution time limit] 5 seconds (ts)
//
//     [input] string s
//
// Guaranteed constraints:
//     1 ≤ s.length < 10.
//
//     [output] integer
//todo rethink refactor 
export function constructSquare(s: string): number {
    let min = Number("1" + Array(Math.floor((s.length - 1) / 2)).fill(0).join(""));
    let max = Number(Array(Math.ceil(s.length / 2)).fill(9).join(""));
    console.log(min, max)
    let d = getDigitsCount(s);
    for (let i = max + 1; i >= min - 1; i--) {
        if (getDigitsCount(String(i * i)) === d) return i * i;
    }
    return -1;

    function getDigitsCount(str: string) {
        let d = [];
        while (str.length) {
            let c = str[0];
            d.push(str.length - (str = str.replace(new RegExp(c, "g"), "")).length);
        }
        return d.sort((a, b) => b - a).join("");
    }
}

console.log(constructSquare(""))
