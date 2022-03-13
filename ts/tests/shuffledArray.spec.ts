import {shuffledArray} from '../src/shuffledArray';

describe(shuffledArray.name, () => {
    it('Test 1', () => {
        const data = [1, 12, 3, 6, 2];
        const response = shuffledArray(data);
        expect(response).toEqual([1, 2, 3, 6]);
    });
    it('Test 2', () => {
        const data = [1, -3, -5, 7, 2]
        const response = shuffledArray(data);
        expect(response).toEqual([-5, -3, 2, 7]);
    });
    it('Test 3', () => {
        const data = [2, -1, 2, 2, -1]
        const response = shuffledArray(data);
        expect(response).toEqual([-1, -1, 2, 2]);
    });
    it('Test 4', () => {
        const data = [-3, -3];
        const response = shuffledArray(data);
        expect(response).toEqual([-3]);
    });
    it('Test 5', () => {
        const data = [37, 11, -37, -85, -67, 32, 90, -90, 56, 80, 37];
        const response = shuffledArray(data);
        expect(response).toEqual([-90, -85, -67, -37, 11, 37, 37, 56, 80, 90]);
    });
    it('Test 6', () => {
        const data = [18, -73, -39, 65, -65, -52];
        const response = shuffledArray(data);
        expect(response).toEqual([-65, -52, -39, 18, 65]);
    });
});
