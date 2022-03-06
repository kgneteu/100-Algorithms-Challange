import {stringsRearrangement} from "../src/stringsRearrangement";


describe(stringsRearrangement.name, () => {
    it('Test 1', () => {
        const response = stringsRearrangement(["aba", "bbb", "bab"]);
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        const response = stringsRearrangement(["ab", "bb", "aa"]);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const response = stringsRearrangement(["q", "q"]);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = stringsRearrangement(["zzzzab", "zzzzbb", "zzzzaa"]);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = stringsRearrangement(["ab", "ad", "ef", "eg"]);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = stringsRearrangement(["abc", "bef", "bcc", "bec", "bbc", "bdc"]);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = stringsRearrangement(["abc", "abx", "axx", "abc"]);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = stringsRearrangement(["abc", "abx", "axx", "abx", "abc"]);
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const response = stringsRearrangement(["f", "g", "a", "h"]);
        expect(response).toBe(true);
    });
    it('Test 10', () => {
        const response = stringsRearrangement(["ff", "gf", "af", "ar", "hf"]);
        expect(response).toBe(true);
    });
    it('Test 11', () => {
        const response = stringsRearrangement(["a", "b", "c"]);
        expect(response).toBe(true);
    });
});

