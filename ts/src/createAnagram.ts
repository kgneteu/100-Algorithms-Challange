// You are given two strings s and t of the same length,
// consisting of uppercase English letters.
// Your task is to find the minimum number
// of "replacement operations" needed
// to get some anagram of the string t from the string s.
// A replacement operation is performed by picking exactly
// one character from the string s and replacing it
// by some other character.
//
//     Example
//
// For s = "AABAA" and t = "BBAAA", the output should be
// solution(s, t) = 1;
// For s = "OVGHK" and t = "RPGUC", the output should be
// solution(s, t) = 4.
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string s
//
// Guaranteed constraints:
//     5 ≤ s.length ≤ 35.
//
//     [input] string t
//
// Guaranteed constraints:
//     t.length = s.length.
//
//         [output] integer
//
// The minimum number of replacement operations needed to get an anagram of the string t from the string s.

export function createAnagram(s: string, t: string): number {
    // const a: { [index: string]: number } = {}
    // const b: { [index: string]: number } = {}
    // for (let c of t) {
    //     a.hasOwnProperty(c) ? a[c]++ : a[c] = 1;
    // }
    // for (let c of s) {
    //     b.hasOwnProperty(c) ? b[c]++ : b[c] = 1;
    // }
    //
    // return Object.entries(a).reduce((a, v) => {
    //     if (b.hasOwnProperty(v[0])) {
    //         if (v[1] <= b[v[0]]) {
    //             return a;
    //         } else {
    //             return a + v[1] - b[v[0]];
    //         }
    //     } else {
    //         return a + v[1];
    //     }
    // }, 0)

    for(let c of s){
        t = t.replace(c,"");
    }
    return t.length;
}

//console.log(2 > undefined)
// console.log(createAnagram("AABAA", "BBAAA"))
// console.log(createAnagram("OVGHK", "RPGUC"))
