import {createAnagram} from '../src/createAnagram';

describe(createAnagram.name, () => {
    it('Test 1', () => {
        const s = "AABAA";
        const t = "BBAAA";
        const response = createAnagram(s, t);
        expect(response).toBe(1);
    });
    it('Test 2', () => {
        const s = "OVGHK";
        const t = "RPGUC";
        const response = createAnagram(s, t);
        expect(response).toBe(4);
    });
    it('Test 3', () => {
        const s = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB";
        const t = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC";
        const response = createAnagram(s, t);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const s = "HDFFVR";
        const t = "FEDDEE";
        const response = createAnagram(s, t);
        expect(response).toBe(4);
    });
    it('Test 5', () => {
        const s = "AABCDS";
        const t = "BASEAE";
        const response = createAnagram(s, t);
        expect(response).toBe(2);
    });
    it('Test 6', () => {
        const s = "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY";
        const t = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYZ";
        const response = createAnagram(s, t);
        expect(response).toBe(31);
    });
    it('Test 7', () => {
        const s = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        const t = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        const response = createAnagram(s, t);
        expect(response).toBe(0);
    });
    it('Test 8', () => {
        const s = "AAAAAA";
        const t = "AAAAAA";
        const response = createAnagram(s, t);
        expect(response).toBe(0);
    });
    it('Test 9', () => {
        const s = "KJDMDLEEKALIJB";
        const t = "AFDJGDCGHMIGHB";
        const response = createAnagram(s, t);
        expect(response).toBe(7);
    });
    it('Test 10', () => {
        const s = "BBAAABCBCAABB";
        const t = "BBBCCCBABBACA";
        const response = createAnagram(s, t);
        expect(response).toBe(2);
    });
});
