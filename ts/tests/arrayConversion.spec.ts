import { arrayConversion } from '../src/arrayConversion';

describe(arrayConversion.name, () => {
    it('Test 1', () => {
       
        const data = [1, 2, 3, 4, 5, 6, 7, 8];

   
        const response = arrayConversion(data);


        expect(response).toBe(186);
    });
});
