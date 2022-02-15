# Given an array of integers,
# find the maximal absolute difference between any two of its adjacent elements.
#
#     Example
#
# For input_array = [2, 4, 1, 0],
# the output should be arrayMaximalAdjacentDifference(input_array) = 3.
#
# For input_array = [2, 9, 1, 0],
# the output should be arrayMaximalAdjacentDifference(input_array) = 8.
#
# Hints
#
# Math.abs()
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.integer input_array
# Guaranteed constraints:
#
#     3 ≤ input_array.length ≤ 10,
#
#     -15 ≤ input_array[i] ≤ 15.
#
#     [output] integer
# The maximal absolute difference.
#

def array_maximal_adjacent_difference(input_array):
    max_diff = abs(input_array[1] - input_array[0])
    for i in range(2, len(input_array)):
        diff = abs(input_array[i] - input_array[i - 1])
        if diff > max_diff: max_diff = diff
    return max_diff


# console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
