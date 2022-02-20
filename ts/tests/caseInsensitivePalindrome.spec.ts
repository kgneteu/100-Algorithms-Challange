import {isCaseInsensitivePalindrome} from '../src/caseInsensitivePalindrome';

describe(isCaseInsensitivePalindrome.name, () => {
    it('Test 1', () => {
        const data = 'AaBaa';
        const response = isCaseInsensitivePalindrome(data);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const data = 'abac';
        const response = isCaseInsensitivePalindrome(data);
        expect(response).toBe(false);
    });
});
