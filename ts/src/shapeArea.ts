// Below we will define an n-interesting polygon.
// Your task is to find the area of a polygon for a given n.
//
// A 1-interesting polygon is just a square with a side of length 1.
// An n-interesting polygon is obtained by taking the n - 1-interesting polygon
// and appending 1-interesting polygons to its rim, side by side.
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
//
//
//                                x
//                      x        xxx
//              x      xxx      xxxxx
//      x      xxx    xxxxx    xxxxxxx
//              x      xxx      xxxxx
//                      x        xxx
//                                x
//      n=1    n=2     n=3       n=4
// Example
//
// For n = 2, the output should be shapeArea(n) = 5;
// For n = 3, the output should be shapeArea(n) = 13.
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] integer n
// Guaranteed constraints:
//
//     1 ≤ n < 104.
//
//     [output] integer
// The area of the n-interesting polygon.

export function shapeArea(n: number): number {
    let total = 1;
    for (let i = 1; i < n; i++) {
        total += i * 4
    }
    return total;
    // Alt:
    // if (n == 1) return 1;
    // const mainAxis = 1 + (n - 1) * 2;
    // let rowTotal = mainAxis;
    // let total = 0;
    // while (rowTotal > 2) {
    //     rowTotal = rowTotal - 2;
    //     total += rowTotal;
    // }
    // return total * 2 + mainAxis;
}

