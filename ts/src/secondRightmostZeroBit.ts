// Implement the missing code, denoted by ellipses.
// You may not modify the pre-existing code.
// Presented with the integer n, find the 0-based position of the second rightmost
// zero bit in its binary representation
// (it is guaranteed that such a bit exists), counting from right to left.
//
// Return the value of 2position_of_the_found_bit.
//
// Example
//
// For n = 37, the output should be
// solution(n) = 8.
//
// 37 => 100101. The second rightmost zero bit is at position 3 (0-based)
// from the right in the binary representation of n.
// Thus, the answer is 2^3 = 8.
//
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] integer n
//
// Guaranteed constraints:
//     4 ≤ n ≤ 230.
//
//     [output] integer

export function secondRightmostZeroBit(n: number): number {
    // return ~(n |= -~n) & -~n;
    // return (
    //     2 ** (
    //         n.toString(2).length -
    //         n.toString(2).lastIndexOf("0", n.toString(2).lastIndexOf("0") - 1)
    //         - 1)
    // );
    return ~(n |= -~n) & -~n
}

//console.log(secondRightmostZeroBit(12))
//console.log(secondRightmostZeroBit(1073741824))
