// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
//     Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
//
// 7 and 3 produce the largest product.
//
//     Hints
//
// None
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer inputArray
// An array of integers containing at least two elements.
//
//     Guaranteed constraints:
//
//     2 ≤ inputArray.Length ≤ 10, -1000 ≤ inputArray[i] ≤ 1000.
//
//     [output] integer
// The largest product of adjacent elements.

using System;
using System.Linq;

namespace HAC
{
    public static partial class HAC
    {
        public static int AdjacentElementsProduct(int[] a)
        {
            var product = a[0] * a[1];
            for (var i = 1; i < a.Length - 1; i++) {
                if (a[i] * a[+i + 1] > product)
                {
                    product = a[i] * a[+i + 1];
                }
            }

            return product;
        }
    }
}





