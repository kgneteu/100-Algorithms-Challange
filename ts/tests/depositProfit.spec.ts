import {depositProfit} from '../src/depositProfit';

describe(depositProfit.name, () => {
    it('Test 1', () => {
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        const response = depositProfit(deposit, rate, threshold);
        expect(response).toBe(3);
    });

    it('Test 2', () => {
        const deposit = 100;
        const rate = 1;
        const threshold = 101;
        const response = depositProfit(deposit, rate, threshold);
        expect(response).toBe(1);
    });

    it('Test 3', () => {
        const deposit = 1;
        const rate = 100;
        const threshold = 64;
        const response = depositProfit(deposit, rate, threshold);
        expect(response).toBe(6);
    });
});
