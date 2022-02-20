// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending
// order without moving the trees.
//
// Example
//
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
//
// Hints
//
// filter()
// sort()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer a
// If a[i] = -1, then the ith position is occupied by a tree.
// Otherwise, a[i] is the height of a person standing in the ith position.
//
//     Guaranteed constraints:
//
//     5 ≤ a.length ≤ 15,
//
//     -1 ≤ a[i] ≤ 200.
//
//     [output] array.integer
//
// Sorted array a with all the trees untouched.
export function sortByHeight(a: number[]): number[] {
    return a.sort((a, b) => (a === -1) ? 0 : a - b)
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
