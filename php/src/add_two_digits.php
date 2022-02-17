<?php
// You are given a two-digit integer n. Return the sum of its digits.
//
//     Example
//
// For n = 29, the output should be addTwoDigits(n) = 11.
//
// Hint
//
// split()
// parseInt()
// toString()
// reduce()
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] integer n
//
// A positive two-digit integer.
//
//     Guaranteed constraints:
//
//     10 ≤ n ≤ 99.
//
//     [output] integer
//
// The sum of the first and second digits of the input number.

function add_two_digits($n)
{
    $sum = 0;
    foreach (str_split(strval($n)) as $v) {
        $sum += $v;
    }
    return $sum;
}
