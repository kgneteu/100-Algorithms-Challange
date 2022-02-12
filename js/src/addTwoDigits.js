//You are given a two-digit integer n. Return the sum of its digits.
export function addTwoDigits(n) {
    let sum = 0;
    n.toString().split('').forEach(digit => sum += +digit)
    return sum;
}
