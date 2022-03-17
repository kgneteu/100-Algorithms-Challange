import {numberOfClans} from '../src/numberOfClans';

describe(numberOfClans.name, () => {
    it('Test 1', () => {
        const response = numberOfClans([2, 3], 6);
        expect(response).toBe(4);
    });
    it('Test 2', () => {
        const response = numberOfClans([2, 3, 4], 6);
        expect(response).toBe(5);
    });
    it('Test 3', () => {
        const response = numberOfClans([1, 3], 10);
        expect(response).toBe(2);
    });
    it('Test 4', () => {
        const response = numberOfClans([6, 2, 2, 8, 9, 2, 2, 2, 2], 10);
        expect(response).toBe(5);
    });
    it('Test 5', () => {
        const response = numberOfClans([2, 5], 9);
        expect(response).toBe(3);
    });
    it('Test 6', () => {
        const response = numberOfClans([1, 2, 3], 8);
        expect(response).toBe(4);
    });
    it('Test 7', () => {
        const response = numberOfClans([5, 6], 5);
        expect(response).toBe(2);
    });
    it('Test 8', () => {
        const response = numberOfClans([7, 1, 3, 4, 4], 5);
        expect(response).toBe(3);
    });
});
