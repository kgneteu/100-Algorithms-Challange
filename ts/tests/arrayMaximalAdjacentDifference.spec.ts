import {arrayMaximalAdjacentDifference} from '../src/arrayMaximalAdjacentDifference';

describe(arrayMaximalAdjacentDifference.name, () => {
    it('Test 1', () => {
        const data = [2, 4, 1, 0];
        const response = arrayMaximalAdjacentDifference(data);
        expect(response).toBe(3);
    });

    it('Test 2', () => {
        const data = [2, 9, 1, 0];
        const response = arrayMaximalAdjacentDifference(data);
        expect(response).toBe(8);
    });
});
