import {candies} from '../src/candies';

describe(candies.name, () => {
    it('Test 1', () => {
        const n = 3;
        const m = 9;
        const response = candies(n, m);
        expect(response).toBe(9);
    });
});
