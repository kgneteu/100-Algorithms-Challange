import {arrayMaxConsecutiveSum} from '../src/arrayMaxConsecutiveSum';

describe(arrayMaxConsecutiveSum.name, () => {
    it('Test 1', () => {
        const data = [2, 3, 5, 1, 6];
        const count = 2;
        const response = arrayMaxConsecutiveSum(data, count);
        expect(response).toBe(8);
    });
});
