<?php
// Given array of integers, for each position $i, search among the
// previous positions for the last (from the left) position that contains
// a smaller value. Store this value at position $i in the answer.
// If no such value can be found, store -1 instead.
//
//     Example
//
// For $items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess($items) = [-1, 3, -1, 2, 4].
//
//     Hints
//
// unshift()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer $items
//
// Non-empty array of positive integers.
//
//     Guaranteed constraints:
//
//     3 ≤ $items.length ≤ 15,
//
//     1 ≤ $items[$i] ≤ 200.
//
//     [output] array.integer
//
// Array containing answer values computed as described above.
//
function array_previous_less($items): array
{
    $out = [];
    for ($i = count($items) - 1; $i > 0; $i--) {
        for ($k = $i - 1; $k >= 0; $k--) {
            if ($items[$k] < $items[$i]) {
                array_unshift($out, $items[$k]);
                break;
            } else if ($k === 0) {
                array_unshift($out, -1);
            }
        }
    }
    array_unshift($out, -1);
    return $out;
}
