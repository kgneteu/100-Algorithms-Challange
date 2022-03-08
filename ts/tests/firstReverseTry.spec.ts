import {firstReverseTry} from '../src/firstReverseTry';

describe(firstReverseTry.name, () => {
    it('Test 1', () => {
        const data = [1, 2, 3, 4, 5];
        const response = firstReverseTry(data);
        expect(response).toEqual([5, 2, 3, 4, 1]);
    });
    it('Test 2', () => {
        const data: number[] = [];
        const response = firstReverseTry(data);
        expect(response).toEqual([]);
    });
    it('Test 3', () => {
        const data = [239];
        const response = firstReverseTry(data);
        expect(response).toEqual([239]);
    });
    it('Test 4', () => {
        const data = [23, 54, 12, 3, 4, 56, 23, 12, 5, 324];
        const response = firstReverseTry(data);
        expect(response).toEqual([324, 54, 12, 3, 4, 56, 23, 12, 5, 23]);
    });
    it('Test 5', () => {
        const data = [-1, 1];
        const response = firstReverseTry(data);
        expect(response).toEqual([1, -1]);
    });
});
