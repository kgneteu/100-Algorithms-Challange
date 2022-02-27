import {spiralNumbers} from '../src/spiralNumbers';

describe(spiralNumbers.name, () => {
    it('Test 1', () => {
        const data = 3;
        const response = spiralNumbers(data);
        expect(response).toBe([1][1]);
    });
});
