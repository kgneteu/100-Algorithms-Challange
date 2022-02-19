import { evenDigitsOnly } from '../src/evenDigitsOnly';

describe(evenDigitsOnly.name, () => {
    it('Test 1', () => {
        const n = 248622;
        const response = evenDigitsOnly(n);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const n = 642386;
        const response = evenDigitsOnly(n);
        expect(response).toBe(false);
    });
});
