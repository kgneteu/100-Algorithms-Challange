// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
//
// Example
//
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
//
//     Hints
//
// split()
// indexOf()
// join()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string inputString
// Non-empty string consisting of lowercase English characters.
//
//     Guaranteed constraints:
//
//     1 ≤ inputString.Length ≤ 10.
//
//     [output] string
// The result string after replacing all of its characters.

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static string AlphabeticShift(string s)
        {
            var result = "";
            foreach (var c in s)
            {
                if (c == 'z')
                {
                    result += 'a';
                }
                else
                {
                    result += (Char)(Convert.ToUInt16(c) + 1);
                }
            }
            return result;
        }
    }
}
