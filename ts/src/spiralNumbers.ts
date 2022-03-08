// Construct a square matrix with a size N × N containing integers from 1 to N * N
// in a spiral order, starting from top-left and in clockwise direction.
//
// Example
//
// For n = 3, the output should be
//
// solution(n) = [
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// Matrix size, a positive integer.
//
//     Guaranteed constraints:
//     3 ≤ n ≤ 100.
//
//     [output] array.array.integer


export function spiralNumbers(n: number): number[][] {
    const arr = Array(n * n).fill(null).map((el, i) => i + 1);
    let spiral: number[][] = [];
    let i = 0;
    while (arr.length) {
        spiral.reverse();
        spiral = spiral.length ?
            spiral[0].map((col, i) => spiral.map(row => row[i])) :
            spiral;
        spiral.unshift(arr.splice(-(Math.floor(i / 2) + 1)));
        i++;
    }
    return spiral;
}
//todo analyze
//console.log(spiralNumbers(3))
