// Given a character, check if it represents an odd digit, an even digit or
// not a digit at all.
//
//     Example
//
// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
//     Hints
//
// isNaN()
// parseInt()
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//     [input] char symbol
//     [output] string

export function characterParity(symbol: string): string {
    let v = parseInt(symbol);
    if (isNaN(v)) {
        return "not a digit";
    } else if (v % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}
