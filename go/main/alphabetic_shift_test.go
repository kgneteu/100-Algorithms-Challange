import { alphabeticShift } from '../src/alphabeticShift';

describe(alphabeticShift.name, () => {
    it('Test 1', () => {
        const data = 'crazy';
        const response = alphabeticShift(data);
        expect(response).toBe('dsbaz');
    });
});
