// Consider integer numbers from 0 to n - 1 written down along the circle
// in such a way that the distance between any two neighbouring numbers
// is equal (note that 0 and n - 1 are neighbouring, too).
//
// Given n and firstNumber, find the number which is written in the radially
// opposite position to firstNumber.
//
//     Example
//
// For n = 10 and firstNumber = 2,
// the output should be circleOfNumbers(n, firstNumber) = 7.
//
//
// Hints
//
// push()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] integer n
// A positive even integer.
//
//     Guaranteed constraints:
//
//     4 ≤ n ≤ 20.
//
//     [input] integer firstNumber
// Guaranteed constraints:
//
//     0 ≤ firstNumber ≤ n - 1.
//
//     [output] integer

export function circleOfNumbers(n: number, firstNumber: number): number {
    return firstNumber < n / 2 ? n / 2 + firstNumber : firstNumber - n / 2;

    //todo
    // return (n/2+firstNumber)%n
    //return (firstNumber+n/2)%n;

    //alt with push
    // let arr = []
    // for (let i = 0; i < n; i++) {
    //     arr.push(i)
    // }
    // if (firstNumber < n / 2) {
    //     return arr[n / 2 + firstNumber];
    // } else {
    //     return arr[firstNumber - n / 2];
    // }
}
