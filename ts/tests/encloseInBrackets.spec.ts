import {encloseInBrackets} from '../src/encloseInBrackets';

describe(encloseInBrackets.name, () => {
    it('Test 1', () => {
        const inputString = 'abacaba';
        const response = encloseInBrackets(inputString);
        expect(response).toBe('(abacaba)');
    });
});
