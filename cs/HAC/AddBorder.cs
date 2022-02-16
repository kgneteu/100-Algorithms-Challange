// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//
//     Example
//
// For
//
// picture = ["abc",
//     "ded"]
// the output should be
//
// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]
// Hints
//
// concat()
// unshift()
// push()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.string picture
// A non-empty array of non-empty equal-length strings.
//
//     Guaranteed constraints:
//
//     1 ≤ picture.length ≤ 5,
//
//     1 ≤ picture[i].length ≤ 5.
//
//     [output] array.string
// The same matrix of characters, framed with a border of asterisks of width 1.

using System;
using System.Linq;

namespace HAC
{
    public partial class HAC
    {
        public static string[] AddBorder(string[] picture)
        {
            var wall = new String('*', picture[0].Length + 2);
            string[] result = { wall };
            return  result.Concat(picture.Select(value => '*' + value + '*')).Concat(new string[] { wall }).ToArray();
        }
    }
}
