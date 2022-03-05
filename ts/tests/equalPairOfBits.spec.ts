import {equalPairOfBits} from '../src/equalPairOfBits';

describe(equalPairOfBits.name, () => {
    it('Test 1', () => {
        const response = equalPairOfBits(10, 11);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const response = equalPairOfBits(0, 0);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = equalPairOfBits(28, 27);
        expect(response).toBe(8);
    });
    it('Test 4', () => {
        const response = equalPairOfBits(895, 928);
        expect(response).toBe(32);
    });
    it('Test 5', () => {
        const response = equalPairOfBits(1073741824, 1006895103);
        expect(response).toBe(262144);
    });
});
