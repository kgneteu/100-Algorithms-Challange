import {crossingSum} from '../src/crossingSum';

describe(crossingSum.name, () => {
    it('Test 1', () => {
        const matrix = [
            [1, 1, 1, 1],
            [2, 2, 2, 2],
            [3, 3, 3, 3]];
        const a = 1;
        const b = 3;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(12);
    });
    it('Test 2', () => {
        const matrix = [
            [1, 1],
            [1, 1]];
        const a = 0;
        const b = 0;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(3);
    });
    it('Test 3', () => {
        const matrix = [
            [1, 1],
            [3, 3],
            [1, 1],
            [2, 2]];
        const a = 3;
        const b = 0;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(9);
    });
    it('Test 4', () => {
        const matrix = [
            [100]];
        const a = 0;
        const b = 0;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(100);
    });
    it('Test 5', () => {
        const matrix = [
            [1, 2],
            [3, 4]];
        const a = 1;
        const b = 1;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(9);
    });
    it('Test 6', () => {
        const matrix = [[1, 2, 3, 4]];
        const a = 0;
        const b = 3;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(10);
    });
    it('Test 7', () => {
        const matrix = [
            [1, 2, 3, 4, 5],
            [1, 2, 2, 2, 2],
            [1, 2, 2, 2, 2],
            [1, 2, 2, 2, 2],
            [1, 2, 2, 2, 2],
            [1, 2, 2, 2, 2],
            [1, 2, 2, 2, 2]];
        const a = 1;
        const b = 1;
        const response = crossingSum(matrix, a, b);
        expect(response).toBe(21);
    });

});
