import {containsDuplicates} from '../src/containsDuplicates';

describe(containsDuplicates.name, () => {
    it('Test 1', () => {
        const a = [1, 2, 3, 1];
        const response = containsDuplicates(a);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const a = [3, 1];
        const response = containsDuplicates(a);
        expect(response).toBe(false);
    });

    it('Test 3', () => {
        const a = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
        const response = containsDuplicates(a);
        expect(response).toBe(true);
    });

    it('Test 4', () => {
        const a: number[] = [];
        const response = containsDuplicates(a);
        expect(response).toBe(false);
    });

    it('Test 5', () => {
        const a = [1];
        const response = containsDuplicates(a);
        expect(response).toBe(false);
    });

    it('Test 6', () => {
        const a = [-1200000005, -1200000005];
        const response = containsDuplicates(a);
        expect(response).toBe(true);
    });
});
