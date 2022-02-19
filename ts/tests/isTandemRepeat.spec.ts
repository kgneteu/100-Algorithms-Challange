import { isTandemRepeat } from '../src/isTandemRepeat';

describe(isTandemRepeat.name, () => {
    it('Test 1', () => {
        const inputString = 'tandemtandem';
        const response = isTandemRepeat(inputString);
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        const inputString = 'qqq';
        const response = isTandemRepeat(inputString);
        expect(response).toBe(false);
    });

    it('Test 3', () => {
        const inputString = '2w2ww';
        const response = isTandemRepeat(inputString);
        expect(response).toBe(false);
    });
});
