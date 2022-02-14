import { digitDegree } from '../src/digitDegree';

describe(digitDegree.name, () => {
    it('Test 1', () => {
       
        const n = 5;

   
        const response = digitDegree(n);

 
        expect(response).toBe(0);
    });

    it('Test 2', () => {
       
        const n = 100;

   
        const response = digitDegree(n);

 
        expect(response).toBe(1);
    });

    it('Test 3', () => {
       
        const n = 91;

   
        const response = digitDegree(n);

 
        expect(response).toBe(1);
    });
});
