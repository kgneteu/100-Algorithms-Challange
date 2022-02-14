import { alphabetSubsequence } from '.../src/src/alphabetSubsequence';

describe(alphabetSubsequence.name, () => {
    it('Test 1', () => {
        const data = 'effg';
        const response = alphabetSubsequence(data);
        expect(response).toBe(false);
    });

    it('Test 2', () => {
        const data = 'ace';
        const response = alphabetSubsequence(data);
        expect(response).toBe(true);
    });
});
