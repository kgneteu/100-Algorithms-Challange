import { reverseAString } from '../src/reverseAString';

describe(reverseAString.name, () => {
    it('Test 1', () => {
       
        const inputString = 'hello';

   
        const response = reverseAString(inputString);

 
        expect(response).toBe('olleh');
    });

    it('Test 2', () => {
       
        const inputString = 'Howdy';

   
        const response = reverseAString(inputString);

 
        expect(response).toBe('Howdy');
    });
});
