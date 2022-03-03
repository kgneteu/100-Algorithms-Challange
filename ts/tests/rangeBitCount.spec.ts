import {rangeBitCount} from '../src/rangeBitCount';

describe(rangeBitCount.name, () => {
    it('Test 1', () => {
        const response = rangeBitCount(2, 7);
        expect(response).toBe(11);
    });
    it('Test 2', () => {
        const response = rangeBitCount(0, 1);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = rangeBitCount(1, 10);
        expect(response).toBe(17);
    });
    it('Test 4', () => {
        const response = rangeBitCount(8, 9);
        expect(response).toBe(3);
    });
    it('Test 5', () => {
        const response = rangeBitCount(9, 10);
        expect(response).toBe(4);
    });
    it('Test 6', () => {
        const response = rangeBitCount(0, 0);
        expect(response).toBe(0);
    });
});
