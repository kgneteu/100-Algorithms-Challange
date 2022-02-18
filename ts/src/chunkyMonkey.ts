// Write a function that splits an array (first argument) into groups
// the length of size
// (second argument) and returns them as a two-dimensional array.
//
//     Example
//
// chunkyMonkey(["a", "b", "c", "d"], 2) should return [ ["a", "b"], ["c", "d"] ].
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [ [0, 1, 2, 3], [4, 5]].
//     Hints
//
// slice()

export function chunkyMonkey(arr: any[], size: number): any[][] {
    let result = [];
    let index = 0;
    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }
    return result;
}

