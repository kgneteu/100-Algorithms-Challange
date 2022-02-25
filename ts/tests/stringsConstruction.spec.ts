import {stringsConstruction} from '../src/stringsConstruction';

describe(stringsConstruction.name, () => {
    it('Test 1', () => {
        const a = "abc";
        const b = "abccba";
        const response = stringsConstruction(a, b);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const a = "abbc";
        const b = "abccba";
        const response = stringsConstruction(a, b);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const a = "abbc";
        const b = "abccbabb";
        const response = stringsConstruction(a, b);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const a = "abbc";
        const b = "";
        const response = stringsConstruction(a, b);
        expect(response).toBe(0);
    });
});
