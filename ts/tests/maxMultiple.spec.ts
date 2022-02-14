import { maxMultiple } from '../src/maxMultiple';

describe(maxMultiple.name, () => {
    it('Test 1', () => {
       
        const divisor = 3;
        const bound = 10;

   
        const response = maxMultiple(divisor, bound);

 
        expect(response).toBe(9);
    });
});
