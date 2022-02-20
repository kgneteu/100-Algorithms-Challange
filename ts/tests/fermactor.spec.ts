import {fermactor} from '../src/fermactor';

describe(fermactor.name, () => {
    it('Test 1', () => {
        const n = 15;
        const response = fermactor(n);
        expect(response).toEqual([4, 1]);
    });
});
