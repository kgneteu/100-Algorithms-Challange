// Given a positive integer num, return the sum of all odd Fibonacci numbers
// that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
// less than or equal to 10 are 1, 1, 3, and 5.
//
// Example
//
// sumOddFibonacciNums(10) should return 10
// sumOddFibonacciNums(1000) should return 1785
// sumOddFibonacciNums(4000000) should return 4613732

function* FibonacciGen(n: number): Generator<number> {
    let [a, b] = [1, 1]
    let i = 2
    yield 0 //F(0)
    yield 1
    yield 1
    while (i < n) {
        [a, b] = [b, a + b]
        yield b;
    }

}

export function sumOddFibonacciNums(num: number): number {
    let total = 0;
    // const fib = FibonacciGen(num);
    // let f = fib.next().value;
    //
    // while (f <= num) {
    //     if (f % 2 !== 0) {
    //         total += f;
    //     }
    //     f = fib.next().value;
    // }

    let a = 1;
    let b = 1;
    while (a <= num) {
        if (a % 2 !== 0) {
            total += a;
        }
        [a, b] = [b, a + b]
    }
    return total;
}
