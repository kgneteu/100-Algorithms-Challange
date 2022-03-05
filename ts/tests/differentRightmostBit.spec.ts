import {differentRightmostBit} from '../src/differentRightmostBit';

describe(differentRightmostBit.name, () => {
    it('Test 1', () => {
        const response = differentRightmostBit(11, 13);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const response = differentRightmostBit(7, 23);
        expect(response).toBe(16);
    });
    it('Test 3', () => {
        const response = differentRightmostBit(1, 0);
        expect(response).toBe(1);
    });
    it('Test 4', () => {
        const response = differentRightmostBit(64, 65);
        expect(response).toBe(1);
    });
    it('Test 5', () => {
        const response = differentRightmostBit(1073741823, 1071513599);
        expect(response).toBe(131072);
    });
    it('Test 6', () => {
        const response = differentRightmostBit(42, 22);
        expect(response).toBe(4);
    });
});
