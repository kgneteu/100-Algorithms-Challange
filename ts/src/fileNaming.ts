// You are given an array of desired filenames in the order of their creation.
// Since two files cannot have equal names, the one which comes later will have an addition
// to its name in a form of (k), where k is the smallest positive integer such that the obtained
// name is not used yet.
//
//     Return an array of names that will be given to the files.
//
//     Example
//
// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
//
//     Input/Output
//
//     [execution time limit] 5 seconds (ts)
//
//     [input] array.string names
//
// Guaranteed constraints:
//     5 ≤ names.length ≤ 1000,
//     1 ≤ names[i].length ≤ 15.
//
//     [output] array.string

export function fileNaming(names: string[]): string[] {
    const result: string[] = []
    for (const name of names) {
        if (result.includes(name)) {
            for (let i = 1; i < 1000; i++) {
                const newName = `${name}(${i})`
                if (!result.includes(newName)) {
                    result.push(newName)
                    break;
                }
            }
        } else {
            result.push(name)
        }
    }
    return result;
}
//todo better
// const solution = names => {
//     const used = {};
//     return names.map(name => {
//         let newName = name;
//         while (used[newName]) {
//             newName = `${name}(${used[name]++})`;
//         }
//         used[newName] = 1;
//         return newName;
//     });
// };
// function solution(names) {
//     var r = [];
//     names.forEach( n => {
//         var l = 1, m = n;
//         while( r.includes(m) ) m = n + '('+ l++ +')';
//         r.push(m);
//     } );
//     return r;
// }
console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]))
