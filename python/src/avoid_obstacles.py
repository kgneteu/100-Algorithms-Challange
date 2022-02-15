# You are given an array of integers representing coordinates
# of obstacles situated on a straight line.
#
#     Assume that you are jumping from the point with coordinate 0 to the right.
#     You are allowed only to make jumps of the same length represented by some integer.
#
#     Find the minimal length of the jump enough to avoid all the obstacles.
#
#     Example
#
# For input_array = [5, 3, 6, 7, 9], the output should be avoidObstacles(input_array) = 4.
#
# Hints
#
# sort()
# every()
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.integer input_array
# Non-empty array of positive integers.
#
#     Guaranteed constraints:
#
#     2 ≤ input_array.length ≤ 10,
#
#     1 ≤ input_array[i] ≤ 40.
#
#     [output] integer
# The desired length.
#

def avoid_obstacles(input_array):
    max_point = max(input_array)
    min_length = max_point + 1
    for i in range(2, max_point - 1):
        if all(v % i != 0 for v in input_array):
            return i
    return min_length
