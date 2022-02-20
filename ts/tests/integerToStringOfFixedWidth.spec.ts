import {integerToStringOfFixedWidth} from '../src/integerToStringOfFixedWidth';

describe(integerToStringOfFixedWidth.name, () => {
    it('Test 1', () => {
        const number = 1234;
        const width = 2;
        const response = integerToStringOfFixedWidth(number, width);
        expect(response).toBe('34');
    });

    it('Test 2', () => {
        const number = 1234;
        const width = 4;
        const response = integerToStringOfFixedWidth(number, width);
        expect(response).toBe('1234');
    });

    it('Test 3', () => {
        const number = 1234;
        const width = 5;
        const response = integerToStringOfFixedWidth(number, width);
        expect(response).toBe('01234');
    });
});
