import {allLongestStrings} from '../src/allLongestStrings';

describe(allLongestStrings.name, () => {
    it('Test 1', () => {
        const data = ["aba", "aa", "ad", "vcd", "aba"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["aba", "vcd", "aba"]);
    });
    it('Test 2', () => {
        const data = ["aa"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["aa"]);
    });
    it('Test 3', () => {
        const data = ["abc", "eeee", "abcd", "dcd"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["eeee", "abcd"]);
    });
    it('Test 4', () => {
        const data = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["zzzzzz", "abcdef", "aaaaaa"]);
    });
    it('Test 5', () => {
        const data = ["enyky", "benyky", "yely", "varennyky"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["varennyky"]);
    });
    it('Test 6', () => {
        const data = ["abacaba", "abacab", "abac", "xxxxxx"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["abacaba"]);
    });
    it('Test 7', () => {
        const data = ["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["yooooooung", "watermelon"]);
    });
    it('Test 8', () => {
        const data = ["onsfnib", "aokbcwthc", "jrfcw"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["aokbcwthc"]);
    });
});
