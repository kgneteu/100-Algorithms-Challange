// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two divisors,
// one and itself. For example,
// 2 is a prime number because it's only divisible by one and two.
//
// The provided number may not be a prime.
//
//     Example
//
// sumAllPrimes(10) should return 17
// sumAllPrimes(977) should return 73156
// Hints
//
// push()
// reduce()

export function sumAllPrimes(num: number): number {
    let total = 0;

    function isPrime(n: number) {
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i < n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) total += i;
    }
    return total;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
