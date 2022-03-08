import {magicalWell} from '../src/magicalWell';

describe(magicalWell.name, () => {
    it('Test 1', () => {
        const response = magicalWell(1, 2, 2);
        expect(response).toBe(8);
    });
    it('Test 2', () => {
        const response = magicalWell(1, 1, 1);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = magicalWell(6, 5, 3);
        expect(response).toBe(128);
    });
    it('Test 4', () => {
        const response = magicalWell(1601, 337, 0);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const response = magicalWell(1936, 1835, 5);
        expect(response).toBe(17800540);
    });
    it('Test 6', () => {
        const response = magicalWell(957, 57, 2);
        expect(response).toBe(110113);
    });
    it('Test 7', () => {
        const response = magicalWell(491, 1552, 4);
        expect(response).toBe(3060400);
    });
    it('Test 8', () => {
        const response = magicalWell(1275, 362, 2);
        expect(response).toBe(924738);
    });
});
