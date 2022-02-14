import { circleOfNumbers } from '../src/circleOfNumbers';

describe(circleOfNumbers.name, () => {
    it('Test 1', () => {
       
        const n = 10;
        const firstNumber = 2;

   
        const response = circleOfNumbers(n, firstNumber);


        expect(response).toBe(7);
    });
});
