// Given two cells on the standard chess board,
// determine whether they have the same color or not.
//
//     Example
//
// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.
//
// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.
//
//
//     Hints
//
// parseInt()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string cell1
//     [input] string cell2
//     [output] boolean
// true if both cells have the same color, false otherwise.

export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let c1Col = parseInt(cell1[0], 16) - 0xa + 1;
    let c1Row = parseInt(cell1[1]) * 8 - 8;
    let c2Col = parseInt(cell1[0], 16) - 0xa + 1;
    let c2Row = parseInt(cell1[1]) * 8 - 8;

    let c1Odd = (c1Col * 8 + c1Row) % 2 !== 0;
    let c2Odd = (c2Col * 8 + c2Row) % 2 !== 0;
    return ((!c1Odd && !c2Odd) || (c1Odd && c2Odd))
}

