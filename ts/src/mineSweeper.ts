// In the popular Minesweeper game you have a board with some mines and those
// cells that don't contain a mine have a number in it that indicates the total number
// of mines in the neighboring cells.
// Starting off with some arrangement of mines we want to create a Minesweeper game setup.
//
// Example
//
// For
// matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]]
// the output should be
//
// minesweeper(matrix) = [
//     [1, 2, 1],
//     [2, 1, 1],
//     [1, 1, 1]]
// Check out the image below for better understanding:
//
// Input/Output
//
// [time limit] 4000ms (js)
// [input] array.array.boolean matrix
//
// A non-empty rectangular matrix consisting of boolean values - true
// if the corresponding cell contains a mine, false otherwise.
//
// Guaranteed constraints:
//
// 2 ≤ matrix.length ≤ 5,
//
// 2 ≤ matrix[0].length ≤ 5.
//
// [output] array.array.integer
//
// Rectangular matrix of the same size as matrix each cell of which contains an integer
// equal to the number of mines in the neighboring cells.
// Two cells are called neighboring if they share at least one corner.

export function minesweeper(matrix: boolean[][]): number[][] {

    let board: number[][] = new Array(matrix.length).fill(0)
        .map(() => new Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]) {
                //board[i][j] = 1;
                if (j < matrix[0].length - 1) {
                    board[i][j + 1]++;
                    if (i > 0) board[i - 1][j + 1]++;
                    if (i < matrix.length - 1) board[i + 1][j + 1]++;
                }

                if (j > 0) {
                    board[i][j - 1]++;
                    if (i > 0) board[i - 1][j - 1]++;
                    if (i < matrix.length - 1) board[i + 1][j - 1]++;
                }

                if (i > 0) board[i - 1][j]++;
                if (i < matrix.length - 1) board[i + 1][j]++;
            }
        }
    }
    return board;

    //todo refactor
// **
// * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
//     * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
//     *
//     * Aside from that, it's rather self-explanatory.
//     */
//
//     const directions = [
//         [ 1,-1], [ 1, 0], [ 1, 1],
//         [ 0,-1],          [ 0, 1],
//         [-1,-1], [-1, 0], [-1, 1]
//     ];
//
//     solution = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));
}

console.log(minesweeper([
    [true,true,true],
    [true,true,true],
    [true,true,true]
]));

// var dirs = [ { r: -1, c: -1 },
//     { r: -1, c:  0 },
//     { r: -1, c:  1 },
//     { r:  0, c:  1 },
//     { r:  0, c: -1 },
//     { r:  1, c: -1 },
//     { r:  1, c:  0 },
//     { r:  1, c:  1 }];
//
// function solution(matrix) {
//     return matrix.map((a,r) => a.map((_,c) => dirs.reduce((p,v) => p+=(matrix[r+v.r]||[])[c+v.c]|0, 0)))
// }
