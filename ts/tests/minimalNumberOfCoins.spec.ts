import {minimalNumberOfCoins} from '../src/minimalNumberOfCoins';

describe(minimalNumberOfCoins.name, () => {
    it('Test 1', () => {
        const coins = [1, 2, 10];
        const price = 28;
        const response = minimalNumberOfCoins(coins, price);
        expect(response).toBe(6);
    });
    it('Test 2', () => {
        const coins = [1, 2, 10];
        const price = 1;
        const response = minimalNumberOfCoins(coins, price);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const coins = [1, 2, 10];
        const price = 2;
        const response = minimalNumberOfCoins(coins, price);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const coins = [1, 2, 10];
        const price = 10;
        const response = minimalNumberOfCoins(coins, price);
        expect(response).toBe(1);
    });
    it('Test 5', () => {
        const coins = [1, 2, 10];
        const price = 11;
        const response = minimalNumberOfCoins(coins, price);
        expect(response).toBe(2);
    });
});
