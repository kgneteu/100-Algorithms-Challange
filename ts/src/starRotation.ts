// Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving position of all matrix elements that do not belong to the star.
//
// Example
//
// For
//
// matrix = [
//     [1, 0, 0, 2, 0, 0, 3],
//     [0, 1, 0, 2, 0, 3, 0],
//     [0, 0, 1, 2, 3, 0, 0],
//     [8, 8, 8, 9, 4, 4, 4],
//     [0, 0, 7, 6, 5, 0, 0],
//     [0, 7, 0, 6, 0, 5, 0],
//     [7, 0, 0, 6, 0, 0, 5]]
// width = 7, center = [3, 3], and t = 1, the output should be
//
// solution(matrix, width, center, t) = [
//     [8, 0, 0, 1, 0, 0, 2],
//     [0, 8, 0, 1, 0, 2, 0],
//     [0, 0, 8, 1, 2, 0, 0],
//     [7, 7, 7, 9, 3, 3, 3],
//     [0, 0, 6, 5, 4, 0, 0],
//     [0, 6, 0, 5, 0, 4, 0],
//     [6, 0, 0, 5, 0, 0, 4]]
// For
//
// matrix = [[1, 0, 0, 2, 0, 0, 3],
//     [0, 1, 0, 2, 0, 3, 0],
//     [0, 0, 1, 2, 3, 0, 0],
//     [8, 8, 8, 9, 4, 4, 4],
//     [0, 0, 7, 6, 5, 0, 0]]
// width = 3, center = [1, 5], and t = 81, the output should be
//
// solution(matrix, width, center, t) = [[1, 0, 0, 2, 0, 0, 0],
//     [0, 1, 0, 2, 3, 3, 3],
//     [0, 0, 1, 2, 0, 0, 0],
//     [8, 8, 8, 9, 4, 4, 4],
//     [0, 0, 7, 6, 5, 0, 0]]
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.array.integer matrix
//
// A two-dimensional array of integers.
//
//     Guaranteed constraints:
//     3 ≤ matrix.length ≤ 15,
//     3 ≤ matrix[i].length ≤ 15,
// matrix[i].length == matrix[j].length,
//     0 ≤ matrix[i][j] ≤ 99.
//
//     [input] integer width
//
// An odd integer representing the star's width. It equals the length of the sides of the bounding square for the star.
//
// Guaranteed constraints:
//     3 ≤ width ≤ min(matrix.length, matrix[i].length).
//
//     [input] array.integer center
//
// An array of two integers.
//
//     Guaranteed constraints:
//     center.length = 2,
//     (width - 1) / 2 ≤ center[0] < matrix.length - (width - 1) / 2,
// (width - 1) / 2 ≤ center[1] < matrix[i].length - (width - 1) / 2.
//
//     [input] integer t
//
// A non-negative integer denoting how many times the star should be rotated by 45 degrees.
//
//     Guaranteed constraints:
//     0 ≤ t ≤ 109.
//
//     [output] array.array.integer
//
// An array with specified star rotated by 45 · t degrees.

//todo rethink refactor
export function starRotation(matrix: number[][], width: number, center: number[], t: number): number[][] {
    let rotations = [
        (i: number) => [center[0] - i, center[1]],
        (i: number) => [center[0] - i, center[1] + i],
        (i: number) => [center[0], center[1] + i],
        (i: number) => [center[0] + i, center[1] + i],
        (i: number) => [center[0] + i, center[1]],
        (i: number) => [center[0] + i, center[1] - i],
        (i: number) => [center[0], center[1] - i],
        (i: number) => [center[0] - i, center[1] - i],
    ];
    let rotated = matrix.map((row) => row.slice());
    t = t % 8;
    for (let i = 1; i <= (width - 1) / 2; i++) {
        for (let j = 0; j < 8; j++) {
            rotated[rotations[(j + t) % 8](i)[0]][rotations[(j + t) % 8](i)[1]] =
                matrix[rotations[j](i)[0]][rotations[j](i)[1]];
        }
    }
    return rotated;
    // let i, dir,
    //     x = center[1],
    //     y = center[0];
    // for (i = 1; i < width / 2; i++) {
    //     dir = [[y-i, x-i],
    //         [y  , x-i],
    //         [y+i, x-i],
    //         [y+i, x  ],
    //         [y+i, x+i],
    //         [y  , x+i],
    //         [y-i, x+i],
    //         [y-i, x  ]];
    //     dir = [...dir, ...dir];
    //
    //     [0,0,0,0,0,0,0,0]
    //         .map((a,i) =>
    //             matrix[ dir[i + t % 8][0] ][ dir[i + t % 8][1] ]
    //         ).map((a,i) =>
    //         matrix[ dir[i][0] ][ dir[i][1] ] = a
    //     );
    //
    // }
    // return matrix;
}

