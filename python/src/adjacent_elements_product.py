# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
#
#     Example
#
# For input_array = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(input_array) = 21.
#
# 7 and 3 produce the largest product.
#
#     Hints
#
# None
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.integer input_array
# An array of integers containing at least two elements.
#
#     Guaranteed constraints:
#
#     2 ≤ input_array.length ≤ 10, -1000 ≤ input_array[i] ≤ 1000.
#
#     [output] integer
# The largest product of adjacent elements.

def adjacent_elements_product(a):
    product = a[0] * a[1]
    for idx, v in enumerate(a[1:-1]):
        if v * a[idx + 2] > product:
            product = v * a[idx + 2]
    return product



