// Consider the following ciphering algorithm:
//
//     -For each character replace it with its code.
//     -Concatenate all of the obtained numbers.
//
// Given a ciphered string, return the initial one if it is known
// that it consists only of lowercase letters.
//
// Note: here the character's code means its decimal ASCII code,
// the numerical representation of a character used by most modern
// programming languages.
//
// Example
//
// For cipher = "10197115121", the output should be
// solution(cipher) = "easy".
//
// Explanation: charCode('e') = 101,
// charCode('a') = 97,
// charCode('s') = 115 and
// charCode('y') = 121.
//
// Input/Output
//
// [execution time limit] 5 seconds (ts)
//
// [input] string cipher
//
// A non-empty string which is guaranteed to be a cipher for some other string of lowercase letters.
//
//     Guaranteed constraints:
//     2 ≤ cipher.length ≤ 100.
//
//     [output] string

export function decipher(cipher: string): string {
    // let i = 0;
    // let result = ""
    // while (i < cipher.length) {
    //     if (cipher[i] === "1") {
    //         result += String.fromCharCode(+cipher.substring(i, i + 3))
    //         i+=3;
    //     } else {
    //         result += String.fromCharCode(+cipher.substring(i, i + 2))
    //         i+=2;
    //     }
    // }
    // return result;

    return String.fromCharCode(...cipher.match(/1\d\d|\d\d/g).map(v => +v))

}

//console.log(decipher("10197115121"))
