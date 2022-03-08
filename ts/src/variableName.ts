// Correct variable names consist only of English letters, digits and underscores
// and they can't start with a digit.
//
// Check if the given string is a correct variable name.
//
//     Example
//
// For name = "var_1__Int", the output should be
// solution(name) = true;
// For name = "qq-q", the output should be
// solution(name) = false;
// For name = "2w2", the output should be
// solution(name) = false.
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string name
//
// Guaranteed constraints:
//     1 ≤ name.length ≤ 10.
//
//     [output] boolean
//
// true if name is a correct variable name, false otherwise.

export function variableName(name: string): boolean {
    const validChars = "0123456789_abcdefghijklmnopqrstuvwxyz";
    if (name === "") return false;
    for (const c of name.split("")) {
        if (!validChars.includes(c.toLowerCase())) return false;
    }
    const firstLetter = validChars.indexOf(name[0].toLowerCase())
    return firstLetter > 9;
    //todo regexpr
    // return /^[a-z_]\w*$/i.test(name)
}

console.log(variableName("GoodKing"))
