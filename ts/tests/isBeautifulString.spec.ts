import {isBeautifulString} from "../src/isBeautifulString";

describe(isBeautifulString.name, () => {
    it('Test 1', () => {
        const response = isBeautifulString("bbbaacdafe");
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = isBeautifulString("aabbb");
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = isBeautifulString("bbc");
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = isBeautifulString("zaa");
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const response = isBeautifulString("bbbaa");
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = isBeautifulString("abcdefghijklmnopqrstuvwxyzz");
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const response = isBeautifulString("abcdefghijklmnopqrstuvwxyz");
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const response = isBeautifulString("fyudhrygiuhdfeis");
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const response = isBeautifulString("zyy");
        expect(response).toBe(false);
    });

});
