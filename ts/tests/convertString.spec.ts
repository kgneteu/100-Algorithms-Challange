import { convertString } from '../src/convertString';

describe(convertString.name, () => {
    it('Test 1', () => {
        const s = 'ceoydefthf5iyg5h5yts';
        const t = 'codefights';
        const response = convertString(s, t);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const s = 'addbyca';
        const t = 'abcd';
        const response = convertString(s, t);
        expect(response).toBe(false);
    });
});
