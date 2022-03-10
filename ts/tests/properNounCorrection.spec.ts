import {properNounCorrection} from '../src/properNounCorrection';

describe(properNounCorrection.name, () => {
    it('Test 1', () => {
        const noun = 'pARiS'
        const response = properNounCorrection(noun);
        expect(response).toBe('Paris');
    });
    it('Test 2', () => {
        const noun = 'John'
        const response = properNounCorrection(noun);
        expect(response).toBe('John');
    });
    it('Test 3', () => {
        const noun = 'mary'
        const response = properNounCorrection(noun);
        expect(response).toBe('Mary');
    });
    it('Test 4', () => {
        const noun = 'a'
        const response = properNounCorrection(noun);
        expect(response).toBe('A');
    });
    it('Test 5', () => {
        const noun = 'B'
        const response = properNounCorrection(noun);
        expect(response).toBe('B');
    });
});
