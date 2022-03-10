import {firstDuplicate} from '../src/firstDuplicate';

describe(firstDuplicate.name, () => {
    it('Test 1', () => {
        const data = [2, 1, 3, 5, 3, 2];
        const response = firstDuplicate(data);
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        const data = [2, 4, 3, 5, 1];
        const response = firstDuplicate(data);
        expect(response).toBe(-1);
    });
    it('Test 3', () => {
        const data = [2, 2];
        const response = firstDuplicate(data);
        expect(response).toBe(2);
    });
    it('Test 4', () => {
        const data = [1];
        const response = firstDuplicate(data);
        expect(response).toBe(-1);
    });
    it('Test 5', () => {
        const data = [5, 5, 5, 5, 5];
        const response = firstDuplicate(data);
        expect(response).toBe(5);
    });
    it('Test 6', () => {
        const data = [2, 1];
        const response = firstDuplicate(data);
        expect(response).toBe(-1);
    });
    it('Test 7', () => {
        const data = [2, 1, 3];
        const response = firstDuplicate(data);
        expect(response).toBe(-1);
    });
    it('Test 8', () => {
        const data = [2, 3, 3];
        const response = firstDuplicate(data);
        expect(response).toBe(3);
    });
});
