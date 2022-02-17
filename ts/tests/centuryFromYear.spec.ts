import { centuryFromYear } from '../src/centuryFromYear';

describe(centuryFromYear.name, () => {
    it('Test 1', () => {
        const data = 1905;
        const response = centuryFromYear(data);
        expect(response).toBe(20);
    });

    it('Test 2', () => {
        const data = 1700;
        const response = centuryFromYear(data);
        expect(response).toBe(17);
    });
});
