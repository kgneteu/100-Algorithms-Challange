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
    it('Test 3', () => {
        const data = 1;
        const response = squareDigitsSequence(data);
        expect(response).toBe(2);
    });
    it('Test 4', () => {
        const data = 13;
        const response = squareDigitsSequence(data);
        expect(response).toBe(4);
    });
    it('Test 5', () => {
        const data = 89;
        const response = squareDigitsSequence(data);
        expect(response).toBe(9);
    });
    it('Test 6', () => {
        const data = 612;
        const response = squareDigitsSequence(data);
        expect(response).toBe(16);
    });
});
