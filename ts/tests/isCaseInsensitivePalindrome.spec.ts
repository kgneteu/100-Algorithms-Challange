import {isCaseInsensitivePalindrome} from '../src/isCaseInsensitivePalindrome';

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

    it('Test 3', () => {
        const data = 'aBACaba';
        const response = isCaseInsensitivePalindrome(data);
        expect(response).toBe(true);
    });

    it('Test 4', () => {
        const data = 'opOP';
        const response = isCaseInsensitivePalindrome(data);
        expect(response).toBe(false);
    });

    it('Test 5', () => {
        const data = 'ZZzzazZzz';
        const response = isCaseInsensitivePalindrome(data);
        expect(response).toBe(true);
    });
});
