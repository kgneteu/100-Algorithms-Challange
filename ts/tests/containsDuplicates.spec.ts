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
});
