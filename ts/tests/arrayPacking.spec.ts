import {arrayPacking} from '../src/arrayPacking';

describe(arrayPacking.name, () => {
    it('Test 1', () => {
        const data = [24, 85, 0];
        const response = arrayPacking(data);
        expect(response).toEqual(21784);
    });
    it('Test 2', () => {
        const data = [23, 45, 39];
        const response = arrayPacking(data);
        expect(response).toEqual(2567447);
    });
    it('Test 3', () => {
        const data = [1, 2, 4, 8];
        const response = arrayPacking(data);
        expect(response).toEqual(134480385  );
    });
    it('Test 4', () => {
        const data = [5];
        const response = arrayPacking(data);
        expect(response).toEqual(5);
    });
    it('Test 5', () => {
        const data = [187, 99, 42, 43];
        const response = arrayPacking(data);
        expect(response).toEqual(724198331);
    });
});
