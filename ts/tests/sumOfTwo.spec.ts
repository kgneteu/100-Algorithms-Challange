import {sumOfTwo} from '../src/sumOfTwo';

describe(sumOfTwo.name, () => {
    it('Test 1', () => {
        const a = [1, 2, 3];
        const b = [10, 20, 30, 40];
        const v = 42;
        const response = sumOfTwo(a, b, v);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const a = [1, 2, 3]
        const b = [10, 20, 30, 40]
        const v = 50;
        const response = sumOfTwo(a, b, v);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const a: number[] = []
        const b = [1, 2, 3, 4]
        const v = 4;
        const response = sumOfTwo(a, b, v);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const a =[10, 1, 5, 3, 8]
        const b = [100, 6, 3, 1, 5]
        const v = 4;
        const response = sumOfTwo(a, b, v);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const a = [1, 4, 3, 6, 10, 1, 0, 1, 6, 5]
        const b = [9, 5, 6, 9, 0, 1, 2, 1, 6, 10]
        const v = 8;
        const response = sumOfTwo(a, b, v);
        expect(response).toBe(true);
    });
});
