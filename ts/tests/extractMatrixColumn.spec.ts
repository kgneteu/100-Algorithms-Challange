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
});
