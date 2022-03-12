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
        const number = 0;
        const width = 1;
        const response = integerToStringOfFixedWidth(number, width);
        expect(response).toBe('0');
    });

    it('Test 4', () => {
        const number = 89;
        const width = 4;
        const response = integerToStringOfFixedWidth(number, width);
        expect(response).toBe("0089");
    });

    it('Test 5', () => {
        const number = 23456;
        const width = 4;
        const response = integerToStringOfFixedWidth(number, width);
        expect(response).toBe('3456');
    });
});
