import { extractEachKth } from '../src/extractEachKth';

describe(extractEachKth.name, () => {
    it('Test 1', () => {
       
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const k = 3;

   
        const response = extractEachKth(inputArray, k);

 
        expect(response).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
});
