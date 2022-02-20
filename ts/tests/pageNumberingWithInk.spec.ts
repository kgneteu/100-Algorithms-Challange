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
});
