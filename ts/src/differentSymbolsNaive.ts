// Given a string, find the number of different characters in it.
//
//     Example
//
// For s = "cabca", the output should be differentSymbolsNaive(s) = 3.
//
// There are 3 different characters a, b and c.
//
//     Hints
//
// includes()
// split()
// push()
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] string s
//
// A string of lowercase English letters.
//
//     Guaranteed constraints:
//
//     3 ≤ s.length ≤ 1000.
//
//     [output] integer

export function differentSymbolsNaive(s: string): number {
    //return new Set(s.split("")).size;
    const chars:string[] = [];
    for (const c of s) {
        if (!chars.includes(c)){
            chars.push(c)
        }
    }
    return chars.length;
    //alt
    //todo
    //return new Set(s).size
}

console.log(differentSymbolsNaive('cabca'));
