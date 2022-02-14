import { minesweeper } from '../src/minesweeper';

describe(minesweeper.name, () => {
    it('Test 1', () => {
       
        const matrix = [[true, false, false],
        [false, true, false],
        [false, false, false]];

   
        const response = minesweeper(matrix);

 
        expect(response).toEqual([[1, 2, 1],
        [2, 1, 1],
        [1, 1, 1]]);
    });
});
