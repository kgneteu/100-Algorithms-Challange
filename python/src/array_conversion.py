# Given an array of 2k integers (for some integer k),
# perform the following operations until the array contains only one element:
#
# On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of
#     consecutive elements with their sum;
# On the 2nd, 4th, 6th, etc. iterations replace each pair of
# consecutive elements with their product. After the algorithm has finished,
# there will be a single element left in the array. Return that element.
#     Example
#
# For input_array = [1, 2, 3, 4, 5, 6, 7, 8],
# the output should be arrayConversion(input_array) = 186.
#
# We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186],
# so the answer is 186.
#
# Hints
#
# push()
# Input/Output
#
#     [execution time limit] 5 seconds (ts)
#     [input] array.integer input_array
# Guaranteed constraints:
#
#     1 ≤ input_array.length ≤ 20,
#
#     -9 ≤ input_array[i] ≤ 99.
#
#     [output] integer

def array_conversion(input_array):
    output_array = input_array
    odd_pass = True
    while len(output_array) > 1:
        work_array = []
        for i in range(0, len(output_array), 2):
            if odd_pass:
                work_array.append(output_array[i] + output_array[i + 1])
            else:
                work_array.append(output_array[i] * output_array[i + 1])
        odd_pass = not odd_pass
        output_array = work_array
    return output_array[0]
