import {candles} from '../src/candles';

describe(candles.name, () => {
    it('Test 1', () => {
        const response = candles(5, 2);
        expect(response).toBe(9);
    });
    it('Test 2', () => {
        const response = candles(1, 2);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = candles(3, 3);
        expect(response).toBe(4);
    });
    it('Test 4', () => {
        const response = candles(11, 3);
        expect(response).toBe(16);
    });
    it('Test 5', () => {
        const response = candles(15, 5);
        expect(response).toBe(18);
    });
    it('Test 6', () => {
        const response = candles(14, 3);
        expect(response).toBe(20);
    });
    it('Test 7', () => {
        const response = candles(12, 2);
        expect(response).toBe(23);
    });
    it('Test 8', () => {
        const response = candles(6, 4);
        expect(response).toBe(7);
    });
    it('Test 9', () => {
        const response = candles(13, 5);
        expect(response).toBe(16);
    });
    it('Test 10', () => {
        const response = candles(2, 3);
        expect(response).toBe(2);
    });
});
