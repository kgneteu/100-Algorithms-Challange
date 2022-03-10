import {weakNumbers} from '../src/weakNumbers';

describe(weakNumbers.name, () => {
    it('Test 1', () => {
        const response = weakNumbers(9);
        expect(response).toEqual([2, 2]);
    });
    it('Test 2', () => {
        const response = weakNumbers(1);
        expect(response).toEqual([0, 1]);
    });
    it('Test 3', () => {
        const response = weakNumbers(2);
        expect(response).toEqual([0, 2]);
    });
    it('Test 4', () => {
        const response = weakNumbers(7);
        expect(response).toEqual([2, 1]);
    });
    it('Test 5', () => {
        const response = weakNumbers(500);
        expect(response).toEqual([403, 1]);
    });
    it('Test 6', () => {
        const response = weakNumbers(4);
        expect(response).toEqual([0, 4]);
    });
});
