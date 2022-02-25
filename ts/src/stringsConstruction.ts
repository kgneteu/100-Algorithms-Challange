// How many strings equal to a can be constructed using letters from the
// string b ? Each letter can be used only once and in one string only.
//
// Example For a = "abc" and b = "abccba", the output should be
// stringsConstruction(a, b) = 2.
//
// We can construct 2 strings a with letters from b.
//
// Hints
//
// hasOwnProperty()
// push()
// Math.floor()
// Math.min()
// split()
// Input/Output
//
// [execution time limit] 5 seconds (ts)
// [input] string a
// String to construct, a contains only lowercase English letters.
//
// Guaranteed constraints:
//
// 3 ≤ a.length ≤ 10.
//
// [input] string b
// String containing needed letters, b contains only lowercase English letters.
//
// Guaranteed constraints:
//
// 3 ≤ b.length ≤ 50.
//
// [output] integer


export function stringsConstruction(a: string, b: string): number {
    const strA: { [index: string]: number } = {}
    const strB: { [index: string]: number } = {}

    for (let c of a.split("")) {
        strA.hasOwnProperty(c) ? strA[c]++ : strA[c] = 1;
    }

    for (let c of b.split("")) {
        if (strA.hasOwnProperty(c)) {
            strB.hasOwnProperty(c) ? strB[c]++ : strB[c] = 1;
        }
    }

    const minWords: number[] = [];

    for (let e of Object.entries(strA)) {
        if (strB.hasOwnProperty(e[0])) {
            minWords.push(Math.floor(strB[e[0]] / e[1]));
            console.log(e[1])
        } else {
            minWords.push(0)
            break;
        }
    }

    return Math.min(...minWords);
}
