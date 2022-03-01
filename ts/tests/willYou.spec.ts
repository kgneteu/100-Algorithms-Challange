import {willYou} from '../src/willYou';

describe(willYou.name, () => {
    it('Test 1', () => {
        const response = willYou(true, true, true);
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        const response = willYou(true, false, true);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const response = willYou(false, false, false);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = willYou(false, false, true);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = willYou(false, true, false);
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = willYou(false, true, true);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = willYou(true, false, false);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = willYou(true, true, false);
        expect(response).toBe(true);
    });
});
