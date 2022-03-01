import {arithmeticExpression} from '../src/arithmeticExpression';

describe(arithmeticExpression.name, () => {
    it('Test 1', () => {
        const response = arithmeticExpression(2, 3, 5);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = arithmeticExpression(8, 2, 4);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const response = arithmeticExpression(8, 3, 2);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = arithmeticExpression(6, 3, 3);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = arithmeticExpression(18, 2, 9);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const response = arithmeticExpression(2, 3, 6);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = arithmeticExpression(0, 0, 2);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = arithmeticExpression(5, 2, 0);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const response = arithmeticExpression(10, 2, 2);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const response = arithmeticExpression(5, 2, 2);
        expect(response).toBe(false);
    });
    it('Test 11', () => {
        const response = arithmeticExpression(1, 2, 1);
        expect(response).toBe(false);
    });
    it('Test 12', () => {
        const response = arithmeticExpression(1, 2, 2);
        expect(response).toBe(true);
    });
});
