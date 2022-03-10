import {isUnstablePair} from '../src/isUnstablePair';

describe(isUnstablePair.name, () => {
    it('Test 1', () => {
        const data = "";
        const response = isUnstablePair("aa", "AAB");
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = "";
        const response = isUnstablePair("A", "z");
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const data = "";
        const response = isUnstablePair("yyyyyy", "Azzzzzzzzz");
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = "";
        const response = isUnstablePair("mehOu", "mehau");
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const data = "";
        const response = isUnstablePair("aaZ", "AAzz");
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const data = "";
        const response = isUnstablePair("fdsAs", "dzdw");
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = "";
        const response = isUnstablePair("aaad", "aaAdd");
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const data = "";
        const response = isUnstablePair("zzzzzAa123", "zzzzza");
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const data = "";
        const response = isUnstablePair("123za", "123Z");
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const data = "";
        const response = isUnstablePair("qwerTyu123", "qwertyu");
        expect(response).toBe(true);
    });
});
