// You're given a substring s of some cyclic string.
// What's the length of the smallest possible
// string that can be concatenated to itself many times to obtain this cyclic string?
//
//     Example
//
//     For s = "cabca", the output should be
// solution(s) = 3.
//
// "cabca" is a substring of a cycle string "abcabcabcabc..."
// that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string s
//
// Guaranteed constraints:
//     3 ≤ s.length ≤ 15.
//
//     [output] integer
//cabca
export function cyclicString(s: string): number {
    // const uniq = new Set(s.split("")).size;
    // const max = s.length;
    // for (let i = uniq; i < max; i++) {
    //     for (let j = 0; j < s.length - i + 1; j++) {
    //         if (s.substring(j, j + i).repeat(2).includes(s)) return i;
    //     }
    // }
    // return max;

    let length = new Set(s.split("")).size;
    while (s.slice(0, length).repeat(s.length).slice(0, s.length) != s){
        length++;
    }
    return length;
}

console.log(cyclicString("cabca"))
