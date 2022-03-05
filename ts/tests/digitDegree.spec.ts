import {digitDegree} from '../src/digitDegree';

describe(digitDegree.name, () => {
    it('Test 1', () => {
        const n = 5;
        const response = digitDegree(n);
        expect(response).toBe(0);
    });
    it('Test 2', () => {
        const n = 100;
        const response = digitDegree(n);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const n = 91;
        const response = digitDegree(n);
        expect(response).toBe(2);
    });
    it('Test 4', () => {
        const n = 99;
        const response = digitDegree(n);
        expect(response).toBe(2);
    });
    it('Test 5', () => {
        const n = 1000000000;
        const response = digitDegree(n);
        expect(response).toBe(1);
    });
    it('Test 6', () => {
        const n = 9;
        const response = digitDegree(n);
        expect(response).toBe(0);
    });
    it('Test 7', () => {
        const n = 73;
        const response = digitDegree(n);
        expect(response).toBe(2);
    });
    it('Test 8', () => {
        const n = 877;
        const response = digitDegree(n);
        expect(response).toBe(2);
    });
    it('Test 9', () => {
        const n = 777773;
        const response = digitDegree(n);
        expect(response).toBe(3);
    });
    it('Test 10', () => {
        const n = 304;
        const response = digitDegree(n);
        expect(response).toBe(1);
    });
});
