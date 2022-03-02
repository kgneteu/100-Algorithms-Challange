import {killKthBit} from '../src/killKthBit';

describe(killKthBit.name, () => {
    it('Test 1', () => {
        const response = killKthBit(37, 3);
        expect(response).toBe(33);
    });
    it('Test 2', () => {
        const response = killKthBit(37, 4);
        expect(response).toBe(37);
    });
    it('Test 3', () => {
        const response = killKthBit(37, 2);
        expect(response).toBe(37);
    });
    it('Test 4', () => {
        const response = killKthBit(0, 4);
        expect(response).toBe(0);
    });
    it('Test 5', () => {
        const response = killKthBit(2147483647, 16);
        expect(response).toBe(2147450879);
    });
    it('Test 6', () => {
        const response = killKthBit(374823748, 13);
        expect(response).toBe(374819652);
    });
    it('Test 7', () => {
        const response = killKthBit(1084197039, 15);
        expect(response).toBe(1084197039);
    });
    it('Test 8', () => {
        const response = killKthBit(2039063284, 4);
        expect(response).toBe(2039063284);
    });
});
