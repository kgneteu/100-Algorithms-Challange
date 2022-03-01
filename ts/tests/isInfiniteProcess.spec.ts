import {isInfiniteProcess} from '../src/isInfiniteProcess';

describe(isInfiniteProcess.name, () => {
    it('Test 1', () => {
        const response = isInfiniteProcess(2, 6);
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        const response = isInfiniteProcess(4, 3);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const response = isInfiniteProcess(2, 10);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = isInfiniteProcess(0, 1);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = isInfiniteProcess(3, 2);
        expect(response).toBe(true);
    });
});
