import {minimalNumberOfCoins} from '../src/minimalNumberOfCoins';

describe(minimalNumberOfCoins.name, () => {
    it('Test 1', () => {
        const coins = [1, 2, 10];
        const price = 28;
        const response = minimalNumberOfCoins(coins, price);
        expect(response).toBe(6);
    });
});
