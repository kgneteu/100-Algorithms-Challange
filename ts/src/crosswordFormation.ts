// You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:
//
// the crossword must contain exactly four words;
// these four words should form four pairwise intersections;
// all words must be written either left-to-right or top-to-bottom;
// the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
// Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.
//
//     Example
//
// For words = ["crossword", "square", "formation", "something"], the output should be
// solution(words) = 6.
//
// The six crosswords can be formed as shown below:
//
//   f                         f                             f
//   o                     c r o s s w o r d     c r o s s w o r d
// c r o s s w o r d           r   o                   q     r
//   m   q                     m   m                   u     m
//   a   u               s q u a r e                   a     a
//   t   a                     t   t                   r     t
//   i   r                     i   h             s o m e t h i n g
// s o m e t h i n g           o   i                         o
//   n                         n   n                         n
//   g
//
//     c         s               s
// f o r m a t i o n       c     q               c         s
//     o         m         r     u               r         o
//     s q u a r e       f o r m a t i o n       o         m
//     s         t         s     r               s q u a r e
//     w         h         s o m e t h i n g     s         t
//     o         i         w                     w         h
//     r         n         o                   f o r m a t i o n
//     d         g         r                     r         n
//     d                   d                               g
// Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.string words
//
// An array of distinct strings, the words you need to use in your crossword.
//
//     Guaranteed constraints:
//     words.length = 4,
//         3 ≤ words[i].length < 15.
//
//     [output] integer
//
// The number of ways to make a correct crossword of the desired formation.

//todo rethink refactor

export function crosswordFormation(words: string[]): number {
    let permutations = permute(words);
    return permutations.reduce((acc, p) => acc + countSolutions(p), 0);
}

function countSolutions(words: string[]): number {
    let count = 0;

    for (let i = 0; i < words[0].length; i++) {
        let j = words[1].indexOf(words[0][i]);
        while (j >= 0) {
            for (let k = i + 2; k < words[0].length; k++) {
                let l = words[2].indexOf(words[0][k]);
                while (l >= 0) {
                    for (let m = j + 2; m < words[1].length; m++) {
                        let n = words[3].indexOf(words[1][m])
                        while (n >= 0) {
                            if (words[3].length - n > k - i &&
                                words[2].length - l > m - j &&
                                words[3][k - i + n] == words[2][m - j + l]) {
                                count++;
                            }
                            n = words[3].indexOf(words[1][m], n + 1)
                        }
                    }
                    l = words[2].indexOf(words[0][k], l + 1);
                }
            }

            j = words[1].indexOf(words[0][i], j + 1);
        }
    }
    return count;
}

let permArr: string[][] = [];
let usedWords: string[] = [];

function permute(input: string[]): string[][] {
    let i, w;
    for (i = 0; i < input.length; i++) {
        w = input.splice(i, 1)[0];
        usedWords.push(w);
        if (input.length == 0) {
            permArr.push(usedWords.slice());
        }
        permute(input);
        input.splice(i, 0, w);
        usedWords.pop();
    }
    return permArr
};

// console.log(crosswordFormation(["crossword", "square", "formation", "something"]))
// console.log(crosswordFormation(["crossword", "square", "formation", "something"]))
// function solution(words) {
//     let t = 0
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             for (let k = 0; k < words.length; k++) {
//                 for (let l = 0; l < words.length; l++) {
//                     if (i != j && i != k && i != l && j != k && j != l && k != l) {
//                         t += check(words[i], words[j], words[k], words[l])
//                     }
//                 }
//             }
//         }
//     }
//     return t
// }
//
// function check (a, b, c, d) {
//     let t = 0
//     for (let a1 = 0; a1 < a.length; a1++) {
//         for (let a2 = a1 + 2; a2 < a.length; a2++) {
//             for (let b1 = 0; b1 < b.length; b1++) {
//                 for (let b2 = b1 + 2; b2 < b.length; b2++) {
//                     for (let c1 = 0; c1 < c.length; c1++) {
//                         for (let d1 = 0; d1 < d.length; d1++) {
//                             let c2 = c1 + (a2 - a1)
//                             let d2 = d1 + (b2 - b1)
//                             if (c2 < c.length && d2 < d.length) {
//                                 if (a.charAt(a1) === b.charAt(b1)
//                                     && a.charAt(a2) === d.charAt(d1)
//                                     && c.charAt(c1) === b.charAt(b2)
//                                     && c.charAt(c2) === d.charAt(d2)) {
//                                     t++
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return t
// }
