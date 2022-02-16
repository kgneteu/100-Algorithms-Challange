// Given an array of integers,
// find the maximal absolute difference between any two of its adjacent elements.
//
//     Example
//
// For inputArray = [2, 4, 1, 0],
// the output should be arrayMaximalAdjacentDifference(inputArray) = 3.
//
// For inputArray = [2, 9, 1, 0],
// the output should be arrayMaximalAdjacentDifference(inputArray) = 8.
//
// Hints
//
// Math.abs()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer inputArray
// Guaranteed constraints:
//
//     3 ≤ inputArray.Length ≤ 10,
//
//     -15 ≤ inputArray[i] ≤ 15.
//
//     [output] integer
// The maximal absolute difference.
//

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static int ArrayMaximalAdjacentDifference(int[] inputArray)
        {
            var maxDiff = Math.Abs(inputArray[1] - inputArray[0]);
            for (var i = 2; i < inputArray.Length; i++)
            {
                var diff = Math.Abs(inputArray[i] - inputArray[i - 1]);
                if (diff > maxDiff) maxDiff = diff;
            }
            return maxDiff;
        }
    }
}


