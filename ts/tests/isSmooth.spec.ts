import {isSmooth} from '../src/isSmooth';

describe(isSmooth.name, () => {
    it('Test 1', () => {
        const data = [7, 2, 2, 5, 10, 7];
        const response = isSmooth(data);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = [-5, -5, 10];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = [4, 2];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = [45, 23, 12, 33, 12, 453, -234, -45];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const data = [-12, 34, 40, -5, -12, 4, 0, 0, -12];
        const response = isSmooth(data);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const data = [9, 0, 15, 9];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = [6, 6, -6];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const data = [26, 26, -17];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const data = [-7, 5, 5, 10];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const data = [3, 4, 5];
        const response = isSmooth(data);
        expect(response).toBe(false);
    });
});
