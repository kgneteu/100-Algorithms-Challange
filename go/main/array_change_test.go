import { arrayChange } from '../src/arrayChange';

describe(arrayChange.name, () => {
    it('Test 1', () => {
        const data = [1, 1, 1];
        const response = arrayChange(data);
        expect(response).toBe(3);
    });
});
