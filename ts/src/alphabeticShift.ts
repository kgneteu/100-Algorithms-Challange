// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
//
// Example
//
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
//
//     Hints
//
// split()
// indexOf()
// join()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string inputString
// Non-empty string consisting of lowercase English characters.
//
//     Guaranteed constraints:
//
//     1 ≤ inputString.length ≤ 10.
//
//     [output] string
// The result string after replacing all of its characters.

export function alphabeticShift(s: string): string {
    let result: string = '';
    for (let c of s) {
        if (c === 'z') {
            result += 'a';
        } else {
            result += String.fromCharCode((c.charCodeAt(0) + 1));
        }
    }
    return result;
    // todo
    // var c="abcdefghijklmnopqrstuvwxyza"
    // return s.replace(/./g,x=>c[c.indexOf(x)+1])

    //B = Buffer
    // solution = s => B([...B(s)].map(e=>(e-96)%26+97))+""
}
