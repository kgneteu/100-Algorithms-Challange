// A noob programmer was given two simple tasks:
// sum and sort the elements of the given array
// a = [a1, a2, ..., an].
// He started with summing and did it easily,
// but decided to store the sum he found in some random position of the original
// array which was a bad idea.
// Now he needs to cope with the second task,
// sorting the original array a, and it's giving him trouble since he modified it.
//
// Given the array shuffled, consisting of elements
// a1, a2, ..., an, a1 + a2 + ... + an in random order,
// return the sorted array of original elements a1, a2, ..., an.
//
//     Example
//
// For shuffled = [1, 12, 3, 6, 2], the output should be
// solution(shuffled) = [1, 2, 3, 6].
//
// 1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.
//
// For shuffled = [1, -3, -5, 7, 2], the output should be
// solution(shuffled) = [-5, -3, 2, 7].
//
// Input/Output
//
// [execution time limit] 5 seconds (ts)
//
// [input] array.integer shuffled
//
// Array of at least two integers.
// It is guaranteed that there is an index i such that
// shuffled[i] = shuffled[0] + ... + shuffled[i - 1] + shuffled[i + 1]
// + ... + shuffled[n].
//
// Guaranteed constraints:
//     2 ≤ shuffled.length ≤ 104,
//     -5 · 104 ≤ shuffled[i] ≤ 5 · 104.
//
// [output] array.integer
//
// A sorted array of shuffled.length - 1 elements.

export function shuffledArray(shuffled: number[]): number[] {
    for (let i = 0; i < shuffled.length; i++) {
        const sum = shuffled.reduce((a, v, x) => x === i ? a : a + v, 0);
        if (sum === shuffled[i]) {
            shuffled.splice(shuffled.indexOf(shuffled[i]), 1);
            return shuffled.sort((a, b) => a - b)
        }
    }
}

// const sumValue = shuffled.reduce((a,b) => a+b)/2;
// const index = shuffled.indexOf(sumValue);
// const newArray = shuffled.slice()
// newArray.splice(index,1)
// return newArray.sort((a,b) => a - b)
// console.log(shuffledArray([1, 12, 3, 6, 2]))
// console.log(shuffledArray([1, -3, -5, 7, 2]))
// console.log(shuffledArray([2, -1, 2, 2, -1]))
