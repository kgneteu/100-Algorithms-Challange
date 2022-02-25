import {isDigit} from "../src/isDigit";

describe(isDigit.name, () => {
    it('Test 1', () => {
        const data = "0";
        const response = isDigit(data);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = "-";
        const response = isDigit(data);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = "O";
        const response = isDigit(data);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = "+";
        const response = isDigit(data);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const data = "22";
        const response = isDigit(data);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const data = "!";
        const response = isDigit(data);
        expect(response).toBe(false);
    });
});
