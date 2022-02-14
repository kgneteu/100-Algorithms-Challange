import { palindromeRearranging } from '../src/palindromeRearranging';

describe(palindromeRearranging.name, () => {
    it('Test 1', () => {
       
        const inputString = 'aabb';

   
        const response = palindromeRearranging(inputString);

 
        expect(response).toBe(true);
    });
});
