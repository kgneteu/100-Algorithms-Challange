// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half
// of the digits is equal to the sum of the second half.
//
//     Given a ticket number n, determine if it's lucky or not.
//
// Example
//
// For n = 1230, the output should be isLucky(n) = true;
// For n = 239017, the output should be isLucky(n) = false.
//     Hints
//
// toString()
// subString()
// split()
// reduce()
// parseInt()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] integer n
// A ticket number represented as a positive integer with an even number of digits.
//
//     Guaranteed constraints:
//
//     10 ≤ n < 106.
//
//     [output] boolean
//
// true if n is a lucky ticket number, false otherwise.
export function isLucky(n: number): boolean {
    let ticketNo = n.toString();
    let sum1 = ticketNo.substring(0, ticketNo.length / 2).split("").map(a => +a).reduce((ac, v) => ac + v);
    let sum2 = ticketNo.substring(ticketNo.length / 2).split("").map(a => +a).reduce((ac, v) => ac + v);
    return sum1 === sum2;
}
