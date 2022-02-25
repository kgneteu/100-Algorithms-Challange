// Let's define digit degree of some positive integer
// as the number of times we need to replace this number
// with the sum of its digits until we get to a one digit number.
//
// Given an integer, find its digit degree.
//
//     Example
//
// For n = 5, the output should be digitDegree(n) = 0;
// For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
// For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.
// Hints
//
// toString()
// parseInt()
// split()
// reduce()
// Input/Output
//
//     [time limit] 4000ms (js)
//
//     [input] integer n
//
// Guaranteed constraints:
//
//     5 ≤ n ≤ 109.
//
//     [output] integer

export function digitDegree(n: number): number {
    let degree = 0;
    let digits = n.toString().split("");
    while (digits.length > 1) {
        let total = digits.reduce((a: number, b: string) => a + +b, 0);
        digits = total.toString().split("");
        degree++;
    }
    return degree;
}
//todo
// function solution(n) {
//     c = 0
//     while (n.toString().length>1) {
//         n = n.toString().split("").reduce((x,y)=>Number(x)+Number(y))
//         c++}
//     return c}
