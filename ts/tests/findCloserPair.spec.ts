import {findClosestPair} from '../src/findClosestPair';

describe(findClosestPair.name, () => {
    it('Test 1', () => {
        const numbers = [1, 0, 2, 4, 3, 0];
        const sum = 5;
        const response = findClosestPair(numbers, sum);
        expect(response).toEqual(2);
    });

    it('Test 2', () => {
        const numbers = [2, 3, 7];
        const sum = 8;
        const response = findClosestPair(numbers, sum);
        expect(response).toEqual(-1);
    });
});
