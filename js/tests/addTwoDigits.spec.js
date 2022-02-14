//You are given a two-digit integer n. Return the sum of its digits.
import { addTwoDigits } from '../src/addTwoDigits.js';

describe(addTwoDigits.name, () => {
    it('Test 1', () => {
        const data = 29;
        const response = addTwoDigits(data);
        expect(response).toBe(11);
    });
});
