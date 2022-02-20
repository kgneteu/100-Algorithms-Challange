import {sortByLength} from '../src/sortByLength';

describe(sortByLength.name, () => {
    it('Test 1', () => {
        const data = ["abc",
            "",
            "aaa",
            "a",
            "zz"];

        const response = sortByLength(data);
        expect(response).toEqual(["",
            "a",
            "zz",
            "abc",
            "aaa"]);
    });
});
