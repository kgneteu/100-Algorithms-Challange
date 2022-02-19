import { isLucky } from '../src/isLucky';

describe(isLucky.name, () => {
    it('Test 1', () => {
        const data = 1230;
        const response = isLucky(data);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const data = 239017;
        const response = isLucky(data);
        expect(response).toBe(false);
    });
});
