import {arrayConversion} from '../src/arrayConversion';

describe(arrayConversion.name, () => {
    it('Test 1', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8];
        const response = arrayConversion(data);
        expect(response).toBe(186);
    });
    it('Test 2', () => {
        const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        const response = arrayConversion(data);
        expect(response).toBe(64);
    });
    it('Test 3', () => {
        const data = [3, 3, 5, 5]
        const response = arrayConversion(data);
        expect(response).toBe(60);
    });
    it('Test 4', () => {
        const data = [-1, 1, 2, 3, 5, 5, 3, 7]
        const response = arrayConversion(data);
        expect(response).toBe(100);
    });
    it('Test 5', () => {
        const data = [99];
        const response = arrayConversion(data);
        expect(response).toBe(99);
    });
    it('Test 6', () => {
        const data = [99, 1];
        const response = arrayConversion(data);
        expect(response).toBe(100);
    });
    it('Test 7', () => {
        const data = [34, 60, -9, -67, -100, -27, 100, 21]
        const response = arrayConversion(data);
        expect(response).toBe(-22511);
    });

});
