import {removeArrayPart} from '../src/removeArrayPart';

describe(removeArrayPart.name, () => {
    it('Test 1', () => {
        const data = [2, 3, 2, 3, 4, 5];
        const response = removeArrayPart(data, 2, 4);
        expect(response).toEqual([2, 3, 5]);
    });
    it('Test 2', () => {
        const data = [2, 4, 10, 1];
        const response = removeArrayPart(data, 0, 2);
        expect(response).toEqual([1]);
    });
    it('Test 3', () => {
        const data = [5, 3, 2, 3, 4];
        const response = removeArrayPart(data, 1, 1);
        expect(response).toEqual([5, 2, 3, 4]);
    });
    it('Test 4', () => {
        const data = [1, 1];
        const response = removeArrayPart(data, 0, 1);
        expect(response).toEqual([]);
    });
    it('Test 5', () => {
        const data = [0, -2, 5, 6];
        const response = removeArrayPart(data, 3, 3);
        expect(response).toEqual([0, -2, 5]);
    });
    it('Test 6', () => {
        const data = [4, 3, 2, 1, 3, 4, 5];
        const response = removeArrayPart(data, 1, 3);
        expect(response).toEqual([4, 3, 4, 5]);
    });
    it('Test 7', () => {
        const data = [24, -40, -30, 30, 80, -94, 18, -56, -31, -68, -94, 67, -28, -2, -10, -83, -41, 43, -27, 0, -39, -83, -76, -59, -32, 87, -31, -55, -35, 20, 67, -78, -32, -90, 72, 15, -59, 4, 69, -82, 2, 96, -99, -78, 93, -68, -39, 68, 49, -9, -49, 77, 81, -55, -16, -9, -11, 80, 29, -6, 90, 83, 16, 68, -62, -73, -5, -86, 0, -48, 88, -35, 87, 12, 92, 12, 46, 57, 71, 91, -55, -62, -24, -78, -40, 30, -97, 64, -9, 40, 93, -67, -26, 53, -81, -7, -16, 14, -70, 88];
        const response = removeArrayPart(data, 19, 98);
        expect(response).toEqual([24, -40, -30, 30, 80, -94, 18, -56, -31, -68, -94, 67, -28, -2, -10, -83, -41, 43, -27, 88]);
    });
    it('Test 8', () => {
        const data = [66, -94, -83, -39, -27, 50, 58, 58, -68, -85, 55, -21, 83, -89, 52, -80, 17, -89, -56, 90, 75, 23, -74, -91, 93, -36, 90, 97, 52, 8, 0, -88, -5, -34, 55, 88, 96, -29, 30, -51, -69, 57, 85, -86, -47, 85, 77, 62, 55, 11, -4, 85, 32, 96, 69, 80, 78, -79, 70, 79, 77, 98, 85, 94, -34, 21, 5, 19, 85, 54, 50, 6, 31, -100, 74, -32, 35, 38, 59, 43, 89, 89, -60, 36, 46, 78, 43, 53, 84, -76, -24, -53, -5, 91, 100, 65, 23, 87, 20, 5];
        const response = removeArrayPart(data, 0, 99);
        expect(response).toEqual([]);
    });
});
