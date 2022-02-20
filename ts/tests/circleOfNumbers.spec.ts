import {circleOfNumbers} from '../src/circleOfNumbers';

describe(circleOfNumbers.name, () => {
    it('Test 1', () => {
        const n = 10;
        const firstNumber = 0;
        const response = circleOfNumbers(n, firstNumber);
        expect(response).toBe(5);
    });
    it('Test 2', () => {
        const n = 10;
        const firstNumber = 9;
        const response = circleOfNumbers(n, firstNumber);
        expect(response).toBe(4);
    });
    it('Test 3', () => {
        const n = 10;
        const firstNumber = 5;
        const response = circleOfNumbers(n, firstNumber);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const n = 10;
        const firstNumber = 4;
        const response = circleOfNumbers(n, firstNumber);
        expect(response).toBe(9);
    });
    it('Test 5', () => {
        const n = 10;
        const firstNumber = 6;
        const response = circleOfNumbers(n, firstNumber);
        expect(response).toBe(1);
    });
});
