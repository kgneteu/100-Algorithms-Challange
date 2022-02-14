import { arrayPreviousLess } from '../src/arrayPreviousLess';

describe(arrayPreviousLess.name, () => {
    it('Test 1', () => {
       
        const data = [3, 5, 2, 4, 5];

   
        const response = arrayPreviousLess(data);


        expect(response).toEqual([-1, 3, -1, 2, 4]);
    });
});
