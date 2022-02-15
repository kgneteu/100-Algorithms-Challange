# Given array of integers, for each position i, search among the
# previous positions for the last (from the left) position that contains
# a smaller value. Store this value at position i in the answer.
# If no such value can be found, store -1 instead.
#
#     Example
#
# For items = [3, 5, 2, 4, 5], the output should be
# arrayPreviousLess(items) = [-1, 3, -1, 2, 4].
#
#     Hints
#
# unshift()
# Input/Output
#
#     [execution time limit] 5 seconds (ts)
#
#     [input] array.integer items
#
# Non-empty array of positive integers.
#
#     Guaranteed constraints:
#
#     3 ≤ items.length ≤ 15,
#
#     1 ≤ items[i] ≤ 200.
#
#     [output] array.integer
#
# Array containing answer values computed as described above.
#
def array_previous_less(items):
    out = []
    for i in range(len(items) - 1, 0, -1):
        for k in range(i - 1, -1, -1):
            if items[k] < items[i]:
                out.insert(0, items[k])
                break
            elif k == 0:
                out.insert(0, -1)
    out.insert(0, -1)
    return out

    # ver. without unshift
    # const out = [-1]
    # for (let i = 1; i < items.length; i++) {
    #     let v = -1;
    #     for (let k = i - 1; k >= 0; k--) {
    #        if (items[k]<items[i]){
    #            v = items[k];
    #            break;
    #        }
    #     }
    #     out.push(v)
    # }
