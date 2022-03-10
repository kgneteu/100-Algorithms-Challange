import {isSumOfConsecutive2} from '../src/isSumOfConsecutive2';

describe(isSumOfConsecutive2.name, () => {
    it('Test 1', () => {
        const response = isSumOfConsecutive2(9);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const response = isSumOfConsecutive2(8);
        expect(response).toBe(0);
    });
    it('Test 3', () => {
        const response = isSumOfConsecutive2(15);
        expect(response).toBe(3);
    });
    it('Test 4', () => {
        const response = isSumOfConsecutive2(24);
        expect(response).toBe(1);
    });
    it('Test 5', () => {
        const response = isSumOfConsecutive2(13);
        expect(response).toBe(1);
    });
    it('Test 6', () => {
        const response = isSumOfConsecutive2(25);
        expect(response).toBe(2);
    });
    it('Test 7', () => {
        const response = isSumOfConsecutive2(99);
        expect(response).toBe(5);
    });
});
