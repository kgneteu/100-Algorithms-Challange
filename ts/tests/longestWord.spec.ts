import {longestWord} from "../src/longestWord";


describe(longestWord.name, () => {
    it('Test 1', () => {
        const data = "Ready, steady, go!";
        const response = longestWord(data);
        expect(response).toBe("steady");
    });
    it('Test 2', () => {
        const data = "Ready[[[, steady, go!";
        const response = longestWord(data);
        expect(response).toBe("steady");
    });
    it('Test 3', () => {
        const data = "ABCd";
        const response = longestWord(data);
        expect(response).toBe("ABCd");
    });
    it('Test 4', () => {
        const data = "To be or not to be";
        const response = longestWord(data);
        expect(response).toBe("not");
    });
    it('Test 5', () => {
        const data = "A!! AA[]z";
        const response = longestWord(data);
        expect(response).toBe("AA");
    });
    it('Test 6', () => {
        const data = "aa";
        const response = longestWord(data);
        expect(response).toBe("aa");
    });
    it('Test 7', () => {
        const data = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX";
        const response = longestWord(data);
        expect(response).toBe("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX");
    });
    it('Test 8', () => {
        const data = "ab-CDE-fg_hi";
        const response = longestWord(data);
        expect(response).toBe("CDE");
    });
});
