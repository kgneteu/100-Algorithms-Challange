import { checkPalindrome } from '../src/checkPalindrome';

describe(checkPalindrome.name, () => {
    it('Test 1', () => {
       
        const data = 'aabaa';

   
        const response = checkPalindrome(data);


        expect(response).toBe(true);
    });

    it('Test 2', () => {
       
        const data = 'abac';

   
        const response = checkPalindrome(data);


        expect(response).toBe(false);
    });

    it('Test 3', () => {
       
        const data = 'a';

   
        const response = checkPalindrome(data);


        expect(response).toBe(true);
    });
});
