import {almostIncreasingSequence} from '../src/almostIncreasingSequence';

describe(almostIncreasingSequence.name, () => {
    it('Test 1', () => {
        const data = [1, 3, 2, 1];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        const data = [2, 3, 1, 3, 4, 5, 6];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = [1, 3, 2];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const data = [1, 2, 5, 3, 5];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const data = [10, 1, 2, 3, 4, 5];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const data = [1, 2, 3, 4, 99, 5, 6];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const data = [123, -17, -5, 1, 2, 3, 12, 43, 45];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const data = [1, 2, 3, 4, 3, 6];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });
});
