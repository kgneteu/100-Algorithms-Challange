// Given an array of integers, replace all the occurrences
// of elemToReplace with substitutionElem.
//
//     Example
//
//     For inputArray = [1, 2, 1],
//     elemToReplace = 1
//     and substitutionElem = 3,
//     the output should be
//     arrayReplace(inputArray, elemToReplace, substitutionElem)
//     = [3, 2, 3].
//
//     Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer inputArray
// Guaranteed constraints:
//
//     2 ≤ inputArray.Length ≤ 10,
//
//     0 ≤ inputArray[i] ≤ 10.
//
//     [input] integer elemToReplace
// Guaranteed constraints:
//
//     0 ≤ elemToReplace ≤ 10.
//
//     [input] integer substitutionElem
// Guaranteed constraints:
//
//     0 ≤ substitutionElem ≤ 10.
//
//     [output] array.integer

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static int[] ArrayReplace(int[] inputArray, int elemToReplace, int substitutionElem)
        {
            return inputArray.Select(v => v == elemToReplace ? substitutionElem : v).ToArray();
        }
    }
}