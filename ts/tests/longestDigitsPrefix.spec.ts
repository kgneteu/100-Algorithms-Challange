import {longestDigitsPrefix} from '../src/longestDigitsPrefix';

describe(longestDigitsPrefix.name, () => {
    it('Test 1', () => {
        const data = '123aa1';
        const response = longestDigitsPrefix(data);
        expect(response).toBe('123');
    });
    it('Test 2', () => {
        const data = '0123456789';
        const response = longestDigitsPrefix(data);
        expect(response).toBe('0123456789');
    });
    it('Test 3', () => {
        const data = '  3) always check for whitespaces';
        const response = longestDigitsPrefix(data);
        expect(response).toBe('');
    });
});
