import {maxMultiple} from '../src/maxMultiple';

describe(maxMultiple.name, () => {
    it('Test 1', () => {
        const divisor = 3;
        const bound = 10;
        const response = maxMultiple(divisor, bound);
        expect(response).toBe(9);
    });
    it('Test 2', () => {
        const divisor = 6;
        const bound = 37;
        const response = maxMultiple(divisor, bound);
        expect(response).toBe(36);
    });
});
