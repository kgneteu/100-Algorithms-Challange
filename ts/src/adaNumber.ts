// Consider two following representations of a non-negative integer:
//
// A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
// An integer with at least one digit in a base from 2 to 16 (inclusive),
// enclosed between # characters, and preceded by the base,
// which can only be a number between 2 and 16 in the first representation.
// For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
// Additionally, both representations may contain underscore (_) characters;
// they are used only as separators for improving legibility
// of numbers and can be ignored while processing a number.
//
// Your task is to determine whether the given string is
// a valid integer representation.
//
// Note: this is how integer numbers are represented in the programming language Ada.
//
// Example
//
// For line = "123_456_789", the output should be
// solution(line) = true;
// For line = "16#123abc#", the output should be
// solution(line) = true;
// For line = "10#123abc#", the output should be
// solution(line) = false;
// For line = "10#10#123ABC#", the output should be
// solution(line) = false;
// For line = "10#0#", the output should be
// solution(line) = true;
// For line = "10##", the output should be
// solution(line) = false.
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string line
//
// A non-empty string.
//
//     Guaranteed constraints:
//     2 ≤ line.length ≤ 30.
//
//     [output] boolean
//
// true if line is a valid integer representation, false otherwise.

export function adaNumber(line: string): boolean {
    let base = 10;
    line = line.replace(/_/g, "")
    if (line.includes('#')) {
        const n = line.split('#')
        if (n.length !== 3) return false;
        base = Number(n[0]);
        if (!Number(base)) return false;
        if (base < 2 || base > 16) return false;
        line = n[1];
    }
    if (line === "0") return true;
    const digits = "0123456789abcdef".substring(0, base)
    let re = new RegExp(`^[+-]?[${digits.slice(1)}][${digits}]*$`, "i");
    return re.test(line)
}

// console.log(adaNumber("123_456_789"))
// console.log(adaNumber("16#123abc#"))
// console.log(adaNumber("10#123abc#"))
// console.log(adaNumber("16#1234567890ABCDEFabcdef#"))
// //console.log(adaNumber("10#10#123ABC#"))
// console.log(adaNumber("10#0#"))
