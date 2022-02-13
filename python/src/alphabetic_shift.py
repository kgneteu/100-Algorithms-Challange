# Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
#
# Example
#
# For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
#
#     Hints
#
# split()
# indexOf()
# join()
# Input/Output
#
#     [time limit] 4000ms (js)
#     [input] string inputString
# Non-empty string consisting of lowercase English characters.
#
#     Guaranteed constraints:
#
#     1 ≤ inputString.length ≤ 10.
#
#     [output] string
# The result string after replacing all of its characters.
def alphabetic_shift(s):
    out = ''
    for c in s:
        if c == 'z':
            out += 'a'
        else:
            out += chr(ord(c) + 1)
    return out
