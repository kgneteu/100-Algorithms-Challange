// Let's call two integers A and B friends if each integer
// from the array divisors is either a divisor of both
// A and B or neither A nor B. If two integers are friends,
// they are said to be in the same clan.
// How many clans are the integers from 1 to k, inclusive, broken into?
//
// Example
//
// For divisors = [2, 3] and k = 6, the output should be
// solution(divisors, k) = 4.
//
// The numbers 1 and 5 are friends and form a clan,
// 2 and 4 are friends and form a clan,
// and 3 and 6 do not have friends and each is a clan by itself.
// So the numbers 1 through 6 are broken into 4 clans.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer divisors
//
// A non-empty array of positive integers.
//
//     Guaranteed constraints:
//     2 ≤ divisors.length < 10,
//     1 ≤ divisors[i] ≤ 10.
//
//     [input] integer k
//
// A positive integer.
//
//     Guaranteed constraints:
//     5 ≤ k ≤ 10.
//
//     [output] integer

//todo rethink refactor understan logic
export function numberOfClans(divisors: number[], k: number): number {
    // const map = new Map<number, number>();
    // for (let i = 1; i <= k; i++) {
    //     let t = 0;
    //     if (divisors.some(v => i % v === 0)) t = 1;
    //     if (divisors.every(v => i % v === 0)) t = 2;
    //
    //     map.set(i, t);
    // }
    //
    // console.log(map)
    // const left = [...map.keys()]
    // let clans = 0;
    // for (let i = 1; i < k; i++) {
    //     for (let j = i + 1; j <= k; j++) {
    //         if ((map.get(i) && map.get(j)) || ((!map.get(i) && !map.get(j)))) {
    //             if (left.includes(i) && left.includes((j))) {
    //                 left.splice(left.indexOf(i), 1)
    //                 left.splice(left.indexOf(j), 1)
    //                 clans++;
    //             }
    //         }
    //     }
    // }
    // return clans + left.length;


    let clans = Array(1024).fill(0);
    let c = 0;
    for (let i = 1; i <= k; i++) {
        c = 0;
        for (let j = 0; j < divisors.length; j++) {
            if (i % divisors[j] === 0) {
                c = c | (1 << j);
            }
        }
        clans[c] = 1;
    }
    return clans.reduce((a, b) => a + b);
}

console.log(numberOfClans([2, 3], 6))
