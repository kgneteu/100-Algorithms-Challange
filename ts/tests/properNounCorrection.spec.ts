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
});
