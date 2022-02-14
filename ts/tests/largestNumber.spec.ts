import { largestNumber } from '../src/largestNumber';

describe(largestNumber.name, () => {
    it('Test 1', () => {
       
        const data = 2;

   
        const response = largestNumber(data);

 
        expect(response).toBe(99);
    });
});
