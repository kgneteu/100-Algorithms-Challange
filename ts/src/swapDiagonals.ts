// The longest diagonals of a square matrix are defined as follows:
//
// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to swap its longest diagonals by exchanging
// their elements at the corresponding positions.
//
// Example
//
// For
//
// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]
// the output should be
//
// solution(matrix) = [
//     [3, 2, 1],
//     [4, 5, 6],
//     [9, 8, 7]]
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.array.integer matrix
//
// Guaranteed constraints:
//     1 ≤ matrix.length ≤ 100,
//     matrix.length = matrix[i].length,
//     1 ≤ matrix[i][j] ≤ 105.
//
//     [output] array.array.integer
//
// Matrix with swapped diagonals.

export function swapDiagonals(matrix: number[][]): number[][] {
    for (let i = 0; i < matrix.length; i++) {
        let a = matrix[i][matrix[i].length - 1 - i];
        matrix[i][matrix[i].length - 1 - i] = matrix[i][i]
        matrix[i][i] = a
    }
    return matrix;
}
//
// console.log(swapDiagonals([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]));
