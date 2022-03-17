import {cyclicString} from '../src/cyclicString';

describe(cyclicString.name, () => {
    it('Test 1', () => {
        const data = "cabca";
        const response = cyclicString(data);
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        const data = "aba";
        const response = cyclicString(data);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const data = "ccccccccccc";
        const response = cyclicString(data);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const data = "bcaba";
        const response = cyclicString(data);
        expect(response).toBe(5);
    });
    it('Test 5', () => {
        const data = "abacabaabacab";
        const response = cyclicString(data);
        expect(response).toBe(7);
    });
    it('Test 6', () => {
        const data = "aab";
        const response = cyclicString(data);
        expect(response).toBe(3);
    });
    it('Test 7', () => {
        const data = "abaaba";
        const response = cyclicString(data);
        expect(response).toBe(3);
    });
    it('Test 8', () => {
        const data = "zazazaza";
        const response = cyclicString(data);
        expect(response).toBe(2);
    });
    it('Test 9', () => {
        const data = "abbaab";
        const response = cyclicString(data);
        expect(response).toBe(4);
    });
});
