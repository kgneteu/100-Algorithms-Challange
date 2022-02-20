import {factorializeANumber} from '../src/factorializeANumber';

describe(factorializeANumber.name, () => {
    it('Test 1', () => {
        const data = 5;
        const response = factorializeANumber(data);
        expect(response).toBe(120);
    });

    it('Test 2', () => {
        const data = 10;
        const response = factorializeANumber(data);
        expect(response).toBe(3628800);
    });
});
