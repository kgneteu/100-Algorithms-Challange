// Given a position of a knight on the standard chessboard,
// find the number of different moves the knight can perform.
//
// The knight can move to a square that is two squares horizontally
// and one square vertically, or two squares vertically and one square horizontally away from it.
// The complete move therefore looks like the letter L.
// Check out the image below to see all valid moves
// for a knight piece that is placed on one of the central squares.
//
//
// Example
//
// For cell = "a1", the output should be
// solution(cell) = 2.
//
// For cell = "c2", the output should be
// solution(cell) = 6.
//
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string cell
//
// String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.
//
//     Guaranteed constraints:
//     cell.length = 2,
//         'a' ≤ cell[0] ≤ 'h',
//     1 ≤ cell[1] ≤ 8.
//
//     [output] integer

export function chessKnight(cell: string): number {
    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [2, -1], [2, 1], [1, -2], [1, 2]]
    const knightY = cell.charCodeAt(0) - "a".charCodeAt(0)
    const knightX = +cell[1] - 1;
    return moves.filter(v => knightY + v[0] >= 0 && knightY + v[0] < 8 && knightX + v[1] >= 0 && knightX + v[1] < 8).length;
}
