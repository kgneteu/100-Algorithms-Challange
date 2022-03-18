// Two two-dimensional arrays are isomorphic
// if they have the same number of rows and each pair of respective rows contains
// the same number of elements.
//
// Given two two-dimensional arrays, check if they are isomorphic.
//
// Example
//
// For
//
// array1 = [[1, 1, 1],
//     [0, 0]]
// and
//
// array2 = [[2, 1, 1],
//     [2, 1]]
// the output should be
// solution(array1, array2) = true;
//
// For
//
// array1 = [[2],
//     []]
// and
//
// array2 = [[2]]
// the output should be
// solution(array1, array2) = false.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.array.integer array1
//
// Guaranteed constraints:
//     1 ≤ array1.length ≤ 5,
//     0 ≤ array1[i].length ≤ 5,
//     0 ≤ array1[i][j] ≤ 50.
//
//     [input] array.array.integer array2
//
// Guaranteed constraints:
//     1 ≤ array2.length ≤ 5,
//     0 ≤ array2[i].length ≤ 5,
//     0 ≤ array2[i][j] ≤ 50.
//
//     [output] boolean
export function areIsomorphic(array1: number[][], array2: number[][]): boolean {
    if (array1.length !== array2.length) return false;
    for (let i in array1) {
        if (array1[i].length !== array2[i].length) return false;
    }
    return true;
    //return array1.map(i=>i.length).toString()==array1.map(i=>i.length).toString()}
}

