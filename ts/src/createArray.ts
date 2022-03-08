// Given an integer size, return array of length size filled with 1s.
//
//     Example
//
// For size = 4, the output should be
// solution(size) = [1, 1, 1, 1].
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer size
//
// A positive integer.
//
//     Guaranteed constraints:
//     1 ≤ size ≤ 1000.
//
//     [output] array.integer

export function createArray(size: number): number[] {
    return new Array(size).fill(1);
}

console.log(createArray(2))
