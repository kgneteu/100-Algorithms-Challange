import {secondRightmostZeroBit} from '../src/secondRightmostZeroBit';

describe(secondRightmostZeroBit.name, () => {
    it('Test 1', () => {
        const response = secondRightmostZeroBit(37);
        expect(response).toBe(8);
    });
    it('Test 2', () => {
        const response = secondRightmostZeroBit(1073741824);
        expect(response).toBe(2);
    });
    it('Test 3', () => {
        const response = secondRightmostZeroBit(83748);
        expect(response).toBe(2);
    });
    it('Test 4', () => {
        const response = secondRightmostZeroBit(4);
        expect(response).toBe(2);
    });
    it('Test 5', () => {
        const response = secondRightmostZeroBit(728782938);
        expect(response).toBe(4);
    });
    it('Test 6', () => {
        const response = secondRightmostZeroBit(8);
        expect(response).toBe(2);
    });
});
