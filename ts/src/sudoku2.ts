// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid
// with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids
// that compose the grid all contain all of the numbers from 1 to 9 one time.
//
// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according
// to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.
//
// Example
//
// For
//
// grid = [
//     ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//     ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//     ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//     ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//     ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//     ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//     ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
// the output should be
// solution(grid) = true;
//
// For
//
// grid = [
//     ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//     ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//     ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//     ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//     ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//     ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//     ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//     ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
// the output should be
// solution(grid) = false.
//
// The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.
//
// Input/Output
//
// [execution time limit] 5 seconds (ts)
//
// [input] array.array.char grid
//
// A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.
//
//     [output] boolean
//
// Return true if grid represents a valid Sudoku puzzle, otherwise return false.

function checkSubgrid(i: number, j: number, grid: string[][]) {
    const numbers = new Set()
    let dots = 0;
    for (let k = i; k < i + 3; k++) {
        for (let m = j; m < j + 3; m++) {
            grid[k][m] === "." ? dots++ : numbers.add(grid[k][m])
        }
    }
    return numbers.size === 9 - dots;
}

export function sudoku2(grid: string[][]): boolean {

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!checkSubgrid(i, j, grid)) return false;
        }
    }


    for (let i = 0; i < 9; i++) {
        const set = new Set()
        let dots = 0;
        for (let j = 0; j < 9; j++) {
            grid[i][j] === "." ? dots++ : set.add(grid[i][j])

        }
        if (set.size !== 9 - dots) return false;
    }

    for (let i = 0; i < 9; i++) {
        const set = new Set()
        let dots = 0;
        for (let j = 0; j < 9; j++) {
            grid[j][i] === "." ? dots++ : set.add(grid[j][i])
        }
        if (set.size !== 9-dots ) return false;
    }
    return true;
}

console.log(sudoku2([[".",".",".","1","4",".",".","2","."],
    [".",".","6",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".","1",".",".",".",".",".","."],
    [".","6","7",".",".",".",".",".","9"],
    [".",".",".",".",".",".","8","1","."],
    [".","3",".",".",".",".",".",".","6"],
    [".",".",".",".",".","7",".",".","."],
    [".",".",".","5",".",".",".","7","."]]))
