import { sumOddFibonacciNums } from '../src/sumOddFibonacciNums';

describe(sumOddFibonacciNums.name, () => {
    it('Test 1', () => {
       
        const data = 10;

   
        const response = sumOddFibonacciNums(data);

 
        expect(response).toBe(10);
    });

    it('Test 2', () => {
       
        const data = 1000;

   
        const response = sumOddFibonacciNums(data);

 
        expect(response).toBe(1785);
    });

    it('Test 3', () => {
       
        const data = 4000000;

   
        const response = sumOddFibonacciNums(data);

 
        expect(response).toBe(4613732);
    });
});
