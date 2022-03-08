import {countSumOfTwoRepresentations2} from '../src/countSumOfTwoRepresentations2';

describe(countSumOfTwoRepresentations2.name, () => {
    it('Test 1', () => {
        const response = countSumOfTwoRepresentations2(6, 2, 4);
        expect(response).toBe(2);
    });
    it('Test 2', () => {
        const response = countSumOfTwoRepresentations2(6, 3, 3);
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        const response = countSumOfTwoRepresentations2(10, 9, 11);
        expect(response).toBe(0);
    });
    it('Test 4', () => {
        const response = countSumOfTwoRepresentations2(24, 8, 16);
        expect(response).toBe(5);
    });
    it('Test 5', () => {
        const response = countSumOfTwoRepresentations2(24, 12, 12);
        expect(response).toBe(1);
    });
    it('Test 6', () => {
        const response = countSumOfTwoRepresentations2(93, 24, 58);
        expect(response).toBe(12);
    });
    it('Test 7', () => {
        const response = countSumOfTwoRepresentations2(1000000, 490000, 900000);
        expect(response).toBe(10001);
    });
    it('Test 8', () => {
        const response = countSumOfTwoRepresentations2(1000, 1, 1000);
        expect(response).toBe(500);
    });
    it('Test 9', () => {
        const response = countSumOfTwoRepresentations2(1000000000, 999999000, 1000000000);
        expect(response).toBe(0);
    });
    it('Test 10', () => {
        const response = countSumOfTwoRepresentations2(10000, 8, 9991);
        expect(response).toBe(4992);
    });
    it('Test 11', () => {
        const response = countSumOfTwoRepresentations2(2400, 12, 1000000);
        expect(response).toBe(1189);
    });
    it('Test 12', () => {
        const response = countSumOfTwoRepresentations2(88, 27, 58);
        expect(response).toBe(15);
    });
});
