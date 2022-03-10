// Find the number of ways to express n as sum of some (at least two)
// consecutive positive integers.
//
//     Example
//
// For n = 9, the output should be
// solution(n) = 2.
//
// There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.
//
// For n = 8, the output should be
// solution(n) = 0.
//
// There are no ways to represent n = 8.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// A positive integer.
//
//     Guaranteed constraints:
//     1 ≤ n ≤ 104.
//
//     [output] integer

export function isSumOfConsecutive2(n: number): number {
    let count = 0;
    let i = 0;
    while (i < n - 1) {
        i++;
        for (let j = i, sum = 0; j < n - 1 && sum < n; j++) {
            sum += j;
            if (sum === n) {
                count++;
                break;
            }
        }
    }
    return count;
}

//console.log(isSumOfConsecutive2(8))
