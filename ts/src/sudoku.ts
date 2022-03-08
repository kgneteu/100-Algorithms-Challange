// Sudoku is a number-placement puzzle.
// The objective is to fill a 9 × 9 grid with digits so that each column,
// each row, and each of the nine 3 × 3 sub-grids that compose the grid contains
// all of the digits from 1 to 9.
//
// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
//
//     Example
//
// For
// grid = [
//     [1, 3, 2, 5, 4, 6, 9, 8, 7],
//     [4, 6, 5, 8, 7, 9, 3, 2, 1],
//     [7, 9, 8, 2, 1, 3, 6, 5, 4],
//     [9, 2, 1, 4, 3, 5, 8, 7, 6],
//     [3, 5, 4, 7, 6, 8, 2, 1, 9],
//     [6, 8, 7, 1, 9, 2, 5, 4, 3],
//     [5, 7, 6, 9, 8, 1, 4, 3, 2],
//     [2, 4, 3, 6, 5, 7, 1, 9, 8],
//     [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// solution(grid) = true;
//
// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
//     [4, 6, 5, 8, 7, 9, 3, 8, 1],
//     [7, 9, 8, 2, 1, 3, 6, 5, 4],
//     [9, 2, 1, 4, 3, 5, 8, 7, 6],
//     [3, 5, 4, 7, 6, 8, 2, 1, 9],
//     [6, 8, 7, 1, 9, 2, 5, 4, 3],
//     [5, 7, 6, 9, 8, 1, 4, 3, 2],
//     [2, 4, 3, 6, 5, 7, 1, 9, 8],
//     [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// solution(grid) = false.
//
//     The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.
// These examples are represented on the image below.
//
//
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] array.array.integer grid
//
// A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.
//
// Guaranteed constraints:
//     grid.length = 9,
//         grid[i].length = 9,
//         1 ≤ grid[i][j] ≤ 9.
//
//     [output] boolean
//
// true if the given grid represents a correct solution to Sudoku, false otherwise.

function checkSubgrid(i: number, j: number, grid: number[][]) {
    const numbers = new Set()
    for (let k = i; k < i + 3; k++) {
        for (let m = j; m < j + 3; m++) {
            numbers.add(grid[k][m])
        }
    }
    return numbers.size === 9;
}

export function sudoku(grid: number[][]): boolean {
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!checkSubgrid(i, j, grid)) return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        const set = new Set(grid[i].slice(0, 9))
        if (set.size !== 9) return false;
    }

    for (let i = 0; i < 9; i++) {
        const set = new Set()
        for (let j = 0; j < 9; j++) {
            set.add(grid[j][i])
        }
        if (set.size !== 9) return false;
    }
    return true;
}

// console.log(sudoku([
//     [1, 3, 2, 5, 4, 6, 9, 8, 7],
//     [4, 6, 5, 8, 7, 9, 3, 2, 1],
//     [7, 9, 8, 2, 1, 3, 6, 5, 4],
//     [9, 2, 1, 4, 3, 5, 8, 7, 6],
//     [3, 5, 4, 7, 6, 8, 2, 1, 9],
//     [6, 8, 7, 1, 9, 2, 5, 4, 3],
//     [5, 7, 6, 9, 8, 1, 4, 3, 2],
//     [2, 4, 3, 6, 5, 7, 1, 9, 8],
//     [8, 1, 9, 3, 2, 4, 7, 6, 5]]))

// console.log(sudoku([
//     [1, 3, 2, 5, 4, 6, 9, 2, 7],
//     [4, 6, 5, 8, 7, 9, 3, 8, 1],
//     [7, 9, 8, 2, 1, 3, 6, 5, 4],
//     [9, 2, 1, 4, 3, 5, 8, 7, 6],
//     [3, 5, 4, 7, 6, 8, 2, 1, 9],
//     [6, 8, 7, 1, 9, 2, 5, 4, 3],
//     [5, 7, 6, 9, 8, 1, 4, 3, 2],
//     [2, 4, 3, 6, 5, 7, 1, 9, 8],
//     [8, 1, 9, 3, 2, 4, 7, 6, 5]]));

// console.log(sudoku([
//
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [4, 5, 6, 7, 8, 9, 1, 2, 3],
//     [7, 8, 9, 1, 2, 3, 4, 5, 6],
//     [2, 3, 4, 5, 6, 7, 8, 9, 1],
//     [3, 4, 5, 6, 7, 8, 9, 1, 2],
//     [5, 6, 7, 8, 9, 1, 2, 3, 4],
//     [6, 7, 8, 9, 1, 2, 3, 4, 5],
//     [8, 9, 1, 2, 3, 4, 5, 6, 7],
//     [9, 1, 2, 3, 4, 5, 6, 7, 8]]
// ));

//todo check
// // True, if product of #s in row is 9!
// p = a => eval(a.join`*`)==362880
//
// // Check each row, column and 3 block grid using p()
// solution = grid =>
//     grid.every((r,i) =>
//         p(r) &&
//         p(grid.map(r => r[i])) &&
//         p(r.map((_,j) => grid[3*(i/3|0)+(j/3|0)][3*(i%3)+(j%3)])))

