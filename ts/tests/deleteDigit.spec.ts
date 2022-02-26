import {deleteDigit} from "../src/deleteDigit";

describe(deleteDigit.name, () => {
    it('Test 1', () => {
        const n = 152;
        const response = deleteDigit(n);
        expect(response).toBe(52);
    });
    it('Test 2', () => {
        const n = 1001;
        const response = deleteDigit(n);
        expect(response).toBe(101);
    });
    it('Test 3', () => {
        const n = 1;
        const response = deleteDigit(n);
        expect(response).toBeNaN();
    });
    it('Test 4', () => {
        const n = 10;
        const response = deleteDigit(n);
        expect(response).toBe(1);
    });
    it('Test 5', () => {
        const n = 19;
        const response = deleteDigit(n);
        expect(response).toBe(9);
    });
    it('Test 6', () => {
        const n = 222250;
        const response = deleteDigit(n);
        expect(response).toBe(22250);
    });
});
