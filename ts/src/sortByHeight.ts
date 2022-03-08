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
    const filteredArray = a.filter(v => v !== -1).sort((a, b) => a - b);
    const sortedArray = [];
    let index = 0;
    for (const n of a) {
        if (n == -1) {
            sortedArray.push(n)
        } else {
            sortedArray.push(filteredArray[index++])
        }
    }
    return sortedArray;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
