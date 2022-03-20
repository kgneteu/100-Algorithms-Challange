// You are given an array of integers a.
// A range sum query is defined by a pair of non-negative
// integers l and r (l <= r).
// The output to a range sum query on the given array a is the
// sum of all the elements of a that have indices from l to r, inclusive.
//
// You have the array a and a list of range sum queries q.
// Find an algorithm that can rearrange the array a in such a way that
// the total sum of all of the query outputs is maximized,
// and return this total sum.
//
// Example
//
// For a = [9, 7, 2, 4, 4] and q = [[1, 3], [1, 4], [0, 2]], the output
// should be
// solution(a, q) = 62.
//
// You can get this sum if the array a is rearranged to be [2, 9, 7, 4, 4].
// In that case, the first range sum query [1, 3] returns
// the sum 9 + 7 + 4 = 20, the second query [1, 4] returns
// the sum 9 + 7 + 4 + 4 = 24, and the third query [0, 2] returns
// the sum 2 + 9 + 7 = 18. The total sum will be 20 + 24 + 18 = 62.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer a
//
// An initial array.
//
//     Guaranteed constraints:
//     2 ≤ a.length ≤ 10,
//     1 ≤ a[i] ≤ 10.
//
// [input] array.array.integer q
//
// An array of range sum queries, where each query is an array of
// two non-negative integers.
//
//     Guaranteed constraints:
//     1 ≤ q.length ≤ 10,
//     0 ≤ q[i][0] ≤ q[i][1] < a.length.
//
//     [output] integer
//
// Return the maximum possible total sum of the given range sum query outputs.
export function maximumSum(a: number[], q: number[][]): number {
    // const stat: { [index: number]: number } = {}
    // q.forEach(arr => {
    //     for (let i = arr[0]; i <= arr[1]; i++) {
    //         stat.hasOwnProperty(i) ? stat[i]++ : stat[i] = 1;
    //     }
    // })
    // const map = Object.entries(stat).sort((a, b) => b[1] - a[1]).map(v => +v[0]);
    // a.sort((a, b) => b - a);
    // const result = new Array(a.length).fill(0)
    // for (let i = 0; i < a.length; i++) {
    //    result[map[i]]=a[i]
    // }
    // console.log(stat)
    // console.log(a)
    // console.log(map)
    // console.log(result)
    //     //[2, 9, 7, 4, 4]
    //
    // return q.reduce((t,s)=>t+a.slice(s[0],s[1]+1).reduce((t2,s2)=>t2+s2,0),0)
    a.sort((b, c) => b - c);
    let counts = a.map((b, i) => ({
        i,c: q.reduce((acc, query) =>
            acc + (i >= query[0] && i <= query[1]), 0),
    }));
    counts.sort((b, c) => c.c - b.c);
    let solution = Array(counts.length);
    for (let i = 0; i < counts.length; i++) {
        solution[counts[i].i] = a.pop() * counts[i].c;
    }
    return solution.reduce((b, c) => b + c);
}

console.log(maximumSum([9, 7, 2, 4, 4], [[1, 3], [1, 4], [0, 2]]))
