import {squareDigitsSequence} from '../src/squareDigitsSequence';

describe(squareDigitsSequence.name, () => {
    it('Test 1', () => {
        const data = 16;
        const response = squareDigitsSequence(data);
        expect(response).toBe(9);
    });

    it('Test 2', () => {
        const data = 103;
        const response = squareDigitsSequence(data);
        expect(response).toBe(4);
    });
});
