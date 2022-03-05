import {leastFactorial} from '../src/leastFactorial';

describe(leastFactorial.name, () => {
    it('Test 1', () => {
        const response = leastFactorial(17);
        expect(response).toBe(24);
    });
    it('Test 2', () => {
        const response = leastFactorial(1);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = leastFactorial(5);
        expect(response).toBe(6);
    });
    it('Test 4', () => {
        const response = leastFactorial(25);
        expect(response).toBe(120);
    });
    it('Test 5', () => {
        const response = leastFactorial(18);
        expect(response).toBe(24);
    });
    it('Test 6', () => {
        const response = leastFactorial(109);
        expect(response).toBe(120);
    });
    it('Test 7', () => {
        const response = leastFactorial(11);
        expect(response).toBe(24);
    });
    it('Test 7', () => {
        const response = leastFactorial(55);
        expect(response).toBe(120);
    });
    it('Test 8', () => {
        const response = leastFactorial(24);
        expect(response).toBe(24);
    });
});
