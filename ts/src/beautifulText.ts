// Consider a string containing only letters and whitespaces.
// It is allowed to replace some (possibly, none) whitespaces with newline symbols to
// obtain a multiline text.
// Call a multiline text beautiful if and only if each of its lines
// (i.e. substrings delimited by a newline character) contains
// an equal number of characters
// (only letters and whitespaces should be taken into account
// when counting the total while newline characters shouldn't).
// Call the length of the line the text width.
//
// Given a string and some integers l and r (l ≤ r),
// check if it's possible to obtain a beautiful text from the string
// with a text width that's within the range [l, r].
//
//     Example
//
// For inputString = "Look at this example of a correct text", l = 5,
// and r = 15, the output should be
// solution(inputString, l, r) = true.
//
// We can replace 13th and 26th characters with '\n',
// and obtain the following multiline text of width 12:
//
// Look at this
// example of a
// correct text
//
// For inputString = "abc def ghi", l = 4, and r = 10, the output should be
// solution(inputString, l, r) = false.
//
// There are two ways to obtain a text with lines of equal length from this input,
// one has width = 3 and another has width = 11 (this is a one-liner).
// Both of these values are not within our bounds.
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] string inputString
//
// Guaranteed constraints:
//     10 ≤ inputString.length ≤ 40.
//
//     [input] integer l
//
// A positive integer.
//
//     Guaranteed constraints:
//     1 ≤ l ≤ r.
//
//     [input] integer r
//
// A positive integer.
//
//     Guaranteed constraints:
//     l ≤ r ≤ 15.
//
//     [output] boolean

function beautifulText(inputString: string, l: number, r: number) {
    if (inputString.length >= l && inputString.length <= r) return true; //one-liner
    for (let i = l; i <= r; i++) {
        let j = i;
        for (; j < inputString.length; j = j + i) {
            if (inputString[j] !== " ") break;
            j++
        }
        if (j == inputString.length) return true;
    }
    return false;

    // for (let i = l; i <= r; i++) {
    //     let regex = new RegExp('^(.{' + i + '}\\s)+.{' + i + '}$');
    //     if (regex.test(inputString)) return true;
    // }
    // return false;
}

console.log(beautifulText("Look at this example of a correct text", 5, 15))
console.log(beautifulText("abc def ghi", 4, 10))
