import {longestDigitsPrefix} from '../src/longestDigitsPrefix';

describe(longestDigitsPrefix.name, () => {
    it('Test 1', () => {
        const data = '123aa1';
        const response = longestDigitsPrefix(data);
        expect(response).toBe('123');
    });
});
