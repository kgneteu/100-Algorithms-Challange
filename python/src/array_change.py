# You are given an array of integers. On each move you are allowed to
# increase exactly one of its element by one. Find the minimal number
# of moves required to obtain a strictly increasing sequence from the input.
#
#     Example
#
# For input_array = [1, 1, 1], the output should be arrayChange(input_array) = 3.
#
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.integer input_array
# Guaranteed constraints:
#
#     3 ≤ input_array.length ≤ 105,
#
#     -105 ≤ input_array[i] ≤ 105.
#
# [output] integer The minimal number of moves needed to obtain a strictly increasing sequence from input_array. It's
# guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

def array_change(input_array):
    moves = 0
    prev_value = input_array[0]
    for i in range(1, len(input_array)):
        if input_array[i] <= prev_value:
            moves += prev_value - input_array[i] + 1
            prev_value = input_array[i] + prev_value - input_array[i] + 1
        else:
            prev_value = input_array[i]
    return moves

