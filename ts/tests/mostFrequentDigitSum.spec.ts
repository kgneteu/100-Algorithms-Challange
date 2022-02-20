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
});
