// Given a string, output its longest prefix which contains
// only digits.
//
//     Example
//
// For inputString="123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".
//
//     Hints
//
// split()
// includes()
// push()
// join()
// Input/Output
//
//     [time limit] 4000ms (js)
//     [input] string inputString
// Guaranteed constraints:
//
//     3 ≤ inputString.length ≤ 35.
//
//     [output] string

export function longestDigitsPrefix(inputString: string): string {
    let result = [];
    for (let c of inputString.split("")) {
        if (isNaN(+c)) {
            break;
        }
        result.push(c);
    }
    return result.join("");
}


// console.log(longestDigitsPrefix('123aa1'));
