import {concatenateArrays} from '../src/concatenateArrays';

describe(concatenateArrays.name, () => {
    it('Test 1', () => {
        const response = concatenateArrays([2, 2, 1], [10, 11]);
        expect(response).toEqual([2, 2, 1, 10, 11]);
    });
    it('Test 2', () => {
        const response = concatenateArrays([1, 2], [3, 1, 2]);
        expect(response).toEqual([1, 2, 3, 1, 2]);
    });
    it('Test 3', () => {
        const response = concatenateArrays([1], []);
        expect(response).toEqual([1]);
    });
    it('Test 4', () => {
        const response = concatenateArrays([2, 10, 3, 9, 5, 11, 11], [4, 8, 1, 13, 3, 1, 14]);
        expect(response).toEqual([2, 10, 3, 9, 5, 11, 11, 4, 8, 1, 13, 3, 1, 14]);
    });
    it('Test 5', () => {
        const response = concatenateArrays([9, 6, 6, 9, 8, 14], [3, 2, 2, 5, 3, 11, 12, 9, 7, 7]);
        expect(response).toEqual([9, 6, 6, 9, 8, 14, 3, 2, 2, 5, 3, 11, 12, 9, 7, 7]);
    });
});
