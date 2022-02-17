// Given array of integers, for each position i, search among the
// previous positions for the last (from the left) position that contains
// a smaller value. Store this value at position i in the answer.
// If no such value can be found, store -1 instead.
//
//     Example
//
// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].
//
//     Hints
//
// unshift()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.integer items
//
// Non-empty array of positive integers.
//
//     Guaranteed constraints:
//
//     3 ≤ items.length ≤ 15,
//
//     1 ≤ items[i] ≤ 200.
//
//     [output] array.integer
//
// Array containing answer values computed as described above.
//
package main
func arrayPreviousLess(items) {
    const out = []
    for ( i = items.length - 1 i > 0 i--) {
        for ( k = i - 1 k >= 0 k--) {
            if (items[k] < items[i]) {
                out.unshift(items[k])
                break
            } else if (k === 0) {
                out.unshift(-1)
            }
        }
    }
    out.unshift(-1)
    return out

    // ver. without unshift
    // const out = [-1]
    // for ( i = 1 i < items.length i++) {
    //      v = -1
    //     for ( k = i - 1 k >= 0 k--) {
    //        if (items[k]<items[i]){
    //            v = items[k]
    //            break
    //        }
    //     }
    //     out.push(v)
    // }
}
