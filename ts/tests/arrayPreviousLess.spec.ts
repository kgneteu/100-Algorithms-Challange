import {arrayPreviousLess} from '../src/arrayPreviousLess';

describe(arrayPreviousLess.name, () => {
    it('Test 1', () => {
        const data = [3, 5, 2, 4, 5];
        const response = arrayPreviousLess(data);
        expect(response).toEqual([-1, 3, -1, 2, 4]);
    });
    it('Test 2', () => {
        const data = [2, 2, 1, 3, 4, 5, 5, 3]
        const response = arrayPreviousLess(data);
        expect(response).toEqual([-1, -1, -1, 1, 3, 4, 4, 1]);
    });
    it('Test 3', () => {
        const data = [3, 2, 1]
        const response = arrayPreviousLess(data);
        expect(response).toEqual([-1, -1, -1]);
    });
    it('Test 4', () => {
        const data = [100, 101, 102]
        const response = arrayPreviousLess(data);
        expect(response).toEqual([-1, 100, 101]);
    });
    it('Test 5', () => {
        const data = [7, 7, 8, 3, 4, 4, 2, 5, 6, 7, 7];
        const response = arrayPreviousLess(data);
        expect(response).toEqual([-1, -1, 7, -1, 3, 3, -1, 2, 5, 6, 6]);
    });
    it('Test 6', () => {
        const data = [68, 135, 101, 170, 125];
        const response = arrayPreviousLess(data);
        expect(response).toEqual([-1, 68, 68, 101, 101]);
    });
});
