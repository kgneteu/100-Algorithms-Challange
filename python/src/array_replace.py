# Given an array of integers, replace all the occurrences
# of elemToReplace with substitutionElem.
#
#     Example
#
#     For input_array = [1, 2, 1],
#     elemToReplace = 1
#     and substitutionElem = 3,
#     the output should be
#     arrayReplace(input_array, elemToReplace, substitutionElem)
#     = [3, 2, 3].
#
#     Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.integer input_array
# Guaranteed constraints:
#
#     2 ≤ input_array.length ≤ 10,
#
#     0 ≤ input_array[i] ≤ 10.
#
#     [input] integer elemToReplace
# Guaranteed constraints:
#
#     0 ≤ elemToReplace ≤ 10.
#
#     [input] integer substitutionElem
# Guaranteed constraints:
#
#     0 ≤ substitutionElem ≤ 10.
#
#     [output] array.integer

def array_replace(input_array, elem_to_replace, substitution_elem):
    return [*map(lambda v: substitution_elem if v == elem_to_replace else v, input_array)]
