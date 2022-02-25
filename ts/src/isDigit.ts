// Determine if the given character is a digit or not.
//
//     Example
//
// For symbol = '0', the output should be
// solution(symbol) = true;
// For symbol = '-', the output should be
// solution(symbol) = false.
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] char symbol
//
// A character which is either a digit or not.
//
//     Guaranteed constraints:
//     Given symbol is from ASCII table.
//
//     [output] boolean
//
// true if symbol is a digit, false otherwise.

export function isDigit(symbol: string): boolean {
    return (symbol.length == 1 && !isNaN(Number(symbol)))

    // Alt
    // return /^\d$/.test(symbol);
}


