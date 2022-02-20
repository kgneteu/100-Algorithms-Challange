// Check if all digits of the given integer are even.
//
//     Example
//
// For n = 248622, the output should be evenDigitsOnly(n) = true;
// For n = 642386, the output should be evenDigitsOnly(n) = false.
//     Hints
//
// toString()
// split()
// every()
// parseInt()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] integer n
// Guaranteed constraints:
//
//     1 ≤ n ≤ 109.
//
//     [output] boolean
// true if all digits of n are even, false otherwise.
//
export function evenDigitsOnly(n: number): boolean {
    return n.toString().split("").every(v => parseInt(v) % 2 === 0)
}

// console.log(evenDigitsOnly(248622));
// console.log(evenDigitsOnly(642386));
