# Given array of integers, find the maximal possible sum of some of its
# k consecutive elements.
#
#     Example
#
# For input_array = [2, 3, 5, 1, 6] and k = 2,
# the output should be arrayMaxConsecutiveSum(input_array, k) = 8.
# All possible sums of 2 consecutive elements are:
#
# 2 + 3 = 5;
# 3 + 5 = 8;
# 5 + 1 = 6;
# 1 + 6 = 7.
# Thus, the answer is 8
#
# Input/Output
#
#     [execution time limit] 4 seconds (js)
#     [input] array.integer input_array Array of positive integers.
#     Guaranteed constraints:
#
#     3 ≤ input_array.length ≤ 105,
#
#     1 ≤ input_array[i] ≤ 1000.
#
#     [input] integer k
# An integer (not greater than the length of input_array).
#
# Guaranteed constraints: 1 ≤ k ≤ input_array.length.
#
#     [output] integer
# The maximal possible sum.


def array_max_consecutive_sum(input_array, k):
    s = sum(input_array[0:k])
    max_value = s
    for i in range(k, len(input_array)):
        s -= input_array[i - k]
        s += input_array[i]
        if s > max_value:
            max_value = s
    return max_value
