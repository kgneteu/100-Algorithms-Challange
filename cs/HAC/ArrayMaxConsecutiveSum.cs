// Given array of integers, find the maximal possible sum of some of its
// k consecutive elements.
//
//     Example
//
// For inputArray = [2, 3, 5, 1, 6] and k = 2,
// the output should be arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
//
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8
//
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//     [input] array.integer inputArray Array of positive integers.
//     Guaranteed constraints:
//
//     3 ≤ inputArray.Length ≤ 105,
//
//     1 ≤ inputArray[i] ≤ 1000.
//
//     [input] integer k
// An integer (not greater than the length of inputArray).
//
// Guaranteed constraints: 1 ≤ k ≤ inputArray.Length.
//
//     [output] integer
// The maximal possible sum.

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static int ArrayMaxConsecutiveSum(int[] inputArray, int k)
        {
            var sum = 0;
            for (var i = 0; i < k; i++) {
                sum += inputArray[i];
            }
            var max = sum;
            for (var i = k; i < inputArray.Length; i++) {
                sum -= inputArray[i - k];
                sum += inputArray[i];
                if (sum > max) max = sum;
            }
            return max;

            //Alt:
            // var result = 0;
            // for (var i = 0; i < inputArray.Length - k; i++) {
            //     const s = inputArray.slice(i, i + k).reduce((acc, v) => acc + v)
            //     if (result < s) {
            //         result = s;
            //     }
            // }
            // return result;
        }
    }
}
