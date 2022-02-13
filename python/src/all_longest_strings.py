# Given an array of strings, return another array containing all of its longest strings.
#
#     Example
#
# For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
#
#     Hints
#
# None
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.string inputArray
# A non-empty array.
#
#     Guaranteed constraints:
#
#     1 ≤ inputArray.length ≤ 10,
#
#     1 ≤ inputArray[i].length ≤ 10.
#
#     [output] array.string
# Array of the longest strings, stored in the same order as in the inputArray.

def all_longest_strings(strings):
    max_length = 0
    for s in strings:
        if len(s) > max_length:
            max_length = len(s)
    return [*filter(lambda v: len(v) == max_length, strings)]
