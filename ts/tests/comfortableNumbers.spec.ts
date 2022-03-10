import {comfortableNumbers} from '../src/comfortableNumbers';

describe(comfortableNumbers.name, () => {
    it('Test 1', () => {
        const response = comfortableNumbers(10, 12);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const response = comfortableNumbers(1, 9);
        expect(response).toBe(20);
    });
    it('Test 3', () => {
        const response = comfortableNumbers(13, 13);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const response = comfortableNumbers(12, 108);
        expect(response).toBe(707);
    });
    it('Test 5', () => {
        const response = comfortableNumbers(239, 777);
        expect(response).toBe(6166);
    });
    it('Test 6', () => {
        const response = comfortableNumbers(1, 1000);
        expect(response).toBe(11435);
    });
});
