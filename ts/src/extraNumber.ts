// You're given three integers, a, b and c.
// It is guaranteed that two of these integers are equal to each other.
// What is the value of the third integer?
//
// Example
//
// For a = 2, b = 7, and c = 2, the output should be
// solution(a, b, c) = 7.
//
// The two equal numbers are a and c. The third number (b) equals 7, which is the answer.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer a
//
// Guaranteed constraints:
//     1 ≤ a ≤ 109.
//
//     [input] integer b
//
// Guaranteed constraints:
//     1 ≤ b ≤ 109.
//
//     [input] integer c
//
// Guaranteed constraints:
//     1 ≤ c ≤ 109.
//
//     [output] integer

export function extraNumber(a: number, b: number, c: number): number {
    return a === b ? c : a === c ? b : a;
    //Alt
    //todo check below
    return (a ^ b) ^ c
}

//console.log(extraNumber(2, 7, 2))


