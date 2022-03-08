import {increaseNumberRoundness} from '../src/increaseNumberRoundness';

describe(increaseNumberRoundness.name, () => {
    it('Test 1', () => {
        const response = increaseNumberRoundness(902200100);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = increaseNumberRoundness(11000);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = increaseNumberRoundness(99080);
        expect(response).toBe(true);
    });
    it('Test 4', () => {
        const response = increaseNumberRoundness(1022220);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = increaseNumberRoundness(106611);
        expect(response).toBe(true);
    });

    it('Test 6', () => {
        const response = increaseNumberRoundness(234230);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const response = increaseNumberRoundness(888);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = increaseNumberRoundness(100);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const response = increaseNumberRoundness(1000000000);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const response = increaseNumberRoundness(103456789);
        expect(response).toBe(true);
    });
});
