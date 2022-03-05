// Write a function that reverses characters in (possibly nested) parentheses in the
// input string.
//
// Input strings will always be well-formed with matching ()s.
//
// Example
//
// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] string inputString
// A string consisting of lowercase English letters and the characters ( and ).
// It is guaranteed that all parentheses in inputString form a regular bracket sequence.
//
// Guaranteed constraints:
//     0 ≤ inputString.length ≤ 50.
//
// [output] string
//
// Return inputString, with all the characters that were in parentheses reversed.

function reverseSlice(input: string[]): string[] {
    let result: string[] = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ("(")) {
            const last = findEndParenthesis(input, i)
            const sub = input.slice(i + 1, last)
            i = last;
            result = result.concat(reverseSlice(sub).reverse())
        } else {
            result.push(input[i])
        }
    }
    return result;
}

function findEndParenthesis(input: string[], pos: number): number {
    let open = 0;
    for (let i = pos; i < input.length; i++) {
        if (input[i] === "(") {
            open++;
        } else if (input[i] === ")") {
            open--;
            if (open === 0) return i;
        }
    }
    return -1;
}

export function reverseInParentheses(inputString: string) {
    //todo refactor
    // while (inputString.includes('(')) {
    //     inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    // }
    // return inputString;

    return reverseSlice(inputString.split("")).join("");
}
//
// console.log(reverseInParentheses("(bar)"));//rab
// console.log(reverseInParentheses("foo(bar)baz"));//foorabbaz
// console.log(reverseInParentheses("foo(bar)baz(blim)"));//foorabbazmilb
// console.log(reverseInParentheses("foo(bar(baz))blim"));// foobazrabblim
