import {firstNotRepeatingCharacter} from '../src/firstNotRepeatingCharacter';

describe(firstNotRepeatingCharacter.name, () => {
    it('Test 1', () => {
        const data = 'abacabad';
        const response = firstNotRepeatingCharacter(data);
        expect(response).toBe('c');
    });

    it('Test 2', () => {
        const data = 'abacabaabacaba';
        const response = firstNotRepeatingCharacter(data);
        expect(response).toBe('_');
    });
});
