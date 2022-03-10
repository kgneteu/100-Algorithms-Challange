// We define the weakness of number x as the number of
// positive integers smaller than x that
// have more divisors than x.
//
// It follows that the weaker the number, the greater overall weakness it has.
// For the given integer n, you need to answer two questions:
//
//  what is the weakness of the weakest numbers in the range [1, n]?
//  how many numbers in the range [1, n] have this weakness?
//  Return the answer as an array of two elements,
//  where the first element is the answer to the first question,
//  and the second element is the answer to the second question.
//
// Example
//
// For n = 9, the output should be
// solution(n) = [2, 2].
//
// Here are the number of divisors and the specific weakness of each number
// in range [1, 9]:
//
// 1: d(1) = 1, weakness(1) = 0;
// 2: d(2) = 2, weakness(2) = 0;
// 3: d(3) = 2, weakness(3) = 0;
// 4: d(4) = 3, weakness(4) = 0;
// 5: d(5) = 2, weakness(5) = 1;
// 6: d(6) = 4, weakness(6) = 0;
// 7: d(7) = 2, weakness(7) = 2;
// 8: d(8) = 4, weakness(8) = 0;
// 9: d(9) = 3, weakness(9) = 2.
// As you can see, the maximal weakness is 2,
// and there are 2 numbers with that weakness level.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer n
//
// Guaranteed constraints:
//     1 ≤ n ≤ 1000.
//
//     [output] array.integer
//
// Array of two elements: the weakness of the weakest number, and the number of integers in range [1, n] with this weakness.

//todo rethink refactor
export function weakNumbers(n: number): number[] {
    let divisors = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++)
        for (let j = i; j <= n; j += i)
            divisors[j]++


    let divisorsCounts: number[] = []

    let weakness = new Array(n + 1)
    weakness.fill(0)
    let greatestWeakness = 0
    let greatestWeaknessCount = 0

    for (let me = 1; me <= n; me++) {
        divisorsCounts[divisors[me]] =
            (divisorsCounts[divisors[me]] | 0) + 1
        for (let j = divisorsCounts.length - 1; j > divisors[me]; j--)
            weakness[me] = (divisorsCounts[j] | 0) + weakness[me]
        if (greatestWeakness < weakness[me]) {
            greatestWeakness = weakness[me]
            greatestWeaknessCount = 1
        } else if (greatestWeakness == weakness[me]) {
            greatestWeaknessCount++
        }
    }

    return [greatestWeakness, greatestWeaknessCount]
}
//
// console.log(weakNumbers(9))
// console.log(weakNumbers(1)) //[0,1]
// console.log(weakNumbers(2)) //[0,2]
// console.log(weakNumbers(4)) //[0,4]
// console.log(weakNumbers(500)) //[403,1]
