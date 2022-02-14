import { stringsConstruction } from '../src/stringsConstruction';

describe(stringsConstruction.name, () => {
    it('Test 1', () => {
       
        const a = "abc";
        const b = "abccba";

   
        const response = stringsConstruction(a, b);

 
        expect(response).toBe(2);
    });
});
