import {encloseInBrackets} from '../src/encloseInBrackets';

describe(encloseInBrackets.name, () => {
    it('Test 1', () => {
        const inputString = 'abacaba';
        const response = encloseInBrackets(inputString);
        expect(response).toBe('(abacaba)');
    });
    it('Test 2', () => {
        const inputString = 'abcdef';
        const response = encloseInBrackets(inputString);
        expect(response).toBe('(abcdef)');
    });
    it('Test 3', () => {
        const inputString = 'aaad';
        const response = encloseInBrackets(inputString);
        expect(response).toBe('(aaad)');
    });
    it('Test 4', () => {
        const inputString = 'if';
        const response = encloseInBrackets(inputString);
        expect(response).toBe('(if)');
    });
    it('Test 5', () => {
        const inputString = 'it';
        const response = encloseInBrackets(inputString);
        expect(response).toBe('(it)');
    });
});
