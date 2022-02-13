# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence
# by removing no more than one element from the array.
#
#     Example
#
# For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false;
# There is no one element in this array that can be removed in order to get a strictly increasing sequence.
#
# For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true. You can remove 3 from the
# array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing
# sequence [1, 3].
#
#     Hints
#
# Nope
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] array.integer sequence
# Guaranteed constraints:
#
#     2 ≤ sequence.length ≤ 105,
#
#     -105 ≤ sequence[i] ≤ 105.
#
#     [output] boolean
#
# Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence,
# otherwise return false.


def almost_increasing_sequence(data):
    stops = 0
    for i in range(1, len(data)):
        if data[i] <= data[i - 1]:
            stops += 1
            if stops > 1:
                return False
            if i + 1 < len(data) and data[i + 1] <= data[i - 1]:
                return False
    return True

