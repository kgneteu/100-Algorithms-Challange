//You are given a two-digit integer n. Return the sum of its digits.
import { addTwoDigits } from '../addTwoDigits.js';

describe(addTwoDigits.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 29;

        // act
        const response = addTwoDigits(data);

        // assert
        expect(response).toBe(11);
    });
});
