import {sumUpNumbers} from "../src/sumUpNumbers";

describe(sumUpNumbers.name, () => {
    it('Test 1', () => {
        const data = "2 apples, 12 oranges";
        const response = sumUpNumbers(data);
        expect(response).toBe(14);
    });
    it('Test 2', () => {
        const data = "123450";
        const response = sumUpNumbers(data);
        expect(response).toBe(123450);
    });
    it('Test 3', () => {
        const data = "Your payment method is invalid";
        const response = sumUpNumbers(data);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const data = "there are some (12) digits 5566 in this 770 string 239";
        const response = sumUpNumbers(data);
        expect(response).toBe(6587);
    });
    it('Test 6', () => {
        const data = "42+781";
        const response = sumUpNumbers(data);
        expect(response).toBe(823);
    });
    it('Test 7', () => {
        const data = "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -";
        const response = sumUpNumbers(data);
        expect(response).toBe(98);
    });
});
