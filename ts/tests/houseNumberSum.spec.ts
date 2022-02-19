import { houseNumbersSum } from '../src/houseNumbersSum';

describe(houseNumbersSum.name, () => {
    it('Test 1', () => {
        const data = [5, 1, 2, 3, 0, 1, 5, 0, 2];
        const response = houseNumbersSum(data);
        expect(response).toBe(10);
    });
});
