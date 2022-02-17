import { compareIntegers } from '../src/compareIntegers';

describe(compareIntegers.name, () => {
    it('Test 1', () => {
        const a = "12";
        const b = "13"
        const response = compareIntegers(a, b);
        expect(response).toBe("less");
    });

    it('Test 2', () => {
        const a = "875";
        const b = "799"
        const response = compareIntegers(a, b);
        expect(response).toBe("greater");
    });

    it('Test 3', () => {
        const a = "1000";
        const b = "1000"
        const response = compareIntegers(a, b);
        expect(response).toBe("equal");
    });
});
