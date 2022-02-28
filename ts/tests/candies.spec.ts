import {candies} from '../src/candies';

describe(candies.name, () => {
    it('Test 1', () => {
        const n = 3;
        const m = 10;
        const response = candies(n, m);
        expect(response).toBe(9);
    });
    it('Test 2', () => {
        const n = 1;
        const m = 2;
        const response = candies(n, m);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const n = 10;
        const m = 9;
        const response = candies(n, m);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const n = 4;
        const m = 15;
        const response = candies(n, m);
        expect(response).toBe(12);
    });
    it('Test 5', () => {
        const n = 9;
        const m = 100;
        const response = candies(n, m);
        expect(response).toBe(99);
    });
});
