// The longest diagonals of a square matrix are defined as follows:
//
// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
//     Given a square matrix, your task is to reverse the order of elements on both
//     of its longest diagonals.
//
//Example
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
//     [9, 2, 7],
//     [4, 5, 6],
//     [3, 8, 1]]
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
// Matrix with the order of elements on its longest diagonals reversed.

export function reverseOnDiagonals(matrix: number[][]): number[][] {
    for (let i = 0; i < matrix.length / 2; i++) {
        let a = matrix[i][i]
        let b = matrix[i][matrix[i].length - 1 - i]
        matrix[i][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - i]
        matrix[matrix.length - 1 - i][matrix.length - 1 - i] = a

        matrix[i][matrix[i].length - 1 - i] = matrix[matrix.length - 1 - i][i]
        matrix[matrix.length - 1 - i][i] = b
    }
    return matrix
}

// console.log(reverseOnDiagonals([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]))
