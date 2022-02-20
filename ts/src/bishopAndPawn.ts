// Given the positions of a white bishop and a black pawn on the standard chess board,
// determine whether the bishop can capture the pawn in one move.
//
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
// Check out the example below to see how it can move:
//
//
//
//     Example
//
// For bishop = "a1" and pawn = "c3", the output should be bishopAndPawn(bishop, pawn) = true.
//
//
//     Hint
//
// parseInt()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string bishop
// Coordinates of the white bishop in the chess notation.
//
//     [input] string pawn
// Coordinates of the black pawn in the same notation.
//
//     [output] boolean
// true if the bishop can capture the pawn, false otherwise.
//

export function bishopAndPawn(bishop: string, pawn: string): boolean {
    let bX = bishop.charCodeAt(0) - "a".charCodeAt(0) + 1;
    let bY = parseInt(bishop[1]);
    let pX = pawn.charCodeAt(0) - "a".charCodeAt(0) + 1;
    let pY = parseInt(pawn[1]);

    //return Math.abs(bX - pX) === Math.abs(bY - pY);
    return bX + pY === bY + pX || bX + bY === pX + pY;
}

// console.log(bishopAndPawn('a1', 'c3'));
