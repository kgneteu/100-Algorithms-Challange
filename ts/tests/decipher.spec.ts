import {decipher} from '../src/decipher';

describe(decipher.name, () => {
    it('Test 1', () => {
        const data = "";
        const response = decipher(data);
        expect(response).toBe("");
    });
});
