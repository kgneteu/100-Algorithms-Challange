// Given an array of strings, return another array containing all of its longest strings.
//
//     Example
//
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//
//     Hints
//
// None
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.string inputArray
// A non-empty array.
//
//     Guaranteed constraints:
//
//     1 ≤ inputArray.Length ≤ 10,
//
//     1 ≤ inputArray[i].Length ≤ 10.
//
//     [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static string[] AllLongestStrings(string[] strings)
        {
            var maxLength = strings.Select(s => s.Length).Prepend(0).Max();
            return strings.Where(v => v.Length == maxLength).ToArray();
        }
    }
}

