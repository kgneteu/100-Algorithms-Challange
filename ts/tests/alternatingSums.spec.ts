import {alternatingSums} from '.../src/src/alternatingSums';

describe(alternatingSums.name, () => {
    it('Test 1', () => {
        const data = [50, 60, 60, 45, 70];
        const response = alternatingSums(data);
        expect(response).toEqual([180, 105]);
    });
});
