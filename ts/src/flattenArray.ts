// Flatten a nested array. You must account for varying levels of nesting.
//
//     Example
//
// steamrollArray([ [ ["a"]], [ ["b"]]]) should return ["a", "b"].
//
// steamrollArray([1, [2], [3, [ [4]]]]) should return [1, 2, 3, 4]
//
// Hints
//
// isArray()
// push()

export function flattenArray(arr: Array<any>): Array<any> {
    let result: any[] = [];
    for (const elem of arr) {
        if (Array.isArray(elem)) {
            result = result.concat(flattenArray(elem))
        } else {
            result.push(elem)
        }
    }
    return result;
}

