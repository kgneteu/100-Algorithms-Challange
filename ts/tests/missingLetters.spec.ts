import {missingLetters} from '../src/missingLetters';

describe(missingLetters.name, () => {
    it('Test 1', () => {
        const data = "abce";
        const response = missingLetters(data);
        expect(response).toBe("d");
    });

    it('Test 2', () => {
        const data = "abcdefghjklmno";
        const response = missingLetters(data);
        expect(response).toBe("i");
    });

    it('Test 3', () => {
        const data = "abcdefghijklmnopqrstuvwxyz";
        const response = missingLetters(data);
        expect(response).toBe(undefined);
    });
});
