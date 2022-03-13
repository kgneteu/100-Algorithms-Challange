import {alphanumericLess} from '../src/alphanumericLess';

describe(alphanumericLess.name, () => {
    it('Test 1', () => {
        const response = alphanumericLess("a", "a1");
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const response = alphanumericLess("ab", "a1");
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        const response = alphanumericLess("b", "a1");
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const response = alphanumericLess("x11y012", "x011y13");
        expect(response).toBe(true);
    });
    it('Test 5', () => {
        const response = alphanumericLess("ab123", "ab34z");
        expect(response).toBe(false);
    });
    it('Test 6', () => {
        const response = alphanumericLess("0000", "000");
        expect(response).toBe(true);
    });
    it('Test 7', () => {
        const response = alphanumericLess("10", "01");
        expect(response).toBe(false);
    });
    it('Test 8', () => {
        const response = alphanumericLess("ab000144", "ab144");
        expect(response).toBe(true);
    });
    it('Test 9', () => {
        const response = alphanumericLess("ab", "a");
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const response = alphanumericLess("000", "0000");
        expect(response).toBe(false);
    });
    it('Test 11', () => {
        const response = alphanumericLess("abc123", "abc123");
        expect(response).toBe(false);
    });
    it('Test 12', () => {
        const response = alphanumericLess("zza1233", "zza1234");
        expect(response).toBe(true);
    });
    it('Test 13', () => {
        const response = alphanumericLess("zzz1", "zzz1");
        expect(response).toBe(false);
    });
    it('Test 14', () => {
        const response = alphanumericLess("00", "a2");
        expect(response).toBe(true);
    });
    it('Test 15', () => {
        const response = alphanumericLess("000000", "a2");
        expect(response).toBe(true);
    });
    it('Test 16', () => {
        const response = alphanumericLess("z00a", "a2");
        expect(response).toBe(false);
    });
    it('Test 17', () => {
        const response = alphanumericLess("x817skjd8309218xn", "x817skjd8309219xn");
        expect(response).toBe(true);
    });
    it('Test 18', () => {
        const response = alphanumericLess("x817skjd8309218xn", "x817skjd8309217xn");
        expect(response).toBe(false);
    });
    it('Test 19', () => {
        const response = alphanumericLess("x817skjd8309218xn", "x817sljd8309217xn");
        expect(response).toBe(true);
    });
    it('Test 20', () => {
        const response = alphanumericLess("x817sljd8309218xn", "x817skjd8309219xn");
        expect(response).toBe(false);
    });
    it('Test 21', () => {
        const response = alphanumericLess("lckj0982871skdj12819", "lckj0982871skdj12820");
        expect(response).toBe(true);
    });
    it('Test 22', () => {
        const response = alphanumericLess("lckj0982871kdj12819", "lckj00982871skdj1282");
        expect(response).toBe(true);
    });
    it('Test 23', () => {
        const response = alphanumericLess("lckj0982871zdj12819", "lckj00982871skdj1282");
        expect(response).toBe(false);
    });
    it('Test 24', () => {
        const response = alphanumericLess("12345678909876543210", "12345678909876543211");
        expect(response).toBe(true);
    });
    it('Test 25', () => {
        const response = alphanumericLess("12345678909876543219", "12345678909876543210");
        expect(response).toBe(false);
    });
    it('Test 26', () => {
        const response = alphanumericLess("kuku123k", "kuku123k5");
        expect(response).toBe(true);
    });
    it('Test 27', () => {
        const response = alphanumericLess("a001b02", "a01b002");
        expect(response).toBe(true);
    });
    it('Test 28', () => {
        const response = alphanumericLess("20", "02");
        expect(response).toBe(false);
    });
});
