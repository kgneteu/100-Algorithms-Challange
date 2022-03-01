import {extraNumber} from '../src/extraNumber';

describe(extraNumber.name, () => {
    it('Test 1', () => {
        const response = extraNumber(2, 7, 2);
        expect(response).toBe(7);
    });
    it('Test 2', () => {
        const response = extraNumber(3, 2, 2);
        expect(response).toBe(3);
    });
    it('Test 3', () => {
        const response = extraNumber(5, 5, 1);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const response = extraNumber(0, 7, 0);
        expect(response).toBe(7);
    });
});
