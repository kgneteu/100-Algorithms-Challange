import {stringsRearrangement} from "../src/stringsRearrangement";


describe(stringsRearrangement.name, () => {
    it('Test 1', () => {
        const response = stringsRearrangement(["aba", "bbb", "bab"]);
        expect(response).toBe(false);
    });
});
