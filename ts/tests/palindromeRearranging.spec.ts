import {palindromeRearranging} from '../src/palindromeRearranging';

describe(palindromeRearranging.name, () => {
    it('Test 1', () => {
        const inputString = 'aabb';
        const response = palindromeRearranging(inputString);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const inputString = 'aaabb';
        const response = palindromeRearranging(inputString);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const inputString = 'aaabbcc';
        const response = palindromeRearranging(inputString);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const inputString = 'aaabbccd';
        const response = palindromeRearranging(inputString);
        expect(response).toBe(false);
    });
});
