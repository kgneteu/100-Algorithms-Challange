// Determine whether the given string can be obtained by one concatenation
// of some string to itself.
//
//     Example
//
// For inputString = "tandemtandem", the output should be
// isTandemRepeat(inputString) = true;
// For inputString = "qqq", the output should be
// isTandemRepeat(inputString) = false;
// For inputString = "2w2ww", the output should be
// isTandemRepeat(inputString) = false.
//     Hints
//
// slice()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string inputString
// Guaranteed constraints:
//
//     2 ≤ inputString.length ≤ 20
//
//     [output] boolean
// true if inputString represents a string concatenated to itself, false otherwise.

export function isTandemRepeat(inputString: string): boolean {
    if (inputString.length % 2 !== 0) return false;
    return inputString.slice(0, inputString.length / 2) === inputString.slice(inputString.length / 2);
}

// console.log(isTandemRepeat('tandemtandem'))
// console.log(isTandemRepeat('qqq'))
// console.log(isTandemRepeat('2w2ww'))
