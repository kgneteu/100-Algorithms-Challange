// Define crossover operation over two equal-length strings A and B as follows:
//
// the result of that operation is a string of the same length as the input strings
// result[i] is either A[i] or B[i], chosen at random
// Given array of strings inputArray and a string result,
// find for how many pairs of strings from inputArray the result of the crossover operation over
// them may be equal to result.
//
// Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice
// (however, if there are two equal elements in the array, they can form a pair).
//
// Example
//
// For inputArray = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be
// solution(inputArray, result) = 2.
//
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.string inputArray
//
// A non-empty array of equal-length strings.
//
//     Guaranteed constraints:
//     2 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.
//
//     [input] string result
//
// A string of the same length as each of the inputArray elements.
//
//     Guaranteed constraints:
//     result.length = inputArray[i].length.
//
//         [output] integer

export function scriptsCrossover(inputArray: string[], result: string): number {
    let count = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (result.split("").filter((v, n) =>
                v === inputArray[i][n] || v === inputArray[j][n]).length === result.length)
                count++
        }
    }
    return count;
    //Ninja code
    //inputArray.reduce((pre, val, idx) => pre + inputArray.slice(idx + 1).reduce((pre, v1) => pre + [...result].every((v2, idx) => v2 === val[idx] || v2 === v1[idx]), 0), 0);

}

// console.log(scriptsCrossover(["abc", "aaa", "aba", "bab"], "bbb"))
// console.log(scriptsCrossover(["aaa", "aaa"], "aaa"))
// console.log(scriptsCrossover(["cbb", "aba", "aba", "bab"], "abb"))
