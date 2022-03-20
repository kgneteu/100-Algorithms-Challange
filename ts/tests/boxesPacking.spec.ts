import {boxesPacking} from '../src/boxesPacking';

describe(boxesPacking.name, () => {
    it('Test 1', () => {
        const length = [1, 3, 2]
        const width = [1, 3, 2]
        const height = [1, 3, 2]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const length = [1, 1]
        const width = [1, 1]
        const height = [1, 1]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const length = [3, 1, 2]
        const width = [3, 1, 2]
        const height = [3, 2, 1]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const length = [2]
        const width = [3]
        const height = [4]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const length = [5, 7, 4, 1, 2]
        const width = [4, 10, 3, 1, 4]
        const height = [6, 5, 5, 1, 2]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const length = [6, 4]
        const width = [5, 3]
        const height = [4, 5]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const length = [6, 3]
        const width = [5, 4]
        const height = [4, 5]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const length = [6, 3]
        const width = [5, 5]
        const height = [4, 4]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const length = [883, 807]
        const width = [772, 887]
        const height = [950, 957]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
    it('Test 10', () => {
        const length = [6, 5]
        const width = [5, 3]
        const height = [4, 4]
        const response = boxesPacking(length, width, height);
        expect(response).toBe(true);
    });
});
