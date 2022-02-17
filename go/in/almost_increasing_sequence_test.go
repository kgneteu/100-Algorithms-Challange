import {almostIncreasingSequence} from '../src/almostIncreasingSequence';

describe(almostIncreasingSequence.name, () => {
    it('Test 1', () => {
        const data = [1, 3, 2, 1];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(false);
    });

    it('Test 2', () => {
        const data = [1, 3, 2];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(true);
    });

    it('Test 3', () => {
        const data = [2, 3, 1, 3, 4, 5, 6];
        const response = almostIncreasingSequence(data);
        expect(response).toBe(false);
    });
});
