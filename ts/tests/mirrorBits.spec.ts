import {mirrorBits} from '../src/mirrorBits';

describe(mirrorBits.name, () => {
    it('Test 1', () => {
        const response = mirrorBits(97);
        expect(response).toBe(67);
    });
    it('Test 2', () => {
        const response = mirrorBits(5);
        expect(response).toBe(5);
    });
    it('Test 3', () => {
        const response = mirrorBits(123);
        expect(response).toBe(111);
    });
    it('Test 4', () => {
        const response = mirrorBits(86782);
        expect(response).toBe(65173);
    });
    it('Test 5', () => {
        const response = mirrorBits(8);
        expect(response).toBe(1);
    });
});
