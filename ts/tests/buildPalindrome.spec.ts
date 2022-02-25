import {buildPalindrome} from "../src/buildPalindrome";

describe(buildPalindrome.name, function () {
    it('Test 1', () => {
        const data = "abcdc"
        const response = buildPalindrome(data);
        const expected = "abcdcba"
        expect(response).toEqual(expected);
    });
    it('Test 2', () => {
        const data = "abc"
        const response = buildPalindrome(data);
        const expected = "abcba"
        expect(response).toEqual(expected);
    });
    it('Test 3', () => {
        const data = "ababab"
        const response = buildPalindrome(data);
        const expected = "abababa"
        expect(response).toEqual(expected);
    });
    it('Test 4', () => {
        const data = "abba"
        const response = buildPalindrome(data);
        const expected = "abba"
        expect(response).toEqual(expected);
    });
    it('Test 5', () => {
        const data = "kebabek"
        const response = buildPalindrome(data);
        const expected = "kebabek"
        expect(response).toEqual(expected);
    });
});
