import {adaNumber} from '../src/adaNumber';

describe(adaNumber.name, () => {
    it('Test 1', () => {
        const data = "123_456_789";
        const response = adaNumber(data);
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        const data = "16#123abc#";
        const response = adaNumber(data);
        expect(response).toBe(true);
    });
    it('Test 3', () => {
        const data = "10#123abc#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 4', () => {
        const data = "10#10#123ABC#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 5', () => {
        const data = "10#0#";
        const response = adaNumber(data);
        expect(response).toBe(true);
    });
    it('Test 6', () => {
        const data = "10##";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 7', () => {
        const data = "16#1234567890ABCDEFabcdef#";
        const response = adaNumber(data);
        expect(response).toBe(true);
    });
    it('Test 8', () => {
        const data = "1600#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 9', () => {
        const data = "7#???#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 10', () => {
        const data = "4#4#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 11', () => {
        const data = "3454235ab534";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 12', () => {
        const data = "1#0#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 13', () => {
        const data = "1_#0_#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 14', () => {
        const data = "17#ac#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 15', () => {
        const data = "2#10110#";
        const response = adaNumber(data);
        expect(response).toBe(true);
    });
    it('Test 16', () => {
        const data = "2#10110";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 17', () => {
        const data = "#2#10110";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 18', () => {
        const data = "#2#10110#";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
    it('Test 19', () => {
        const data = "9##";
        const response = adaNumber(data);
        expect(response).toBe(false);
    });
});
