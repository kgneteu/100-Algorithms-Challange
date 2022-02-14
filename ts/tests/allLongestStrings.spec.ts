import { allLongestStrings } from '../src/allLongestStrings';

describe(allLongestStrings.name, () => {
    it('Test 1', () => {
        const data = ["aba", "aa", "ad", "vcd", "aba"];
        const response = allLongestStrings(data);
        expect(response).toEqual(["aba", "vcd", "aba"]);
    });
});
