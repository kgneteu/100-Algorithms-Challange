import {largestNumber} from '../src/largestNumber';

describe(largestNumber.name, () => {
    it('Test 1', () => {
        const data = 2;
        const response = largestNumber(data);
        expect(response).toBe(99);
    });
    it('Test 2', () => {
        const data = 1;
        const response = largestNumber(data);
        expect(response).toBe(9);
    });
    it('Test 3', () => {
        const data = 9;
        const response = largestNumber(data);
        expect(response).toBe(999999999);
    });
});
