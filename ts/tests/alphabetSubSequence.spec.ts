import {alphabetSubsequence} from '../src/alphabetSubsequence';

describe(alphabetSubsequence.name, () => {
    it('Test 1', () => {
        const data = 'effg';
        const response = alphabetSubsequence(data);
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        const data = 'ace';
        const response = alphabetSubsequence(data);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const data = 'cdce';
        const response = alphabetSubsequence(data);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = 'bxz';
        const response = alphabetSubsequence(data);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const data = 'ace';
        const response = alphabetSubsequence(data);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const data = 'cdefghijkxyzz';
        const response = alphabetSubsequence(data);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = 'qa';
        const response = alphabetSubsequence(data);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const data = 'fkyz';
        const response = alphabetSubsequence(data);
        expect(response).toBe(true);
    });
});
