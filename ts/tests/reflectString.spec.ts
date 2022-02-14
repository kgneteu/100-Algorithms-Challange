import { reflectString } from '../src/reflectString';

describe(reflectString.name, () => {
    it('Test 1', () => {
        const inputString = 'name';
        const response = reflectString(inputString);
        expect(response).toBe('mznv');
    });
});
