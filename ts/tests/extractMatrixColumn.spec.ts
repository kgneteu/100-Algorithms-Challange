import {extractMatrixColumn} from '../src/extractMatrixColumn';

describe(extractMatrixColumn.name, () => {
    it('Test 1', () => {
        const matrix = [
            [1, 1, 1, 2],
            [0, 5, 0, 4],
            [2, 1, 3, 6]
        ];
        const column = 2;
        const response = extractMatrixColumn(matrix, column);
        expect(response).toEqual([1, 0, 3]);
    });
    it('Test 2', () => {
        const matrix = [
            [1, 1, 1],
            [0, 5, 0],
            [2, 1, 3]
        ];
        const column = 2;
        const response = extractMatrixColumn(matrix, column);
        expect(response).toEqual([1, 0, 3]);
    });
    it('Test 3', () => {
        const matrix = [
            [1,1],
            [5,0],
            [2,3]
        ];
        const column = 0;
        const response = extractMatrixColumn(matrix, column);
        expect(response).toEqual([1, 5, 2]);
    });
    it('Test 4', () => {
        const matrix = [
            [1,1,1],
            [0,5,0],
            [2,1,3],
            [10,100,300]
        ];
        const column = 1;
        const response = extractMatrixColumn(matrix, column);
        expect(response).toEqual([1, 5, 1, 100]);
    });
    it('Test 5', () => {
        const matrix = [
            [0,1,1,5],
            [5,0,0,0],
            [2,1,0,10]
        ];
        const column = 3;
        const response = extractMatrixColumn(matrix, column);
        expect(response).toEqual([5, 0, 10]);
    });
    it('Test 6', () => {
        const matrix = [
            [0]
        ];
        const column = 0;
        const response = extractMatrixColumn(matrix, column);
        expect(response).toEqual([0]);
    });
});
