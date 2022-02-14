import { firstDigit } from '../src/firstDigit';

describe(firstDigit.name, () => {
    it('Test 1', () => {
       
        const inputString = 'var_1__Int';

   
        const response = firstDigit(inputString);

 
        expect(response).toBe('1');
    });

    it('Test 2', () => {
       
        const inputString = 'q2q-q';

   
        const response = firstDigit(inputString);

 
        expect(response).toBe('2');
    });

    it('Test 3', () => {
       
        const inputString = '0ss';

   
        const response = firstDigit(inputString);

 
        expect(response).toBe('0');
    });
});
