import {isSubstitutionCipher} from '../src/isSubstitutionCipher';

describe(isSubstitutionCipher.name, () => {
    it('Test 1', () => {
        const response = isSubstitutionCipher("aacb", "aabc");
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = isSubstitutionCipher("aa", "bc");
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = isSubstitutionCipher("aaxxaaz", "aazzaay");
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const response = isSubstitutionCipher("aaxyaa", "aazzaa");
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const response = isSubstitutionCipher("aabc", "aacb");
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const response = isSubstitutionCipher("dccd", "zzxx");
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const response = isSubstitutionCipher("ddcc", "zzxx");
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const response = isSubstitutionCipher("aaaabbbbcc", "cccccccccc");
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const response = isSubstitutionCipher("abcdefg", "hijklmn");
        expect(response).toBe(true);
    });
    it('Test 10', () => {
        const response = isSubstitutionCipher("aaabbbccc", "aaabbbccc");
        expect(response).toBe(true);
    });
});
