import {boxBlur} from '../src/boxBlur';

describe(boxBlur.name, () => {
    it('Test 1', () => {
        const data = [
            [1, 1, 1],
            [1, 7, 1],
            [1, 1, 1]];
        const response = boxBlur(data);
        expect(response).toEqual([[1]]);
    });
    it('Test 2', () => {
        const data = [
            [7, 4, 0, 1],
            [5, 6, 2, 2],
            [6, 10, 7, 8],
            [1, 4, 2, 0]
        ];
        const response = boxBlur(data);
        expect(response).toEqual([[5, 4],[4, 4]]);
    });
    it('Test 3', () => {
        const data = [
            [0,18,9],
            [27,9,0],
            [81,63,45]
        ];
        const response = boxBlur(data);
        expect(response).toEqual([[28]]);
    });
    it('Test 4', () => {
        const data = [
            [36,0,18,9,9,45,27],
            [27,0,254,9,0,63,90],
            [81,255,72,45,18,27,0],
            [0,0,9,81,27,18,45],
            [45,45,227,227,90,81,72],
            [45,18,9,255,9,18,45],
            [27,81,36,127,255,72,81]
        ];
        const response = boxBlur(data);
        expect(response).toEqual([
            [82,73,48,25,31],
            [77,80,57,32,32],
            [81,106,88,68,42],
            [44,96,103,89,45],
            [59,113,137,126,80]]);
    });
});
