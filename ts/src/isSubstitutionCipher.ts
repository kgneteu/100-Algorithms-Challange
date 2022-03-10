// A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.
//
//     A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.
//
//     Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.
//
//     Example
//
// For string1 = "aacb" and string2 = "aabc", the output should be
// solution(string1, string2) = true.
//
//     Any ciphertext alphabet that starts with acb... would make this transformation possible.
//
//     For string1 = "aa" and string2 = "bc", the output should be
// solution(string1, string2) = false.
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string string1
//
// A string consisting of lowercase English characters.
//
//     Guaranteed constraints:
//     1 ≤ string1.length ≤ 10.
//
//     [input] string string2
//
// A string consisting of lowercase English characters of the same length as string1.
//
//     Guaranteed constraints:
//     string2.length = string1.length.
//
//         [output] boolean

export function isSubstitutionCipher(string1: string, string2: string): boolean {
    const alphabet: { [index: string]: string } = {}
    for (let i = 0; i < string1.length; i++) {
        if (alphabet.hasOwnProperty(string1[i])) {
            if (alphabet[string1[i]] !== string2[i]) return false;
        } else {
            if (Object.values(alphabet).includes(string2[i])) return false;
            alphabet[string1[i]] = string2[i];
        }
    }
    return true;
    //todo check
    //[...string1].every((v,i) => string1.indexOf(v) === string2.indexOf(string2[i]));
1}

// console.log(isSubstitutionCipher("aacb", "aabc"))
// console.log(isSubstitutionCipher("aa", "bc"))
//console.log(isSubstitutionCipher("aaxyaa", "aazzaa"))
