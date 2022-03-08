import {countBlackCells} from '../src/countBlackCells';

describe(countBlackCells.name, () => {
    it('Test 1', () => {
        const response = countBlackCells(3, 4);
        expect(response).toBe(6);
    });
    it('Test 2', () => {
        const response = countBlackCells(3, 3);
        expect(response).toBe(7);
    });
    it('Test 3', () => {
        const response = countBlackCells(2, 5);
        expect(response).toBe(6);
    });
    it('Test 4', () => {
        const response = countBlackCells(1, 1);
        expect(response).toBe(1);
    });
    it('Test 5', () => {
        const response = countBlackCells(1, 2);
        expect(response).toBe(2);
    });
    it('Test 6', () => {
        const response = countBlackCells(1, 3);
        expect(response).toBe(3);
    });
    it('Test 7', () => {
        const response = countBlackCells(1, 239);
        expect(response).toBe(239);
    });
    it('Test 8', () => {
        const response = countBlackCells(33, 44);
        expect(response).toBe(86);
    });
    it('Test 9', () => {
        const response = countBlackCells(16, 8);
        expect(response).toBe(30);
    });
    it('Test 10', () => {
        const response = countBlackCells(66666, 88888);
        expect(response).toBe(177774);
    });
});
