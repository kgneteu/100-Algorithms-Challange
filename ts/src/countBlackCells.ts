// Imagine a white rectangular grid of n rows and m columns
// divided into two parts by a diagonal line running
// from the upper left to the lower right corner.
// Now let's paint the grid in two colors according to the following rules:
//
// A cell is painted black if it has at least one point in common
// with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.
//
// Example
//
// For n = 3 and m = 4, the output should be
// solution(n, m) = 6.
//  xxoo
//  0xx0
//  00xx
// There are 6 cells that have at least one common point with
// the diagonal and therefore are painted black.
//
//
//
// For n = 3 and m = 3, the output should be
// solution(n, m) = 7.
//  xx0
//  xxx
//  0xx
// 7 cells have at least one common point with the diagonal and are painted black.
//
//
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// The number of rows.
//
//     Guaranteed constraints:
//     1 ≤ n ≤ 105.
//
//     [input] integer m
//
// The number of columns.
//
//     Guaranteed constraints:
//     1 ≤ m ≤ 105.
//
//     [output] integer
//
// The number of black cells.

//todo gcd replacement?
export function countBlackCells(n: number, m: number): number {
    function gcd(a: number, b: number) {
        while (b)
            [a, b] = [b, a % b]
        return a
    }

    return n + m + gcd(n, m) - 2

    // slower
    // let max = 1;
    // for (let k = 1; k <= n; k++) {
    //     if (n % k == 0 && m % k == 0)
    //         max = k;
    // }
    // return n + m + max - 2;
}


// const startTime = performance.now()
// console.log(countBlackCells(100000, 100000))
// const endTime = performance.now()
// console.log(`${endTime - startTime} milliseconds`)
// console.log(countBlackCells(3, 4))
