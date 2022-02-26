// Given some integer, find the maximal number you can obtain
// by deleting exactly one digit of the given number.
//
//     Example
//
// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// Guaranteed constraints:
//     10 ≤ n ≤ 106.
//
//     [output] integer

export function deleteDigit(n: number): number {
    const str = n.toString();
    if (str.length === 1) return NaN;
    let max = parseInt(str.slice(1))
    for (let i = 1; i < str.length; i++) {
        const test = parseInt(str.slice(0, i) + str.slice(i + 1))
        if (test > max) max = test;
    }
    return max;
}
//todo check
//s = n.toString()
//return Math.max(...[...Array(s.length).keys()].map(i=>Number(s.slice(0,i)+s.slice(i+1))))}
//
// function solution(n) {
//     var m = 0;
//     for(var d=1;d <= n; d*=10){
//         var t = n%d + (Math.floor(Math.floor(n/d)/10)*d)
//         m = Math.max(m,t);
//     }
//     return m;
// }
// console.log(deleteDigit(152))
// console.log(deleteDigit(1001))
// console.log(deleteDigit(1))
// console.log(deleteDigit(21))
