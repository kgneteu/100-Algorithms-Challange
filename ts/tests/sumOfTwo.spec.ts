import {sumOfTwo} from '../src/sumOfTwo';

describe(sumOfTwo.name, () => {
    it('Test 1', () => {
        const a = [1, 2, 3];
        const b = [10, 20, 30, 40];
        const v = 42;
        const response = sumOfTwo(a, b, v);
        expect(response).toBe(true);
    });
});
