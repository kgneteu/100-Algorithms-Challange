// Consider an arithmetic expression of the form a#b=c.
// Check whether it is possible to replace # with one of the
// four signs: +, -, * or / to obtain a correct expression.
//
//     Example
//
// For a = 2, b = 3, and c = 5, the output should be
// solution(a, b, c) = true.
//
//     We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.
//
//     For a = 8, b = 2, and c = 4, the output should be
// solution(a, b, c) = true.
//
//     We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.
//
//     For a = 8, b = 3, and c = 2, the output should be
// solution(a, b, c) = false.
//
// 8 + 3 = 11 ≠ 2;
// 8 - 3 = 5 ≠ 2;
// 8 * 3 = 24 ≠ 2;
// 8 / 3 = 2.(6) ≠ 2.
// So the answer is false.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] integer a
//
// Guaranteed constraints:
//     1 ≤ a ≤ 20.
//
//     [input] integer b
//
// Guaranteed constraints:
//     1 ≤ b ≤ 20.
//
//     [input] integer c
//
// Guaranteed constraints:
//     0 ≤ c ≤ 20.
//
//     [output] boolean
//
// true if the desired replacement is possible, false otherwise.
//

export function arithmeticExpression(a: number, b: number, c: number): boolean {
    if (a + b == c) return true;
    if (a - b == c) return true;
    if (a * b == c) return true;
    if (b === 0) return false;
    if (a / b == c) return true;
    return false;

    //Alt
    // return [...'+-*/'].some(op => eval(`${a}${op}${b}`) === c)
    // return a + b == c || a - b == c || a * b == c || a / b == c
}

//console.log(arithmeticExpression(2000, 0, 5))
//console.log(arithmeticExpression(2, 3, 5))
