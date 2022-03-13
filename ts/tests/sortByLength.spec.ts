import {sortByLength} from '../src/sortByLength';

describe(sortByLength.name, () => {
    it('Test 1', () => {
        const data = ["abc", "", "aaa", "a", "zz"];
        const response = sortByLength(data);
        expect(response).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
    it('Test 2', () => {
        const data = ["zz", "", "bb", "ccc", "cc"]
        const response = sortByLength(data);
        expect(response).toEqual(["", "zz", "bb", "cc", "ccc"]);
    });
    it('Test 3', () => {
        const data = ["abc", "e", "abcd"]
        const response = sortByLength(data);
        expect(response).toEqual(["e", "abc", "abcd"]);
    });
    it('Test 4', () => {
        const data = ["a", "c", "a", "a"]
        const response = sortByLength(data);
        expect(response).toEqual(["a", "c", "a", "a"]);
    });
    it('Test 5', () => {
        const data = ["thitl", "", "sadhxirg", "hx", "ondyxds", "kncor", "sqrg", "hqtchyxku", "rl", "wd"]
        const response = sortByLength(data);
        expect(response).toEqual(["", "hx", "rl", "wd", "sqrg", "thitl", "kncor", "ondyxds", "sadhxirg", "hqtchyxku"]);
    });
});
