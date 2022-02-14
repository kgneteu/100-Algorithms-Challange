import { seekAndDestroy } from '../src/seekAndDestroy';

describe(seekAndDestroy.name, () => {
    it('Test 1', () => {
       
        const data1 = [3, 5, 1, 2, 2];
        const data2 = [2, 3, 5];

   
        const response = seekAndDestroy(data1, data2);

 
        expect(response).toEqual([1]);
    });

    it('Test 2', () => {
       
        const data1 = [1, 2, 3, 5, 1, 2, 3];
        const data2 = [2, 3];

   
        const response = seekAndDestroy(data1, data2);

 
        expect(response).toEqual([1, 5, 1]);
    });
});
