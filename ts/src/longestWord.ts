// Define a word as a sequence of consecutive English letters.
// Find the longest word from the given string.
//
//     Example
//
// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] string text
//
// Guaranteed constraints:
//     4 ≤ text.length ≤ 50.
//
//     [output] string
//
// The longest word from text. It's guaranteed that there is a unique output.

export function longestWord(text: string): string {
    const words = text.match(/[A-Za-z]+/g)
    return words.reduce((acc, v) => v.length > acc.length ? v : acc, '')
}

//todo test
// return text.match(/[A-Za-z]+/g).sort((a,b)=>{return b.length > a.length})[0];
console.log(longestWord("Ready, steady, go!"))
console.log(longestWord("ab-CDE-fg_hi"))
