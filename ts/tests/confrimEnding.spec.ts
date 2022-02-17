import { confirmEnding } from '../src/confirmEnding';

describe(confirmEnding.name, () => {
    it('Test 1', () => {
        const str1 = "Abstraction";
        const str2 = "action";
        const response = confirmEnding(str1, str2);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const str1 = "Open sesame";
        const str2 = "pen";
        const response = confirmEnding(str1, str2);
        expect(response).toBe(false);
    });
});
