// Given an array of integers, replace all the occurrences
// of elemToReplace with substitutionElem.
//
//     Example
//
//     For inputArray = [1, 2, 1],
//     elemToReplace = 1
//     and substitutionElem = 3,
//     the output should be
//     arrayReplace(inputArray, elemToReplace, substitutionElem)
//     = [3, 2, 3].
//
//     Input/Output
//
//     [time limit] 4000ms (js)
//     [input] array.integer inputArray
// Guaranteed constraints:
//
//     2 ≤ inputArray.length ≤ 10,
//
//     0 ≤ inputArray[i] ≤ 10.
//
//     [input] integer elemToReplace
// Guaranteed constraints:
//
//     0 ≤ elemToReplace ≤ 10.
//
//     [input] integer substitutionElem
// Guaranteed constraints:
//
//     0 ≤ substitutionElem ≤ 10.
//
//     [output] array.integer
package main

func MapInt(vs []int, f func(int) int) []int {
	vsm := make([]int, len(vs))
	for i, v := range vs {
		vsm[i] = f(v)
	}
	return vsm
}

func ArrayReplace(inputArray []int, elemToReplace int, substitutionElem int) []int {
	return MapInt(inputArray, func(v int) int {
		if v == elemToReplace {
			return substitutionElem
		} else {
			return v
		}
	})
}

// console.log(arrayReplace([1, 2, 1], 1, 3))
