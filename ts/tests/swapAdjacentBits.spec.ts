import {swapAdjacentBits} from '../src/swapAdjacentBits';

describe(swapAdjacentBits.name, () => {
    it('Test 1', () => {
        const response = swapAdjacentBits(13);
        expect(response).toBe(14);
    });
    it('Test 2', () => {
        const response = swapAdjacentBits(74);
        expect(response).toBe(133);
    });
    it('Test 3', () => {
        const response = swapAdjacentBits(1073741823);
        expect(response).toBe(1073741823);
    });
    it('Test 4', () => {
        const response = swapAdjacentBits(0);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const response = swapAdjacentBits(1);
        expect(response).toBe(2);
    });
    it('Test 6', () => {
        const response = swapAdjacentBits(83748);
        expect(response).toBe(166680);
    });
});
