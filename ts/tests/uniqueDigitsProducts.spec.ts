import { uniqueDigitProducts } from '../src/uniqueDigitsProducts';

describe(uniqueDigitProducts.name, () => {
    it('Test 1', () => {
       
        const data = [2, 8, 121, 42, 222, 23];

   
        const response = uniqueDigitProducts(data);

 
        expect(response).toBe(3);
    });
});
