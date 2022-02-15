# Given an array of strings, return another array containing all of its longest strings.
#
#     Example
#
# For input_array = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(input_array) = ["aba",
# "vcd", "aba"].
#
#     Hints
#
# None
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.string input_array
# A non-empty array.
#
#     Guaranteed constraints:
#
#     1 ≤ input_array.length ≤ 10,
#
#     1 ≤ input_array[i].length ≤ 10.
#
#     [output] array.string
# Array of the longest strings, stored in the same order as in the input_array.

def all_longest_strings(strings):
    max_length = 0
    for s in strings:
        if len(s) > max_length:
            max_length = len(s)
    return [*filter(lambda v: len(v) == max_length, strings)]
