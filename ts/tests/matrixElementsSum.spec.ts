import {matrixElementsSum} from '../src/matrixElementsSum';

describe(matrixElementsSum.name, () => {
    it('Test 1', () => {
        const matrix = [
            [0, 1, 1, 2],
            [0, 5, 0, 0],
            [2, 0, 3, 3]
        ];
        const response = matrixElementsSum(matrix);
        expect(response).toBe(9);
    });
});
