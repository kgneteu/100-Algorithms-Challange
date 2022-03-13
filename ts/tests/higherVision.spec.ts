import {higherVision} from '../src/higherVision';

describe(higherVision.name, () => {
    it('Test 1', () => {
        const response = higherVision("1.2.2", "1.2.0");
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = higherVision("1.0.5", "1.1.0");
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = higherVision("1.1.0", "1.1.5");
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = higherVision("10", "9");
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = higherVision("1.0.10", "1.1.5");
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = higherVision("5", "1");
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = higherVision("1.2.2", "1.2.10");
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = higherVision("0", "0");
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = higherVision("4.3.22.1", "4.3.22.1");
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const response = higherVision("4.3.22.2", "4.3.22.1");
        expect(response).toBe(true);
    });
});
