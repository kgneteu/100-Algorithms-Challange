// Implement the missing code, denoted by ellipses.
// You may not modify the pre-existing code.
//
// Implement a function that replaces each digit in the given string
// with a '#' character.
//
//     Example
//
// For input = "There are 12 points", the output should be
// solution(input) = "There are ## points".
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] string input
//
// Guaranteed constraints:
//     5 ≤ input.length ≤ 20.
//
//     [output] string

function replaceAllDigitsRegExp(input:string):string {

    return input.replace(/\d/g,"#");
}

console.log(replaceAllDigitsRegExp("There are 12 points"))
