import {sumAllPrimes} from '../src/sumAllPrimes';

describe(sumAllPrimes.name, () => {
    it('Test 1', () => {
        const data = 10;
        const response = sumAllPrimes(data);
        expect(response).toBe(17);
    });

    it('Test 2', () => {
        const data = 977;
        const response = sumAllPrimes(data);
        expect(response).toBe(73156);
    });
});
