import {replaceMiddle} from '../src/replaceMiddle';

describe(replaceMiddle.name, () => {
    it('Test 1', () => {
        const data = [7, 2, 2, 5, 10, 7];
        const response = replaceMiddle(data);
        expect(response).toEqual([7, 2, 7, 10, 7]);
    });
    it('Test 2', () => {
        const data = [-5, -5, 10];
        const response = replaceMiddle(data);
        expect(response).toEqual([-5, -5, 10]);
    });
    it('Test 3', () => {
        const data = [45, 23, 12, 33, 12, 453, -234, -45];
        const response = replaceMiddle(data);
        expect(response).toEqual([45, 23, 12, 45, 453, -234, -45]);
    });
    it('Test 4', () => {
        const data = [2, 8];
        const response = replaceMiddle(data);
        expect(response).toEqual([10]);
    });
    it('Test 5', () => {
        const data = [-12, 34, 40, -5, -12, 4, 0, 0, -12];
        const response = replaceMiddle(data);
        expect(response).toEqual([-12, 34, 40, -5, -12, 4, 0, 0, -12]);
    });
    it('Test 6', () => {
        const data = [9, 0, 15, 9];
        const response = replaceMiddle(data);
        expect(response).toEqual([9, 15, 9]);
    });
    it('Test 7', () => {
        const data = [-6, 6, -6];
        const response = replaceMiddle(data);
        expect(response).toEqual([-6, 6, -6]);
    });
    it('Test 8', () => {
        const data = [26, 26, -17];
        const response = replaceMiddle(data);
        expect(response).toEqual([26, 26, -17]);
    });
    it('Test 9', () => {
        const data = [-7, 5, 5, 10];
        const response = replaceMiddle(data);
        expect(response).toEqual([-7, 10, 10]);
    });
});
