import {constructSquare} from '../src/constructSquare';

describe(constructSquare.name, () => {
    it('Test 1', () => {
        const data = "ab";
        const response = constructSquare(data);
        expect(response).toBe(81);
    });
    it('Test 2', () => {
        const data = "zzz";
        const response = constructSquare(data);
        expect(response).toBe(-1);
    });
    it('Test 3', () => {
        const data = "aba";
        const response = constructSquare(data);
        expect(response).toBe(900);
    });
    it('Test 4', () => {
        const data = "abcbbb";
        const response = constructSquare(data);
        expect(response).toBe(810000);
    });
    it('Test 5', () => {
        const data = "abc";
        const response = constructSquare(data);
        expect(response).toBe(961);
    });
    it('Test 6', () => {
        const data = "aaaabbcde";
        const response = constructSquare(data);
        expect(response).toBe(999950884);
    });
});
