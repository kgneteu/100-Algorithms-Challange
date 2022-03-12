import {mostFrequentDigitSum} from '../src/mostFrequentDigitSum';

describe(mostFrequentDigitSum.name, () => {
    it('Test 1', () => {
        const data = 88;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(9);
    });
    it('Test 2', () => {
        const data = 8;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(8);
    });
    it('Test 3', () => {
        const data = 1;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const data = 17;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(9);
    });
    it('Test 5', () => {
        const data = 239;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(9);
    });
    it('Test 6', () => {
        const data = 994;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(9);
    });
    it('Test 7', () => {
        const data = 99999;
        const response = mostFrequentDigitSum(data);
        expect(response).toBe(18);
    });
});
