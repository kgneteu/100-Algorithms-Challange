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

    let c1Y = cell1.charCodeAt(0) - "A".charCodeAt(0);
    let c1X = parseInt(cell1[1]);
    let c2Y = cell2.charCodeAt(0) - "A".charCodeAt(0);
    let c2X = parseInt(cell2[1]);

    if (Math.abs(c1Y - c2Y) % 2 !== 0) {
        return Math.abs(c1X - c2X) % 2 !== 0
    } else {
        return Math.abs(c1X - c2X) % 2 === 0
    }
    //todo
    // var color = s => (Buffer(s)[0] - s[1])%2
    //
    // var solution = (a,b) => color(a) == color(b)

    // return (cell1.charCodeAt(0)+Number(cell1[1])+cell2.charCodeAt(0)+Number(cell2[1]))%2==0}
}

console.log(chessBoardCellColor("A1", "C3"))
console.log(chessBoardCellColor("A1", "H3"))
