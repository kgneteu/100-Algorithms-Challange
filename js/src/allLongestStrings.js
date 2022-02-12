//Given an array of strings, return another array containing all of its longest strings.
export function allLongestStrings(strings) {
    let maxLength = 0;
    for (let s of strings) {
        if (s.length > maxLength) maxLength = s.length;
    }
    return strings.filter(v => v.length === maxLength);
}
