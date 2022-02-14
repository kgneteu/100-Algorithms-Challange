import { crossingSum } from '../src/crossingSum';

describe(crossingSum.name, () => {
    it('Test 1', () => {
       
        const matrix = [[1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3]];
        const a = 1;
        const b = 3;

   
        const response = crossingSum(matrix, a, b);

 
        expect(response).toBe(true);
    });
});
