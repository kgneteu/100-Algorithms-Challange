// You have a long strip of paper with integers written on it
// in a single line from left to right.
// You wish to cut the paper into exactly three pieces such that each piece
// contains at least one integer and the sum of the integers in each piece is the same.
// You cannot cut through a number, i.e. each initial number will unambiguously
// belong to one of the pieces after cutting. How many ways can you do it?
//
// It is guaranteed that the sum of all elements in the array is divisible by 3.
//
// Example
//
// For a = [0, -1, 0, -1, 0, -1], the output should be
// solution(a) = 4.
//
// Here are all possible ways:
//
//     [0, -1] [0, -1] [0, -1]
//     [0, -1] [0, -1, 0] [-1]
//     [0, -1, 0] [-1, 0] [-1]
//     [0, -1, 0] [-1] [0, -1]
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer a
//
// Guaranteed constraints:
//     5 ≤ a.length ≤ 104,
//     -108 ≤ a[i] ≤ 108.
//
//     [output] integer
//
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

//todo rethink refactor
export function threeSplit(a: number[]): number {
    let totalSum = a.reduce((b, c) => b + c);
    let firstSum = 0;
    let secondSum = 0;
    let ways = 0;

    for (let i = 0; i < a.length - 2; i++) {
        firstSum += a[i];
        secondSum = 0;
        for (let j = i + 1; j < a.length - 1; j++) {
            secondSum += a[j];
            if (firstSum === secondSum && secondSum === totalSum - firstSum - secondSum) {
                ways++;
            }
        }
    }
    return ways;

    // const third = a.reduce((pre, val) => pre + val, 0) / 3;
    // let cur = 0, part = 0, res = 0;
    // for (let el of a.slice(0, -1)) {
    //     cur += el;
    //     if (cur === 2 * third) res += part;
    //     if (cur === third) part++;
    // }
    // return res;
}

console.log(threeSplit([0, -1, 0, -1, 0, -1]))
