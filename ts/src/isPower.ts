// Determine if the given number is a power of some
// non-negative integer.
//
//     Example
//
// For n = 125, the output should be
// solution(n) = true;
// For n = 72, the output should be
// solution(n) = false.
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// A positive integer.
//
//     Guaranteed constraints:
//     1 ≤ n ≤ 400.
//
//     [output] boolean
//
// true if n can be represented in the form ab (a to the power of b)
// where a and b are some non-negative integers and b ≥ 2, false otherwise.

export function isPower(n: number): boolean {
    if (Math.sqrt(n) % 1 === 0) return true; //even powers
    if (n === 1) return true;
    const max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
        for (let j = 3, p = Math.pow(i, 3); p <= n; j += 2) {
            if (p === n) return true;
            p = Math.pow(i, j)
        }
    }
    return false;
}

//console.log(isPower(72))
