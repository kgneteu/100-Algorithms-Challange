import {pagesNumberingWithInk} from '../src/pagesNumberingWithInk';

describe(pagesNumberingWithInk.name, () => {
    it('Test 1', () => {
        const current = 21;
        const numberOfDigits = 5;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(22);
    });
    it('Test 2', () => {
        const current = 8;
        const numberOfDigits = 4;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(10);
    });
    it('Test 3', () => {
        const current = 1;
        const numberOfDigits = 5;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(5);
    });
    it('Test 4', () => {
        const current = 8;
        const numberOfDigits = 40000;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(10222);
    });
    it('Test 5', () => {
        const current = 10;
        const numberOfDigits = 3;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(10);
    });
    it('Test 6', () => {
        const current = 76;
        const numberOfDigits = 250;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(166);
    });
    it('Test 7', () => {
        const current = 80;
        const numberOfDigits = 1000;
        const response = pagesNumberingWithInk(current, numberOfDigits);
        expect(response).toBe(419);
    });
});
