// Given integers n, l and r, find the number of ways to represent
// n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
//
// Example
//
// For n = 6, l = 2, and r = 4, the output should be
// solution(n, l, r) = 2.
//
// There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// A positive integer.
//
//     Guaranteed constraints:
//     5 ≤ n ≤ 109.
//
//     [input] integer l
//
// A positive integer.
//
//     Guaranteed constraints:
//     1 ≤ l ≤ r.
//
//     [input] integer r
//
// A positive integer.
//
//     Guaranteed constraints:
//     l ≤ r ≤ 109,
// r - l ≤ 106.
//
//     [output] integer

//todo rethink
export function countSumOfTwoRepresentations2(n: number, l: number, r: number): number {
    let total = 0;
    for (let i = l; i <= r; i++) {
        if (i <= (n - i) && (n - i) <= r)
            total++;
    }
    return total;
    //
    //
    // if (2 * r < n || 2 * l > n) return 0;
    // let min = Math.max(l, n - r);
    // console.log(l, n - r)
    // let max = Math.min(r, n - l);
    // console.log(r, n - l)
    // let mid = Math.floor((max + min) / 2);
    // return mid - min + 1;
}

//
// console.log(countSumOfTwoRepresentations2(6, 2, 5))
// console.log(countSumOfTwoRepresentations2(6, 3, 3))
// console.log(countSumOfTwoRepresentations2(6, 2, 3))
//console.log(countSumOfTwoRepresentations2(24, 8, 16))
// console.log(countSumOfTwoRepresentations2(10, 9, 11))
// console.log(countSumOfTwoRepresentations2(1000000, 490000, 900000))
