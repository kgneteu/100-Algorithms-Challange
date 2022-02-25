import {minesweeper} from '../src/minesweeper';

describe(minesweeper.name, () => {
    it('Test 1', () => {
        const matrix = [
            [true, false, false],
            [false, true, false],
            [false, false, false]];
        const response = minesweeper(matrix);
        expect(response).toEqual([
            [1, 2, 1],
            [2, 1, 1],
            [1, 1, 1]]);
    });
    it('Test 2', () => {
        const matrix = [
            [false,false,false],
            [false,false,false]
        ];
        const response = minesweeper(matrix);
        expect(response).toEqual([
            [0,0,0],
            [0,0,0]
        ]);
    });
    it('Test 3', () => {
        const matrix = [
            [true,false,false,true],
            [false,false,true,false],
            [true,true,false,true]
        ];
        const response = minesweeper(matrix);
        expect(response).toEqual([
            [0,2,2,1],
            [3,4,3,3],
            [1,2,3,1]
        ]);
    });
    it('Test 4', () => {
        const matrix = [
            [true,true,true],
            [true,true,true],
            [true,true,true]
        ];
        const response = minesweeper(matrix);
        expect(response).toEqual([
            [3,5,3],
            [5,8,5],
            [3,5,3]
        ]);
    });

});
