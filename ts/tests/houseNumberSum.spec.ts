import {houseNumbersSum} from '../src/houseNumbersSum';

describe(houseNumbersSum.name, () => {
    it('Test 1', () => {
        const data = [5, 1, 2, 3, 0, 1, 5, 0, 2];
        const response = houseNumbersSum(data);
        expect(response).toBe(11);
    });
    it('Test 2', () => {
        const data = [4, 2, 1, 6, 0];
        const response = houseNumbersSum(data);
        expect(response).toBe(13);
    });
    it('Test 3', () => {
        const data = [4, 1, 2, 3, 0, 10, 2];
        const response = houseNumbersSum(data);
        expect(response).toBe(10);
    });
    it('Test 4', () => {
        const data = [0, 1, 2, 3, 0];
        const response = houseNumbersSum(data);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const data = [5, 1, 1, 3, 0, 1, 5, 0, 2];
        const response = houseNumbersSum(data);
        expect(response).toBe(10);
    });
    it('Test 6', () => {
        const data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 0];
        const response = houseNumbersSum(data);
        expect(response).toBe(90);
    });
    it('Test 7', () => {
        const data = [10, 10, 10, 10, 10, 10, 10, 10, 0, 10];
        const response = houseNumbersSum(data);
        expect(response).toBe(80);
    });
});
