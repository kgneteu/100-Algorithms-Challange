// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.
//
// Example
//
// missingLetters("abce") should return "d".
// missingLetters("abcdefghjklmno") should return "i".
// missingLetters("abcdefghijklmnopqrstuvwxyz") should return undefined.
//
// Hints
//
// split()

export function missingLetters(str: string): string {
    let code = str.charCodeAt(0);
    for (const c of str.split("")) {
        if (c.charCodeAt(0) !== code) return String.fromCharCode(code);
        code++;
    }
    //Alt:
    // const letters = "abcdefghijklmnopqrstuvwxyz".split("")
    // const offset = letters.indexOf(str[0])
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== letters[offset + i]) return letters[offset + i]
    // }
}
