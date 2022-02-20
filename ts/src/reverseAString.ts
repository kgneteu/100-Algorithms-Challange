// Reverse the provided string.
//
//     You may need to turn the string into an array before you can reverse it.
//
//     Your result must be a string.
//
//     Example
//
// reverseAString('hello') returns 'olleh';
// reverseAString('Howdy') returns 'ydwoH';
// Hints
//
// join()
// split()
// reverse()

export function reverseAString(str: string): string {
    return str.split("").reverse().join("");
}

