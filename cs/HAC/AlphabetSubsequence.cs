// Check whether the given string is a subsequence of the plaintext alphabet.
//
//     Example
//
// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false
//
// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.
//
//     Hints
//
// size property
// charCodeAt()
// split()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//     [input] string s
// Guaranteed constraints:
//
//     2 ≤ s.Length ≤ 15.
//
//     [output] boolean
//
// true if the given string is a subsequence of the alphabet, false otherwise.

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static bool AlphabetSubsequence(string s)
        {
            for (var i = 1; i < s.Length; i++)
            {
                if (s[i] <= s[i - 1])
                {
                    return false;
                }
            }
            return true;
        }
    }
}

